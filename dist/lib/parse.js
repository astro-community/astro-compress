import y from"fast-glob";import f from"fs";import c from"./format-bytes.js";var x=async(p,l=2,m="",s,d=async o=>o,u=async o=>await f.promises.readFile(o,"utf-8"))=>{const o=await y(p),t={files:0,total:0};let r=new Set;if(typeof s<"u")if(s instanceof Array)for(const e of s)r.add(e);else r.add(s);for(const e of r){if(typeof e=="string")for(const i of o)i.match(e)&&o.splice(o.indexOf(i),1);if(typeof e=="function")for(const i of o)e(i)&&o.splice(o.indexOf(i),1)}for(const e of o)try{const i=(await f.promises.stat(e)).size,a=await d(await u(e));if(!a)continue;if(i>Buffer.byteLength(a)){await f.promises.writeFile(e,a,"utf-8");const n=(await f.promises.stat(e)).size;t.files++,t.total+=i-n,l>1&&console.info(`\x1B[32mCompressed ${e.replace(/^.*[\\\/]/,"")} for ${await c(i-n)} (${((i-n)/i*100).toFixed(2)}% reduction).\x1B[39m`)}}catch{console.log(`Error: Cannot compress file ${e}!`)}l>0&&t.files>0&&console.info(`\x1B[32mSuccessfully compressed a total of ${t.files} ${m.toUpperCase()} ${t.files===1?"file":"files"} for ${await c(t.total)}.\x1B[39m`)};export{x as default};
