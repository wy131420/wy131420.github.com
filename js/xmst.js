/*xmst.js v1.3.14*/(function(){function o(){var e=window.location.hostname,t=e.split(".");size=t.length;var n="."+t[size-2]+"."+t[size-1];return n}function u(){return navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage}function a(){return navigator.vendor}function f(){return navigator.platform}function l(){return screen.width+"*"+screen.height}function c(e,t,n,r){var i=arguments.length;i==3?document.cookie=e+"="+t+";path=/;domain="+n:document.cookie=e+"="+t+";path=/;domain="+n+";expires="+r}function h(e){var t=document.cookie,n=p(t),r=n.split(";");for(var i=0;i<r.length;i++){var s=r[i].split("=");if(s.length>1&&s[0]==e)return s[1]}return""}function p(e){var t="";for(var n=0;n<e.length;n++){var r=e.charAt(n);r!=" "&&(t+=r)}return t}function d(){return t.round(2147483647*t.random())}function v(e,t){var n=new Date;n.setTime(n.getTime()+31104e6);var r=e+"="+t+";"+"path=/;domain="+o()+";expires="+n.toGMTString();window.document.cookie=r}function m(e){var t=/.*\:\/\/([^\/]*).*/,n=e.match(t),r="";return typeof n!="undefined"&&null!=n&&(r=n[1]),r}function g(){var e=new Date,t=e.getTime()+"_"+Math.round(Math.random()*1e4);return t}function y(){var e="";if(s==[])return"";for(var t in s)e+="&"+t+"="+s[t];return e}function b(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}function w(){var e=document.location.href.replace(/&/g,"|"),t=document.referrer.replace(/&/g,"|");t=t.toLowerCase();if(t){var n=m(t),r=h("lastsource");r&&c("lastsource",r,o()),(n.indexOf(".mi.com")<0||n.indexOf("s1.mi.com")>-1||n.indexOf("p.www.xiaomi.com")>-1||n.indexOf("a.union.mi.com")>-1)&&c("lastsource",n,o())}var i=h("xm_www_sid"),s=h("mstuid"),p=h("muuid"),v=h("mucid"),y=h("mstz")||"";if(y===""||y.split("|").length<3){var b=[];b[0]="",b[1]="",b[2]=d().toString()+"."+0;var w="mstz",E=b.join("|");c(w,E,o())}y=h("mstz");var S=y.split("|")||[],x=S.length==4?0:1,T=S[0]||"",N=S[1]||"",C=[];C=S[2].split(".");var k=C[0],L=parseInt(C[1])+1;S[2]=C[0]+"."+L.toString();var A=S[3]||"",O=S[4]||"",M=S[5]||"",_=0,D=encodeURIComponent(t);D==""&&(O="",M=""),D!=O&&e!=t?(M=O,O=D):D!=""&&(_=1),S[3]=A,S[4]=O,S[5]=M,c("mstz",S.join("|"),o());var P=h("lastsource"),H=0;if(s===""){H=1,s=g();var B=new Date;B.setTime(B.getTime()+31104e6),c("mstuid",s,o(),B.toGMTString())}var j="",F=new Date;return j="mid="+h("userId")+"&phpsessid="+i+"&mstuid="+s+"&muuid="+p+"&mucid="+v+"&sessionId="+k+"&step="+L+"&new_visitor="+H+"&mstprevpid="+T+"&mstprev_pid_loc="+A+"&prevtarget="+N+"&lastsource="+P+"&timestamp="+F.getTime()+"&ref="+D+"&domain="+o()+"&screen="+l()+"&language="+u()+"&vendor="+a()+"&platform="+f()+"&gu="+M+"&pu="+O+"&rf="+_,j}function E(){var e=window.performance||window.webkitPerformance,e=e&&e.timing;if(!e)return"";var t=e.navigationStart,n=[];n.ldns=e.domainLookupEnd-e.domainLookupStart,n.con=e.connectEnd-e.connectStart,n.res=e.responseStart-e.requestStart,n.down=e.responseEnd-e.responseStart,n.redi=e.fetchStart-t,n.total=e.loadEventStart-t>=0?e.loadEventStart-t:e.domContentLoadedEventStart-t,n.total=n.total>=0?n.total:e.domInteractive-t,n.total=n.total>=0?n.total:0;var r="";for(var i in n)r+="&"+i+"="+n[i];return r}function S(e){b(e)}function x(e){return"function"==typeof e}var e="prototype",t=Math,n="",r="",s=[],T=function(){this.p=[]},N=T[e];N.trackPageView=function(){var e=w(),t=y(),n=E();S(C+e+n+t)},N.push=function(e){if(x(e[0])){e[0](e.slice(1));return}N[e[0]](e.slice(1))},N.setDomainId=function(e){s.domain_id=e[0]},N.setUid=function(e){s.uid=e[0]},N.setVars=function(e){s[e[0]]=e[1]},N.trackEvent=function(e){var t="",n="",r="",i="",s="",p="",v=new Date,m=h("mstz").split("|")||[],g="",b="",w="",E="",x=0;m.length>=3&&(g=m[0],b=m[1],w=m[2].split(".")[0]||d().toString()+"."+0);var T=e.length==4?1:0;if(T)t=e[1],s=e[2],r=encodeURIComponent(e[3]),g!=s&&(m[0]=s,x=1);else{n=e[0],r=encodeURIComponent(e[1]),i=e[2],m[0]=n,E=m[3]||"",E!=i&&(m[3]=i,x=1);var N=[];N=m[2].split("."),w=N[0]}var v=new Date,k=h("xm_www_sid");b!=r&&(m[1]=r,x=1),x&&c("mstz",m.join("|"),o());var L="mid="+h("userId")+"&phpsessid="+k+"&mstuid="+h("mstuid")+"&sessionId="+w+"&muuid="+h("muuid")+"&mucid="+h("mucid")+"&mstprevpid="+g+"&lastsource="+h("lastsource")+"&timestamp="+v.getTime()+"&domain="+o()+"&screen="+l()+"&language="+u()+"&vendor="+a()+"&platform="+f(),A="";T?A="mstpid="+s+"&"+L+"&target="+r+"&prevtarget="+b+"&category="+t:A="mstpid="+n+"&"+L+"&target="+r+"&prevtarget="+b+"&pid_loc="+i+"&mstprev_pid_loc="+E;var O=y();S(C+A+O)};})();