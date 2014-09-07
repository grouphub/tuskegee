/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
(function () {
  var jquery_init = jQuery.fn.init;
  jQuery.fn.init = function (selector, context, rootjQuery) {
    // If the string contains a "#" before a "<", treat it as invalid HTML.
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');
      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) {
          throw 'Syntax error, unrecognized expression: ' + selector;
        }
      }
    }
    return jquery_init.call(this, selector, context, rootjQuery);
  };
  jQuery.fn.init.prototype = jquery_init.prototype;
})();

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = true;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  // Execute all of them.
  jQuery.each(Drupal.behaviors, function() {
    this(context);
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim(xmlhttp.responseText)) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message.replace(/\n/g, '<br />');
}

// Global Killswitch on the <html> element
$(document.documentElement).addClass('js');
// Attach all behaviors.
$(document).ready(function() {
  Drupal.attachBehaviors(this);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
function cache_buster_set_cookie(days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "expires="+date.toGMTString()+";";
    }
    else var expires = "";
    document.cookie = "NO_CACHE=Y;"+expires+"path=/";
};

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.88 (08-JUN-2010)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.2.6 or later
 */
(function($){var ver="2.88";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){if($.fn.cycle.debug){log(s);}}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=opts.slideExpr?$(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.rev);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,(!opts2.rev&&!opts.backwards));},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,(!opts.rev&&!opts.backwards));}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$(els).stop(true,true);opts.busy=false;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing; currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,(!opts.rev&&!opts.backwards));},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$(pager).each(function(){$(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while((t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone[0]);});$a=$(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,onPrevNextEvent:null,prevNextEvent:"click.cycle",pager:null,onPagerEvent:null,pagerEvent:"click.cycle",allowPagerClickBubble:false,pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250,activePagerClass:"activeSlide",updateActivePagerLink:null,backwards:false};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$(next).show();$(curr).hide();after();};};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);;

/**
 *  @file
 *  A simple jQuery SingleFrame Div Slideshow Rotator.
 */

(function ($) {
  /**
   * This will set our initial behavior, by starting up each individual slideshow.
   */
  Drupal.behaviors.viewsSlideshowSingleFrame = function (context) {
    $('.views_slideshow_singleframe_main:not(.viewsSlideshowSingleFrame-processed)', context).addClass('viewsSlideshowSingleFrame-processed').each(function() {
      var fullId = '#' + $(this).attr('id');
      if (!Drupal.settings.viewsSlideshowSingleFrame || !Drupal.settings.viewsSlideshowSingleFrame[fullId]) {
        return;
      }
      var settings = Drupal.settings.viewsSlideshowSingleFrame[fullId];
      settings.targetId = '#' + $(fullId + " :first").attr('id');
      settings.paused = false;

      settings.opts = {
        speed:settings.speed,
        timeout:parseInt(settings.timeout),
        delay:parseInt(settings.delay),
        sync:settings.sync==1,
        random:settings.random==1,
        pause:false,
        allowPagerClickBubble:(settings.pager_hover==1 || settings.pager_click_to_page),
        prev:(settings.controls > 0)?'#views_slideshow_singleframe_prev_' + settings.vss_id:null,
        next:(settings.controls > 0)?'#views_slideshow_singleframe_next_' + settings.vss_id:null,
        pager:(settings.pager > 0)?'#views_slideshow_singleframe_pager_' + settings.vss_id:null,
        nowrap:parseInt(settings.nowrap),
        pagerAnchorBuilder: function(idx, slide) {
          var classes = 'pager-item pager-num-' + (idx+1);
          if (idx == 0) {
            classes += ' first';
          }
          if ($(slide).siblings().length == idx) {
            classes += ' last';
          }

          if (idx % 2) {
            classes += ' odd';
          }
          else {
            classes += ' even';
          }

          var theme = 'viewsSlideshowPager' + settings.pager_type;
          return Drupal.theme.prototype[theme] ? Drupal.theme(theme, classes, idx, slide, settings) : '';
        },
        after:function(curr, next, opts) {
          // Used for Image Counter.
          if (settings.image_count) {
            $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.num').html(opts.currSlide + 1);
            $('#views_slideshow_singleframe_image_count_' + settings.vss_id + ' span.total').html(opts.slideCount);
          }
        },
        before:function(curr, next, opts) {
          // Remember last slide.
          if (settings.remember_slide) {
            createCookie(settings.vss_id, opts.currSlide + 1, settings.remember_slide_days);
          }

          // Make variable height.
          if (settings.fixed_height == 0) {
            //get the height of the current slide
            var $ht = $(this).height();
            //set the container's height to that of the current slide
            $(this).parent().animate({height: $ht});
          }
        },
        cleartype:(settings.ie.cleartype == 'true')? true : false,
        cleartypeNoBg:(settings.ie.cleartypenobg == 'true')? true : false
      }

      // Set the starting slide if we are supposed to remember the slide
      if (settings.remember_slide) {
        var startSlide = readCookie(settings.vss_id);
        if (startSlide == null) {
          startSlide = 0;
        }
        settings.opts.startingSlide =  startSlide;
      }

      if (settings.pager_hover == 1) {
        settings.opts.pagerEvent = 'mouseover';
        settings.opts.pauseOnPagerHover = true;
      }

      if (settings.effect == 'none') {
        settings.opts.speed = 1;
      }
      else {
        settings.opts.fx = settings.effect;
      }

      // Pause on hover.
      if (settings.pause == 1) {
        $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).hover(function() {
          $(settings.targetId).cycle('pause');
        }, function() {
          if (settings.paused == false) {
            $(settings.targetId).cycle('resume');
          }
        });
      }

      // Pause on clicking of the slide.
      if (settings.pause_on_click == 1) {
        $('#views_slideshow_singleframe_teaser_section_' + settings.vss_id).click(function() {
          viewsSlideshowSingleFramePause(settings);
        });
      }

      // Add additional settings.
      if (settings.advanced != "\n") {
        settings.advanced.toString();
        var advanced = settings.advanced.split("\n");
        for (i=0; i<advanced.length; i++) {
          var prop = '';
          var value = '';
          var property = advanced[i].split(":");
          for (j=0; j<property.length; j++) {
            if (j == 0) {
              prop = property[j];
            }
            else if (j == 1) {
              value = property[j];
            }
            else {
              value += ":" + property[j];
            }
          }

          // Need to evaluate so true, false and numerics aren't a string.
          if (value == 'true' || value == 'false' || IsNumeric(value)) {
            value = eval(value);
          }
          else {
            // Parse strings into functions.
            var func = value.match(/function\s*\((.*?)\)\s*\{(.*)\}/i);
            if (func) {
              value = new Function(func[1].match(/(\w+)/g), func[2]);
            }
          }

          // Call both functions if prop was set previously.
          if (typeof(value) == "function" && prop in settings.opts) {
            var callboth = function(before_func, new_func) {
              return function() {
                before_func.apply(null, arguments);
                new_func.apply(null, arguments);
              };
            };
            settings.opts[prop] = callboth(settings.opts[prop], value);
          }
          else {
            settings.opts[prop] = value;
          }
        }
      }

      $(settings.targetId).cycle(settings.opts);

      // Start Paused
      if (settings.start_paused) {
        viewsSlideshowSingleFramePause(settings);
      }

      // Pause if hidden.
      if (settings.pause_when_hidden) {
        var checkPause = function(settings) {
          // If the slideshow is visible and it is paused then resume.
          // otherwise if the slideshow is not visible and it is not paused then
          // pause it.
          var visible = viewsSlideshowSingleFrameIsVisible(settings.targetId, settings.pause_when_hidden_type, settings.amount_allowed_visible);
          if (visible && settings.paused) {
            viewsSlideshowSingleFrameResume(settings);
          }
          else if (!visible && !settings.paused) {
            viewsSlideshowSingleFramePause(settings);
          }
        }

        // Check when scrolled.
        $(window).scroll(function() {
         checkPause(settings);
        });

        // Check when the window is resized.
        $(window).resize(function() {
          checkPause(settings);
        });
      }

      // Show image count for people who have js enabled.
      $('#views_slideshow_singleframe_image_count_' + settings.vss_id).show();

      if (settings.controls > 0) {
        // Show controls for people who have js enabled browsers.
        $('#views_slideshow_singleframe_controls_' + settings.vss_id).show();

        $('#views_slideshow_singleframe_playpause_' + settings.vss_id).click(function(e) {
          if (settings.paused) {
            viewsSlideshowSingleFrameResume(settings);
          }
          else {
            viewsSlideshowSingleFramePause(settings);
          }
          e.preventDefault();
        });
      }
    });
  }

  // Pause the slideshow
  viewsSlideshowSingleFramePause = function (settings) {
    //make Resume translatable
    var resume = Drupal.t('Resume');

    $(settings.targetId).cycle('pause');
    if (settings.controls > 0) {
      $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
        .addClass('views_slideshow_singleframe_play')
        .addClass('views_slideshow_play')
        .removeClass('views_slideshow_singleframe_pause')
        .removeClass('views_slideshow_pause')
        .text(resume);
    }
    settings.paused = true;
  }

  // Resume the slideshow
  viewsSlideshowSingleFrameResume = function (settings) {
    // Make Pause translatable
    var pause = Drupal.t('Pause');
    $(settings.targetId).cycle('resume');
    if (settings.controls > 0) {
      $('#views_slideshow_singleframe_playpause_' + settings.vss_id)
        .addClass('views_slideshow_singleframe_pause')
        .addClass('views_slideshow_pause')
        .removeClass('views_slideshow_singleframe_play')
        .removeClass('views_slideshow_play')
        .text(pause);
    }
    settings.paused = false;
  }

  Drupal.theme.prototype.viewsSlideshowPagerThumbnails = function (classes, idx, slide, settings) {
    var href = '#';
    if (settings.pager_click_to_page) {
      href = $(slide).find('a').attr('href');
    }
    var img = $(slide).find('img');
    return '<div class="' + classes + '"><a href="' + href + '"><img src="' + $(img).attr('src') + '" alt="' + $(img).attr('alt') + '" title="' + $(img).attr('title') + '"/></a></div>';
  }

  Drupal.theme.prototype.viewsSlideshowPagerNumbered = function (classes, idx, slide, settings) {
    var href = '#';
    if (settings.pager_click_to_page) {
      href = $(slide).find('a').attr('href');
    }
    return '<div class="' + classes + '"><a href="' + href + '">' + (idx+1) + '</a></div>';
  }

  // Verify that the value is a number.
  function IsNumeric(sText) {
    var ValidChars = "0123456789";
    var IsNumber=true;
    var Char;

    for (var i=0; i < sText.length && IsNumber == true; i++) {
      Char = sText.charAt(i);
      if (ValidChars.indexOf(Char) == -1) {
        IsNumber = false;
      }
    }
    return IsNumber;
  }

  /**
   * Cookie Handling Functions
   */
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length,c.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  /**
   * Checks to see if the slide is visible enough.
   * elem = element to check.
   * type = The way to calculate how much is visible.
   * amountVisible = amount that should be visible. Either in percent or px. If
   *                it's not defined then all of the slide must be visible.
   *
   * Returns true or false
   */
  function viewsSlideshowSingleFrameIsVisible(elem, type, amountVisible) {
    // Get the top and bottom of the window;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var docViewLeft = $(window).scrollLeft();
    var docViewRight = docViewLeft + $(window).width();

    // Get the top, bottom, and height of the slide;
    var elemTop = $(elem).offset().top;
    var elemHeight = $(elem).height();
    var elemBottom = elemTop + elemHeight;
    var elemLeft = $(elem).offset().left;
    var elemWidth = $(elem).width();
    var elemRight = elemLeft + elemWidth;
    var elemArea = elemHeight * elemWidth;

    // Calculate what's hiding in the slide.
    var missingLeft = 0;
    var missingRight = 0;
    var missingTop = 0;
    var missingBottom = 0;

    // Find out how much of the slide is missing from the left.
    if (elemLeft < docViewLeft) {
      missingLeft = docViewLeft - elemLeft;
    }

    // Find out how much of the slide is missing from the right.
    if (elemRight > docViewRight) {
      missingRight = elemRight - docViewRight;
    }

    // Find out how much of the slide is missing from the top.
    if (elemTop < docViewTop) {
      missingTop = docViewTop - elemTop;
    }

    // Find out how much of the slide is missing from the bottom.
    if (elemBottom > docViewBottom) {
      missingBottom = elemBottom - docViewBottom;
    }

    // If there is no amountVisible defined then check to see if the whole slide
    // is visible.
    if (type == 'full') {
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop)
      && (elemLeft >= docViewLeft) && (elemRight <= docViewRight)
      && (elemLeft <= docViewRight) && (elemRight >= docViewLeft));
    }
    else if(type == 'vertical') {
      var verticalShowing = elemHeight - missingTop - missingBottom;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((verticalShowing/elemHeight)*100) >= parseInt(amountVisible));
      }
      else {
        return (verticalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'horizontal') {
      var horizontalShowing = elemWidth - missingLeft - missingRight;

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((horizontalShowing/elemWidth)*100) >= parseInt(amountVisible));
      }
      else {
        return (horizontalShowing >= parseInt(amountVisible));
      }
    }
    else if(type == 'area') {
      var areaShowing = (elemWidth - missingLeft - missingRight) * (elemHeight - missingTop - missingBottom);

      // If user specified a percentage then find out if the current shown percent
      // is larger than the allowed percent.
      // Otherwise check to see if the amount of px shown is larger than the
      // allotted amount.
      if (amountVisible.indexOf('%')) {
        return (((areaShowing/elemArea)*100) >= parseInt(amountVisible));
      }
      else {
        return (areaShowing >= parseInt(amountVisible));
      }
    }
  }
})(jQuery);
;
//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","    ":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);;
/*
 * jQuery Form Plugin
 * version: 2.25 (08-APR-2009)
 * @requires jQuery v1.2.2 or later
 * @note This has been modified for ajax.module
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(5($){$.B.1s=5(u){2(!4.G){R(\'1b: 2M 9 2N - 2O 2P 1t\');6 4}2(S u==\'5\')u={T:u};3 v=4.14(\'1c\')||1d.2Q.2R;v=(v.2S(/^([^#]+)/)||[])[1];v=v||\'\';u=$.1n({1e:v,H:4.14(\'1u\')||\'1Q\'},u||{});3 w={};4.L(\'C-1R-1S\',[4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-1R-1S L\');6 4}2(u.1v&&u.1v(4,u)===I){R(\'1b: 9 1f 1o 1v 1V\');6 4}3 a=4.1w(u.2T);2(u.J){u.O=u.J;K(3 n 1x u.J){2(u.J[n]2U 15){K(3 k 1x u.J[n])a.D({7:n,8:u.J[n][k]})}E a.D({7:n,8:u.J[n]})}}2(u.1y&&u.1y(a,4,u)===I){R(\'1b: 9 1f 1o 1y 1V\');6 4}4.L(\'C-9-1W\',[a,4,u,w]);2(w.1T){R(\'1b: 9 1U 1o C-9-1W L\');6 4}3 q=$.1z(a);2(u.H.2V()==\'1Q\'){u.1e+=(u.1e.2W(\'?\')>=0?\'&\':\'?\')+q;u.J=F}E u.J=q;3 x=4,V=[];2(u.2X)V.D(5(){x.1X()});2(u.2Y)V.D(5(){x.1Y()});2(!u.16&&u.17){3 y=u.T||5(){};V.D(5(a){$(u.17).2Z(a).P(y,1Z)})}E 2(u.T)V.D(u.T);u.T=5(a,b){K(3 i=0,M=V.G;i<M;i++)V[i].30(u,[a,b,x])};3 z=$(\'W:31\',4).18();3 A=I;K(3 j=0;j<z.G;j++)2(z[j])A=Q;2(u.20||A){2(u.21)$.32(u.21,1A);E 1A()}E $.33(u);4.L(\'C-9-34\',[4,u]);6 4;5 1A(){3 h=x[0];2($(\':W[7=9]\',h).G){35(\'36: 37 22 38 39 3a 3b "9".\');6}3 i=$.1n({},$.23,u);3 s=$.1n(Q,{},$.1n(Q,{},$.23),i);3 j=\'3c\'+(1B 3d().3e());3 k=$(\'<20 3f="\'+j+\'" 7="\'+j+\'" 24="25:26" />\');3 l=k[0];k.3g({3h:\'3i\',27:\'-28\',29:\'-28\'});3 m={1f:0,19:F,1g:F,3j:0,3k:\'n/a\',3l:5(){},2a:5(){},3m:5(){},3n:5(){4.1f=1;k.14(\'24\',\'25:26\')}};3 g=i.2b;2(g&&!$.1C++)$.1h.L("3o");2(g)$.1h.L("3p",[m,i]);2(s.2c&&s.2c(m,s)===I){s.2b&&$.1C--;6}2(m.1f)6;3 o=0;3 p=0;3 q=h.U;2(q){3 n=q.7;2(n&&!q.1i){u.O=u.O||{};u.O[n]=q.8;2(q.H=="X"){u.O[7+\'.x\']=h.Y;u.O[7+\'.y\']=h.Z}}}1j(5(){3 t=x.14(\'17\'),a=x.14(\'1c\');h.1k(\'17\',j);2(h.2d(\'1u\')!=\'2e\')h.1k(\'1u\',\'2e\');2(h.2d(\'1c\')!=i.1e)h.1k(\'1c\',i.1e);2(!u.3q){x.14({3r:\'2f/C-J\',3s:\'2f/C-J\'})}2(i.1D)1j(5(){p=Q;11()},i.1D);3 b=[];2g{2(u.O)K(3 n 1x u.O)b.D($(\'<W H="3t" 7="\'+n+\'" 8="\'+u.O[n]+\'" />\').2h(h)[0]);k.2h(\'1l\');l.2i?l.2i(\'2j\',11):l.3u(\'2k\',11,I);h.9()}3v{h.1k(\'1c\',a);t?h.1k(\'17\',t):x.3w(\'17\');$(b).2l()}},10);3 r=0;5 11(){2(o++)6;l.2m?l.2m(\'2j\',11):l.3x(\'2k\',11,I);3 c=Q;2g{2(p)3y\'1D\';3 d,N;N=l.2n?l.2n.2o:l.2p?l.2p:l.2o;2((N.1l==F||N.1l.2q==\'\')&&!r){r=1;o--;1j(11,2r);6}m.19=N.1l?N.1l.2q:F;m.1g=N.2s?N.2s:N;m.2a=5(a){3 b={\'3z-H\':i.16};6 b[a]};2(i.16==\'3A\'||i.16==\'3B\'){3 f=N.1E(\'1F\')[0];m.19=f?f.8:m.19}E 2(i.16==\'2t\'&&!m.1g&&m.19!=F){m.1g=2u(m.19)}d=$.3C(m,i.16)}3D(e){c=I;$.3E(i,m,\'2v\',e)}2(c){i.T(d,\'T\');2(g)$.1h.L("3F",[m,i])}2(g)$.1h.L("3G",[m,i]);2(g&&!--$.1C)$.1h.L("3H");2(i.2w)i.2w(m,c?\'T\':\'2v\');1j(5(){k.2l();m.1g=F},2r)};5 2u(s,a){2(1d.2x){a=1B 2x(\'3I.3J\');a.3K=\'I\';a.3L(s)}E a=(1B 3M()).3N(s,\'1G/2t\');6(a&&a.2y&&a.2y.1p!=\'3O\')?a:F}}};$.B.3P=5(c){6 4.2z().2A(\'9.C-1q\',5(){$(4).1s(c);6 I}).P(5(){$(":9,W:X",4).2A(\'2B.C-1q\',5(e){3 a=4.C;a.U=4;2(4.H==\'X\'){2(e.2C!=12){a.Y=e.2C;a.Z=e.3Q}E 2(S $.B.2D==\'5\'){3 b=$(4).2D();a.Y=e.2E-b.29;a.Z=e.2F-b.27}E{a.Y=e.2E-4.3R;a.Z=e.2F-4.3S}}1j(5(){a.U=a.Y=a.Z=F},10)})})};$.B.2z=5(){4.2G(\'9.C-1q\');6 4.P(5(){$(":9,W:X",4).2G(\'2B.C-1q\')})};$.B.1w=5(b){3 a=[];2(4.G==0)6 a;3 c=4[0];3 d=b?c.1E(\'*\'):c.22;2(!d)6 a;K(3 i=0,M=d.G;i<M;i++){3 e=d[i];3 n=e.7;2(!n)1H;2(b&&c.U&&e.H=="X"){2(!e.1i&&c.U==e)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z});1H}3 v=$.18(e,Q);2(v&&v.1r==15){K(3 j=0,2H=v.G;j<2H;j++)a.D({7:n,8:v[j]})}E 2(v!==F&&S v!=\'12\')a.D({7:n,8:v})}2(!b&&c.U){3 f=c.1E("W");K(3 i=0,M=f.G;i<M;i++){3 g=f[i];3 n=g.7;2(n&&!g.1i&&g.H=="X"&&c.U==g)a.D({7:n+\'.x\',8:c.Y},{7:n+\'.y\',8:c.Z})}}6 a};$.B.3T=5(a){6 $.1z(4.1w(a))};$.B.3U=5(b){3 a=[];4.P(5(){3 n=4.7;2(!n)6;3 v=$.18(4,b);2(v&&v.1r==15){K(3 i=0,M=v.G;i<M;i++)a.D({7:n,8:v[i]})}E 2(v!==F&&S v!=\'12\')a.D({7:4.7,8:v})});6 $.1z(a)};$.B.18=5(a){K(3 b=[],i=0,M=4.G;i<M;i++){3 c=4[i];3 v=$.18(c,a);2(v===F||S v==\'12\'||(v.1r==15&&!v.G))1H;v.1r==15?$.3V(b,v):b.D(v)}6 b};$.18=5(b,c){3 n=b.7,t=b.H,1a=b.1p.1I();2(S c==\'12\')c=Q;2(c&&(!n||b.1i||t==\'1m\'||t==\'3W\'||(t==\'1J\'||t==\'1K\')&&!b.1L||(t==\'9\'||t==\'X\')&&b.C&&b.C.U!=b||1a==\'13\'&&b.1M==-1))6 F;2(1a==\'13\'){3 d=b.1M;2(d<0)6 F;3 a=[],1N=b.3X;3 e=(t==\'13-2I\');3 f=(e?d+1:1N.G);K(3 i=(e?d:0);i<f;i++){3 g=1N[i];2(g.1t){3 v=g.8;2(!v)v=(g.1O&&g.1O[\'8\']&&!(g.1O[\'8\'].3Y))?g.1G:g.8;2(e)6 v;a.D(v)}}6 a}6 b.8};$.B.1Y=5(){6 4.P(5(){$(\'W,13,1F\',4).2J()})};$.B.2J=$.B.3Z=5(){6 4.P(5(){3 t=4.H,1a=4.1p.1I();2(t==\'1G\'||t==\'40\'||1a==\'1F\')4.8=\'\';E 2(t==\'1J\'||t==\'1K\')4.1L=I;E 2(1a==\'13\')4.1M=-1})};$.B.1X=5(){6 4.P(5(){2(S 4.1m==\'5\'||(S 4.1m==\'41\'&&!4.1m.42))4.1m()})};$.B.43=5(b){2(b==12)b=Q;6 4.P(5(){4.1i=!b})};$.B.2K=5(b){2(b==12)b=Q;6 4.P(5(){3 t=4.H;2(t==\'1J\'||t==\'1K\')4.1L=b;E 2(4.1p.1I()==\'2L\'){3 a=$(4).44(\'13\');2(b&&a[0]&&a[0].H==\'13-2I\'){a.45(\'2L\').2K(I)}4.1t=b}})};5 R(){2($.B.1s.46&&1d.1P&&1d.1P.R)1d.1P.R(\'[47.C] \'+15.48.49.4a(1Z,\'\'))}})(4b);',62,260,'||if|var|this|function|return|name|value|submit||||||||||||||||||||||||||||fn|form|push|else|null|length|type|false|data|for|trigger|max|doc|extraData|each|true|log|typeof|success|clk|callbacks|input|image|clk_x|clk_y||cb|undefined|select|attr|Array|dataType|target|a_fieldValue|responseText|tag|ajaxSubmit|action|window|url|aborted|responseXML|event|disabled|setTimeout|setAttribute|body|reset|extend|via|tagName|plugin|constructor|a_ajaxSubmit|selected|method|beforeSerialize|a_formToArray|in|beforeSubmit|param|fileUpload|new|active|timeout|getElementsByTagName|textarea|text|continue|toLowerCase|checkbox|radio|checked|selectedIndex|ops|attributes|console|GET|pre|serialize|veto|vetoed|callback|validate|a_resetForm|a_clearForm|arguments|iframe|closeKeepAlive|elements|ajaxSettings|src|about|blank|top|1000px|left|getResponseHeader|global|beforeSend|getAttribute|POST|multipart|try|appendTo|attachEvent|onload|load|remove|detachEvent|contentWindow|document|contentDocument|innerHTML|100|XMLDocument|xml|toXml|error|complete|ActiveXObject|documentElement|a_ajaxFormUnbind|bind|click|offsetX|offset|pageX|pageY|unbind|jmax|one|a_clearFields|a_selected|option|skipping|process|no|element|location|href|match|semantic|instanceof|toUpperCase|indexOf|resetForm|clearForm|html|apply|file|get|ajax|notify|alert|Error|Form|must|not|be|named|jqFormIO|Date|getTime|id|css|position|absolute|status|statusText|getAllResponseHeaders|setRequestHeader|abort|ajaxStart|ajaxSend|skipEncodingOverride|encoding|enctype|hidden|addEventListener|finally|removeAttr|removeEventListener|throw|content|json|script|httpData|catch|handleError|ajaxSuccess|ajaxComplete|ajaxStop|Microsoft|XMLDOM|async|loadXML|DOMParser|parseFromString|parsererror|a_ajaxForm|offsetY|offsetLeft|offsetTop|a_formSerialize|a_fieldSerialize|merge|button|options|specified|a_clearInputs|password|object|nodeType|a_enable|parent|find|debug|jquery|prototype|join|call|jQuery'.split('|'),0,{}));
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 * 
 *
 */

Drupal.Ajax = new Object;

Drupal.Ajax.plugins = {};

Drupal.Ajax.firstRun = false;

/**
 * Init function.
 * This is being executed by Drupal behaviours.
 * See bottom of script.
 * 
 * @param {HTMLElement} context
 * @return {Bool}
 */
Drupal.Ajax.init = function(context) {
  var f, s;
  if (f = $('.ajax-form', context)) {
    if (!Drupal.Ajax.firstRun) {
      Drupal.Ajax.invoke('init');
      Drupal.Ajax.firstRun = true;
    }
    s = $('input[type="submit"]', f);
    s.click(function(){
      this.form.ajax_activator = $(this);
      return true;
    });
    f.each(function(){
      this.ajax_activator = null;
      $(this).submit(function(){
        if (this.ajax_activator === null) {
          this.ajax_activator = $('#edit-submit', this);
        }
        if (this.ajax_activator.hasClass('ajax-trigger')) {
          Drupal.Ajax.go($(this), this.ajax_activator);
          return false;
        }
        else {
          return true;
        }
      });
      return true;
    });
  }
  return true;
};

/**
 * Invokes plugins
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 */
Drupal.Ajax.invoke = function(hook, args) {
  var plugin, r, ret;
  ret = true;
  for (plugin in Drupal.Ajax.plugins) {
    r = Drupal.Ajax.plugins[plugin](hook, args);
    if (r === false) {
      ret = false;
    }
  }
  return ret;
};

/**
 * Handles submission
 * 
 * @param {Object} submitter_
 * @return {Bool}
 */
Drupal.Ajax.go = function(formObj, submitter) {
  var submitterVal, submitterName, extraData;
  Drupal.Ajax.invoke('submit', {submitter:submitter});
  submitterVal = submitter.val();
  submitterName = submitter.attr('name');
  submitter.val(Drupal.t('Loading...'));
  extraData = {};
  extraData[submitterName] = submitterVal;
  extraData['drupal_ajax'] = '1';
  formObj.a_ajaxSubmit({
    extraData : extraData,
    beforeSubmit : function(data) {
      data[data.length] = {
        name : submitterName,
        value : submitterVal
      };
      data[data.length] = {
        name : 'drupal_ajax',
        value : '1'
      };
      return true;
    },
    dataType : 'json',
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      window.alert(Drupal.t('ajax.module: An unknown error has occurred.'));
      if (window.console) {
        console.log('error', arguments);
      }
      return true;
    },
    success: function(data){
      submitter.val(submitterVal);
      Drupal.Ajax.response(submitter, formObj, data);
      return true;
    }
  });
  return false;
};

/**
 * Handles messaging
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} data
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.message = function(formObj, submitter, data, options) {
  var args;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  if (Drupal.Ajax.invoke('message', data)) {
    Drupal.Ajax.writeMessage(data.local.form, data.local.submitter, options);
    Drupal.Ajax.invoke('afterMessage', data);
  }
  return true;
};

/**
 * Writes message
 * 
 * @param {Object} formObj
 * @param {Object} submitter
 * @param {Object} options
 * @return {Bool}
 */
Drupal.Ajax.writeMessage = function(formObj, submitter, options) {
  var i, _i, thisItem, log, errBox, h, data;
  if (options.action === 'notify') {
    // Cleanups
    $('.messages, .ajax-preview', formObj).remove();
    $('input, textarea').removeClass('error status warning required');
    // Preview
    if (options.type === 'preview') {
      log = $('<div>').addClass('ajax-preview');
      log.html(options.messages);
      formObj.prepend(log);
    }
    // Status, Error, Message
    else {
      log = $('<ul>');
      errBox = $(".messages." + options.type, formObj[0])
      for (i = 0, _i = options.messages.length; i < _i; i++) {
        thisItem = $('#' + options.messages[i].id, formObj[0])
        thisItem.addClass(options.type);
        if (options.messages[i].required) {
          thisItem.addClass('required');
        }
        log.append('<li>' + options.messages[i].value + '</li>');
      }
      if (errBox.length === 0) {
        errBox = $("<div class='messages " + options.type + "'>");
        formObj.prepend(errBox);
      }
      errBox.html(log);
    }
  }
  else if (options.action === 'clear') {
    $('.messages, .ajax-preview', formObj).remove();
  }
  return true;
};

/**
 * Updates message containers
 * 
 * @param {Object} updaters
 * @return {Bool}
 */
Drupal.Ajax.updater = function(updaters) {
  var i, _i, elm;
  for (i = 0, _i = updaters.length; i < _i; i++) {
    elm = $(updaters[i].selector);
    // HTML:IN
    if (updaters[i].type === 'html_in') {
      elm.html(updaters[i].value);
    }
    // HTML:OUT
    else if (updaters[i].type === 'html_out') {
      elm.replaceWith(updaters[i].value);
    }
    // FIELD
    else if (updaters[i].type === 'field') {
      elm.val(updaters[i].value);
    }
    // REMOVE
    else if(updaters[i].type === 'remove') {
      elm.remove();
    }
  }
  return true;
};

/**
 * Handles data response
 * 
 * @param {Object} submitter
 * @param {Object} formObj
 * @param {Object} data
 * @return {Bool}
 */
Drupal.Ajax.response = function(submitter, formObj, data){
  var newSubmitter;
  data.local = {
    submitter : submitter,
    form : formObj
  };
  /**
   * Failure
   */
  if (data.status === false) {
    Drupal.Ajax.updater(data.updaters);
    Drupal.Ajax.message(formObj, submitter, data, {
      action : 'notify',
      messages : data.messages_error,
      type : 'error'
    });
  }
  /**
   * Success
   */
  else {
    // Display preview
    if (data.preview !== null) {
      Drupal.Ajax.updater(data.updaters);
      Drupal.Ajax.message(formObj, submitter, data, {
        action : 'notify',
        messages : decodeURIComponent(data.preview),
        type : 'preview'
      });
    }
    // If no redirect, then simply show messages
    else if (data.redirect === null) {
      if (data.messages_status.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_status,
          type : 'status'
        });
      }
      if (data.messages_warning.length > 0) {
        Drupal.Ajax.message(formObj, submitter, data, {
          action : 'notify',
          messages : data.messages_warning,
          type : 'warning'
        });
      }
      if (data.messages_status.length === 0 &&
          data.messages_warning.length === 0) {
        Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
      }
    }
    // Redirect
    else {
      if (Drupal.Ajax.invoke('redirect', data)) {
        Drupal.Ajax.redirect( data.redirect );
      }
      else {
        Drupal.Ajax.updater(data.updaters);
        if (data.messages_status.length === 0 &&
            data.messages_warning.length === 0) {
          Drupal.Ajax.message(formObj, submitter, data, {action:'clear'});
        }
        else {
          Drupal.Ajax.message(formObj, submitter, data, {
            action : 'notify',
            messages : data.messages_status,
            type : 'status'
          });
        }
      }
    }
  }
  return true;
};


/**
 * Redirects to appropriate page
 * 
 * @todo
 *   Some of this functionality should possibly hapen on
 *   the server instead of client.
 * @param {String} url
 */
Drupal.Ajax.redirect = function(url) {
  window.location.href = url;
};

Drupal.behaviors.Ajax = Drupal.Ajax.init;


;
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 * 
 * @see http://drupal.org/node/114774#javascript-behaviors
 *
 */

/**
 * Disables redirection for Ajax forms
 * 
 * @param {String} hook
 * @param {Object} args
 * @return {Bool}
 */
Drupal.Ajax.plugins.disable_redirect = function(hook, args) {
  if (hook === 'redirect') {
    if (args.options.disable_redirect === true) {
      args.local.form[0].reset();
      //IE
      $('.form-item select', args.local.form[0]).attr('selectedIndex', 0);
      if (args.options.remove_form === true) {
        args.local.form.remove();
      }
      else {
        $('.form-item :input', args.local.form[0])[0].focus();
      }
      return false;
    }
  }
}


;
/**
 * Automatic ajax validation
 *
 * @see http://drupal.org/project/ajax
 * @see irc://freenode.net/#drupy
 * @depends Drupal 6
 * @author brendoncrawford
 * @note This file uses a 79 character width limit.
 */

/**
 * Ajax Forms plugin for scroller
 * 
 * @param {String} hook
 * @param {Object} args
 * @return {Bool}
 */
Drupal.Ajax.plugins.scroller = function(hook, args) {
  var scroll_weight, box, found, timer;
  if (hook === 'afterMessage') {
    if (args.options.scroller === true) {
      scroll_weight = 100;
      timer = window.setInterval(function(){
        box = args.local.submitter[0];
        found = false;
        // Watch for thickbox
        while (box.parentNode !== null &&
        Drupal.Ajax.invoke('scrollFind', {
          container: box
        })) {
          box = box.parentNode;
          // Document
          if (box === document) {
            if (box.documentElement.scrollTop &&
            box.documentElement.scrollTop > 0) {
              box.documentElement.scrollTop -= scroll_weight;
              found = true;
            }
          }
          // Body
          else 
            if (box === document.body) {
              if (box.scrollTop &&
              box.scrollTop > 0) {
                box.scrollTop -= scroll_weight;
                found = true;
              }
            }
            // Window
            else 
              if (box === window) {
                if ((window.pageYOffset && window.pageYOffset > 0) ||
                (window.scrollY && window.scrollY > 0)) {
                  window.scrollBy(0, -scroll_weight);
                  found = true;
                }
              }
              // Any other element
              else {
                if (box.scrollTop && box.scrollTop > 0) {
                  box.scrollTop -= scroll_weight;
                  found = true;
                }
              }
        }
        // Check if completed
        if (!found) {
          window.clearInterval(timer);
        }
        return true;
      }, 100);
      return true;
    }
  }
}


;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
/*
    Spinner provides a simple approach for adding and removing a preloader
    for your web applications. Usage is as simple as calling $('elem').spinner() and
    subsequently $('elem').spinner.remove(). You may create your own preloader
    at http://www.ajaxload.info. Please note that if you use a custom preloader,
    you must pass in the new height and width as options.
    
    Copyright (C) 2010 Corey Ballou
    Website: http://www.jqueryin.com
    Documentation: http://www.jqueryin.com/projects/spinner-jquery-preloader-plugin/

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
(function($) {
    $.fn.spinner = function(options) {
        var opts = $.extend({}, $.fn.spinner.defaults, options);

        return this.each(function() {
            var l=0, t=0, w=0, h=0, shim=0, $s;
            var $this = $(this);
            
            // removal handling
            if (options == 'remove' || options == 'close') {
                var $s = $this.data('spinner');
                var o = $this.data('opts');
                if (typeof $s != 'undefined') {
                    $s.remove();
                    $this.removeData('spinner').removeData('opts');
                    if (o.hide) $this.css('visibility', 'visible');
                    o.onFinish.call(this);
                }
                return;
            }
            
            // add a spinner if it doesn't already have one
            if ($this.data('spinner') == null) {
                // retrieve element positioning
                var pos = $this.offset();
                w = $this.outerWidth();
                h = $this.outerHeight();

                // calculate vertical centering
                if (h > opts.height) shim = Math.round((h - opts.height)/ 2);
                else if (h < opts.height) shim = 0 - Math.round((opts.height - h) / 2);
                t = pos.top + shim + 'px';

                // calculate horizontal positioning
                if (opts.position == 'right') {
                    l = pos.left + w + 10 + 'px';
                } else if (opts.position == 'left') {
                    l = pos.left - opts.width - 10 + 'px';
                } else {
                    l = pos.left + Math.round(.5 * w) - Math.round(.5 * opts.width) + 'px';
                }

                // call start callback
                opts.onStart.call(this);

                // hide element?
                if (opts.hide) $this.css('visibility', 'hidden');

                // create the spinner and attach
                $s = $('<img src="' + opts.img + '" style="position: absolute; left: ' + l +'; top: ' + t + '; width: ' + opts.width + 'px; height: ' + opts.height + 'px; z-index: ' + opts.zIndex + ';" />').appendTo('body');

                // removal handling
                $this.data('spinner', $s).data('opts', opts);                
            }

        });
    };
    
    // default spinner options
    $.fn.spinner.defaults = {
        position    : 'right'       // left, right, center
        , img       : 'spinner.gif' // path to spinner img
        , height    : 16            // height of spinner img
        , width     : 16            // width of spinner img
        , zIndex    : 1001          // z-index of spinner
        , hide      : false         // whether to hide the elem
        , onStart   : function(){ } // start callback
        , onFinish  : function(){ } // end callback
    };
})(jQuery);
;
/*
 * Shadowbox.js, version 3.0.3
 * http://shadowbox-js.com/
 *
 * Copyright 2007-2010, Michael J. I. Jackson
 * Date: 2010-04-06 19:45:54 +0000
 */
