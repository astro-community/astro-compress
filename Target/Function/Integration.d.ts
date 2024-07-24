/**
 * @module Integration
 *
 */
export declare let System: string;
declare const _default: Interface;
export default _default;
import type Interface from "../Interface/Integration.js";
import type Action from "@playform/pipe/Target/Interface/Action.js";
export declare const Default: {
    Path: string;
    Cache: {
        Search: string;
        Folder: string;
    };
    Logger: 2;
    Action: {
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Passed: ({ Before, Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Accomplished: ({ Input, Before, After }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<any>;
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
    };
    File: string;
    Exclude: false;
    CSS: {
        csso: import("../Interface/CSS/csso.js").default;
        lightningcss: import("../Interface/CSS/lightningcss.js").default;
    };
    HTML: {
        "html-minifier-terser": {
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
    };
    Image: {
        sharp: import("../Interface/Image/sharp.js").default;
    };
    JavaScript: {
        terser: {
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
    };
    SVG: {
        svgo: {
            multipass: true;
            js2svg: {
                indent: number;
                pretty: false;
            };
            plugins: "preset-default"[];
        };
    };
    Map: import("../Interface/Map.js").default;
    Parser: import("../Interface/Parser.js").default;
};
export declare const Search: string;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
}>>;
export declare let _Action: Action;
