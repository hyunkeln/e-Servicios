/*EASING*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*SCROLL*/
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*FULLBG*/
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);

/*PARALLAX*/
if(!jQuery.event.special.frame){(function(d,h){function i(a,b){function e(){f.frameCount++;a.call(f)}var f=this,g;this.frameDuration=b||25;this.frameCount=-1;this.start=function(){e();g=setInterval(e,this.frameDuration)};this.stop=function(){clearInterval(g);g=null}}function j(){var a=d.event.special.frame.handler,b=d.Event("frame"),e=this.array,f=e.length;for(b.frameCount=this.frameCount;f--;)a.call(e[f],b)}var c;if(!d.event.special.frame)d.event.special.frame={setup:function(a){if(c)c.array.push(this);else{c=new i(j,a&&a.frameDuration);c.array=[this];var b=setTimeout(function(){c.start();clearTimeout(b);b=null},0)}},teardown:function(){for(var a=c.array,b=a.length;b--;)if(a[b]===this){a.splice(b,1);break}if(a.length===0){c.stop();c=h}},handler:function(){d.event.handle.apply(this,arguments)}}})(jQuery);}
(function(l,t){function y(i){return this.lib[i]}function q(i){return typeof i==="boolean"?i:!!parseFloat(i)}function r(i,b){var k=[q(i.xparallax),q(i.yparallax)];this.ontarget=false;this.decay=i.decay;this.pointer=b||[0.5,0.5];this.update=function(e,a){if(this.ontarget)this.pointer=e;else if((!k[0]||u(e[0]-this.pointer[0])<a[0])&&(!k[1]||u(e[1]-this.pointer[1])<a[1])){this.ontarget=true;this.pointer=e}else{a=[];for(var g=2;g--;)if(k[g])a[g]=e[g]+this.decay*(this.pointer[g]-e[g]);this.pointer=a}}}
function z(i,b){var k=this,e=i instanceof l?i:l(i),a=[q(b.xparallax),q(b.yparallax)],g=0,d;this.pointer=[0,0];this.active=false;this.activeOutside=b&&b.activeOutside||false;this.update=function(h){var j=this.pos,c=this.size,f=[],m=2;if(g>0){if(g===2){g=0;if(d)h=d}for(;m--;)if(a[m]){f[m]=(h[m]-j[m])/c[m];f[m]=f[m]<0?0:f[m]>1?1:f[m]}this.active=true;this.pointer=f}else this.active=false};this.updateSize=function(){var h=e.width(),j=e.height();k.size=[h,j];k.threshold=[1/h,1/j]};this.updatePos=function(){var h=e.offset()||{left:0,top:0},j=parseInt(e.css("borderLeftWidth"))+parseInt(e.css("paddingLeft")),c=parseInt(e.css("borderTopWidth"))+parseInt(e.css("paddingTop"));k.pos=[h.left+j,h.top+c]};l(window).bind("resize",k.updateSize).bind("resize",k.updatePos);e.bind("mouseenter",function(){g=1}).bind("mouseleave",function(h){g=2;d=[h.pageX,h.pageY]});this.updateSize();this.updatePos()}function A(i,b){var k=[],e=[],a=[],g=[];this.update=function(d){for(var h=[],j,c,f=2,m={};f--;)if(e[f]){h[f]=e[f]*d[f]+a[f];if(k[f]){j=g[f];c=h[f]*-1}else{j=h[f]*100+"%";c=h[f]*this.size[f]*-1}if(f===0){m.left=j;m.marginLeft=c}else{m.top=j;m.marginTop=c}}i.css(m)};this.setParallax=function(d,h,j,c){d=[d||b.xparallax,h||b.yparallax];j=[j||b.xorigin,c||b.yorigin];for(c=2;c--;){k[c]=o.px.test(d[c]);if(typeof j[c]==="string")j[c]=o.percent.test(j[c])?parseFloat(j[c])/100:v[j[c]]||1;if(k[c]){e[c]=parseInt(d[c]);a[c]=j[c]*(this.size[c]-e[c]);g[c]=j[c]*100+"%"}else{e[c]=d[c]===true?1:o.percent.test(d[c])?parseFloat(d[c])/100:d[c];a[c]=e[c]?j[c]*(1-e[c]):0}}};this.getPointer=function(){for(var d=i.offsetParent(),h=i.position(),j=[],c=[],f=2;f--;){j[f]=k[f]?0:h[f===0?"left":"top"]/(d[f===0?"outerWidth":"outerHeight"]()-this.size[f]);c[f]=(j[f]-a[f])/e[f]}return c};this.setSize=function(d,h){this.size=[d||i.outerWidth(),h||i.outerHeight()]};this.setSize(b.width,b.height);this.setParallax(b.xparallax,b.yparallax,b.xorigin,b.yorigin)}function s(i){var b=l(this),k=i.data,e=b.data(n),a=k.port,g=k.mouse,d=e.mouse;if(k.timeStamp!==i.timeStamp){k.timeStamp=i.timeStamp;a.update(w);if(a.active||!g.ontarget)g.update(a.pointer,a.threshold)}if(d){d.update(e.freeze?e.freeze.pointer:a.pointer,a.threshold);if(d.ontarget){delete e.mouse;e.freeze&&b.unbind(p).addClass(k.freezeClass)}g=d}else g.ontarget&&!a.active&&b.unbind(p);e.layer.update(g.pointer)}var n="parallax",x={mouseport:"body",xparallax:true,yparallax:true,xorigin:0.5,yorigin:0.5,decay:0.66,frameDuration:30,freezeClass:"freeze"},v={left:0,top:0,middle:0.5,center:0.5,right:1,bottom:1},o={px:/^\d+\s?px$/,percent:/^\d+\s?%$/},p="frame."+n,u=Math.abs,w=[0,0];y.lib=v;l.fn[n]=function(i){var b=l.extend({},l.fn[n].options,i),k=arguments,e=this;if(!(b.mouseport instanceof l))b.mouseport=l(b.mouseport);b.port=new z(b.mouseport,b);b.mouse=new r(b);b.mouseport.bind("mouseenter",function(){b.mouse.ontarget=false;e.each(function(){var a=l(this);a.data(n).freeze||a.bind(p,b,s)})});return e.bind("freeze",function(a){var g=l(this),d=g.data(n),h=d.mouse||d.freeze||b.mouse,j=o.percent.exec(a.x)?parseFloat(a.x.replace(/%$/,""))/100:a.x||h.pointer[0],c=o.percent.exec(a.y)?parseFloat(a.y.replace(/%$/,""))/100:a.y||h.pointer[1];a=a.decay;d.freeze={pointer:[j,c]};d.mouse=new r(b,h.pointer);if(a!==t)d.mouse.decay=a;g.bind(p,b,s)}).bind("unfreeze",function(a){var g=l(this),d=g.data(n);a=a.decay;var h;if(d.freeze){h=d.mouse?d.mouse.pointer:d.freeze.pointer;d.mouse=new r(b);d.mouse.pointer=h;if(a!==t)d.mouse.decay=a;delete d.freeze;g.removeClass(x.freezeClass).bind(p,b,s)}}).each(function(a){var g=l(this);a=k[a+1]?l.extend({},b,k[a+1]):b;var d=new A(g,a);g.data(n,{layer:d,mouse:new r(a,d.getPointer())})})};l.fn[n].options=x;l(document).ready(function(){l(document).mousemove(function(i){w=[i.pageX,i.pageY]})})})(jQuery);