(function(window,undefined){var S={version:"3.0.3"};var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("windows")>-1||ua.indexOf("win32")>-1){S.isWindows=true}else{if(ua.indexOf("macintosh")>-1||ua.indexOf("mac os x")>-1){S.isMac=true}else{if(ua.indexOf("linux")>-1){S.isLinux=true}}}S.isIE=ua.indexOf("msie")>-1;S.isIE6=ua.indexOf("msie 6")>-1;S.isIE7=ua.indexOf("msie 7")>-1;S.isGecko=ua.indexOf("gecko")>-1&&ua.indexOf("safari")==-1;S.isWebKit=ua.indexOf("applewebkit/")>-1;var inlineId=/#(.+)$/,galleryName=/^(light|shadow)box\[(.*?)\]/i,inlineParam=/\s*([a-z_]*?)\s*=\s*(.+)\s*/,fileExtension=/[0-9a-z]+$/i,scriptPath=/(.+\/)shadowbox\.js/i;var open=false,initialized=false,lastOptions={},slideDelay=0,slideStart,slideTimer;S.current=-1;S.dimensions=null;S.ease=function(state){return 1+Math.pow(state-1,3)};S.errorInfo={fla:{name:"Flash",url:"http://www.adobe.com/products/flashplayer/"},qt:{name:"QuickTime",url:"http://www.apple.com/quicktime/download/"},wmp:{name:"Windows Media Player",url:"http://www.microsoft.com/windows/windowsmedia/"},f4m:{name:"Flip4Mac",url:"http://www.flip4mac.com/wmv_download.htm"}};S.gallery=[];S.onReady=noop;S.path=null;S.player=null;S.playerId="sb-player";S.options={animate:true,animateFade:true,autoplayMovies:true,continuous:false,enableKeys:true,flashParams:{bgcolor:"#000000",allowfullscreen:true},flashVars:{},flashVersion:"9.0.115",handleOversize:"resize",handleUnsupported:"link",onChange:noop,onClose:noop,onFinish:noop,onOpen:noop,showMovieControls:true,skipSetup:false,slideshowDelay:0,viewportPadding:20};S.getCurrent=function(){return S.current>-1?S.gallery[S.current]:null};S.hasNext=function(){return S.gallery.length>1&&(S.current!=S.gallery.length-1||S.options.continuous)};S.isOpen=function(){return open};S.isPaused=function(){return slideTimer=="pause"};S.applyOptions=function(options){lastOptions=apply({},S.options);apply(S.options,options)};S.revertOptions=function(){apply(S.options,lastOptions)};S.init=function(options,callback){if(initialized){return}initialized=true;if(S.skin.options){apply(S.options,S.skin.options)}if(options){apply(S.options,options)}if(!S.path){var path,scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){path=scriptPath.exec(scripts[i].src);if(path){S.path=path[1];break}}}if(callback){S.onReady=callback}bindLoad()};S.open=function(obj){if(open){return}var gc=S.makeGallery(obj);S.gallery=gc[0];S.current=gc[1];obj=S.getCurrent();if(obj==null){return}S.applyOptions(obj.options||{});filterGallery();if(S.gallery.length){obj=S.getCurrent();if(S.options.onOpen(obj)===false){return}open=true;S.skin.onOpen(obj,load)}};S.close=function(){if(!open){return}open=false;if(S.player){S.player.remove();S.player=null}if(typeof slideTimer=="number"){clearTimeout(slideTimer);slideTimer=null}slideDelay=0;listenKeys(false);S.options.onClose(S.getCurrent());S.skin.onClose();S.revertOptions()};S.play=function(){if(!S.hasNext()){return}if(!slideDelay){slideDelay=S.options.slideshowDelay*1000}if(slideDelay){slideStart=now();slideTimer=setTimeout(function(){slideDelay=slideStart=0;S.next()},slideDelay);if(S.skin.onPlay){S.skin.onPlay()}}};S.pause=function(){if(typeof slideTimer!="number"){return}slideDelay=Math.max(0,slideDelay-(now()-slideStart));if(slideDelay){clearTimeout(slideTimer);slideTimer="pause";if(S.skin.onPause){S.skin.onPause()}}};S.change=function(index){if(!(index in S.gallery)){if(S.options.continuous){index=(index<0?S.gallery.length+index:0);if(!(index in S.gallery)){return}}else{return}}S.current=index;if(typeof slideTimer=="number"){clearTimeout(slideTimer);slideTimer=null;slideDelay=slideStart=0}S.options.onChange(S.getCurrent());load(true)};S.next=function(){S.change(S.current+1)};S.previous=function(){S.change(S.current-1)};S.setDimensions=function(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect){var originalHeight=height,originalWidth=width;var extraHeight=2*padding+topBottom;if(height+extraHeight>maxHeight){height=maxHeight-extraHeight}var extraWidth=2*padding+leftRight;if(width+extraWidth>maxWidth){width=maxWidth-extraWidth}var changeHeight=(originalHeight-height)/originalHeight,changeWidth=(originalWidth-width)/originalWidth,oversized=(changeHeight>0||changeWidth>0);if(preserveAspect&&oversized){if(changeHeight>changeWidth){width=Math.round((originalWidth/originalHeight)*height)}else{if(changeWidth>changeHeight){height=Math.round((originalHeight/originalWidth)*width)}}}S.dimensions={height:height+topBottom,width:width+leftRight,innerHeight:height,innerWidth:width,top:Math.floor((maxHeight-(height+extraHeight))/2+padding),left:Math.floor((maxWidth-(width+extraWidth))/2+padding),oversized:oversized};return S.dimensions};S.makeGallery=function(obj){var gallery=[],current=-1;if(typeof obj=="string"){obj=[obj]}if(typeof obj.length=="number"){each(obj,function(i,o){if(o.content){gallery[i]=o}else{gallery[i]={content:o}}});current=0}else{if(obj.tagName){var cacheObj=S.getCache(obj);obj=cacheObj?cacheObj:S.makeObject(obj)}if(obj.gallery){gallery=[];var o;for(var key in S.cache){o=S.cache[key];if(o.gallery&&o.gallery==obj.gallery){if(current==-1&&o.content==obj.content){current=gallery.length}gallery.push(o)}}if(current==-1){gallery.unshift(obj);current=0}}else{gallery=[obj];current=0}}each(gallery,function(i,o){gallery[i]=apply({},o)});return[gallery,current]};S.makeObject=function(link,options){var obj={content:link.href,title:link.getAttribute("title")||"",link:link};if(options){options=apply({},options);each(["player","title","height","width","gallery"],function(i,o){if(typeof options[o]!="undefined"){obj[o]=options[o];delete options[o]}});obj.options=options}else{obj.options={}}if(!obj.player){obj.player=S.getPlayer(obj.content)}var rel=link.getAttribute("rel");if(rel){var match=rel.match(galleryName);if(match){obj.gallery=escape(match[2])}each(rel.split(";"),function(i,p){match=p.match(inlineParam);if(match){obj[match[1]]=match[2]}})}return obj};S.getPlayer=function(content){if(content.indexOf("#")>-1&&content.indexOf(document.location.href)==0){return"inline"}var q=content.indexOf("?");if(q>-1){content=content.substring(0,q)}var ext,m=content.match(fileExtension);if(m){ext=m[0].toLowerCase()}if(ext){if(S.img&&S.img.ext.indexOf(ext)>-1){return"img"}if(S.swf&&S.swf.ext.indexOf(ext)>-1){return"swf"}if(S.flv&&S.flv.ext.indexOf(ext)>-1){return"flv"}if(S.qt&&S.qt.ext.indexOf(ext)>-1){if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"qtwmp"}else{return"qt"}}if(S.wmp&&S.wmp.ext.indexOf(ext)>-1){return"wmp"}}return"iframe"};function filterGallery(){var err=S.errorInfo,plugins=S.plugins,obj,remove,needed,m,format,replace,inlineEl,flashVersion;for(var i=0;i<S.gallery.length;++i){obj=S.gallery[i];remove=false;needed=null;switch(obj.player){case"flv":case"swf":if(!plugins.fla){needed="fla"}break;case"qt":if(!plugins.qt){needed="qt"}break;case"wmp":if(S.isMac){if(plugins.qt&&plugins.f4m){obj.player="qt"}else{needed="qtf4m"}}else{if(!plugins.wmp){needed="wmp"}}break;case"qtwmp":if(plugins.qt){obj.player="qt"}else{if(plugins.wmp){obj.player="wmp"}else{needed="qtwmp"}}break}if(needed){if(S.options.handleUnsupported=="link"){switch(needed){case"qtf4m":format="shared";replace=[err.qt.url,err.qt.name,err.f4m.url,err.f4m.name];break;case"qtwmp":format="either";replace=[err.qt.url,err.qt.name,err.wmp.url,err.wmp.name];break;default:format="single";replace=[err[needed].url,err[needed].name]}obj.player="html";obj.content='<div class="sb-message">'+sprintf(S.lang.errors[format],replace)+"</div>"}else{remove=true}}else{if(obj.player=="inline"){m=inlineId.exec(obj.content);if(m){inlineEl=get(m[1]);if(inlineEl){obj.content=inlineEl.innerHTML}else{remove=true}}else{remove=true}}else{if(obj.player=="swf"||obj.player=="flv"){flashVersion=(obj.options&&obj.options.flashVersion)||S.options.flashVersion;if(S.flash&&!S.flash.hasFlashPlayerVersion(flashVersion)){obj.width=310;obj.height=177}}}}if(remove){S.gallery.splice(i,1);if(i<S.current){--S.current}else{if(i==S.current){S.current=i>0?i-1:i}}--i}}}function listenKeys(on){if(!S.options.enableKeys){return}(on?addEvent:removeEvent)(document,"keydown",handleKey)}function handleKey(e){if(e.metaKey||e.shiftKey||e.altKey||e.ctrlKey){return}var code=keyCode(e),handler;switch(code){case 81:case 88:case 27:handler=S.close;break;case 37:handler=S.previous;break;case 39:handler=S.next;break;case 32:handler=typeof slideTimer=="number"?S.pause:S.play;break}if(handler){preventDefault(e);handler()}}function load(changing){listenKeys(false);var obj=S.getCurrent();var player=(obj.player=="inline"?"html":obj.player);if(typeof S[player]!="function"){throw"unknown player "+player}if(changing){S.player.remove();S.revertOptions();S.applyOptions(obj.options||{})}S.player=new S[player](obj,S.playerId);if(S.gallery.length>1){var next=S.gallery[S.current+1]||S.gallery[0];if(next.player=="img"){var a=new Image();a.src=next.content}var prev=S.gallery[S.current-1]||S.gallery[S.gallery.length-1];if(prev.player=="img"){var b=new Image();b.src=prev.content}}S.skin.onLoad(changing,waitReady)}function waitReady(){if(!open){return}if(typeof S.player.ready!="undefined"){var timer=setInterval(function(){if(open){if(S.player.ready){clearInterval(timer);timer=null;S.skin.onReady(show)}}else{clearInterval(timer);timer=null}},10)}else{S.skin.onReady(show)}}function show(){if(!open){return}S.player.append(S.skin.body,S.dimensions);S.skin.onShow(finish)}function finish(){if(!open){return}if(S.player.onLoad){S.player.onLoad()}S.options.onFinish(S.getCurrent());if(!S.isPaused()){S.play()}listenKeys(true)}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(obj,from){var len=this.length>>>0;from=from||0;if(from<0){from+=len}for(;from<len;++from){if(from in this&&this[from]===obj){return from}}return -1}}function now(){return(new Date).getTime()}function apply(original,extension){for(var property in extension){original[property]=extension[property]}return original}function each(obj,callback){var i=0,len=obj.length;for(var value=obj[0];i<len&&callback.call(value,i,value)!==false;value=obj[++i]){}}function sprintf(str,replace){return str.replace(/\{(\w+?)\}/g,function(match,i){return replace[i]})}function noop(){}function get(id){return document.getElementById(id)}function remove(el){el.parentNode.removeChild(el)}var supportsOpacity=true,supportsFixed=true;function checkSupport(){var body=document.body,div=document.createElement("div");supportsOpacity=typeof div.style.opacity==="string";div.style.position="fixed";div.style.margin=0;div.style.top="20px";body.appendChild(div,body.firstChild);supportsFixed=div.offsetTop==20;body.removeChild(div)}S.getStyle=(function(){var opacity=/opacity=([^)]*)/,getComputedStyle=document.defaultView&&document.defaultView.getComputedStyle;return function(el,style){var ret;if(!supportsOpacity&&style=="opacity"&&el.currentStyle){ret=opacity.test(el.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";return ret===""?"1":ret}if(getComputedStyle){var computedStyle=getComputedStyle(el,null);if(computedStyle){ret=computedStyle[style]}if(style=="opacity"&&ret==""){ret="1"}}else{ret=el.currentStyle[style]}return ret}})();S.appendHTML=function(el,html){if(el.insertAdjacentHTML){el.insertAdjacentHTML("BeforeEnd",html)}else{if(el.lastChild){var range=el.ownerDocument.createRange();range.setStartAfter(el.lastChild);var frag=range.createContextualFragment(html);el.appendChild(frag)}else{el.innerHTML=html}}};S.getWindowSize=function(dimension){if(document.compatMode==="CSS1Compat"){return document.documentElement["client"+dimension]}return document.body["client"+dimension]};S.setOpacity=function(el,opacity){var style=el.style;if(supportsOpacity){style.opacity=(opacity==1?"":opacity)}else{style.zoom=1;if(opacity==1){if(typeof style.filter=="string"&&(/alpha/i).test(style.filter)){style.filter=style.filter.replace(/\s*[\w\.]*alpha\([^\)]*\);?/gi,"")}}else{style.filter=(style.filter||"").replace(/\s*[\w\.]*alpha\([^\)]*\)/gi,"")+" alpha(opacity="+(opacity*100)+")"}}};S.clearOpacity=function(el){S.setOpacity(el,1)};function getTarget(e){return e.target}function getPageXY(e){return[e.pageX,e.pageY]}function preventDefault(e){e.preventDefault()}function keyCode(e){return e.keyCode}function addEvent(el,type,handler){jQuery(el).bind(type,handler)}function removeEvent(el,type,handler){jQuery(el).unbind(type,handler)}jQuery.fn.shadowbox=function(options){return this.each(function(){var el=jQuery(this);var opts=jQuery.extend({},options||{},jQuery.metadata?el.metadata():jQuery.meta?el.data():{});var cls=this.className||"";opts.width=parseInt((cls.match(/w:(\d+)/)||[])[1])||opts.width;opts.height=parseInt((cls.match(/h:(\d+)/)||[])[1])||opts.height;Shadowbox.setup(el,opts)})};var loaded=false,DOMContentLoaded;if(document.addEventListener){DOMContentLoaded=function(){document.removeEventListener("DOMContentLoaded",DOMContentLoaded,false);S.load()}}else{if(document.attachEvent){DOMContentLoaded=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",DOMContentLoaded);S.load()}}}}function doScrollCheck(){if(loaded){return}try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}S.load()}function bindLoad(){if(document.readyState==="complete"){return S.load()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",DOMContentLoaded,false);window.addEventListener("load",S.load,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",DOMContentLoaded);window.attachEvent("onload",S.load);var topLevel=false;try{topLevel=window.frameElement===null}catch(e){}if(document.documentElement.doScroll&&topLevel){doScrollCheck()}}}}S.load=function(){if(loaded){return}if(!document.body){return setTimeout(S.load,13)}loaded=true;checkSupport();S.onReady();if(!S.options.skipSetup){S.setup()}S.skin.init()};S.plugins={};if(navigator.plugins&&navigator.plugins.length){var names=[];each(navigator.plugins,function(i,p){names.push(p.name)});names=names.join(",");var f4m=names.indexOf("Flip4Mac")>-1;S.plugins={fla:names.indexOf("Shockwave Flash")>-1,qt:names.indexOf("QuickTime")>-1,wmp:!f4m&&names.indexOf("Windows Media")>-1,f4m:f4m}}else{var detectPlugin=function(name){var axo;try{axo=new ActiveXObject(name)}catch(e){}return !!axo};S.plugins={fla:detectPlugin("ShockwaveFlash.ShockwaveFlash"),qt:detectPlugin("QuickTime.QuickTime"),wmp:detectPlugin("wmplayer.ocx"),f4m:false}}var relAttr=/^(light|shadow)box/i,expando="shadowboxCacheKey",cacheKey=1;S.cache={};S.select=function(selector){var links=[];if(!selector){var rel;each(document.getElementsByTagName("a"),function(i,el){rel=el.getAttribute("rel");if(rel&&relAttr.test(rel)){links.push(el)}})}else{var length=selector.length;if(length){if(typeof selector=="string"){if(S.find){links=S.find(selector)}}else{if(length==2&&typeof selector[0]=="string"&&selector[1].nodeType){if(S.find){links=S.find(selector[0],selector[1])}}else{for(var i=0;i<length;++i){links[i]=selector[i]}}}}else{links.push(selector)}}return links};S.setup=function(selector,options){each(S.select(selector),function(i,link){S.addCache(link,options)})};S.teardown=function(selector){each(S.select(selector),function(i,link){S.removeCache(link)})};S.addCache=function(link,options){var key=link[expando];if(key==undefined){key=cacheKey++;link[expando]=key;addEvent(link,"click",handleClick)}S.cache[key]=S.makeObject(link,options)};S.removeCache=function(link){removeEvent(link,"click",handleClick);delete S.cache[link[expando]];link[expando]=null};S.getCache=function(link){var key=link[expando];return(key in S.cache&&S.cache[key])};S.clearCache=function(){for(var key in S.cache){S.removeCache(S.cache[key].link)}S.cache={}};function handleClick(e){S.open(this);if(S.gallery.length){preventDefault(e)}}
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 *
 * Modified for inclusion in Shadowbox.js
 */
S.find=(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true;[0,0].sort(function(){baseHasDuplicate=false;return 0});var Sizzle=function(selector,context,results,seed){results=results||[];var origContext=context=context||document;if(context.nodeType!==1&&context.nodeType!==9){return[]}if(!selector||typeof selector!=="string"){return results}var parts=[],m,set,checkSet,extra,prune=true,contextXML=isXML(context),soFar=selector;while((chunker.exec(""),m=chunker.exec(soFar))!==null){soFar=m[3];parts.push(m[1]);if(m[2]){extra=m[3];break}}if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context)}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);while(parts.length){selector=parts.shift();if(Expr.relative[selector]){selector+=parts.shift()}set=posProcess(selector,set)}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){var ret=Sizzle.find(parts.shift(),context,contextXML);context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0]}if(context){var ret=seed?{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;if(parts.length>0){checkSet=makeArray(set)}else{prune=false}while(parts.length){var cur=parts.pop(),pop=cur;if(!Expr.relative[cur]){cur=""}else{pop=parts.pop()}if(pop==null){pop=context}Expr.relative[cur](checkSet,pop,contextXML)}}else{checkSet=parts=[]}}if(!checkSet){checkSet=set}if(!checkSet){throw"Syntax error, unrecognized expression: "+(cur||selector)}if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet)}else{if(context&&context.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&contains(context,checkSet[i]))){results.push(set[i])}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i])}}}}}else{makeArray(checkSet,results)}if(extra){Sizzle(extra,origContext,results,seed);Sizzle.uniqueSort(results)}return results};Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;results.sort(sortOrder);if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1)}}}}return results};Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set)};Sizzle.find=function(expr,context,isXML){var set,match;if(!expr){return[]}for(var i=0,l=Expr.order.length;i<l;i++){var type=Expr.order[i],match;if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];match.splice(1,1);if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");set=Expr.find[type](match,context,isXML);if(set!=null){expr=expr.replace(Expr.match[type],"");break}}}}if(!set){set=context.getElementsByTagName("*")}return{set:set,expr:expr}};Sizzle.filter=function(expr,set,inplace,not){var old=expr,result=[],curLoop=set,match,anyFound,isXMLFilter=set&&set[0]&&isXML(set[0]);while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.match[type].exec(expr))!=null){var filter=Expr.filter[type],found,item;anyFound=false;if(curLoop===result){result=[]}if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);if(!match){anyFound=found=true}else{if(match===true){continue}}}if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);var pass=not^!!found;if(inplace&&found!=null){if(pass){anyFound=true}else{curLoop[i]=false}}else{if(pass){result.push(item);anyFound=true}}}}}if(found!==undefined){if(!inplace){curLoop=result}expr=expr.replace(Expr.match[type],"");if(!anyFound){return[]}break}}}if(expr===old){if(anyFound==null){throw"Syntax error, unrecognized expression: "+expr}else{break}}old=expr}return curLoop};var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href")}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!/\W/.test(part),isPartStrNotTag=isPartStr&&!isTag;if(isTag){part=part.toLowerCase()}for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part}}if(isPartStrNotTag){Sizzle.filter(part,checkSet,true)}},">":function(checkSet,part){var isPartStr=typeof part==="string";if(isPartStr&&!/\W/.test(part)){part=part.toLowerCase();for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){var parent=elem.parentNode;checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false}}}else{for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part}}if(isPartStr){Sizzle.filter(part,checkSet,true)}}},"":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML)},"~":function(checkSet,part,isXML){var doneName=done++,checkFn=dirCheck;if(typeof part==="string"&&!/\W/.test(part)){var nodeCheck=part=part.toLowerCase();checkFn=dirNodeCheck}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML)}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?[m]:[]}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i])}}return ret.length===0?null:ret}},TAG:function(match,context){return context.getElementsByTagName(match[1])}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(/\\/g,"")+" ";if(isXML){return match}for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem)}}else{if(inplace){curLoop[i]=false}}}}return false},ID:function(match){return match[1].replace(/\\/g,"")},TAG:function(match,curLoop){return match[1].toLowerCase()},CHILD:function(match){if(match[1]==="nth"){var test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);match[2]=(test[1]+(test[2]||1))-0;match[3]=test[3]-0}match[0]=done++;return match},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1].replace(/\\/g,"");if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name]}if(match[2]==="~="){match[4]=" "+match[4]+" "}return match},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop)}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);if(!inplace){result.push.apply(result,ret)}return false}}else{if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true}}return match},POS:function(match){match.unshift(true);return match}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden"},disabled:function(elem){return elem.disabled===true},checked:function(elem){return elem.checked===true},selected:function(elem){elem.parentNode.selectedIndex;return elem.selected===true},parent:function(elem){return !!elem.firstChild},empty:function(elem){return !elem.firstChild},has:function(elem,i,match){return !!Sizzle(match[3],elem).length},header:function(elem){return/h\d/i.test(elem.nodeName)},text:function(elem){return"text"===elem.type},radio:function(elem){return"radio"===elem.type},checkbox:function(elem){return"checkbox"===elem.type},file:function(elem){return"file"===elem.type},password:function(elem){return"password"===elem.type},submit:function(elem){return"submit"===elem.type},image:function(elem){return"image"===elem.type},reset:function(elem){return"reset"===elem.type},button:function(elem){return"button"===elem.type||elem.nodeName.toLowerCase()==="button"},input:function(elem){return/input|select|textarea|button/i.test(elem.nodeName)}},setFilters:{first:function(elem,i){return i===0},last:function(elem,i,match,array){return i===array.length-1},even:function(elem,i){return i%2===0},odd:function(elem,i){return i%2===1},lt:function(elem,i,match){return i<match[3]-0},gt:function(elem,i,match){return i>match[3]-0},nth:function(elem,i,match){return match[3]-0===i},eq:function(elem,i,match){return match[3]-0===i}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];if(filter){return filter(elem,i,match,array)}else{if(name==="contains"){return(elem.textContent||elem.innerText||getText([elem])||"").indexOf(match[3])>=0}else{if(name==="not"){var not=match[3];for(var i=0,l=not.length;i<l;i++){if(not[i]===elem){return false}}return true}else{throw"Syntax error, unrecognized expression: "+name}}}},CHILD:function(elem,match){var type=match[1],node=elem;switch(type){case"only":case"first":while((node=node.previousSibling)){if(node.nodeType===1){return false}}if(type==="first"){return true}node=elem;case"last":while((node=node.nextSibling)){if(node.nodeType===1){return false}}return true;case"nth":var first=match[2],last=match[3];if(first===1&&last===0){return true}var doneName=match[0],parent=elem.parentNode;if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count}}parent.sizcache=doneName}var diff=elem.nodeIndex-last;if(first===0){return diff===0}else{return(diff%first===0&&diff/first>=0)}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match},TAG:function(elem,match){return(match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match},CLASS:function(elem,match){return(" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];if(filter){return filter(elem,i,match,array)}}}};var origPOS=Expr.match.POS;for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+/(?![^\[]*\])(?![^\(]*\))/.source);Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source)}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);if(results){results.push.apply(results,array);return results}return array};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(e){makeArray=function(array,results){var ret=results||[];if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array)}else{if(typeof array.length==="number"){for(var i=0,l=array.length;i<l;i++){ret.push(array[i])}}else{for(var i=0;array[i];i++){ret.push(array[i])}}}return ret}}var sortOrder;if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b){hasDuplicate=true}return a.compareDocumentPosition?-1:1}var ret=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(ret===0){hasDuplicate=true}return ret}}else{if("sourceIndex" in document.documentElement){sortOrder=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b){hasDuplicate=true}return a.sourceIndex?-1:1}var ret=a.sourceIndex-b.sourceIndex;if(ret===0){hasDuplicate=true}return ret}}else{if(document.createRange){sortOrder=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b){hasDuplicate=true}return a.ownerDocument?-1:1}var aRange=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();aRange.setStart(a,0);aRange.setEnd(a,0);bRange.setStart(b,0);bRange.setEnd(b,0);var ret=aRange.compareBoundaryPoints(Range.START_TO_END,bRange);if(ret===0){hasDuplicate=true}return ret}}}}function getText(elems){var ret="",elem;for(var i=0;elems[i];i++){elem=elems[i];if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue}else{if(elem.nodeType!==8){ret+=getText(elem.childNodes)}}}return ret}(function(){var form=document.createElement("div"),id="script"+(new Date).getTime();form.innerHTML="<a name='"+id+"'/>";var root=document.documentElement;root.insertBefore(form,root.firstChild);if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[]}};Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return elem.nodeType===1&&node&&node.nodeValue===match}}root.removeChild(form);root=form=null})();(function(){var div=document.createElement("div");div.appendChild(document.createComment(""));if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);if(match[1]==="*"){var tmp=[];for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i])}}results=tmp}return results}}div.innerHTML="<a href='#'></a>";if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2)}}div=null})();if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return}Sizzle=function(query,context,extra,seed){context=context||document;if(!seed&&context.nodeType===9&&!isXML(context)){try{return makeArray(context.querySelectorAll(query),extra)}catch(e){}}return oldSizzle(query,context,extra,seed)};for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop]}div=null})()}(function(){var div=document.createElement("div");div.innerHTML="<div class='test e'></div><div class='test'></div>";if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return}div.lastChild.className="e";if(div.getElementsByClassName("e").length===1){return}Expr.order.splice(1,0,"CLASS");Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1])}};div=null})();function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break}if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;elem.sizset=i}if(elem.nodeName.toLowerCase()===cur){match=elem;break}elem=elem[dir]}checkSet[i]=match}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];if(elem){elem=elem[dir];var match=false;while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];break}if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;elem.sizset=i}if(typeof cur!=="string"){if(elem===cur){match=true;break}}else{if(Sizzle.filter(cur,[elem]).length>0){match=elem;break}}}elem=elem[dir]}checkSet[i]=match}}}var contains=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)};var isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false};var posProcess=function(selector,context){var tmpSet=[],later="",match,root=context.nodeType?[context]:context;while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];selector=selector.replace(Expr.match.PSEUDO,"")}selector=Expr.relative[selector]?selector+"*":selector;for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet)}return Sizzle.filter(later,tmpSet)};return Sizzle})();
/*
 * SWFObject v2.1 <http://code.google.com/p/swfobject/>
 * Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
 * This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 *
 * Modified for inclusion in Shadowbox.js
 */
