/**
 * @module Integration
 *
 */
declare const _default: (_Option?: Option) => AstroIntegration;
export default _default;
import type Option from "../Interface/Option.js";
import type { AstroIntegration } from "astro";
export declare const Default: Omit<{} & {
    CSS: {
        comments: false;
        forceMediaMerge: true;
        restructure: false;
    };
    HTML: {
        caseSensitive: true;
        collapseInlineTagWhitespace: false;
        collapseWhitespace: true;
        continueOnParseError: true;
        html5: true;
        ignoreCustomComments: RegExp[];
        includeAutoGeneratedTags: true;
        keepClosingSlash: true;
        minifyCSS: true;
        minifyJS: true;
        minifyURLs: false;
        noNewlinesBeforeTagClose: true;
        preventAttributesEscaping: false;
        processConditionalComments: false;
        processScripts: string[];
        quoteCharacter: string;
        removeAttributeQuotes: true;
        removeComments: true;
        removeScriptTypeAttributes: true;
        removeStyleLinkTypeAttributes: true;
        removeTagWhitespace: false;
        sortAttributes: true;
        sortClassName: true;
        trimCustomFragments: true;
        useShortDoctype: false;
    };
    Image: {
        avif: {
            chromaSubsampling: string;
            effort: number;
        };
        gif: {
            effort: number;
        };
        jpeg: {
            chromaSubsampling: string;
            mozjpeg: true;
            trellisQuantisation: true;
            overshootDeringing: true;
            optimiseScans: true;
        };
        png: {
            compressionLevel: number;
            palette: true;
        };
        raw: {};
        tiff: {
            compression: string;
        };
        webp: {
            effort: number;
        };
    };
    JavaScript: {
        ecma: 5;
        enclose: false;
        keep_classnames: false;
        keep_fnames: false;
        ie8: false;
        module: false;
        safari10: false;
        toplevel: false;
        format: {
            comments: false;
        };
    };
    SVG: {
        multipass: true;
        js2svg: {
            indent: number;
            pretty: false;
        };
        plugins: "preset-default"[];
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Exclude: false;
    Files: string;
    Action: Omit<{} & {
        Failed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: (On: import("files-pipe/Target/Interface/File.js").default) => Promise<import("files-pipe/Target/Interface/Buffer.js").Type>;
        Fulfilled: (Plan: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    }, "__proto__">;
    Logger: 2;
}, "__proto__">;
export declare const Search: string;
export declare const Merge: import("typescript-esbuild/Target/Interface/Merge.js").default<import("typescript-esbuild/Target/Interface/Merge.js").Generic>;
export declare const sharp: typeof import("sharp");
