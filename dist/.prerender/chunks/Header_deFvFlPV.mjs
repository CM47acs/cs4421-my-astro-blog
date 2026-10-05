import { E as createAstro, _ as addAttribute, c as renderComponent, d as renderSlot, h as maybeRenderHead, m as renderTemplate, t as spreadAttributes, w as unescapeHTML } from "./server_BjQ1Reo4.mjs";
import { $ as AstroError, d as FontFamilyNotFound, v as ImageMissingAlt } from "./errors-data_EBW0O6w0.mjs";
import { t as createComponent } from "./astro-component_yYUJZTzc.mjs";
import { t as createConsoleLogger } from "./console_BS3552R5.mjs";
import { n as SITE_TITLE, s as level } from "./consts_DHE5fnY1.mjs";
import { a as inferRemoteSize$1, c as isESMImportedImage, l as isRemoteImage, n as getImage$1, t as getConfiguredImageService, u as resolveSrc } from "./assets_CAGz8gOE.mjs";
import "./compiler_UQTWOUMp.mjs";
import * as mime from "mrmime";
//#region node_modules/astro/components/Image.astro
createAstro("https://astro.build");
var $$Image = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Image;
	const props = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	if (typeof props.width === "string") props.width = Number.parseInt(props.width);
	if (typeof props.height === "string") props.height = Number.parseInt(props.height);
	if ((props.layout ?? imageConfig.layout ?? "none") !== "none") {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	const image = await getImage(props);
	const additionalAttributes = {};
	if (image.srcSet.values.length > 0) additionalAttributes.srcset = image.srcSet.attribute;
	const { class: className, ...attributes } = {
		...additionalAttributes,
		...image.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/node_modules/astro/components/Image.astro", void 0);
//#endregion
//#region node_modules/astro/components/Picture.astro
createAstro("https://astro.build");
var $$Picture = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Picture;
	const defaultFormats = ["webp"];
	const defaultFallbackFormat = "png";
	const specialFormatsFallback = [
		"gif",
		"svg",
		"jpg",
		"jpeg"
	];
	const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
	if (props.alt === void 0 || props.alt === null) throw new AstroError(ImageMissingAlt);
	const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
	if (scopedStyleClass) {
		if (pictureAttributes.class) pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
		else pictureAttributes.class = scopedStyleClass;
	}
	const useResponsive = (props.layout ?? imageConfig.layout ?? "none") !== "none";
	if (useResponsive) {
		props.layout ??= imageConfig.layout;
		props.fit ??= imageConfig.objectFit ?? "cover";
		props.position ??= imageConfig.objectPosition ?? "center";
	} else if (imageConfig.objectFit || imageConfig.objectPosition) {
		props.fit ??= imageConfig.objectFit;
		props.position ??= imageConfig.objectPosition;
	}
	for (const key in props) if (key.startsWith("data-astro-cid")) pictureAttributes[key] = props[key];
	const originalSrc = await resolveSrc(props.src);
	if (props.inferSize && isRemoteImage(originalSrc)) {
		const remoteSize = await inferRemoteSize(originalSrc);
		delete props.inferSize;
		props.width ??= remoteSize.width;
		props.height ??= remoteSize.height;
	}
	const optimizedImages = await Promise.all(formats.map(async (format) => await getImage({
		...props,
		src: originalSrc,
		format,
		widths: props.widths,
		densities: props.densities
	})));
	const clonedSrc = isESMImportedImage(originalSrc) ? originalSrc.clone ?? originalSrc : originalSrc;
	let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
	if (!fallbackFormat && isESMImportedImage(clonedSrc) && specialFormatsFallback.includes(clonedSrc.format)) resultFallbackFormat = clonedSrc.format;
	const fallbackImage = await getImage({
		...props,
		format: resultFallbackFormat,
		widths: props.widths,
		densities: props.densities
	});
	const imgAdditionalAttributes = {};
	const sourceAdditionalAttributes = {};
	if (props.sizes) sourceAdditionalAttributes.sizes = props.sizes;
	if (fallbackImage.srcSet.values.length > 0) imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
	const { class: className, ...attributes } = {
		...imgAdditionalAttributes,
		...fallbackImage.attributes
	};
	return renderTemplate`${maybeRenderHead($$result)}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
		const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
		return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
	})}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}></picture>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/node_modules/astro/components/Picture.astro", void 0);
//#endregion
//#region \0virtual:astro:assets/fonts/internal
var componentDataByCssVariable = /* @__PURE__ */ new Map([]);
//#endregion
//#region node_modules/astro/dist/assets/fonts/core/filter-preloads.js
function filterPreloads(data, preload) {
	if (!preload) return null;
	if (preload === true) return data;
	return data.filter(({ weight, style, subset }) => preload.some((p) => {
		if (p.weight !== void 0 && weight !== void 0 && !checkWeight(p.weight.toString(), weight)) return false;
		if (p.style !== void 0 && p.style !== style) return false;
		if (p.subset !== void 0 && p.subset !== subset) return false;
		return true;
	}));
}
function checkWeight(input, target) {
	const trimmedInput = input.trim();
	if (trimmedInput.includes(" ")) return trimmedInput === target;
	if (target.includes(" ")) {
		const [a, b] = target.split(" ");
		const parsedInput = Number.parseInt(input);
		return parsedInput >= Number.parseInt(a) && parsedInput <= Number.parseInt(b);
	}
	return input === target;
}
//#endregion
//#region node_modules/astro/components/Font.astro
createAstro("https://astro.build");
var $$Font = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Font;
	const { cssVariable, preload = false } = Astro.props;
	const data = componentDataByCssVariable.get(cssVariable);
	if (!data) throw new AstroError({
		...FontFamilyNotFound,
		message: FontFamilyNotFound.message(cssVariable)
	});
	const filteredPreloadData = filterPreloads(data.preloads, preload);
	return renderTemplate`<style>${unescapeHTML(data.css)}</style>${filteredPreloadData?.map(({ url, type }) => renderTemplate`<link rel="preload"${addAttribute(url, "href")} as="font"${addAttribute(`font/${type}`, "type")} crossorigin>`)}`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/node_modules/astro/components/Font.astro", void 0);
//#endregion
//#region node_modules/astro/dist/assets/fonts/infra/remote-runtime-font-file-url-resolver.js
var RemoteRuntimeFontFileUrlResolver = class {
	#urls;
	#address;
	constructor({ urls, address }) {
		this.#urls = urls;
		this.#address = address;
	}
	resolve(url, requestUrl) {
		if (!this.#urls.has(url)) return null;
		if (!url.startsWith("/")) {
			if (this.#address) url = new URL(url).pathname;
			else return url;
		}
		if (this.#address) return `http://${this.#address.family === "IPv6" ? `[${this.#address.address}]` : this.#address.address}:${this.#address.port}${url}`;
		if (requestUrl) return `${requestUrl.origin}${url}`;
		throw new Error("Server address unavailable, this should not happen. Open an issue.");
	}
};
new RemoteRuntimeFontFileUrlResolver({
	urls: /* @__PURE__ */ new Set([]),
	address: null
});
//#endregion
//#region \0astro:assets
var _astroLogger = createConsoleLogger({ level });
var _runtimeLogger = {
	info: (message) => _astroLogger.info(null, message),
	warn: (message) => _astroLogger.warn(null, message),
	error: (message) => _astroLogger.error(null, message)
};
var assetQueryParams = void 0;
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: assetQueryParams,
	enumerable: false,
	configurable: true
});
var inferRemoteSize = async (url) => {
	return (await getConfiguredImageService()).getRemoteSize?.(url, imageConfig, _runtimeLogger) ?? inferRemoteSize$1(url, imageConfig);
};
var getImage = async (options) => await getImage$1(options, imageConfig, _runtimeLogger);
//#endregion
//#region src/assets/blog-placeholder-1.jpg
var blog_placeholder_1_default = new Proxy({
	"src": "/_astro/blog-placeholder-1.Bx0Zcyzv.jpg",
	"width": 960,
	"height": 480,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/assets/blog-placeholder-1.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/assets/blog-placeholder-1.jpg");
		globalThis.astroAsset.recordReferencedImage?.("C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/assets/blog-placeholder-1.jpg");
	}
	return target[name];
} });
//#endregion
//#region src/components/BaseHead.astro
createAstro("https://astro.build");
var $$BaseHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseHead;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const { title, description, image = blog_placeholder_1_default } = Astro.props;
	return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro.site), "href")}><meta name="generator"${addAttribute(Astro.generator, "content")}>${renderComponent($$result, "Font", $$Font, {
		"cssVariable": "--font-atkinson",
		"preload": true
	})}<!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro.url), "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image">`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/components/BaseHead.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const today = /* @__PURE__ */ new Date();
	return renderTemplate`${maybeRenderHead($$result)}<footer data-astro-cid-jo6i4kqk>&copy; ${today.getFullYear()} Your name here. All rights reserved.<div class="social-links" data-astro-cid-jo6i4kqk><a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-jo6i4kqk><span class="sr-only" data-astro-cid-jo6i4kqk>Follow Astro on Mastodon</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/mastodon" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-jo6i4kqk></path></svg></a><a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-jo6i4kqk><span class="sr-only" data-astro-cid-jo6i4kqk>Follow Astro on Twitter</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/twitter" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-jo6i4kqk></path></svg></a><a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-jo6i4kqk><span class="sr-only" data-astro-cid-jo6i4kqk>Go to Astro's GitHub repo</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" astro-icon="social/github" data-astro-cid-jo6i4kqk><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-jo6i4kqk></path></svg></a></div></footer>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/HeaderLink.astro
