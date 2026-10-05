import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getCollection } from "./_astro_content_CIhEC2xn.mjs";
import { n as SITE_TITLE, t as SITE_DESCRIPTION } from "./consts_DHE5fnY1.mjs";
import rss from "@astrojs/rss";
//#region src/pages/blog/rss.xml.js
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`
		}))
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/blog/rss.xml@_@js
var page = () => rss_xml_exports;
//#endregion
export { page };