S.flash=(function(){var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],objIdArr=[],listenersArr=[],script,timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7")}catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");playerVersion=[6,0,21];a.AllowScriptAccess="always"}catch(e){if(playerVersion[0]==6){fp6Crash=true}}if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX)}catch(e){}}}if(!fp6Crash&&a){try{d=a.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}}catch(e){}}}}var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=false,windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);
/*@cc_on
			ie = true;
			@if (@_win32)
				windows = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac}}();var onDomLoad=function(){if(!ua.w3cdom){return}addDomLoadEvent(main);if(ua.ie&&ua.win){try{doc.write("<script id=__ie_ondomload defer=true src=//:><\/script>");script=getElementById("__ie_ondomload");if(script){addListener(script,"onreadystatechange",checkReadyState)}}catch(e){}}if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions()}},10)}if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null)}addLoadEvent(callDomLoadFunctions)}();function checkReadyState(){if(script.readyState=="complete"){script.parentNode.removeChild(script);callDomLoadFunctions()}}function callDomLoadFunctions(){if(isDomLoaded){return}if(ua.ie&&ua.win){var s=createElement("span");try{var t=doc.getElementsByTagName("body")[0].appendChild(s);t.parentNode.removeChild(t)}catch(e){return}}isDomLoaded=true;if(timer){clearInterval(timer);timer=null}var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]()}}function addDomLoadEvent(fn){if(isDomLoaded){fn()}else{domLoadFnArr[domLoadFnArr.length]=fn}}function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false)}else{if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false)}else{if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn)}else{if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn()}}else{win.onload=fn}}}}}function main(){var rl=regObjArr.length;for(var i=0;i<rl;i++){var id=regObjArr[i].id;if(ua.pv[0]>0){var obj=getElementById(id);if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj)}setVisibility(id,true)}else{if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i])}else{displayAltContent(obj)}}}}else{setVisibility(id,true)}}}function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;if(a){var al=a.length;for(var i=0;i<al;i++){if(a[i].nodeName=="DATA"){e.setAttribute("src",a[i].nodeValue)}else{e.setAttribute(a[i].nodeName,a[i].nodeValue)}}}var c=nestedObj.childNodes;if(c){var cl=c.length;for(var j=0;j<cl;j++){if(c[j].nodeType==1&&c[j].nodeName=="PARAM"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"))}}}obj.parentNode.replaceChild(e,obj)}}function showExpressInstall(regObj){isExpressInstallActive=true;var obj=getElementById(regObj.id);if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);if(ac){storedAltContent=ac;storedAltContentId=regObj.altContentId}}else{storedAltContent=abstractAltContent(obj)}if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310"}if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137"}doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceId+="SWFObjectNew";newObj.setAttribute("id",replaceId);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";var fn=function(){obj.parentNode.removeChild(obj)};addListener(win,"onload",fn)}createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId)}}function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";var fn=function(){obj.parentNode.removeChild(obj)};addListener(win,"onload",fn)}else{obj.parentNode.replaceChild(abstractAltContent(obj),obj)}}function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML}else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true))}}}}}return ac}function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(el){if(typeof attObj.id==UNDEF){attObj.id=id}if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i]}else{if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"'}else{if(i.toLowerCase()!="classid"){att+=" "+i+'="'+attObj[i]+'"'}}}}}var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />'}}el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+">"+par+"</object>";objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id)}else{if(ua.webkit&&ua.webkit<312){var e=createElement("embed");e.setAttribute("type",FLASH_MIME_TYPE);for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k.toLowerCase()=="data"){e.setAttribute("src",attObj[k])}else{if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k])}else{if(k.toLowerCase()!="classid"){e.setAttribute(k,attObj[k])}}}}}for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l.toLowerCase()!="movie"){e.setAttribute(l,parObj[l])}}}el.parentNode.replaceChild(e,el);r=e}else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m])}else{if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m])}}}}for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n])}}el.parentNode.replaceChild(o,el);r=o}}}return r}function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p)}function removeSWF(id){var obj=getElementById(id);if(obj&&(obj.nodeName=="OBJECT"||obj.nodeName=="EMBED")){if(ua.ie&&ua.win){if(obj.readyState==4){removeObjectInIE(id)}else{win.attachEvent("onload",function(){removeObjectInIE(id)})}}else{obj.parentNode.removeChild(obj)}}}function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null}}obj.parentNode.removeChild(obj)}}function getElementById(id){var el=null;try{el=doc.getElementById(id)}catch(e){}return el}function createElement(el){return doc.createElement(el)}function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn]}function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false}function createCSS(sel,decl){if(ua.ie&&ua.mac){return}var h=doc.getElementsByTagName("head")[0],s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"))}h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl)}}}function setVisibility(id,isVisible){var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v}else{createCSS("#"+id,"visibility:"+v)}}function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars?encodeURIComponent(s):s}var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2])}var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j])}for(var k in ua){ua[k]=null}ua=null;for(var l in swfobject){swfobject[l]=null}swfobject=null})}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return}var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false)},getObjectById:function(objectIdStr){var r=null;if(ua.w3cdom){var o=getElementById(objectIdStr);if(o){var n=o.getElementsByTagName(OBJECT)[0];if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o}else{if(typeof n.SetVariable!=UNDEF){r=n}}}}return r},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return}widthStr+="";heightStr+="";if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){if(attObj[i]!=Object.prototype[i]){att[i]=attObj[i]}}}att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par[j]=parObj[j]}}}if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(flashvarsObj[k]!=Object.prototype[k]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k]}else{par.flashvars=k+"="+flashvarsObj[k]}}}}addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true)}})}else{if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){isExpressInstallActive=true;setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){var regObj={};regObj.id=regObj.altContentId=replaceElemIdStr;regObj.width=widthStr;regObj.height=heightStr;regObj.expressInstall=xiSwfUrlStr;showExpressInstall(regObj)})}}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]}},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom){return createSWF(attObj,parObj,replaceElemIdStr)}else{return undefined}},removeSWF:function(objElemIdStr){if(ua.w3cdom){removeSWF(objElemIdStr)}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl)}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(param==null){return urlEncodeIfNecessary(q)}if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block"}}storedAltContent=null;storedAltContentId=null;isExpressInstallActive=false}}}}}();return swfobject})();S.lang={code:"en",of:"of",loading:"loading",cancel:"Cancel",next:"Next",previous:"Previous",play:"Play",pause:"Pause",close:"Close",errors:{single:'You must install the <a href="{0}">{1}</a> browser plugin to view this content.',shared:'You must install both the <a href="{0}">{1}</a> and <a href="{2}">{3}</a> browser plugins to view this content.',either:'You must install either the <a href="{0}">{1}</a> or the <a href="{2}">{3}</a> browser plugin to view this content.'}};var pre,proxyId="sb-drag-proxy",dragData,dragProxy,dragTarget;function resetDrag(){dragData={x:0,y:0,startX:null,startY:null}}function updateProxy(){var dims=S.dimensions;apply(dragProxy.style,{height:dims.innerHeight+"px",width:dims.innerWidth+"px"})}function enableDrag(){resetDrag();var style=["position:absolute","cursor:"+(S.isGecko?"-moz-grab":"move"),"background-color:"+(S.isIE?"#fff;filter:alpha(opacity=0)":"transparent")].join(";");S.appendHTML(S.skin.body,'<div id="'+proxyId+'" style="'+style+'"></div>');dragProxy=get(proxyId);updateProxy();addEvent(dragProxy,"mousedown",startDrag)}function disableDrag(){if(dragProxy){removeEvent(dragProxy,"mousedown",startDrag);remove(dragProxy);dragProxy=null}dragTarget=null}function startDrag(e){preventDefault(e);var xy=getPageXY(e);dragData.startX=xy[0];dragData.startY=xy[1];dragTarget=get(S.player.id);addEvent(document,"mousemove",positionDrag);addEvent(document,"mouseup",endDrag);if(S.isGecko){dragProxy.style.cursor="-moz-grabbing"}}function positionDrag(e){var player=S.player,dims=S.dimensions,xy=getPageXY(e);var moveX=xy[0]-dragData.startX;dragData.startX+=moveX;dragData.x=Math.max(Math.min(0,dragData.x+moveX),dims.innerWidth-player.width);var moveY=xy[1]-dragData.startY;dragData.startY+=moveY;dragData.y=Math.max(Math.min(0,dragData.y+moveY),dims.innerHeight-player.height);apply(dragTarget.style,{left:dragData.x+"px",top:dragData.y+"px"})}function endDrag(){removeEvent(document,"mousemove",positionDrag);removeEvent(document,"mouseup",endDrag);if(S.isGecko){dragProxy.style.cursor="-moz-grab"}}S.img=function(obj,id){this.obj=obj;this.id=id;this.ready=false;var self=this;pre=new Image();pre.onload=function(){self.height=obj.height?parseInt(obj.height,10):pre.height;self.width=obj.width?parseInt(obj.width,10):pre.width;self.ready=true;pre.onload=null;pre=null};pre.src=obj.content};S.img.ext=["bmp","gif","jpg","jpeg","png"];S.img.prototype={append:function(body,dims){var img=document.createElement("img");img.id=this.id;img.src=this.obj.content;img.style.position="absolute";var height,width;if(dims.oversized&&S.options.handleOversize=="resize"){height=dims.innerHeight;width=dims.innerWidth}else{height=this.height;width=this.width}img.setAttribute("height",height);img.setAttribute("width",width);body.appendChild(img)},remove:function(){var el=get(this.id);if(el){remove(el)}disableDrag();if(pre){pre.onload=null;pre=null}},onLoad:function(){var dims=S.dimensions;if(dims.oversized&&S.options.handleOversize=="drag"){enableDrag()}},onWindowResize:function(){var dims=S.dimensions;switch(S.options.handleOversize){case"resize":var el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth;break;case"drag":if(dragTarget){var top=parseInt(S.getStyle(dragTarget,"top")),left=parseInt(S.getStyle(dragTarget,"left"));if(top+this.height<dims.innerHeight){dragTarget.style.top=dims.innerHeight-this.height+"px"}if(left+this.width<dims.innerWidth){dragTarget.style.left=dims.innerWidth-this.width+"px"}updateProxy()}break}}};S.iframe=function(obj,id){this.obj=obj;this.id=id;var overlay=get("sb-overlay");this.height=obj.height?parseInt(obj.height,10):overlay.offsetHeight;this.width=obj.width?parseInt(obj.width,10):overlay.offsetWidth};S.iframe.prototype={append:function(body,dims){var html='<iframe id="'+this.id+'" name="'+this.id+'" height="100%" width="100%" frameborder="0" marginwidth="0" marginheight="0" style="visibility:hidden" onload="this.style.visibility=\'visible\'" scrolling="auto"';if(S.isIE){html+=' allowtransparency="true"';if(S.isIE6){html+=" src=\"javascript:false;document.write('');\""}}html+="></iframe>";body.innerHTML=html},remove:function(){var el=get(this.id);if(el){remove(el);if(S.isGecko){delete window.frames[this.id]}}},onLoad:function(){var win=S.isIE?get(this.id).contentWindow:window.frames[this.id];win.location.href=this.obj.content}};S.html=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;this.width=obj.width?parseInt(obj.width,10):500};S.html.prototype={append:function(body,dims){var div=document.createElement("div");div.id=this.id;div.className="html";div.innerHTML=this.obj.content;body.appendChild(div)},remove:function(){var el=get(this.id);if(el){remove(el)}}};S.swf=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;this.width=obj.width?parseInt(obj.width,10):300};S.swf.ext=["swf"];S.swf.prototype={append:function(body,dims){var tmp=document.createElement("div");tmp.id=this.id;body.appendChild(tmp);var height=dims.innerHeight,width=dims.innerWidth,swf=this.obj.content,version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=S.options.flashVars,params=S.options.flashParams;S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)},remove:function(){S.flash.expressInstallCallback();S.flash.removeSWF(this.id)},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth}};var jwControllerHeight=20;S.flv=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;if(S.options.showMovieControls){this.height+=jwControllerHeight}this.width=obj.width?parseInt(obj.width,10):300};S.flv.ext=["flv","m4v"];S.flv.prototype={append:function(body,dims){var tmp=document.createElement("div");tmp.id=this.id;body.appendChild(tmp);var height=dims.innerHeight,width=dims.innerWidth,swf=S.path+"player.swf",version=S.options.flashVersion,express=S.path+"expressInstall.swf",flashvars=apply({file:this.obj.content,height:height,width:width,autostart:(S.options.autoplayMovies?"true":"false"),controlbar:(S.options.showMovieControls?"bottom":"none"),backcolor:"0x000000",frontcolor:"0xCCCCCC",lightcolor:"0x557722"},S.options.flashVars),params=S.options.flashParams;S.flash.embedSWF(swf,this.id,width,height,version,express,flashvars,params)},remove:function(){S.flash.expressInstallCallback();S.flash.removeSWF(this.id)},onWindowResize:function(){var dims=S.dimensions,el=get(this.id);el.height=dims.innerHeight;el.width=dims.innerWidth}};var qtControllerHeight=16;S.qt=function(obj,id){this.obj=obj;this.id=id;this.height=obj.height?parseInt(obj.height,10):300;if(S.options.showMovieControls){this.height+=qtControllerHeight}this.width=obj.width?parseInt(obj.width,10):300};S.qt.ext=["dv","mov","moov","movie","mp4","avi","mpg","mpeg"];S.qt.prototype={append:function(body,dims){var opt=S.options,autoplay=String(opt.autoplayMovies),controls=String(opt.showMovieControls);var html="<object",movie={id:this.id,name:this.id,height:this.height,width:this.width,kioskmode:"true"};if(S.isIE){movie.classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";movie.codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=6,0,2,0"}else{movie.type="video/quicktime";movie.data=this.obj.content}for(var m in movie){html+=" "+m+'="'+movie[m]+'"'}html+=">";var params={src:this.obj.content,scale:"aspect",controller:controls,autoplay:autoplay};for(var p in params){html+='<param name="'+p+'" value="'+params[p]+'">'}html+="</object>";body.innerHTML=html},remove:function(){try{document[this.id].Stop()}catch(e){}var el=get(this.id);if(el){remove(el)}}};var overlayOn=false,visibilityCache=[],pngIds=["sb-nav-close","sb-nav-next","sb-nav-play","sb-nav-pause","sb-nav-previous"],container,overlay,wrapper,doWindowResize=true;function animate(el,property,to,duration,callback){var isOpacity=(property=="opacity"),anim=isOpacity?S.setOpacity:function(el,value){el.style[property]=""+value+"px"};if(duration==0||(!isOpacity&&!S.options.animate)||(isOpacity&&!S.options.animateFade)){anim(el,to);if(callback){callback()}return}var from=parseFloat(S.getStyle(el,property))||0;var delta=to-from;if(delta==0){if(callback){callback()}return}duration*=1000;var begin=now(),ease=S.ease,end=begin+duration,time;var interval=setInterval(function(){time=now();if(time>=end){clearInterval(interval);interval=null;anim(el,to);if(callback){callback()}}else{anim(el,from+ease((time-begin)/duration)*delta)}},10)}function setSize(){container.style.height=S.getWindowSize("Height")+"px";container.style.width=S.getWindowSize("Width")+"px"}function setPosition(){container.style.top=document.documentElement.scrollTop+"px";container.style.left=document.documentElement.scrollLeft+"px"}function toggleTroubleElements(on){if(on){each(visibilityCache,function(i,el){el[0].style.visibility=el[1]||""})}else{visibilityCache=[];each(S.options.troubleElements,function(i,tag){each(document.getElementsByTagName(tag),function(j,el){visibilityCache.push([el,el.style.visibility]);el.style.visibility="hidden"})})}}function toggleNav(id,on){var el=get("sb-nav-"+id);if(el){el.style.display=on?"":"none"}}function toggleLoading(on,callback){var loading=get("sb-loading"),playerName=S.getCurrent().player,anim=(playerName=="img"||playerName=="html");if(on){S.setOpacity(loading,0);loading.style.display="block";var wrapped=function(){S.clearOpacity(loading);if(callback){callback()}};if(anim){animate(loading,"opacity",1,S.options.fadeDuration,wrapped)}else{wrapped()}}else{var wrapped=function(){loading.style.display="none";S.clearOpacity(loading);if(callback){callback()}};if(anim){animate(loading,"opacity",0,S.options.fadeDuration,wrapped)}else{wrapped()}}}function buildBars(callback){var obj=S.getCurrent();get("sb-title-inner").innerHTML=obj.title||"";var close,next,play,pause,previous;if(S.options.displayNav){close=true;var len=S.gallery.length;if(len>1){if(S.options.continuous){next=previous=true}else{next=(len-1)>S.current;previous=S.current>0}}if(S.options.slideshowDelay>0&&S.hasNext()){pause=!S.isPaused();play=!pause}}else{close=next=play=pause=previous=false}toggleNav("close",close);toggleNav("next",next);toggleNav("play",play);toggleNav("pause",pause);toggleNav("previous",previous);var counter="";if(S.options.displayCounter&&S.gallery.length>1){var len=S.gallery.length;if(S.options.counterType=="skip"){var i=0,end=len,limit=parseInt(S.options.counterLimit)||0;if(limit<len&&limit>2){var h=Math.floor(limit/2);i=S.current-h;if(i<0){i+=len}end=S.current+(limit-h);if(end>len){end-=len}}while(i!=end){if(i==len){i=0}counter+='<a onclick="Shadowbox.change('+i+');"';if(i==S.current){counter+=' class="sb-counter-current"'}counter+=">"+(++i)+"</a>"}}else{counter=[S.current+1,S.lang.of,len].join(" ")}}get("sb-counter").innerHTML=counter;callback()}function showBars(callback){var titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=0.35;titleInner.style.visibility=infoInner.style.visibility="";if(titleInner.innerHTML!=""){animate(titleInner,"marginTop",0,duration)}animate(infoInner,"marginTop",0,duration,callback)}function hideBars(anim,callback){var title=get("sb-title"),info=get("sb-info"),titleHeight=title.offsetHeight,infoHeight=info.offsetHeight,titleInner=get("sb-title-inner"),infoInner=get("sb-info-inner"),duration=(anim?0.35:0);animate(titleInner,"marginTop",titleHeight,duration);animate(infoInner,"marginTop",infoHeight*-1,duration,function(){titleInner.style.visibility=infoInner.style.visibility="hidden";callback()})}function adjustHeight(height,top,anim,callback){var wrapperInner=get("sb-wrapper-inner"),duration=(anim?S.options.resizeDuration:0);animate(wrapper,"top",top,duration);animate(wrapperInner,"height",height,duration,callback)}function adjustWidth(width,left,anim,callback){var duration=(anim?S.options.resizeDuration:0);animate(wrapper,"left",left,duration);animate(wrapper,"width",width,duration,callback)}function setDimensions(height,width){var bodyInner=get("sb-body-inner"),height=parseInt(height),width=parseInt(width),topBottom=wrapper.offsetHeight-bodyInner.offsetHeight,leftRight=wrapper.offsetWidth-bodyInner.offsetWidth,maxHeight=overlay.offsetHeight,maxWidth=overlay.offsetWidth,padding=parseInt(S.options.viewportPadding)||20,preserveAspect=(S.player&&S.options.handleOversize!="drag");return S.setDimensions(height,width,maxHeight,maxWidth,topBottom,leftRight,padding,preserveAspect)}var K={};K.markup='<div id="sb-container"><div id="sb-overlay"></div><div id="sb-wrapper"><div id="sb-title"><div id="sb-title-inner"></div></div><div id="sb-wrapper-inner"><div id="sb-body"><div id="sb-body-inner"></div><div id="sb-loading"><div id="sb-loading-inner"><span>{loading}</span></div></div></div></div><div id="sb-info"><div id="sb-info-inner"><div id="sb-counter"></div><div id="sb-nav"><a id="sb-nav-close" title="{close}" onclick="Shadowbox.close()"></a><a id="sb-nav-next" title="{next}" onclick="Shadowbox.next()"></a><a id="sb-nav-play" title="{play}" onclick="Shadowbox.play()"></a><a id="sb-nav-pause" title="{pause}" onclick="Shadowbox.pause()"></a><a id="sb-nav-previous" title="{previous}" onclick="Shadowbox.previous()"></a></div></div></div></div></div>';K.options={animSequence:"sync",counterLimit:10,counterType:"default",displayCounter:true,displayNav:true,fadeDuration:0.35,initialHeight:160,initialWidth:320,modal:false,overlayColor:"#000",overlayOpacity:0.5,resizeDuration:0.35,showOverlay:true,troubleElements:["select","object","embed","canvas"]};K.init=function(){S.appendHTML(document.body,sprintf(K.markup,S.lang));K.body=get("sb-body-inner");container=get("sb-container");overlay=get("sb-overlay");wrapper=get("sb-wrapper");if(!supportsFixed){container.style.position="absolute"}if(!supportsOpacity){var el,m,re=/url\("(.*\.png)"\)/;each(pngIds,function(i,id){el=get(id);if(el){m=S.getStyle(el,"backgroundImage").match(re);if(m){el.style.backgroundImage="none";el.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,src="+m[1]+",sizingMethod=scale);"}}})}var timer;addEvent(window,"resize",function(){if(timer){clearTimeout(timer);timer=null}if(open){timer=setTimeout(K.onWindowResize,10)}})};K.onOpen=function(obj,callback){doWindowResize=false;container.style.display="block";setSize();var dims=setDimensions(S.options.initialHeight,S.options.initialWidth);adjustHeight(dims.innerHeight,dims.top);adjustWidth(dims.width,dims.left);if(S.options.showOverlay){overlay.style.backgroundColor=S.options.overlayColor;S.setOpacity(overlay,0);if(!S.options.modal){addEvent(overlay,"click",S.close)}overlayOn=true}if(!supportsFixed){setPosition();addEvent(window,"scroll",setPosition)}toggleTroubleElements();container.style.visibility="visible";if(overlayOn){animate(overlay,"opacity",S.options.overlayOpacity,S.options.fadeDuration,callback)}else{callback()}};K.onLoad=function(changing,callback){toggleLoading(true);while(K.body.firstChild){remove(K.body.firstChild)}hideBars(changing,function(){if(!open){return}if(!changing){wrapper.style.visibility="visible"}buildBars(callback)})};K.onReady=function(callback){if(!open){return}var player=S.player,dims=setDimensions(player.height,player.width);var wrapped=function(){showBars(callback)};switch(S.options.animSequence){case"hw":adjustHeight(dims.innerHeight,dims.top,true,function(){adjustWidth(dims.width,dims.left,true,wrapped)});break;case"wh":adjustWidth(dims.width,dims.left,true,function(){adjustHeight(dims.innerHeight,dims.top,true,wrapped)});break;default:adjustWidth(dims.width,dims.left,true);adjustHeight(dims.innerHeight,dims.top,true,wrapped)}};K.onShow=function(callback){toggleLoading(false,callback);doWindowResize=true};K.onClose=function(){if(!supportsFixed){removeEvent(window,"scroll",setPosition)}removeEvent(overlay,"click",S.close);wrapper.style.visibility="hidden";var callback=function(){container.style.visibility="hidden";container.style.display="none";toggleTroubleElements(true)};if(overlayOn){animate(overlay,"opacity",0,S.options.fadeDuration,callback)}else{callback()}};K.onPlay=function(){toggleNav("play",false);toggleNav("pause",true)};K.onPause=function(){toggleNav("pause",false);toggleNav("play",true)};K.onWindowResize=function(){if(!doWindowResize){return}setSize();var player=S.player,dims=setDimensions(player.height,player.width);adjustWidth(dims.width,dims.left);adjustHeight(dims.innerHeight,dims.top);if(player.onWindowResize){player.onWindowResize()}};S.skin=K;window.Shadowbox=S})(window);;
Tesla = window.Tesla || {};
try {
    console.log('');
} catch (e) {
    window.console = {};
    var names = [ 'log', 'debug', 'info', 'warn', 'error', 'assert', 'clear', 'dir', 'dirxml', 'trace', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'timeStamp', 'profile', 'profileEnd', 'count', 'exception', 'table' ];
    for (var i = 0; i < names.length; ++i) {
        window.console[names[i]] = function() {};
    }
}

function log( str ) {
    console.log( str );
}

var urlParams = {};

var webFormModal = null;

(function () {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
})();

/* Touchscreen modifications */
(function () {

    var isVehicleBrowser = (navigator.userAgent.toLowerCase().indexOf('qtcarbrowser') !== -1);

    if (isVehicleBrowser) {
        document.write("<link rel=\"stylesheet\" href=\"\/sites\/all\/themes\/tesla\/styles\/touchscreen.css?20140414\" \/>");
    }

}());

/*
 *  Checks to see if it's a Smartling country. If so, Smartling takes care
 *  of the translation.
 */
Tesla.Smartling = Tesla.Smartling || {};
Tesla.Smartling.Countries = [ "da_DK", "fr_BE", "nl_BE", "sv_SE", "zh_CN", "cn" ];

Tesla.Smartling.getVariable = ( function( smartling, other ) {
    return ( ( Tesla.Smartling.Countries.indexOf( Drupal.settings.tesla.locale ) != -1 ) ? smartling : other );
} );

function include(filename) {
    var head = document.getElementsByTagName('head')[0];
    script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    head.appendChild(script);
}


// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tp:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}


/*
 * Cookie functions
 */
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


/*
 * Generic window opening function
 */
function openWin(url, name, opts) {
    document.domain = 'teslamotors.com';
    if (!opts) {
        opts = "";
    }
    return window.open(url, name, opts);
}


    /* Featured owner photostrip hovers */
    if ($('div.view-featured-owners-nq').length) {
        $('div.view-featured-owners-nq div.views-field-field-photo-fid img').mouseenter(
            function() {
                $('#clone', $(this).parents()).remove(); //gc
                var owner = $(this).parents('div.views-row');
                var pos = getOrdinalPosition(owner);
                var x_offset = pos * 75;
                // clone the div as a popup
                var clone = owner.clone();
                clone.addClass('hovered');
                clone.attr('id','clone');
                clone.css('left', x_offset);
                clone.mouseout(function() {
                    $(this).remove();
                });
                clone.appendTo('#featured-owners .view-content');
            });
    }




/*
 * Initialize store page photo galleries
 */
function initGalleries() {
    if (window.Galleria && Drupal.settings.tesla.flickr_api_key) {
        Galleria.loadTheme('/sites/all/themes/tesla/js/galleria/src/themes/classic/galleria.classic.js');
        var flickr = new Galleria.Flickr(Drupal.settings.tesla.flickr_api_key); // initialize the plugin

        $('#gallery-index li a').click(function() {
            $('#gallery-index li').removeClass('selected');
            $(this).parent().addClass('selected');
            var href = $(this).attr('href').split('=');
            var set_id = href[1];
            flickr.getSet(set_id, {size:'medium'}, function(data) {
                $('#galleria').galleria({
                    data_source: data
                });
            });
            return false;
        });

        // trigger click on first gallery item
        $('#gallery-index li.first a').trigger('click');
    }
}

// delay-remove fade status messages (from e.g. region picker)
function fadeAlerts () {
    $('.messages.fade').fadeOut(400);

}

// given an element, figure out which oridinal position it has
// among its siblings
function getOrdinalPosition(el) {
    var position = -1;
    // we have to do this because el.siblings() does not return the element itself
    var siblings = el.parent().children();
    $.each(siblings, function(key, value) {
    if (value == el[0]) {
        position = key;
        return false;
    }
    });
    return position;
}




/*
 * Initialize analytics custom events
 */
function initAnalyticsEvents() {
    // Event tracking for the Home page and Model S
    // Order, Test Drive, and Call Me buttons
    if ($('#page-homepage').length) {
        $('#page-homepage #models-landing-buttons a.red').click(function(){
            debug.log('Track Event for Homepage order button');
            _gaq.push(['_trackEvent', 'OrderButton', 'Click - Home Page']);
        });
        $('#page-homepage #models-landing-buttons a.grey:first').click(function(){
            debug.log('Track Event for Homepage test drive button');
            _gaq.push(['_trackEvent', 'TestDriveButton', 'Click - Home Page']);
        });
        $('#page-homepage #models-landing-buttons a.grey.models-requestcallback-button').click(function(){
            debug.log('Track Event for Homepage Call Me button');
            _gaq.push(['_trackEvent', 'CallMeButton', 'Click - Home Page']);
        });
    }

    if ($('#page-models').length) {
        $('#page-models #models-landing-buttons a.red').click(function(){
            debug.log('Track Event for Model S Page order button');
            _gaq.push(['_trackEvent', 'OrderButton', 'Click - Model S Page']);
        });
        $('#page-models #models-landing-buttons a.grey:first').click(function(){
            debug.log('Track Event for Model S Page test drive button');
            _gaq.push(['_trackEvent', 'TestDriveButton', 'Click - Model S Page']);
        });
        $('#page-models #models-landing-buttons a.grey.models-requestcallback-button').click(function(){
            debug.log('Track Event for Model S Page Call Me button');
            _gaq.push(['_trackEvent', 'CallMeButton', 'Click - Model S Page']);
        });
    }
    // End event tracking for the Home page and Model S


    $('.page-own a#request-callback').click(function() {
        debug.log("Track pageview for /own/callback_form");
       _gaq.push(['_trackPageview', '/own/callback_form']);
    });

    $('body#page-goelectric-incentives a#request-callback').click(function() {
        debug.log("Track pageview for /incentives/callback_form");
       _gaq.push(['_trackPageview', '/incentives/callback_form']);
    });

    $('#store-body a.schedule-button').click(function() {
        debug.log("Track pageview for /store/appointment_form");
       _gaq.push(['_trackPageview', '/store/appointment_form']);
    });

    $('#store-body a.callback-button').click(function() {
        debug.log("Track pageview for /store/callback_form");
       _gaq.push(['_trackPageview', '/store/callback_form']);
    });

    $('body#page-goelectric #hero-action .replace-text').click(function() {
        debug.log("Track pageview for /video/goelectric_v1");
       _gaq.push(['_trackPageview', '/video/goelectric_v1']);
    });

    if ($('body#page-roadster').length) {
        // Buy button in Roadster page slider
        $('#page-roadster #buy .button a').click(function() {
            debug.log("Track pageview for /roadster/buy_click");
           _gaq.push(['_trackPageview', '/roadster/buy_click']);
        });

        // Appt button in Roadster page slider
        $('#page-roadster #drive .button a').click(function() {
            debug.log("Track pageview for /roadster/appt_click");
           _gaq.push(['_trackPageview', '/roadster/appt_click']);
        });

        // Roadster experience video
        $('#page-roadster #experience .overlay a').click(function() {
            debug.log("Track pageview for /video/roadster/experience_v1");
           _gaq.push(['_trackPageview', '/video/roadster/experience_v1']);
        });

        // Roadster interior video
        $('#page-roadster #vision .overlay a').click(function() {
            debug.log("Track pageview for /video/roadster/interior_v1");
           _gaq.push(['_trackPageview', '/video/roadster/interior_v1']);
        });

    }

    if ($('body#page-models').length) {
        // Reserve button in Model S page slider
        $('#page-models #reserve .button a').click(function() {
            debug.log("Track pageview for /models/reserve_click");
           _gaq.push(['_trackPageview', '/models/reserve_click']);
        });

        // Discuss button in Model S page slider
        $('#page-models #discuss .button a').click(function() {
            debug.log("Track pageview for /models/discuss_click");
           _gaq.push(['_trackPageview', '/models/discuss_click']);
        });

        // Model S video
        $('#page-models #experience .overlay a').click(function() {
            debug.log("Track pageview for /video/models/thefuture_v1");
           _gaq.push(['_trackPageview', '/video/models/thefuture_v1']);
        });
    }

    // Buy Flow
    // Report model code
    if ($('body#page-own').length && !$('body').hasClass('i18n-zh_CN')) {
        var modelcode = $('input:radio[name=modelcode]:checked').val();
        debug.log("Track pageview for /own/" + modelcode);
        _gaq.push(['_trackPageview', '/own/' + modelcode]);
    }

    // Mytesla Profile page
    if ($('body#page-mytesla-profile').length && !$('body').hasClass('i18n-zh_CN')) {
        $('#accept_delivery').find(".confirm-button").on("click", function() {
            debug.log('Track Event for Accept Delivery Button');
            _gaq.push(['_trackEvent', 'AcceptDeliveryButton', 'Click - Mytesla Profile Page']);
        });

        $('.accept-terms', '#hero').find(".modal-confirm").on("click", function() {
            debug.log('Track Event for Accept Terms Button');
            _gaq.push(['_trackEvent', 'AcceptTermsButton', 'Click - Mytesla Profile Page']);
        });
    }

}

/*
 * attach analytics events for webform submits
 */
function attachWebformAnalytics(form_id) {
    var _region = Drupal.settings.tesla.locale;

    switch (form_id) {
        case 'webform-client-form-119':
            // own/store/incentives call me back
            // Same form id is used on both store, own and incentives callback forms
            // need to figure out which one it is
            if ($('body').hasClass('node-type-teslastore')) {
                debug.log('Track pageview for store/callback_submit');
                _gaq.push(['_trackPageview', '/store/callback_submit']);
            } else if ($('body').attr('id')=='page-goelectric-incentives') {
                debug.log('Track pageview for incentives/callback_submit');
                _gaq.push(['_trackPageview', '/incentives/callback_submit']);
            } else {
                debug.log('Track pageview for own/callback_submit');
                _gaq.push(['_trackPageview', '/own/callback_submit']);
            }
            break;
        case 'webform-client-form-3836':
            // test drive
            debug.log('Track pageview for testdrive_submit');
            _gaq.push(['_trackPageview', 'testdrive_submit']);
            break;
        case 'webform-client-form-120':
            // store appt form
            debug.log('Track pageview for /store/appointment_submit');
            _gaq.push(['_trackPageview', '/store/appointment_submit']);
            break;
        case 'webform-client-form-121':
            // store appt form
            debug.log('Track pageview for /event_submit');
            _gaq.push(['_trackPageview', '/event_submit']);
            break;
        case 'webform-client-form-3974':
            // Newsletter signup
            debug.log('Track pageview for /newsletter_submit');
            _gaq.push(['_trackPageview', '/newsletter_submit']);
            break;
        case 'webform-client-form-122':
            // Newsletter signup (US)
            debug.log('Track pageview for /newsletter_us_submit');
            _gaq.push(['_trackPageview', '/newsletter_us_submit']);
            break;
        case 'webform-client-form-19198':
            // test drive fr_FR
            if (_region == 'fr_FR') {
                debug.log('Track pageview for /fr_FR/models/drive/thank-you');
                _gaq.push(['_trackPageview', '/fr_FR/models/drive/thank-you']);
            }
            break;
        case 'webform-client-form-60471':
            if ($('#' + form_id).attr('action').indexOf('features') !== -1) {
                debug.log('Track RequestTestDriveButton event "Submit - Model S Features Page" action');
                _gaq.push(['_trackEvent', 'RequestTestDriveButton', 'Submit - Model S Features Page']);
            } else {
                debug.log('Track RequestTestDriveButton event "Submit - Model S Landing Page" action');
                _gaq.push(['_trackEvent', 'RequestTestDriveButton', 'Submit - Model S Landing Page']);
            }
            break;
    }
}

/*
 * Make an anchor open in a new window
 */
function openLinkNewWindow(link) {
    if (link.length) {
        link.click(function() {
            openWin(link.attr('href'));
            return false;
        });
    }
}

/*
 * Perform any locale-specific tasks
 */
function attachLocaleHandlers() {
    // look for country/language code in body class. It will look something like 'i18n-ja_JP'
    var body_classes = $('body').attr('class').split(' ');
    var code = '';
    for (var i=0, l=body_classes.length; i<l; i++) {
        if (body_classes[i].indexOf('i18n') > -1) {
            code = body_classes[i].substr(5);
        }
    }
    switch(code) {
        case 'ja_JP':
            // for Japan, open IR and careers links in a new window
        openLinkNewWindow($('.menu-17808 a'));
        openLinkNewWindow($('.menu-17807 a'));
        openLinkNewWindow($('ul.quicklinks li:first-child a'));
        // Change labels of form fields on own page to EN
            // if ($('#tesla-buy-basic-form').length) {
            // $('#edit-Email-wrapper label').html('EMAIL:');
            // $('#edit-Country-wrapper label').html('COUNTRY:')
        // }
            break;
    }

    localize_events_rsvp();
}

/*
 * Localize "Join our email newsletter list".
 */
function localize_events_rsvp() {

  // Get localized label contents and strip colons.
  var LocalLabel = $('form#webform-client-form-121 #webform-component-subscriptions__c label:first').html();
  if (LocalLabel != null) {
      LocalLabelNoColon = LocalLabel.replace(":", "");

      // Get non-localized label contents and insert localized text.
      var NonLocalLabel = $('form#webform-client-form-121 #edit-submitted-subscriptions--c-Tesla-Newsletter-wrapper label').html();
      NewLocalLabel = NonLocalLabel.replace("Join our email newsletter list", LocalLabelNoColon);
      $('form#webform-client-form-121 #edit-submitted-subscriptions--c-Tesla-Newsletter-wrapper label').html(NewLocalLabel);
  }
}

/*
 * Initialize home page heros and newsletter signup
 */
function initHome() {
    if ($('body').attr('id') == 'page-homepage') {
        // hero centered, absolutely
        //reposHero();
        //var resizeTimer = null;
        //$(window).resize(function() {
        //    reposHero();
        //});

        var homepageSlideshowOptions = {
            timeout: 6500,
            fx: "fade",
            speed: 700,
            delay: 7000,
            vss_id: "homepage_slideshow-default",
            sort: 1,
            start_paused: 0,
            sync: 1,
            random: 0,
            pause: 0,
            nowrap: 0,
            cleartype: true,
            cleartypenobg: false,
            pager: "#hero-thumbs",
            activePagerClass: "activeSlide",
            pagerAnchorBuilder: function(idx, slide) {
                var thumb = $('.slideshow-controls > li').eq(idx);
                $(thumb).filter('li').addClass('pager-item');
                $(thumb).children('img').wrap('<a href="#" />');
                return thumb;
            }
        };
        $('#hero-image').cycle(homepageSlideshowOptions);

        /* -- Newsletter Form -- */
        var $signupForm = $("#newsletter-signup form");

        //static HP workaround because the form has already been submitted
        $signupForm.ajaxError(function(e, xhr) {
            // This text *must* match the confirmation msg in Quick Signup webform
            // in order to be translated.
            $('.submit-progress', "#newsletter-signup").hide();
            $(this).replaceWith('<p>' +
                Drupal.t('Thanks! Keep an eye out for the next edition of the Tesla Newsletter.') +
                    '</p>');
        });

        // fancy label
        var signupLabel = $('#edit-submitted-email-wrapper label').hide().text();
        var parts = signupLabel.split(':');
        if (signupLabel !== '') {
            $('#edit-submitted-email').val(parts[0]).click(function() {
                this.value='';
                $(this).unbind('click');
            });
        }
            // progress bar
            //$signupForm.submit(function() {
            //        $(this).find('input[type=submit]').hide()
            //        .after('<img class="ajax-loader" src="/sites/all/themes/tesla/images/ajax-loader-bar.gif" alt="Loading, please wait" />');
            //});

        // ensure form uniqueness
        //var sF_nid = 3974;
        //$.get('webform/'+ sF_nid, function(data) {
        //  $signupForm.find('input[name=form_build_id]')
        //      .replaceWith($(data).find('input[name=form_build_id]'));

        //  $signupForm.find('input[name=form_token]')
        //      .replaceWith($(data).find('input[name=form_token]'));
        //});

    } else if ( $('body').attr('id') == 'page-modelx' ) {

         /* -- Newsletter Form -- */
        var $signupForm = $("#newsletter-signup form");

        $('.pane-title').hide().text();
        $('#webform-client-form-16704 label').css('display', 'block');
        $('.links.inline').hide();

        //static HP workaround because the form has already been submitted
        $signupForm.ajaxError(function(e, xhr) {
            // This text *must* match the confirmation msg in Quick Signup webform
            // in order to be translated.
            $("#newsletter-signup").hide();
            $(this).replaceWith('<p>' +
                Drupal.t('Thanks! Keep an eye out for the next edition of the Tesla Newsletter.') +
                    '</p>');
        });

    }

    else if ($('body').attr('id') === "page-models-drive") {
        function invalidateForm(){
            $( "#webform-client-form-19198 > div" )
                    .addClass( "errors" )
                    .find( "#edit-submit" ).attr( "disabled", "disabled" );
        }
        function validForm(){
            $( "#webform-client-form-19198 > div" )
                    .removeClass( "errors" )
                    .find( "#edit-submit" ).removeAttr( "disabled", "disabled" );
        }

        function checkValidProvince(index){
            if(index == 0 ){
               invalidateForm();
            }else{
                validForm();
            }
        }
        /* Adding fancy dropdown for china*/
       var _region = Drupal.settings.tesla.locale, val = $( "#edit-submitted-countries" ).val();

       if(_region == "zh_CN"){
           var $provincesSelect = $("#edit-submitted-province")
            .change(function(e){
              var selectedProvince = $provincesSelect.children(':selected').text();
              $("#select-province-overlay").text(selectedProvince);
              checkValidProvince($(this).val());
              $("#edit-submitted-province-text").val(selectedProvince);
            });

        //get the translated value from the select to display in fancy select
        var cnSelectProvince = $provincesSelect.children(':selected').text();
        $provincesSelect.after("<span id='select-province-overlay' class='select-country'>"+ cnSelectProvince + "</span>");
        checkValidProvince ($provincesSelect.val());
       }
       //build the country select for eu countries
       else if ( _region != "en_HK" && _region != "ja_JP" && _region != "en_US" && _region != "en_CA" && _region != "fr_CA" && _region != "en_AU"){
            var country_name = $( "#edit-submitted-countries option:selected").text();
            var $countryField, title, val, _options = "", i, _locale;
           
            // $("#edit-submitted-countries").after("<span id='select-country-overlay' class='select-country'><img src='/tesla_theme/images/icn_" + val + "_flag_no_shadow.png' width='16' height='11' class='basic-flag' />&nbsp;&nbsp;" + country_name + "</span>");
            $("#edit-submitted-countries").after("<span id='select-country-overlay' class='select-country'>" + country_name + "</span>");

            $countryField = $('#webform-component-country');

            function checkValidCountry( selectedIndex ){
                    if ( selectedIndex == 0 ){
                        invalidateForm();
                    }
                    else{
                        validForm();
                    }
            }


            function updateFlag(){
                var ctry_code = $(this).val();
                var ctry_index = $(this).prop("selectedIndex");
                title = $(this).children(":selected").text();
                // if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'se' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'uk' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'no' ) {
                //   title = '<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;&nbsp;' + title;
                // }

                $('#select-country-overlay').html(title);

                checkValidCountry( ctry_index );
            }

            $( "#edit-actions #edit-submit" ).attr( "value", Drupal.t( "Submit" ) );

            checkValidCountry( val );

            $("#edit-submitted-countries").change( updateFlag );

            $('#webform-component-country')
                .find( "#edit-submitted-country option[value=" + val + "]" )
                .attr( "selected", "selected" );

        }

    }

    else if ($("body").attr("id") === "page-models-drive") {
    }

    else if ($('body').attr('id') == 'page-financing') {

        // fancy label for first name
        var firstnameLabel = $('#edit-submitted-firstname-wrapper label').hide().text();
        var partsfirstnameLabel = firstnameLabel.split(':');
        if (firstnameLabel !== '') {
            $('#edit-submitted-firstname').val(partsfirstnameLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });
            $('#edit-submitted-firstname').focus(function() {
                if(this.value == partsfirstnameLabel[0]){
                    this.value='';
                }
                this.style.color = '#000000';
            });
            $('#edit-submitted-firstname').blur(function() {
                if(this.value == ''){
                    this.value=partsfirstnameLabel[0];
                    this.style.color = '#cccccc';
                }
            });
        }
     // fancy label for last name
        var lastnameLabel = $('#edit-submitted-lastname-wrapper label').hide().text();
        var partslastnameLabel = lastnameLabel.split(':');
        if (lastnameLabel !== '') {
            $('#edit-submitted-lastname').val(partslastnameLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });
            $('#edit-submitted-lastname').focus(function() {
                if(this.value == partslastnameLabel[0]){
                    this.value='';
                }
                this.style.color = '#000000';
            });
            $('#edit-submitted-lastname').blur(function() {
                if(this.value == ''){
                    this.value=partslastnameLabel[0];
                    this.style.color = '#cccccc';
                }
            });
        }
        //alert(parts[0]);
        if(partslastnameLabel[0]!=''){
     // fancy label for email
        var defaultEmail = $('#edit-submitted-email').val();
        var emailLabel = $('#edit-submitted-email-wrapper label').hide().text();
        var partsemailLabel = emailLabel.split(':');
        if (emailLabel !== '' && $('#edit-submitted-email').val()=='' ) {
            $('#edit-submitted-email').val(partsemailLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });

        }
        $('#edit-submitted-email').focus(function() {
            this.style.color = '#000000';
            if(this.value == partsemailLabel[0]){
                this.value='';
            }

            if(defaultEmail!=''){
                this.value=defaultEmail;
            }
            //alert(this.value);



        });
        $('#edit-submitted-email').blur(function() {
            if(this.value == ''){
                this.value=partsemailLabel[0];
                this.style.color = '#cccccc';
            }
            defaultEmail = this.value;
        });
     // fancy label for postal code number
        var postalcodeLabel = $('#edit-submitted-postalcode-wrapper label').hide().text();
        var partspostalcodeLabel = postalcodeLabel.split(':');
        if (postalcodeLabel !== '') {
            $('#edit-submitted-postalcode').val(partspostalcodeLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });
            $('#edit-submitted-postalcode').focus(function() {
                if(this.value == partspostalcodeLabel[0]){
                    this.value='';
                }
                this.style.color = '#000000';
            });
            $('#edit-submitted-postalcode').blur(function() {
                if(this.value == ''){
                    this.value=partspostalcodeLabel[0];
                    this.style.color = '#cccccc';
                }
            });

        }
    // fancy label for phone number
        var phoneLabel = $('#edit-submitted-phone-wrapper label').hide().text();
        var partsphoneLabel = phoneLabel.split(':');
        if (phoneLabel !== '') {
            $('#edit-submitted-phone').val(partsphoneLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });
            $('#edit-submitted-phone').focus(function() {
                if(this.value == partsphoneLabel[0]){
                    this.value='';
                }
                this.style.color = '#000000';
            });
            $('#edit-submitted-phone').blur(function() {
                if(this.value == ''){
                    this.value=partsphoneLabel[0];
                    this.style.color = '#cccccc';
                }
            });

        }

    // fancy label for description
        var descriptionLabel = $('#edit-submitted-description-wrapper label').hide().text();
        var partsdescriptionLabel = descriptionLabel.split(':');
        if (descriptionLabel !== '') {
            $('#edit-submitted-description').val(partsdescriptionLabel[0]).click(function() {
                this.value='';
                this.style.color = '#000000';
                $(this).unbind('click');
            });
            $('#edit-submitted-description').focus(function() {
                if(this.value == partsdescriptionLabel[0]){
                    this.value='';
                }
                this.style.color = '#000000';
            });
            $('#edit-submitted-description').blur(function() {
                if(this.value == ''){
                    this.value=partsdescriptionLabel[0];
                    this.style.color = '#cccccc';
                }
            });

        }

        }
    }

    else if ($('body').attr('id') == 'page-findus') {
        if (Drupal.settings.tesla.locale == "en_CA") {
            $("#map-location-input").attr("placeholder", "Postal Code or City, Province");
        }
    }
}


/*
 * Pass in an array of image urls to pre-load
 */
