!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var h=s(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==h?(a[h].references++,a[h].updater(f)):a.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,h=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var y=null,p=0;function v(t,e){var n,r,o;if(e.singleton){var i=p++;n=y||(y=l(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,"._3Mwv5So4MvxeCu4kT6nAa7 {\n    background-color: black;\n}",""]),e.locals={body:"_3Mwv5So4MvxeCu4kT6nAa7"},t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"Main",(function(){return P}));var r={canvasHeight:800,canvasWidth:800,frameRate:60,msBetweenRenders:1e3/60};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var i,a,s=function(){function t(t,e){this.x=t,this.y=e}return t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.dot=function(t){return this.x*t.x+this.y*t.y},t.prototype.getMagnitude=function(){return Math.sqrt(this.dot(this))},t.prototype.normalize=function(){var e=this.getMagnitude();return new t(this.x/e,this.y/e)},t.prototype.multiplyScaler=function(e){return new t(this.x*e,this.y*e)},t.prototype.distanceTo=function(t){return t.subtract(this).getMagnitude()},t.prototype.manhattanDistanceTo=function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},t.prototype.getPointRotationRadians=function(){return Math.atan2(this.y,this.x)},t.prototype.equals=function(t){return this.x===t.x&&this.y===t.y},t.prototype.toString=function(){return"("+this.x+", "+this.y+")"},t.prototype.getNormalVectorClockwise=function(){return new t(this.y,-this.x)},t.prototype.getNormalVectorCounterclockwise=function(){return new t(-this.y,this.x)},t.prototype.reflect=function(t){return this.subtract(t.multiplyScaler(2*this.dot(t)))},t}();!function(t){t[t.KeyDown=0]="KeyDown",t[t.KeyUp=1]="KeyUp",t[t.KeyPress=2]="KeyPress"}(i||(i={})),function(t){t[t.NOT_STARTED=0]="NOT_STARTED",t[t.READY=1]="READY",t[t.DOWN=2]="DOWN"}(a||(a={}));var c,l=function(){function t(){this.assignedControls=new Map,this.keyToEventType=new Map,this.keyToKeyPressState=new Map}return t.prototype.add=function(t){this.assignedControls.set(t.key,t.func),h.addAssignedControl(t.key,t.name),this.keyToEventType.set(t.key,t.eventType),t.eventType===i.KeyPress&&this.keyToKeyPressState.set(t.key,h.isKeyDown(t.key)?a.NOT_STARTED:a.READY)},t.prototype.remove=function(t){h.removeAssignedControl(t),this.assignedControls.delete(t),this.keyToEventType.delete(t)},t.prototype.clear=function(){var t,e;try{for(var n=o(this.assignedControls.keys()),r=n.next();!r.done;r=n.next()){var i=r.value;h.removeAssignedControl(i)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.assignedControls.clear(),this.keyToEventType.clear()},t.prototype.check=function(){var t,e;try{for(var n=o(this.assignedControls.keys()),r=n.next();!r.done;r=n.next()){var s=r.value,c=this.keyToEventType.get(s),l=h.isKeyDown(s);if(c===i.KeyDown&&l||c===i.KeyUp&&!l)this.assignedControls.get(s)();else if(c===i.KeyPress){var u=this.keyToKeyPressState.get(s);if(l)u===a.READY&&this.keyToKeyPressState.set(s,a.DOWN);else switch(u){case a.DOWN:this.assignedControls.get(s)(),this.keyToKeyPressState.set(s,a.READY);break;case a.NOT_STARTED:this.keyToKeyPressState.set(s,a.READY)}}}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t}(),u=function(){function t(){var t,e,n=this;this.keyMap=new Map,this.assignedControlMap=new Map,this.mouseCanvasCoords=new s(0,0),this.isMouseDownInternal=!1,this.hasClickInternal=!1;var r=Object.keys(c).filter((function(t){return!isNaN(Number(c[t]))}));try{for(var i=o(r),a=i.next();!a.done;a=i.next()){var l=a.value;this.keyMap.set(c[l],!1)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}document.onkeydown=function(t){n.keyMap.set(t.keyCode,!0)},document.onkeyup=function(t){n.keyMap.set(t.keyCode,!1)}}return t.prototype.initMouseControls=function(t){var e=this;t.onmousemove=function(n){var o,i=t.getBoundingClientRect(),a=new s(n.clientX-i.left,n.clientY-i.top);(o=a).x>=0&&o.x<=r.canvasWidth&&o.y>=0&&o.y<=r.canvasHeight&&(e.mouseCanvasCoords=a)},t.onmousedown=function(t){e.isMouseDownInternal=!0},t.onmouseup=function(t){e.isMouseDownInternal=!1},t.onclick=function(t){e.hasClickInternal=!0}},t.prototype.hasClick=function(){return this.hasClickInternal},t.prototype.handleClick=function(){if(!this.hasClick())throw new Error("Must check hasClick before handleClick, or click already handled.");return this.hasClickInternal=!1,this.mouseCanvasCoords},t.prototype.getMouseCanvasCoords=function(){return this.mouseCanvasCoords},t.prototype.isMouseDown=function(){return this.isMouseDownInternal},t.prototype.isKeyDown=function(t){var e=this.keyMap.get(t);if(null==e)throw new Error("Called isKeyDown for unmapped key: "+this.getStringForKey(t));return e},t.prototype.addAssignedControl=function(t,e){if(this.assignedControlMap.has(t))throw new Error("Double-bound a control: "+t);this.assignedControlMap.set(t,e),this.keyMap.has(t)||this.keyMap.set(t,!1)},t.prototype.removeAssignedControl=function(t){if(!this.assignedControlMap.has(t))throw new Error("Removing unassigned control");this.assignedControlMap.delete(t)},t.prototype.getAssignedControlMap=function(){return this.assignedControlMap},t.prototype.getStringForKey=function(t){switch(t){case c.SHIFT:return"Shift";case c.A:return"A";case c.B:return"B";case c.C:return"C";case c.D:return"D";case c.E:return"E";case c.F:return"F";case c.G:return"G";case c.H:return"H";case c.I:return"I";case c.J:return"J";case c.K:return"K";case c.L:return"L";case c.M:return"M";case c.N:return"N";case c.O:return"O";case c.P:return"P";case c.Q:return"Q";case c.R:return"R";case c.S:return"S";case c.T:return"T";case c.U:return"U";case c.V:return"V";case c.W:return"W";case c.X:return"X";case c.Y:return"Y";case c.Z:return"Z";case c.ONE:return"1";case c.TWO:return"2";case c.THREE:return"3";case c.FOUR:return"4";case c.FIVE:return"5";case c.SIX:return"6";case c.SEVEN:return"7";case c.EIGHT:return"8";case c.NINE:return"9";case c.ZERO:return"0";case c.SPACE:return"Space";case c.LEFT_ARROW:return"Left arrow";case c.UP_ARROW:return"Up arrow";case c.RIGHT_ARROW:return"Right arrow";case c.DOWN_ARROW:return"Down arrow";default:throw new Error("Need to add string for Key")}},t}();!function(t){t[t.ENTER=13]="ENTER",t[t.SHIFT=16]="SHIFT",t[t.SPACE=32]="SPACE",t[t.LEFT_ARROW=37]="LEFT_ARROW",t[t.UP_ARROW=38]="UP_ARROW",t[t.RIGHT_ARROW=39]="RIGHT_ARROW",t[t.DOWN_ARROW=40]="DOWN_ARROW",t[t.ONE=49]="ONE",t[t.TWO=50]="TWO",t[t.THREE=51]="THREE",t[t.FOUR=52]="FOUR",t[t.FIVE=53]="FIVE",t[t.SIX=54]="SIX",t[t.SEVEN=55]="SEVEN",t[t.EIGHT=56]="EIGHT",t[t.NINE=57]="NINE",t[t.ZERO=58]="ZERO",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.G=71]="G",t[t.H=72]="H",t[t.I=73]="I",t[t.J=74]="J",t[t.K=75]="K",t[t.L=76]="L",t[t.M=77]="M",t[t.N=78]="N",t[t.O=79]="O",t[t.P=80]="P",t[t.Q=81]="Q",t[t.R=82]="R",t[t.S=83]="S",t[t.T=84]="T",t[t.U=85]="U",t[t.V=86]="V",t[t.W=87]="W",t[t.X=88]="X",t[t.Y=89]="Y",t[t.Z=90]="Z"}(c||(c={}));new Map([[1,c.ONE],[2,c.TWO],[3,c.THREE],[4,c.FOUR],[5,c.FIVE],[6,c.SIX],[7,c.SEVEN],[8,c.EIGHT],[9,c.NINE]]),new Map([[1,"1st"],[2,"2nd"],[3,"3rd"],[4,"4th"],[5,"5th"],[6,"6th"],[7,"7th"],[8,"8th"],[9,"9th"]]);var h=new u,f=new s(0,-1),d=new s(0,1),y=new s(-1,0),p=new s(1,0);var v,m=function(){function t(){}return t.getCanvasFromTileCoords=function(e){return new s(e.x*t.TILE_SIZE,e.y*t.TILE_SIZE)},t.getTileFromCanvasCoords=function(e){return new s(Math.floor(e.x/t.TILE_SIZE),Math.floor(e.y/t.TILE_SIZE))},t.inbounds=function(e){return e.x>=0&&e.x<t.TILES_WIDE&&e.y>=0&&e.y<t.TILES_TALL},t.getAdjacentTiles=function(e){var n=[],r=e.add(f),o=e.add(d),i=e.add(y),a=e.add(p);return t.inbounds(r)&&n.push(r),t.inbounds(o)&&n.push(o),t.inbounds(i)&&n.push(i),t.inbounds(a)&&n.push(a),n},t.TILE_SIZE=40,t.TILES_WIDE=r.canvasWidth/t.TILE_SIZE,t.TILES_TALL=r.canvasHeight/t.TILE_SIZE,t}(),g=function(){function t(t){var e=this;this.image=new Image,this.image.onload=function(){e.isLoaded=!0},this.image.src=t}return t.prototype.tryDrawing=function(t){this.isLoaded&&t.context.drawImage(this.image,t.sourceX,t.sourceY,t.sourceWidth,t.sourceHeight,t.canvasX,t.canvasY,t.canvasWidth,t.canvasHeight)},t}(),C=n.p+"7b84303c217de9c4be4e53d998b5d30a.jpg",E=function(){function t(t){this.texture=new g(C),this.color="#e34055",this.tileCoords=t}return t.prototype.update=function(t){},t.prototype.render=function(t){var e=m.getCanvasFromTileCoords(this.tileCoords);t.fillStyle=this.color,t.fillRect(e.x,e.y,m.TILE_SIZE,m.TILE_SIZE),this.texture.tryDrawing({context:t,sourceX:e.x,sourceY:e.y,sourceWidth:m.TILE_SIZE,sourceHeight:m.TILE_SIZE,canvasX:e.x,canvasY:e.y,canvasWidth:m.TILE_SIZE,canvasHeight:m.TILE_SIZE})},t}();function S(t,e,n){return(e-t)*n+t}function T(t){var e=t.length>7?parseInt(t.substring(7,9),16)/255:1;return{r:parseInt(t.substring(1,3),16),g:parseInt(t.substring(3,5),16),b:parseInt(t.substring(5,7),16),a:e}}function x(t){return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"}!function(t){t.CIRCLE="Circle",t.ELLIPSE="Ellipse",t.LINE="Line",t.PLUS="Plus"}(v||(v={}));var w,M=2*Math.PI,I=function(){function t(t){this.params=t,this.particles=[],this.isAlive=!0,this.tileCoords=m.getTileFromCanvasCoords(t.startPositionCanvas);for(var e,n,r,o=M/t.particleCount,i=0;i<t.particleCount;i++){var a=i*o,c=new s(Math.cos(a),Math.sin(a)).normalize(),l=S(t.minParticleSpeed,t.maxParticleSpeed,Math.random()),u=S(t.minLifetimeMs,t.maxLifetimeMs,Math.random()),h=(e=T(t.colorA),n=T(t.colorB),r=Math.random(),{r:S(e.r,n.r,r),g:S(e.g,n.g,r),b:S(e.b,n.b,r),a:S(e.a,n.a,r)}),f=S(t.minRadius,t.maxRadius,Math.random()),d=this.params.shape===v.ELLIPSE?c.getPointRotationRadians():0;this.particles.push({canvasPosition:t.startPositionCanvas,direction:c,lifetimeMs:u,deltaPositionPerMs:l,color:x(h),shape:this.params.shape,radius:f,rotationRadians:d})}}return t.prototype.update=function(t){var e=!1;this.particles.forEach((function(n){n.lifetimeMs-=t,n.lifetimeMs>0&&(e=!0,n.canvasPosition=n.canvasPosition.add(n.direction.multiplyScaler(n.deltaPositionPerMs*t)))})),this.isAlive=e},t.prototype.render=function(t){this.particles.forEach((function(e){if(!(e.lifetimeMs<=0)){var n=e.canvasPosition;switch(e.shape){case v.CIRCLE:t.fillStyle=e.color,t.beginPath(),t.arc(n.x,n.y,e.radius,0,M),t.fill();break;case v.LINE:t.strokeStyle=e.color,t.lineWidth=1,t.beginPath();var r=e.direction.multiplyScaler(e.radius),o=n.add(r),i=n.subtract(r);t.moveTo(o.x,o.y),t.lineTo(i.x,i.y),t.stroke();break;case v.ELLIPSE:t.fillStyle=e.color,t.beginPath();var a=e.radius,c=e.radius/2;t.ellipse(n.x,n.y,a,c,e.rotationRadians,0,M),t.fill();break;case v.PLUS:t.fillStyle=e.color;var l=e.radius,u=l/4,h=e.canvasPosition.subtract(new s(l,u));t.fillRect(h.x,h.y,2*l,2*u);var f=e.canvasPosition.subtract(new s(u,l));t.fillRect(f.x,f.y,2*u,2*l)}}}))},t}(),R=function(){function t(t,e,n){var r=this;this.resetGame=function(){r.destroy(),r.gameObjects=[],r.particleSystems=[],r.controlMap=new l,r.controlMap.add({key:c.Q,name:"Quit",func:r.onExitGameCallback,eventType:i.KeyPress}),r.controlMap.add({key:c.R,name:"Reset",func:r.resetGame,eventType:i.KeyPress})},this.canvas=t,this.context=e,this.onExitGameCallback=n,this.resetGame()}return t.prototype.update=function(t){var e,n,r,i;if(this.controlMap.check(),h.hasClick()){var a=h.handleClick(),s=m.getTileFromCanvasCoords(a),c=new E(s);this.gameObjects.push(c),this.initNewRandomParticleSystem(a)}try{for(var l=o(this.gameObjects),u=l.next();!u.done;u=l.next()){(c=u.value).update(t)}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}try{for(var f=o(this.particleSystems),d=f.next();!d.done;d=f.next()){d.value.update(t)}}catch(t){r={error:t}}finally{try{d&&!d.done&&(i=f.return)&&i.call(f)}finally{if(r)throw r.error}}this.particleSystems=this.particleSystems.filter((function(t){return t.isAlive}))},t.prototype.render=function(){var t,e,n,i,a=this.context;a.fillStyle="#959aa3",a.clearRect(0,0,r.canvasWidth,r.canvasHeight),a.fillRect(0,0,r.canvasWidth,r.canvasHeight);for(var s=0;s<m.TILES_WIDE;s++){var c=f=s*m.TILE_SIZE,l=0,u=r.canvasHeight;a.beginPath(),a.strokeStyle="#1560e8",a.moveTo(f,l),a.lineTo(c,u),a.stroke()}for(s=0;s<m.TILES_TALL;s++){var f=0;c=r.canvasWidth,u=l=s*m.TILE_SIZE;a.beginPath(),a.strokeStyle="#1560e8",a.moveTo(f,l),a.lineTo(c,u),a.stroke()}var d=m.getTileFromCanvasCoords(h.getMouseCanvasCoords()),y=m.getCanvasFromTileCoords(d);a.fillStyle="#f7c25e",a.fillRect(y.x,y.y,m.TILE_SIZE,m.TILE_SIZE);try{for(var p=o(this.gameObjects),v=p.next();!v.done;v=p.next()){v.value.render(a)}}catch(e){t={error:e}}finally{try{v&&!v.done&&(e=p.return)&&e.call(p)}finally{if(t)throw t.error}}try{for(var g=o(this.particleSystems),C=g.next();!C.done;C=g.next()){C.value.render(a)}}catch(t){n={error:t}}finally{try{C&&!C.done&&(i=g.return)&&i.call(g)}finally{if(n)throw n.error}}this.renderControlOverlay()},t.prototype.destroy=function(){this.controlMap&&this.controlMap.clear()},t.prototype.initNewRandomParticleSystem=function(t){var e=v.CIRCLE,n=Math.random();n>.75?e=v.PLUS:n>.5?e=v.ELLIPSE:n>.25&&(e=v.LINE);var r=new I({startPositionCanvas:t,particleCount:24,colorA:"#00FF00",colorB:"#0000FF",shape:e,minParticleSpeed:.005*m.TILE_SIZE,maxParticleSpeed:.01*m.TILE_SIZE,minLifetimeMs:600,maxLifetimeMs:800,minRadius:.07*m.TILE_SIZE,maxRadius:.12*m.TILE_SIZE});this.particleSystems.push(r)},t.prototype.renderControlOverlay=function(){var t,e,n=this.context,r=new s(24,24);n.font="12px fantasy",n.strokeStyle="#FFFF00";try{for(var i=o(this.controlMap.assignedControls.keys()),a=i.next();!a.done;a=i.next()){var c=a.value,l=h.getStringForKey(c)+" - "+h.getAssignedControlMap().get(c);n.strokeText(l,r.x,r.y),r=new s(r.x,r.y+24)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},t}(),b=function(){function t(t){this.context=t,this.elements=[]}return t.prototype.addElement=function(t){this.elements.push(t)},t.prototype.removeAll=function(){this.elements=[]},t.prototype.removeElement=function(t){this.elements.splice(this.elements.indexOf(t),1)},t.prototype.onMouseMove=function(t){var e,n,r=this.getUiCoords(t);try{for(var i=o(this.elements),a=i.next();!a.done;a=i.next()){a.value.onMouseMove(r)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}},t.prototype.onClick=function(t){var e,n,r=this.getUiCoords(t);try{for(var i=o(this.elements),a=i.next();!a.done;a=i.next()){if(a.value.onClick(r))return!0}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return!1},t.prototype.render=function(){var t,e;try{for(var n=o(this.elements),r=n.next();!r.done;r=n.next()){r.value.render(this.context)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.prototype.getUiCoords=function(t){return new s(t.x/r.canvasWidth,t.y/r.canvasHeight)},t}(),L=function(){function t(t){var e=this,n=t.dimensions,r=t.style,o=t.onClick;this.render=function(t){var n=e.getCanvasCoords(e.topLeft),r=e.getCanvasCoords(e.size);t.fillStyle=e.getFillColor(),t.fillRect(n.x,n.y,r.x,r.y),t.fillStyle=e.textColor;var o=e.fontSize;t.font=o+"px fantasy";var i=t.measureText(e.text).width,a=e.getCanvasCoords(e.getButtonCenter());if(t.fillText(e.text,a.x-i/2,a.y+o/4),e.isSelected){if(null==e.selectedBorderColor)throw new Error("Selected border color should be set when button is selected");t.strokeStyle=e.selectedBorderColor,t.strokeRect(n.x,n.y,r.x,r.y)}},this.onClick=function(t){return!!e.isInButton(t)&&(e.onClickCallback(),!0)},this.onMouseMove=function(t){e.isHovered=e.isInButton(t)},this.topLeft=n.topLeft,this.size=n.size,this.text=n.text,this.fontSize=r.fontSize,this.color=r.color,this.textColor=r.textColor,this.hoverColor=r.hoverColor,this.selectedColor=r.selectedColor,this.selectedBorderColor=r.selectedBorderColor,this.onClickCallback=o,this.isHovered=!1,this.isSelected=!1}return t.prototype.getFillColor=function(){return this.isSelected?this.selectedColor:this.isHovered?this.hoverColor:this.color},t.prototype.setIsSelected=function(t){this.isSelected=t},t.prototype.isInButton=function(t){var e=t.x>=this.topLeft.x&&t.x<=this.topLeft.x+this.size.x,n=t.y>=this.topLeft.y&&t.y<=this.topLeft.y+this.size.y;return e&&n},t.prototype.getButtonCenter=function(){return new s(this.topLeft.x+this.size.x/2,this.topLeft.y+this.size.y/2)},t.prototype.getCanvasCoords=function(t){return new s(t.x*r.canvasWidth,t.y*r.canvasHeight)},t}(),k=function(){function t(t,e,n){this.BACKGROUND_COLOR="#959aa3",this.TEXT_COLOR="#1560e8",this.canvas=t,this.context=e,this.onPlayGame=n.onPlayGame,this.uiManager=new b(e),this.initLevelMenu()}return t.prototype.update=function(t){if(this.uiManager.onMouseMove(h.getMouseCanvasCoords()),h.hasClick()){var e=h.handleClick();this.uiManager.onClick(e)}},t.prototype.render=function(){this.context.fillStyle=this.BACKGROUND_COLOR,this.context.clearRect(0,0,r.canvasWidth,r.canvasHeight),this.context.fillRect(0,0,r.canvasWidth,r.canvasHeight),this.renderTitleText(),this.uiManager.render()},t.prototype.destroy=function(){},t.prototype.initLevelMenu=function(){for(var t=new s(.2,.1),e=[{text:"Play",callback:this.onPlayGame}],n=0;n<e.length;n++){var r=.3+.08*n+n*t.y,o=e[n],i=new L({dimensions:{topLeft:new s(.4,r),size:t,text:o.text},style:{fontSize:24,color:"#f7c25e",hoverColor:"#fcd281",textColor:this.TEXT_COLOR},onClick:o.callback});this.uiManager.addElement(i)}},t.prototype.renderTitleText=function(){this.context.fillStyle=this.TEXT_COLOR;this.context.font="72px fantasy";var t="CanvasGameTemplate",e=this.context.measureText(t).width,n=new s(r.canvasWidth/2,r.canvasHeight/4);this.context.fillText(t,n.x-e/2,n.y-36)},t}(),O=n(0);!function(t){t[t.START_MENU=0]="START_MENU",t[t.GAME=1]="GAME"}(w||(w={}));var P=function(){function t(){var t=this;this.lastRenderTime=0,this.gameState=w.START_MENU,this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas),document.body.classList.add(O.body),this.canvas.setAttribute("height",r.canvasHeight+"px"),this.canvas.setAttribute("width",r.canvasWidth+"px"),this.context=this.canvas.getContext("2d"),h.initMouseControls(this.canvas),this.initStartMenu(),window.requestAnimationFrame((function(e){t.lastRenderTime=e,t.gameLoop(e)}))}return t.prototype.gameLoop=function(t){var e=this,n=t-this.lastRenderTime;n>r.msBetweenRenders&&(this.lastRenderTime=t,this.gameStateManager.update(n),this.gameStateManager.render()),window.requestAnimationFrame((function(t){e.gameLoop(t)}))},t.prototype.initStartMenu=function(){var t=this;this.gameState=w.START_MENU,this.gameStateManager=new k(this.canvas,this.context,{onPlayGame:function(){t.tearDownCurrentGameState(),t.initGame()}})},t.prototype.initGame=function(){var t=this;this.gameState=w.GAME,this.gameStateManager=new R(this.canvas,this.context,(function(){t.tearDownCurrentGameState(),t.initStartMenu()}))},t.prototype.tearDownCurrentGameState=function(){this.gameStateManager.destroy(),this.gameStateManager=null},t}(),A=!1;document.onreadystatechange=function(){"complete"!==document.readyState||A||(new P,A=!0)}}]);
//# sourceMappingURL=app.bundle.js.map