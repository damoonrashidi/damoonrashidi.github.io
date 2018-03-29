/*! Built with http://stenciljs.com */
const { h } = window.sfzombie;

class AaaaaComponent {
    render() {
        return h("div", { class: "host" },
            h("div", null,
                h("h1", null, "AAAAaaaAaaAAh!!!"),
                h("h2", null, "(e\u026A-e\u026A-e\u026A-e\u026A)")),
            h("p", null, "A minigame where you control everything with the position of your head and the volume of your voice."),
            h("p", null,
                h("a", { href: "http://github.com/damoonrashidi/damoonrashidi.github.io" }, "Github"),
                " and ",
                h("a", { href: "https://damoonrashidi.github.io/" }, "Live Demo")),
            h("img", { src: "../../assets/projects/aaaaa.webp", alt: "" }));
    }
    static get is() { return "sf-aaaaa"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".host[data-sf-aaaaa] {\n  background: #1141CD;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  color: #fff;\n  transform: translateY(-151px); }\n\nh1[data-sf-aaaaa] {\n  font: 460 4.5em/1em \"VT323\";\n  text-shadow: 3px 3px 0 #f00;\n  word-break: break-all;\n  padding: 10px 30px 0 30px;\n  margin: 0; }\n\nh2[data-sf-aaaaa] {\n  text-align: right;\n  font: 400 1em/1em 'Open Sans', sans-serif;\n  color: #ffffff99;\n  margin: 0 40px 0 0; }\n\np[data-sf-aaaaa] {\n  font: 460 2em/1.5em \"VT323\";\n  max-width: 500px; }\n\na[data-sf-aaaaa] {\n  color: #fff;\n  border: 3px solid #fff;\n  display: inline-block;\n  text-decoration: none;\n  padding: 2px 8px; }\n\nimg[data-sf-aaaaa] {\n  display: block;\n  margin: 50px auto 100px auto;\n  max-width: 400px; }"; }
}

class AppRoot {
    render() {
        return (h("div", { style: { marginBottom: '-150px' } },
            h("sf-hero", null),
            h("sf-intro", null),
            h("sf-wdp", null),
            h("sf-bitalarm", null),
            h("sf-aaaaa", null)));
    }
    static get is() { return "sf-app"; }
    static get encapsulation() { return "shadow"; }
}

class BitAlarmComponent {
    render() {
        return h("div", { class: "host" },
            h("div", { class: "idiotic-phone-thing-that-everyone-has" },
                h("img", { src: "../../assets/projects/bitalarm.webp" })),
            h("div", { class: "content" },
                h("h2", null, "BitAlarm"),
                h("p", null,
                    "Mobile app written in ",
                    h("a", { href: "https://dartlang.org" }, "Dart"),
                    " + ",
                    h("a", { href: "https://flutter.io" }, "Flutter"),
                    " that helps you keep track of your crypto-portfolio as well as market movements."),
                h("p", { class: "projects-links" },
                    h("a", { href: "https://github.com/damoonrashidi/bitalarm" }, "Github"),
                    h("a", { href: "https://play.google.com/store/apps/details?id=com.yourcompany.bitalarm" }, "Play store"))));
    }
    static get is() { return "sf-bitalarm"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".host[data-sf-bitalarm] {\n  min-height: 900px;\n  background: transparent;\n  transform: translateY(-151px);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  transform-style: preserve-3d;\n  perspective: 1000px; }\n  .host[data-sf-bitalarm]   .idiotic-phone-thing-that-everyone-has[data-sf-bitalarm] {\n    transform-style: preserve-3d;\n    transform: rotateY(-22deg); }\n  .host[data-sf-bitalarm]   .content[data-sf-bitalarm] {\n    z-index: 2;\n    width: 100%;\n    padding: 40px 0 40px 80px;\n    background: transparent; }\n    \@media all and (min-width: 900px) {\n      .host[data-sf-bitalarm]   .content[data-sf-bitalarm] {\n        width: 500px; } }\n    .host[data-sf-bitalarm]   .content[data-sf-bitalarm]   h2[data-sf-bitalarm] {\n      font: 300 4em/1em \"Passion One\", sans-serif;\n      color: #000;\n      margin: 0; }\n    .host[data-sf-bitalarm]   .content[data-sf-bitalarm]   .projects-links[data-sf-bitalarm]   a[data-sf-bitalarm] {\n      display: inline-block;\n      margin: 0 20px 0 0;\n      color: #888; }\n    .host[data-sf-bitalarm]   .content[data-sf-bitalarm]   p[data-sf-bitalarm] {\n      font: 300 1.5em/1.5em \"Open Sans\", sans-serif;\n      color: #888;\n      max-width: 500px; }\n      .host[data-sf-bitalarm]   .content[data-sf-bitalarm]   p[data-sf-bitalarm]   a[data-sf-bitalarm] {\n        color: #888;\n        margin: 0; }"; }
}

