(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d621e"],{"70f5":function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("div",{staticClass:"bn"},[e("h2",{staticClass:"bn__bn"},[s._v(s._s(s.$t("business")))]),s._l(s.businessNews,(function(t,n){return e("div",{key:n,staticClass:"bn__box"},[e("img",{attrs:{src:t.urlToImage,alt:t.title}}),e("div",{staticClass:"bn__box--right"},[e("h2",{staticClass:"bn__box--title"},[s._v(s._s(t.title))]),e("div",{staticClass:"bn__box--info"},[e("i",{staticClass:"far fa-calendar-alt"}),s._v(" "+s._s(s._f("formatDate")(t.publishedAt))+" "),e("i",{staticClass:"far fa-user"}),s._v(" "+s._s(t.source.name)+" ")]),e("div",{staticClass:"bn__box--desc"},[s._v(s._s(t.description))]),e("router-link",{staticClass:"bn__box--cta",attrs:{to:"/business/article/"+(n+s.knifePoint),tag:"a"},nativeOn:{click:function(e){return s.recentlyViewed(t)}}},[s._v(s._s(s.$t("readArticle")))])],1)])})),e("div",{staticClass:"pages"},s._l(s.numOfBusinessNews/4,(function(t){return e("span",{key:t,on:{click:function(e){s.knifePoint=4*(t-1)}}},[s._v(s._s(t))])})),0)],2),e("my-banner-bar")],1)},i=[],a=(e("fb6a"),e("8cb2")),c={data:function(){return{knifePoint:0}},components:{"my-banner-bar":a["a"]},computed:{numOfBusinessNews:function(){return this.$store.state.businessNews.length},businessNews:function(){return this.$store.state.businessNews.slice(this.knifePoint,this.knifePoint+4)}},methods:{recentlyViewed:function(s){this.$store.commit("recentlyViewed",s)}}},r=c,o=e("2877"),u=Object(o["a"])(r,n,i,!1,null,"3b38cbde",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d621e.7648b912.js.map