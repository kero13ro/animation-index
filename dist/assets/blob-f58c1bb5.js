import{d as Fr,o as Vr,a as _r,c as jr,b as z,e as Zr}from"./index-86d5d624.js";var mr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Y={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},zr=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],H={CSS:{},springs:{}};function I(r,e,t){return Math.min(Math.max(r,e),t)}function j(r,e){return r.indexOf(e)>-1}function K(r,e){return r.apply(null,e)}var c={arr:function(r){return Array.isArray(r)},obj:function(r){return j(Object.prototype.toString.call(r),"Object")},pth:function(r){return c.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||c.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return c.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return c.hex(r)||c.rgb(r)||c.hsl(r)},key:function(r){return!mr.hasOwnProperty(r)&&!Y.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function yr(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Cr(r,e){var t=yr(r),a=I(c.und(t[0])?1:t[0],.1,100),n=I(c.und(t[1])?100:t[1],.1,100),o=I(c.und(t[2])?10:t[2],.1,100),u=I(c.und(t[3])?0:t[3],.1,100),s=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),p=i<1?s*Math.sqrt(1-i*i):0,f=1,l=i<1?(i*s+-u)/p:-u+s;function h(m){var v=e?e*m/1e3:m;return i<1?v=Math.exp(-v*i*s)*(f*Math.cos(p*v)+l*Math.sin(p*v)):v=(f+l*v)*Math.exp(-v*s),m===0||m===1?m:1-v}function M(){var m=H.springs[r];if(m)return m;for(var v=1/6,C=0,x=0;;)if(C+=v,h(C)===1){if(x++,x>=16)break}else x=0;var g=C*v*1e3;return H.springs[r]=g,g}return e?h:M}function Hr(r){return r===void 0&&(r=10),function(e){return Math.ceil(I(e,1e-6,1)*r)*(1/r)}}var Rr=function(){var r=11,e=1/(r-1);function t(f,l){return 1-3*l+3*f}function a(f,l){return 3*l-6*f}function n(f){return 3*f}function o(f,l,h){return((t(l,h)*f+a(l,h))*f+n(l))*f}function u(f,l,h){return 3*t(l,h)*f*f+2*a(l,h)*f+n(l)}function s(f,l,h,M,m){var v,C,x=0;do C=l+(h-l)/2,v=o(C,M,m)-f,v>0?h=C:l=C;while(Math.abs(v)>1e-7&&++x<10);return C}function i(f,l,h,M){for(var m=0;m<4;++m){var v=u(l,h,M);if(v===0)return l;var C=o(l,h,M)-f;l-=C/v}return l}function p(f,l,h,M){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var m=new Float32Array(r);if(f!==l||h!==M)for(var v=0;v<r;++v)m[v]=o(v*e,f,h);function C(x){for(var g=0,d=1,P=r-1;d!==P&&m[d]<=x;++d)g+=e;--d;var D=(x-m[d])/(m[d+1]-m[d]),w=g+D*e,O=u(w,f,h);return O>=.001?i(x,w,f,h):O===0?w:s(x,g,g+e,f,h)}return function(x){return f===l&&h===M||x===0||x===1?x:o(C(x),l,M)}}return p}(),wr=function(){var r={linear:function(){return function(a){return a}}},e={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=I(a,1,10),u=I(n,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(a,n){e[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(e).forEach(function(a){var n=e[a];r["easeIn"+a]=n,r["easeOut"+a]=function(o,u){return function(s){return 1-n(o,u)(1-s)}},r["easeInOut"+a]=function(o,u){return function(s){return s<.5?n(o,u)(s*2)/2:1-n(o,u)(s*-2+2)/2}},r["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-n(o,u)(1-s*2))/2:(n(o,u)(s*2-1)+1)/2}}}),r}();function X(r,e){if(c.fnc(r))return r;var t=r.split("(")[0],a=wr[t],n=yr(r);switch(t){case"spring":return Cr(r,e);case"cubicBezier":return K(Rr,n);case"steps":return K(Hr,n);default:return K(a,n)}}function xr(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function R(r,e){for(var t=r.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<t;o++)if(o in r){var u=r[o];e.call(a,u,o,r)&&n.push(u)}return n}function N(r){return r.reduce(function(e,t){return e.concat(c.arr(t)?N(t):t)},[])}function vr(r){return c.arr(r)?r:(c.str(r)&&(r=xr(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function rr(r,e){return r.some(function(t){return t===e})}function er(r){var e={};for(var t in r)e[t]=r[t];return e}function G(r,e){var t=er(r);for(var a in r)t[a]=e.hasOwnProperty(a)?e[a]:r[a];return t}function U(r,e){var t=er(r);for(var a in e)t[a]=c.und(r[a])?e[a]:r[a];return t}function Nr(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function Ur(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(s,i,p,f){return i+i+p+p+f+f}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),n=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+n+","+o+","+u+",1)"}function Wr(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,a=parseInt(e[2],10)/100,n=parseInt(e[3],10)/100,o=e[4]||1;function u(h,M,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?h+(M-h)*6*m:m<1/2?M:m<2/3?h+(M-h)*(2/3-m)*6:h}var s,i,p;if(a==0)s=i=p=n;else{var f=n<.5?n*(1+a):n+a-n*a,l=2*n-f;s=u(l,f,t+1/3),i=u(l,f,t),p=u(l,f,t-1/3)}return"rgba("+s*255+","+i*255+","+p*255+","+o+")"}function qr(r){if(c.rgb(r))return Nr(r);if(c.hex(r))return Ur(r);if(c.hsl(r))return Wr(r)}function k(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function $r(r){if(j(r,"translate")||r==="perspective")return"px";if(j(r,"rotate")||j(r,"skew"))return"deg"}function J(r,e){return c.fnc(r)?r(e.target,e.id,e.total):r}function B(r,e){return r.getAttribute(e)}function tr(r,e,t){var a=k(e);if(rr([t,"deg","rad","turn"],a))return e;var n=H.CSS[e+t];if(!c.und(n))return n;var o=100,u=document.createElement(r.tagName),s=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+t;var i=o/u.offsetWidth;s.removeChild(u);var p=i*parseFloat(e);return H.CSS[e+t]=p,p}function br(r,e,t){if(e in r.style){var a=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.style[e]||getComputedStyle(r).getPropertyValue(a)||"0";return t?tr(r,n,t):n}}function nr(r,e){if(c.dom(r)&&!c.inp(r)&&(!c.nil(B(r,e))||c.svg(r)&&r[e]))return"attribute";if(c.dom(r)&&rr(zr,e))return"transform";if(c.dom(r)&&e!=="transform"&&br(r,e))return"css";if(r[e]!=null)return"object"}function Mr(r){if(c.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=t.exec(e);)a.set(n[1],n[2]);return a}}function Kr(r,e,t,a){var n=j(e,"scale")?1:0+$r(e),o=Mr(r).get(e)||n;return t&&(t.transforms.list.set(e,o),t.transforms.last=e),a?tr(r,o,a):o}function ar(r,e,t,a){switch(nr(r,e)){case"transform":return Kr(r,e,a,t);case"css":return br(r,e,t);case"attribute":return B(r,e);default:return r[e]||0}}function ir(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var a=k(r)||0,n=parseFloat(e),o=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function Pr(r,e){if(c.col(r))return qr(r);if(/\s/g.test(r))return r;var t=k(r),a=t?r.substr(0,r.length-t.length):r;return e?a+e:a}function or(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function Gr(r){return Math.PI*2*B(r,"r")}function Jr(r){return B(r,"width")*2+B(r,"height")*2}function Yr(r){return or({x:B(r,"x1"),y:B(r,"y1")},{x:B(r,"x2"),y:B(r,"y2")})}function Tr(r){for(var e=r.points,t=0,a,n=0;n<e.numberOfItems;n++){var o=e.getItem(n);n>0&&(t+=or(a,o)),a=o}return t}function Xr(r){var e=r.points;return Tr(r)+or(e.getItem(e.numberOfItems-1),e.getItem(0))}function Qr(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return Gr(r);case"rect":return Jr(r);case"line":return Yr(r);case"polyline":return Tr(r);case"polygon":return Xr(r)}}function re(r){var e=Qr(r);return r.setAttribute("stroke-dasharray",e),e}function ee(r){for(var e=r.parentNode;c.svg(e)&&c.svg(e.parentNode);)e=e.parentNode;return e}function Ir(r,e){var t=e||{},a=t.el||ee(r),n=a.getBoundingClientRect(),o=B(a,"viewBox"),u=n.width,s=n.height,i=t.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function te(r,e){var t=c.str(r)?xr(r)[0]:r,a=e||100;return function(n){return{property:n,el:t,svg:Ir(t),totalLength:Qr(t)*(a/100)}}}function ne(r,e,t){function a(f){f===void 0&&(f=0);var l=e+f>=1?e+f:0;return r.el.getPointAtLength(l)}var n=Ir(r.el,r.svg),o=a(),u=a(-1),s=a(1),i=t?1:n.w/n.vW,p=t?1:n.h/n.vH;switch(r.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*p;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function dr(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Pr(c.pth(r)?r.totalLength:r,e)+"";return{original:a,numbers:a.match(t)?a.match(t).map(Number):[0],strings:c.str(r)||e?a.split(t):[]}}function ur(r){var e=r?N(c.arr(r)?r.map(vr):vr(r)):[];return R(e,function(t,a,n){return n.indexOf(t)===a})}function Br(r){var e=ur(r);return e.map(function(t,a){return{target:t,id:a,total:e.length,transforms:{list:Mr(t)}}})}function ae(r,e){var t=er(e);if(/^spring/.test(t.easing)&&(t.duration=Cr(t.easing)),c.arr(r)){var a=r.length,n=a===2&&!c.obj(r[0]);n?r={value:r}:c.fnc(e.duration)||(t.duration=e.duration/a)}var o=c.arr(r)?r:[r];return o.map(function(u,s){var i=c.obj(u)&&!c.pth(u)?u:{value:u};return c.und(i.delay)&&(i.delay=s?0:e.delay),c.und(i.endDelay)&&(i.endDelay=s===o.length-1?e.endDelay:0),i}).map(function(u){return U(u,t)})}function ie(r){for(var e=R(N(r.map(function(o){return Object.keys(o)})),function(o){return c.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),t={},a=function(o){var u=e[o];t[u]=r.map(function(s){var i={};for(var p in s)c.key(p)?p==u&&(i.value=s[p]):i[p]=s[p];return i})},n=0;n<e.length;n++)a(n);return t}function oe(r,e){var t=[],a=e.keyframes;a&&(e=U(ie(a),e));for(var n in e)c.key(n)&&t.push({name:n,tweens:ae(e[n],r)});return t}function ue(r,e){var t={};for(var a in r){var n=J(r[a],e);c.arr(n)&&(n=n.map(function(o){return J(o,e)}),n.length===1&&(n=n[0])),t[a]=n}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function se(r,e){var t;return r.tweens.map(function(a){var n=ue(a,e),o=n.value,u=c.arr(o)?o[1]:o,s=k(u),i=ar(e.target,r.name,s,e),p=t?t.to.original:i,f=c.arr(o)?o[0]:p,l=k(f)||k(i),h=s||l;return c.und(u)&&(u=p),n.from=dr(f,h),n.to=dr(ir(u,f),h),n.start=t?t.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=X(n.easing,n.duration),n.isPath=c.pth(o),n.isPathTargetInsideSVG=n.isPath&&c.svg(e.target),n.isColor=c.col(n.from.original),n.isColor&&(n.round=1),t=n,n})}var kr={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,a,n){if(a.list.set(e,t),e===a.last||n){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),r.style.transform=o}}};function Dr(r,e){var t=Br(r);t.forEach(function(a){for(var n in e){var o=J(e[n],a),u=a.target,s=k(o),i=ar(u,n,s,a),p=s||k(i),f=ir(Pr(o,p),i),l=nr(u,n);kr[l](u,n,f,a.transforms,!0)}})}function fe(r,e){var t=nr(r.target,e.name);if(t){var a=se(e,r),n=a[a.length-1];return{type:t,property:e.name,animatable:r,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function ce(r,e){return R(N(r.map(function(t){return e.map(function(a){return fe(t,a)})})),function(t){return!c.und(t)})}function Or(r,e){var t=r.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=t?Math.max.apply(Math,r.map(function(o){return a(o)+o.duration})):e.duration,n.delay=t?Math.min.apply(Math,r.map(function(o){return a(o)+o.delay})):e.delay,n.endDelay=t?n.duration-Math.max.apply(Math,r.map(function(o){return a(o)+o.duration-o.endDelay})):e.endDelay,n}var gr=0;function le(r){var e=G(mr,r),t=G(Y,r),a=oe(t,r),n=Br(r.targets),o=ce(n,a),u=Or(o,t),s=gr;return gr++,U(e,{id:s,children:[],animatables:n,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var Q=[],Sr=function(){var r;function e(){!r&&(!hr()||!y.suspendWhenDocumentHidden)&&Q.length>0&&(r=requestAnimationFrame(t))}function t(n){for(var o=Q.length,u=0;u<o;){var s=Q[u];s.paused?(Q.splice(u,1),o--):(s.tick(n),u++)}r=u>0?requestAnimationFrame(t):void 0}function a(){y.suspendWhenDocumentHidden&&(hr()?r=cancelAnimationFrame(r):(Q.forEach(function(n){return n._onDocumentVisibility()}),Sr()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),e}();function hr(){return!!document&&document.hidden}function y(r){r===void 0&&(r={});var e=0,t=0,a=0,n,o=0,u=null;function s(g){var d=window.Promise&&new Promise(function(P){return u=P});return g.finished=d,d}var i=le(r);s(i);function p(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(d){return d.reversed=i.reversed})}function f(g){return i.reversed?i.duration-g:g}function l(){e=0,t=f(i.currentTime)*(1/y.speed)}function h(g,d){d&&d.seek(g-d.timelineOffset)}function M(g){if(i.reversePlayback)for(var P=o;P--;)h(g,n[P]);else for(var d=0;d<o;d++)h(g,n[d])}function m(g){for(var d=0,P=i.animations,D=P.length;d<D;){var w=P[d],O=w.animatable,A=w.tweens,S=A.length-1,b=A[S];S&&(b=R(A,function(Ar){return g<Ar.end})[0]||b);for(var E=I(g-b.start-b.delay,0,b.duration)/b.duration,Z=isNaN(E)?1:b.easing(E),T=b.to.strings,W=b.round,q=[],Lr=b.to.numbers.length,L=void 0,F=0;F<Lr;F++){var V=void 0,sr=b.to.numbers[F],fr=b.from.numbers[F]||0;b.isPath?V=ne(b.value,Z*sr,b.isPathTargetInsideSVG):V=fr+Z*(sr-fr),W&&(b.isColor&&F>2||(V=Math.round(V*W)/W)),q.push(V)}var cr=T.length;if(!cr)L=q[0];else{L=T[0];for(var _=0;_<cr;_++){T[_];var lr=T[_+1],$=q[_];isNaN($)||(lr?L+=$+lr:L+=$+" ")}}kr[w.type](O.target,w.property,L,O.transforms),w.currentValue=L,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function C(){i.remaining&&i.remaining!==!0&&i.remaining--}function x(g){var d=i.duration,P=i.delay,D=d-i.endDelay,w=f(g);i.progress=I(w/d*100,0,100),i.reversePlayback=w<i.currentTime,n&&M(w),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),w<=P&&i.currentTime!==0&&m(0),(w>=D&&i.currentTime!==d||!d)&&m(d),w>P&&w<D?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),m(w)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=I(w,0,d),i.began&&v("update"),g>=d&&(t=0,C(),i.remaining?(e=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&p()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var d=o;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,d){return Dr(g,d),i},i.tick=function(g){a=g,e||(e=a),x((a+(t-e))*y.speed)},i.seek=function(g){x(f(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,Q.push(i),l(),Sr())},i.reverse=function(){p(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=ur(g);Er(d,i)},i.reset(),i.autoplay&&i.play(),i}function pr(r,e){for(var t=e.length;t--;)rr(r,e[t].animatable.target)&&e.splice(t,1)}function Er(r,e){var t=e.animations,a=e.children;pr(r,t);for(var n=a.length;n--;){var o=a[n],u=o.animations;pr(r,u),!u.length&&!o.children.length&&a.splice(n,1)}!t.length&&!a.length&&e.pause()}function ve(r){for(var e=ur(r),t=Q.length;t--;){var a=Q[t];Er(e,a)}}function de(r,e){e===void 0&&(e={});var t=e.direction||"normal",a=e.easing?X(e.easing):null,n=e.grid,o=e.axis,u=e.from||0,s=u==="first",i=u==="center",p=u==="last",f=c.arr(r),l=parseFloat(f?r[0]:r),h=f?parseFloat(r[1]):0,M=k(f?r[1]:r)||0,m=e.start||0+(f?l:0),v=[],C=0;return function(x,g,d){if(s&&(u=0),i&&(u=(d-1)/2),p&&(u=d-1),!v.length){for(var P=0;P<d;P++){if(!n)v.push(Math.abs(u-P));else{var D=i?(n[0]-1)/2:u%n[0],w=i?(n[1]-1)/2:Math.floor(u/n[0]),O=P%n[0],A=Math.floor(P/n[0]),S=D-O,b=w-A,E=Math.sqrt(S*S+b*b);o==="x"&&(E=-S),o==="y"&&(E=-b),v.push(E)}C=Math.max.apply(Math,v)}a&&(v=v.map(function(T){return a(T/C)*C})),t==="reverse"&&(v=v.map(function(T){return o?T<0?T*-1:-T:Math.abs(C-T)}))}var Z=f?(h-l)/C:l;return m+Z*(Math.round(v[g]*100)/100)+M}}function ge(r){r===void 0&&(r={});var e=y(r);return e.duration=0,e.add=function(t,a){var n=Q.indexOf(e),o=e.children;n>-1&&Q.splice(n,1);function u(h){h.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=U(t,G(Y,r));i.targets=i.targets||r.targets;var p=e.duration;i.autoplay=!1,i.direction=e.direction,i.timelineOffset=c.und(a)?p:ir(a,p),u(e),e.seek(i.timelineOffset);var f=y(i);u(f),o.push(f);var l=Or(o,r);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=Q;y.remove=ve;y.get=ar;y.set=Dr;y.convertPx=tr;y.path=te;y.setDashoffset=re;y.stagger=de;y.timeline=ge;y.easing=X;y.penner=wr;y.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};const he={class:"container"},pe=z("div",{class:"text-lg"},"v3 anime.js",-1),me=z("svg",{viewBox:"0 0 900 600",width:"900",height:"600",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"},[z("g",{transform:"translate(405.55856810841806 296.17749615278365)"},[z("path",{id:"visual1",d:"M179.8 -185.4C218.1 -141.4 224 -70.7 212.1 -11.9C200.2 46.9 170.5 93.8 132.1 132.6C93.8 171.5 46.9 202.2 -11.4 213.7C-69.8 225.1 -139.5 217.2 -173.4 178.4C-207.2 139.5 -205.1 69.8 -187.9 17.2C-170.7 -35.4 -138.4 -70.7 -104.5 -114.7C-70.7 -158.7 -35.4 -211.4 17.7 -229C70.7 -246.7 141.4 -229.4 179.8 -185.4",fill:"#BB004B"})])],-1),ye=Zr('<div class="text-lg">svg animate</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="0"><clipPath id="blob"><path transform="translate(100,-50)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></clipPath></svg><img src="https://schweppes.wpenginepowered.com/wp-content/uploads/2021/06/Header-1-800x450.jpg" alt="" style="clip-path:url(#blob);"><div class="text-lg">anime.js svg</div><svg width="0" height="0" viewBox="0 0 600 600"><clipPath id="shape"><path id="morphing" class="morphing" transform="translate(300,250)" d="M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z" fill="url(#grad1)"></path></clipPath></svg><img src="https://schweppes.wpenginepowered.com/wp-content/uploads/2021/06/Header-1-800x450.jpg" style="clip-path:url(#shape);"><svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#039eb3;stop-opacity:1;"></stop><stop offset="100%" style="stop-color:#ffae00;stop-opacity:1;"></stop></linearGradient></defs><g transform="translate(300,300)"><path id="morphing" class="morphing" d="M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z" fill="url(#grad1)"></path></g></svg>',7),Ce=[pe,me,ye],xe=Fr({__name:"blob",setup(r){const e=()=>{y({targets:".morphing",d:[{value:"M171.5,-191.9C215.3,-167.6,239.1,-107,234.1,-53.5C229,0.1,195,46.5,157.5,71.5C119.9,96.5,78.8,99.9,37.7,123.4C-3.3,146.9,-44.2,190.4,-72.4,185.9C-100.7,181.3,-116.1,128.7,-133.1,84.2C-150.1,39.7,-168.6,3.3,-177.6,-46.2C-186.7,-95.8,-186.2,-158.6,-155,-185.1C-123.8,-211.6,-61.9,-201.8,1,-202.9C63.9,-204.1,127.7,-216.2,171.5,-191.9Z"},{value:"M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z"}],easing:"easeInOutSine",duration:1e4,direction:"infinite alternate",loop:!0})},t=()=>{y({targets:"#visual1",d:[{value:"M120.7 -101.9C170.7 -70.7 235.4 -35.4 247.5 12.1C259.6 59.6 219.3 119.3 169.3 150.4C119.3 181.6 59.6 184.3 8 176.3C-43.6 168.3 -87.2 149.5 -114.7 118.4C-142.2 87.2 -153.6 43.6 -158.6 -4.9C-163.5 -53.5 -162 -107 -134.5 -138.2C-107 -169.3 -53.5 -178.2 -9.1 -169.1C35.4 -160 70.7 -133 120.7 -101.9"},{value:"M179.8 -185.4C218.1 -141.4 224 -70.7 212.1 -11.9C200.2 46.9 170.5 93.8 132.1 132.6C93.8 171.5 46.9 202.2 -11.4 213.7C-69.8 225.1 -139.5 217.2 -173.4 178.4C-207.2 139.5 -205.1 69.8 -187.9 17.2C-170.7 -35.4 -138.4 -70.7 -104.5 -114.7C-70.7 -158.7 -35.4 -211.4 17.7 -229C70.7 -246.7 141.4 -229.4 179.8 -185.4"}],easing:"easeInOutSine",duration:6e3,direction:"infinite alternate",loop:!0})};return Vr(()=>{e(),t()}),(a,n)=>(_r(),jr("div",he,Ce))}});export{xe as default};