class Ball {
    constructor(position, size, speed) {
        this.position = position;
        this.size = size;
        this.speed = speed;
        this.lineColor = `hsla(${Math.floor(Math.random() * 360)}, 100%, 40%, 0.1)`;
    }
    toPoint() {
        return this.position;
    }
}

function r(min = 0, max = window.innerWidth, round = false) {
    const random = (Math.random() + min) * max % max;
    return round ? Math.floor(random) : random;
}
class HeroComponent {
    constructor() {
        this.WIDTH = window.innerWidth;
        this.HEIGHT = 500;
        this.animated = true;
        this.balls = [...Array(500).keys()].map(_ => new Ball({ x: r(), y: r(0, this.HEIGHT) }, r(.2, 1), { x: r(-.5, .5), y: r(-.5, .5) }));
    }
    componentDidLoad() {
        const canvas = this.element.shadowRoot.querySelector('canvas');
        this.ctx = canvas.getContext('2d');
        this.ctx.fillStyle = '#fff';
        this.paint(new Date().getTime());
    }
    render() {
        return (h("div", { class: "host" },
            h("div", { class: "header" },
                h("h1", null, "Damoon Rashidi"),
                h("h2", null, "sideprojects, for fun!")),
            h("canvas", { width: this.WIDTH, height: this.HEIGHT })));
    }
    paint(lastFrame) {
        let ctx = this.ctx;
        const now = new Date().getTime();
        const delta = now - lastFrame;
        if (delta > 16) {
            ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
            ctx.fillStyle = '#fff';
            for (let i = 0; i < this.balls.length; i++) {
                const ball = this.balls[i];
                const neighbors = this.findClosestBalls(ball.position);
                this.balls[i].position.x += ball.speed.x;
                this.balls[i].position.y += ball.speed.y;
                ctx.moveTo(ball.position.x, ball.position.y);
                ctx.beginPath();
                ctx.arc(ball.position.x, ball.position.y, ball.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = ball.lineColor;
                for (let j = 0; j < neighbors.length; j++) {
                    ctx.lineTo(neighbors[j].position.x, neighbors[j].position.y);
                    // ctx.quadraticCurveTo(ball.position.x - neighbors[j].position.x, ball.position.y - neighbors[j].position.y, neighbors[j].position.x, neighbors[j].position.y);
                }
                ctx.stroke();
                if (ball.position.x < 0 || ball.position.x > this.WIDTH) {
                    this.balls[i].speed.x = -(ball.speed.x * 1.2);
                }
                if (ball.position.y < 0 || ball.position.y > this.HEIGHT) {
                    this.balls[i].speed.y = -(ball.speed.y * 1.2);
                }
            }
            if (this.animated) {
                setTimeout(() => requestAnimationFrame(this.paint.bind(this, new Date().getTime())), .16);
            }
        }
        else {
            setTimeout(() => requestAnimationFrame(this.paint.bind(this, lastFrame)), .16);
        }
    }
    findClosestBalls(point, n = 10) {
        return this.balls
            .filter(ball => this.distance(point, ball.position) < 40)
            .slice(1, n + 1);
    }
    handleResize() {
        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;
        this.ctx.fillStyle = '#fff';
    }
    handleScroll() {
        if (window.scrollY > 400 && this.animated) {
            this.animated = false;
        }
        else if (window.scrollY <= 400 && !this.animated) {
            this.animated = true;
            window.requestAnimationFrame(this.paint.bind(this, new Date().getTime()));
        }
    }
    distance(a, b) {
        return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2));
    }
    static get is() { return "sf-hero"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "animated": { "state": true }, "element": { "elementRef": true }, "HEIGHT": { "state": true }, "WIDTH": { "state": true } }; }
    static get style() { return ".host[data-sf-hero] {\n  height: 500px;\n  width: 100vw;\n  background: #223;\n  display: block; }\n\n.header[data-sf-hero] {\n  text-transform: uppercase;\n  position: absolute;\n  color: #fff;\n  transform: translate(50px, 50px);\n  width: calc(100vw - 100px); }\n  \@media all and (min-width: 900px) {\n    .header[data-sf-hero] {\n      transform: translate(100px, 100px);\n      width: calc(100vw - 100px); } }\n  .header[data-sf-hero]   h1[data-sf-hero] {\n    font: 400 5em/1em 'Passion One', sans-serif; }\n  .header[data-sf-hero]   h2[data-sf-hero] {\n    font: 200 2em/0em 'Passion One', sans-serif;\n    color: #eee; }"; }
}