createAstro("https://astro.build");
var $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$HeaderLink;
	const { href, class: className, ...props } = Astro2.props;
	const pathname = Astro2.url.pathname.replace("/", "");
	const subpath = pathname.match(/[^\/]+/g);
	const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-evkijfd6>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/components/HeaderLink.astro", void 0);
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header data-astro-cid-nen7h5rs><nav data-astro-cid-nen7h5rs><h2 data-astro-cid-nen7h5rs><a href="/" data-astro-cid-nen7h5rs>${SITE_TITLE}</a></h2><div class="internal-links" data-astro-cid-nen7h5rs>${renderComponent($$result, "HeaderLink", $$HeaderLink, {
		"href": "/",
		"data-astro-cid-nen7h5rs": true
	}, { "default": ($$result) => renderTemplate`Home` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, {
		"href": "/blog",
		"data-astro-cid-nen7h5rs": true
	}, { "default": ($$result) => renderTemplate`Blog` })}${renderComponent($$result, "HeaderLink", $$HeaderLink, {
		"href": "/about",
		"data-astro-cid-nen7h5rs": true
	}, { "default": ($$result) => renderTemplate`About` })}</div><div class="social-links" data-astro-cid-nen7h5rs><a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-nen7h5rs><span class="sr-only" data-astro-cid-nen7h5rs>Follow Astro on Mastodon</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-nen7h5rs><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-nen7h5rs></path></svg></a><a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-nen7h5rs><span class="sr-only" data-astro-cid-nen7h5rs>Follow Astro on Twitter</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-nen7h5rs><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-nen7h5rs></path></svg></a><a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-nen7h5rs><span class="sr-only" data-astro-cid-nen7h5rs>Go to Astro's GitHub repo</span><svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-nen7h5rs><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-nen7h5rs></path></svg></a></div></nav></header>`;
}, "C:/Users/penic/OneDrive/Documents/cs4421/my-astro-blog/src/components/Header.astro", void 0);
//#endregion
export { $$Image as i, $$Footer as n, $$BaseHead as r, $$Header as t };
