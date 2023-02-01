// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-arraybuffer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";var e="function"==typeof ArrayBuffer?ArrayBuffer:null;function n(){var n,f,i;if("function"!=typeof e)return!1;try{i=new e(16),(n=t(i)&&"function"==typeof e.isView)&&((f=new r(i))[0]=-3.14,f[1]=NaN,n=n&&e.isView(f)&&16===i.byteLength&&-3.14===f[0]&&f[1]!=f[1])}catch(t){n=!1}return n}export{n as default};
//# sourceMappingURL=index.mjs.map
