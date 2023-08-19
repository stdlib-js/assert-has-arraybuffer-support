"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=f(function(w,i){
var s=typeof ArrayBuffer=="function"?ArrayBuffer:null;i.exports=s
});var o=f(function(B,n){
var y=require('@stdlib/assert-is-arraybuffer/dist'),c=require('@stdlib/array-float64/dist'),a=u();function v(){var e,r,t;if(typeof a!="function")return!1;try{t=new a(16),e=y(t)&&typeof a.isView=="function",e&&(r=new c(t),r[0]=-3.14,r[1]=NaN,e=e&&a.isView(r)&&t.byteLength===16&&r[0]===-3.14&&r[1]!==r[1])}catch(p){e=!1}return e}n.exports=v
});var l=o();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
