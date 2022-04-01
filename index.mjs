// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";var e="function"==typeof ArrayBuffer?ArrayBuffer:null,n=r,f=t,i=e;var s=function(){var r,t,e;if("function"!=typeof i)return!1;try{e=new i(16),(r=n(e)&&"function"==typeof i.isView)&&((t=new f(e))[0]=-3.14,t[1]=NaN,r=r&&i.isView(t)&&16===e.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r};export{s as default};
//# sourceMappingURL=index.mjs.map