/*EVENT FRAME*/
(function(jQuery,undefined){var timer;function Timer(fn,fd){var self=this,clock;function update(){self.frameCount++;fn.call(self);}
this.frameDuration=fd||25;this.frameCount=-1;this.start=function(){update();clock=setInterval(update,this.frameDuration);};this.stop=function(){clearInterval(clock);clock=null;};}
function callHandler(){var fn=jQuery.event.special.frame.handler,event=jQuery.Event("frame"),array=this.array,l=array.length;event.frameCount=this.frameCount;while(l--){fn.call(array[l],event);}}
if(!jQuery.event.special.frame){jQuery.event.special.frame={setup:function(data,namespaces){if(timer){timer.array.push(this);}
else{timer=new Timer(callHandler,data&&data.frameDuration);timer.array=[this];var t=setTimeout(function(){timer.start();clearTimeout(t);t=null;},0);}
return;},teardown:function(namespaces){var array=timer.array,l=array.length;while(l--){if(array[l]===this){array.splice(l,1);break;}}
if(array.length===0){timer.stop();timer=undefined;}
return;},handler:function(event){jQuery.event.handle.apply(this,arguments);}};}})(jQuery);

/*REMOTE*/
var remote={ajax:function(service_url){var response=$.ajax({dataType:"jsonp",url:service_url,});return response;}};

/*TEMPLATES*/
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);



/*MOUSEWHEEL*/
/* Copyright (c) 2006 Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * $LastChangedDate: 2007-12-20 09:02:08 -0600 (Thu, 20 Dec 2007) $
 * $Rev: 4265 $
 *
 * Version: 3.0
 * 
 * Requires: $ 1.2.2+
 */

