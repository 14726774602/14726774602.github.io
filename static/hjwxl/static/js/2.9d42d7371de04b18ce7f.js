webpackJsonp([2],{Wc0G:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("xA4w"),a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"life-content",style:{minHeight:t.max_height+"px"}},t._l(t.deta,function(i,s){return e("div",{key:s,staticClass:"life-item",style:{left:t.item_coor[s].left+"px",top:t.item_coor[s].top+"px"}},[e("div",[e("router-link",{attrs:{to:""}},[e("p",{staticClass:"item-img"},[e("img",{attrs:{src:i.img_url,alt:""},on:{load:function(e){return t.quireCoord(i.id)}}})]),t._v(" "),e("p",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),e("p",{staticClass:"item-describe"},[t._v(t._s(i.describe))])])],1)])}),0)])},staticRenderFns:[]};var c=function(t){e("fMIz")},r={components:{photo_falls:e("VU/8")(s.a,a,!1,c,"data-v-5f0e8578",null).exports},data:function(){return{isRouterAlive:!0,activeClass:0,name:"相册",article:[{id:1,sm_class:"1",title:"彩虹之国-南非之旅",img_url:"/static/img/article/1.jpg",describe:"梦之天堂，遥远的地方"},{id:2,sm_class:"2",title:"彩虹之国-南非之旅",img_url:"/static/img/article/2.jpg",describe:"梦之天堂，遥远的地方"},{id:3,sm_class:"3",title:"彩虹之国-南非之旅",img_url:"/static/img/article/3.jpg",describe:"梦之天堂，遥远的地方"},{id:4,sm_class:"1",title:"彩虹之国-南非之旅",img_url:"/static/img/article/4.jpg",describe:"梦之天堂，遥远的地方"},{id:5,sm_class:"2",title:"彩虹之国-南非之旅",img_url:"/static/img/article/5.jpg",describe:"梦之天堂，遥远的地方"},{id:6,sm_class:"3",title:"彩虹之国-南非之旅",img_url:"/static/img/article/6.jpg",describe:"梦之天堂，遥远的地方"},{id:7,sm_class:"1",title:"彩虹之国-南非之旅",img_url:"/static/img/article/7.jpg",describe:"梦之天堂，遥远的地方"},{id:8,sm_class:"2",title:"彩虹之国-南非之旅",img_url:"/static/img/article/8.jpg",describe:"梦之天堂，遥远的地方"},{id:9,sm_class:"3",title:"彩虹之国-南非之旅",img_url:"/static/img/article/9.jpg",describe:"梦之天堂，遥远的地方"},{id:10,sm_class:"3",title:"彩虹之国-南非之旅",img_url:"/static/img/article/10.jpg",describe:"梦之天堂，遥远的地方"}],transfer_article:this.article,clss:""}},props:{deta:{default:function(){return""}}},beforeCreate:function(){},created:function(){void 0==this.$route.query.sm_class?this.activeClass=0:this.activeClass=this.$route.query.sm_class,this.navActive(this.activeClass)},methods:{reload:function(){var t=this;this.isRouterAlive=!1,this.$nextTick(function(){return t.isRouterAlive=!0})},navActive:function(t){if(0==t)this.transfer_article=[].concat(this.article);else{for(var i=[],e=0;e<this.article.length;e++)this.article[e].sm_class==t&&i.push(this.article[e]);this.transfer_article=[].concat(i)}}},mounted:function(){this.navActive(0)},watch:{$route:function(){void 0==this.$route.query.sm_class?this.activeClass=0:this.activeClass=this.$route.query.sm_class},activeClass:function(){this.reload(),this.navActive(this.activeClass)}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"header animated fadeInDown"},[e("p",{staticClass:"header-nav"},[e("router-link",{class:0==t.activeClass?"active":"",attrs:{to:"/photo"}},[t._v("全部")]),t._v(" "),e("router-link",{class:1==t.activeClass?"active":"",attrs:{to:"/photo?sm_class=1"}},[t._v("古韵")]),t._v(" "),e("router-link",{class:2==t.activeClass?"active":"",attrs:{to:"/photo?sm_class=2"}},[t._v("山水")]),t._v(" "),e("router-link",{class:3==t.activeClass?"active":"",attrs:{to:"/photo?sm_class=3"}},[t._v("独家")])],1)]),t._v(" "),e("div",{staticClass:"p-container"},[t.isRouterAlive?e("photo_falls",{attrs:{deta:t.transfer_article?t.transfer_article:t.article}}):t._e()],1)])},staticRenderFns:[]};var o=e("VU/8")(r,l,!1,function(t){e("g7XI")},"data-v-0bc01be4",null);i.default=o.exports},fMIz:function(t,i){},g7XI:function(t,i){},xA4w:function(t,i,e){"use strict";(function(t){i.a={data:function(){return{article:this.deta,col:3,col_height:[],col_width:"",item_height:[],item_coor:[],item_btm:10,max_height:"",screenWidth:document.body.clientWidth}},props:{deta:{default:function(){return""}}},beforeCreate:function(){},created:function(){this.article=this.deta;for(var t=0;t<this.article.length;t++)this.item_coor.push({left:"0",top:"0"})},methods:{quireCoord:function(i){if(this.addWindow(),i==this.article[this.article.length-1].id){this.col_width=t(".life-item").width();var e=[],s=[];t(".life-item").each(function(){e.push(Math.ceil(t(this).height())),s.push({left:"0",top:"0"})}),this.item_height=[].concat(e);for(var a=0;a<this.col;a++)this.col_height[a]=0;this.addCoord()}},addCoord:function(){for(var t=0;t<this.article.length;t++){var i=Math.min.apply(Math,this.col_height),e=this.col_height.indexOf(i);this.item_coor[t].left=this.col_width*e,this.item_coor[t].top=this.col_height[e],this.col_height[e]+=this.item_height[t],this.col_height[e]+=this.item_btm;var s=Math.max.apply(Math,this.col_height);this.max_height=s}},addWindow:function(){this.screenWidth>1e3?this.col=3:this.screenWidth>750?this.col=2:this.col=1}},mounted:function(){var t=this;this.quireCoord(this.article[this.article.length-1].id);var i=this;window.onresize=function(){return window.screenWidth=document.body.clientWidth,i.screenWidth=window.screenWidth,void t.quireCoord(t.article[t.article.length-1].id)}}}}).call(i,e("7t+N"))}});
//# sourceMappingURL=2.9d42d7371de04b18ce7f.js.map