Drupal.settings.imagecache = [];
function preLoadImages() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      Drupal.settings.imagecache.push(cacheImage);
    }
}

/*
 * Live Update elements to reflect a user's logged-in state
 */
Tesla.updateLoggedInState = function() {
    $.ajax({
        url:window.location.pathname,
        cache:false,
        success:function(page) {
            $("#utils-menu").html($(page).find("#utils-menu").children());
        }
    });
}

/*
 * Logic for checking and working with the desired-locale cookie
 */
function checkCookie(){
        var cookie_locale = readCookie('desired-locale');
        var show_blip_count = readCookie('show_blip_count');
        var tesla_locale = 'en_US'; //default to US
        var path = window.location.pathname;
        // debug.log("path = " + path);
        var parsed_url = parseURL(window.location.href);
        var path_array = parsed_url.segments;
        var path_length = path_array.length;
        var locale_path_index = -1;
        var locale_in_path = false;
        var locales = ['cn',
                       'da_DK', 'de_AT', 'de_CH', 'de_DE',
                       'en_AU', 'en_CA', 'en_EU', 'en_GB', 'en_HK', 'en_US',
                       'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR',
                       'it_CH', 'it_IT',
                       'nl_BE', 'nl_NL', 'no_NO',
                       'sv_SE',
                       'jp'];
        // see if we are on a locale path
        $.each(locales, function(index, value){
            locale_path_index = $.inArray(value, path_array);
            if (locale_path_index != -1) {
                if (value == 'jp'){
                    value = 'ja_JP';
                }
                else if (value == 'cn'){
                    value = 'zh_CN';
                }
                tesla_locale = value;
                locale_in_path = true;
            }
        });
        // debug.log('tesla_locale = ' + tesla_locale);
        cookie_locale = (cookie_locale == null || cookie_locale == 'null') ? false : cookie_locale;
        // Only do the js redirect on the static homepage.
        if ((path_length == 1) && (locale_in_path || path == '/')) {
            // debug.log("Path in redirect section: " + path);
            if (cookie_locale && (cookie_locale != tesla_locale)) {
                // debug.log('Redirecting to cookie_locale...');
                var path_base = '';
                switch (cookie_locale){
                    case 'en_US':
                        path_base = path_length > 1 ? path_base:'/';
                        break;
                    case 'ja_JP':
                        path_base = '/jp';
                        break;
                    case 'zh_CN':
                        path_base = '/cn';
                        break;
                    default:
                        path_base = '/' + cookie_locale;
                }
                path_array = (locale_in_path != -1) ? path_array.slice(locale_in_path) : path_array;
                path_array.unshift(path_base);
                var cookie_redirect_url = path_array.join('/');
                var has_query_string = (cookie_redirect_url.indexOf('?') !== -1);
                // var has_trailing_slash = (cookie_redirect_url.slice(-1) == '/');
                // Ensure url has trailing slash to prevent locale prefix redirection loops
                if (!has_query_string && (cookie_redirect_url.slice(-1) !== '/')) {
                    cookie_redirect_url += '/';
                }
                // Inject no redirect flag for tesla.module / tesla.locale.inc php redirect to prevent loops
                cookie_redirect_url += (has_query_string ? '&' : '?') + 'redirect_from_js=1';
                debug.log("Should Redirect to: " + cookie_redirect_url);
                // window.location.href = cookie_redirect_url;
            }
        }

        // only do the ajax call if we don't have a cookie
        if (!cookie_locale) {
            cookie_locale = 'null';
            var get_data = {cookie:cookie_locale, page:path, t_locale:tesla_locale};
            var query_country_string = parsed_url.query != '' ? parsed_url.query.split('='):false;
            var query_country = query_country_string ? (query_country_string.slice(0,1) == '?country' ? query_country_string.slice(-1):false):false;
            if (query_country) {
                get_data.query_country = query_country;
            }
            // $.ajax({
            //     url:'/check_locale',
            //     data:get_data,
            //     cache: false,
            //     dataType: "json",
            //     success: function(data){
            //                 var ip_locale = data.locale;
            //                 var market = data.market;
            //                 var new_locale_link = $('#locale_pop #locale_link');
            //                 if (data.show_blip && show_blip_count < 3) {
            //                     setTimeout(function(){
            //                         $('#locale_msg').text(data.locale_msg);
            //                         $('#locale_welcome').text(data.locale_welcome);
            //                         new_locale_link[0].href = data.new_path;
            //                         new_locale_link.text(data.locale_link);
            //                         new_locale_link.attr('rel', data.locale);
            //                         if (!new_locale_link.hasClass(data.locale)) {
            //                             new_locale_link.addClass(data.locale);
            //                         }
            //                         $('#locale_pop').slideDown('slow', function(){
            //                             var hide_blip = setTimeout(function(){
            //                                 $('#locale_pop').slideUp('slow', function(){
            //                                             var show_blip_count = readCookie('show_blip_count');
            //                                             if (!show_blip_count) {
            //                                                 createCookie('show_blip_count',1,360);
            //                                             }
            //                                             else if (show_blip_count < 3 ) {
            //                                                 var b_count = show_blip_count;
            //                                                 b_count ++;
            //                                                 eraseCookie('show_blip_count');
            //                                                 createCookie('show_blip_count',b_count,360);
            //                                             }
            //                                     });
            //                                 },10000);
            //                             $('#locale_pop').hover(function(){
            //                                 clearTimeout(hide_blip);
            //                                 },function(){
            //                                     setTimeout(function(){$('#locale_pop').slideUp();},10000);
            //                                 });
            //                         });
            //                     },1000);
            //                 }
            //             }
            // });
    }
}

function showWebFormOverlay(webFormID, webFormWidth, webFormHeight) {
    var webFormOverlay = $('#'+ webFormID);
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);

    if(!webFormModal){
        $('#page').parent().prepend('<div id="webform-modal"></div>');
        webFormModal = $('#webform-modal');
    }

    webFormOverlay.find('.pane-content').css('max-height', webFormHeight - 20);
    webFormOverlay.find('.pane-content').css('padding-left', 14);
    webFormOverlay.find('.pane-content').css('margin-right', "18px");

    // Set the height of the webform modal to the document height and fade it in.
    webFormModal.stop().css({
        'display':      'block',
        'height':       $(document).height()
    }).animate({
        'opacity':      .6
    }, 500);

    // Show the webform overlay.
    webFormOverlay.stop().css({
        'display':      'block',
        'width':        webFormWidth,
        'max-height':       webFormHeight,
        'margin-left':  (980 - webFormWidth) / 2
    }).animate({
        'opacity':      1
    }, 1000);

    // Check for an existing close button, if there isnt one, create one.
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);
    if(webFormOverlayCloseButton.length == 0){
        var formIDString = "'"+ webFormID +"'";
        /*webFormOverlay.prepend('<a class="webform-overlay-close-button" id="webform-close-button-'+ webFormID +'" href="javascript:hideWebFormOverlay('+ formIDString +');">&nbsp;</a>');*/
         webFormOverlay.prepend('<a class="webform-overlay-close-button" id="webform-close-button-'+ webFormID +'" href="">&nbsp;</a>');

    }
}

function hideWebFormOverlay(webFormID) {
    var webFormOverlay = $('#'+ webFormID);
    var webFormOverlayCloseButton = $('#webform-close-button-'+ webFormID);
    resetForm(webFormOverlay);
    resetForm(webFormModal);

    webFormOverlay.stop().animate({
        'opacity':      0
    }, 500, function(){
        webFormOverlay.css('display', 'none');
    });

    webFormModal.stop().animate({
        'opacity':      0
    }, 500, function(){
        webFormModal.css('display', 'none');
    });
}
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
     .removeAttr('checked').removeAttr('selected');
}

// to call, use:
resetForm($('#myform')); // by id, recommended

Drupal.Ajax.plugins.shadowbox = function(hook, args) {
    if (hook === 'init') {
        $('form.webform-client-form').after('<div class="submit-progress"><img src="/sites/all/themes/tesla/images/ajax-loader-bar-transparent.gif" alt="Sending, please wait" /></div>');
        //unbind ajax form handlers from original
        function ajaxUnbindOriginal(sbInline) {
            var f;
            if (f = $('.ajax-form', sbInline.content)) {
                $("#"+f.attr('id'), document).each(function() {
                    $(this).unbind('submit')
                    .find('input[type=submit]').unbind('click');
                });
            }
        }
        // and re-bind in SB context
        function ajaxShadowbox(sbInline) {
            Drupal.attachBehaviors($('#sb-player'));
        }

        Shadowbox.options['onFinish'] = ajaxShadowbox;
        Shadowbox.options['onOpen'] = ajaxUnbindOriginal;

        //disable keyboard overrides
        Shadowbox.options['enableKeys'] = false;

        return false;
    }
    else if (hook === 'submit') {
        debug.log('shadowbox hook submit');
        var thisForm = args.submitter.parents('form.webform-client-form');
        args.submitter.hide();
        thisForm.next('.submit-progress').show();
    }
    else if (hook === 'afterMessage') {
        if (args.status == false) {
            $('.submit-progress').hide();
            args.local.submitter.show();
        }
        else {
            // attach analytics after message is being displayed
            var thisForm = args.local.submitter.parents('form.webform-client-form');
            attachWebformAnalytics(thisForm.attr('id'));
        }
    }
    else if (hook === 'redirect') {
        if (args.status === true) {
            // work around possible same origin policy issues introduced by CDN
            var redirectPath = parseURL(args.redirect).path;
            $.get(redirectPath, function (data) {

                var confMsg = $(data).find('.webform-confirmation');
                //  Localizing the confirmation message
                if(confMsg.length == 0){
                    return;
                }
                $( confMsg ).html( $( confMsg ).html()
                    .replace( "Contact the Tesla Financing Team", Drupal.t( "Contact the Tesla Financing Team" ) )
                    .replace( "Thanks!", Drupal.t( "Thanks!" ) )
                    .replace( "We will get in touch with you shortly.", Drupal.t( "We will get in touch with you shortly." ) ) );

                $('.submit-progress').hide();

                args.local.form.parents('.node-webform').html(confMsg);
            });
        }
    return false; //do not redirect
    }
    // there is no 'error' hook... condition logged to console, and the form seems to hang
    else if (hook === 'error') {
        $('.submit-progress').hide();
        thisForm.replaceWith('<div class="webform-confirmation error">Sorry, there was an internal server error while submitting this form. Please try again later.</div>');

    }
    return true;
};



/*
 * Reposition background image on an element by a specified amount. Used for sprite nav.
 */
function reposBackground(e, amount) {
    if (e.css('backgroundPositionY') != "") {
    // IE and webkit
    e.css('backgroundPositionY', amount + 'px');
    } else {
    // FF
    e.css('backgroundPosition', e.css('backgroundPosition').split(" ")[0] + ' ' + amount + 'px');
    }
}

/*
 * Do this stuff as soon as DOM is ready.
 */
$(document).ready(function() {

    if (typeof Drupal.settings.tesla == 'undefined') { Drupal.settings.tesla = new Object(); }
    // Store galleries
    initGalleries();

    // Typekit
    // If any Galleries are on the page, need to delay loading typekit until after galleries are
    // initialized, or else Galleries don't work in IE
    if (window.Galleria && Drupal.settings.tesla.flickr_api_key && $.browser.msie) {
        setTimeout('initTypeKit();', 700);
    }

    // set a deafult cookie for the buy flow based on locale
    var buy_flow_cookie = readCookie('buy_flow_locale');
    if (!buy_flow_cookie) {
        createCookie('buy_flow_locale',Drupal.settings.tesla.locale, 360);
    }

    //WEB-7462: set cookie if query string in the form '?advocate=menlopark' exists
    var qs = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'));
    if(qs["advocate"]){
        createCookie('advocate',qs["advocate"], 1);
        cache_buster_set_cookie(1); //set cache buster cookie to equal length period to allow anonymous(not logged in) orders to be placed
    }

    // legal menu item, don't show on top menubar
    $('#site-menu .secondary-menu li.menu-legal').remove();

    // erase persistent login cookie if logout is clicked
    if($('#menu-logout').length) {
        $('#menu-logout').click(function(){
            eraseCookie('tesla_login');
        });
    }

    /**
     * main menu: secondary nav hovers
     */

    // Helper function to get the language code.
    function getLangCode() {
        var body_classes = $('body').attr('class').split(' ');
        var code = '';
        for (var i=0, l=body_classes.length; i<l; i++) {
            if (body_classes[i].indexOf('i18n') > -1) {
                code = body_classes[i].substr(5);
            }
        }
        return code;
    }




    // hook google analytics events
    initAnalyticsEvents();

    // Forms
    $('form#comment-form input[type=submit]')
    .after('<div class="submit-progress"><img src="/sites/all/themes/tesla/images/ajax-loader-bar.gif" alt="Loading, please wait" /></div>')
    .click(function() {
            $(this).hide()
            .next('.submit-progress').show();
    });

    // Country Selector
    $('#tesla-country-selector .form-submit').hide();
    $('#tesla-country-selector #edit-country').change(function() {
        if ($(this).val() !== '') {
            $('#tesla-country-selector').submit();
        }
    });

    // Phone number popup for en_GB
    if (Drupal.settings.tesla.locale === 'en_GB') {
        $("#edit-submitted-phone").after("<span id='submitted-phone-popup'>Please provide a number we can reach you on during office hours</span>");

        $("#edit-submitted-phone")
            .focus(function() {
                $(this).next('#submitted-phone-popup').fadeIn(300);
            })
            .blur(function() {
                $(this).next('#submitted-phone-popup').fadeOut(300);
            });
    }

    // Shop subnav link -- open in new window
    $('.menu-16276 a').attr('target','_new');

    // Locale specific
    attachLocaleHandlers();

    // Homepage
    initHome();

    // Fade alerts
    messagesBye = setTimeout(fadeAlerts, 4000);

    // Press page styling
    $('#page-about-press #left-col .pane-title').addClass('style-header');

    // We don't want margins on all p tags. Sometimes the WYSIWYG adds p tags you don't need.
    $('#page-goelectric-charging #page_bottom .row-3-col div p:has(a img)').css('margin', '0');

    $('.typekit-badge').hide();

    // locale selector actions

    $('.locale-link').click(function(){
        if (window.location.hostname == $(this).get(0).hostname) {
            var desired_locale = $(this).attr('rel');
            createCookie('desired-locale',desired_locale,360);
            createCookie('buy_flow_locale',desired_locale,360);
        }
    });

    $('#locale_pop a.close').click(function(){
        var show_blip_count = readCookie('show_blip_count');
        if (!show_blip_count) {
            createCookie('show_blip_count',3,360);
        }
        else if (show_blip_count < 3 ) {
            eraseCookie('show_blip_count');
            createCookie('show_blip_count',3,360);
        }
        $('#locale_pop').slideUp();
        return false;
    });

    if ($('#page-user-login').length) {
        //WEB-13138 adjust for autofill of user data
        _.delay(function(){
            if ($('#edit-name').val() == '' || $('#edit-pass').val() == '') {
                $('#btnSelectDO').css('opacity','0.6');
                $('#btnSelectDO').unbind('click');
            }
            else {
                checkPassEmailField('login');
            }
            // WEB-14037 - move out of checkPassEmailField and only set once here
            $('#edit-name').unbind('blur');
            $('#edit-name').blur(function () {
                var current_email = $('#edit-name').val();
                $('#edit-name').val( trim(current_email) );
            });
            // WEB-14037 - move out of inline event
            $('#edit-pass').unbind('blur');
            $('#edit-pass').blur(function () {
                checkPassEmailField('login');
            });
        }, 200);

        // if an error message was set, then edit and show it
        if ($('#messages-wrapper').length) {
            var pwd_lockout = $('#messages-wrapper li:contains("Your account has been locked")').html();
            var error_field = 'edit-name';
            var anchor_pos = $('#'+error_field).position();
            var error_pos_x = anchor_pos.left;
            var error_pos_y = anchor_pos.top;
            var error_title = '';
            if (pwd_lockout != undefined) {
                var error_msg = pwd_lockout;
            }
            else {
                var error_msg = Drupal.t('We could not sign you in using the information you provided. Please try again.');
            }
            // $('.messages.error').html();
            error_msg = error_title + error_msg;
            $('.messages.error').html(error_msg);
            $('#messages-wrapper').css('left',error_pos_x-440);
            $('#messages-wrapper').css('top',error_pos_y-90);
            if($('.messages.error').length) {
                $('#messages-wrapper').fadeIn('slow');
            }
            //checkPassEmailField('login');
        }
        // get cookie and prefill username field
        var login_cookie = readCookie('tesla_login');
        var login_username = readCookie('tesla_username');
        // get URL parameter data
        var url_data = parseURL(location.href);
        var url_email = url_data.params.email;

        if (login_username && login_username !== '') {
            $('#edit-name').val(decodeURIComponent(login_username));
        }

        if (url_email && url_email !== '') {
            $('#edit-name').val(decodeURIComponent(url_email));
        }

        // WEB-9309 / TFM
        // -------------------------
        // if name prepopulated, then set focus to pass field
        // if($('#edit-name').val() !== '') {
        //     $('#edit-pass').focus();
        // } else {
            $('#edit-name').focus();
        // }
        // -------------------------

        $('#main').css('margin-bottom','0px');

        if ($('#edit-persistent-login-wrapper').length) {
            $('#edit-persistent-login-wrapper').removeClass('form-item');
            $('label[for="edit-persistent-login"]').removeClass('option');
            $('label[for="edit-persistent-login"]').css('cursor','pointer');
            var label_epl = $('label[for="edit-persistent-login"]').html();
            var input_epl = label_epl.substring(0,label_epl.indexOf('>')+1);
            var label_epl = label_epl.substring(label_epl.indexOf('>')+1);
            var spacer_epl = '&nbsp;&nbsp;';
            if ($.browser.chrome) {spacer_epl = '&nbsp;&nbsp;&nbsp;';}
            var label_epl = input_epl+spacer_epl+label_epl;
            $('label[for="edit-persistent-login"]').html(label_epl);
            $('#edit-persistent-login').css('opacity','0');
            $('#edit-persistent-login').click(function() {
                if ($('#keep_signed_in').val() == '1') {
                    $('#keep_signed_in').val(0);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-off.png)');
                }
                else {
                    $('#keep_signed_in').val(1);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-on.png)');
                }
            });
            // if($('#keep_signed_in').val() == '1') {
                $('#edit-persistent-login').click();
            // }
        }

        // run a function after the page loads to see if the email
        //  and password are prepop'd by browser.
        var origin = 'login';
        // setTimeout(checkPassEmailField,1000,[origin]);
    }

    if ($('#page-user-password').length) {
        $('#edit-name').focus();
        if ($('#btnSelectDO').length && !$('#messages-wrapper').length) {
            $('#btnSelectDO').css('opacity','0.5');
            $('#btnSelectDO').unbind('click');
        }

        // CAPTCHA by Mollom
        //------------

        if ($('#edit-mollom-captcha-wrapper').length) {
            // Reorder CAPTCHA position in register form
            $('#edit-mollom-captcha-wrapper').appendTo('#password-confirm-group-wrapper');

            // Restructure CAPTCHA module design
            // ---------------------------------

            // Re-position CAPTCHA Image or Audio (play button)
            if ($('.mollom-audio-captcha').length) {
                $('span.mollom-captcha-content.mollom-audio-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
            }
            if ($('.mollom-image-captcha').length) {
                $('span.mollom-captcha-content.mollom-image-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
            }
            // Re-position CAPTCHA Image or Audio (play button) as user clicks between both modes
            var clickbind = function () {

                // Cache link description
                var linkText = $(".mollom-switch-captcha").text();

                // Poll until text changes
                var timeout = setInterval(function () {

                    if (linkText !== $(".mollom-switch-captcha").text()) {

                        if ($('.mollom-audio-captcha').length) {
                            $('span.mollom-captcha-content.mollom-audio-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
                        }
                        if ($('.mollom-image-captcha').length) {
                            $('span.mollom-captcha-content.mollom-image-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
                        }

                        $('.mollom-switch-captcha').click(clickbind);
                        clearTimeout(timeout);
                    }

                }, 100);

            };
            $('.mollom-switch-captcha').click(clickbind);

            // Remove required star '*'
            $('#edit-mollom-captcha-wrapper').find('.form-required').remove();
            $('#edit-mollom-captcha-wrapper > label').text('Type the code below');

            // ---------------------------------

            // Reword CAPTCHA error
            if ($('#messages-wrapper').length) {
                $messages = $('#messages-wrapper').find('.error');
                var str = $messages.html();

                if (typeof str === 'string'){
                    // String Replacements
                    $messages.html(str.replace(
                        'The word verification was not completed correctly. Please complete this new word verification and try again. If you feel this is in error, please ',
                        'Please complete the word verification to continue. This helps us prevent spam in our forums'
                    ));
                }
            }
        }

        // // CAPTCHA Test Mode
        if ($('#messages-wrapper').length) { // If error message is found
            $messages_wrapper = $('#messages-wrapper');
            if ($messages_wrapper.find('.error:contains("Your submission has triggered the spam filter and will not be accepted. If you feel this is in error, please")')) {
                $messages_wrapper.find('.error').html($('#messages-wrapper').find('.error').html().replace(
                    'Your submission has triggered the spam filter and will not be accepted. If you feel this is in error, please ',
                    'An automated security monitor is preventing your account from being created. Please contact us for more information'
                ));
            }
        }

        //------------

        if ($('#messages-wrapper').length) {
           $('.messages.error a').remove();
            $('.messages.error ul li:nth-child(2)').remove();
            $('.messages.error ul li:nth-child(3)').remove();
            if ($('#edit-name').hasClass('error')){
                var error_pos_x = 335;
                var error_pos_y = 210;
            }
            else {
                var error_pos_x = 335;
                var error_pos_y = 375;
                $('#recaptcha_response_field').addClass('error');
            }
            if ($('.messages.error ul').length) {
                $('.messages.error').css('margin-left','-2px');
            }
            $('#messages-wrapper').css('left',error_pos_x);
            $('#messages-wrapper').css('top',error_pos_y);
            if ($('.messages.error').length) {
                $('#messages-wrapper').fadeIn('slow');
            }
            checkPassEmailField();
        }
        $('#main').css('margin-bottom','0px');
        setTimeout(checkPassEmailField,1000);

    }

    if ($('*[id*=page-user-reset-]').length) {
        $('#edit-pass-pass1').focus();
        $('*[id*=page-user-reset-]').css('text-align','center');
        $('#btnSelectDO').css('opacity','0.5');
        $('#edit-pass-pass2').keyup(function(event) {
            checkKeyPressed(event);
        });

        if ($('#reset-submit-btn-container').length) {
            $('#reset-submit-btn-container').remove();
        }

        if ($('#edit-pass-pass1').length) {
            $('#edit-pass-pass1').keyup(function() {
                checkResetPasswordFields();
            });
            $('#edit-pass-pass1').blur(function() {
                checkResetPasswordFields();
            });
        }

        if ($('#edit-pass-pass2').length) {
            $('#edit-pass-pass2').keyup(function() {
                checkResetPasswordFields();
            });
            $('#edit-pass-pass2').blur(function() {
                checkResetPasswordFields();
            });
        }
    }

    if ($('#page-user-change-pass').length) {
        $('#edit-pwd').focus();
        $('#btnSelectDO').css('opacity','0.5');
    }

    // start create account page
    if ($('#page-user-register').length) {

        // WEB-9309 / TFM
        // Deactivate login button when page loads
        // --------------
        $('#btnCreateAccount').css('opacity','0.5');
        $('#btnCreateAccount').unbind('click');
        $('#btnCreateAccount').unbind('keyup');
        // --------------

        /*
        // WEB-8822 / TFM
        // Scale background image
        // --------------------------------------
        function registerBgSize () {

            var $page_user_register = $('#page-user-register'),
                $window = $(window);

            $page_user_register.css({
                'background-size': 'cover'
            });

            if ($window.width() < 961) {

                $page_user_register.css({
                    'background-size': 'cover'
                });

                if ($window.height() < 797) {
                    $page_user_register.css({
                        'background-size': '961px 797px'
                    });
                }
            }
            else if ($window.height() < 797) {

                $page_user_register.css({
                    'background-size': 'cover'
                });

                if ($window.width() < 796) {
                    $page_user_register.css({
                        'background-size': '961px 796px'
                    });
                }
            }
        }

        registerBgSize();
        $(window).resize(function () {

            registerBgSize();
        });
        // --------------------------------------
        */

        // set focus to fname
        // WEB-9303 / TFM
        // ---------------------
        //if($('#edit-first-name').length) {
            $('#edit-first-name').focus();
        //}
        // ---------------------
        // if error message displayed, then edit and show it
        if ($('#messages-wrapper').length) {
            $('.messages.error a').remove();
            $('.messages.error ul li:nth-child(2) a').remove();
            $('.messages.error ul li:nth-child(3) a').remove();
            var error_field = 'edit-name';
            var anchor_pos = $('#'+error_field).position();
            var error_pos_x = anchor_pos.left;
            var error_pos_y = anchor_pos.top;
            var error_title = '<strong>'+Drupal.t('Please Try Again')+'</strong><br>';
            var error_msg = Drupal.t('The username or password you used were incorrect.');
            // $('.messages.error').html();
            error_msg = error_title + error_msg;
            // $('.messages.error').html(error_msg);
            if ($('.messages.error ul').length) {
                $('.messages.error').css('margin-left','-2px');
            }
            $('#messages-wrapper').css('left',error_pos_x-440);
            $('#messages-wrapper').css('top',error_pos_y-218);
            if ($('.messages.error').length) {
                $('#messages-wrapper').fadeIn('slow');
            }
            checkCreateAcctFields('create_account');
        }

        // WEB-8822 / TFM
        // Form errors
        // -------------------------------------

        // Multi-case errors (submit errors)
        if ($('.messages.error ul').length) {

            var $messages = $('#messages-wrapper').find('.error'),
                $messages_wrapper = $('#messages-wrapper');

            // Resize tooltip
            $messages_wrapper.css({
                'height': $messages.outerHeight() + 'px', // !important',
                'background-size': '100% ' + $messages.outerHeight() + 'px' //!important
            });
            // Fallback Hack
            // $('html > head').append($('<style>#messages-wrapper {background-size: 100% ' + $messages.height() + ';}</style>'));

            // Align message error wrapper adjacent to form buttons on bad submit
            if (!$('#edit-mollom-captcha-wrapper').length) {
                $messages_wrapper.addClass("submit-error");
            }
            else {
                $messages_wrapper.addClass("submit-error-captcha");
            }

        }

        // -------------------------------------

        if ($('#edit-pass-pass1').length) {
            $('#edit-pass-pass1').keyup(function() {checkCreateAcctFields('create_account')});
        }
        if ($('#edit-pass-pass2').length) {
            $('#edit-pass-pass2').keyup(function() {checkCreateAcctFields('create_account')});
        }


        // WEB-8822 / TFM
        // CAPTCHA by Mollom
        // -----------------

        if ($('#edit-mollom-captcha-wrapper').length) {
            // Reorder CAPTCHA position in register form
            $('#edit-mollom-captcha-wrapper').appendTo('#password-confirm-group-wrapper');

            // Restructure CAPTCHA module design
            // ---------------------------------

            // Re-position CAPTCHA Image or Audio (play button)
            if ($('.mollom-audio-captcha').length) {
                $('span.mollom-captcha-content.mollom-audio-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
            }
            if ($('.mollom-image-captcha').length) {
                $('span.mollom-captcha-content.mollom-image-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
            }
            // Re-position CAPTCHA Image or Audio (play button) as user clicks between both modes
            var clickbind = function () {

                // Cache link description
                var linkText = $(".mollom-switch-captcha").text();

                // Poll until text changes
                var timeout = setInterval(function () {

                    if (linkText !== $(".mollom-switch-captcha").text()) {

                        if ($('.mollom-audio-captcha').length) {
                            $('span.mollom-captcha-content.mollom-audio-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
                        }
                        if ($('.mollom-image-captcha').length) {
                            $('span.mollom-captcha-content.mollom-image-captcha').appendTo('#edit-mollom-captcha-wrapper > .field-prefix');
                        }

                        $('.mollom-switch-captcha').click(clickbind);
                        clearTimeout(timeout);
                    }

                }, 100);

            };
            $('.mollom-switch-captcha').click(clickbind);

            // Remove required star '*'
            $('#edit-mollom-captcha-wrapper').find('.form-required').remove();
            $('#edit-mollom-captcha-wrapper > label').text('Type the code below');

            // ---------------------------------

            $("#edit-mollom-captcha").keyup(function() {checkCreateAcctFields('create_account')});

            // Reword CAPTCHA error
            if ($('#messages-wrapper').length) {
                $messages = $('#messages-wrapper').find('.error');
                var str = $messages.html();

                // String Replacements
                $messages.html(str.replace(
                    'The word verification was not completed correctly. Please complete this new word verification and try again. If you feel this is in error, please ',
                    'Please complete the word verification to continue. This helps us prevent spam in our forums'
                ));

                // // String Replacements
                // $messages.html(str.replace(
                //     'To complete this form, please complete the word verification below.',
                //     'To complete this form, please complete the word verification.'
                // ));
            }
        }

        // // CAPTCHA Test Mode
        if ($('#messages-wrapper').length) { // If error message is found
            $messages_wrapper = $('#messages-wrapper');
            if ($messages_wrapper.find('.error:contains("Your submission has triggered the spam filter and will not be accepted. If you feel this is in error, please")')) {
                $messages_wrapper.find('.error').html($('#messages-wrapper').find('.error').html().replace(
                    'Your submission has triggered the spam filter and will not be accepted. If you feel this is in error, please ',
                    'An automated security monitor is preventing your account from being created. Please contact us for more information'
                ));
            }
        }

        // -----------------

        // WEB-9269 / TFM
        // -----------------
        if ($('#edit-persistent-login-wrapper').length) {

            // Style "Keep me signed in" checkbox
            // --------------
            $('#edit-persistent-login-wrapper').removeClass('form-item');
            $('label[for="edit-persistent-login"]').removeClass('option');
            $('label[for="edit-persistent-login"]').css('cursor','pointer');
            var label_epl = $('label[for="edit-persistent-login"]').html();
            var input_epl = label_epl.substring(0,label_epl.indexOf('>')+1);
            var label_epl = label_epl.substring(label_epl.indexOf('>')+1);
            var spacer_epl = '&nbsp;&nbsp;';
            if ($.browser.chrome) {spacer_epl = '&nbsp;&nbsp;&nbsp;';}
            var label_epl = input_epl+spacer_epl+label_epl;
            $('label[for="edit-persistent-login"]').html(label_epl);
            $('#edit-persistent-login').css('opacity','0');
            // --------------


            // "Keep me signed in" checkbox state
            // --------------
            // Toggle checkmark
            $('#edit-persistent-login').click(function() {
                if (readCookie('keep_me_signed_in') === "1") {
                    eraseCookie('keep_me_signed_in');
                    createCookie('keep_me_signed_in', "0", 1);
                    $('#keep_signed_in').val(0);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-off.png)');
                }
                else {
                    eraseCookie('keep_me_signed_in');
                    createCookie('keep_me_signed_in', "1", 1);
                    $('#keep_signed_in').val(1);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-on.png)');
                }
            });

            // On page refresh set checkmark
            if (readCookie('keep_me_signed_in') !== null) {

                if (readCookie('keep_me_signed_in') === "1") {
                    $('#keep_signed_in').val(1);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-on.png)');
                }
                else {
                    $('#keep_signed_in').val(0);
                    $('#edit-persistent-login-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-off.png)');
                }
            }
            // Create a new cookie if one doesn't exist
            else {
                createCookie('keep_me_signed_in', '0', 1);
                $('#keep_signed_in').val(1);
                $('#edit-persistent-login').click();
            }
            // --------------

        }


        if ($('#edit-newsletter-wrapper').length) {

            // Style "Get Tesla Updates" checkbox
            // --------------
            $('#edit-newsletter-wrapper').removeClass('form-item');
            $('label[for="edit-newsletter"]').removeClass('option');
            $('label[for="edit-newsletter"]').css('cursor','pointer');
            var label_epl = $('label[for="edit-newsletter"]').html();
            var input_epl = label_epl.substring(0,label_epl.indexOf('>')+1);
            var label_epl = label_epl.substring(label_epl.indexOf('>')+1);
            var spacer_epl = '&nbsp;&nbsp;';
            if ($.browser.chrome) {spacer_epl = '&nbsp;&nbsp;&nbsp;';}
            var label_epl = input_epl+spacer_epl+label_epl;
            $('label[for="edit-newsletter"]').html(label_epl);
            $('#edit-newsletter').css('opacity','0');
            // --------------


            // "Get Tesla Updates" checkbox state
            // --------------
            // Toggle checkmark
            $('#edit-newsletter').click(function() {
                if (readCookie('newsletter_indicator') === "1") {
                    eraseCookie('newsletter_indicator');
                    createCookie('newsletter_indicator', "0", 1);
                    $('#newsletter_indicator').val(0);
                    $('#edit-newsletter-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-off.png)');
                }
                else {
                    eraseCookie('newsletter_indicator');
                    createCookie('newsletter_indicator', "1", 1);
                    $('#newsletter_indicator').val(1);
                    $('#edit-newsletter-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-on.png)');
                }
            });

            // On page refresh set checkmark
            if (readCookie('newsletter_indicator') !== null) {

                if (readCookie('newsletter_indicator') === "1") {
                    $('#newsletter_indicator').val(1);
                    $('#edit-newsletter-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-on.png)');
                }
                else {
                    $('#newsletter_indicator').val(0);
                    $('#edit-newsletter-wrapper').css('background-image','url(/tesla_theme/images/own/own-terms-checkbox-off.png)');
                }
            }
            // Create a new cookie if one doesn't exist
            else {
                createCookie('newsletter_indicator', '0', 1);
                $('#newsletter_indicator').val(1);
                $('#edit-newsletter').click();
            }
            // --------------


        }
        // -----------------

        if ($('#useremail-check-message').length) {
            var ur_notePosition = $('#edit-mail').position();
            var ur_notePositionX = ur_notePosition.left;
            var ur_notePositionY = ur_notePosition.top;
            $('#useremail-check-message').css('left',ur_notePositionX-250);
            $('#useremail-check-message').css('top',ur_notePositionY-20);
        }

    }
    // end create account page

    // if on change reservation page
    if (document.getElementById('page-mytesla-change-reservation')) {
        //$('#btnReserve').focus();
    }

    // Model X webcast items
    // Hack to get the background to stretch full width
    if ($('#webcast-variant').length != 0) {
        // $('body').css('background-image','none');
        $('body').css('background-image','url(/tesla_theme/images/modelx/bg_webcast.png)');

        $('#main-content').css('background-color','transparent');
    }

    // start mytesla profile
    if ($('#page-user-me-edit').length || $('#page-user-edit').length) {

        var profile_error_msg = '';
        var profile_existing_msg = '';
        if ($('#email-match-error').length) {
            profile_existing_msg = $('#email-match-error').val();
        }
        // if there's an error on the page (default drupal) then grab it and show it elsewhere
        if ($('#messages-wrapper').length) {

            if ($('.messages.error').length) {
                profile_error_msg = $('.messages.error').html();
            }
            else if ($('.messages.status').length) {
                profile_error_msg = $('.messages.status').html();
            }
            else {
                profile_error_msg = Drupal.t('Your profile has been updated successfully.');
            }
            if (profile_error_msg != '') {
                if (profile_error_msg.indexOf('The changes have been saved') > 0) {
                    profile_error_msg = Drupal.t('Your profile has been updated successfully.');
                }
                if (profile_error_msg != '' && profile_existing_msg != '') {
                    profile_existing_msg = profile_error_msg + '<br/>' + profile_existing_msg;
                }
                else {
                    profile_existing_msg = profile_error_msg;
                }

            }
            $('#profile-msg-content-div').html(profile_existing_msg);
            if ($('#profile-msg-content-div').css('display') == 'none') {
                if ($('#profile-msg-content-div ul').length) {
                    $('#profile-msg-content-div ul').css('margin-bottom','0px');
                }
                $('#profile-msg-div').css('display','block');
                $('#profile-msg-content-div').fadeIn('slow');
            }
        // show save success message div
        }
        else if ($('#edit-profile-savesuccess').length) {
            $('#profile-msg-content-div').html($('#edit-profile-savesuccess').val());
            $('#profile-msg-div').css('display','block');
            $('#profile-msg-content-div').fadeIn('slow');
        }

        if ($('#browser').length) {
            if (!$.browser.msie) {
                $('#browser').val($.browser.version);
            }
        }

        if ($('#edit-mail').length) {
            $('#edit-mail').val($('#edit-email').val());
        }

        if ($('#edit-mail-wrapper').length) {
            $('#edit-mail-wrapper').removeClass('form-item');
        }

        if ($('#edit-name-wrapper').length) {
            $('#edit-name-wrapper').removeClass('form-item');
        }

        if ($('#edit-picture-upload-wrapper').length) {
            $('#edit-picture-upload-wrapper').removeClass('form-item');
        }

        if ($('.picture').length) {
            $('.picture').css('display','none');
        }

        if ($('#edit-picture-delete-wrapper').length) {
            $('#edit-picture-delete-wrapper').removeClass('form-item');
        }

        $('.mytesla-photo-chg-link').click(function() {
            openChangePhotoDiv();
        });

        if ($('#edit-picture-upload').length) {

            $('.description').css('display','none');
            $('label[for="edit-picture-upload"]').css('display','none');

            if ($.browser.msie) {
                $('#profile-form-div').css('display','block');
                $('.mytesla-photo-chg-link').unbind('click');
                $('.mytesla-photo-chg-link').click(function() {
                    $("html, body").animate({ scrollTop: ($("#profile-form-div").offset().top)-20 }, "slow");
                });
                $('#edit-picture-upload-wrapper').css('display','block');
                $('#edit-picture-upload-wrapper').before('<div class="profile-subhdr">'+Drupal.t('Change Your Profile Image')+'</div>');
                $('#edit-picture-upload-wrapper').css('background','none');
                $('#edit-picture-upload').css('opacity','1');
                // $('#edit-picture-upload').remove('form-file');
            }
            else {
                $('#edit-picture-upload-wrapper').append('<div id="edit-picture-btn-txt">'+Drupal.t('choose file')+'</div>');
                $('#edit-picture-upload').css({'opacity':'0','-khtml-appearance':'none','cursor':'pointer'});
                $('#edit-picture-upload').change(function() {
                    if (!$.browser.msie) {
                        $('#edit-picture-upload-wrapper').append('<div id="edit-picture-displayfile"></div>');
                        var msg = Drupal.t('Selected file: ') + $('#edit-picture-upload').val();
                        $('#edit-picture-displayfile').text(msg);
                        $('#edit-picture-displayfile').fadeIn('slow');
                    }
                });
            }
        }

        var multiplier = 6.3;
        if (Drupal.settings.tesla.locale == 'ja_JP') {
            multiplier = 9.5;
        }
        var notePositionW = $('label[for="edit-email"]').html().length * multiplier;
        var notePosition = $('#edit-email').position();
        var notePositionX = notePosition.left + notePositionW;
        var notePositionY = notePosition.top - 18;
        var locale = '';
        if (Drupal.settings.tesla.country != 'US') {
            locale = '/'+Drupal.settings.tesla.locale;
        }
        if (locale == '/ja_JP') {
            locale = '/jp';
        }
        if (locale == '/zh_CN') {
            locale = '/cn';
        }
        $('#profile-email-note').css('top',notePositionY);
        $('#profile-email-note').css('left',notePositionX);

        $('#profile-addr2-note').css('top',notePositionY);
        $('#profile-addr2-note').css('left',notePositionX+50);

        $('#profile-navbar-title').click(function() {
            window.location.href=locale+'/mytesla';
        });

        $('#profile-navbar-two').click(function(){
            window.location.href=locale+'/own/financing';
        });

        $('#profile-navbar-three').click(function(){
            window.location.href=locale+'/own/service';
        });

        $('#changepwd-btn-cancel').click(function() {
            $('#changepwd-error-div').html('');
            $('#changepwd-error-div').css('display','none');
            $('#profile-popup-closex').css('display','none');
            $('#edit-changepwd-current').val('');
            $('#edit-pass-pass1').val('');
            $('#edit-pass-pass2').val('');
            $('#profile-changepwd-div').css('display','none');
            $('#page-disable').fadeOut('slow',function() {
                $(this).remove();
            });
        });

        $('#changephoto-btn-cancel').click(function() {
            $('#changephoto-error-div').html('');
            $('#changephoto-error-div').css('display','none');
            $('#profile-popup-closex').css('display','none');
            $('#edit-picture-upload').val('');
            $('#profile-changephoto-div').css('display','none');
            $('#changephoto-processing-img').css('display','none');
            $('#page-disable').fadeOut('slow',function() {
                $(this).remove();
            });
        });

        $('#changepwd-btn-save').click(function() {
            submitChangePassword();
        });

        $('#changephoto-btn-save').click(function() {
            submitChangePhoto();
        });

        // cancel button functionality on profile page
        $('#btnSelectDOBack').click(function() {

            var back_destination = $('#edit-profile-destination').val();
            if (back_destination.indexOf('?')) {
                back_destination = back_destination.substring(0,back_destination.indexOf('?'));
            }

            window.location.href = back_destination;
        });

        // submit button functionality on profile page
        if ($('#btnSelectDO').length) {
            $('#btnSelectDO').click(function() {
                submitUserEditForm();
            });
        }
        // set the overlay for main contact country select box
        setMailingCountryOverlay();

        // open the alternate contact div if user has one
        if ($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
            changeProfileCountry('profile-alt-mailing-addr','altmailing','onready');
            // set the overlay for alternate contact country select box
            if ($.browser.msie && $.browser.version < 9) {
                // do nothing, this will get handled later
            }
            else {
                setAltMailingCountryOverlay();
            }
        }

        // set alt contact open/close links only if altcontact container is available
        if ($('#profile-altcontact-container').length && $('#profile-altcontact-container').css('display') == 'block') {
            $('#profile-addremove-icon').unbind('click');
            $('#profile-addremove-icon').click(function() {
                openAltContactDiv();
            });
            $('#profile-addremove-title').unbind('click');
            $('#profile-addremove-title').click(function() {
                openAltContactDiv();
            });
        }

        // set contact preference to 1st option by default
        // if($('#profile-contactprefs-radio1').length) {
        //     setProfileAltContactRadio(0);
        // }
        if ($('#contact_prefs').length && $('#contact_prefs').val() == '1') {
            setProfileAltContactRadio($('#contact_prefs').val());
        }
        else {
            setProfileAltContactRadio(0);
        }


        if ($('#removeprompt-btn-confirm-cancel').length) {
            $('#removeprompt-btn-confirm-cancel').click(function() {
                $('#profile-popup-closex').css('display','none');
                $('#profile-removeprompt-div').css('display','none');
                $('#page-disable').fadeOut('slow');
            });
        }

        if ($('#removeprompt-btn-confirm').length) {
            $('#removeprompt-btn-confirm').click(function() {
                var window_height = $(window).height();
                var window_width = $(window).width();
                var x_position = window_width/2;
                var y_position = window_height/2;
                var pdiv_width = $('#processing-div').width();
                var pdiv_height = $('#processing-div').height();
                x_position = x_position - (pdiv_width/2);
                y_position = y_position - (pdiv_height/2);
                $('#processing-div').css('left',x_position);
                $('#processing-div').css('top',y_position);
                $('#processing-div').css('position','fixed');
                $('#profile-popup-closex').css('display','none');
                $('#profile-removeprompt-div').fadeOut('slow',function() {
                    $('#processing-div').fadeIn('slow',function() {
                        removeAltContact();
                    });
                });
            });
        }

        if ($('#profile-form-div').length && $.browser.msie) {
            if($('#profile-form-div fieldset:first-child legend').html() == 'Account validation') {
                $('#profile-form-div fieldset:first-child').css('display','none');
            }
        }

    }
    // end mytesla profile


    /**
     * WEB-13981 - changes to the WeChat icon interaction in Chinese footer
     * Interactions captured:
     *     - open popover when icon is clicked
     *     - close popover when icon is clicked
     *     - close popover is anything on the page is clicked
     *     - close popover is user hits the escape key (keycode === 27)
     */
    $( document ).click( function( e ) {
        var icon = $( '.social-icon .wechat.is-active' );
        togglePopover( icon );
    });

    $( document ).keyup( function( e ) {
        var icon = $( '.social-icon .wechat.is-active' );
        if ( e.keyCode === 27 ) {
            togglePopover( icon );
        }
    });

    $( '.social-icon' ).bind( 'click', '.wechat', function( e ) {
        e.stopPropagation( e );
        togglePopover( $(this) );
    });

    //bind profile submit
    $('#user-profile-form').submit(function(e) {
        e.preventDefault();
        submitUserEditForm();
    });

    function togglePopover( e ) {
        e.toggleClass( 'is-active' );
    }

    $(".tesla-updates").on("click", function(e) {
        e.stopPropagation();
        // window.open("/about/legal#tesla-updates", "_newtab");
    })

});
/////////////////////////// end onready

function setMailingCountryOverlay(origin) {
    // select element styling
    if($('#edit-mailing-country').length && !$('#mailing-country-overlay').length) {
        $('#edit-mailing-country').each(function(){
            var title = $(this).attr('title');
            if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text().substring(0,24);
            $(this)
                .css({'z-index':1,'opacity':0,'-khtml-appearance':'none'})
                .after('<span id="mailing-country-overlay" class="select-mailing">' + title + '</span>')
                .change(function(){
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
                      val = '<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#mailing-country-overlay').html(val);
                })
                .keyup(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
                      val = '<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#mailing-country-overlay').html(val);
                })
        });

        if(!origin) {
            changeProfileCountry('profile-owner-mailing-addr','mailing','onready');
        } else {
            changeProfileCountry('profile-owner-mailing-addr','mailing');
        }

        // set position of country dropdown overlay
        var countryPosition = $('#edit-mailing-country').position();
        var countryPositionX = countryPosition.left-3;
        var countryPositionY = countryPosition.top;
        if($.browser.safari) {
            countryPositionY = countryPosition.top-2;
        }
        var ctry_code = $('#edit-mailing-country').val().toLowerCase();
        var ctry_label = $('#edit-mailing-country option:selected').text().substring(0,24);
        $('#mailing-country-overlay').css('left',countryPositionX);
        $('#mailing-country-overlay').css('top',countryPositionY);
        // if locale supported country, show flag in dropdown
        if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
            $('#mailing-country-overlay').html('<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+ctry_label);
        }

        $('#mailing-country-overlay').fadeIn('slow');

    }
}

