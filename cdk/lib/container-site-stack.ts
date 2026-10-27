import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as path from 'node:path';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

export class ContainerSiteStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'SiteVpc', {
      maxAzs: 2,
      natGateways: 0,
      subnetConfiguration: [
        {
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    const cluster = new ecs.Cluster(this, 'SiteCluster', { vpc });
    const image = ecs.ContainerImage.fromAsset(path.resolve(__dirname, '../..'));

    const service = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'SiteService', {
      cluster,
      cpu: 512,
      memoryLimitMiB: 1024,
      desiredCount: 1,
      assignPublicIp: true,
      taskImageOptions: {
        image,
        containerPort: 4321,
        environment: {
          HOST: '0.0.0.0',
          NODE_ENV: 'production',
          PORT: '4321',
        },
      },
    });
const certificate = acm.Certificate.fromCertificateArn(
  this,
  'SiteCertificate',
  'arn:aws:acm:us-east-1:438456518186:certificate/8d7d3141-9900-472a-ac60-9eb2809a8944'
);


const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
  domainNames: ['www.walterworm.monster'],
  certificate,
  defaultBehavior: {
    origin: new origins.LoadBalancerV2Origin(service.loadBalancer, {
      protocolPolicy: cloudfront.OriginProtocolPolicy.HTTP_ONLY,
    }),
    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
    allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
  },
});

new cdk.CfnOutput(this, 'CloudFrontUrl', {
  value: `https://${distribution.distributionDomainName}`,
});

    service.targetGroup.configureHealthCheck({
      path: '/api/health',
      healthyHttpCodes: '200',
    });

    new cdk.CfnOutput(this, 'SiteUrl', {
      value: `http://${service.loadBalancer.loadBalancerDnsName}`,
    });
  }
}
