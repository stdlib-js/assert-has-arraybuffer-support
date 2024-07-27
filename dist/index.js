"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=f(function(w,i){"use strict";var s=typeof ArrayBuffer=="function"?ArrayBuffer:null;i.exports=s});var o=f(function(B,n){"use strict";var y=require("@stdlib/assert-is-arraybuffer"),c=require("@stdlib/array-float64"),a=u();function v(){var e,r,t;if(typeof a!="function")return!1;try{t=new a(16),e=y(t)&&typeof a.isView=="function",e&&(r=new c(t),r[0]=-3.14,r[1]=NaN,e=e&&a.isView(r)&&t.byteLength===16&&r[0]===-3.14&&r[1]!==r[1])}catch(p){e=!1}return e}n.exports=v});var l=o();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
