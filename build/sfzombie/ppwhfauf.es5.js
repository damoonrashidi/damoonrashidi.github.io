/*! Built with http://stenciljs.com */
sfzombie.loadBundle("ppwhfauf",["exports"],function(t){var e=window.sfzombie.h,n=function(){function t(){}return t.prototype.render=function(){return e("div",{class:"host"},e("div",null,e("h1",null,"AAAAaaaAaaAAh!!!"),e("h2",null,"(eɪ-eɪ-eɪ-eɪ)")),e("p",null,"A minigame where you control everything with the position of your head and the volume of your voice."),e("p",null,e("a",{href:"http://github.com/damoonrashidi/aaaaa"},"Github")," and ",e("a",{href:"https://damoonrashidi.github.io/"},"Live Demo")),e("img",{src:"../../assets/projects/aaaaa.webp",alt:""}))},Object.defineProperty(t,"is",{get:function(){return"sf-aaaaa"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".host{background:#1141cd;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;color:#fff;transform:translateY(-151px);padding:100px 0}h1{font:460 4.5em/1em VT323;text-shadow:3px 3px 0 red;word-break:break-all;padding:10px 30px 0 30px;margin:0}h2{text-align:right;font:400 1em/1em 'Open Sans',sans-serif;color:#ffffff99;margin:0 40px 0 0}p{font:460 2em/1.5em VT323;max-width:500px}a{color:#fff;border:3px solid #fff;display:inline-block;text-decoration:none;padding:2px 8px}img{display:block;margin:50px auto 100px auto;max-width:400px}"},enumerable:!0,configurable:!0}),t}(),i=function(){function t(){}return t.prototype.render=function(){return e("div",{style:{marginBottom:"-150px"}},e("sf-hero",null),e("sf-intro",null),e("sf-wdp",null),e("sf-bitalarm",null),e("sf-aaaaa",null))},Object.defineProperty(t,"is",{get:function(){return"sf-app"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),t}(),o=function(){function t(){}return t.prototype.render=function(){return e("div",{class:"host"},e("div",{class:"idiotic-phone-thing-that-everyone-has"},e("img",{src:"../../assets/projects/bitalarm.webp"})),e("div",{class:"content"},e("h2",null,"BitAlarm"),e("p",null,"Mobile app written in ",e("a",{href:"https://dartlang.org"},"Dart")," + ",e("a",{href:"https://flutter.io"},"Flutter")," that helps you keep track of your crypto-portfolio as well as market movements."),e("p",{class:"projects-links"},e("a",{href:"https://github.com/damoonrashidi/bitalarm"},"Github"),e("a",{href:"https://play.google.com/store/apps/details?id=com.yourcompany.bitalarm"},"Play store"))))},Object.defineProperty(t,"is",{get:function(){return"sf-bitalarm"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".host{min-height:900px;background:0 0;transform:translateY(-151px);display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;transform-style:preserve-3d;perspective:1000px}.host .idiotic-phone-thing-that-everyone-has{transform-style:preserve-3d;transform:rotateY(-22deg)}.host .content{z-index:2;width:100%;padding:40px 0 40px 80px;background:0 0}\@media all and (min-width:900px){.host .content{width:500px}}.host .content h2{font:300 4em/1em \"Passion One\",sans-serif;color:#000;margin:0}.host .content .projects-links a{display:inline-block;margin:0 20px 0 0;color:#888}.host .content p{font:300 1.5em/1.5em \"Open Sans\",sans-serif;color:#888;max-width:500px}.host .content p a{color:#888;margin:0}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t,e,n){this.position=t,this.size=e,this.speed=n,this.lineColor="hsla("+Math.floor(360*Math.random())+", 100%, 40%, 0.1)"}return t.prototype.toPoint=function(){return this.position},t}();function r(t,e,n){void 0===t&&(t=0),void 0===e&&(e=window.innerWidth),void 0===n&&(n=!1);var i=(Math.random()+t)*e%e;return n?Math.floor(i):i}var l=function(){function t(){var t=this;this.WIDTH=window.innerWidth,this.HEIGHT=500,this.animated=!0,this.balls=Array(500).keys().slice().map(function(e){return new a({x:r(),y:r(0,t.HEIGHT)},r(.2,1),{x:r(-.5,.5),y:r(-.5,.5)})})}return t.prototype.componentDidLoad=function(){var t=this.element.shadowRoot.querySelector("canvas");this.ctx=t.getContext("2d"),this.ctx.fillStyle="#fff",this.paint((new Date).getTime())},t.prototype.render=function(){return e("div",{class:"host"},e("div",{class:"header"},e("h1",null,"Damoon Rashidi"),e("h2",null,"sideprojects, for fun!")),e("canvas",{width:this.WIDTH,height:this.HEIGHT}))},t.prototype.paint=function(t){var e=this,n=this.ctx;if((new Date).getTime()-t>16){n.clearRect(0,0,this.WIDTH,this.HEIGHT),n.fillStyle="#fff";for(var i=0;i<this.balls.length;i++){var o=this.balls[i],a=this.findClosestBalls(o.position);this.balls[i].position.x+=o.speed.x,this.balls[i].position.y+=o.speed.y,n.moveTo(o.position.x,o.position.y),n.beginPath(),n.arc(o.position.x,o.position.y,o.size,0,2*Math.PI),n.fill(),n.strokeStyle=o.lineColor;for(var r=0;r<a.length;r++)n.lineTo(a[r].position.x,a[r].position.y);n.stroke(),(o.position.x<0||o.position.x>this.WIDTH)&&(this.balls[i].speed.x=-1.2*o.speed.x),(o.position.y<0||o.position.y>this.HEIGHT)&&(this.balls[i].speed.y=-1.2*o.speed.y)}this.animated&&setTimeout(function(){return requestAnimationFrame(e.paint.bind(e,(new Date).getTime()))},.16)}else setTimeout(function(){return requestAnimationFrame(e.paint.bind(e,t))},.16)},t.prototype.findClosestBalls=function(t,e){var n=this;return void 0===e&&(e=10),this.balls.filter(function(e){return n.distance(t,e.position)<40}).slice(1,e+1)},t.prototype.handleResize=function(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.ctx.fillStyle="#fff"},t.prototype.handleScroll=function(){window.scrollY>400&&this.animated?this.animated=!1:window.scrollY<=400&&!this.animated&&(this.animated=!0,window.requestAnimationFrame(this.paint.bind(this,(new Date).getTime())))},t.prototype.distance=function(t,e){return Math.sqrt(Math.pow(Math.abs(t.x-e.x),2)+Math.pow(Math.abs(t.y-e.y),2))},Object.defineProperty(t,"is",{get:function(){return"sf-hero"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{state:!0},element:{elementRef:!0},HEIGHT:{state:!0},WIDTH:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".host{height:500px;width:100vw;background:#223;display:block}.header{text-transform:uppercase;position:absolute;color:#fff;transform:translate(50px,50px);width:calc(100vw - 100px)}\@media all and (min-width:900px){.header{transform:translate(100px,100px);width:calc(100vw - 100px)}}.header h1{font:400 5em/1em 'Passion One',sans-serif}.header h2{font:200 2em/0 'Passion One',sans-serif;color:#eee}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.render=function(){return e("div",{class:"host"},e("div",{class:"container"},e("p",null,"My name is Damoon, I write ",e("span",{style:{letterSpacing:"-3px",color:"#00f"}},"JAVASCRIPT")),e("hr",null),e("hr",null)))},Object.defineProperty(t,"is",{get:function(){return"sf-intro"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".host{background:#eee;padding:50px 0;transform:translateY(-50px);z-Index:-1;clip-path:polygon(0 50px,100% 0,100% 100%,0 100%)}.container{box-sizing:border-box;padding:100px 0;margin:20px auto;width:100%;font:300 1.5em/2.2em 'IBM Plex Mono',monospace;letter-spacing:36px}\@media all and (min-width:900px){.container{width:650px}}hr{margin-bottom:10px;border-bottom:1px solid #000;transform:scale(.8) skewY(4deg)}\@media all and (min-width:900px){hr{transform:scale(1.5) skewY(4deg)}}"},enumerable:!0,configurable:!0}),t}(),h=function(){function t(){}return t.prototype.componentDidLoad=function(){this.img=this.el.shadowRoot.querySelector("svg"),this.calculateLongshadow()},t.prototype.render=function(){return e("div",{class:"host"},e("div",{class:"container"},e("h2",null,"~/wdp"),e("p",null,"wdp ",e("span",{class:"lowlight"},"(wɒt ʌp)")," is a command line tool for getting a developer news feed in the terminal."),e("p",null,"install via yarn ",e("span",{class:"lowlight"},"(yarn add --global wdp)")," and then run ",e("span",{class:"lowlight"},"wdp")," in your terminal"),e("p",null,e("a",{href:"https://github.com/damoonrashidi/wdp"},"Github")," and ",e("a",{href:"http://npmjs.org/package/wdp"},"NPM"))),e("div",{class:"project-image"},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"659",height:"328"},e("g",{fill:"none","fill-rule":"evenodd"},e("rect",{width:"625",height:"316.478",y:"11.522",fill:"#1E1E1E",rx:"4"}),e("path",{fill:"#505050",d:"M3 0h619a3 3 0 0 1 3 3v12.363H0V3a3 3 0 0 1 3-3z"}),e("text",{fill:"#75CB31","font-family":"FiraCode-Retina, Fira Code","font-size":"14","font-weight":"500",transform:"translate(23 23)"},e("tspan",{x:"39",y:"18"},"wdp")),e("text",{fill:"#7B7B7B","font-family":"FiraCode-Retina, Fira Code","font-size":"14","font-weight":"500",transform:"translate(23 23)"},e("tspan",{x:"15",y:"18"},"~/")),e("text",{fill:"#FFF","font-family":"FiraCode-Bold, Fira Code","font-size":"15","font-weight":"bold",transform:"translate(23 23)"},e("tspan",{x:"0",y:"18"},"λ")),e("path",{stroke:"#636363",d:"M20.5 64.357h294.711V167.5H20.5z"}),e("path",{fill:"#56AD28",d:"M34.593 88.543h290.334v16.2H34.593z"}),e("path",{fill:"#70E035",d:"M36.897 83.914h290.334v16.2H36.897z"}),e("path",{fill:"#56AD28",d:"M324.923 104.754l2.327-4.668h-2.327zM34.591 88.55l2.308-4.653v4.653z"}),e("path",{fill:"#373737",d:"M27.68 61.543h290.335v16.2H27.68z"}),e("path",{fill:"#616161",d:"M29.217 60H319.55v16.2H29.217z"}),e("path",{fill:"#373737",d:"M27.688 61.557l1.537-1.556v1.556zM318.006 77.75l1.549-1.546h-1.565zM27.68 115.543h290.335v16.2H27.68z"}),e("path",{fill:"#616161",d:"M29.217 114H319.55v16.2H29.217z"}),e("path",{fill:"#373737",d:"M27.688 115.557l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565zM27.68 140.229h290.335v16.2H27.68z"}),e("path",{fill:"#616161",d:"M29.217 138.686H319.55v16.2H29.217z"}),e("path",{fill:"#373737",d:"M27.688 140.243l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565z"}),e("path",{stroke:"#474747",d:"M351.5 63.873h294.711V166.5H351.5z"}),e("path",{fill:"#2C5A13",d:"M365.593 63.373h290.334v16.12H365.593z"}),e("path",{fill:"#47951E",d:"M367.897 58.768h290.334v16.12H367.897z"}),e("path",{fill:"#2C5A13",d:"M655.923 79.504l2.327-4.644h-2.327zM365.591 63.38l2.308-4.63v4.63z"}),e("path",{fill:"#2E2E2E",d:"M358.68 89.472h290.335v16.12H358.68z"}),e("path",{fill:"#4E4E4E",d:"M360.217 87.937H650.55v16.12H360.217z"}),e("path",{fill:"#2E2E2E",d:"M358.688 89.486l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"}),e("path",{fill:"#4E4E4E",d:"M360.217 112.5H650.55v16.12H360.217z"}),e("path",{fill:"#2E2E2E",d:"M358.688 114.049l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"}),e("path",{fill:"#4E4E4E",d:"M360.217 137.063H650.55v16.12H360.217z"}),e("path",{fill:"#2E2E2E",d:"M358.688 138.612l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565z"}),e("path",{stroke:"#47951E","stroke-width":"4",d:"M41.338 286.022l63.212-62.883L131.552 250l15.258-15.178 40.836 40.624 72.381-72.004 48.884 48.629 19.209-19.108 39.322 39.117 22.812-22.692 21.148 21.038 36.198-36.01 18.541 18.444 33.19-33.017 49.399 49.141 25.574-25.442 16.271 16.186"}),e("path",{stroke:"#47951E","stroke-width":"4",d:"M29.039 289.845l63.212-62.882 27.002 26.861 15.257-15.178 40.837 40.623 72.381-72.003 48.884 48.629 19.208-19.109 39.323 39.118 22.811-22.693 21.148 21.038 36.199-36.009 18.54 18.443 33.191-33.017 49.398 49.141 25.575-25.441 16.27 16.185",opacity:".17"}),e("path",{stroke:"#414141",d:"M22.375 195.626v103.271h574.138"}))),e("div",{class:"long-shadow",style:{clipPath:this.clipPath}})))},t.prototype.calculateLongshadow=function(){var t=window.innerWidth,e=this.img.getBoundingClientRect(),n=e.left,i=e.right;this.clipPath="polygon(\n      "+n/t*100+"% 1%, "+(i/t*100-2)+"% .3%, 125% 87%, "+(n/t*100+10)+"% 60%, "+n/t*100+"% 44%\n    )"},Object.defineProperty(t,"is",{get:function(){return"sf-wdp"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{clipPath:{state:!0},el:{elementRef:!0},img:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".host{background:#3e3e3e;transform:translateY(-100px);z-Index:-1;clip-path:polygon(0 50px,100% 0,100% 100%,0 100%);padding:80px 0}.host .container{max-width:900px;margin:0 auto;padding:60px}\@media all and (min-width:1024){.host .container{padding:60px 0}}.host h2{font:400 2em/1.5em 'Open Sans',sans-serif;color:#63c845}.host p{color:#ddd;font:400 1.3em/1.5em 'Open Sans',sans-serif}.host a{color:#fff}.host .lowlight{color:#868686}.host .project-image{display:flex;justify-content:center;align-items:flex-start}.host .project-image svg{display:block;margin:0 auto;padding:0 0 50px 0}\@media all and (max-width:900px){.host .project-image svg{transform:scale(.5)}}.host .project-image .long-shadow{position:absolute;width:100vw;height:750px;background:rgba(0,0,0,.3);z-index:-1;clip-path:polygon(14% 1%,83% .3%,100% 87%,19% 60%,14% 44%)}\@media all and (max-width:900px){.host .project-image .long-shadow{display:none}}"},enumerable:!0,configurable:!0}),t}();t.SfAaaaa=n,t.SfApp=i,t.SfBitalarm=o,t.SfHero=l,t.SfIntro=s,t.SfWdp=h,Object.defineProperty(t,"__esModule",{value:!0})});