(function($) {

$.event.special.mousewheel = {
	setup: function() {
		var handler = $.event.special.mousewheel.handler;
		
		// Fix pageX, pageY, clientX and clientY for mozilla
		if ( $.browser.mozilla )
			$(this).bind('mousemove.mousewheel', function(event) {
				$.data(this, 'mwcursorposdata', {
					pageX: event.pageX,
					pageY: event.pageY,
					clientX: event.clientX,
					clientY: event.clientY
				});
			});
	
		if ( this.addEventListener )
			this.addEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = handler;
	},
	
	teardown: function() {
		var handler = $.event.special.mousewheel.handler;
		
		$(this).unbind('mousemove.mousewheel');
		
		if ( this.removeEventListener )
			this.removeEventListener( ($.browser.mozilla ? 'DOMMouseScroll' : 'mousewheel'), handler, false);
		else
			this.onmousewheel = function(){};
		
		$.removeData(this, 'mwcursorposdata');
	},
	
	handler: function(event) {
		var args = Array.prototype.slice.call( arguments, 1 );
		
		event = $.event.fix(event || window.event);
		// Get correct pageX, pageY, clientX and clientY for mozilla
		$.extend( event, $.data(this, 'mwcursorposdata') || {} );
		var delta = 0, returnValue = true;
		
		if ( event.wheelDelta ) delta = event.wheelDelta/120;
		if ( event.detail     ) delta = -event.detail/3;
//		if ( $.browser.opera  ) delta = -event.wheelDelta;
		
		event.data  = event.data || {};
		event.type  = "mousewheel";
		
		// Add delta to the front of the arguments
		args.unshift(delta);
		// Add event to the front of the arguments
		args.unshift(event);

		return $.event.handle.apply(this, args);
	}
};

$.fn.extend({
	mousewheel: function(fn) {
		return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
	},
	
	unmousewheel: function(fn) {
		return this.unbind("mousewheel", fn);
	}
});

})(jQuery);


/*jQueryEM*/
/**
 * @projectDescription Monitor Font Size Changes with jQuery
 *
 * @version 1.0
 * @author Dave Cardwell
 *
 * jQuery-Em - $Revision: 24 $ ($Date: 2007-08-19 11:24:56 +0100 (Sun, 19 Aug 2007) $)
 * http://davecardwell.co.uk/javascript/jquery/plugins/jquery-em/
 *
 * Copyright ©2007 Dave Cardwell <http://davecardwell.co.uk/>
 *
 * Released under the MIT licence:
 * http://www.opensource.org/licenses/mit-license.php
 */

// Upon $(document).ready()�?�
jQuery(function($) {
    // Configuration�?�
    var eventName = 'emchange';
    
    
    // Set up default options.
    $.em = $.extend({
        /**
         * The jQuery-Em version string.
         *
         * @example $.em.version;
         * @desc '1.0a'
         *
         * @property
         * @name version
         * @type String
         * @cat Plugins/Em
         */
        version: '1.0',
        
        /**
         * The number of milliseconds to wait when polling for changes to the
         * font size.
         *
         * @example $.em.delay = 400;
         * @desc Defaults to 200.
         *
         * @property
         * @name delay
         * @type Number
         * @cat Plugins/Em
         */
        delay: 200,
        
        /**
         * The element used to detect changes to the font size.
         *
         * @example $.em.element = $('<div />')[0];
         * @desc Default is an empty, absolutely positioned, 100em-wide <div>.
         *
         * @private
         * @property
         * @name element
         * @type Element
         * @cat Plugins/Em
         */
        element: $('<div />').css({ left:     '-100em',
                                    position: 'absolute',
                                    width:    '100em' })
                             .prependTo('body')[0],
        
        /**
         * The action to perform when a change in the font size is detected.
         *
         * @example $.em.action = function() { ... }
         * @desc The default action is to trigger a global �??emchange�?� event.
         * You probably shouldn�??t change this behaviour as other plugins may
         * rely on it, but the option is here for completion.
         *
         * @example $(document).bind('emchange', function(e, cur, prev) {...})
         * @desc Any functions triggered on this event are passed the current
         * font size, and last known font size as additional parameters.
         *
         * @private
         * @property
         * @name action
         * @type Function
         * @cat Plugins/Em
         * @see current
         * @see previous
         */
        action: function() {
            var currentWidth = $.em.element.offsetWidth / 100;
            
            // If the font size has changed since we last checked�?�
            if ( currentWidth != $.em.current ) {
                /**
                 * The previous pixel value of the user agent�??s font size. See
                 * $.em.current for caveats. Will initially be undefined until
                 * the �??emchange�?� event is triggered.
                 *
                 * @example $.em.previous;
                 * @result 16
                 *
                 * @property
                 * @name previous
                 * @type Number
                 * @cat Plugins/Em
                 * @see current
                 */
                $.em.previous = $.em.current;
                
                /**
                 * The current pixel value of the user agent�??s font size. As
                 * with $.em.previous, this value *may* be subject to minor
                 * browser rounding errors that mean you might not want to
                 * rely upon it as an absolute value.
                 *
                 * @example $.em.current;
                 * @result 14
                 *
                 * @property
                 * @name current
                 * @type Number
                 * @cat Plugins/Em
                 * @see previous
                 */
                $.em.current = currentWidth;
                
                $.event.trigger(eventName, [$.em.current, $.em.previous]);
            }
        }
    }, $.em );
    
    
    /**
     * Bind a function to the emchange event of each matched element.
     *
     * @example $("p").emchange( function() { alert("Hello"); } );
     *
     * @name emchange
     * @type jQuery
     * @param Function fn A function to bind to the emchange event.
     * @cat Plugins/Em
     */

    /**
     * Trigger the emchange event of each matched element.
     *
     * @example $("p").emchange()
     *
     * @name emchange
     * @type jQuery
     * @cat Plugins/Em
     */
    $.fn[eventName] = function(fn) { return fn ? this.bind(eventName, fn)
                                               : this.trigger(eventName); };
    
    
    // Store the initial pixel value of the user agent�??s font size.
    $.em.current = $.em.element.offsetWidth / 100;
    
    /**
     * While polling for font-size changes, $.em.iid stores the intervalID in
     * case you should want to cancel with clearInterval().
     *
     * @example window.clearInterval( $.em.iid );
     * 
     * @property
     * @name iid
     * @type Number
     * @cat Plugins/Em
     */
    $.em.iid = setInterval( $.em.action, $.em.delay );
});

