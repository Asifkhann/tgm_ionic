(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{GNwS:function(n,o,t){"use strict";t.r(o);var l=t("CcnG"),u=t("mrSG"),i=t("a3Cf"),e=function(n){function o(){return null!==n&&n.apply(this,arguments)||this}return Object(u.c)(o,n),o.prototype.playVideo=function(n,o){return Object(i.cordova)(this,"playVideo",{sync:!0},arguments)},o.prototype.playAudio=function(n,o){return Object(i.cordova)(this,"playAudio",{sync:!0},arguments)},o.prototype.stopAudio=function(){return Object(i.cordova)(this,"stopAudio",{sync:!0},arguments)},o.prototype.pauseAudio=function(){return Object(i.cordova)(this,"pauseAudio",{sync:!0,platforms:["iOS"]},arguments)},o.prototype.resumeAudio=function(){return Object(i.cordova)(this,"resumeAudio",{sync:!0,platforms:["iOS"]},arguments)},o.pluginName="StreamingMedia",o.plugin="cordova-plugin-streaming-media",o.pluginRef="plugins.streamingMedia",o.repo="https://github.com/nchutchind/cordova-plugin-streaming-media",o.platforms=["Amazon Fire OS","Android","iOS"],o}(i.IonicNativePlugin),a=function(){function n(n){this.streamingMedia=n,this.env3={},this.env3="nv3",this.streamingMedia.playVideo("https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm",{successCallback:function(){console.log("Video played")},errorCallback:function(n){console.log("Error streaming")},orientation:"landscape",shouldAutoClose:!0,controls:!1})}return n.prototype.ngOnInit=function(){},n}(),r=function(){return function(){}}(),c=t("pMnS"),s=t("ra/t"),p=t("ntG5"),b=l.mb({encapsulation:0,styles:[[""]],data:{}});function d(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,4,"ion-content",[["padding",""]],null,null,null,s.s,s.e)),l.nb(1,49152,null,0,p.p,[l.h,l.k],null,null),(n()(),l.ob(2,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l.Ab(3,null,["Env3 :: ",""])),(n()(),l.ob(4,0,null,0,0,"video",[["autoplay","false"],["controls",""],["src","https://s3.amazonaws.com/tgm-videos/MVI_0061_out.webm"],["width","100%"]],null,null,null,null,null))],null,function(n,o){n(o,3,0,o.component.env3)})}function m(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"app-video-sample",[],null,null,null,d,b)),l.nb(1,114688,null,0,a,[e],null,null)],function(n,o){n(o,1,0)},null)}var f=l.kb("app-video-sample",a,m,{},{},[]),w=t("Ip0R"),g=t("gIcY"),h=t("95zI"),v=t("9opb"),y=t("apKv"),A=t("B4/3"),j=t("ZYCi");t.d(o,"VideoSamplePageModuleNgFactory",function(){return O});var O=l.lb(r,[],function(n){return l.vb([l.wb(512,l.j,l.ab,[[8,[c.a,f]],[3,l.j],l.x]),l.wb(4608,w.k,w.j,[l.u,[2,w.q]]),l.wb(4608,g.c,g.c,[]),l.wb(4608,h.a,h.a,[l.z,l.g]),l.wb(4608,v.a,v.a,[h.a,l.j,l.q]),l.wb(4608,y.a,y.a,[h.a,l.j,l.q]),l.wb(4608,e,e,[]),l.wb(1073742336,w.b,w.b,[]),l.wb(1073742336,g.b,g.b,[]),l.wb(1073742336,g.a,g.a,[]),l.wb(1073742336,A.a,A.a,[]),l.wb(1073742336,j.o,j.o,[[2,j.u],[2,j.n]]),l.wb(1073742336,r,r,[]),l.wb(1024,j.l,function(){return[[{path:"",component:a}]]},[])])})}}]);