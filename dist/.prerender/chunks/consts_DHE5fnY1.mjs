//#region \0virtual:astro:logger
var level = "info";
var VALID_INPUT_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"apng",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var VALID_SUPPORTED_FORMATS = [
	"jpeg",
	"jpg",
	"png",
	"tiff",
	"webp",
	"gif",
	"svg",
	"avif"
];
var DEFAULT_OUTPUT_FORMAT = "webp";
var DEFAULT_HASH_PROPS = [
	"src",
	"width",
	"height",
	"format",
	"quality",
	"fit",
	"position",
	"background"
];
//#endregion
//#region src/consts.ts
var SITE_TITLE = "Astro Blog";
var SITE_DESCRIPTION = "Welcome to my website!";
//#endregion
export { VALID_INPUT_FORMATS as a, DEFAULT_OUTPUT_FORMAT as i, SITE_TITLE as n, VALID_SUPPORTED_FORMATS as o, DEFAULT_HASH_PROPS as r, level as s, SITE_DESCRIPTION as t };
