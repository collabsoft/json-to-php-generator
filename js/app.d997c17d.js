(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],p=0,h=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://jacobdekeizer.github.io/json-to-php-generator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2aa8":function(t,e,n){},"51a1":function(t,e,n){"use strict";var r=n("2aa8"),s=n.n(r);s.a},"7d32":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container mx-auto"},[n("router-view"),n("Footer")],1)])},a=[],i=n("d4ec"),o=n("2caf"),l=n("262e"),c=n("9ab4"),u=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 text-gray-500 font-bold"},[n("div",{staticClass:"bg-gray-100 items-center leading-none rounded flex inline-flex float-right"},[n("span",{staticClass:"font-semibold mr-2 text-left flex-auto"},[t._v(" Made by Jacob de Keizer ")]),n("span",{staticClass:"flex rounded-full"},[n("a",{attrs:{href:"https://github.com/jacobdekeizer/json-to-php-generator",target:"_blank"}},[n("svg",{staticClass:"float-left",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])])])])},h=[],f=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);f=Object(c["b"])([u["a"]],f);var b=f,y=b,d=n("2877"),g=Object(d["a"])(y,p,h,!1,null,null,null),v=g.exports,O=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);O=Object(c["b"])([Object(u["a"])({components:{Footer:v}})],O);var j=O,m=j,k=Object(d["a"])(m,s,a,!1,null,null,null),C=k.exports,P=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card",[n("h1",{staticClass:"text-gray-700 text-sm font-bold text-3xl"},[t._v(" JSON to PHP class converter ")]),n("div",{staticClass:"mt-0 mb-6 text-gray-600"},[t._v(" Generate PHP classes from json ")]),n("TextArea",{staticClass:"mb-4",attrs:{id:"json-input",label:"Json input"},on:{"on-value-change":t.onJsonContentChange}}),n("h2",{staticClass:"text-gray-700 text-sm font-bold text-2xl mb-2"},[t._v("Settings")]),n("Settings",{attrs:{settings:t.settings}})],1),this.code?n("Card",[n("Code",{attrs:{code:t.code}})],1):t._e(),this.errorMessage?n("Card",[n("Alert",{attrs:{message:t.errorMessage}})],1):t._e()],1)},x=[],T=(n("d3b7"),n("25f0"),n("bee2")),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[this.message?n("div",{staticClass:"bg-red-100 border-l-4 border-red-500 text-red-700 p-4",attrs:{role:"alert"}},[n("p",[t._v(t._s(this.message))])]):t._e()])},S=[],V=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);Object(c["b"])([Object(u["c"])(String)],V.prototype,"message",void 0),V=Object(c["b"])([u["a"]],V);var _=V,D=_,A=Object(d["a"])(D,N,S,!1,null,null,null),$=A.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full max-w-screen-xl mx-auto px-4 mt-5"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[t._t("default")],2)])])},F=[],E=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);E=Object(c["b"])([u["a"]],E);var J=E,R=J,q=Object(d["a"])(R,M,F,!1,null,null,null),H=q.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-sm"},[n("VueCodeHighlight",[t._v(t._s(this.code))])],1)},G=[],L=n("d36c"),I=(n("4717"),n("80be"),n("5d6e"),function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]));Object(c["b"])([Object(u["c"])(String)],I.prototype,"code",void 0),I=Object(c["b"])([Object(u["a"])({components:{VueCodeHighlight:L["a"]}})],I);var W=I,B=W,K=Object(d["a"])(B,z,G,!1,null,null,null),U=K.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-wrap -mx-3 mb-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"php-version",label:"Php version","default-value":t.settings.phpVersion,options:t.phpVersionOptions},on:{"on-value-change":function(e){return t.settings.phpVersion=e}}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"class-case",label:"Class case","default-value":t.settings.classCase,options:t.caseOptions},on:{"on-value-change":function(e){return t.settings.classCase=e}}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"property-case",label:"Property case","default-value":t.settings.propertyCase,options:t.caseOptions},on:{"on-value-change":function(e){return t.settings.propertyCase=e}}})],1)]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3 mb-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"property-visiblity",label:"Property visibility","default-value":t.settings.propertyVisibility,options:t.phpVisibilityOptions},on:{"on-value-change":function(e){return t.settings.propertyVisibility=e}}}),n("Checkbox",{staticClass:"mt-3",attrs:{label:"Add extra new line after property","default-value":t.settings.propertyAddExtraNewLine},on:{"on-value-change":function(e){return t.settings.propertyAddExtraNewLine=e}}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"property-docblock",label:"Property docblock","default-value":t.settings.propertyDocblock,options:t.docblockOptions},on:{"on-value-change":function(e){return t.settings.propertyDocblock=e}}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[t.propertyDocblockVisible?n("Select",{attrs:{id:"property-docblock",label:"Property docblock type","default-value":t.settings.propertyDocblockType,options:t.propertyDocblockTypeOptions},on:{"on-value-change":function(e){return t.settings.propertyDocblockType=e}}}):t._e()],1)]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Checkbox",{staticClass:"mb-3",attrs:{label:"Add getters","default-value":t.settings.addGetters},on:{"on-value-change":function(e){return t.settings.addGetters=e}}}),t.settings.addGetters?n("Select",{staticClass:"mb-3",attrs:{id:"getter-case",label:"Getter case","default-value":t.settings.getterCase,options:t.caseOptions},on:{"on-value-change":function(e){return t.settings.getterCase=e}}}):t._e()],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-full md:w-1/2"},[n("Checkbox",{attrs:{label:"Add setters","default-value":t.settings.addSetters},on:{"on-value-change":function(e){return t.settings.addSetters=e}}})],1),n("div",{staticClass:"w-full md:w-1/2"},[t.settings.addSetters?n("Checkbox",{staticClass:"mb-3",attrs:{label:"Is fluent setter","default-value":t.settings.isFluentSetter},on:{"on-value-change":function(e){return t.settings.isFluentSetter=e}}}):t._e()],1)]),t.settings.addSetters?n("Select",{staticClass:"mb-3",attrs:{id:"setter-case",label:"Setter case","default-value":t.settings.setterCase,options:t.caseOptions},on:{"on-value-change":function(e){return t.settings.setterCase=e}}}):t._e()],1)]),n("hr",{staticClass:"mb-3"}),n("div",{staticClass:"flex flex-wrap -mx-3"},[n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Checkbox",{attrs:{label:"Add constructor","default-value":t.settings.addConstructor},on:{"on-value-change":function(e){return t.settings.addConstructor=e}}}),n("Checkbox",{attrs:{label:"Final classes","default-value":t.settings.finalClasses},on:{"on-value-change":function(e){return t.settings.finalClasses=e}}}),n("Checkbox",{attrs:{label:"Add from json method","default-value":t.settings.addFromJsonMethod},on:{"on-value-change":function(e){return t.settings.addFromJsonMethod=e}}}),n("Checkbox",{attrs:{label:"All properties nullable","default-value":t.settings.allPropertiesNullable},on:{"on-value-change":function(e){return t.settings.allPropertiesNullable=e}}})],1),n("div",{staticClass:"w-full md:w-1/3 px-3"},[n("Select",{attrs:{id:"method-constructor-docblock",label:"Method/Constructor Docblock","default-value":t.settings.docblock,options:t.docblockOptions},on:{"on-value-change":function(e){return t.settings.docblock=e}}})],1)])])},X=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"md:w-2/3 block text-gray-500 font-bold"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"mr-2 leading-tight",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var n=t.value,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.value=n.concat([a])):i>-1&&(t.value=n.slice(0,i).concat(n.slice(i+1)))}else t.value=s}}}),n("span",{staticClass:"text-sm"},[t._v(t._s(this.label))])])},Z=[],tt=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.value=!1,t}return Object(T["a"])(n,[{key:"mounted",value:function(){this.defaultValue&&(this.value=this.defaultValue)}},{key:"onValueChanged",value:function(t){this.onValueChange(t)}},{key:"onValueChange",value:function(t){return t}}]),n}(u["d"]);Object(c["b"])([Object(u["c"])(String)],tt.prototype,"id",void 0),Object(c["b"])([Object(u["c"])(Boolean)],tt.prototype,"defaultValue",void 0),Object(c["b"])([Object(u["c"])(String)],tt.prototype,"label",void 0),Object(c["b"])([Object(u["e"])("value")],tt.prototype,"onValueChanged",null),Object(c["b"])([Object(u["b"])()],tt.prototype,"onValueChange",null),tt=Object(c["b"])([u["a"]],tt);var et=tt,nt=et,rt=Object(d["a"])(nt,Y,Z,!1,null,null,null),st=rt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:this.id}},[t._v(" "+t._s(this.label)+" ")]),n("div",{staticClass:"relative"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",attrs:{id:this.id},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.value=e.target.multiple?n:n[0]}}},t._l(this.options,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.text)+" ")])})),0),n("div",{staticClass:"absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-gray-300 rounded-r pointer-events-none"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])},it=[],ot=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.value=null,t}return Object(T["a"])(n,[{key:"mounted",value:function(){this.defaultValue&&(this.value=this.defaultValue)}},{key:"onValueChanged",value:function(t){this.onValueChange(t)}},{key:"onValueChange",value:function(t){return t}}]),n}(u["d"]);Object(c["b"])([Object(u["c"])(String)],ot.prototype,"id",void 0),Object(c["b"])([Object(u["c"])(String)],ot.prototype,"label",void 0),Object(c["b"])([Object(u["c"])(String)],ot.prototype,"defaultValue",void 0),Object(c["b"])([Object(u["c"])(Array)],ot.prototype,"options",void 0),Object(c["b"])([Object(u["e"])("value")],ot.prototype,"onValueChanged",null),Object(c["b"])([Object(u["b"])()],ot.prototype,"onValueChange",null),ot=Object(c["b"])([u["a"]],ot);var lt,ct,ut,pt,ht,ft=ot,bt=ft,yt=Object(d["a"])(bt,at,it,!1,null,null,null),dt=yt.exports,gt=(n("b64b"),function t(e,n){Object(i["a"])(this,t),this.text=e,this.value=n}),vt=function(){function t(){Object(i["a"])(this,t)}return Object(T["a"])(t,null,[{key:"getOptions",value:function(t){for(var e=[],n=Object.keys(t),r=0,s=n;r<s.length;r++){var a=s[r];e.push(new gt(t[a],t[a]))}return e}}]),t}();(function(t){t["PHP74"]="PHP 7.4",t["PHP73"]="PHP 7.3"})(lt||(lt={})),function(t){t["Original"]="Original",t["CamelCase"]="Camel case",t["PascalCase"]="Pascal case",t["SnakeCase"]="Snake case"}(ct||(ct={})),function(t){t["Private"]="private",t["Protected"]="protected",t["Public"]="public"}(ut||(ut={})),function(t){t["None"]="None",t["Necessary"]="Only necessary",t["All"]="All"}(pt||(pt={})),function(t){t["Inline"]="Inline",t["Multiline"]="Multiline"}(ht||(ht={}));var Ot=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"phpVersionOptions",get:function(){return vt.getOptions(lt)}},{key:"caseOptions",get:function(){return vt.getOptions(ct)}},{key:"phpVisibilityOptions",get:function(){return vt.getOptions(ut)}},{key:"docblockOptions",get:function(){return vt.getOptions(pt)}},{key:"propertyDocblockTypeOptions",get:function(){return vt.getOptions(ht)}},{key:"propertyDocblockVisible",get:function(){return this.settings.propertyDocblock!==pt.None}}]),n}(u["d"]);Object(c["b"])([Object(u["c"])(Object)],Ot.prototype,"settings",void 0),Ot=Object(c["b"])([Object(u["a"])({components:{Checkbox:st,Select:dt}})],Ot);var jt=Ot,mt=jt,kt=Object(d["a"])(mt,Q,X,!1,null,null,null),Ct=kt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:this.id}},[t._v(" "+t._s(this.label)+" ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"resize-y border rounded focus:outline-none focus:shadow-outline w-full min-height",attrs:{id:this.id},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})])},wt=[],xt=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.value=null,t}return Object(T["a"])(n,[{key:"mounted",value:function(){this.defaultValue&&(this.value=this.defaultValue)}},{key:"onValueChanged",value:function(t){this.onValueChange(t)}},{key:"onValueChange",value:function(t){return t}}]),n}(u["d"]);Object(c["b"])([Object(u["c"])(String)],xt.prototype,"id",void 0),Object(c["b"])([Object(u["c"])(String)],xt.prototype,"defaultValue",void 0),Object(c["b"])([Object(u["c"])(String)],xt.prototype,"label",void 0),Object(c["b"])([Object(u["e"])("value")],xt.prototype,"onValueChanged",null),Object(c["b"])([Object(u["b"])()],xt.prototype,"onValueChange",null),xt=Object(c["b"])([u["a"]],xt);var Tt=xt,Nt=Tt,St=(n("51a1"),Object(d["a"])(Nt,Pt,wt,!1,null,"92668920",null)),Vt=St.exports,_t=(n("caad"),n("2532"),function(){function t(){Object(i["a"])(this,t),this.phpVersion=lt.PHP74,this.classCase=ct.PascalCase,this.propertyCase=ct.CamelCase,this.propertyVisibility=ut.Private,this.propertyDocblock=pt.Necessary,this.propertyDocblockType=ht.Inline,this.propertyAddExtraNewLine=!1,this.addGetters=!1,this.getterCase=ct.CamelCase,this.addSetters=!1,this.setterCase=ct.CamelCase,this.isFluentSetter=!0,this.addConstructor=!0,this.finalClasses=!1,this.addFromJsonMethod=!1,this.allPropertiesNullable=!1,this.docblock=pt.Necessary}return Object(T["a"])(t,[{key:"supportsTypedProperties",value:function(){var t=[lt.PHP74];return t.includes(this.phpVersion)}}]),t}()),Dt=(n("7db0"),n("45fc"),n("4ec9"),n("3ca3"),n("ddb0"),n("3835")),At=n("b85c"),$t=n("53ca"),Mt=function(){function t(){Object(i["a"])(this,t),this.settings=null}return Object(T["a"])(t,[{key:"setSettings",value:function(t){this.settings=t}}]),t}(),Ft=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return"string"}},{key:"getDocblockContent",value:function(){return"string"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(Mt),Et=(n("a15b"),n("d81d"),n("7e84")),Jt=n("45eb"),Rt=(n("4160"),n("159b"),n("1b47")),qt=n("600b"),Ht=n("a4d6"),zt=function(){function t(){Object(i["a"])(this,t)}return Object(T["a"])(t,null,[{key:"changeCase",value:function(t,e){switch(e){case ct.CamelCase:return Object(Rt["a"])(t);case ct.PascalCase:return Object(qt["a"])(t);case ct.SnakeCase:return Object(Ht["a"])(t)}return t}}]),t}(),Gt=(n("4de4"),function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(i["a"])(this,t),this.settings=e,this.propertyTypePresenters=n,this.returnType=r}return Object(T["a"])(t,[{key:"toString",value:function(){var t=this;if(this.settings.docblock===pt.None)return"";var e=this.propertyTypePresenters.filter((function(e){return t.settings.docblock!==pt.None&&(t.settings.docblock===pt.All||t.settings.docblock===pt.Necessary&&e.getProperty().isDocblockRequired())}));if(0===e.length&&(null===this.returnType||this.settings.docblock===pt.Necessary))return"";var n="\t/**\n";return e.length&&(n+=e.map((function(t){return"\t * @param "+t.getDocblockContent()+" "+t.getPhpVar()})).join("\n")+"\n"),this.settings.docblock===pt.All&&this.returnType&&(n+="\t * @return "+this.returnType+"\n"),n+="\t */\n",n}}]),t}()),Lt=function(){function t(e,n){Object(i["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(T["a"])(t,[{key:"toString",value:function(){var t="";t+=new Gt(this.settings,[],this.propertyTypePresenter.getPhpTypeNotation()).toString();var e=this.propertyTypePresenter.getPhpTypeNotation()?": "+this.propertyTypePresenter.getPhpTypeNotation():"";return t+="\tpublic function "+zt.changeCase("get_"+this.propertyTypePresenter.getPhpVarName(),this.settings.getterCase)+"()"+e+"\n",t+="\t{\n",t+="\t\treturn $this->"+this.propertyTypePresenter.getPhpVarName()+";\n",t+="\t}\n",t}}]),t}(),It=function(){function t(e,n){Object(i["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(T["a"])(t,[{key:"getMethodName",value:function(){return zt.changeCase("set_"+this.propertyTypePresenter.getPhpVarName(),this.settings.setterCase)}},{key:"toString",value:function(){var t="";return t+=new Gt(this.settings,[this.propertyTypePresenter],"void").toString(),t+="\tpublic function "+this.getMethodName()+"("+this.propertyTypePresenter.getPhpVarWithType()+"): void\n",t+="\t{\n",t+="\t\t$this->"+this.propertyTypePresenter.getPhpVarName()+" = "+this.propertyTypePresenter.getPhpVar()+";\n",t+="\t}\n",t}}]),t}(),Wt=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"toString",value:function(){var t="";return t+=new Gt(this.settings,[this.propertyTypePresenter],"self").toString(),t+="\tpublic function "+this.getMethodName()+"("+this.propertyTypePresenter.getPhpVarWithType()+"): self\n",t+="\t{\n",t+="\t\t$this->"+this.propertyTypePresenter.getPhpVarName()+" = "+this.propertyTypePresenter.getPhpVar()+";\n",t+="\t\treturn $this;\n",t+="\t}\n",t}}]),n}(It),Bt=function(){function t(e,n){Object(i["a"])(this,t),this.propertyTypePresenters=e,this.settings=n}return Object(T["a"])(t,[{key:"toString",value:function(){var t="\n";return t+=new Gt(this.settings,this.propertyTypePresenters).toString(),t+="\tpublic function __construct("+this.propertyTypePresenters.map((function(t){return t.getPhpVarWithType()})).join(", ")+") \n",t+="\t{\n",t+=this.propertyTypePresenters.map((function(t){return"\t\t$this->"+t.getPhpVarName()+" = "+t.getPhpVar()})).join(";\n")+";\n",t+="\t}\n",t}}]),t}(),Kt=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return""}},{key:"getDocblockContent",value:function(){return"mixed"}},{key:"isDocblockRequired",value:function(){return!0}}]),n}(Mt),Ut=function(){function t(e,n){Object(i["a"])(this,t),this.property=e,this.settings=n}return Object(T["a"])(t,[{key:"getPhpTypeNotation",value:function(){return 1===this.property.getTypes().length?(this.property.isNullable()?"?":"")+this.property.getTypes()[0].getType():""}},{key:"getPhpVarName",value:function(){return zt.changeCase(this.property.getName(),this.settings.propertyCase)}},{key:"getPhpVar",value:function(){return"$"+this.getPhpVarName()}},{key:"getPhpVarWithType",value:function(){var t=this.getPhpTypeNotation();return""!==t&&(t+=" "),t+this.getPhpVar()}},{key:"getDocblockContent",value:function(){return this.property.getTypes().map((function(t){return t.getDocblockContent()})).join("|")+(this.property.isNullable()?"|null":"")}},{key:"getProperty",value:function(){return this.property}}]),t}(),Qt=(n("b0c0"),function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return""}},{key:"getDocblockContent",value:function(){return"null"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(Mt)),Xt=function(){function t(e){Object(i["a"])(this,t),this.types=[],this.nullable=!1,this.settings=new _t,this.name=e}return Object(T["a"])(t,[{key:"getName",value:function(){return this.name}},{key:"getTypes",value:function(){return this.types}},{key:"add",value:function(t){return t instanceof Qt?(this.nullable=!0,this):(this.types.some((function(e){return e.constructor===t.constructor}))||this.types.push(t),this)}},{key:"merge",value:function(t){var e,n=Object(At["a"])(t.getTypes());try{for(n.s();!(e=n.n()).done;){var r=e.value;this.add(r)}}catch(s){n.e(s)}finally{n.f()}return t.isNullable()&&this.makeNullable(),this}},{key:"setSettings",value:function(t){this.settings=t,this.types.forEach((function(e){return e.setSettings(t)}))}},{key:"makeNullable",value:function(){this.add(new Qt)}},{key:"isNullable",value:function(){return this.nullable}},{key:"isDocblockRequired",value:function(){return this.types.length>1||this.types.some((function(t){return t.isDocblockRequired()}))}}]),t}(),Yt=function(){function t(e,n){Object(i["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(T["a"])(t,[{key:"toString",value:function(){var e=this,n="\n",r=new Ut(new Xt("data").add(new Kt),this.settings);return n+=new Gt(this.settings,[r],"self").toString(),n+="\tpublic static function fromJson(array $data): self\n",n+="\t{\n",this.settings.addConstructor?n+=this.getNewFromConstructor()+"\n":this.settings.addSetters?(n+="\t\t$instance = new self();\n",n+=this.propertyTypePresenter.map((function(n){return"\t\t$instance->"+new It(n,e.settings).getMethodName()+"("+t.getPropertyFromData(n,"\t\t")+");"})).join("\n")+"\n",n+="\t\treturn $instance;\n"):(n+="\t\t$instance = new self();\n",n+=this.propertyTypePresenter.map((function(e){return"\t\t$instance->"+e.getPhpVarName()+" = "+t.getPropertyFromData(e,"\t\t")+";"})).join("\n")+"\n",n+="\t\treturn $instance;\n"),n+="\t}\n",n}},{key:"getNewFromConstructor",value:function(){return"\t\treturn new self(\n\t\t\t"+this.propertyTypePresenter.map((function(e){return t.getPropertyFromData(e,"\t\t\t")})).join(",\n\t\t\t")+"\n\t\t);"}}],[{key:"getPropertyFromData",value:function(t,e){var n="$data['"+t.getProperty().getName()+"']",r=t.getProperty(),s=r.getTypes().find((function(t){return t instanceof ne&&t.isPhpClassArray()}));if(s){var a="";return r.isNullable()&&(a+="("+n+" ?? null ) !== null ? "),a+="array_map(static function($data) {\n",a+=e+"\treturn ",s.isPhpClassArray()?a+=s.getType()+"::fromJson($data);\n":a+="$data;\n",a+=e+"}, "+n+(r.isNullable()?" : null":"")+")",a}return n+(r.isNullable()?" ?? null":"")}}]),t}(),Zt=function(){function t(e,n){Object(i["a"])(this,t),this.propertyTypePresenter=e,this.settings=n}return Object(T["a"])(t,[{key:"toString",value:function(){var t="",e=this.settings.propertyDocblock!==pt.None&&this.propertyTypePresenter.getProperty().isDocblockRequired();return(e||this.settings.propertyDocblock===pt.All)&&(this.settings.propertyDocblockType===ht.Inline?t+="\t/** @var "+this.propertyTypePresenter.getDocblockContent()+" */\n":(t+="\t/**\n",t+="\t * @var "+this.propertyTypePresenter.getDocblockContent()+"\n",t+="\t */\n")),t+="\t"+this.settings.propertyVisibility+" ",this.settings.supportsTypedProperties()?t+=this.propertyTypePresenter.getPhpVarWithType():t+=this.propertyTypePresenter.getPhpVar(),t+=";",t}}]),t}(),te=function(){function t(e,n){Object(i["a"])(this,t),this.phpClass=e,this.settings=n}return Object(T["a"])(t,[{key:"getClassName",value:function(){return zt.changeCase(this.phpClass.getName(),this.settings.classCase)}},{key:"toString",value:function(){var e=this;this.phpClass.getProperties().forEach((function(t){return t.setSettings(e.settings)})),this.settings.allPropertiesNullable&&this.phpClass.getProperties().forEach((function(t){return t.makeNullable()}));var n=this.phpClass.getProperties().map((function(t){return new Ut(t,e.settings)})),r="\n";return r+=(this.settings.finalClasses?"final ":"")+"class "+this.getClassName()+"\n",r+="{\n",r+=n.map((function(t){return new Zt(t,e.settings).toString()})).join("\n"+(this.settings.propertyAddExtraNewLine?"\n":""))+"\n",this.settings.addConstructor&&(r+=new Bt(n,this.settings).toString()),this.settings.addGetters&&(r+="\n",r+=n.map((function(t){return new Lt(t,e.settings).toString()})).join("\n")),this.settings.addSetters&&(r+="\n",this.settings.isFluentSetter?r+=n.map((function(t){return new Wt(t,e.settings).toString()})).join("\n"):r+=n.map((function(t){return new It(t,e.settings).toString()})).join("\n")),this.settings.addFromJsonMethod&&(r+=new Yt(n,this.settings).toString()),r+="}",this.phpClass.getChildren().length>0&&(r+="\n"+this.phpClass.getChildren().map((function(n){return new t(n,e.settings).toString()})).join("\n")),r}}]),t}(),ee=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(t){var r;return Object(i["a"])(this,n),r=e.call(this),r.phpClass=t,r}return Object(T["a"])(n,[{key:"getType",value:function(){return this.getClassName()}},{key:"getDocblockContent",value:function(){return this.getClassName()}},{key:"isDocblockRequired",value:function(){return!1}},{key:"getClassName",value:function(){return this.settings?new te(this.phpClass,this.settings).getClassName():this.phpClass.getName()}}]),n}(Mt),ne=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.types=[],t}return Object(T["a"])(n,[{key:"getType",value:function(){return"array"}},{key:"getDocblockContent",value:function(){return 0!==this.types.length&&this.isTyped()?1===this.types.length?this.types[0].getDocblockContent()+"[]":"("+this.types.map((function(t){return t.getDocblockContent()})).join("|")+")[]":"array"}},{key:"isDocblockRequired",value:function(){return!0}},{key:"setSettings",value:function(t){Object(Jt["a"])(Object(Et["a"])(n.prototype),"setSettings",this).call(this,t);var e,r=Object(At["a"])(this.types);try{for(r.s();!(e=r.n()).done;){var s=e.value;s.setSettings(t)}}catch(a){r.e(a)}finally{r.f()}}},{key:"isPhpClassArray",value:function(){return this.types.some((function(t){return t instanceof ee}))}},{key:"addType",value:function(t){return this.types.some((function(e){return e.constructor===t.constructor}))||this.types.push(t),this}},{key:"isTyped",value:function(){var t,e=Object(At["a"])(this.types);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!(n instanceof Kt)&&!(n instanceof Qt))return!0}}catch(r){e.e(r)}finally{e.f()}return!1}}]),n}(Mt),re=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(i["a"])(this,t),this.name=e,this.properties=n,this.children=r}return Object(T["a"])(t,[{key:"getName",value:function(){return this.name}},{key:"setName",value:function(t){this.name=t}},{key:"getProperties",value:function(){return this.properties}},{key:"getProperty",value:function(t){return this.properties.find((function(e){return e.getName()===t}))||null}},{key:"getChildren",value:function(){return this.children}}]),t}(),se=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return"int"}},{key:"getDocblockContent",value:function(){return"int"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(Mt),ae=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return"bool"}},{key:"getDocblockContent",value:function(){return"bool"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(Mt),ie=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(T["a"])(n,[{key:"getType",value:function(){return"float"}},{key:"getDocblockContent",value:function(){return"float"}},{key:"isDocblockRequired",value:function(){return!1}}]),n}(Mt),oe=function(){function t(){Object(i["a"])(this,t)}return Object(T["a"])(t,null,[{key:"make",value:function(e){if("string"===typeof e)return new Ft;if("number"===typeof e)return e%1===0?new se:new ie;if(Array.isArray(e)){var n,r=new ne,s=Object(At["a"])(e);try{for(s.s();!(n=s.n()).done;){var a=n.value;r.addType(t.make(a))}}catch(i){s.e(i)}finally{s.f()}return r}return e instanceof re?new ee(e):"boolean"===typeof e?new ae:null===e?new Qt:new Kt}}]),t}(),le=function(){function t(){Object(i["a"])(this,t)}return Object(T["a"])(t,null,[{key:"make",value:function(t,e){var n=[],r=[];if(Array.isArray(t)){var s=this.makePropertyFromArray(e,t);return s.phpClass&&r.push(s.phpClass),n.push(s.property),new re(e,n,r)}if(t instanceof Object)for(var a=Object.keys(t),i=0,o=a;i<o.length;i++){var l=o[i],c=t[l];if(Array.isArray(c)){var u=this.makePropertyFromArray(l,c);u.phpClass&&r.push(u.phpClass),n.push(u.property)}else{var p=new Xt(l);if("object"===Object($t["a"])(c)&&null!==c){var h=this.make(c,l);r.push(h),p.add(oe.make(h))}else p.add(oe.make(c));n.push(p)}}return new re(e,n,r)}},{key:"makePropertyFromArray",value:function(t,e){var n=new Xt(t),r=null;if(e.some((function(t){return t instanceof Object}))){r=this.makeOneClassFromArray(t,e);var s=oe.make([r]);e.some((function(t){return null===t}))&&s.addType(new Qt),n.add(s)}else n.add(oe.make(e));return{property:n,phpClass:r}}},{key:"makeOneClassFromArray",value:function(e,n){var r,s=[],a=Object(At["a"])(n);try{for(a.s();!(r=a.n()).done;){var i=r.value;s.push(t.make(i,e))}}catch(o){a.e(o)}finally{a.f()}return new re(e,this.mergeProperties(s),this.mergeChildren(s))}},{key:"mergeChildren",value:function(t){var e,n=new Map,r=Object(At["a"])(t);try{for(r.s();!(e=r.n()).done;){var s,a=e.value,i=Object(At["a"])(a.getChildren());try{for(i.s();!(s=i.n()).done;){var o=s.value;if(n.has(o.getName())){var l=n.get(o.getName());l&&l.push(o)}else n.set(o.getName(),[o])}}catch(y){i.e(y)}finally{i.f()}}}catch(y){r.e(y)}finally{r.f()}var c,u=[],p=Object(At["a"])(n);try{for(p.s();!(c=p.n()).done;){var h=Object(Dt["a"])(c.value,2),f=h[0],b=h[1];u.push(new re(f,this.mergeProperties(b),this.mergeChildren(b)))}}catch(y){p.e(y)}finally{p.f()}return u}},{key:"mergeProperties",value:function(t){var e,n=[],r=Object(At["a"])(t);try{for(r.s();!(e=r.n()).done;){var s,a=e.value,i=Object(At["a"])(a.getProperties());try{var o=function(){var t=s.value,e=n.find((function(e){return e.getName()===t.getName()}));if(e)return e.merge(t),"continue";n.push(t)};for(i.s();!(s=i.n()).done;)o()}catch(l){i.e(l)}finally{i.f()}}}catch(l){r.e(l)}finally{r.f()}return n}}]),t}(),ce=function(){function t(){Object(i["a"])(this,t)}return Object(T["a"])(t,null,[{key:"make",value:function(t){var e;try{e=JSON.parse(t)}catch(n){throw new Error("Unable to decode json content")}return le.make(e,"RootObject")}}]),t}(),ue=function(t){Object(l["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.jsonContent="",t.class=null,t.settings=new _t,t.errorMessage="",t}return Object(T["a"])(n,[{key:"onJsonContentChange",value:function(t){this.jsonContent=t}},{key:"code",get:function(){if(this.errorMessage="",!this.jsonContent)return null;try{this.class=ce.make(this.jsonContent)}catch(t){return this.errorMessage=t.message,null}return new te(this.class,this.settings).toString()}}]),n}(u["d"]);ue=Object(c["b"])([Object(u["a"])({components:{Alert:$,Card:H,Code:U,Settings:Ct,TextArea:Vt}})],ue);var pe=ue,he=pe,fe=Object(d["a"])(he,w,x,!1,null,null,null),be=fe.exports;r["a"].use(P["a"]);var ye=[{path:"/",name:"Home",component:be}],de=new P["a"]({mode:"hash",base:"https://jacobdekeizer.github.io/json-to-php-generator/",routes:ye}),ge=de;n("7d32");r["a"].config.productionTip=!1,new r["a"]({router:ge,render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.d997c17d.js.map