class IntroComponent {
    render() {
        return (h("div", { class: "host" },
            h("div", { class: "container" },
                h("p", null,
                    "My name is Damoon, I write ",
                    h("span", { style: { letterSpacing: '-3px', color: `#00f` } }, "JAVASCRIPT")),
                h("hr", null),
                h("hr", null))));
    }
    static get is() { return "sf-intro"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".host[data-sf-intro] {\n  background: #eee;\n  padding: 50px 0;\n  transform: translateY(-50px);\n  z-Index: -1;\n  clip-path: polygon(0 50px, 100% 0%, 100% 100%, 0% 100%); }\n\n.container[data-sf-intro] {\n  box-sizing: border-box;\n  padding: 100px 0;\n  margin: 20px auto;\n  width: 100%;\n  font: 300 1.5em/2.2em 'IBM Plex Mono', monospace;\n  letter-spacing: 36px; }\n  \@media all and (min-width: 900px) {\n    .container[data-sf-intro] {\n      width: 650px; } }\n\nhr[data-sf-intro] {\n  margin-bottom: 10px;\n  border-bottom: 1px solid #000;\n  transform: scale(0.8) skewY(4deg); }\n  \@media all and (min-width: 900px) {\n    hr[data-sf-intro] {\n      transform: scale(1.5) skewY(4deg); } }"; }
}

