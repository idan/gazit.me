(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+kg1":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return i}));var r=n("A2+M"),A=n("q1tI"),a=n.n(A),c=n("9Dj+"),o=n("H8eV"),i=(n("w1hd"),"2226285721");t.default=function(e){var t=e.data;return a.a.createElement(c.a,{title:t.mdx.frontmatter.title},a.a.createElement(o.a,{title:t.mdx.frontmatter.title}),a.a.createElement("article",{className:"mdxpost flex flex-col items-stretch"},a.a.createElement("header",{className:"pt-5 pb-5 md:pb-10 lg:pb-20 self-center"},a.a.createElement("h1",{className:"px-3 xl:text-8xl md:text-7xl sm:text-6xl text-5xl max-w-6xl text-gray-900 font-normal leading-none lg:leading-tight",style:{letterSpacing:"-0.005em"}},t.mdx.frontmatter.title),a.a.createElement("div",{className:"px-3 font-caps text-xs uppercase tracking-wider text-warmGrey-600 sm:border-t border-warmGrey-200 pt-1"},"published on ",t.mdx.frontmatter.date)),a.a.createElement(r.MDXRenderer,null,t.mdx.body)))}},"9Dj+":function(e,t,n){"use strict";var r=n("q1tI"),A=n.n(r),a=function(e){return A.a.createElement("footer",{className:"py-5 uppercase font-light tracking-widest text-xs text-gray-600 font-caps max-w-sm mx-auto px-3"},A.a.createElement("span",{className:"whitespace-no-wrap pr-5"},"© ",(new Date).getFullYear()," Idan Gazit"),A.a.createElement("span",{className:"whitespace-no-wrap"},"All rights reserved"))},c=n("j3Xx"),o=n("Wbzz"),i=n("9eSz"),l=n.n(i),s=function(e){var t=c.data;return A.a.createElement("div",{className:"pt-6 pb-8 max-w-sm lg:max-w-md mx-auto px-3"},A.a.createElement("div",{className:"flex"},A.a.createElement("div",{className:"w-32 flex-none"},A.a.createElement(o.Link,{to:"/"},A.a.createElement(l.a,{fluid:t.avatar.childImageSharp.fluid}))),A.a.createElement("div",{className:"pt-8 pl-3 flex-1"},A.a.createElement(o.Link,{to:"/",className:"no-underline font-light text-2xl leading-none"},"Idan Gazit"),A.a.createElement("p",{className:"font-caps text-xs uppercase tracking-wider text-warmGrey-500 pt-1 border-t border-warmGrey-200"},"Data, Design and Meaning"))))};t.a=function(e){var t=e.title,n=e.children;return A.a.createElement("div",null,A.a.createElement(s,{title:t}),A.a.createElement("div",null,n),A.a.createElement(a,null))}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,n){var r=n("XKFU"),A=n("Kuth"),a=n("2OiF"),c=n("y3w9"),o=n("0/R4"),i=n("eeVq"),l=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,u=i((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),f=!i((function(){s((function(){}))}));r(r.S+r.F*(u||f),"Reflect",{construct:function(e,t){a(e),c(t);var n=arguments.length<3?e:a(arguments[2]);if(f&&!u)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var i=n.prototype,p=A(o(i)?i:Object.prototype),m=Function.apply.call(e,p,t);return o(m)?m:p}})},X8hv:function(e,t,n){function r(e,t,n){return(r=A()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var A=new(Function.bind.apply(e,r));return n&&a(A,n.prototype),A}).apply(null,arguments)}function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var u=n("q1tI"),f=n("7ljp"),p=f.useMDXComponents,m=f.mdx,d=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,A=e.children,a=function(e,t){if(null==e)return{};var n,r,A={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,["scope","components","children"]),o=p(n),i=d(t),s=u.useMemo((function(){if(!A)return null;var e=l({React:u,mdx:m},i),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+A])).apply(void 0,[{}].concat(c(n)))}),[A,t]);return u.createElement(s,l({components:o},a))}},j3Xx:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAB93LUDtCcYC0Cv//EABsQAAICAwEAAAAAAAAAAAAAAAECAxEAEhMQ/9oACAEBAAEFAmNDZh5NJpnRLwxKTwjsCh//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAaEAACAwEBAAAAAAAAAAAAAAAAEQEQMSFR/9oACAEBAAY/AhuvSO7TkwR//8QAGxABAAMAAwEAAAAAAAAAAAAAAQARYSExUXH/2gAIAQEAAT8hZ0LZ3l8qDYMrAGshzIcQRLOogst2BWOf2VPif//aAAwDAQACAAMAAAAQSA8C/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEg/9oACAEDAQE/EIGP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAREgQf/aAAgBAgEBPxAvI//EABsQAQACAwEBAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/EOJcCaJVXfY7MWVYNStdL3k+zGgWhdfWEkFaSF4srxETBFWLEApUFF7n/9k=","aspectRatio":1,"src":"/static/4d598508442e38c719440f193e0a1881/2244e/idan-sketch.jpg","srcSet":"/static/4d598508442e38c719440f193e0a1881/86e11/idan-sketch.jpg 100w,\\n/static/4d598508442e38c719440f193e0a1881/f836f/idan-sketch.jpg 200w,\\n/static/4d598508442e38c719440f193e0a1881/2244e/idan-sketch.jpg 400w,\\n/static/4d598508442e38c719440f193e0a1881/4fe8c/idan-sketch.jpg 600w,\\n/static/4d598508442e38c719440f193e0a1881/14b42/idan-sketch.jpg 800w,\\n/static/4d598508442e38c719440f193e0a1881/37d86/idan-sketch.jpg 1500w","sizes":"(max-width: 400px) 100vw, 400px"}}}}}')},w1hd:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-tsx-017a0b7762a405269475.js.map