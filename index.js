// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,n="function"==typeof e?e.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,f,a,y,i;if(null==t)return o.call(t);f=t[n],i=n,e=null!=(y=t)&&r.call(y,i);try{t[n]=void 0}catch(r){return o.call(t)}return a=o.call(t),e?t[n]=f:delete t[n],a}:function(t){return o.call(t)},a="function"==typeof ArrayBuffer,y="function"==typeof Float64Array,i="function"==typeof Float64Array?Float64Array:null,u="function"==typeof Float64Array?Float64Array:void 0,l=function(){var t,o,r;if("function"!=typeof i)return!1;try{o=new i([1,3.14,-3.14,NaN]),r=o,t=(y&&r instanceof Float64Array||"[object Float64Array]"===f(r))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?u:function(){throw new Error("not implemented")},c="function"==typeof ArrayBuffer?ArrayBuffer:null;return function(){var t,o,r,e;if("function"!=typeof c)return!1;try{r=new c(16),e=r,(t=(a&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===f(e))&&"function"==typeof c.isView)&&((o=new l(r))[0]=-3.14,o[1]=NaN,t=t&&c.isView(o)&&16===r.byteLength&&-3.14===o[0]&&o[1]!=o[1])}catch(o){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).hasArrayBufferSupport=o();
//# sourceMappingURL=index.js.map