/*JSCROLLPANE*/
/* Copyright (c) 2009 Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * See http://kelvinluck.com/assets/jquery/jScrollPane/
 * $Id$
 */

/**
 * Replace the vertical scroll bars on any matched elements with a fancy
 * styleable (via CSS) version. With JS disabled the elements will
 * gracefully degrade to the browsers own implementation of overflow:auto.
 * If the mousewheel plugin has been included on the page then the scrollable areas will also
 * respond to the mouse wheel.
 *
 * @example jQuery(".scroll-pane").jScrollPane();
 *
 * @name jScrollPane
 * @type jQuery
 * @param Object	settings	hash with options, described below.
 *								scrollbarWidth	-	The width of the generated scrollbar in pixels
 *								scrollbarMargin	-	The amount of space to leave on the side of the scrollbar in pixels
 *								wheelSpeed		-	The speed the pane will scroll in response to the mouse wheel in pixels
 *								showArrows		-	Whether to display arrows for the user to scroll with
 *								arrowSize		-	The height of the arrow buttons if showArrows=true
 *								animateTo		-	Whether to animate when calling scrollTo and scrollBy
 *								dragMinHeight	-	The minimum height to allow the drag bar to be
 *								dragMaxHeight	-	The maximum height to allow the drag bar to be
 *								animateInterval	-	The interval in milliseconds to update an animating scrollPane (default 100)
 *								animateStep		-	The amount to divide the remaining scroll distance by when animating (default 3)
 *								maintainPosition-	Whether you want the contents of the scroll pane to maintain it's position when you re-initialise it - so it doesn't scroll as you add more content (default true)
 *								tabIndex		-	The tabindex for this jScrollPane to control when it is tabbed to when navigating via keyboard (default 0)
 *								enableKeyboardNavigation - Whether to allow keyboard scrolling of this jScrollPane when it is focused (default true)
 *								animateToInternalLinks - Whether the move to an internal link (e.g. when it's focused by tabbing or by a hash change in the URL) should be animated or instant (default false)
 *								scrollbarOnLeft	-	Display the scrollbar on the left side?  (needs stylesheet changes, see examples.html)
 *								reinitialiseOnImageLoad - Whether the jScrollPane should automatically re-initialise itself when any contained images are loaded (default false)
 *								topCapHeight	-	The height of the "cap" area between the top of the jScrollPane and the top of the track/ buttons
 *								bottomCapHeight	-	The height of the "cap" area between the bottom of the jScrollPane and the bottom of the track/ buttons
 *								observeHash		-	Whether jScrollPane should attempt to automagically scroll to the correct place when an anchor inside the scrollpane is linked to (default true)
 * @return jQuery
 * @cat Plugins/jScrollPane
 * @author Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 */

