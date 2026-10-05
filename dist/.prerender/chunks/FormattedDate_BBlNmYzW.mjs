import { E as createAstro, _ as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_BjQ1Reo4.mjs";
import { t as createComponent } from "./astro-component_yYUJZTzc.mjs";
import "./compiler_UQTWOUMp.mjs";
//#region src/components/FormattedDate.astro
createAstro("https://astro.build");
var $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FormattedDate;
	const { date } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>${date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</time>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/components/FormattedDate.astro", void 0);
//#endregion
export { $$FormattedDate as t };
