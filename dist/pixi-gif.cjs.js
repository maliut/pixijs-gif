/*!
 * @pixi/gif - v1.0.2
 * https://github.com/pixijs/gif
 * Compiled Mon, 07 Feb 2022 16:16:04 UTC
 *
 * @pixi/gif is licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@pixi/loaders"),t=require("@pixi/sprite"),r=require("@pixi/core"),n=require("@pixi/settings"),i=require("@pixi/constants"),o=require("@pixi/ticker"),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)};var s={},d={},u={};Object.defineProperty(u,"__esModule",{value:!0}),u.loop=u.conditional=u.parse=void 0;u.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,i)}));else if("function"==typeof r)r(t,n,i,e);else{var o=Object.keys(r)[0];Array.isArray(r[o])?(i[o]={},e(t,r[o],n,i[o])):i[o]=r[o](t,n,i,e)}return n};u.conditional=function(e,t){return function(r,n,i,o){t(r,n,i)&&o(r,e,n,i)}};u.loop=function(e,t){return function(r,n,i,o){for(var a=[],s=r.pos;t(r,n,i);){var d={};if(o(r,e,n,d),r.pos===s)break;s=r.pos,a.push(d)}return a}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.readBits=c.readArray=c.readUnsigned=c.readString=c.peekBytes=c.readBytes=c.peekByte=c.readByte=c.buildStream=void 0;c.buildStream=function(e){return{data:e,pos:0}};var p=function(){return function(e){return e.data[e.pos++]}};c.readByte=p;c.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var l=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};c.readBytes=l;c.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}};c.readString=function(e){return function(t){return Array.from(l(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}};c.readUnsigned=function(e){return function(t){var r=l(2)(t);return e?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};c.readArray=function(e,t){return function(r,n,i){for(var o="function"==typeof t?t(r,n,i):t,a=l(e),s=new Array(o),d=0;d<o;d++)s[d]=a(r);return s}};c.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),i=0;i<8;i++)n[7-i]=!!(r&1<<i);return Object.keys(e).reduce((function(t,r){var i=e[r];return i.length?t[r]=function(e,t,r){for(var n=0,i=0;i<r;i++)n+=e[t+i]&&Math.pow(2,r-i-1);return n}(n,i.index,i.length):t[r]=n[i.index],t}),{})}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u,r=c,n={blocks:function(e){for(var t=[],n=e.data.length,i=0,o=(0,r.readByte)()(e);0!==o&&o;o=(0,r.readByte)()(e)){if(e.pos+o>=n){var a=n-e.pos;t.push((0,r.readBytes)(a)(e)),i+=a;break}t.push((0,r.readBytes)(o)(e)),i+=o}for(var s=new Uint8Array(i),d=0,u=0;u<t.length;u++)s.set(t[u],d),d+=t[u].length;return s}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),o=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,r.readByte)()},n]}]},(function(e){return 44===(0,r.peekByte)()(e)})),a=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(e,t,n){return(0,r.readBytes)(n.text.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),s=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(e,t,n){return(0,r.readString)(n.blockSize)(e)}},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),d=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},(function(e){var t=(0,r.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),p=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,t.loop)([i,s,d,o,a],(function(e){var t=(0,r.peekByte)()(e);return 33===t||44===t}))}];e.default=p}(d);var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.deinterlace=void 0;h.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,i=function(n,i){var o=e.slice(i*t,(i+1)*t);r.splice.apply(r,[n*t,t].concat(o))},o=[0,4,2,1],a=[8,8,4,2],s=0,d=0;d<4;d++)for(var u=o[d];u<n;u+=a[d])i(u,s),s++;return r};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.lzw=void 0;f.lzw=function(e,t,r){var n,i,o,a,s,d,u,c,p,l,h,f,y,g,m,v,_=4096,x=r,b=new Array(r),T=new Array(_),w=new Array(_),B=new Array(4097);for(s=(i=1<<(l=e))+1,n=i+2,u=-1,o=(1<<(a=l+1))-1,c=0;c<i;c++)T[c]=0,w[c]=c;for(h=f=y=g=m=v=0,p=0;p<x;){if(0===g){if(f<a){h+=t[v]<<f,f+=8,v++;continue}if(c=h&o,h>>=a,f-=a,c>n||c==s)break;if(c==i){o=(1<<(a=l+1))-1,n=i+2,u=-1;continue}if(-1==u){B[g++]=w[c],u=c,y=c;continue}for(d=c,c==n&&(B[g++]=y,c=u);c>i;)B[g++]=w[c],c=T[c];y=255&w[c],B[g++]=y,n<_&&(T[n]=u,w[n]=y,0==(++n&o)&&n<_&&(a++,o+=n)),u=d}g--,b[m++]=B[g],p++}for(p=m;p<x;p++)b[p]=0;return b},Object.defineProperty(s,"__esModule",{value:!0});var y,g=s.decompressFrames=s.decompressFrame=T=s.parseGIF=void 0,m=(y=d)&&y.__esModule?y:{default:y},v=u,_=c,x=h,b=f;var T=s.parseGIF=function(e){var t=new Uint8Array(e);return(0,v.parse)((0,_.buildStream)(t),m.default)},w=function(e,t,r){if(e.image){var n=e.image,i=n.descriptor.width*n.descriptor.height,o=(0,b.lzw)(n.data.minCodeSize,n.data.blocks,i);n.descriptor.lct.interlaced&&(o=(0,x.deinterlace)(o,n.descriptor.width));var a={pixels:o,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?a.colorTable=n.lct:a.colorTable=t,e.gce&&(a.delay=10*(e.gce.delay||10),a.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(a.transparentIndex=e.gce.transparentColorIndex)),r&&(a.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var i=4*n,o=e.pixels[n],a=e.colorTable[o]||[0,0,0];r[i]=a[0],r[i+1]=a[1],r[i+2]=a[2],r[i+3]=o!==e.transparentIndex?255:0}return r}(a)),a}};s.decompressFrame=w;g=s.decompressFrames=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return w(r,e.gct,t)}))};var B=function(e){function t(n,i){var o=this,a=Object.assign({},t.defaultOptions,i),s=a.scaleMode,d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(a,["scaleMode"]),u=document.createElement("canvas"),c=u.getContext("2d");return u.width=n[0].imageData.width,u.height=n[0].imageData.height,(o=e.call(this,r.Texture.from(u,{scaleMode:s}))||this).duration=n[n.length-1].end,o._frames=n,o._context=c,o._playing=!1,o._currentTime=0,o._isConnectedToTicker=!1,Object.assign(o,d),o.currentFrame=0,o.autoPlay&&o.play(),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.fromBuffer=function(e,r){if(!e||0===e.byteLength)throw new Error("Invalid buffer");var n=T(e),i=g(n,!0),o=[],a=document.createElement("canvas"),s=a.getContext("2d"),d=document.createElement("canvas"),u=d.getContext("2d");a.width=i[0].dims.width,a.height=i[0].dims.height;for(var c=0,p=1e3/Object.assign({},t.defaultOptions,r).fps,l=0;l<i.length;l++){var h=i[l],f=h.disposalType,y=void 0===f?2:f,m=h.delay,v=void 0===m?p:m,_=h.patch,x=h.dims,b=x.width,w=x.height,B=x.left,O=x.top;d.width=b,d.height=w,u.clearRect(0,0,b,w);var k=u.createImageData(b,w);k.data.set(_),u.putImageData(k,0,0),s.drawImage(d,B,O);var C=s.getImageData(0,0,a.width,a.height);2===y&&s.clearRect(0,0,b,w),o.push({start:c,end:c+v,imageData:C}),c+=v}return a.width=a.height=0,d.width=d.height=0,new t(o,r)},t.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(o.Ticker.shared.remove(this.update,this),this._isConnectedToTicker=!1))},t.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(o.Ticker.shared.add(this.update,this,o.UPDATE_PRIORITY.HIGH),this._isConnectedToTicker=!0),this.loop||this.currentFrame!==this._frames.length-1||(this._currentTime=0))},Object.defineProperty(t.prototype,"progress",{get:function(){return this._currentTime/this.duration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),t.prototype.update=function(e){var t,r;if(this._playing){var i=this.animationSpeed*e/n.settings.TARGET_FPMS,o=this._currentTime+i,a=o%this.duration,s=this._frames.findIndex((function(e){return e.start<=a&&e.end>a}));o>=this.duration?this.loop?(this._currentTime=a,this.updateFrameIndex(s),null===(t=this.onLoop)||void 0===t||t.call(this)):(this._currentTime=this.duration,this.updateFrameIndex(this._frames.length-1),null===(r=this.onComplete)||void 0===r||r.call(this),this.stop()):(this._currentTime=a,this.updateFrameIndex(s))}},t.prototype.updateFrame=function(){if(this.dirty){var e=this._frames[this._currentFrame].imageData;this._context.putImageData(e,0,0),this._context.fillStyle="transparent",this._context.fillRect(0,0,0,1),this.texture.update(),this.dirty=!1}},t.prototype._render=function(t){this.updateFrame(),e.prototype._render.call(this,t)},t.prototype._renderCanvas=function(t){this.updateFrame(),e.prototype._renderCanvas.call(this,t)},Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(o.Ticker.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(o.Ticker.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentFrame",{get:function(){return this._currentFrame},set:function(e){this.updateFrameIndex(e),this._currentTime=this._frames[e].start},enumerable:!1,configurable:!0}),t.prototype.updateFrameIndex=function(e){var t;if(e<0||e>=this._frames.length)throw new Error("Frame index out of range, expecting 0 to "+this.totalFrames+", got "+e);this._currentFrame!==e&&(this._currentFrame=e,this.dirty=!0,null===(t=this.onFrameChange)||void 0===t||t.call(this,e))},Object.defineProperty(t.prototype,"totalFrames",{get:function(){return this._frames.length},enumerable:!1,configurable:!0}),t.prototype.destroy=function(){this.stop(),e.prototype.destroy.call(this,!0),this._context=null,this._frames=null,this.onComplete=null,this.onFrameChange=null,this.onLoop=null},t.prototype.clone=function(){return new t(function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}([],this._frames,!0),{autoUpdate:this._autoUpdate,loop:this.loop,autoPlay:this.autoPlay,scaleMode:this.texture.baseTexture.scaleMode,animationSpeed:this.animationSpeed,onComplete:this.onComplete,onFrameChange:this.onFrameChange,onLoop:this.onLoop})},t.defaultOptions={scaleMode:i.SCALE_MODES.LINEAR,fps:o.Ticker.shared.FPS,loop:!0,animationSpeed:1,autoPlay:!0,autoUpdate:!0,onComplete:null,onFrameChange:null,onLoop:null},t}(t.Sprite),O={add:function(){e.LoaderResource.setExtensionXhrType("gif",e.LoaderResource.XHR_RESPONSE_TYPE.BUFFER),e.LoaderResource.setExtensionLoadType("gif",e.LoaderResource.LOAD_TYPE.XHR)},use:function(e,t){"gif"===e.extension&&(e.animation=B.fromBuffer(e.data)),t()}};exports.AnimatedGIF=B,exports.AnimatedGIFLoader=O;
//# sourceMappingURL=pixi-gif.cjs.js.map