(function($) {

$.jScrollPane = {
	active : []
};
$.fn.jScrollPane = function(settings)
{
	settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

	var rf = function() { return false; };
	
	return this.each(
		function()
		{
			var $this = $(this);
			var paneEle = this;
			var currentScrollPosition = 0;
			var paneWidth;
			var paneHeight;
			var trackHeight;
			var trackOffset = settings.topCapHeight;
			var $container;
			
			if ($(this).parent().is('.jScrollPaneContainer')) {
				$container = $(this).parent();
				currentScrollPosition = settings.maintainPosition ? $this.position().top : 0;
				var $c = $(this).parent();
				paneWidth = $c.innerWidth();
				paneHeight = $c.outerHeight();
				$('>.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown, >.jScrollCap', $c).remove();
				$this.css({'top':0});
			} else {
				$this.data('originalStyleTag', $this.attr('style'));
				// Switch the element's overflow to hidden to ensure we get the size of the element without the scrollbars [http://plugins.jquery.com/node/1208]
				$this.css('overflow', 'hidden');
				this.originalPadding = $this.css('paddingTop') + ' ' + $this.css('paddingRight') + ' ' + $this.css('paddingBottom') + ' ' + $this.css('paddingLeft');
				this.originalSidePaddingTotal = (parseInt($this.css('paddingLeft')) || 0) + (parseInt($this.css('paddingRight')) || 0);
				paneWidth = $this.innerWidth();
				paneHeight = $this.innerHeight();
				$container = $('<div></div>')
					.attr({'className':'jScrollPaneContainer'})
					.css(
						{
							'height':paneHeight+'px', 
							'width':paneWidth+'px'
						}
					);
				if (settings.enableKeyboardNavigation) {
					$container.attr(
						'tabindex', 
						settings.tabIndex
					);
				}
				$this.wrap($container);
				$container = $this.parent();
				// deal with text size changes (if the jquery.em plugin is included)
				// and re-initialise the scrollPane so the track maintains the
				// correct size
				$(document).bind(
					'emchange', 
					function(e, cur, prev)
					{
						$this.jScrollPane(settings);
					}
				);
				
			}
			trackHeight = paneHeight;
			
			if (settings.reinitialiseOnImageLoad) {
				// code inspired by jquery.onImagesLoad: http://plugins.jquery.com/project/onImagesLoad
				// except we re-initialise the scroll pane when each image loads so that the scroll pane is always up to size...
				// TODO: Do I even need to store it in $.data? Is a local variable here the same since I don't pass the reinitialiseOnImageLoad when I re-initialise?
				var $imagesToLoad = $.data(paneEle, 'jScrollPaneImagesToLoad') || $('img', $this);
				var loadedImages = [];
				
				if ($imagesToLoad.length) {
					$imagesToLoad.each(function(i, val)	{
						$(this).bind('load readystatechange', function() {
							if($.inArray(i, loadedImages) == -1){ //don't double count images
								loadedImages.push(val); //keep a record of images we've seen
								$imagesToLoad = $.grep($imagesToLoad, function(n, i) {
									return n != val;
								});
								$.data(paneEle, 'jScrollPaneImagesToLoad', $imagesToLoad);
								var s2 = $.extend(settings, {reinitialiseOnImageLoad:false});
								$this.jScrollPane(s2); // re-initialise
							}
						}).each(function(i, val) {
							if(this.complete || this.complete===undefined) { 
								//needed for potential cached images
								this.src = this.src; 
							} 
						});
					});
				};
			}

			var p = this.originalSidePaddingTotal;
			var realPaneWidth = paneWidth - settings.scrollbarWidth - settings.scrollbarMargin - p;

			var cssToApply = {
				'height':'auto',
				'width': realPaneWidth + 'px'
			}

			if(settings.scrollbarOnLeft) {
				cssToApply.paddingLeft = settings.scrollbarMargin + settings.scrollbarWidth + 'px';
			} else {
				cssToApply.paddingRight = settings.scrollbarMargin + 'px';
			}

			$this.css(cssToApply);

			var contentHeight = $this.outerHeight();
			var percentInView = paneHeight / contentHeight;
			
			var isScrollable = percentInView < .99;
			$container[isScrollable ? 'addClass' : 'removeClass']('jScrollPaneScrollable');

			if (isScrollable) {
				$container.append(
					$('<div></div>').addClass('jScrollCap jScrollCapTop').css({height:settings.topCapHeight}),
					$('<div></div>').attr({'className':'jScrollPaneTrack'}).css({'width':settings.scrollbarWidth+'px'}).append(
						$('<div></div>').attr({'className':'jScrollPaneDrag'}).css({'width':settings.scrollbarWidth+'px'}).append(
							$('<div></div>').attr({'className':'jScrollPaneDragTop'}).css({'width':settings.scrollbarWidth+'px'}),
							$('<div></div>').attr({'className':'jScrollPaneDragBottom'}).css({'width':settings.scrollbarWidth+'px'})
						)
					),
					$('<div></div>').addClass('jScrollCap jScrollCapBottom').css({height:settings.bottomCapHeight})
				);
				
				var $track = $('>.jScrollPaneTrack', $container);
				var $drag = $('>.jScrollPaneTrack .jScrollPaneDrag', $container);
				
				
				var currentArrowDirection;
				var currentArrowTimerArr = [];// Array is used to store timers since they can stack up when dealing with keyboard events. This ensures all timers are cleaned up in the end, preventing an acceleration bug.
				var currentArrowInc;
				var whileArrowButtonDown = function() 
				{
					if (currentArrowInc > 4 || currentArrowInc % 4 == 0) {
						positionDrag(dragPosition + currentArrowDirection * mouseWheelMultiplier);
					}
					currentArrowInc++;
				};

				if (settings.enableKeyboardNavigation) {
					$container.bind(
						'keydown.jscrollpane',
						function(e) 
						{
							switch (e.keyCode) {
								case 38: //up
									currentArrowDirection = -1;
									currentArrowInc = 0;
									whileArrowButtonDown();
									currentArrowTimerArr[currentArrowTimerArr.length] = setInterval(whileArrowButtonDown, 100);
									return false;
								case 40: //down
									currentArrowDirection = 1;
									currentArrowInc = 0;
									whileArrowButtonDown();
									currentArrowTimerArr[currentArrowTimerArr.length] = setInterval(whileArrowButtonDown, 100);
									return false;
								case 33: // page up
								case 34: // page down
									// TODO
									return false;
								default:
							}
						}
					).bind(
						'keyup.jscrollpane',
						function(e) 
						{
							if (e.keyCode == 38 || e.keyCode == 40) {
								for (var i = 0; i < currentArrowTimerArr.length; i++) {
									clearInterval(currentArrowTimerArr[i]);
								}
								return false;
							}
						}
					);
				}

				if (settings.showArrows) {
					
					var currentArrowButton;
					var currentArrowInterval;

					var onArrowMouseUp = function(event)
					{
						$('html').unbind('mouseup', onArrowMouseUp);
						currentArrowButton.removeClass('jScrollActiveArrowButton');
						clearInterval(currentArrowInterval);
					};
					var onArrowMouseDown = function() {
						$('html').bind('mouseup', onArrowMouseUp);
						currentArrowButton.addClass('jScrollActiveArrowButton');
						currentArrowInc = 0;
						whileArrowButtonDown();
						currentArrowInterval = setInterval(whileArrowButtonDown, 100);
					};
					$container
						.append(
							$('<a></a>')
								.attr(
									{
										'href':'javascript:;', 
										'className':'jScrollArrowUp', 
										'tabindex':-1
									}
								)
								.css(
									{
										'width':settings.scrollbarWidth+'px',
										'top':settings.topCapHeight + 'px'
									}
								)
								.html('Scroll up')
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = -1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf),
							$('<a></a>')
								.attr(
									{
										'href':'javascript:;', 
										'className':'jScrollArrowDown', 
										'tabindex':-1
									}
								)
								.css(
									{
										'width':settings.scrollbarWidth+'px',
										'bottom':settings.bottomCapHeight + 'px'
									}
								)
								.html('Scroll down')
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = 1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf)
						);
					var $upArrow = $('>.jScrollArrowUp', $container);
					var $downArrow = $('>.jScrollArrowDown', $container);
				}
				
				if (settings.arrowSize) {
					trackHeight = paneHeight - settings.arrowSize - settings.arrowSize;
					trackOffset += settings.arrowSize;
				} else if ($upArrow) {
					var topArrowHeight = $upArrow.height();
					settings.arrowSize = topArrowHeight;
					trackHeight = paneHeight - topArrowHeight - $downArrow.height();
					trackOffset += topArrowHeight;
				}
				trackHeight -= settings.topCapHeight + settings.bottomCapHeight;
				$track.css({'height': trackHeight+'px', top:trackOffset+'px'})
				
				var $pane = $(this).css({'position':'absolute', 'overflow':'visible'});
				
				var currentOffset;
				var maxY;
				var mouseWheelMultiplier;
				// store this in a seperate variable so we can keep track more accurately than just updating the css property..
				var dragPosition = 0;
				var dragMiddle = percentInView*paneHeight/2;
				
				// pos function borrowed from tooltip plugin and adapted...
				var getPos = function (event, c) {
					var p = c == 'X' ? 'Left' : 'Top';
					return event['page' + c] || (event['client' + c] + (document.documentElement['scroll' + p] || document.body['scroll' + p])) || 0;
				};
				
				var ignoreNativeDrag = function() {	return false; };
				
				var initDrag = function()
				{
					ceaseAnimation();
					currentOffset = $drag.offset(false);
					currentOffset.top -= dragPosition;
					maxY = trackHeight - $drag[0].offsetHeight;
					mouseWheelMultiplier = 2 * settings.wheelSpeed * maxY / contentHeight;
				};
				
				var onStartDrag = function(event)
				{
					initDrag();
					dragMiddle = getPos(event, 'Y') - dragPosition - currentOffset.top;
					$('html').bind('mouseup', onStopDrag).bind('mousemove', updateScroll).bind('mouseleave', onStopDrag)
					if ($.browser.msie) {
						$('html').bind('dragstart', ignoreNativeDrag).bind('selectstart', ignoreNativeDrag);
					}
					return false;
				};
				var onStopDrag = function()
				{
					$('html').unbind('mouseup', onStopDrag).unbind('mousemove', updateScroll);
					dragMiddle = percentInView*paneHeight/2;
					if ($.browser.msie) {
						$('html').unbind('dragstart', ignoreNativeDrag).unbind('selectstart', ignoreNativeDrag);
					}
				};
				var positionDrag = function(destY)
				{
					$container.scrollTop(0);
					destY = destY < 0 ? 0 : (destY > maxY ? maxY : destY);
					dragPosition = destY;
					$drag.css({'top':destY+'px'});
					var p = destY / maxY;
					$this.data('jScrollPanePosition', (paneHeight-contentHeight)*-p);
					$pane.css({'top':((paneHeight-contentHeight)*p) + 'px'});
					$this.trigger('scroll');
					if (settings.showArrows) {
						$upArrow[destY == 0 ? 'addClass' : 'removeClass']('disabled');
						$downArrow[destY == maxY ? 'addClass' : 'removeClass']('disabled');
					}
				};
				var updateScroll = function(e)
				{
					positionDrag(getPos(e, 'Y') - currentOffset.top - dragMiddle);
				};
				
				var dragH = Math.max(Math.min(percentInView*(paneHeight-settings.arrowSize*2), settings.dragMaxHeight), settings.dragMinHeight);
				
				$drag.css(
					{'height':dragH+'px'}
				).bind('mousedown', onStartDrag);
				
				var trackScrollInterval;
				var trackScrollInc;
				var trackScrollMousePos;
				var doTrackScroll = function()
				{
					if (trackScrollInc > 8 || trackScrollInc%4==0) {
						positionDrag((dragPosition - ((dragPosition - trackScrollMousePos) / 2)));
					}
					trackScrollInc ++;
				};
				var onStopTrackClick = function()
				{
					clearInterval(trackScrollInterval);
					$('html').unbind('mouseup', onStopTrackClick).unbind('mousemove', onTrackMouseMove);
				};
				var onTrackMouseMove = function(event)
				{
					trackScrollMousePos = getPos(event, 'Y') - currentOffset.top - dragMiddle;
				};
				var onTrackClick = function(event)
				{
					initDrag();
					onTrackMouseMove(event);
					trackScrollInc = 0;
					$('html').bind('mouseup', onStopTrackClick).bind('mousemove', onTrackMouseMove);
					trackScrollInterval = setInterval(doTrackScroll, 100);
					doTrackScroll();
					return false;
				};
				
				$track.bind('mousedown', onTrackClick);
				
				$container.bind(
					'mousewheel',
					function (event, delta) {
						delta = delta || (event.wheelDelta ? event.wheelDelta / 120 : (event.detail) ?
-event.detail/3 : 0);
						initDrag();
						ceaseAnimation();
						var d = dragPosition;
						positionDrag(dragPosition - delta * mouseWheelMultiplier);
						var dragOccured = d != dragPosition;
						return !dragOccured;
					}
				);

				var _animateToPosition;
				var _animateToInterval;
				function animateToPosition()
				{
					var diff = (_animateToPosition - dragPosition) / settings.animateStep;
					if (diff > 1 || diff < -1) {
						positionDrag(dragPosition + diff);
					} else {
						positionDrag(_animateToPosition);
						ceaseAnimation();
					}
				}
				var ceaseAnimation = function()
				{
					if (_animateToInterval) {
						clearInterval(_animateToInterval);
						delete _animateToPosition;
					}
				};
				var scrollTo = function(pos, preventAni)
				{
					if (typeof pos == "string") {
						// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
						// errors from the lookup...
						try {
							$e = $(pos, $this);
						} catch (err) {
							return;
						}
						if (!$e.length) return;
						pos = $e.offset().top - $this.offset().top;
					}
					ceaseAnimation();
					var maxScroll = contentHeight - paneHeight;
					pos = pos > maxScroll ? maxScroll : pos;
					$this.data('jScrollPaneMaxScroll', maxScroll);
					var destDragPosition = pos/maxScroll * maxY;
					if (preventAni || !settings.animateTo) {
						positionDrag(destDragPosition);
					} else {
						$container.scrollTop(0);
						_animateToPosition = destDragPosition;
						_animateToInterval = setInterval(animateToPosition, settings.animateInterval);
					}
				};
				$this[0].scrollTo = scrollTo;
				
				$this[0].scrollBy = function(delta)
				{
					var currentPos = -parseInt($pane.css('top')) || 0;
					scrollTo(currentPos + delta);
				};
				
				initDrag();
				
				scrollTo(-currentScrollPosition, true);
			
				// Deal with it when the user tabs to a link or form element within this scrollpane
				$('*', this).bind(
					'focus',
					function(event)
					{
						var $e = $(this);
						
						// loop through parents adding the offset top of any elements that are relatively positioned between
						// the focused element and the jScrollPaneContainer so we can get the true distance from the top
						// of the focused element to the top of the scrollpane...
						var eleTop = 0;
						
						var preventInfiniteLoop = 100;
						
						while ($e[0] != $this[0]) {
							eleTop += $e.position().top;
							$e = $e.offsetParent();
							if (!preventInfiniteLoop--) {
								return;
							}
						}
						
						var viewportTop = -parseInt($pane.css('top')) || 0;
						var maxVisibleEleTop = viewportTop + paneHeight;
						var eleInView = eleTop > viewportTop && eleTop < maxVisibleEleTop;
						if (!eleInView) {
							var destPos = eleTop - settings.scrollbarMargin;
							if (eleTop > viewportTop) { // element is below viewport - scroll so it is at bottom.
								destPos += $(this).height() + 15 + settings.scrollbarMargin - paneHeight;
							}
							scrollTo(destPos);
						}
					}
				)
				
				
				if (settings.observeHash) {
					if (location.hash && location.hash.length > 1) {
						setTimeout(function(){
							scrollTo(location.hash);
						}, $.browser.safari ? 100 : 0);
					}
					
					// use event delegation to listen for all clicks on links and hijack them if they are links to
					// anchors within our content...
					$(document).bind('click', function(e){
						$target = $(e.target);
						if ($target.is('a')) {
							var h = $target.attr('href');
							if (h && h.substr(0, 1) == '#' && h.length > 1) {
								setTimeout(function(){
									scrollTo(h, !settings.animateToInternalLinks);
								}, $.browser.safari ? 100 : 0);
							}
						}
					});
				}
				
				// Deal with dragging and selecting text to make the scrollpane scroll...
				function onSelectScrollMouseDown(e)
				{
				   $(document).bind('mousemove.jScrollPaneDragging', onTextSelectionScrollMouseMove);
				   $(document).bind('mouseup.jScrollPaneDragging',   onSelectScrollMouseUp);
				  
				}
				
				var textDragDistanceAway;
				var textSelectionInterval;
				
				function onTextSelectionInterval()
				{
					direction = textDragDistanceAway < 0 ? -1 : 1;
					$this[0].scrollBy(textDragDistanceAway / 2);
				}

				function clearTextSelectionInterval()
				{
					if (textSelectionInterval) {
						clearInterval(textSelectionInterval);
						textSelectionInterval = undefined;
					}
				}
				
				function onTextSelectionScrollMouseMove(e)
				{
					var offset = $this.parent().offset().top;
					var maxOffset = offset + paneHeight;
					var mouseOffset = getPos(e, 'Y');
					textDragDistanceAway = mouseOffset < offset ? mouseOffset - offset : (mouseOffset > maxOffset ? mouseOffset - maxOffset : 0);
					if (textDragDistanceAway == 0) {
						clearTextSelectionInterval();
					} else {
						if (!textSelectionInterval) {
							textSelectionInterval  = setInterval(onTextSelectionInterval, 100);
						}
					}
				}

				function onSelectScrollMouseUp(e)
				{
				   $(document)
					  .unbind('mousemove.jScrollPaneDragging')
					  .unbind('mouseup.jScrollPaneDragging');
				   clearTextSelectionInterval();
				}

				$container.bind('mousedown.jScrollPane', onSelectScrollMouseDown);

				
				$.jScrollPane.active.push($this[0]);
				
			} else {
				$this.css(
					{
						'height':paneHeight+'px',
						'width':paneWidth-this.originalSidePaddingTotal+'px',
						'padding':this.originalPadding
					}
				);
				$this[0].scrollTo = $this[0].scrollBy = function() {};
				// clean up listeners
				$this.parent().unbind('mousewheel').unbind('mousedown.jScrollPane').unbind('keydown.jscrollpane').unbind('keyup.jscrollpane');
			}
			
		}
	)
};

