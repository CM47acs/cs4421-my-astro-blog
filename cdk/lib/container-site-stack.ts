import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as path from 'node:path';

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

    service.targetGroup.configureHealthCheck({
      path: '/api/health',
      healthyHttpCodes: '200',
    });

    new cdk.CfnOutput(this, 'SiteUrl', {
      value: `http://${service.loadBalancer.loadBalancerDnsName}`,
    });
  }
}