function setAltMailingCountryOverlay(origin) {

    if($('#edit-altmailing-country').length && !$('#altmailing-country-overlay').length) {
        $('#edit-altmailing-country').each(function(){
            var title = $(this).attr('title');
            if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text().substring(0,24);
            $(this)
                .css({'z-index':1,'opacity':0,'-khtml-appearance':'none'})
                .after('<span id="altmailing-country-overlay" class="select-mailing">' + title + '</span>')
                .change(function(){
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
                      val = '<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#altmailing-country-overlay').html(val);
                })
                .keyup(function() {
                    ctry_code = $('option:selected',this).val().toLowerCase();
                    val = $('option:selected',this).text().substring(0,24);
                    if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
                      val = '<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;' + val;
                    }
                    $('#altmailing-country-overlay').html(val);
                })
        });

        if(origin) {
            // set position of country dropdown overlay
            var countryPosition = $('#edit-altmailing-country').position();
            var countryPositionX = countryPosition.left-3;
            var countryPositionY = countryPosition.top;
            var ctry_code = $('#edit-altmailing-country').val().toLowerCase();
            var ctry_label = $('#edit-altmailing-country option:selected').text().substring(0,24);
            $('#altmailing-country-overlay').css('left',countryPositionX);
            $('#altmailing-country-overlay').css('top',countryPositionY);
            // if locale supported country, show flag in dropdown
            if(ctry_code == 'us' || ctry_code == 'ca' || ctry_code == 'au' || ctry_code == 'at' || ctry_code == 'be' || ctry_code == 'dk' || ctry_code == 'de' || ctry_code == 'fr' || ctry_code == 'gb' || ctry_code == 'it' || ctry_code == 'nl' || ctry_code == 'ch' || ctry_code == 'hk' || ctry_code == 'jp' || ctry_code == 'cn') {
                $('#altmailing-country-overlay').html('<img src="/tesla_theme/images/icn_'+ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+ctry_label);
            }
            $('#altmailing-country-overlay').fadeIn('slow');
        }
    }
}

function setProfileCloseX(origin,action) {
    if($('#profile-'+origin+'-div').length) {
        if(action == 'open') {
            var popLocation = $('#profile-'+origin+'-div').position();
            alert(popLocation.top);
            popLocationX = popLocation.left;
            popLocationY = popLocation.top;
            $('#profile-popup-closex').css('left',popLocationX);
            $('#profile-popup-closex').css('top',popLocationY);
            $('#profile-popup-closex').css('display','block');
        } else {
            $('#profile-popup-closex').css('display','none');
        }
    }
}

function checkProfileRequiredFields(origin) {

    // $('#btnSelectDO').css('opacity','0.6');
    var no_main_contact = false;
    var aContactReqd = new Array();
    var aReqd = new Array();
    aReqd.push('username');
    aReqd.push('first-name');
    aReqd.push('last-name');
    aReqd.push('email');

    if($('#edit-profile-contactid').length && $('#edit-profile-contactid').val() != '') {
        aReqd.push('phone');
        aReqd.push('mailing-address-1');
        if($('#edit-mailing-country').val() != 'JP') {
            aReqd.push('mailing-city');
        }
        if($('#edit-mailing-country').val() != 'CN') {
            aReqd.push('mailing-zip');
        }
        if($('#mailing-province-istextbox').length) {
            aReqd.push('mailing-state');
        }
    } else {
        no_main_contact = true;
        aContactReqd.push('phone');
        aContactReqd.push('mailing-address-1');
        if($('#edit-mailing-country').val() != 'JP') {
            aContactReqd.push('mailing-city');
        }
        if($('#edit-mailing-country').val() != 'CN') {
            aReqd.push('mailing-zip');
        }
        if($('#mailing-province-istextbox').length) {
            aContactReqd.push('mailing-state');
        }
    }
    if(($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') || ($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1')) {
        aReqd.push('altcontact-firstname');
        aReqd.push('altcontact-lastname');
        aReqd.push('altcontact-mail');
        aReqd.push('altcontact-phone');
        aReqd.push('altmailing-address-1');
        if($('#altmailing-country').val() != 'JP') {
            aReqd.push('altmailing-city');
        }
        if($('#altmailing-province-istextbox').length) {
            aReqd.push('altmailing-state');
        }
        if($('#edit-mailing-country').val() != 'CN') {
            aReqd.push('altmailing-zip');
        }
    }

    for(var i=0;i<aReqd.length;i++) {

        $('#edit-'+aReqd[i]).unbind('keyup');
        $('#edit-'+aReqd[i]).keyup(function() {
            // console.log('checking this field!');
            var incomplete = 0;
            for(var ii=0;ii<aReqd.length;ii++) {
                if($('#edit-'+aReqd[ii]).val() == '') {
                    incomplete = 1;
                }
            }
            if(incomplete == 0) {
                $('#btnSelectDO').css('opacity','1');
            } else {
                $('#btnSelectDO').css('opacity','0.6');
            }
        });
    }
    // new condition for users with no main mailing address and start to add one
    if(no_main_contact === true) {
        for(var i=0;i<aContactReqd.length;i++) {

            $('#edit-'+aContactReqd[i]).unbind('keyup');
            $('#edit-'+aContactReqd[i]).keyup(function() {
                // console.log('checking this field!');
                var incomplete = 0;
                var adding_contact = 0;
                for(var ii=0;ii<aContactReqd.length;ii++) {
                    if($('#edit-'+aContactReqd[ii]).val() != '') {
                        adding_contact = 1;
                    }
                }
                if(adding_contact == 1) {
                    if(!$('#edit-profile-addmaincontact').length) {
                        $('#user-profile-form').append('<input type="hidden" name="edit-profile-addmaincontact" id="edit-profile-addmaincontact" value="1" />');
                    }
                    for(var ii=0;ii<aContactReqd.length;ii++) {
                        if($('#edit-'+aContactReqd[ii]).val() == '') {
                            incomplete = 1;
                        }
                    }
                } else {
                    if($('#edit-profile-addmaincontact').length) {
                        $('#edit-profile-addmaincontact').remove();
                    }
                }
                if(incomplete == 0) {
                    $('#btnSelectDO').css('opacity','1');
                } else {
                    $('#btnSelectDO').css('opacity','0.6');
                }
            });
        }
    }

    if(origin) {
        var incomplete = 0;
        for(var j=0;j<aReqd.length;j++) {
            if($('#edit-'+aReqd[j]).val() == '') {
                incomplete = 1;
            }
        }
        if(no_main_contact === true) {
            incomplete = 0;
        }
        if(incomplete == 0) {
            // $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').css('opacity','1');
            // $('#btnSelectDO').click(function() {
            //     submitUserEditForm();
            // });
        } else {
            $('#btnSelectDO').css('opacity','0.6');
        }
    }
    // $('#btnSelectDO').click(function() {
    //     submitUserEditForm();
    // });
}


/*
 * Do this stuff when the page is loaded -- any visible transistions
 */
$(window).load(function() {

    // fade in any tooltips
    $('.hover_tooltip').fadeIn(1500);
    // check to see if we need to show the locale blip
    checkCookie();

});

function makeCursor(obj) {
    document.getElementById(obj.id).style.cursor = 'pointer';
}

// onclick function for removing/deleting alternate contact
// calls submit user edit form which will submit the entire form
// and refresh the page
function removeAltContact() {

    var destination = $('#edit-profile-destination').val();
    $('#edit-profile-removealt-contact').val(1);
    submitUserEditForm('removeAltContact');

}