$.fn.jScrollPaneRemove = function()
{
	$(this).each(function()
	{
		$this = $(this);
		var $c = $this.parent();
		if ($c.is('.jScrollPaneContainer')) {
			$this.css(
				{
					'top':'',
					'height':'',
					'width':'',
					'padding':'',
					'overflow':'',
					'position':''
				}
			);
			$this.attr('style', $this.data('originalStyleTag'));
			$c.after($this).remove();
		}
	});
}

$.fn.jScrollPane.defaults = {
	scrollbarWidth : 10,
	scrollbarMargin : 5,
	wheelSpeed : 18,
	showArrows : false,
	arrowSize : 0,
	animateTo : false,
	dragMinHeight : 1,
	dragMaxHeight : 99999,
	animateInterval : 100,
	animateStep: 3,
	maintainPosition: true,
	scrollbarOnLeft: false,
	reinitialiseOnImageLoad: false,
	tabIndex : 0,
	enableKeyboardNavigation: true,
	animateToInternalLinks: false,
	topCapHeight: 0,
	bottomCapHeight: 0,
	observeHash: true
};

// clean up the scrollTo expandos
$(window)
	.bind('unload', function() {
		var els = $.jScrollPane.active; 
		for (var i=0; i<els.length; i++) {
			els[i].scrollTo = els[i].scrollBy = null;
		}
	}
);

})(jQuery);