class WdpComponent {
    componentDidLoad() {
        this.img = this.el.shadowRoot.querySelector('svg');
        this.calculateLongshadow();
    }
    render() {
        return (h("div", { class: "host" },
            h("div", { class: "container" },
                h("h2", null, "~/wdp"),
                h("p", null,
                    "wdp ",
                    h("span", { class: "lowlight" }, "(w\u0252t \u028Cp)"),
                    " is a command line tool for getting a developer news feed in the terminal."),
                h("p", null,
                    "install via yarn ",
                    h("span", { class: "lowlight" }, "(yarn add --global wdp)"),
                    " and then run ",
                    h("span", { class: "lowlight" }, "wdp"),
                    " in your terminal"),
                h("p", null,
                    h("a", { href: "https://github.com/damoonrashidi/wdp" }, "Github"),
                    " and ",
                    h("a", { href: "http://npmjs.org/package/wdp" }, "NPM"))),
            h("div", { class: "project-image" },
                h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "659", height: "328" },
                    h("g", { fill: "none", "fill-rule": "evenodd" },
                        h("rect", { width: "625", height: "316.478", y: "11.522", fill: "#1E1E1E", rx: "4" }),
                        h("path", { fill: "#505050", d: "M3 0h619a3 3 0 0 1 3 3v12.363H0V3a3 3 0 0 1 3-3z" }),
                        h("text", { fill: "#75CB31", "font-family": "FiraCode-Retina, Fira Code", "font-size": "14", "font-weight": "500", transform: "translate(23 23)" },
                            h("tspan", { x: "39", y: "18" }, "wdp")),
                        h("text", { fill: "#7B7B7B", "font-family": "FiraCode-Retina, Fira Code", "font-size": "14", "font-weight": "500", transform: "translate(23 23)" },
                            h("tspan", { x: "15", y: "18" }, "~/")),
                        h("text", { fill: "#FFF", "font-family": "FiraCode-Bold, Fira Code", "font-size": "15", "font-weight": "bold", transform: "translate(23 23)" },
                            h("tspan", { x: "0", y: "18" }, "\u03BB")),
                        h("path", { stroke: "#636363", d: "M20.5 64.357h294.711V167.5H20.5z" }),
                        h("path", { fill: "#56AD28", d: "M34.593 88.543h290.334v16.2H34.593z" }),
                        h("path", { fill: "#70E035", d: "M36.897 83.914h290.334v16.2H36.897z" }),
                        h("path", { fill: "#56AD28", d: "M324.923 104.754l2.327-4.668h-2.327zM34.591 88.55l2.308-4.653v4.653z" }),
                        h("path", { fill: "#373737", d: "M27.68 61.543h290.335v16.2H27.68z" }),
                        h("path", { fill: "#616161", d: "M29.217 60H319.55v16.2H29.217z" }),
                        h("path", { fill: "#373737", d: "M27.688 61.557l1.537-1.556v1.556zM318.006 77.75l1.549-1.546h-1.565zM27.68 115.543h290.335v16.2H27.68z" }),
                        h("path", { fill: "#616161", d: "M29.217 114H319.55v16.2H29.217z" }),
                        h("path", { fill: "#373737", d: "M27.688 115.557l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565zM27.68 140.229h290.335v16.2H27.68z" }),
                        h("path", { fill: "#616161", d: "M29.217 138.686H319.55v16.2H29.217z" }),
                        h("path", { fill: "#373737", d: "M27.688 140.243l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565z" }),
                        h("path", { stroke: "#474747", d: "M351.5 63.873h294.711V166.5H351.5z" }),
                        h("path", { fill: "#2C5A13", d: "M365.593 63.373h290.334v16.12H365.593z" }),
                        h("path", { fill: "#47951E", d: "M367.897 58.768h290.334v16.12H367.897z" }),
                        h("path", { fill: "#2C5A13", d: "M655.923 79.504l2.327-4.644h-2.327zM365.591 63.38l2.308-4.63v4.63z" }),
                        h("path", { fill: "#2E2E2E", d: "M358.68 89.472h290.335v16.12H358.68z" }),
                        h("path", { fill: "#4E4E4E", d: "M360.217 87.937H650.55v16.12H360.217z" }),
                        h("path", { fill: "#2E2E2E", d: "M358.688 89.486l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z" }),
                        h("path", { fill: "#4E4E4E", d: "M360.217 112.5H650.55v16.12H360.217z" }),
                        h("path", { fill: "#2E2E2E", d: "M358.688 114.049l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z" }),
                        h("path", { fill: "#4E4E4E", d: "M360.217 137.063H650.55v16.12H360.217z" }),
                        h("path", { fill: "#2E2E2E", d: "M358.688 138.612l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565z" }),
                        h("path", { stroke: "#47951E", "stroke-width": "4", d: "M41.338 286.022l63.212-62.883L131.552 250l15.258-15.178 40.836 40.624 72.381-72.004 48.884 48.629 19.209-19.108 39.322 39.117 22.812-22.692 21.148 21.038 36.198-36.01 18.541 18.444 33.19-33.017 49.399 49.141 25.574-25.442 16.271 16.186" }),
                        h("path", { stroke: "#47951E", "stroke-width": "4", d: "M29.039 289.845l63.212-62.882 27.002 26.861 15.257-15.178 40.837 40.623 72.381-72.003 48.884 48.629 19.208-19.109 39.323 39.118 22.811-22.693 21.148 21.038 36.199-36.009 18.54 18.443 33.191-33.017 49.398 49.141 25.575-25.441 16.27 16.185", opacity: ".17" }),
                        h("path", { stroke: "#414141", d: "M22.375 195.626v103.271h574.138" }))),
                h("div", { class: "long-shadow", style: { clipPath: this.clipPath } }))));
    }
    calculateLongshadow() {
        const width = window.innerWidth;
        const { left, right } = this.img.getBoundingClientRect();
        this.clipPath = `polygon(
      ${left / width * 100}% 1%, ${right / width * 100 - 2}% .3%, 125% 87%, ${left / width * 100 + 10}% 60%, ${left / width * 100}% 44%
    )`;
    }
    static get is() { return "sf-wdp"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "clipPath": { "state": true }, "el": { "elementRef": true }, "img": { "state": true } }; }
    static get style() { return ".host[data-sf-wdp] {\n  background: #3e3e3e;\n  transform: translateY(-100px);\n  z-Index: -1;\n  clip-path: polygon(0 50px, 100% 0%, 100% 100%, 0% 100%);\n  padding: 80px 0; }\n  .host[data-sf-wdp]   .container[data-sf-wdp] {\n    max-width: 900px;\n    margin: 0 auto;\n    padding: 60px; }\n    \@media all and (min-width: 1024) {\n      .host[data-sf-wdp]   .container[data-sf-wdp] {\n        padding: 60px 0; } }\n  .host[data-sf-wdp]   h2[data-sf-wdp] {\n    font: 400 2em/1.5em 'Open Sans', sans-serif;\n    color: #63C845; }\n  .host[data-sf-wdp]   p[data-sf-wdp] {\n    color: #ddd;\n    font: 400 1.3em/1.5em 'Open Sans', sans-serif; }\n  .host[data-sf-wdp]   a[data-sf-wdp] {\n    color: #fff; }\n  .host[data-sf-wdp]   .lowlight[data-sf-wdp] {\n    color: #868686; }\n  .host[data-sf-wdp]   .project-image[data-sf-wdp] {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start; }\n    .host[data-sf-wdp]   .project-image[data-sf-wdp]   svg[data-sf-wdp] {\n      display: block;\n      margin: 0 auto;\n      padding: 0 0 50px 0; }\n      \@media all and (max-width: 900px) {\n        .host[data-sf-wdp]   .project-image[data-sf-wdp]   svg[data-sf-wdp] {\n          transform: scale(0.5); } }\n    .host[data-sf-wdp]   .project-image[data-sf-wdp]   .long-shadow[data-sf-wdp] {\n      position: absolute;\n      width: 100vw;\n      height: 750px;\n      background: rgba(0, 0, 0, 0.3);\n      z-index: -1;\n      clip-path: polygon(14% 1%, 83% 0.3%, 100% 87%, 19% 60%, 14% 44%); }\n      \@media all and (max-width: 900px) {\n        .host[data-sf-wdp]   .project-image[data-sf-wdp]   .long-shadow[data-sf-wdp] {\n          display: none; } }"; }
}

export { AaaaaComponent as SfAaaaa, AppRoot as SfApp, BitAlarmComponent as SfBitalarm, HeroComponent as SfHero, IntroComponent as SfIntro, WdpComponent as SfWdp };