// updated function to change the mailing countries on the profile page.
// new ajax call to post new state/province values or empty text box if
// no related provinces/states.
// removed page refresh call which loses user input information
function changeProfileCountry(whichblock,fieldsegment,origin) {
    debug.error('****** changeProfileCountry invoked', whichblock, fieldsegment, origin);
    var container            = $('#'+whichblock);
    var selectedCountryIndex = document.getElementById('edit-'+fieldsegment+'-country').selectedIndex;
    var selectedCountry      = document.getElementById('edit-'+fieldsegment+'-country').options[selectedCountryIndex].value;
    var buyFlowCountry       = $('#edit-'+fieldsegment+'-country').val();
    var ln_container         = 'localname-container'; // china reservation

    //WEB-8685 for China, we must rely on saved values(hidden fields), will break if coming from other county
    var savedCountry = $('#edit-'+fieldsegment+'-country-h').val();
    if(origin || savedCountry == 'CN') {
        var mailing_addr1   = $('#edit-'+fieldsegment+'-address-1-h').val();
        var mailing_addr2   = $('#edit-'+fieldsegment+'-address-2-h').val();
        var mailing_city    = $('#edit-'+fieldsegment+'-city-h').val();
        var mailing_county  = $('#edit-'+fieldsegment+'-county-h').val();
        var mailing_state   = $('#edit-'+fieldsegment+'-state-h').val();
        var mailing_zip     = $('#edit-'+fieldsegment+'-zip-h').val();
        var mailing_country = $('#edit-'+fieldsegment+'-country-h').val();
    } else {
        var mailing_addr1 = $('#edit-'+fieldsegment+'-address-1').val();
        var mailing_addr2 = $('#edit-'+fieldsegment+'-address-2').val();
        var mailing_city  = $('#edit-'+fieldsegment+'-city').val();
        var mailing_county  = $('#edit-'+fieldsegment+'-county').val();
        var mailing_state = $('#edit-'+fieldsegment+'-state').val();
        var mailing_zip   = $('#edit-'+fieldsegment+'-zip').val();
    }

    var mailing_addr1_label      = $('#edit-mailing-addr1-label').val();
    var mailing_addr2_label      = $('#edit-mailing-addr2-label').val();
    var mailing_city_label       = $('#edit-mailing-city-label').val();
    var mailing_state_label      = $('#edit-mailing-state-label').val();
    var mailing_zip_label        = $('#edit-mailing-zip-label').val();
    var mailing_province_label   = $('#edit-mailing-province-label').val();
    var mailing_postalcode_label = $('#edit-mailing-postalcode-label').val();

    var mailing_addr1_css = '';
    var mailing_city_css  = '';
    var mailing_state_css = '';
    var mailing_zip_css   = '';

    if($('label[for="edit-'+fieldsegment+'-address-1"]').length && $('label[for="edit-'+fieldsegment+'-address-1"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_addr1_css = 'error';
    }
    if($('label[for="edit-'+fieldsegment+'-city"]').length && $('label[for="edit-'+fieldsegment+'-city"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_city_css = 'error';
    }
    if($('label[for="edit-'+fieldsegment+'-state"]').length && $('label[for="edit-'+fieldsegment+'-state"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_state_css = 'error';
    }
    if($('label[for="edit-'+fieldsegment+'-zip"]').length && $('label[for="edit-'+fieldsegment+'-zip"]').css('color') == 'rgb(204, 0, 0)') {
        mailing_zip_css = 'error';
    } else if($('#'+fieldsegment+'-zip-error').length) {
        mailing_zip_css = 'error';
    }

    if(!mailing_addr1) {mailing_addr1 = '';}
    if(!mailing_addr2) {mailing_addr2 = '';}
    if(!mailing_city) {mailing_city = '';}
    if(!mailing_state) {mailing_state = '';}
    if(!mailing_zip) {mailing_zip = '';}
    if(!mailing_country) {mailing_country = '';}

    if(fieldsegment == 'altmailing') {
        ln_container = 'alt-localname-container';
    }
    var user_selected = ( typeof(origin) != 'undefined' || origin == 'onready' ) ? false : true;

    // Swith places for first and last name fields for China
    var $lNameWrapper = $("#edit-last-name-wrapper").parent(),
        $fNameWrapper = $("#col-left #edit-first-name-wrapper").parent();

    if(selectedCountry == "CN") {
        $fNameWrapper.before($lNameWrapper);
        $lNameWrapper.parent().addClass("CN");
    }
    else {
        $fNameWrapper.after($lNameWrapper);
        $lNameWrapper.parent().removeClass("CN");
    }

    var data_mail_country = {countryTo: selectedCountry, address1: mailing_addr1, address2: mailing_addr2, city: mailing_city, county: mailing_county, state: mailing_state, zip: mailing_zip, country: mailing_country, mailing_addr1_lbl: mailing_addr1_label, mailing_addr2_lbl:mailing_addr2_label, mailing_city_lbl:mailing_city_label, mailing_state_lbl:mailing_state_label,mailing_zip_lbl:mailing_zip_label,mailing_province_lbl:mailing_province_label,mailing_postalcode_lbl:mailing_postalcode_label,segment:fieldsegment,addr1_css:mailing_addr1_css,city_css:mailing_city_css,state_css:mailing_state_css,zip_css:mailing_zip_css,user_selected:user_selected};
    debug.error('***** data_mail_country', data_mail_country);

    $.post("/mytesla/mailing-country", data_mail_country,
        function(data) {
        if(origin) {
            container.html(data);
            container.css('display','block');
            showMailingState();
            if(fieldsegment == 'altmailing') {
                openAltContactDiv('noscroll');
            }
        } else {
            container.fadeOut(function() {
                container.html(data);
                container.fadeIn(function() {
                    showMailingState();
                });
            });
        }

        if ($.inArray(selectedCountry, ['JP', 'CN', 'HK']) >= 0) {
            $('#'+ln_container).fadeIn('slow');
        }
        else {
            $('#'+ln_container).fadeOut('slow');
        }
    });

    function showMailingState() {
        var selectedCountry = document.getElementById('edit-'+fieldsegment+'-country').options[selectedCountryIndex].value;
        if(selectedCountry != 'CN') {
            //WEB-11244
            if (!$('#province-selectbox-hidden').length){
                // select element styling
                if(!$('#'+fieldsegment+'-province-istextbox').length) {
                    $('#edit-'+fieldsegment+'-state').each(function(){
                        var title = $(this).attr('title');
                        if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
                        $(this)
                            .css({'z-index':13,'opacity':0,'-khtml-appearance':'none'})
                            // .after('<span id="mailing-state-overlay" class="select-mailing">' + title.substring(0,38) + '</span>')
                            .unbind('change')
                            .unbind('keyup')
                            .change(function(){
                                val = $('option:selected',this).text();
                                $('#'+fieldsegment+'-state-overlay').html(val.substring(0,22));
                            })
                            .keyup(function() {
                                val = $('option:selected',this).text();
                                $('#'+fieldsegment+'-state-overlay').html(val.substring(0,22));
                            })
                    });

                    var provPosition = $('#edit-'+fieldsegment+'-state').position();
                    var provPositionX = provPosition.left - 2;
                    var provPositionY = provPosition.top + 2;
                    if(selectedCountry == 'JP') {
                        provPositionX = provPositionX - 2;
                    }
                    $('#'+fieldsegment+'-state-overlay').css('left',provPositionX);
                    $('#'+fieldsegment+'-state-overlay').css('top',provPositionY);
                    if(origin) {
                        $('#mailing-state-overlay').fadeIn('fast');
                    } else {
                        // if($('#edit-'+fieldsegment+'-state').css('display') == 'none') {
                            $('#'+fieldsegment+'-state-overlay').fadeIn('fast');
                        // }
                    }
                }
            }
            checkProfileRequiredFields('onready');
        } else {
            loadChinaRegions(fieldsegment);
            ////////////////////////////////
            // start province overlay
            if ($('#edit-'+fieldsegment+'-99-province').length && !$('#edit-'+fieldsegment+'-99-province-overlay').length) {
                $('#edit-'+fieldsegment+'-99-province').each(function(){
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-province-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function(){
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-province-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-province-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var provPosition = $('#edit-'+fieldsegment+'-99-province').position();
                    var provPositionX = provPosition.left-2;
                    var provPositionY = provPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('left',provPositionX);
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('top',provPositionY);
                    $('#edit-'+fieldsegment+'-99-province-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var provPosition = $('#edit-'+fieldsegment+'99-province').position();
                    var provPositionX = provPosition.left-2;
                    var provPositionY = provPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('left',provPositionX);
                    $('#edit-'+fieldsegment+'-99-province-overlay').css('top',provPositionY);
                    $('#edit-'+fieldsegment+'-99-province-overlay').fadeIn('slow');
                },1000);
            }

            ////////////////////////////////
            // start city overlay
            if ($('#edit-'+fieldsegment+'-99-city').length && !$('#edit-'+fieldsegment+'-99-city-overlay').length) {
                $('#edit-'+fieldsegment+'-99-city').each(function(){
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-city-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function(){
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-city-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-city-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var cityPosition = $('#edit-'+fieldsegment+'-99-city').position();
                    var cityPositionX = cityPosition.left-2;
                    var cityPositionY = cityPosition.top; // -4
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('left',cityPositionX);
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('top',cityPositionY);
                    $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var cityPosition = $('#edit-'+fieldsegment+'-99-city').position();
                    var cityPositionX = cityPosition.left-2;
                    var cityPositionY = cityPosition.top; // -4
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('left',cityPositionX);
                    $('#edit-'+fieldsegment+'-99-city-overlay').css('top',cityPositionY);
                    $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
                },1000);
            }

            ////////////////////////////////
            // start district overlay
            if ($('#edit-'+fieldsegment+'-99-district').length && !$('#edit-'+fieldsegment+'-99-district-overlay').length) {
                $('#edit-'+fieldsegment+'-99-district').each(function(){
                    var title = $(this).attr('title');
                    if ( $('option:selected', this).val() !== '' ) title = $('option:selected',this).text().substring(0,8);
                    $(this)
                        .css({'z-index':13,'opacity':0,'-khtml-appearance':'none','height':'40px'})
                        .after('<span id="edit-'+fieldsegment+'-99-district-overlay" class="select-short" style="display:none;" tabindex="0">' + title + '</span>')
                        .change(function(){
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-district-overlay').html(val.substring(0,8));
                        })
                        .keyup(function() {
                            val = $('option:selected',this).text();
                            $('#edit-'+fieldsegment+'-99-district-overlay').html(val.substring(0,8));
                        })
                });

                setTimeout(function() {
                    var distPosition = $('#edit-'+fieldsegment+'-99-district').position();
                    var distPositionX = distPosition.left-2;
                    var distPositionY = distPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('left',distPositionX);
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('top',distPositionY);
                    $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
                },1000);
            }
            else {
                // reposition just in case...
                setTimeout(function() {
                    var distPosition = $('#edit-'+fieldsegment+'-99-district').position();
                    var distPositionX = distPosition.left-2;
                    var distPositionY = distPosition.top+2; // -4
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('left',distPositionX);
                    $('#edit-'+fieldsegment+'-99-district-overlay').css('top',distPositionY);
                    $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
                },1000);
            }
            //china dropdowns
            //change handler for province dropdown(updates city dropdown)
            $( "#edit-"+fieldsegment+"-99-province" ).change(function() {
                $('#edit-'+fieldsegment+'-99-city-overlay').hide();
                $( "#edit-"+fieldsegment+"-99-city" ).html('');
                    $.each( chinaPCDMap[this.value], function( i, object ) {
                        $( "<option>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-city");
                    });
                $( "#edit-"+fieldsegment+"-99-city" ).change(); //trigger city change event
                $('#edit-'+fieldsegment+'-99-city-overlay').fadeIn('slow');
            });

            //change handler for city dropdown(updates district dropdown)
            $( "#edit-"+fieldsegment+"-99-city" ).change(function() {
                $('#edit-'+fieldsegment+'-99-district-overlay').hide();
                $( "#edit-"+fieldsegment+"-99-district" ).html('');
                    var province = $("#edit-"+fieldsegment+"-99-province").val();
                    $.each( chinaPCDMap[province][this.value], function( k, v ) {
                        $( "<option>" ).attr( "value", v ).html(v).appendTo("#edit-"+fieldsegment+"-99-district");
                    });
                $( "#edit-"+fieldsegment+"-99-district" ).change();
                $('#edit-'+fieldsegment+'-99-district-overlay').fadeIn('slow');
            });
            checkProfileRequiredFields('onready');
        }
    }
}

//used both in user profile page AND car profile page(registration block)
var chinaPCDMap = ''; //holds mapping of china regions for dropdowns in china order flow ie. province[city][n][districts]
function loadChinaRegions(fieldsegment){
    if(chinaPCDMap == '') {
        $.getJSON( Drupal.settings.basePath + 'sites/all/modules/99bill/province_city_district_map.json', {
            format: "json"
        }).done(function( data ) {
            chinaPCDMap = data;
            populateChinaDropdowns(fieldsegment,chinaPCDMap);
        });
    } else {
        populateChinaDropdowns(fieldsegment,chinaPCDMap);
    }
}

/**
  * China Order Flow function that gives value to the province/city/district dropdowns unique
  * to the country in the payment block. Only populates province dropdown and then triggers
  * change event to have the others be updated based on the value selected.
*/
function populateChinaDropdowns(fieldsegment, map) {
    var country = $('#edit-'+fieldsegment+'-99-hidden-country').val();
    //only use account values if account country is china since we need to match values with json map
    if(country == 'CN'){
        var p = ($('#edit-'+fieldsegment+'-99-hidden-province').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-province').val() : "北京");
        var c = ($('#edit-'+fieldsegment+'-99-hidden-city').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-city').val() : "北京");
        var d = ($('#edit-'+fieldsegment+'-99-hidden-district').val() != '' ? $('#edit-'+fieldsegment+'-99-hidden-district').val() : "东城区");
    } else {
        var p = "北京";
        var c = "北京";
        var d = "东城区";
    }

    //reset province dropdown before loading its values
    var _regIsPopulated = $("#reg-person-address1").val() != "";
    $( "#edit-"+fieldsegment+"-99-province" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择省").appendTo("#edit-"+fieldsegment+"-99-province"); //default value
    }
    _.each( map, function(object, i) {
        if (p == i && _regIsPopulated){
            $( "<option selected>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-province");
        } else {
            $( "<option>" ).attr( "value", i ).html(i).appendTo("#edit-"+fieldsegment+"-99-province");
        }
    });
    $("#edit-"+fieldsegment+"-99-province").trigger('keyup');

    //city
    $( "#edit-"+fieldsegment+"-99-city" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择城市").appendTo("#edit-"+fieldsegment+"-99-city"); //default value
    }
    if(p != 0){
        _.each( _.keys(map[p]), function( object, i, list) {
            if (c == object && _regIsPopulated){
                $( "<option selected>" ).attr( "value", object ).html(object).appendTo("#edit-"+fieldsegment+"-99-city");
            } else {
                $( "<option>" ).attr( "value", object ).html(object).appendTo("#edit-"+fieldsegment+"-99-city");
            }
        });
    }
    $("#edit-"+fieldsegment+"-99-city").trigger('keyup');

    //district
    $( "#edit-"+fieldsegment+"-99-district" ).html('');
    if (!_regIsPopulated) {
        $( "<option selected>" ).attr( "value", " " ).html("选择区").appendTo("#edit-"+fieldsegment+"-99-district"); //default value
    }
    if(p != 0 && c != 0){
        _.each( map[p][c], function( value, i, list) {
            if (d == value && _regIsPopulated){
                $( "<option selected>" ).attr( "value", value ).html(value).appendTo("#edit-"+fieldsegment+"-99-district");
            } else {
                $( "<option>" ).attr( "value", value ).html(value).appendTo("#edit-"+fieldsegment+"-99-district");
            }
        });
    }
    $("#edit-"+fieldsegment+"-99-district").trigger('keyup');
}

function selectPhotoFile() {
    if($('#edit-picture-upload').length) {
        $('#edit-picture-upload').click();
    }
}

function submitChangePhoto() {
    // files[0]
    // .size, .type,
    // image/jpeg, image/png, image/gif, image/jpeg
    var file_error_msg = 'Sorry, there was an error saving your image.  Please try again.';
    var is_valid_filetype = false;
    var is_oversized_file = false;
    var aFileTypes = new Array();
    aFileTypes.push('image/jpeg');
    aFileTypes.push('image/jpg');
    aFileTypes.push('image/png');
    aFileTypes.push('image/gif');

    if($('#edit-picture-upload').length) {
        var photo_file = document.getElementById('edit-picture-upload');
        for(var i=0;i<aFileTypes.length;i++) {
            if(!$.browser.msie) {
                if(photo_file.files[0].type == aFileTypes[i]) {
                    is_valid_filetype = true;
                }
                if(photo_file.files[0].size > 2097152) {
                    is_oversized_file = true;
                }
            } else {
                if(photo_file.value.toLowerCase().indexOf(aFileTypes[i].toLowerCase())) {
                    is_valid_filetype = true;
                }
                if(photo_file.size > 2097152) {
                    is_oversized_file = true;
                }
            }
        }

        if(is_valid_filetype == true && is_oversized_file == false) {
            $('#changephoto-processing-img').fadeIn('fast');
            // save the rest of the form
            document.forms['user-profile-form'].submit();
        } else {
            if(is_valid_filetype == false) {
                file_error_msg = 'Your selected image is not one of the accepted file types.  Please select an image in either JPEG/JPG, PNG, or GIF file format.';
            } else if(is_oversized_file == true) {
                file_error_msg = 'Your selected image exceeds the file size limitations.  Please select a different image or resize your image.';
            }
            $('#changephoto-error-div').html('<p>'+file_error_msg+'</p>');
            $('#changephoto-error-div').slideDown('slow');
            $('#changephoto-processing-img').css('display','none');
        }
    }
}

function profileFillEmail(obj) {
    if($('#edit-mail').length) {
        $('#edit-mail').val(obj.value);
    }
}

function profileFillUsername(obj) {
    if($('#edit-name').length) {
        $('#edit-name').val(obj.value);
    }
    $(obj).blur(function () {
         $(obj).val(trim(obj.value));
         $('#edit-name').val(trim(obj.value));
    });
}

function submitChangePassword() {
    // var minpwdlen = 6;
    // var minpwdlen_inwords ="six";
    // var sf_pwd_strength = document.getElementById('sf-pwd-strength').value;
    // if(sf_pwd_strength){
    //     if(sf_pwd_strength == "Strong"){
    //         minpwdlen=8;
    //         minpwdlen_inwords ="eight";
    //         document.getElementById("edit-profile-pwdlen-error").value = Drupal.t('Your new password must be at least ' + minpwdlen+ ' characters');
    //         // Refer template.php for edit-profile-pwdlen-error

    //     }
    //     else{
    //         minpwdlen=6;
    //         minpwdlen_inwords ="six";

    //     }
    // }

    if($('#changepwd-error-div').css('display') == 'block') {
        $('#changepwd-error-div').css('display','none');
    }

    var form_error = 0;
    var form_error_msg = '';
    var container = $('#changepwd-content-body');
    var current_pwd = $('#edit-changepwd-current').val();
    var new_pwd = $('#edit-pass-pass1').val();
    var confirm_pwd = $('#edit-pass-pass2').val();
    var uid = $('#edit-profile-uid').val();
    var user_email = $('#edit-email').val();
    var user_name = $('#edit-username').val();

    var hasLetters = new_pwd.match(/[a-zA-Z]+/);
    var hasNumbers = new_pwd.match(/[0-9]+/);
    var hasPunctuation = new_pwd.match(/[^a-zA-Z0-9]+/);
    var hasCasing = new_pwd.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

    // start validate
    if(current_pwd == null || current_pwd == '') {
        form_error = 1;
        form_error_msg = $('#edit-profile-cpwd-error').val() + '<br>';
    }
    if(new_pwd == null || new_pwd == '') {
        form_error = 1;
        form_error_msg = form_error_msg + $('#edit-profile-npwd-error').val() + '<br>';
    }
    if(confirm_pwd == null || confirm_pwd == '') {
        form_error = 1;
        form_error_msg = form_error_msg + $('#edit-profile-cfpwd-error').val() + '<br>';
    }
    if(form_error == 0 && new_pwd != confirm_pwd) {
        form_error = 1;
        form_error_msg = $('#edit-profile-pwdmatch-error').val();
    }
    if(form_error == 0 && new_pwd.length < 8) {
        form_error = 1;
        form_error_msg = $('#edit-profile-pwdlen-error').val();
    }
    else{
        var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
        strength_pass = count > 1 ? "pass" : "fail";
            if(strength_pass == "fail"){
                form_error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                form_error = 1;
            }
    }


    // var error_msg_hdr = '<strong>'+$('#edit-profile-error-hdr').val()+'</strong><br>';
    // form_error_msg = error_msg_hdr + form_error_msg;
    // form_error_msg = form_error_msg + '<br><input type="button" name="closePopup" id="closePopup" value=" '+$('#edit-profile-error-showme').val()+' " />';

    if(form_error != 0) {
        $('#changepwd-error-div').html(form_error_msg);
        $('#changepwd-error-div').slideDown('slow');
    } else {
        var destination = $('#edit-profile-destination').val();
        $('#changepwd-processing-img').fadeIn('fast');
        $.post("/mytesla/change-password", {current_pass: current_pwd, new_pass: new_pwd, uid:uid, email:user_email, username:user_name}, function(data) {
            if(data.success == 'true') {
                window.location.href = destination + '?success=true';
            } else {
                $('#changepwd-error-div').html('Sorry, there was an error in saving your new password, please try again.');
                $('#changepwd-error-div').slideDown('slow');
                $('#changepwd-processing-img').css('display','none');
            }
        }, 'json');
    }

}

function submitUserEditForm(origin) {

    // validate the form fields
    var form_error = 0;
    var junk_data  = 0;
    var form_error_msg = '';
    var junk_data_msg  = '';
    var username      = $('#edit-username').val();
    var fname         = $('#edit-first-name').val();
    var lname         = $('#edit-last-name').val();
    var email         = $('#edit-mail').val();
    var phone         = $('#edit-phone').val();
    var mailing_addr1 = $('#edit-mailing-address-1').val();
    var mailing_city  = $('#edit-mailing-city').val();
    var mailing_zip   = $('#edit-mailing-zip').val();
    if($('#istextbox-mailing').length) {
        var state = $('#edit-mailing-state').val();
    }

    var contact_error        = 0;
    var altcontact_error     = 0;
    var aFields              = new Array();
    var aErrorFields         = new Array();
    var has_alt_contact      = 'false';
    var isowner              = 'false';
    var is_adding_altcontact = 'false';
    // alternate contact fields
    var ac_fname             = $('#edit-altcontact-firstname').val();
    var ac_lname             = $('#edit-altcontact-lastname').val();
    var ac_email             = $('#edit-altcontact-mail').val();
    var ac_phone             = $('#edit-altcontact-phone').val();
    var ac_addr1             = $('#edit-altmailing-address-1').val();
    var ac_city              = $('#edit-altmailing-city').val();
    var ac_zip               = $('#edit-altmailing-zip').val();
    if($('#istextbox-altmailing').length) {
        var ac_state = $('#edit-altmailing-state').val();
    }

    $('#profile-msg-div').css('display','none');
    $('#profile-alt-msg-div').css('display','none');

    if($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
        has_alt_contact = 'true';
    }

    if($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1') {
        is_adding_altcontact = 'true';
    }

    if($('#edit-profile-teslaAccountId').length && $('#edit-profile-teslaAccountId').val() != '') {
        isowner = 'true';
    }

    aFields.push('username');
    aFields.push('first-name');
    aFields.push('last-name');
    aFields.push('mail');
    aFields.push('phone');
    aFields.push('mailing-address-1');
    aFields.push('mailing-city');
    if(state) {
        aFields.push('mailing-state');
    }
    aFields.push('mailing-zip');

    if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
        aFields.push('altcontact-firstname');
        aFields.push('altcontact-lastname');
        aFields.push('altcontact-mail');
        aFields.push('altcontact-phone');
        aFields.push('altmailing-address-1');
        aFields.push('altmailing-city');
        if($('#istextbox-altmailing').length) {
            aFields.push('altmailing-state');
        }
        aFields.push('altmailing-zip');
    }

    for(var i=0;i<aFields.length;i++) {
        if($('label[for="edit-'+aFields[i]+'"]').length && $('label[for="edit-'+aFields[i]+'"]').attr('style')) {
            $('label[for="edit-'+aFields[i]+'"]').removeAttr('style');
        }
    }

    if(username == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-username-error').val() + '<br>';
        aErrorFields.push('username');
    }

    if(fname == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-fname-error').val() + '<br>';
        aErrorFields.push('first-name');
    }

    if(lname == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-lname-error').val() + '<br>';
        aErrorFields.push('last-name');
    }

    if(email == '') {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
        aErrorFields.push('email');
    } else if(email != '' && checkEmail(email) == false) {
        form_error = 1;
        contact_error++;
        form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
        aErrorFields.push('email');
    }

    // validate if is owner, then validate mailing address
    if(isowner == 'true' || has_alt_contact == 'true') {

        if(phone == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-phone-error').val() + '<br>';
            aErrorFields.push('phone');
        }
        if(mailing_addr1 == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-mailingaddr1-error').val() + '<br>';
            aErrorFields.push('mailing-address-1');
        }
        if(mailing_city == '') {
            form_error = 1;
            contact_error++;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-city-error').val() + '<br>';
            aErrorFields.push('mailing-city');
        }
        if (/[\+\-\!\@\#\$\%\^\&\*\(\)\;\\\/\<\>\{\}\[\]\?\¿\=]+/.test(mailing_city)) {
            form_error = 1;
            junk_data = 1;
            junk_data_msg = Drupal.t('City contains invalid characters.');
            aErrorFields.push('mailing-city');
        }
        if(state) {
            if(mailing_state == '') {
                form_error = 1;
                contact_error++;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-state-error').val() + '<br>';
                aErrorFields.push('mailing-state');
            }
        }
        if($('#edit-mailing-country').val() != 'CN') {
            if(mailing_zip == '') {
                form_error = 1;
                contact_error++;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-zip-error').val() + '<br>';
                aErrorFields.push('mailing-zip');
            }
        }
    }

    // start validation of alternate contact fields only if any one field has been filled in
    // validate only if at least one text field is filled out at the time of submit
    // if((ac_fname != undefined && ac_fname != '') || (ac_lname != undefined && ac_lname != '') || (ac_email != undefined && ac_email != '') || (ac_phone != undefined && ac_phone != '') || (ac_addr1 != undefined && ac_addr1 != '') || (ac_city != undefined && ac_city != '') || (ac_zip != undefined && ac_zip != '')) {
    if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
        if(ac_fname == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-fname-error').val() + '<br>';
            aErrorFields.push('altcontact-firstname');
            altcontact_error++;
        }
        if(ac_lname == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-lname-error').val() + '<br>';
            aErrorFields.push('altcontact-lastname');
            altcontact_error++;
        }
        if(ac_email == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
            aErrorFields.push('altcontact-mail');
            altcontact_error++;
        } else if(ac_email != '' && ac_email != undefined && checkEmail(ac_email) == false) {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-email-error').val() + '<br>';
            aErrorFields.push('altcontact-mail');
            altcontact_error++;
        }
        if(ac_phone == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-phone-error').val() + '<br>';
            aErrorFields.push('altcontact-phone');
            altcontact_error++;
        }
        if(ac_addr1 == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-mailingaddr1-error').val() + '<br>';
            aErrorFields.push('altmailing-address-1');
            altcontact_error++;
        }
        if(ac_city == '') {
            form_error = 1;
            form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-city-error').val() + '<br>';
            aErrorFields.push('altmailing-city');
            altcontact_error++;
        }
        if (/[\+\-\!\@\#\$\%\^\&\*\(\)\;\\\/\<\>\{\}\[\]\?\¿\=]+/.test(ac_city)) {
            form_error = 1;
            junk_data = 2;
            junk_data_msg = Drupal.t('City contains invalid characters.');
            aErrorFields.push('altmailing-city');
        }
        if($('#istextbox-altmailing').length) {
            if(ac_state == '') {
                form_error = 1;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-state-error').val() + '<br>';
                aErrorFields.push('altmailing-state');
                altcontact_error++;
            }
        }
        if($('#edit-mailing-country').val() != 'CN') {
            if(ac_zip == '') {
                form_error = 1;
                form_error_msg = form_error_msg + '&nbsp;' + $('#edit-profile-zip-error').val() + '<br>';
                aErrorFields.push('altmailing-zip');
                altcontact_error++;
            }
        }
    }

    if(form_error != 0) {
        // remove existing divs
        if($('#page-disable').length) {
            $('#page-disable').remove();
        }
        if($('#error-popup').length) {
            $('#error-popup').remove();
        }
        if($('#processing-div').length && $('#processing-div').css('display') == 'block') {
            $('#processing-div').css('display','none');
        }

        var error_message = Drupal.t('A required field has been left blank. It is highlighted below in red.');
        var alt_error_message = Drupal.t('A required field has been left blank. It is highlighted below in red.');
        if(contact_error > 1) {
            error_message = Drupal.t('Some required fields have been left blank. They are highlighted below in red.');
        }
        if(altcontact_error > 1) {
            alt_error_message = Drupal.t('Some required fields have been left blank. They are highlighted below in red.');
        }

        // weigh which section has more errors and scroll to it.
        if(contact_error != 0) {
            var scrollto_div = 'profile-msg-div';
            $('#profile-msg-div').css('display','block');
            $('#profile-msg-content-div').html(error_message);
            $('#profile-msg-content-div').fadeIn('slow');
            // $('#mailing-country-overlay').fadeOut('slow',function() {
                $('#mailing-country-overlay').remove();
            // });
        } else {
            if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                var scrollto_div = 'profile-alt-msg-content-div';
                $('#profile-alt-msg-div').css('display','block');
                $('#profile-alt-msg-content-div').html(alt_error_message);
                $('#profile-alt-msg-content-div').fadeIn('slow');
            }
        }

        if (junk_data != 0) {
            if (junk_data == 2) {
                var scrollto_div = 'profile-alt-msg-content-div';
                $('#profile-alt-msg-div').css('display','block');
                $('#profile-alt-msg-content-div').html(junk_data_msg);
                $('#profile-alt-msg-content-div').fadeIn('slow');

            } else {
                var scrollto_div = 'profile-msg-div';
                $('#profile-msg-div').css('display','block');
                $('#profile-msg-content-div').html(junk_data_msg);
                $('#profile-msg-content-div').fadeIn('slow');
                $('#mailing-country-overlay').remove();
            }
        }

        if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
            $('#altmailing-country-overlay').remove();
        }

        $("html, body").animate({ scrollTop: ($("#"+scrollto_div).offset().top)-20 }, "slow",function() {
            if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                changeProfileCountry('profile-alt-mailing-addr','altmailing');
            }
            if(!$('#mailing-country-overlay').length) {
                setTimeout(function() {
                    setMailingCountryOverlay('submitUserEditForm');
                },1000);
            }
            if(has_alt_contact == 'true' || is_adding_altcontact == 'true') {
                setTimeout(function() {
                    setAltMailingCountryOverlay('error');
                },1000);
            }
        });

        // $('#page').append('<div id="page-disable"></div>');
        // $('#page').append('<div id="profile-error"></div>');
        // var page_height = $(document).height();
        // var page_width = $(window).width();
        // var window_height = $(window).height();
        // var y_position = ((window_height/2));
        // var x_position = (page_width/2);
        // var div_width = $('#profile-error').width();
        // var div_height = $('#profile-error').height();
        // div_width = div_width/2;
        // div_height = div_height/2;
        // y_position = y_position - div_height;
        // x_position = x_position - div_width;
        // $('#profile-error').css('top',y_position);
        // $('#profile-error').css('left',x_position);

        // var error_msg_hdr = '<p><strong>'+$('#edit-profile-error-hdr').val()+'</strong></p>';
        // form_error_msg = error_msg_hdr + form_error_msg;
        // form_error_msg = form_error_msg + '<br><input type="button" name="closePopup" id="closePopup" value=" '+$('#edit-profile-error-showme').val()+' " />';
        // $('#profile-error').html(form_error_msg);

        if(aErrorFields.length > 0) {
            for(var i=0;i<aErrorFields.length;i++) {
                $('label[for="edit-'+aErrorFields[i]+'"]').attr('style','font-weight:bold;color:#cc0000;');
            }
        }

        // $('#page-disable').css('height',page_height);
        // $('#page-disable').fadeIn('slow', function() {
        //     $('#profile-error').css('display','block');
        // });

        // $('#closePopup').click(function() {
        //     $('#profile-error').css('display','none');
        //     $('#page-disable').fadeOut('slow',function() {
        //         $(this).remove();
        //         $('#profile-error').remove();
        //     });
        // });

        // $('#page-disable').click(function() {
        //     $('#profile-error').css('display','none');
        //     $('#page-disable').fadeOut('slow',function() {
        //         $(this).remove();
        //         $('#profile-error').remove();
        //     });
        // });

    } else {
        // show the "doing something" graphic overlay
        if(!origin) {
            showProcessingDiv('');
        }

        // remove the state/country overlays
        if($('#mailing-country-overlay').length) {
            $('#mailing-country-overlay').css('display','none');
            $('#mailing-state-overlay').css('display','none');
        }
        if($('#altmailing-country-overlay').length) {
            $('#altmailing-country-overlay').css('display','none');
            $('#altmailing-state-overlay').css('display','none');
        }

        // submit the form
        debug.error( $('#user-profile-form').serialize() );
        document.getElementById('user-profile-form').submit();

    }
}

// function submitSignInForm(mode,destination) {
//     if(mode == 'join') {
//         window.location.href=destination;
//     } else {
//         document.forms['user-login'].submit();
//     }
// }

function submitLoginForm(mode,destination) {

    var form_error = 0;
    var username_error = 0;
    var pass_error = 0;
    var display_msg = '';
    var top_offset = -30;

    if(mode == 'join') {
        window.location.href=destination;
    } else {

        if($('#edit-name')) {
            if($('#edit-name').val() == '') {
                form_error = 1;
                username_error = 1;
                username_error_msg = 'Please enter a username';
                if(Drupal.settings.tesla.country == 'DE') {
                    username_error_msg = 'Benutzername eingeben.';
                } else if(Drupal.settings.tesla.country == 'FR') {
                    username_error_msg = 'Veuillez entrer un username.';
                } else if(Drupal.settings.tesla.country == 'IT') {
                    username_error_msg = 'Per favore inserisci uno username.';
                } else if(Drupal.settings.tesla.country == 'NL') {
                    username_error_msg = 'Geef een gebruikersnaam in.';
                } else if(Drupal.settings.tesla.country == 'JP') {
                    username_error_msg = 'ユーザー名を入力してください。';
                }
            }
        }

        if($('#edit-pass')) {
            if($('#edit-pass').val() == '') {
                form_error = 1;
                pass_error = 1;
                pass_error_msg = 'Please enter a password';
                if(Drupal.settings.tesla.country == 'DE') {
                    pass_error_msg = 'Bitte geben Sie ein gültiges Passwort ein.';
                } else if(Drupal.settings.tesla.country == 'FR') {
                    pass_error_msg = 'Veuiller entrer un mot de passe valide.';
                } else if(Drupal.settings.tesla.country == 'IT') {
                    pass_error_msg = 'Per favore inserisci una password valida.';
                } else if(Drupal.settings.tesla.country == 'NL') {
                    pass_error_msg = 'Geef een wachtwoord in.';
                } else if(Drupal.settings.tesla.country == 'JP') {
                    pass_error_msg = '有効なパスワードを入力してください。';
                }
            }
        }

        if(form_error > 0) {

            if($('#messages-wrapper').length) {
                if($('#messages-wrapper').css('display') == 'block') {
                    $('#messages-wrapper').remove();
                }
            }

            if(username_error == 1) {
                $('label.edit-name').attr('class','label-error');
                display_msg = username_error_msg;
            }

            if(pass_error == 1) {
                $('label.edit-pass').attr('class','label-error');
                display_msg = pass_error_msg;
                top_offset = 55;
            }

            if(username_error == 1 && pass_error == 1) {
                display_msg = username_error_msg + '<br>' + pass_error_msg;
                top_offset = -26;
            }

            display_msg = Drupal.t('We could not sign you in using the<br/>information you provided. Please try again.');
            top_offset = 55;

            $('#content-body').append('<div id="form-error-popup-rt"></div>');
            var pop_position = $('#edit-name').position();
            var x_position = pop_position.left-270;
            var y_position = pop_position.top+top_offset;
            $('#form-error-popup-rt').css('left',x_position);
            $('#form-error-popup-rt').css('top',y_position);
            $('#form-error-popup-rt').css('width','225px');
            $('#form-error-popup-rt').css('padding-left','15px');
            $('#form-error-popup-rt').css('padding-right','30px');
            $('#form-error-popup-rt').css('padding-top','20px');
            $('#form-error-popup-rt').css('font-size','11px');
            $('#form-error-popup-rt').css('line-height','15px');
            $('#form-error-popup-rt').html(display_msg);
            $('#form-error-popup-rt').fadeIn('fast');
        } else {
            // create login and username cookies
            var tesla_cookie = readCookie('tesla_login');
            var tesla_username_cookie = readCookie('tesla_username');
            // create username save cookie
            // create username for all cases
            var tmp_cookie_val = $('#edit-name').val();
            tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
            createCookie('tesla_username',tmp_cookie_val,360);

            // create tesla_login cookie based on selection
            if($('#keep_signed_in').val() == '1') {
                // create teslalogin cookie
                if(!tesla_cookie) {
                    createCookie('tesla_login','true',360);
                }
            } else {
                if(tesla_cookie) {
                    eraseCookie('tesla_login');
                }
            }

            var login_email_username = $('#edit-name').val();
            var login_register_url = $('#register-url').val();
            $.post("/user/check-shell", { email_username:login_email_username },
                function(data) {
                    if(data == 'shell') {
                        location.href=login_register_url+'?email='+login_email_username+'&shell=true';
                    } else {
                        document.forms['user-login'].submit();
                    }
            });

        }
    }

}

// check fields on each key input & only activate continue button when fields are filled
function checkCreateAcctFields(origin) {

    var form_error = 0;

    // WEB-8822 / TFM
    // --------------
    // var uname = $('#edit-name').val();
    // --------------

    var email = $('#edit-mail').val();

    // trim and re-assign email + username only on blur
    $('#edit-mail').blur(function () {
         $('#edit-mail').val( trim($('#edit-mail').val()));
    });


    // WEB-8822 / TFM
    // --------------
    // $('#edit-name').blur(function () {
    //      $('#edit-name').val( trimWS($('#edit-name').val()));
    // });
    // --------------

    if (origin) {
        var fname = $('#edit-first-name').val();
        var lname = $('#edit-last-name').val();
        var password = $('#edit-pass-pass1').val();
        var password_confirm = $('#edit-pass-pass2').val();

        // WEB-8822 / TFM
        // --------------
        if ($("#edit-mollom-captcha-wrapper").length) {
            var captcha = $('#edit-mollom-captcha').val();
        }
        // --------------

        if (fname === '') {
            form_error = 1;
        }
        else if (lname === '') {
            form_error = 1;
        }
        else if (password === '') {
            form_error = 1;
        }
        else if (password_confirm === '') {
            form_error = 1;
        }
        // WEB-8822 / TFM
        // --------------
        else if (captcha === '') {
            form_error = 1;
        }
        // --------------

        if (
            $('.password-description').length &&
            $('.password-description').css('display') == 'block' &&
            $('#edit-pass-pass2').length &&
            $('#edit-pass-pass2').val() != '')
        {
            $('.password-description').css('display','none');
        }

    }

    // WEB-8822 / TFM
    // --------------
    // if(uname == '') {
    //     form_error = 1;
    // }
    // --------------

    if(checkEmail(email) == false) {
        form_error = 1;
    }

    // WEB-9309 / TFM
    // ------------------------
    // if(form_error == 1) {
    //     // if($('#messages-wrapper').length) {
    //     //     $('#messages-wrapper').fadeOut('slow');
    //     // }
    //     $('#btnCreateAccount').css('opacity','0.5');
    //     $('#btnCreateAccount').unbind('click');
    //     $('#btnCreateAccount').unbind('keyup');
    // } else {

    if (form_error === 0) {
    // ------------------------

        $('#btnCreateAccount').unbind('click');
        $('#btnCreateAccount').unbind('keyup');
        $('#btnCreateAccount').css('opacity','1');
        $('#btnCreateAccount').click(function() {
            submitCreateAcctForm(origin);
        });
        $('#btnCreateAccount').keyup(function(event) {
            checkKeyPressed(event);
        });
    }

}

// submit create account form
function submitCreateAcctForm(origin) {
    var form_error = 0;

    // WEB-8822 / TFM
    // --------------
    var uname_error = 0;
    // --------------

    var email_error = 0;

    // WEB-8822 / TFM
    // --------------
    var uname = $('#edit-name').val();
    // --------------

    var email = $('#edit-mail').val();
    var is_shell = $('#edit-is-shell').val();
    if(origin) {
        var fname = $('#edit-first-name').val();
        var lname = $('#edit-last-name').val();
        var password = $('#edit-pass-pass1').val();
        var password_confirm = $('#edit-pass-pass2').val();

        var hasLetters = password.match(/[a-zA-Z]+/);
        var hasNumbers = password.match(/[0-9]+/);
        var hasPunctuation = password.match(/[^a-zA-Z0-9]+/);
        var hasCasing = password.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);

        if(fname == '') {
            form_error = 1;
        }
        if(lname == '') {
            form_error = 1;
        }
        if(password == '') {
            form_error = 1;
        }
        if(password_confirm == '') {
            form_error = 1;
        }
    }

    // WEB-8822 / TFM
    // --------------
    // if(uname == '') {
    //     form_error = 1;
    //     uname_error = 'This is not a valid username format. Please try again.';
    // }
    // --------------

    if(checkEmail(email) == false) {
        form_error = 1;
        email_error = 'This is not a valid email address format. Please try again.';
    }
    if(password != password_confirm) {
        form_error = 1;
    }
    if(form_error == 0) {
        if(password.length < 8) {
            error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
            form_error = 1;
        } else if(password == uname) {
            error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
            form_error = 1;
        }
        else{
            var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
            strength_pass = count > 1 ? "pass" : "fail";
                if(strength_pass == "fail"){
                    error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                    form_error = 1;
                }
        }
    }

    if(form_error == 1) {

        if($('#pass-error').length) {
            $('#pass-error').remove();
        }
        if($('#messages-wrapper').length) {
            $('#messages-wrapper').css('display','none');
        }
        // if($('.password-description').length) {
        //     $('.password-description').css('display','none');
        // }

        $('#btnCreateAccount').unbind('click');

        if(!$('.password-description').length) {
            var position = $('#edit-pass-pass1').position();
            var x_offset = 0;
            var y_offset = 0;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');

            var pos_x = position.left + x_offset;
            var pos_y = position.top + y_offset;

            if($('#pass-error').length) {
                $('#pass-error').remove();
            }
            // start fade in error popup

            $('#main-content').append('<div id="pass-error"></div>');
            $('#pass-error').html(error_msg);
            $('#pass-error').css('top',pos_y);
            $('#pass-error').css('left',pos_x);
            $('#pass-error').fadeIn('slow');
        }


    } else {
        // create login and username cookies
        var tesla_cookie = readCookie('tesla_login');
        var tesla_username_cookie = readCookie('tesla_username');
        var tesla_email_cookie = readCookie('tesla_email');

        // create username save cookie
        // in all cases
        if(tesla_username_cookie) {
            eraseCookie('tesla_username');
        }
        var tmp_cookie_val = $('#edit-name').val();
        tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
        createCookie('tesla_username',tmp_cookie_val);

        // create email save cookie
        // in all cases
        if(tesla_email_cookie) {
            eraseCookie('tesla_email');
        }
        var tmp_cookie_val = $('#edit-mail').val();
        tmp_cookie_val = encodeURIComponent(tmp_cookie_val);
        createCookie('tesla_email',tmp_cookie_val);

        // create login cookie only if selected, otherwise, clear it.
        if($('#keep_signed_in').val() == '1') {
            // create teslalogin cookie
            if(tesla_cookie) {
                eraseCookie('tesla_login');
            }
            createCookie('tesla_login','true',15);

        } else {
            // otherwise erase teslalogin cookie
            if(tesla_cookie) {
                eraseCookie('tesla_login');
            }
        }
        if(is_shell && is_shell == 'true') {
            debug.log('set the form action');
            var form_action = $('#edit-shell-url').val();
            $('#user-register').attr('action',form_action);
        }

        document.forms['user-register'].submit();

    }
}

// check email regex, includes "+" symbol for gmail
function checkEmail(email) {
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    if(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

// trim white-space ie8 compatible
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}
function trim(string) {
    return string.trim();
}

// generic js back
function backBtnSubmit(trigger) {
    var destination;
    if (typeof trigger == 'object') {
        destination = $(trigger).data('destination');
        if (destination) {
            location.href = Drupal.settings.tesla.localePrefix + destination;
        }
    }
    else if (typeof trigger == 'string' && trigger) {
        if (trigger == 'drive_orientation') {
            destination=$('#edit-drive-back-url').val();
        }
        else if (trigger == 'basic_info') {
            destination=$('#edit-basic-back-url').val();
        }
        else {
            destination = Drupal.settings.tesla.localePrefix + '/own';
        }
        location.href = destination;
    } else {
        history.back();
    }
}

// submit login form if enter btn is pressed
function checkKeyPressed(e,method) {
    var unicode=e.keyCode? e.keyCode : e.charCode;
    if (unicode == 13) {
        if (document.getElementById('page-user-login')) {
            submitLoginForm('login', null, e);
        }
        else if (document.getElementById('change-reservation-form')) {
            submitChangeReservationForm(method);
            //document.forms['change-reservation-form'].submit();
        }
        else if (document.getElementById('tesla-buy-paymethod-form')) {
            submitPaymentForm();
            //document.forms['tesla-buy-paymethod-form'].submit();
        }
        else if (document.getElementById('tesla-buy-basic-form')) {
            submitBasicForm(method);
            //document.forms['tesla-buy-basic-form'].submit();
        }
        else if (document.getElementById('buy-form-complete-account')) {
            submitCompleteAcctForm();
        }
        else if (document.getElementById('user-pass-reset')) {
            checkResetPasswordFields('submit');
        }
        else if ($('*[id*=page-user-reset-]').length) {
            checkResetPasswordFields();
        }
        else if ($('#page-user-register').length) {
            submitCreateAcctForm('create_account');
        }
        else if ($('#page-user-edit').length || $('#page-user-me-edit').length) {
            submitUserEditForm();
        }
        else if ($('#page-booking-payment').length && (method == 'billing-btnnext-cont' || method == 'billing-btnnext-nocc' || method == 'billing-btnnext-achcont' || method == 'billing-terms-checkbox-div')) {
            submitBookingPaymentForm();
        }
    }
    else if (unicode == 32) {
        if ($('#res_agreement_div').length && !method) {
            setTermsCheckBox();
        }
        if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_div') {
            setGTUCheckBox();
        }
        if ($('#keep_signed_in').length && method == 'keep_signedin_div') {
            setCreateAcctCheckBox();
        }
        if ($('#get_teslaupdates_div').length && method == 'get_teslaupdates_alt_div') {
            setGTUCheckBox('altmailing');
        }
        if (document.getElementById('buy-form-complete-account')) {
            setCreateAcctCheckBox();
        }
        if ($('#billing-terms-checkbox-div').length && method == 'billing-terms-checkbox-div') {
            setACHPaymentCheckBox();
        }
        if ($('#billing-ach-checkbox-div').length && method == 'billing-ach-checkbox-div') {
            setACHPaymentCheckBox();
        }
    }
}

// display processing overlay
function showProcessingDiv(method) {

    // start fade in error popup
    var processing_img = '<img src="/tesla_theme/images/processing-graphic.gif" />';
    var processing_msg = '';
    $('#page').append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var window_height = $(window).height();
    var scrollLen = $(window).scrollTop();
    var y_position = (window_height/2)-150;
    y_position = y_position + scrollLen;
    $('#page-disable').css('height',page_height);
    var page_width = $(window).width();
    var x_position = (page_width/2)-250;
    $('#page-disable').css('z-index','9998');
    $('#page-disable').css('filter','alpha(opacity=60)');

    //$('#page').append('<div id="processing-div"></div>');
    $('#page').append(document.getElementById('processing-div'));
    $('#processing-div').css('top',y_position);
    $('#processing-div').css('left',x_position);
    // show custom message based on method var
    if(method == 'pp') {
        // processing_div_html = '<img src="/tesla_theme/images/own/buy_paypal.jpg" />';
        // processing_div_html = processing_div_html + '<p>Please wait, you are being sent to PayPal to complete your reservation.</p>';
        // processing_div_html = processing_div_html + '<input type="button" name="cancel" id="paypal_cancel" value=" Cancel " onclick="cancelPaypalSubmit();" />';
        $('#processing-img').css('display','none');
        processing_msg = 'Please wait, you are being sent to PayPal<br>to complete your reservation.';
        //processing_msg = processing_msg + '<div id="btnCancel" class="btnCancel" align="center" onmouseover="makeCursor(this);" onclick="ppCancel();" style="cursor: pointer;">CANCEL</div>';
    }

    if(processing_msg != '') {
        $('#processing-text-p').html(processing_msg);
    }
    $('#page-disable').fadeIn('slow', function() {
        //$('#processing-div').html(processing_div_html);
        $('#processing-div').css('display','block');
    });

    /*$('#page-disable').click(function() {
        killBuyProcessingDiv();
    });*/

}
// remove processing div
function killProcessingDiv() {
    $('#page-disable').remove();
    $('#processing-div').remove();
}

function checkTextAreaLength(textAreaObj,maxLen) {
    var currentLength = textAreaObj.value.length;
    var currentValue = textAreaObj.value;
    var newValue = '';
    var charsRemaining = maxLen - currentLength;
    if(currentLength > maxLen) {
        newValue = currentValue.substring(0,maxLen);
        document.getElementById(textAreaObj.id).value=newValue;
    }
    if(charsRemaining < 0) {
        charsRemaining = 0;
    }
    document.getElementById(textAreaObj.id+'_chars').value = charsRemaining;
}

function gotoDesignStudio(model,locale,params) {
    var destination = '';
    var subdest = 'design/';
    if (model == 'mx' || model == 'mxs') {
        subdest = '';
    }
    if (locale && locale != '' && locale != 'en_US') {
        if(locale == 'ja_JP') {
            locale = 'jp';
        }
        if(locale == 'zh_CN') {
            locale = 'cn';
        }
    }
    if (locale != '') {
        destination = '/'+model+'/'+subdest;
    } else {
        destination = '/'+locale+'/'+model+'/'+subdest;
    }
    if (params != '') {
        destination += '?' + params;
    }
    window.location.href=destination;
}

function gotoURL(destination,locale) {

    if(locale && locale != '' && locale != 'en_US') {
        if(locale == 'ja_JP') {
            locale = 'jp';
        }
        if(locale == 'zh_CN') {
            locale = 'cn';
        }
        window.location.href='/'+locale+'/'+destination;
    } else {
        window.location.href='/'+destination;
    }

}

// mytesla profile js
function setGTUCheckBox(id) {
    var checkbox = 'edit-get-teslaupdates-check';
    var image = 'get-teslaupdates-checkbox';
    if(id) {
        if(id == 'gtu_div') {
            checkbox = 'newsletter';
            image = 'get-teslaupdates-checkbox';
        } else {
            checkbox = 'edit-get-teslaupdates-alt-check';
            image = 'get-teslaupdates-alt-checkbox';
        }
    }
    if($('#'+checkbox).length) {
        if($('#'+checkbox).val() == '0') {
            $('#'+checkbox).val('1');
            $('#'+image).attr('src','/tesla_theme/images/own/own-terms-checkbox-on.png');
        } else {
            $('#'+checkbox).val('0');
            $('#'+image).attr('src','/tesla_theme/images/own/own-terms-checkbox-off.png');
        }
    }
}

function openAltContactDiv(scroll) {
    changeProfileCountry('profile-alt-mailing-addr','altmailing');
    if($('#edit-profile-hasalt-contact').val() == 'false') {
        $('#edit-profile-addingalt-contact').val(1);
        // $('#btnSelectDO').unbind('click');
    }
    $('#edit-profile-hasalt-contact').val('true');
    // checkProfileRequiredFields('open');
    if($('#profile-alternate-contact').length) {
        if($('#profile-alternate-contact').css('display') == 'none') {
            var altcontactlabel1 = $('#altcontact_label_1').val();
            var altcontactlabeltmp = $('#edit-profile-addcontact-tmp').val();
            $('#profile-addremove-icon').css('background-image','url(/tesla_theme/images/icn_removecontact_32x32.png)');
            $('#profile-addremove-icon').css('float','right');
            $('#profile-addremove-icon').css('backgroundPosition','0px -2px');
            // $('#profile-addremove-icon').css('right','-20');
            $('#profile-addremove-title').css('float','right');
            $('#profile-addremove-title').html(altcontactlabel1);
            $('#profile-addremove-icon').before('<div id="profile-addremove-title-tmp"></div>');
            $('#profile-addremove-title-tmp').html(altcontactlabeltmp);
            $('#profile-alternate-contact').slideDown('slow',function() {
                // set position of country dropdown overlay
                var altCountryPosition = $('#edit-altmailing-country').position();
                var altCountryPositionX = altCountryPosition.left-3;
                var altCountryPositionY = altCountryPosition.top;
                var alt_ctry_code = $('#edit-altmailing-country').val().toLowerCase();
                var alt_ctry_label = $('#edit-altmailing-country option:selected').text().substring(0,24);
                $('#altmailing-country-overlay').css('left',altCountryPositionX);
                $('#altmailing-country-overlay').css('top',altCountryPositionY);
                // if locale supported country, show flag in dropdown
                if(alt_ctry_code == 'us' || alt_ctry_code == 'ca' || alt_ctry_code == 'au' || alt_ctry_code == 'at' || alt_ctry_code == 'be' || alt_ctry_code == 'dk' || alt_ctry_code == 'de' || alt_ctry_code == 'fr' || alt_ctry_code == 'gb' || alt_ctry_code == 'it' || alt_ctry_code == 'nl' || alt_ctry_code == 'ch' || alt_ctry_code == 'hk' || alt_ctry_code == 'jp' || alt_ctry_code == 'cn') {
                    $('#altmailing-country-overlay').html('<img src="/tesla_theme/images/icn_'+alt_ctry_code+'_flag_no_shadow.png" width="16" height="11" class="basic-flag" />&nbsp;'+alt_ctry_label);
                }
                // set position of state/province dropdown overlay
                if(!$('#altmailing-province-istextbox').length && $('#edit-altmailing-state').length) {
                    var provPosition = $('#edit-altmailing-state').position();
                    var provPositionX = provPosition.left - 2;
                    var provPositionY = provPosition.top + 2;
                    $('#altmailing-state-overlay').css('left',provPositionX);
                    $('#altmailing-state-overlay').css('top',provPositionY);
                }

                if(!scroll) {
                    $("html, body").animate({ scrollTop: ($("#profile-addremove-div").offset().top)-30 }, "slow");
                }

                $('#get_teslaupdates_alt_div').fadeIn('fast');
                // $('#altmailing-country-overlay').fadeIn('slow');
                setAltMailingCountryOverlay('origin');
                if($('#edit-profile-hasalt-contact').length && $('#edit-profile-hasalt-contact').val() == 'true') {
                    $('#altmailing-country-overlay').fadeIn('slow');
                }
                // if($('#edit-profile-addingalt-contact').length && $('#edit-profile-addingalt-contact').val() == '1') {
                //     $('#edit-altcontact-firstname').focus();
                // }
                // $('#altmailing-state-overlay').fadeIn('slow');
            });
            $('#profile-addremove-icon').unbind('click');
            $('#profile-addremove-icon').click(function() {
                removeAltContactDiv();
            });
            $('#profile-addremove-title').unbind('click');
            $('#profile-addremove-title').click(function() {
                removeAltContactDiv();
            });
        }
    }
}

function removeAltContactDiv() {
    if($('#profile-alternate-contact').length) {
        if($('#profile-alternate-contact').css('display') == 'block') {
            if($('#edit-profile-addingalt-contact').val() == '1') {
                $('#edit-profile-addingalt-contact').val(0);
            }
            if($('#edit-profile-altcontactid').length && $('#edit-profile-altcontactid').val() != '') {
                // start fade in error popup
                $('#page').append('<div id="page-disable"></div>');
                var page_height = $(document).height();
                var page_width = $(window).width();
                var window_height = $(window).height();
                var y_position = ((window_height/2));
                var x_position = (page_width/2);
                var div_width = $('#profile-removeprompt-div').width();
                var div_height = $('#profile-removeprompt-div').height();
                div_width = div_width/2;
                div_height = div_height/2;
                y_position = y_position - div_height;
                x_position = x_position - div_width;

                $('#page-disable').css('height',page_height);

                $('#profile-removeprompt-div').css('left',x_position);
                $('#profile-removeprompt-div').css('top',y_position);
                $('#profile-popup-closex').css('left',x_position-23);
                $('#profile-popup-closex').css('top',y_position-23);

                $('#page-disable').fadeIn('slow', function() {
                    $('#profile-removeprompt-div').css('display','block');
                    $('#profile-popup-closex').css('display','block');
                    $('#profile-popup-closex').unbind('click');
                    $('#profile-popup-closex').click(function() {
                        $('#removeprompt-btn-confirm-cancel').trigger('click');
                    });
                });
            } else {
                clearProfileAltContactFields();
                $('#profile-alt-msg-div').fadeOut('fast');
                $('#edit-profile-hasalt-contact').val('false');
                $('#profile-alt-mailing-addr').fadeOut('fast');
                $('#get_teslaupdates_alt_div').fadeOut('fast');
                $('#altmailing-state-overlay').remove();
                $('#altmailing-country-overlay').fadeOut('fast',function() {
                    $('#profile-alternate-contact').slideUp('slow',function() {
                        $('#profile-addremove-title-tmp').remove();
                        $('#profile-addremove-icon').css('background-image','url(/tesla_theme/images/icn_addcontact_32x32.png)');
                        $('#profile-addremove-icon').css('background-position','-10px 0px');
                        $('#profile-addremove-icon').css('float','left');
                        $('#profile-addremove-title').css('float','left');
                        $('#profile-addremove-title').html($('#altcontact_label_2').val());
                        $("html, body").animate({ scrollTop: ($("#content-body").offset().top) }, "slow");
                        checkProfileRequiredFields('close');
                        // set the click function for re-opening altcontact div
                        $('#profile-addremove-icon').unbind('click');
                        $('#profile-addremove-icon').click(function() {
                            openAltContactDiv();
                        });
                        $('#profile-addremove-title').unbind('click');
                        $('#profile-addremove-title').click(function() {
                            openAltContactDiv();
                        });
                    });
                });
                $('#altmailing-country-overlay').remove();
            }
        }
    }
}

function clearProfileAltContactFields() {
    var aReqd = new Array();
    aReqd.push('altcontact-firstname');
    aReqd.push('altcontact-lastname');
    aReqd.push('altcontact-mail');
    aReqd.push('altcontact-phone');
    aReqd.push('altcontact-firstname');
    aReqd.push('altmailing-address-1');
    aReqd.push('altmailing-address-2');
    if($('#altmailing-country').val() != 'JP') {
        aReqd.push('altmailing-city');
    }
    if($('#altmailing-province-istextbox').length) {
        aReqd.push('altmailing-state');
    }
    aReqd.push('altmailing-zip');

    for(var i=0;i<aReqd.length;i++) {
        $('#edit-'+aReqd[i]).val('');
    }

}

function openChangePwdDiv() {
    if($('#page-disable')) {
        $('#page-disable').remove();
    }
    // start fade in error popup
    $('#page').append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var page_width = $(window).width();
    var window_height = $(window).height();
    var y_position = ((window_height/2));
    var x_position = (page_width/2);
    var div_width = $('#profile-changepwd-div').width();
    var div_height = $('#profile-changepwd-div').height();
    div_width = div_width/2;
    div_height = div_height/2;
    y_position = y_position - div_height;
    x_position = x_position - div_width;

    $('#page-disable').css('height',page_height);

    $('#profile-changepwd-div').css('left',x_position);
    $('#profile-changepwd-div').css('top',y_position);
    $('#profile-popup-closex').css('left',x_position-23);
    $('#profile-popup-closex').css('top',y_position-23);

    $('#page-disable').fadeIn('slow', function() {
        $('#profile-changepwd-div').css('display','block');
        $('#edit-changepwd-current').focus();
        $('#profile-popup-closex').css('display','block');
        $('#profile-popup-closex').unbind('click');
        $('#profile-popup-closex').click(function() {
            $('#changepwd-btn-cancel').trigger('click');
        });
    });

}

function openChangePhotoDiv() {
    if($('#page-disable')) {
        $('#page-disable').remove();
    }
    // start fade in error popup
    $('#page').append('<div id="page-disable"></div>');
    var page_height = $(document).height();
    var page_width = $(window).width();
    var window_height = $(window).height();
    var y_position = ((window_height/2));
    var x_position = (page_width/2);
    var div_width = $('#profile-changephoto-div').width();
    var div_height = $('#profile-changephoto-div').height();
    div_width = div_width/2;
    div_height = div_height/2;
    y_position = y_position - div_height;
    x_position = x_position - div_width;
    // if($.browser.msie) {
    //     $('#page-disable').css('opacity','0.6');
    //     $('#page-disable').css('z-index','9999');
    //     $('#page').append($('#profile-changephoto-div'));
    //     $('#profile-changephoto-div').css('z-index','10000');
    // }

    $('#page-disable').css('height',page_height);

    $('#profile-changephoto-div').css('left',x_position);
    $('#profile-changephoto-div').css('top',y_position);
    $('#profile-popup-closex').css('left',x_position-23);
    $('#profile-popup-closex').css('top',y_position-23);

    $('#page-disable').fadeIn('slow', function() {
        $('#profile-changephoto-div').css('display','block');
        $('#profile-popup-closex').css('display','block');
        $('#profile-popup-closex').unbind('click');
        $('#profile-popup-closex').click(function() {
            $('#changephoto-btn-cancel').trigger('click');
        });
    });

}

function setProfileAltContactRadio(value) {
    if(value == 0) {
        $('#profile-contactprefs-radio1').css('background','url(/tesla_theme/images/bg_radio_on.png)');
        $('#profile-contactprefs-radio2').css('background','url(/tesla_theme/images/bg_radio_off.png)');
    } else {
        $('#profile-contactprefs-radio1').css('background','url(/tesla_theme/images/bg_radio_off.png)');
        $('#profile-contactprefs-radio2').css('background','url(/tesla_theme/images/bg_radio_on.png)');
    }
    if($('#contact_prefs').length) {
        $('#contact_prefs').val(value);
    }
}

function setCreateAcctCheckBox() {
    if($('#keep_signed_in').length) {
        if($('#keep_signed_in').val() == '0') {
            $('#keep_signed_in').val('1');
            $('#keep-signedin-checkbox').attr('src','/tesla_theme/images/own/own-terms-checkbox-on.png');
        } else {
            $('#keep_signed_in').val('0');
            $('#keep-signedin-checkbox').attr('src','/tesla_theme/images/own/own-terms-checkbox-off.png');
        }
    }
}

// function setCreateAcctSignInCheckBox() {
//     if($('#keep_signed_in').length) {
//         alert($('#edit-persistent-login').length);
//         $('#edit-persistent-login').prop('checked',true);
//         $('#edit-persistent-login').attr('checked',true);
//         $('#edit-persistent-login')[0].checked;
//         if($('#keep_signed_in').val() == '0') {
//             $('#keep_signed_in').val('1');
//             $('#keep-signedin-checkbox').attr('src','/tesla_theme/images/own/own-terms-checkbox-on.png');
//         } else {
//             $('#keep_signed_in').val('0');
//             $('#keep-signedin-checkbox').attr('src','/tesla_theme/images/own/own-terms-checkbox-off.png');
//         }
//     }
// }

function checkPassEmailField(origin) {
    var email = $('#edit-name').val();
    var form_error = 0;

    if ($('#edit-name').length) {

        if (!email) {
            form_error = 1;
        }
        else if (email == '') {
            form_error = 1;
        }
        else if (!origin && checkEmail(email) == false) {
            form_error = 1;
        }
        if ($('#edit-pass').length) {
            var password = $('#edit-pass').val();
            if(!password) {
                form_error = 1;
            } else if(password == '') {
                form_error = 1;
            }
        }

        if (form_error == 0) {
            $('#btnSelectDO').css('opacity','1');
            $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').click(function(e) {
                if (origin && origin == 'login') {
                    submitLoginForm('login', null, e);
                }
                else {
                    submitPassForm();
                }
            });
        }
        else {
            $('#btnSelectDO').css('opacity','0.5');
            $('#btnSelectDO').unbind('click');
        }
    }
}

function checkChinaResetPasswordFields() {
    var inputEmail = $('#edit-name').val().trim();
    var inputReCaptcha = $('#china_recpatcha').val().trim();
    var submitButton = $('#btnSelectDO');
    if (inputEmail && checkEmail(inputEmail) && inputReCaptcha.length == 5) {
        submitButton.css('opacity','1')
            .unbind('click')
            .click(function() {
                submitPassForm();
            });
    }
    else {
        submitButton.css('opacity','0.5').unbind('click');
    }
}

function checkChangePasswordFields(action) {

    var form_error = 0;
    var password = $('#edit-pwd').val();
    var password_confirm = $('#edit-pwd-confirm').val();
    var username = $('#edit-username').val();
    var error_msg = Drupal.t('Your passwords don\’t match. Please try again.');

    $('label[for="edit-pwd"]').css('color','#666666');
    $('label[for="edit-pwd-confirm"]').css('color','#666666');

    if(password == '' || password == null) {
        form_error = 1;
    }
    if(password_confirm == '' || password_confirm == null) {
        form_error = 1;
    }

    if(action == 'submit') {
        if(password != password_confirm) {
            form_error = 1;
        }
        if(form_error == 0) {
            if(password.match(/[a-z]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if(password.match(/[A-Z]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if(password.match(/[0-9]+/) == null) {
                error_msg = Drupal.t('Your password should contain a lowercase letter, an uppercase letter, and one number.');
                form_error = 1;
            } else if(password.length < 6) {
                error_msg = Drupal.t('Your password must be longer than 6 characters.');
                form_error = 1;
            } else if(password == username) {
                error_msg = Drupal.t('Your password cannot be the same as your username.');
                form_error = 1;
            }
        }
    }

    if(form_error == 0) {
        if(action != 'submit') {
            // submit form
            $('#btnSelectDO').css('opacity','1');
            $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').click(function() {
                checkChangePasswordFields('submit');
            });
        } else {
            if($('#pass-error').length) {
                $('#pass-error').remove();
            }
            // document.forms['user-pass-reset'].submit();
            var userid = $('#edit-uid').val();
            var container = $('#pass-reset-form-container');
            var page_origin = 'change';

            $.post("/user/reset-password", {uid: userid, pass: password, origin: page_origin},
            function(data) {
                if(data === 'error') {
                    error_msg = '<strong>'+Drupal.t('Reset Failed')+'</strong><br/>'+Drupal.t('there seems to have been an error saving your password. Please try again.');
                    setPassResetError('submit',error_msg);
                } else {
                    container.fadeOut(function() {
                        container.html(data);
                        container.fadeIn(function() {});
                    });
                }
            });
        }
    } else {
        setPassResetError(action,error_msg);
    }
}

function checkResetPasswordFields(action) {

    var form_error = 0;
    var password = $('#edit-pass-pass1').val();
    var password_confirm = $('#edit-pass-pass2').val();
    var username = $('#edit-username').val();
    var url_array = $('#edit-request_url').val().split('/');
    var timestamp = url_array.slice(-2)[0];
    var hash = url_array.slice(-2)[1];

    var error_msg = Drupal.t('Your passwords don\’t match. Please try again.');

    $('label[for="edit-pass"]').css('color','#666666');
    $('label[for="edit-pass-confirm"]').css('color','#666666');

    if(password == '' || password == null) {
        form_error = 1;
    }
    if(password_confirm == '' || password_confirm == null) {
        form_error = 1;
    }

    if(action == 'submit') {
        var hasLetters = password.match(/[a-zA-Z]+/);
        var hasNumbers = password.match(/[0-9]+/);
        var hasPunctuation = password.match(/[^a-zA-Z0-9]+/);
        var hasCasing = password.match(/[a-z]+.*[A-Z]+|[A-Z]+.*[a-z]+/);
        if(password != password_confirm) {
            form_error = 1;
        }
        if(form_error == 0) {
            if(password.length < 8) {
                error_msg = Drupal.t('Your password must be at least 8 characters long.');
                form_error = 1;
            } else if(password == username) {
                error_msg = Drupal.t('Your password cannot be the same as your username.');
                form_error = 1;
            }
            else{
                var count = (hasLetters ? 1 : 0) + (hasNumbers ? 1 : 0);
                strength_pass = count > 1 ? "pass" : "fail";
                    if(strength_pass == "fail"){
                        error_msg = Drupal.t('For your security, please provide a password at least eight characters long that contains at least one number and one letter.');
                        form_error = 1;
                    }
            }
        }
    }

    if(form_error == 0) {
        if(action != 'submit') {
            // submit form
            $('#btnSelectDO').css('opacity','1');
            $('#btnSelectDO').unbind('click');
            $('#btnSelectDO').click(function() {
                checkResetPasswordFields('submit');
            });
        } else {

            if($('#pass-error').length) {
                $('#pass-error').remove();
            }
            // document.forms['user-pass-reset'].submit();
            var userid = $('#edit-uid').val();
            var container = $('#pass-reset-form-container');
            var page_origin = 'reset';
            locale_prefix =  Drupal.settings.tesla.localePrefix; // We need this so t() strings get translated in tesla.buy.inc.
            $.post(locale_prefix +"/user/reset-password", {uid: userid, pass: password, origin: page_origin, hash: hash, timestamp: timestamp},
            function(data) {
                if(data === 'error') {
                    error_msg = '<strong>'+Drupal.t('Reset Failed')+'</strong><br/>'+Drupal.t('there seems to have been an error saving your password. Please try again.');
                    setPassResetError('submit',error_msg);
                } else {
                    container.fadeOut(function() {
                        container.html(data);
                        container.fadeIn(function() {});
                    });
                }
            });
        }
    } else {
        setPassResetError(action,error_msg);
    }

}

function changeChinaRecaptcha() {
    var img = new Image();
    img.src = '/get_recaptcha?t=' + new Date().getTime();
    img.onload = function() {
        $('#china-recaptcha-image').attr('src', img.src);
    }
}

function setPassResetError(action,error_msg) {
    if($('#password-description warning').length) {
        $('#password-description warning').css('display','none');
    }
    if(action == 'submit' && !$('.password-description.error').length) {
        if($('#page-user-change-pass').length) {
            var position = $('#edit-pass-pass1').position();
            var x_offset = -270;
            var y_offset = 55;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');
        } else {
            var position = $('#edit-pass-pass1').position();
            var x_offset = 520;
            var y_offset = 203;
            $('label[for="edit-pass-pass1"]').css('color','#cc0000');
            $('label[for="edit-pass-pass2"]').css('color','#cc0000');
        }

        var pos_x = position.left + x_offset;
        var pos_y = position.top + y_offset;

        if($('#pass-error').length) {
            $('#pass-error').remove();
        }
        // start fade in error popup

        $('#main-content').append('<div id="pass-error"></div>');
        $('#pass-error').html(error_msg);
        $('#pass-error').css('top',pos_y);
        $('#pass-error').css('left',pos_x);
        $('#pass-error').fadeIn('slow');
    } else {
        $('#btnSelectDO').css('opacity','0.5');
        $('#btnSelectDO').unbind('click');
    }
}

function submitPassForm(method) {

    if(method && method == 'cancel') {
        var dest = $('#destination').val();
        var locale_prefix = '';
        if(Drupal.settings.tesla.locale != 'en_US') {
            locale_prefix = Drupal.settings.tesla.locale;
            if(locale_prefix == 'ja_JP') {
                locale_prefix = 'jp';
            }
            if(locale_prefix == 'zh_CN') {
                locale_prefix = 'cn';
            }
            locale_prefix = '/' + locale_prefix;
        }

        dest = locale_prefix + '/user/login';
        window.location.href=dest;
    } else {
        document.forms['user-pass'].submit();
    }

}

function checkRefundMethod(obj) {
    var refund_type = obj.value;
    if($('#tracking_number_p').length) {
        if(refund_type != 'ck') {
            if($('#tracking_number_p').css('display') == 'block') {
                $('#tracking_number_p').fadeOut('slow');
            }
        } else {
            if($('#tracking_number_p').css('display') == 'none') {
                $('#tracking_number_p').fadeIn('slow');
            }
        }
    }
}

function setAchAcctType(elemId) {
    if($('#page-booking-payment').length || $('#page-own-paymethod').length || $('#page-servicesignup-payment').length || $('#page-order').length) {
        $('#billing-ach-accttype').val($('#'+elemId).attr('rel'));
        $('#paymethod_ach_checking').css('background-image','url(/tesla_theme/images/btn_radio_off.png)');
        $('#paymethod_ach_savings').css('background-image','url(/tesla_theme/images/btn_radio_off.png)');
        $('#paymethod_ach_corpchecking').css('background-image','url(/tesla_theme/images/btn_radio_off.png)');
        $('#'+elemId).css('background-image','url(/tesla_theme/images/btn_radio_on.png)');
    }

}

function toggleSubCheckBox(){
    if($('input[id=edit-submitted-subscriptions--c-1]').is(":checked")) {
        $('input[id=edit-submitted-subscriptions--c-1]').attr('checked', false);
        // $("[name*='is_get_tesla_update_checkbox_present']").val('false');
        $('#subsCheckbox').css('background-position', '0px 0px');
    }
    else {
        $('input[id=edit-submitted-subscriptions--c-1]').attr('checked', true);
        // $("[name*='is_get_tesla_update_checkbox_present']").val('true');
        $('#subsCheckbox').css('background-position', '0px -21px');
    }
}

// HOME PAGE
//if ($.fn.cycle) {
//  var heroLeft = 0;
//  $.fn.cycle.transitions.fade2 = function($cont, $slides, opts) {
//      $slides.not(':eq('+opts.currSlide+')').css('opacity',0);
//      opts.before.push(function(curr,next,opts) {
//          $.fn.cycle.commonReset(curr,next,opts);
//          opts.cssBefore.opacity = 0;
//      });
//      opts.animIn    = { opacity: 1 };
//      opts.animOut   = { opacity: 0 };
//      opts.cssBefore = { top: 0, left: heroLeft, width: 1270 };
//  }
//        //jQ does not distinguish chrome from safari
//        $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
//
//  function reposHero () {
//      var element =  $('#views_slideshow_singleframe_teaser_section_homepage_slideshow-default > div:not(.views_slideshow_singleframe_hidden)');
//      var wClient = $(window).width();
//      //var wElement = element.width();
//      var adjust = (wClient - 1270) / 2;
//
//      if ($.browser.safari) {
//          heroLeft = adjust;
//      } else {
//          heroLeft = (adjust < 0) ? adjust : 0;
//      }
//      element.css('left', heroLeft+"px");
//  }
//}

// Add colorbox css and js to the appropriate conditional in template.php for the required page

/* Tesla.modal();
 * Wrapper for colorbox
 * @param params - additional parameters to pass through to colorbox (e.g. {
 *     "html": $("callback").html(),
 *     "width": 800,
 *     "height": 600,
 *     "title": "My Title",
 *     "onOpen": function(){ ... },
 *     "onLoad": function(){ ... },
 *     "onComplete": function(){ ... },
 *     "onCleanup": function(){ ... },
 *     "onClosed": function(){... }
 * }
 */
Tesla.modal = function(obj, params) {

    if (obj !== null && typeof(obj) != "undefined" ) {
        obj.colorbox(params);
    }
    else {
        return $.colorbox(params);
    }
};

function getLocalePrefix() {
    var localePrefix = ""; // en_US

    if (!(Drupal.settings.tesla.locale === "en_US")) {
        localePrefix = Drupal.settings.tesla.locale;

        if (localePrefix == "ja_JP") {
            localePrefix = "jp";
        }
        if (localePrefix == "zh_CN") {
            localePrefix = "cn";
        }

        localePrefix = "/" + localePrefix;
    }

    return localePrefix;
}

function use12HourClockForLocale() {
    var use12HourClock;
    var locale = Drupal.settings.tesla.locale;
    switch (locale) {
        case "":
        case "en_CA":
        case "en_US":
        case "fr_CA":
        case "en_AU":
        case "en_HK":
            use12HourClock = true;
            break;
        default:
            use12HourClock = false;
            break;
    }
    return use12HourClock;
}

function isEuCountryCode(twoCharCountryCode) {
    var twoCharCountryCode = twoCharCountryCode || Drupal.settings.tesla.country;
    twoCharCountryCode = twoCharCountryCode.toUpperCase();

    var regions_by_country = {
        "AD": "OT",
        "AE": "OT",
        "AF": "OT",
        "AG": "OT",
        "AI": "OT",
        "AL": "OT",
        "AM": "OT",
        "AN": "OT",
        "AO": "OT",
        "AQ": "OT",
        "AR": "OT",
        "AS": "OT",
        "AT": "EU",
        "AU": "AU",
        "AW": "OT",
        "AZ": "OT",
        "BA": "OT",
        "BB": "OT",
        "BD": "OT",
        "BE": "EU",
        "BF": "OT",
        "BG": "EU",
        "BH": "OT",
        "BI": "OT",
        "BJ": "OT",
        "BM": "OT",
        "BN": "OT",
        "BO": "OT",
        "BR": "OT",
        "BS": "OT",
        "BT": "OT",
        "BV": "OT",
        "BW": "OT",
        "BY": "OT",
        "BZ": "OT",
        "CA": "CA",
        "CC": "OT",
        "CD": "OT",
        "CF": "OT",
        "CG": "OT",
        "CH": "EU",
        "CI": "OT",
        "CK": "OT",
        "CL": "OT",
        "CM": "OT",
        "CN": "OT",
        "CO": "OT",
        "CR": "OT",
        "CU": "OT",
        "CV": "OT",
        "CX": "OT",
        "CY": "EU",
        "CZ": "EU",
        "DE": "EU",
        "DJ": "OT",
        "DK": "EU",
        "DM": "OT",
        "DO": "OT",
        "DZ": "OT",
        "EC": "OT",
        "EE": "OT",
        "EG": "OT",
        "EH": "OT",
        "ER": "OT",
        "ES": "EU",
        "EU": "EU",
        "ET": "OT",
        "FI": "EU",
        "FJ": "OT",
        "FK": "OT",
        "FM": "OT",
        "FO": "OT",
        "FR": "EU",
        "GA": "OT",
        "GB": "GB",
        "GD": "OT",
        "GE": "OT",
        "GF": "OT",
        "GH": "OT",
        "GI": "OT",
        "GL": "OT",
        "GM": "OT",
        "GN": "OT",
        "GP": "OT",
        "GQ": "OT",
        "GR": "EU",
        "GS": "OT",
        "GT": "OT",
        "GU": "OT",
        "GW": "OT",
        "GY": "OT",
        "HK": "HK",
        "HM": "OT",
        "HN": "OT",
        "HR": "EU",
        "HT": "OT",
        "HU": "EU",
        "ID": "OT",
        "IE": "EU",
        "IL": "OT",
        "IN": "OT",
        "IO": "OT",
        "IQ": "OT",
        "IR": "OT",
        "IS": "EU",
        "IT": "EU",
        "JM": "OT",
        "JO": "OT",
        "JP": "JP",
        "KE": "OT",
        "KG": "OT",
        "KH": "OT",
        "KI": "OT",
        "KM": "OT",
        "KN": "OT",
        "KP": "OT",
        "KR": "OT",
        "KW": "OT",
        "KY": "OT",
        "KZ": "OT",
        "LA": "OT",
        "LB": "OT",
        "LC": "OT",
        "LI": "EU",
        "LK": "OT",
        "LR": "OT",
        "LS": "OT",
        "LT": "OT",
        "LU": "EU",
        "LV": "OT",
        "LY": "OT",
        "MA": "OT",
        "MC": "EU",
        "MD": "OT",
        "ME": "OT",
        "MG": "OT",
        "MH": "OT",
        "MK": "OT",
        "ML": "OT",
        "MM": "OT",
        "MN": "OT",
        "MO": "OT",
        "MP": "OT",
        "MQ": "OT",
        "MR": "OT",
        "MS": "OT",
        "MT": "EU",
        "MU": "OT",
        "MV": "OT",
        "MW": "OT",
        "MX": "OT",
        "MY": "OT",
        "MZ": "OT",
        "NA": "OT",
        "NC": "OT",
        "NE": "OT",
        "NF": "OT",
        "NG": "OT",
        "NI": "OT",
        "NL": "EU",
        "NO": "EU",
        "NP": "OT",
        "NR": "OT",
        "NU": "OT",
        "NZ": "OT",
        "OM": "OT",
        "PA": "OT",
        "PE": "OT",
        "PF": "OT",
        "PG": "OT",
        "PH": "OT",
        "PK": "OT",
        "PL": "OT",
        "PM": "OT",
        "PN": "OT",
        "PR": "OT",
        "PS": "OT",
        "PT": "OT",
        "PW": "OT",
        "PY": "OT",
        "QA": "OT",
        "RE": "OT",
        "RO": "OT",
        "RS": "OT",
        "RU": "OT",
        "RW": "OT",
        "SA": "OT",
        "SB": "OT",
        "SC": "OT",
        "SD": "OT",
        "SE": "EU",
        "SG": "OT",
        "SH": "OT",
        "SI": "OT",
        "SJ": "OT",
        "SK": "OT",
        "SL": "OT",
        "SM": "OT",
        "SN": "OT",
        "SO": "OT",
        "SR": "OT",
        "ST": "OT",
        "SV": "OT",
        "SY": "OT",
        "SZ": "OT",
        "TC": "OT",
        "TD": "OT",
        "TF": "OT",
        "TG": "OT",
        "TH": "OT",
        "TJ": "OT",
        "TK": "OT",
        "TL": "OT",
        "TM": "OT",
        "TN": "OT",
        "TO": "OT",
        "TR": "OT",
        "TT": "OT",
        "TV": "OT",
        "TW": "OT",
        "TZ": "OT",
        "UA": "OT",
        "UG": "OT",
        "UM": "OT",
        "US": "US",
        "UY": "OT",
        "UZ": "OT",
        "VA": "OT",
        "VC": "OT",
        "VE": "OT",
        "VG": "OT",
        "VI": "OT",
        "VN": "OT",
        "VU": "OT",
        "WF": "OT",
        "WS": "OT",
        "YE": "OT",
        "YT": "OT",
        "ZA": "OT",
        "ZM": "OT",
        "ZW": "OT"
    };

    return regions_by_country[twoCharCountryCode] === "EU";
}

// Enable social sharing widget
function initSocialSharingWidget() {
    var widget = $('#tesla-social-widget');
    var type = null;
    var url = null;
    var message = null;
    var page = document.URL;
    var width = 550
    var height = 450;
    if(widget.length !== 0) {
        widget.find('a').each(function(){
            type = $(this).attr('class');
            switch (type) {
                case 'facebook':
                    url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(page);
                    break;
                case 'twitter':
                    message = $(this).find('span').text();
                    url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message) + '&url=' + encodeURIComponent(page) + '&via=' + encodeURIComponent('TeslaMotors') + '&related=' + encodeURIComponent('TeslaMotors,elonmusk');
                    break;
                case 'google':
                    url = 'https://plus.google.com/share?url=' + encodeURIComponent(page);
                    break;
            }
            if(url !== null) {
                $(this).attr('href', url);
            }
        });
        widget.on('click', 'a', function(e){
            e.preventDefault();
            window.open($(this).attr('href'), '_blank', 'width=' + width + ', height=' + height);
        });
    }
}

////////////////////////////////////////////////////
// return postalcode formatting for each country
function getPostalCodeRegexMatrix(country_code) {
    console.info( 'getPostalCodeRegexMatrix', country_code );

    var postal_code_matrix = {
        "US": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "94304"
              },
        "CA": {
            "regex": "^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "7",
            "minlen": "6",
            "sample": "V3H 1Z7"
              },
        "AD": "",
        "AE": "",
        "AT": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "AU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "BE": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "BG": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CH": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CY": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "CN": {
            "regex": "^([0-9]{6})?$", //WEB-8715 - is optional
            "maxlen": "6",
            "minlen": "0",
            "sample": "123456"
              },
        "CZ": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "DE": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "4",
            "sample": "12345"
              },
        "DK": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "EE": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "ES": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "EU": "",
        "FI": {
            "regex": "^[0-9]{3,5}",
            "maxlen": "5",
            "minlen": "3",
            "sample": "12345"
              },
        "FR": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "GB": {
            "regex": "^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[ ][0-9][A-Z]{2}$",
            "maxlen": "9",
            "minlen": "5",
            "sample": "A9 9AA"
              },
        "GI": {
            "regex": "^[A-Z]{1,2}[0-9]{1,2}[A-Z]?[ ][0-9][A-Z]{2}$",
            "maxlen": "9",
            "minlen": "5",
            "sample": "A9 9AA"
              },
        "GR": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "HK": "",
        "HR": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "HU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "IE": "",
        "IS": {
            "regex": "^[0-9]{3}",
            "maxlen": "3",
            "minlen": "3",
            "sample": "123"
              },
        "IT": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "JP": {
            "regex": "^[0-9]{7}",
            "maxlen": "7",
            "minlen": "7",
            "sample": "1234567"
              },
        "KR": {
            "regex": "^[0-9]{3}[-]?[0-9]{3}",
            "separator": "-",
            "separator_count": "3",
            "maxlen": "7",
            "minlen": "6",
            "sample": "123-123"
              },
        "LI": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "LU": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "LT": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "LV": {
            "regex": "^(LV-)[0-9]{4}",
            "maxlen": "7",
            "minlen": "7",
            "sample": "LV-1234"
              },
        "MC": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "MT": "",
        "NL": {
            "regex": "^[0-9]{4}[ ]?[A-Za-z]{2}",
            "separator": " ",
            "separator_count": "4",
            "maxlen": "7",
            "minlen": "6",
            "sample": "1234 AB"
              },
        "NO": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "PL": {
            "regex": "^[0-9]{2}[-]?[0-9]{3}",
            "separator": "-",
            "separator_count": "2",
            "maxlen": "6",
            "minlen": "5",
            "sample": "12-123"
              },
        "PT": {
            "regex": "^[0-9]{4}[-]?[0-9]{3}?",
            "separator": "-",
            "separator_count": "4",
            "maxlen": "8",
            "minlen": "4",
            "sample": "1234-123"
              },
        "RO": {
            "regex": "^[0-9]{6}",
            "maxlen": "6",
            "minlen": "6",
            "sample": "123456"
              },
        "RS": "",
        "RU": {
            "regex": "^[0-9]{6}",
            "maxlen": "6",
            "minlen": "6",
            "sample": "123456"
              },
        "SE": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "SI": {
            "regex": "^[0-9]{4}",
            "maxlen": "4",
            "minlen": "4",
            "sample": "1234"
              },
        "SM": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "SK": {
            "regex": "^[0-9]{3}[ ]?[0-9]{2}",
            "separator": " ",
            "separator_count": "3",
            "maxlen": "6",
            "minlen": "5",
            "sample": "123 12"
              },
        "TH": {
            "regex": "^[0-9]{5}",
            "maxlen": "5",
            "minlen": "5",
            "sample": "12345"
              },
        "TR": {
            "regex": "^[0-9]{4,5}",
            "maxlen": "5",
            "minlen": "4",
            "sample": "12345"
              }
    }

    return postal_code_matrix[country_code];

}

