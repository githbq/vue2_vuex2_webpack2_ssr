webpackJsonp([0],[,,function(t,n,e){"use strict";var o=e(0),r=e.n(o),a=e(4),u=(e.n(a),e(3));e.d(n,"a",function(){return u.a}),e.d(n,"b",function(){return s});var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s=new r.a(i({store:u.a},a.default))},function(t,n,e){"use strict";var o=e(0),r=e.n(o),a=e(1),u=e.n(a);r.a.use(u.a);var i=new u.a.Store({state:{list:[1,23,4,5,6,7,7,8,8],count:1},actions:{replaceList:function(t){for(var n=[],e=0;e<7;)n.push(Math.random()),e++;setTimeout(function(){t.commit("replaceList",n)},1e3)}},mutations:{replaceList:function(t,n){console.log(t,n),t.list=n},addItem:function(t){t.list.push(Math.random())}},getters:{cc:function(t){return t.count+"  hello!"}}});n.a=i},function(t,n){throw new Error("Module build failed: TypeError: this._init is not a function\n    at Object.Vue$2 (C:\\Users\\degrd\\Desktop\\vue\\vue2_vuex2_webpack2_ssr\\node_modules\\vue\\dist\\vue.runtime.common.js:3407:8)")},,function(t,n,e){"use strict";var o=e(2);window.__INITIAL_STATE__&&o.a.replaceState(window.__INITIAL_STATE__),o.b.$mount("#app")}],[6]);