import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { E as createAstro, c as renderComponent, d as renderSlot, g as renderHead, m as renderTemplate } from "./server_BjQ1Reo4.mjs";
import { t as createComponent } from "./astro-component_yYUJZTzc.mjs";
import { n as render, t as getCollection } from "./_astro_content_CIhEC2xn.mjs";
import "./compiler_UQTWOUMp.mjs";
import { i as $$Image, n as $$Footer, r as $$BaseHead, t as $$Header } from "./Header_deFvFlPV.mjs";
import { t as $$FormattedDate } from "./FormattedDate_BBlNmYzW.mjs";
//#region src/layouts/BlogPost.astro
createAstro("https://astro.build");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title, description, pubDate, updatedDate, heroImage } = Astro.props;
	return renderTemplate`<html lang="en" data-astro-cid-tldeq5d5><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": title,
		"description": description,
		"data-astro-cid-tldeq5d5": true
	})}${renderHead($$result)}</head><body data-astro-cid-tldeq5d5>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-tldeq5d5": true })}<main data-astro-cid-tldeq5d5><article data-astro-cid-tldeq5d5><div class="hero-image" data-astro-cid-tldeq5d5>${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 1020,
		"height": 510,
		"src": heroImage,
		"alt": "",
		"data-astro-cid-tldeq5d5": true
	})}`}</div><div class="prose" data-astro-cid-tldeq5d5><div class="title" data-astro-cid-tldeq5d5><div class="date" data-astro-cid-tldeq5d5>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": pubDate,
		"data-astro-cid-tldeq5d5": true
	})}${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-tldeq5d5>Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": updatedDate,
		"data-astro-cid-tldeq5d5": true
	})}</div>`}</div><h1 data-astro-cid-tldeq5d5>${title}</h1><hr data-astro-cid-tldeq5d5></div>${renderSlot($$result, $$slots["default"])}</div></article></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-tldeq5d5": true })}</body></html>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/layouts/BlogPost.astro", void 0);
//#endregion
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://astro.build");
async function getStaticPaths() {
	return (await getCollection("blog")).map((post) => ({
		params: { slug: post.id },
		props: post
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const post = Astro.props;
	const { Content } = await render(post);
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/pages/blog/[...slug].astro", void 0);
var $$file = "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