/*
 * Validate a zipcode given a country
 * @param code - the postal code to validate
 * @param country - the country to validate against
 */
function isValidPostalCode(code, country) {
    console.info( 'isValidPostalCode', code, country );
    code = $.trim(code);
    var format = getPostalCodeRegexMatrix(country);
    if (format) {
        if (code.length < parseInt(format.minlen)) {
            return false;
        }
        if (code.length > parseInt(format.maxlen)) {
            return false;
        }
        var re = new RegExp(format.regex);
        return re.test(code);
    }
    else {
        debug.log('No country found')
        return false;
    }
}

// TO-DO: this is too entagled and not-unit testable
// Should be refactored to use the isValidPostalCode function above
function validatePostalCode(e,whichField,flow) {

    var fieldVal = $('#'+whichField).val();
    var fieldLen = $('#'+whichField).val().length;
    var helpDiv = 'postal-code-help';
    var country = 'US';
    var mode = 'mailing';
    fieldVal = $.trim(fieldVal);

    // set vars if no key/mouse event is passed
    if (typeof e == 'undefined' || e == null) {
        var keyCode = '99';
        var eventType = 'onready';
    } else {
        var keyCode = e.keyCode;
        var eventType = e.type;
    }

    // buy flow: get country from reservation country field.
    if (flow == 'buy' && $('#basic-country').length) {
        country = $('#basic-country').val();
    }
    // buy flow: get country on payment page for cc or ach
    else if(flow == 'buy' && ($('#edit-cc-country').length || $('#edit-ach-country').length)) {
        var payment_method = $('#payment_type_hidden').val();
        if (payment_method == 'cr') {
            country = $('#edit-cc-country').val();
        }
        else if (payment_method == 'ach') {
            country = $('#edit-ach-country').val();
            helpDiv = 'postal-code-help-ach';
        }
    }
    // booking flow: get country on registration and payment page(s)
    else if (flow == 'booking' && $('#country').length) {
        country = $('#country').val();
    }
    // delivery flow:
    else if (flow == 'delivery' && $('#country').length) {
        country = $('#country').val();
    }

    // buy flow: set mode based on field to validate
    if (flow == 'buy' && (whichField == 'edit-PostalCode' || whichField == 'edit-cc-postalcode' || whichField == 'edit-ach-postalcode')) {
        mode = 'delivery';
    }

    // buy flow: update the reservation agreement based on zip code for US.
    if (flow == 'buy' && fieldLen == 5 && $('#page-own-basic').length) {
        updateResAgreement(mode);
    }

    // postal code format validation for countries configured in common.js
    // pulled using getPostalCodeRegexMatrix() function
    var this_country = country;
    if (flow == 'buy' && mode == 'mailing') {
        this_country = $('#edit-mailing-country').val();
        helpDiv = 'postal-code-help-mailing';
    }

    var postal_code_formatting = getPostalCodeRegexMatrix(this_country);
    if (postal_code_formatting) {
        if (postal_code_formatting.separator && postal_code_formatting.separator_count && keyCode != '8') {
            if (fieldLen >= parseInt(postal_code_formatting.separator_count)) { // && fieldLen <= parseInt(postal_code_formatting.separator_count)
                if (!~fieldVal.indexOf(postal_code_formatting.separator)) {
                    var seg1 = fieldVal.substr(0,postal_code_formatting.separator_count);
                    var seg2 = fieldVal.substr(postal_code_formatting.separator_count);
                    fieldVal = seg1 + postal_code_formatting.separator;
                    if(seg2) {
                        fieldVal = fieldVal + seg2;
                    }
                }
                $('#'+whichField).val(fieldVal);
            }
            else if (!~fieldVal.indexOf(postal_code_formatting.separator)) {
                // debug.log('add in the separator after separator_count has been surpassed');
                fieldValFirst = fieldVal.substring(0,parseInt(postal_code_formatting.separator_count));
                fieldValLast = fieldVal.substring(parseInt(postal_code_formatting.separator_count));
                fieldVal = fieldValFirst + postal_code_formatting.separator + fieldValLast;
                fieldLen = fieldVal.length;
            }
        }
        // limit input length
        if (fieldLen > parseInt(postal_code_formatting.maxlen)) {
            // debug.log('limit character input to: '+postal_code_formatting.maxlen);
            fieldVal = fieldVal.substring(0,parseInt(postal_code_formatting.maxlen));
            $('#'+whichField).val(fieldVal);
        }

        fieldLen = $('#'+whichField).val().length;
        if (fieldLen == parseInt(postal_code_formatting.maxlen) || (eventType == 'onready' && fieldLen < parseInt(postal_code_formatting.maxlen))) {
            // debug.log('check the format against the regex: '+postal_code_formatting.regex);
            if (postal_code_formatting.regex && fieldVal.match(postal_code_formatting.regex) == null) {
                $('#'+whichField).addClass('error');
                $('#'+helpDiv).html(Drupal.t('example: ')+postal_code_formatting.sample);
                $('#'+helpDiv).fadeIn('swing');
            }
            else {
                if ($('#'+whichField).hasClass('error')) {
                    $('#'+whichField).removeClass('error');
                    $('#'+helpDiv).hide();
                }
            }
        }
        else if (eventType == 'blur') {
            if (fieldLen < parseInt(postal_code_formatting.minlen)) {
                $('#'+whichField).addClass('error');
                $('#'+helpDiv).html(Drupal.t('format:')+postal_code_formatting.sample);
                $('#'+helpDiv).fadeIn('swing');
            }
        }
    }
}

/*
 * Meets Minimum Age
 * meetsMinimumAge(new Date(year, month, date), 18)
 */
function meetsMinimumAge(birthDate, minAge) {
    var tempDate = new Date(birthDate.getFullYear() + minAge, birthDate.getMonth(), birthDate.getDate());
    if (tempDate <= new Date()) {
        return true;
    }
    else {
        return false;
    }
}

/*
 * Get the Age
 * getAge(new Date(year, month, date));
 */
function getAge(birthDate) {
    var birthdate   = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    var today_date  = new Date();
    var today_year  = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day   = today_date.getDate();
    var age         = today_year - birthDate.getFullYear();

    if ( today_month < (birthDate.getMonth() - 1)) {
        age--;
    }
    if (((birthDate.getMonth() - 1) == today_month) && (today_day < birthDate.getDate())) {
        age--;
    }
    return age;

}

/**
 * Generate url with path prefix
 *
 * @param string Url with beginning slash
 * @return string Url with path prefix
 */
function generateUrlWithPathPrefix(url_with_beginning_slash) {
    var url_with_path_prefix = '';
    if (typeof Drupal !== 'undefined' && typeof Drupal.settings !== 'undefined' && typeof Drupal.settings.tesla.locale !== 'undefined' && Drupal.settings.tesla.locale !== '') {
        url_with_path_prefix += '/' + Drupal.settings.tesla.locale;
        if(Drupal.settings.tesla.locale == 'ja_JP') {
            url_with_path_prefix = '/jp';
        }
        if(Drupal.settings.tesla.locale == 'zh_CN') {
            url_with_path_prefix = '/cn';
        }
    }
    url_with_path_prefix += url_with_beginning_slash;
    return url_with_path_prefix;
}

/**
 * change default select input
 *
 * @param {object} config selector configuration
 *
 * example:
 *
 * customSelectInput({
 *     context: '#edit-expDateMonth',
 *     placeholder: 'span.exp-month-select',
 *     attrs: 'class="exp-month-select"',
 *     css: {'z-index': 11},
 *     options: { substrSize: 20 }
 * })
 */
function customSelectInput(config) {
    var $context = $(config.context);
    var cssDefaults = {
        'z-index': 11,
        'opacity': 0,
        '-khtml-appearance':'none'
    };
    var defaults = {
        substr: true,
        substrSize: 30
    };
    var settings = $.extend(defaults, config.options);
    var css = $.extend(cssDefaults, config.css);

    debug.info('select' + config.context + ' using customSelectInput function');
    $context.each(function(){
        var $this = $(this);
        var title = ( $('option:selected', $this).val() !== '' ) ? $('option:selected', $this).text() : $this.attr('title');

        $this.css(css)
            .after('<span ' + config.attrs + '">' + title + '</span>')
            .change(function(){
                val = $('option:selected', this).text();
                var label = (settings.substr) ? val.substring(0, settings.substrSize) : val;
                $(config.placeholder).html(label);
            })
            .keyup(function() {
                val = $('option:selected', this).text();
                var label = (settings.substr) ? val.substring(0, settings.substrSize) : val;
                $(config.placeholder).html(label);
            });
    });
}
;
var Tesla = Tesla || {};
if (typeof Tesla.Utils == 'undefined') Tesla.Utils = {};

Tesla.Utils.createCookie = function(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

Tesla.Utils.readCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

Tesla.Utils.eraseCookie = function(name) {
    Tesla.Utils.createCookie(name,"",-1);
}
;
/*!
 * accounting.js v0.3.2, copyright 2011 Joss Crowcroft, MIT license, http://josscrowcroft.github.com/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.3.2",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);;
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a){function E(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function F(a,b){return function(c){return K(a.call(this,c),b)}}function G(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function H(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function I(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,g=a.hours||a.h||0,h=a.minutes||a.m||0,i=a.seconds||a.s||0,j=a.milliseconds||a.ms||0;this._milliseconds=j+i*1e3+h*6e4+g*36e5,this._days=f+e*7,this._months=d+c*12,b.milliseconds=j%1e3,i+=J(j/1e3),b.seconds=i%60,h+=J(i/60),b.minutes=h%60,g+=J(h/60),b.hours=g%24,f+=J(g/24),f+=e*7,b.days=f%30,d+=J(f/30),b.months=d%12,c+=J(d/12),b.years=c,this._lang=!1}function J(a){return a<0?Math.ceil(a):Math.floor(a)}function K(a,b){var c=a+"";while(c.length<b)c="0"+c;return c}function L(a,b,c){var d=b._milliseconds,e=b._days,f=b._months,g;d&&a._d.setTime(+a+d*c),e&&a.date(a.date()+e*c),f&&(g=a.date(),a.date(1).month(a.month()+f*c).date(Math.min(g,a.daysInMonth())))}function M(a){return Object.prototype.toString.call(a)==="[object Array]"}function N(a,b){var c=Math.min(a.length,b.length),d=Math.abs(a.length-b.length),e=0,f;for(f=0;f<c;f++)~~a[f]!==~~b[f]&&e++;return e+d}function O(a,b,c,d){var e,f,g=[];for(e=0;e<7;e++)g[e]=a[e]=a[e]==null?e===2?1:0:a[e];return a[7]=g[7]=b,a[8]!=null&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function P(a,c){var d,e,g=[];!c&&h&&(c=require("./lang/"+a));for(d=0;d<i.length;d++)c[i[d]]=c[i[d]]||f.en[i[d]];for(d=0;d<12;d++)e=b([2e3,d]),g[d]=new RegExp("^"+(c.months[d]||c.months(e,""))+"|^"+(c.monthsShort[d]||c.monthsShort(e,"")).replace(".",""),"i");return c.monthsParse=c.monthsParse||g,f[a]=c,c}function Q(a){var c=typeof a=="string"&&a||a&&a._lang||null;return c?f[c]||P(c):b}function R(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function S(a){var b=a.match(k),c,d;for(c=0,d=b.length;c<d;c++)D[b[c]]?b[c]=D[b[c]]:b[c]=R(b[c]);return function(e){var f="";for(c=0;c<d;c++)f+=typeof b[c].call=="function"?b[c].call(e,a):b[c];return f}}function T(a,b){function d(b){return a.lang().longDateFormat[b]||b}var c=5;while(c--&&l.test(b))b=b.replace(l,d);return A[b]||(A[b]=S(b)),A[b](a)}function U(a){switch(a){case"DDDD":return p;case"YYYY":return q;case"S":case"SS":case"SSS":case"DDD":return o;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return r;case"Z":case"ZZ":return s;case"T":return t;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return n;default:return new RegExp(a.replace("\\",""))}}function V(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=b==null?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;e<12;e++)if(Q().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":b!=null&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm=(b+"").toLowerCase()==="pm";break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(("0."+b)*1e3);break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(x),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&e[0]==="+"&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}b==null&&(c[8]=!1)}function W(a,b){var c=[0,0,1,0,0,0,0],d={tzh:0,tzm:0},e=b.match(k),f,g;for(f=0;f<e.length;f++)g=(U(e[f]).exec(a)||[])[0],g&&(a=a.slice(a.indexOf(g)+g.length)),D[e[f]]&&V(e[f],g,c,d);return d.isPm&&c[3]<12&&(c[3]+=12),d.isPm===!1&&c[3]===12&&(c[3]=0),O(c,d.isUTC,d.tzh,d.tzm)}function X(a,b){var c,d=a.match(m)||[],e,f=99,g,h,i;for(g=0;g<b.length;g++)h=W(a,b[g]),e=T(new H(h),b[g]).match(m)||[],i=N(d,e),i<f&&(f=i,c=h);return c}function Y(a){var b="YYYY-MM-DDT",c;if(u.exec(a)){for(c=0;c<4;c++)if(w[c][1].exec(a)){b+=w[c][0];break}return s.exec(a)?W(a,b+" Z"):W(a,b)}return new Date(a)}function Z(a,b,c,d,e){var f=e.relativeTime[a];return typeof f=="function"?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function $(a,b,c){var e=d(Math.abs(a)/1e3),f=d(e/60),g=d(f/60),h=d(g/24),i=d(h/365),j=e<45&&["s",e]||f===1&&["m"]||f<45&&["mm",f]||g===1&&["h"]||g<22&&["hh",g]||h===1&&["d"]||h<=25&&["dd",h]||h<=45&&["M"]||h<345&&["MM",d(h/30)]||i===1&&["y"]||["yy",i];return j[2]=b,j[3]=a>0,j[4]=c,Z.apply({},j)}function _(a,c){b.fn[a]=function(a){var b=this._isUTC?"UTC":"";return a!=null?(this._d["set"+b+c](a),this):this._d["get"+b+c]()}}function ab(a){b.duration.fn[a]=function(){return this._data[a]}}function bb(a,c){b.duration.fn["as"+a]=function(){return+this/c}}var b,c="1.7.2",d=Math.round,e,f={},g="en",h=typeof module!="undefined"&&module.exports,i="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),j=/^\/?Date\((\-?\d+)/i,k=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,l=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,m=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,n=/\d\d?/,o=/\d{1,3}/,p=/\d{3}/,q=/\d{1,4}/,r=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,s=/Z|[\+\-]\d\d:?\d\d/i,t=/T/i,u=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,v="YYYY-MM-DDTHH:mm:ssZ",w=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],x=/([\+\-]|\d\d)/gi,y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},A={},B="DDD w M D d".split(" "),C="M D H h m s w".split(" "),D={M:function(){return this.month()+1},MMM:function(a){return E("monthsShort",this.month(),this,a)},MMMM:function(a){return E("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return E("weekdaysMin",this.day(),this,a)},ddd:function(a){return E("weekdaysShort",this.day(),this,a)},dddd:function(a){return E("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return K(this.year()%100,2)},YYYY:function(){return K(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return K(~~(this.milliseconds()/10),2)},SSS:function(){return K(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(a/60),2)+":"+K(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return a<0&&(a=-a,b="-"),b+K(~~(10*a/6),4)}};while(B.length)e=B.pop(),D[e+"o"]=G(D[e]);while(C.length)e=C.pop(),D[e+e]=F(D[e],2);D.DDDD=F(D.DDD,3),b=function(c,d){if(c===null||c==="")return null;var e,f;return b.isMoment(c)?new H(new Date(+c._d),c._isUTC,c._lang):(d?M(d)?e=X(c,d):e=W(c,d):(f=j.exec(c),e=c===a?new Date:f?new Date(+f[1]):c instanceof Date?c:M(c)?O(c):typeof c=="string"?Y(c):new Date(c)),new H(e))},b.utc=function(a,c){return M(a)?new H(O(a,!0),!0):(typeof a=="string"&&!s.exec(a)&&(a+=" +0000",c&&(c+=" Z")),b(a,c).utc())},b.unix=function(a){return b(a*1e3)},b.duration=function(a,c){var d=b.isDuration(a),e=typeof a=="number",f=d?a._data:e?{}:a,g;return e&&(c?f[c]=a:f.milliseconds=a),g=new I(f),d&&(g._lang=a._lang),g},b.humanizeDuration=function(a,c,d){return b.duration(a,c===!0?null:c).humanize(c===!0?!0:d)},b.version=c,b.defaultFormat=v,b.lang=function(a,c){var d;if(!a)return g;(c||!f[a])&&P(a,c);if(f[a]){for(d=0;d<i.length;d++)b[i[d]]=f[a][i[d]];b.monthsParse=f[a].monthsParse,g=a}},b.langData=Q,b.isMoment=function(a){return a instanceof H},b.isDuration=function(a){return a instanceof I},b.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return~~(a%100/10)===1?"th":b===1?"st":b===2?"nd":b===3?"rd":"th"}}),b.fn=H.prototype={clone:function(){return b(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?this._a[8]!=null?!!this._a[8]:!N(this._a,(this._a[7]?b.utc(this._a):b(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return T(this,a?a:b.defaultFormat)},add:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,1),this},subtract:function(a,c){var d=c?b.duration(+c,a):b.duration(a);return L(this,d,-1),this},diff:function(a,c,e){var f=this._isUTC?b(a).utc():b(a).local(),g=(this.zone()-f.zone())*6e4,h=this._d-f._d-g,i=this.year()-f.year(),j=this.month()-f.month(),k=this.date()-f.date(),l;return c==="months"?l=i*12+j+k/30:c==="years"?l=i+(j+k/30)/12:l=c==="seconds"?h/1e3:c==="minutes"?h/6e4:c==="hours"?h/36e5:c==="days"?h/864e5:c==="weeks"?h/6048e5:h,e?l:d(l)},from:function(a,c){return b.duration(this.diff(a)).lang(this._lang).humanize(!c)},fromNow:function(a){return this.from(b(),a)},calendar:function(){var a=this.diff(b().sod(),"days",!0),c=this.lang().calendar,d=c.sameElse,e=a<-6?d:a<-1?c.lastWeek:a<0?c.lastDay:a<1?c.sameDay:a<2?c.nextDay:a<7?c.nextWeek:d;return this.format(typeof e=="function"?e.apply(this):e)},isLeapYear:function(){var a=this.year();return a%4===0&&a%100!==0||a%400===0},isDST:function(){return this.zone()<b([this.year()]).zone()||this.zone()<b([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return a==null?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return b.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?Q(this):(this._lang=b,this)}};for(e=0;e<y.length;e++)_(y[e].toLowerCase(),y[e]);_("year","FullYear"),b.duration.fn=I.prototype={weeks:function(){return J(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*864e5+this._months*2592e6},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=$(b,!a,this.lang()),e=b<=0?c.past:c.future;return a&&(typeof e=="function"?d=e(d):d=e.replace(/%s/i,d)),d},lang:b.fn.lang};for(e in z)z.hasOwnProperty(e)&&(bb(e,z[e]),ab(e.toLowerCase()));bb("Weeks",6048e5),h&&(module.exports=b),typeof ender=="undefined"&&(this.moment=b),typeof define=="function"&&define.amd&&define("moment",[],function(){return b})}).call(this);;
/*  Localization specific code goes here
    Requires accounting.min.js
*/
var Tesla = Tesla || {};

// List of countries flagged as EU other (see: tesla.locale.inc)
var euOtherCountries = ['BG', 'CZ', 'EE', 'FI', 'GI', 'GR', 'HU', 'LV', 'LI', 'LT', 'LU', 'MC', 'PL', 'PT', 'RO', 'RU', 'SM', 'SK', 'SI', 'ES', 'TR'];
// WEB-12091 - supercharging map determine region by country code
// arrays used by regionByCountryCode function below
var euCountries = ['AD','AL','AT','BA','BE','BG','BY','CH','CY','CZ','DE','DK','EE','ES','FI','FO','FR','GB','GG','GI','GR','HR','HU','IE','IM','IS','IT','JE','LI','LT','LU','LV','MC','MD','MK','MT','NL','NO','PL','PT','RO','RU','SE','SI','SJ','SK','SM','TR','UA','UK','VA','YU','EU'];
var naCountries = ['US','CA'];
var apacCountries = ['AU','CN','HK','JP'];
var kmCountries = new Array("de_AT", "de_CH", "de_DE", "en_AT", "en_AU", "en_BE", "en_CA", "en_CH", "en_DK", "en_EU", "en_HK", "en_IT", "en_NL", "es_ES", "fr_BE", "fr_CH", "fr_FR", "it_CH", "it_IT", "jp", "nl_NL", "no_NO", "fr_CA");
var validLocales = new Array("de_AT", "de_DE", "en_AT", "en_AU", "en_BE", "fr_BE", "nl_BE", "en_CA", "en_CH", "fr_CH", "de_CH", "it_CH", "en_DK", "da_DK", "en_EU", "en_HK", "en_IT", "en_NL", "es_ES", "fr_BE", "fr_CH", "fr_FR", "it_CH", "it_IT", "jp", "nl_NL", "no_NO", "fr_CA", "cn", "en_GB", "sv_SE");

var currency_locale = {
         'AD': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'AT': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'en_AT': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'de_AT': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%v %s",
             thousand: '.',
             decimal: ','
         },
         'AU': {
             currency:'AUD',
             symbol: '$',
             format : "%s%v"
         },
         'en_AU': {
             currency:'AUD',
             symbol: '$',
             format : "%s%v"
         },
         'BE': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'en_BE': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'fr_BE': {
             currency:'EUR',
             symbol: '&#8364;',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'CA': {
             currency: 'CAD',
             symbol:'$',
             format: "%s%v",
             decimal: ".",
             thousand: ","
         },
         'en_CA': {
             currency: 'CAD',
             symbol:'$'
         },
         'fr_CA': {
             currency: 'CAD',
             symbol:'$',
             format : "%v %s",
             thousand: ' ',
             decimal: ','
         },
         'CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'de_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'fr_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'it_CH': {
             currency: 'CHF',
             symbol:'CHF',
             format : "%s %v",
             thousand: "'",
             decimal: '.'
         },
         'CN': {
             currency:'CNY',
             symbol: '&yen;',
             thousand: ',',
             decimal: '.',
             format: "%s %v"
         },
         'zh_CN': {
             currency:'CNY',
             symbol: '&yen;',
             thousand: ',',
             decimal: '.',
             format: "%s %v"
         },
         'CY': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             format : "%s %v",
             thousand: '.',
             decimal: ','
         },
         'DE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'de_DE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'en_DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'da_DK': {
             currency:'DKK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'EE': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'ES': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'EU': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'en_EU': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'prefix',
             format : "%s %v"
         },
         'FI': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: ' ',
             decimal: ',',
             position: 'postfix',
             format : "%s %v"
         },
         'FR': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'fr_FR': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'GB': {
             currency:'GBP',
             symbol: '&pound;'
         },
         'en_GB': {
             currency:'GBP',
             symbol: '&pound;'
         },
         'GR': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'HK': {
             currency:'HKD',
             symbol: '$'
         },
         'en_HK': {
             currency:'HKD',
             symbol: 'HK$',
             position: 'prefix'
//             format : "%s %v"
         },
         'IE': {
             currency:'EUR',
             symbol: '&#8364;'
         },
         'IT': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'it_IT': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'LU': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'prefix',
             thousand: '.',
             decimal: ','
         },
         'MC': {
             currency:'EUR',
             symbol: '&#8364;',
             position: 'postfix',
             thousand: ' ',
             decimal: ',',
             format : "%v %s"
         },
         'MT': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ','
         },
         'NL': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'nl_NL': {
             currency:'EUR',
             symbol: '&#8364;',
             format: '%s %v',
             thousand: '.',
             decimal: ','
         },
         'NO': {
             currency:'NOK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'no_NO': {
             currency:'NOK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'sv_SE': {
             currency:'SEK',
             symbol: 'kr.',
             thousand: '.',
             decimal: ',',
             format : "%s %v"
         },
         'SE': {
             currency:'SEK',
             symbol: 'kr',
             thousand: '.',
             decimal: ',',
             format : "%v %s"
         },
         'PT': {
             currency:'EUR',
             symbol: '&#8364;',
             thousand: '.',
             decimal: ',',
             position: 'postfix',
             format : "%v %s"
         },
         'JP': {
             currency:'JPY',
             symbol: '&yen;'
         },
         'ja_JP': {
             currency:'JPY',
             symbol: '&yen;'
         },
         'US': {
             currency:'USD',
             symbol: '$',
             format: "%s%v",
             decimal: ".",
             thousand: ","
         },
         'en_US': {
             currency:'USD',
             symbol: '$'
         }
     };

Tesla.formatMoney =  function(value, region, precision, showCurrSymbol) {

  var currency_default, attrname;
   /* These are taken from the acountancy defaults, apart from currency */
   currency_default = {
      currency: 'USD', // This is custom, we add it.
      symbol: "$",   // default currency symbol is '$'
      format : "%s%v",  // controls output: %s = symbol, %v = value (can be object, see docs)
      decimal : ".",    // decimal point separator
      thousand : ",",   // thousands separator
      precision : 2,    // decimal places
      grouping : 3    // digit grouping (not implemented yet)
    };

  // Set currency defaults in the accounting.settings.currency object.
  if (!region || region == 'default') {
    for (var def_attr in currency_default) {
      accounting.settings.currency[def_attr] = currency_default[def_attr];
    }
  }
  else { // Read from the currency_locale object
    for (var reg_attr in currency_locale[region]) {
       accounting.settings.currency[reg_attr] = currency_locale[region][reg_attr];
            // Show currency symbol or not
        if ( showCurrSymbol == false ){
            accounting.settings.currency["symbol"] = "";
        }
    }
  }
  // set decimal places if sent as an arg, otherwise, use default setting.
  accounting.settings.currency.precision = typeof precision == 'undefined' ? accounting.settings.currency.precision : precision;

  // Run our values through the accounting formatMoney method.
  if (value || value === 0) {
    return accounting.formatMoney(value, accounting.settings.currency);
  }

  return "";

};

/** WEB-12091 - supercharging map determine region by country code
 * using country arrays set above.
 * @countryCode => passed in from page based on Drupal.settings.tesla.country
 * euCountries => array of EU countries
 * naCountries => array of NA countries
 * apacCountries => array of APAC countries
 * returns a default of "north_america"
 */
Tesla.regionByCountryCode = function(countryCode) {

    var region;
    if (_.indexOf(euCountries,countryCode) >= 0) {
        region = 'europe';
    }
    else if (_.indexOf(naCountries,countryCode) >= 0) {
        region = 'north_america';
    }
    else if (_.indexOf(apacCountries,countryCode) >= 0) {
        region = 'asia_pacific';
    }
    else {
        region = 'north_america';
    }

    return region;
};

function localizeCost(c, floating_points) {
  var i18n_c, i18n_c_string;
  if (Drupal.settings.tesla) { // Added on Document ready in common.js
    if (Drupal.settings.tesla.locale === 'fr_CA') {
      i18n_c = Number(c).toFixed(floating_points).replace('.',',');
      i18n_c_string = i18n_c + " $";
    } else {
      i18n_c = Number(c).toFixed(floating_points);
      i18n_c_string = "$" + i18n_c;
    }
  }
  return i18n_c_string;
}

function switchToMiles(dm) {
  if (Drupal.settings.tesla.locale === 'fr_CA' || Drupal.settings.tesla.locale === 'en_CA') {
	dm = dm / 1.6
  }
  return dm;
}

function localizeDate(m, day, year) {

    var teslaRegion = '';

    if ( Drupal.settings.tesla.locale == 'de_CH' ) {
        teslaRegion = 'DE';
    }
    else if ( Drupal.settings.tesla.locale == 'fr_CH' ) {
        teslaRegion = 'FR';
    }
    else if ( Drupal.settings.tesla.locale == 'it_CH' ) {
        teslaRegion = 'IT';
    }
    else {
        teslaRegion = Drupal.settings.tesla.region;
    }

    switch(teslaRegion) {
    case 'CA':
      if (Drupal.settings.tesla.locale == 'fr_CA') {
        monthArray = {1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre"};
    	month = monthArray[m];
        curCarInfo.date = day+" "+month+" "+year;
      }
      else {
        monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
        month = monthArray[m];
        curCarInfo.date = day+" "+month+", "+year;
      }
      break;
    case 'FR':
      monthArray = {1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin", 7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    case 'EN':
      monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+", "+year;
      break;
    case 'DE':
      monthArray = {1: "Januar", 2: "Februar", 3: "März", 4: "April", 5: "Mai", 6: "Juni", 7: "Juli", 8: "August", 9: "September", 10: "October", 11: "November", 12: "Dezember"};
      month = monthArray[m];
      curCarInfo.date = day+". "+month+" "+year;
      break;
    case 'IT':
      monthArray = {1: "January", 2: "Febbraio", 3: "Marzo", 4: "Aprile", 5: "May", 6: "Giugno", 7: "Luglio", 8: "August", 9: "September", 10: "Ottobre", 11: "Novembre", 12: "Dicembre"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    case 'JP':
      monthArray = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", 11: "11", 12: "12"};
      month = monthArray[m];
      curCarInfo.date = year+"年"+month+"月"+day+"日";
      break;
    case 'NO':
      monthArray = {1: "Januar", 2: "februar", 3: "Mars", 4: "April", 5: "May", 6: "June", 7: "Juli", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "Desember"};
      month = monthArray[m];
      curCarInfo.date = day+". "+month+" "+year;
      break;
    case 'NL':
      monthArray = {1: "Januari", 2: "Februari", 3: "March", 4: "April", 5: "Mei", 6: "June", 7: "July", 8: "August", 9: "September", 10: "Oktober", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = day+" "+month+" "+year;
      break;
    default:
      monthArray = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};
      month = monthArray[m];
      curCarInfo.date = month+" "+day+", "+year;
    }

    return curCarInfo.date;

}

/**
 * Is EU other country
 *
 * @param string Country code
 * @return boolean Is EU other country
 */
Tesla.isEuOtherCountry =  function(countryCode) {
    return jQuery.inArray(countryCode, euOtherCountries) > -1;
};

/**
 * Maps the saved locale to the user country
 * Used when manipulating TC.userCountry for EU other countries where mismatch may occur
 *
 * @param string Country code as specificed by TC.userCountry
 * @param string Locale saved in the configuration
 * @return string Country code as specificed by TC.userCountry
 */
Tesla.mapSavedLocaleToUserCountry =  function(userCountry, savedLocale) {
    isEuOtherCountry = this.isEuOtherCountry(userCountry);
    // MAP LI country (for de_CH) to CH
    if (savedLocale == 'de_CH' && userCountry != 'CH' && isEuOtherCountry) {
        userCountry = 'CH';
    }
    // Map EU other countries
    else if (savedLocale == 'en_EU' && userCountry != 'EU' && isEuOtherCountry) {
        userCountry = 'EU';
    }
    return userCountry;
};

Tesla.isValidLocale = function(locale) {
    var isValidLocale = _.indexOf(validLocales,locale) >= 0 ? true : false;
    return isValidLocale;
};


/**
 * Following the five to six home rule, format money. Like this:
 * 11.5 -> 11 ;   11.6 -> 12
 */
Tesla.fiveToSixHomeFormat = function(num) {
    num = isNaN(num) || num === '' || num === null ? 0.00 : num;
    return Math.ceil((num / 10 - 0.05) * 10);
};

/* These are the moment.js i18n config objects.
 *  We will load them into Drupal.settings.momentConfig.
 */
var momentConfig = {};

momentConfig.de_DE = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.de_AT = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.de_CH = {
    months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
    monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
    weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
    weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
    weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
    longDateFormat : {
        LT: "H:mm U\\hr",
        L : "DD/MM/YYYY",
        LL : "D. MMMM YYYY",
        LLL : "D. MMMM YYYY LT",
        LLLL : "dddd, D. MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Heute um] LT",
        sameElse: "L",
        nextDay: '[Morgen um] LT',
        nextWeek: 'dddd [um] LT',
        lastDay: '[Gestern um] LT',
        lastWeek: '[letzten] dddd [um] LT'
    },
    relativeTime : {
        future : "in %s",
        past : "vor %s",
        s : "ein paar Sekunden",
        m : "einer Minute",
        mm : "%d Minuten",
        h : "einer Stunde",
        hh : "%d Stunden",
        d : "einem Tag",
        dd : "%d Tagen",
        M : "einem Monat",
        MM : "%d Monaten",
        y : "einem Jahr",
        yy : "%d Jahren"
    },
    ordinal : function (number) {
        return '.';
    }
};


momentConfig.en_BE = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

momentConfig.en_DK = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};
momentConfig.en_GB = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

momentConfig.en_US = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.fr_FR = {
    months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),
    monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),
    longDateFormat : {
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY HH:mm",
        LLLL : "dddd, D MMMM YYYY HH:mm"
    },
    meridiem : {
        AM : 'AM',
        am : 'am',
        PM : 'PM',
        pm : 'pm'
    },
    calendar : {
        sameDay: "[Ajourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [denier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "il y a %s",
        s : "secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinal : function (number) {
      return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème';
    }
};

momentConfig.fr_CH = {
    months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Aout_Septembre_Octobre_Novembre_Décembre".split("_"),
    monthsShort : "Jan_Fev_Mar_Avr_Mai_Juin_Juil_Aou_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    weekdaysShort : "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_"),
    longDateFormat : {
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY HH:mm",
        LLLL : "dddd, D MMMM YYYY HH:mm"
    },
    meridiem : {
        AM : 'AM',
        am : 'am',
        PM : 'PM',
        pm : 'pm'
    },
    calendar : {
        sameDay: "[Ajourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [denier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "il y a %s",
        s : "secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinal : function (number) {
      return (~~ (number % 100 / 10) === 1) ? 'er' : 'ème';
    }
};

momentConfig.it_CH = {
    months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
    weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s fa",
        s : "secondi",
        m : "un minuto",
        mm : "%d minuti",
        h : "un'ora",
        hh : "%d ore",
        d : "un giorno",
        dd : "%d giorni",
        M : "un mese",
        MM : "%d mesi",
        y : "un anno",
        yy : "%d anni"
    },
    ordinal: function () {
        return 'º';
    }
};

momentConfig.it_IT = {
    months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
    weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: '[lo scorso] dddd [alle] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s fa",
        s : "secondi",
        m : "un minuto",
        mm : "%d minuti",
        h : "un'ora",
        hh : "%d ore",
        d : "un giorno",
        dd : "%d giorni",
        M : "un mese",
        MM : "%d mesi",
        y : "un anno",
        yy : "%d anni"
    },
    ordinal: function () {
        return 'º';
    }
};

momentConfig.nl_NL = {
    months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
    monthsShort : function (m, format) {
        var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
        var monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
        } else {
            return monthsShortWithDots[m.month()];
        }
    },
    weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
    weekdaysShort : "zo._ma._di._wo._do._vr._za.".split("_"),
    weekdaysMin : "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[Vandaag om] LT',
        nextDay: '[Morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[Gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "over %s",
        past : "%s geleden",
        s : "een paar seconden",
        m : "één minuut",
        mm : "%d minuten",
        h : "één uur",
        hh : "%d uur",
        d : "één dag",
        dd : "%d dagen",
        M : "één maand",
        MM : "%d maanden",
        y : "één jaar",
        yy : "%d jaar"
    },
    ordinal : function (number) {
        return (number === 1 || number === 8 || number >= 20) ? 'ste' : 'de';
    }
};

momentConfig.no_NO = {
    months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
    monthsShort : "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
    weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
    weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
    weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: '[I dag klokken] LT',
        nextDay: '[I morgen klokken] LT',
        nextWeek: 'dddd [klokken] LT',
        lastDay: '[I går klokken] LT',
        lastWeek: '[Forrige] dddd [klokken] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "om %s",
        past : "for %s siden",
        s : "noen sekunder",
        m : "ett minutt",
        mm : "%d minutter",
        h : "en time",
        hh : "%d timer",
        d : "en dag",
        dd : "%d dager",
        M : "en måned",
        MM : "%d måneder",
        y : "ett år",
        yy : "%d år"
    },
    ordinal : function (number) {
        return '.';
    }
};

momentConfig.en_CA = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.fr_CA = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "MM/DD/YYYY",
        LL : "MMMM D YYYY",
        LLL : "MMMM D YYYY LT",
        LLLL : "dddd, MMMM D YYYY LT"
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }

};

momentConfig.en_EU = {
    months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd, D MMMM YYYY LT"
    },
    calendar : {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[last] dddd [at] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : "in %s",
        past : "%s ago",
        s : "a few seconds",
        m : "a minute",
        mm : "%d minutes",
        h : "an hour",
        hh : "%d hours",
        d : "a day",
        dd : "%d days",
        M : "a month",
        MM : "%d months",
        y : "a year",
        yy : "%d years"
    },
    ordinal : function (number) {
        var b = number % 10;
        return (~~ (number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
    }
};

if ((typeof(Drupal) !== "undefined") && Drupal.settings) {
    Drupal.settings.momentConfig = momentConfig;
}

;
$(document).ready(function() {
	//this is where we store subnav divs that we display in the flyout navigation
	var subnavDivs={};
	//delay
	var subnavbackUpDelay;
	var subnavDownDelay;
	//correct positioning for the sliding nav
	var showY;
	var hideY;
	function prepareNav(){
		//cache divs
		var $slideNav=$("#slide-nav-main");
		//delay before the subnav slides down. 
		var slideNavDownDelay=300;
		//navigation states
		var collapsedState={name:"collapsed",
							showSubAndSwitchState:function(ref){
								$slideNav.animate({top:showY}, 500);
								ref.context.setState(ref.context.getExpandedState());
								ref.context.state.showSub();
							},
							showSub:function(ref){
								clearInterval(subnavDownDelay);
								subnavDownDelay=setTimeout(function(){
									ref.showSubAndSwitchState(ref)}, slideNavDownDelay);
							},
							hideSub:function(){
								clearInterval(subnavDownDelay);
							}
		};
		var expandedState={
							name:"expanded",
							mainMenuPositionX:null,
							subnavbackUpDelay:null,
							slideNavWrapperWidth:null,
							showSub:function(){
								 clearInterval(this.subnavbackUpDelay);
								 this.showHideSubnavDiv(); 	
							},
							hideSub:function(ref){
								clearInterval(ref.subnavbackUpDelay);
								ref.subnavbackUpDelay=setTimeout(function(){ref.hideSubDelay(ref)}, 800);
								
							},
							hideSubDelay:function(ref){
								if(!ref.context.okToClose) return;
								$slideNav.animate({top:hideY}, 500);
								ref.context.setState(ref.context.getCollapsedState());
							},
							showHideSubnavDiv:function(){
								var $newSubnav=subnavDivs[this.context.menuNumber];
								if($newSubnav.css("display")!="none"){
									return;
								};
								for ( var sub in subnavDivs){
									subnavDivs[sub].fadeOut(100);
								}
								//calculate the position of the subnav based on the position of the main nav item
								
								var leftOffset=this.mainMenuPositionX+this.context.menuPosition;
								//available width for the positionning 
								var availableWidth=this.slideNavWrapperWidth;
								//measure the width of the sub div
								leftOffset=Math.min(leftOffset, availableWidth-$newSubnav.outerWidth(false));
								//position the subnav
								$newSubnav.css("left", leftOffset);
								$newSubnav.stop(true, true);
								$newSubnav.fadeIn(250);
								
							}
		};
		//this where we keep track of states: collapsed and exteneded and also execute onmouseOver and Out functions
		var stateContext={
			collapsed:collapsedState,
			expanded:expandedState,
			state:null,
			okToClose:true,
			menuNumber:null,
			menuPosition:0,

			setState:function(state){
				this.state=state;
			},
			getCollapsedState:function(){
				return collapsedState;
			},
			getExpandedState:function(){
				return expandedState;
			},
			doCollapse:function(){
				this.state.hideSub(this.state);
			},
			doExpand:function(e){
				var $targetOver=$(e.target);
				var $menuItem=$targetOver.parent();
				this.menuNumber=getMenuNumber($menuItem);
				this.menuPosition=$menuItem.position().left;
				this.state.showSub(stateContext.getCollapsedState());
			},
			onSlideBackOver:function(e){
				this.okToClose=false;
			},
			onSlideBackOut:function(e){
				this.okToClose=true;
				this.doCollapse();
			},
			init:function(){
				//cache selectors
				this.expanded.mainMenuPositionX=$("#main-nav-wrapper ul[class*=main-menu]").position().left,
				this.expanded.slideNavWrapperWidth=$("#slide-nav-wrapper").outerWidth(false);
				collapsedState.context=expandedState.context=this;	
				this.state=this.collapsed;
			}
		
		};
		//parse DOM
		hideY=-$slideNav.height()+$("#main-nav-back").height()-5;
		showY=$("#main-nav-back").height();
		//position the slide nav so it's hidden on load
		$slideNav.css("top", hideY);
		//attach on mouseover event to the main nav items
		$("ul.main-menu").find("li a").each( function(index) {
			//let's find a subnav div with the same class
			menuNumber=getMenuNumber($(this).parent());
			var $matchingSubnav=$("#slide-nav-wrapper div[class*="+menuNumber+"]");
			if($matchingSubnav.find("ul li").length!=0 ){
				//store the subnav div
				subnavDivs[menuNumber]=$matchingSubnav;	
				$(this).mouseover(function(e){
					stateContext.doExpand(e)}).mouseout(function(e){stateContext.doCollapse(e, stateContext)});
			}
			
	 });
	// attach on mouseover event to the slide-nav
		$slideNav.mouseover(function(e){
			stateContext.onSlideBackOver(e, stateContext);
		}).mouseout(function(e){
			stateContext.onSlideBackOut(e, stateContext)
		})
		//init state machine
		stateContext.init();
	
	 } //End prepare nav	
	 
	function getMenuNumber($menuItem){
		//regex to find menu number in the mouseover main nav item class
		var regex=/menu-\d+/;
		return regex.exec($menuItem.attr("class"));
	}	
	
	prepareNav();

});

;
//let's not polute global space
var footerNS = footerNS || {};
$(document).ready(localeSelectInit);

function localeSelectInit(){
	footerNS.locale_wrapper=$("#locale-select-wrapper");
	footerNS.locale_overlay=$("#select-locale-overlay");
	footerNS.locale_overlay.hide().css("opacity", "0");
	footerNS.locale_wrapper.hide();
	$("#locale-close-button").click(function(){
		toggleLocaleSelector();
		return false;
    });
	footerNS.locale_overlay.click(toggleLocaleSelector);
	$("#locale-select").bind("click", function(e){
        e.stopPropagation();
	});
	var chooseRegionLink=$("#choose-locale");
	chooseRegionLink.attr("href", "#").click(function() {
		toggleLocaleSelector();
		return false;
	});
	chooseRegionLink.attr("class", Drupal.settings.tesla.locale || "en_US");
}

function toggleLocaleSelector(e){
	if(footerNS.locale_overlay.css("opacity") == "0"){
		footerNS.locale_overlay.css("display", "block");
		var topCss= Math.max($(window).scrollTop()+40,($(window).scrollTop())+($(window).height() -  footerNS.locale_wrapper.outerHeight()) / 2)+"px";
		footerNS.locale_wrapper.css("top", topCss);
		footerNS.locale_wrapper.css("left", Math.max(0,($(window).width()-footerNS.locale_wrapper.outerWidth())/2)+$(window).scrollLeft()+"px");
		footerNS.locale_overlay.animate({opacity:0.7});
		footerNS.locale_wrapper.fadeIn(810);
	}else{
		footerNS.locale_overlay.animate({opacity:0}, function(){
			$(this).css("display", "none");
		});
		footerNS.locale_wrapper.fadeOut(490);
	}
	return false;
}
;
/*=============================================
=            Tesla Retina Functions          =
=                       2014                 =
=                      @manny                =
=============================================*/

/**
*
* Simply function to detect if end-user is on a Retina-friendly device.
* @returns boolean
*
**/
function isRetina() {
    var is_retina = window.devicePixelRatio > 1 ||
    ( window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches );
    return is_retina;
}

/**
*
* For any image/asset that has the 'retina' class, use retina version, if it exists
*
**/
function updateImagesToRetina() {
    if ( isRetina() ) {
        debug.log("User is on a retina device. Update certain images to use Retina version");

        var retina_images       = $("img.retina");
        var retina_image_length = retina_images.length;
        debug.log("We have the following number of images to get the retina version for", retina_image_length);

        if ( retina_image_length ) {
            var retina_file_format = "@2x";
            for(var i = 0; i < retina_image_length; i++) {
                var imageType = retina_images[i].src.substr(-4);
                var imageName = retina_images[i].src.substr(0, retina_images[i].src.length - 4);
                imageName    += retina_file_format + imageType;

                // re-assign image
                retina_images[i].src = imageName;
            }
        }
    }
}

$(document).ready(function() {
    updateImagesToRetina();
});
;
/*
 * JavaScript Debug - v0.3 - 6/8/2009
 * http://benalman.com/projects/javascript-debug-console-log/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */
window.debug=(function(){var c=this,e=Array.prototype.slice,b=c.console,i={},f,g,j=9,d=["error","warn","info","debug","log"],m="assert clear count dir dirxml group groupEnd profile profileEnd time timeEnd trace".split(" "),k=m.length,a=[];while(--k>=0){(function(n){i[n]=function(){j!==0&&b&&b[n]&&b[n].apply(b,arguments)}})(m[k])}k=d.length;while(--k>=0){(function(n,o){i[o]=function(){var q=e.call(arguments),p=[o].concat(q);a.push(p);h(p);if(!b||!l(n)){return}b.firebug?b[o].apply(c,q):b[o]?b[o](q):b.log(q)}})(k,d[k])}function h(n){if(f&&(g||!b||!b.log)){f.apply(c,n)}}i.setLevel=function(n){j=typeof n==="number"?n:9};function l(n){return j>0?j>n:d.length+j<=n}i.setCallback=function(){var o=e.call(arguments),n=a.length,p=n;f=o.shift()||null;g=typeof o[0]==="boolean"?o.shift():false;p-=typeof o[0]==="number"?o.shift():n;while(p<n){h(a[p++])}};return i})();
//window.debug = {debug: function(){}, info: function(){}, log: function(){}, setLevel: function(){}, warn: function(){}, error: function(){} }  // TESTING ONLY DISABLE !!!
log = function(str){try{console.log(str);}catch(err){}}
;
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();;
/**
 * Browser detect - based on (with TESLA MODIFICATIONS / ADDITIONS)
 * http://www.quirksmode.org/js/detect.html
 *
 * Usage:
 * The following are available immediately upon invoking this script:
 * BrowserDetect.browser; // Browser name
 * BrowserDetect.version; // Browser version
 * BrowserDetect.OS       // OS name
 * BrowserDetect.summary  // Summary object with the above items concatted together
 *
 * Example:
 * // Initialize BrowserDetect object if it hasn't already been done
 * if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.summary) === "undefined") {
 *    BrowserDetect.init();
 * }
 * // +
 * // Set the BrowserDetect propery as input value
 * if (typeof(BrowserDetect) !== "undefined" && typeof(BrowserDetect.setValueToInput) !== "undefined") {
 *     var browserDetectInput = $('#browser_detect_summary');
 *     if (browserDetectInput.length && browserDetectInput.val() === '') {
 *         BrowserDetect.setValueToInput(browserDetectInput, 'summary');
 *     }
 * }
 */
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
        // TESLA ADDITION: Get the summary in one call
        this.summary = { "browser": this.browser,
                         "version": this.version,
                         "OS": this.OS
                       };
    },
    // TESLA ADDITION: Function to set value to input
    setValueToInput: function(obj, prop) {
        if (typeof(this.prop) === "undefined") {
            prop = 'summary';
        }
        var propValue = this[prop];
        if (obj.length && typeof(propValue) !== "undefined") {
            propValue = (typeof propValue === 'object') ? JSON.stringify(propValue) : propValue;
            obj.val(propValue);
        }
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {       // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
// TESLA MODIFICATION: DON'T auto-init this script on every page
// if (typeof(BrowserDetect) === "undefined") {
//      BrowserDetect.init();
// }
;
