/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{render(){return t("div",{class:"host"},t("div",null,t("h1",null,"AAAAaaaAaaAAh!!!"),t("h2",null,"(eɪ-eɪ-eɪ-eɪ)")),t("p",null,"A minigame where you control everything with the position of your head and the volume of your voice."),t("p",null,t("a",{href:"http://github.com/damoonrashidi/aaaaa"},"Github")," and"," ",t("a",{href:"https://damoonrashidi.github.io/"},"Live Demo")),t("img",{src:"../../assets/aaaaa.webp",alt:""}))}static get is(){return"app-aaaaa"}static get encapsulation(){return"shadow"}static get style(){return".host.sc-app-aaaaa{background:#1141cd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;-webkit-transform:translateY(-151px);transform:translateY(-151px);padding:100px 0}h1.sc-app-aaaaa{font:400 4.5em/1em VT323;text-shadow:3px 3px 0 red;word-break:break-all;padding:10px 30px 0;margin:0}h2.sc-app-aaaaa{text-align:right;font:400 1em/1em 'Open Sans',sans-serif;color:#ffffff99;margin:0 40px 0 0}p.sc-app-aaaaa{font:400 2em/1.5em VT323;max-width:500px}a.sc-app-aaaaa{color:#fff;border:3px solid #fff;display:inline-block;text-decoration:none;padding:2px 8px}img.sc-app-aaaaa{display:block;margin:50px auto 100px;max-width:400px}"}}class n{render(){return t("div",{class:"host"},t("div",{class:"idiotic-phone-thing-that-everyone-has"},t("img",{src:"../../assets/bitalarm.webp"})),t("div",{class:"content"},t("h2",null,"BitAlarm"),t("p",null,"Mobile app written in ",t("a",{href:"https://dartlang.org"},"Dart")," +"," ",t("a",{href:"https://flutter.io"},"Flutter")," that helps you keep track of your crypto-portfolio as well as market movements."),t("p",{class:"projects-links"},t("a",{href:"https://github.com/damoonrashidi/bitalarm"},"Github"),t("a",{href:"https://play.google.com/store/apps/details?id=com.yourcompany.bitalarm"},"Play store"))))}static get is(){return"app-bitalarm"}static get encapsulation(){return"shadow"}static get style(){return".host.sc-app-bitalarm{min-height:900px;background:0 0;-webkit-transform:translateY(-151px);transform:translateY(-151px);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-perspective:1000px;perspective:1000px}.host.sc-app-bitalarm   .idiotic-phone-thing-that-everyone-has.sc-app-bitalarm{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateY(-22deg);transform:rotateY(-22deg)}.host.sc-app-bitalarm   .content.sc-app-bitalarm{z-index:2;width:100%;padding:40px 0 40px 80px;background:0 0}\@media all and (min-width:900px){.host.sc-app-bitalarm   .content.sc-app-bitalarm{width:500px}}.host.sc-app-bitalarm   .content.sc-app-bitalarm   h2.sc-app-bitalarm{font:300 4em/1em 'Passion One',sans-serif;color:#000;margin:0}.host.sc-app-bitalarm   .content.sc-app-bitalarm   .projects-links.sc-app-bitalarm   a.sc-app-bitalarm{display:inline-block;margin:0 20px 0 0;color:#888}.host.sc-app-bitalarm   .content.sc-app-bitalarm   p.sc-app-bitalarm{font:300 1.5em/1.5em 'Open Sans',sans-serif;color:#888;max-width:500px}.host.sc-app-bitalarm   .content.sc-app-bitalarm   p.sc-app-bitalarm   a.sc-app-bitalarm{color:#888;margin:0}"}}const r=(t=0,e=window.innerWidth,n=!1)=>{const r=(Math.random()+t)*e%e;return n?Math.floor(r):r};class i{constructor(t,e,n){this.position=t,this.size=e,this.speed=n,this.lineColor=`hsla(${Math.floor(360*Math.random())}, 100%, 40%, 0.1)`}toPoint(){return this.position}}var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function s(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function c(t){return"function"==typeof t}var u=!1,a={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack,u=t},get useDeprecatedSynchronousErrorHandling(){return u}};function h(t){setTimeout(function(){throw t})}var l={closed:!0,next:function(t){},error:function(t){if(a.useDeprecatedSynchronousErrorHandling)throw t;h(t)},complete:function(){}},p=Array.isArray||function(t){return t&&"number"==typeof t.length};function f(t){return null!=t&&"object"==typeof t}var d,b={e:{}};function y(){try{return d.apply(this,arguments)}catch(t){return b.e=t,b}}function v(t){return d=t,y}function w(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}w.prototype=Object.create(Error.prototype);var m=w,_=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var e;return t.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var n=this._parent,r=this._parents,i=this._unsubscribe,o=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var s=-1,u=r?r.length:0;n;)n.remove(this),n=++s<u&&r[s]||null;if(c(i)&&v(i).call(this)===b&&(e=!0,t=t||(b.e instanceof m?g(b.e.errors):[b.e])),p(o))for(s=-1,u=o.length;++s<u;){var a=o[s];if(f(a)&&v(a.unsubscribe).call(a)===b){e=!0,t=t||[];var h=b.e;h instanceof m?t=t.concat(g(h.errors)):t.push(h)}}if(e)throw new m(t)}},t.prototype.add=function(e){if(!e||e===t.EMPTY)return t.EMPTY;if(e===this)return this;var n=e;switch(typeof e){case"function":n=new t(e);case"object":if(n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if("function"!=typeof n._addParent){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(n),n._addParent(this),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.prototype._addParent=function(t){var e=this._parent,n=this._parents;e&&e!==t?n?-1===n.indexOf(t)&&n.push(t):this._parents=[t]:this._parent=t},t.EMPTY=((e=new t).closed=!0,e),t}();function g(t){return t.reduce(function(t,e){return t.concat(e instanceof m?e.errors:e)},[])}var E="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("rxSubscriber"):"@@rxSubscriber",x=function(t){function e(e,n,r){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,i._parentSubscription=null,arguments.length){case 0:i.destination=l;break;case 1:if(!e){i.destination=l;break}if("object"==typeof e){if(H(e)){var o=e[E]();i.syncErrorThrowable=o.syncErrorThrowable,i.destination=o,o._addParentTeardownLogic(i)}else i.syncErrorThrowable=!0,i.destination=new S(i,e);break}default:i.syncErrorThrowable=!0,i.destination=new S(i,e,n,r)}return i}return s(e,t),e.prototype[E]=function(){return this},e.create=function(t,n,r){var i=new e(t,n,r);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t),this._unsubscribeParentSubscription())},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete(),this._unsubscribeParentSubscription())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._addParentTeardownLogic=function(t){t!==this&&(this._parentSubscription=this.add(t))},e.prototype._unsubscribeParentSubscription=function(){null!==this._parentSubscription&&this._parentSubscription.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},e}(_),S=function(t){function e(e,n,r,i){var o,s=t.call(this)||this;s._parentSubscriber=e;var u=s;return c(n)?o=n:n&&(o=n.next,r=n.error,i=n.complete,n!==l&&(c((u=Object.create(n)).unsubscribe)&&s.add(u.unsubscribe.bind(u)),u.unsubscribe=s.unsubscribe.bind(s))),s._context=u,s._next=o,s._error=r,s._complete=i,s}return s(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):h(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;h(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),a.useDeprecatedSynchronousErrorHandling)throw t;h(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return a.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(h(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(x);function H(t){return t instanceof x||"_addParentTeardownLogic"in t&&t[E]}var T="function"==typeof Symbol&&Symbol.observable||"@@observable";function M(){}var A=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,i=function(t,e,n){if(t){if(t instanceof x)return t;if(t[E])return t[E]()}return t||e||n?new x(t,e,n):new x(l)}(t,e,n);if(r?r.call(i,this.source):i._addParentTeardownLogic(this.source||a.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),a.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){a.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=I(e))(function(e,r){var i;i=n.subscribe(function(e){try{t(e)}catch(t){r(t),i&&i.unsubscribe()}},r,e)})},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[T]=function(){return this},t.prototype.pipe=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?this:((t=e)?1===t.length?t[0]:function(e){return t.reduce(function(t,e){return e(t)},e)}:M)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=I(t))(function(t,n){var r;e.subscribe(function(t){return r=t},function(t){return n(t)},function(){return t(r)})})},t.create=function(e){return new t(e)},t}();function I(t){if(t||(t=a.Promise||Promise),!t)throw new Error("no Promise impl found");return t}Error.prototype;var z=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return s(e,t),e}(x),C=function(){function t(t){this.connectable=t}return t.prototype.call=function(t,e){var n=this.connectable;n._refCount++;var r=new N(t,n),i=e.subscribe(r);return r.closed||(r.connection=n.connect()),i},t}(),N=function(t){function e(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return s(e,t),e.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._refCount;if(e<=0)this.connection=null;else if(t._refCount=e-1,e>1)this.connection=null;else{var n=this.connection,r=t._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},e}(x),P=function(t){function e(e,n){var r=t.call(this)||this;return r.source=e,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return s(e,t),e.prototype._subscribe=function(t){return this.getSubject().subscribe(t)},e.prototype.getSubject=function(){var t=this._subject;return t&&!t.isStopped||(this._subject=this.subjectFactory()),this._subject},e.prototype.connect=function(){var t=this._connection;return t||(this._isComplete=!1,(t=this._connection=new _).add(this.source.subscribe(new O(this.getSubject(),this))),t.closed?(this._connection=null,t=_.EMPTY):this._connection=t),t},e.prototype.refCount=function(){return(t=this).lift(new C(t));var t},e}(A).prototype,O=(P._subscribe,P._isComplete,P.getSubject,P.connect,P.refCount,function(t){function e(e,n){var r=t.call(this,e)||this;return r.connectable=n,r}return s(e,t),e.prototype._error=function(e){this._unsubscribe(),t.prototype._error.call(this,e)},e.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),t.prototype._complete.call(this)},e.prototype._unsubscribe=function(){var t=this.connectable;if(t){this.connectable=null;var e=t._connection;t._refCount=0,t._subject=null,t._connection=null,e&&e.unsubscribe()}},e}(z)),j=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return s(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(t){n=!0,r=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return s(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(_)),k=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),D=function(t){function e(n,r){void 0===r&&(r=k.now);var i=t.call(this,n,function(){return e.delegate&&e.delegate!==i?e.delegate.now():r()})||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return s(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(k),L=new A(function(t){return t.complete()});function V(t){return t?function(t){return new A(function(e){return t.schedule(function(){return e.complete()})})}(t):L}var F=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.closed||e.complete()}};function R(t,e){return new A(e?function(n){var r=new _,i=0;return r.add(e.schedule(function(){i!==t.length?(n.next(t[i++]),n.closed||r.add(this.schedule())):n.complete()})),r}:F(t))}function W(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n,r=t[t.length-1];switch((n=r)&&"function"==typeof n.schedule?t.pop():r=void 0,t.length){case 0:return V(r);case 1:return r?R(t,r):function(t){var e=new A(function(e){e.next(t),e.complete()});return e._isScalar=!0,e.value=t,e}(t[0]);default:return R(t,r)}}var Y=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){var t;switch(this.kind){case"N":return W(this.value);case"E":return t=this.error,new A(function(e){return e.error(t)});case"C":return V()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return void 0!==e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}(),q=new D(j);function B(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}B.prototype=Object.create(Error.prototype);var G=B;function U(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new $(t,e))}}Error.prototype;var $=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new J(t,this.project,this.thisArg))},t}(),J=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.project=n,i.count=0,i.thisArg=r||i,i}return s(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(x),K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(x),Q=function(t){function e(e,n,r){var i=t.call(this)||this;return i.parent=e,i.outerValue=n,i.outerIndex=r,i.index=0,i}return s(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(x),X=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,h),e}};function Z(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var tt=Z(),et=function(t){return function(e){for(var n=t[tt]();;){var r=n.next();if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add(function(){n.return&&n.return()}),e}},nt=function(t){return function(e){var n=t[T]();if("function"!=typeof n.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return n.subscribe(e)}},rt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function it(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var ot=function(t){if(t instanceof A)return function(e){return t._isScalar?(e.next(t.value),void e.complete()):t.subscribe(e)};if(t&&"function"==typeof t[T])return nt(t);if(rt(t))return F(t);if(it(t))return X(t);if(t&&"function"==typeof t[tt])return et(t);var e=f(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+e+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function st(t,e){if(!e)return t instanceof A?t:new A(ot(t));if(null!=t){if(function(t){return t&&"function"==typeof t[T]}(t))return function(t,e){return new A(e?function(n){var r=new _;return r.add(e.schedule(function(){var i=t[T]();r.add(i.subscribe({next:function(t){r.add(e.schedule(function(){return n.next(t)}))},error:function(t){r.add(e.schedule(function(){return n.error(t)}))},complete:function(){r.add(e.schedule(function(){return n.complete()}))}}))})),r}:nt(t))}(t,e);if(it(t))return function(t,e){return new A(e?function(n){var r=new _;return r.add(e.schedule(function(){return t.then(function(t){r.add(e.schedule(function(){n.next(t),r.add(e.schedule(function(){return n.complete()}))}))},function(t){r.add(e.schedule(function(){return n.error(t)}))})})),r}:X(t))}(t,e);if(rt(t))return R(t,e);if(function(t){return t&&"function"==typeof t[tt]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new A(e?function(n){var r,i=new _;return i.add(function(){r&&"function"==typeof r.return&&r.return()}),i.add(e.schedule(function(){r=t[tt](),i.add(e.schedule(function(){if(!n.closed){var t,e;try{var i=r.next();t=i.value,e=i.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),i}:et(t))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function ct(t,e,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof e?function(r){return r.pipe(ct(function(n,r){return st(t(n,r)).pipe(U(function(t,i){return e(n,t,r,i)}))},n))}:("number"==typeof e&&(n=e),function(e){return e.lift(new ut(t,n))})}var ut=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new at(t,this.project,this.concurrent))},t}(),at=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var i=t.call(this,e)||this;return i.project=n,i.concurrent=r,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return s(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e,t,n)},e.prototype._innerSub=function(t,e,n){var r=new Q(this,void 0,void 0);this.add(r),function(t,e,n,r,i){if(void 0===i&&(i=new Q(t,n,r)),!i.closed)ot(e)(i)}(this,t,e,n,r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete()},e.prototype.notifyNext=function(t,e,n,r,i){this.destination.next(e)},e.prototype.notifyComplete=function(t){var e=this.buffer;this.remove(t),this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(K);function ht(t,e){return void 0===t&&(t=0),void 0===e&&(e=q),(!(!p(n=t)&&n-parseFloat(n)+1>=0)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=q),new A(function(n){return n.add(e.schedule(lt,t,{subscriber:n,counter:0,period:t})),n});var n}function lt(t){var e=t.subscriber,n=t.counter,r=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:r},r)}function pt(t,e){return ct(t,e,1)}function ft(t,e){void 0===e&&(e=q);var n,r=(n=t)instanceof Date&&!isNaN(+n)?+t-e.now():Math.abs(t);return function(t){return t.lift(new dt(r,e))}}var dt=function(){function t(t,e){this.delay=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new bt(t,this.delay,this.scheduler))},t}(),bt=function(t){function e(e,n,r){var i=t.call(this,e)||this;return i.delay=n,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return s(e,t),e.dispatch=function(t){for(var e=t.source,n=e.queue,r=t.scheduler,i=t.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(i);if(n.length>0){var o=Math.max(0,n[0].time-r.now());this.schedule(t,o)}else this.unsubscribe(),e.active=!1},e.prototype._schedule=function(t){this.active=!0,this.add(t.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))},e.prototype.scheduleNotification=function(t){if(!0!==this.errored){var e=this.scheduler,n=new yt(e.now()+this.delay,t);this.queue.push(n),!1===this.active&&this._schedule(e)}},e.prototype._next=function(t){this.scheduleNotification(Y.createNext(t))},e.prototype._error=function(t){this.errored=!0,this.queue=[],this.destination.error(t)},e.prototype._complete=function(){this.scheduleNotification(Y.createComplete())},e}(x),yt=function(){return function(t,e){this.time=t,this.notification=e}}(),vt=function(){function t(t,e,n){this.nextOrObserver=t,this.error=e,this.complete=n}return t.prototype.call=function(t,e){return e.subscribe(new wt(t,this.nextOrObserver,this.error,this.complete))},t}(),wt=function(t){function e(e,n,r,i){var o=t.call(this,e)||this;return o._tapNext=M,o._tapError=M,o._tapComplete=M,o._tapError=r||M,o._tapComplete=i||M,c(n)?(o._context=o,o._tapNext=n):n&&(o._context=n,o._tapNext=n.next||M,o._tapError=n.error||M,o._tapComplete=n.complete||M),o}return s(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(x),mt=function(){function t(t){if(this.total=t,this.total<0)throw new G}return t.prototype.call=function(t,e){return e.subscribe(new _t(t,this.total))},t}(),_t=function(t){function e(e,n){var r=t.call(this,e)||this;return r.total=n,r.count=0,r}return s(e,t),e.prototype._next=function(t){var e=this.total,n=++this.count;n<=e&&(this.destination.next(t),n===e&&(this.destination.complete(),this.unsubscribe()))},e}(x),gt=function(){function t(t,e,n){void 0===n&&(n=!1),this.accumulator=t,this.seed=e,this.hasSeed=n}return t.prototype.call=function(t,e){return e.subscribe(new Et(t,this.accumulator,this.seed,this.hasSeed))},t}(),Et=function(t){function e(e,n,r,i){var o=t.call(this,e)||this;return o.accumulator=n,o._seed=r,o.hasSeed=i,o.index=0,o}return s(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.accumulator(this.seed,t,n)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(x);var xt=function(){return function(t,e){this.value=t,this.interval=e}}();const St=(t,e=!0)=>n=>n.pipe(function(t){return void 0===t&&(t=q),function(e){return n=function(){return e.pipe(function(t,e){var n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new gt(t,e,n))}}(function(e,n){var r=e.current;return{value:n,current:t.now(),last:r}},{current:t.now(),value:void 0,last:void 0}),U(function(t){var e=t.current,n=t.last,r=t.value;return new xt(r,e-n)}))},new A(function(t){var e;try{e=n()}catch(e){return void t.error(e)}return(e?st(e):V()).subscribe(t)});var n}}(),pt(n=>W(n).pipe(ct(r=>W(r).pipe(ft(n.interval>t||e?0:t))),function(t,e,n){return function(e){return e.lift(new vt(t,void 0,void 0))}}(()=>e=!1),U(t=>t.value))));class Ht{constructor(){this.WIDTH=window.innerWidth,this.HEIGHT=500,this.animated=!0,this.DELAY_ANIMATION=1e3,this.balls=[]}componentDidLoad(){const t=this.element.shadowRoot.querySelector("canvas");this.ctx=t.getContext("2d"),this.ctx.fillStyle="#fff",function t(e,n,r,i){return c(r)&&(i=r,r=void 0),i?t(e,n,r).pipe(U(function(t){return p(t)?i.apply(void 0,t):i(t)})):new A(function(t){!function t(e,n,r,i,o){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var c=e;e.addEventListener(n,r,o),s=function(){return c.removeEventListener(n,r,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var u=e;e.on(n,r),s=function(){return u.off(n,r)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var a=e;e.addListener(n,r),s=function(){return a.removeListener(n,r)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var h=0,l=e.length;h<l;h++)t(e[h],n,r,i,o)}i.add(s)}(e,n,function(e){arguments.length>1?t.next(Array.prototype.slice.call(arguments)):t.next(e)},t,r)})}(document,"paint").pipe(St(16)).subscribe(()=>this.paint()),ht(16).pipe(ft(this.DELAY_ANIMATION),(500,function(t){return t.lift(new mt(500))})).subscribe(()=>{const t=new i({x:r(),y:r(0,this.HEIGHT)},r(.2,1),{x:r(-.5,.5),y:r(-.5,.5)});this.balls=this.balls.concat(t)})}render(){return t("div",{class:"host"},t("div",{class:"header"},t("h1",null,"Damoon Rashidi"),t("h2",null,"sideprojects, for fun!")),t("canvas",{width:this.WIDTH,height:this.HEIGHT}))}paint(){if(!this.animated)return;let t=this.ctx;t.clearRect(0,0,this.WIDTH,this.HEIGHT),t.fillStyle="#fff";for(let e=0;e<this.balls.length;e++){const n=this.balls[e],r=this.findClosestBalls(n.position,10,40);this.balls[e].position.x+=n.speed.x,this.balls[e].position.y+=n.speed.y,t.moveTo(n.position.x,n.position.y),t.beginPath(),t.arc(n.position.x,n.position.y,n.size,0,2*Math.PI),t.fill(),t.strokeStyle=n.lineColor,r.forEach(e=>t.lineTo(e.position.x,e.position.y)),t.stroke(),(n.position.x<0||n.position.x>this.WIDTH)&&(this.balls[e].speed.x=-n.speed.x),(n.position.y<0||n.position.y>this.HEIGHT)&&(this.balls[e].speed.y=-n.speed.y)}document.dispatchEvent(new Event("paint"))}findClosestBalls(t,e=10,n=40){return this.balls.filter(e=>this.distance(t,e.position)<n).slice(1,e+1)}distance(t,e){return Math.sqrt(Math.pow(Math.abs(t.x-e.x),2)+Math.pow(Math.abs(t.y-e.y),2))}handleResize(){this.WIDTH=window.innerWidth,this.HEIGHT=window.innerHeight,this.ctx.fillStyle="#fff"}static get is(){return"app-hero"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{state:!0},element:{elementRef:!0},HEIGHT:{state:!0},WIDTH:{state:!0}}}static get listeners(){return[{name:"window:resize",method:"handleResize",passive:!0}]}static get style(){return".host.sc-app-hero{height:500px;width:100vw;background:#223;display:block}.header.sc-app-hero{text-transform:uppercase;position:absolute;color:#fff;-webkit-transform:translate(50px,50px);transform:translate(50px,50px);width:calc(100vw - 100px)}\@media all and (min-width:900px){.header.sc-app-hero{-webkit-transform:translate(100px,100px);transform:translate(100px,100px);width:calc(100vw - 100px)}}.header.sc-app-hero   h1.sc-app-hero{font:400 5em/1em 'Passion One',sans-serif}.header.sc-app-hero   h2.sc-app-hero{font:200 2em/0 'Passion One',sans-serif;color:#eee}"}}class Tt{constructor(){this.message="My name is Damoon, I write".split("").map(e=>t("span",null,e))}componentDidLoad(){ht(100).pipe(pt(t=>W(t).pipe(ft(300*Math.random())))).subscribe(()=>{const t=this.element.shadowRoot.querySelectorAll("span"),e=Math.ceil(Math.random()*this.message.length);for(let e=0;e<=this.message.length;e++)t[e].style.opacity="1";t[e].style.opacity="0"})}render(){return t("div",{class:"host"},t("div",{class:"container"},t("p",null,this.message,t("span",{style:{letterSpacing:"-3px",color:"#00f"}},"JAVASCRIPT")),t("hr",null),t("hr",null)))}static get is(){return"app-intro"}static get encapsulation(){return"shadow"}static get properties(){return{element:{elementRef:!0}}}static get style(){return".host.sc-app-intro{background:#eee;padding:50px 0;-webkit-transform:translateY(-50px);transform:translateY(-50px);z-index:-1;-webkit-clip-path:polygon(0 50px,100% 0,100% 100%,0 100%);clip-path:polygon(0 50px,100% 0,100% 100%,0 100%)}.container.sc-app-intro{-webkit-box-sizing:border-box;box-sizing:border-box;padding:100px 0;margin:20px auto;width:100%;font:300 1.5em/2.2em 'IBM Plex Mono',monospace;letter-spacing:36px}hr.sc-app-intro{margin-bottom:10px;border-bottom:1px solid #000;-webkit-transform:scale(.8) skewY(4deg);transform:scale(.8) skewY(4deg)}\@media all and (min-width:900px){.container.sc-app-intro{width:650px}hr.sc-app-intro{-webkit-transform:scale(1.5) skewY(4deg);transform:scale(1.5) skewY(4deg)}}hr.sc-app-intro:nth-child(2n){-webkit-transform:scale(.8) skewY(3deg);transform:scale(.8) skewY(3deg)}\@media all and (min-width:900px){hr.sc-app-intro:nth-child(2n){-webkit-transform:scale(1.5) skewY(3deg);transform:scale(1.5) skewY(3deg)}}"}}class Mt{componentDidLoad(){this.img=this.el.shadowRoot.querySelector("svg"),this.calculateLongshadow()}render(){return t("div",{class:"host"},t("div",{class:"container"},t("h2",null,"~/wdp"),t("p",null,"wdp ",t("span",{class:"lowlight"},"(wɒt ʌp)")," is a command line tool for getting a developer news feed in the terminal."),t("p",null,"install via yarn"," ",t("span",{class:"lowlight"},"(yarn add --global wdp)")," and then run"," ",t("span",{class:"lowlight"},"wdp")," in your terminal"),t("p",null,t("a",{href:"https://github.com/damoonrashidi/wdp"},"Github")," and"," ",t("a",{href:"http://npmjs.org/package/wdp"},"NPM"))),t("div",{class:"project-image"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"659",height:"328"},t("g",{fill:"none","fill-rule":"evenodd"},t("rect",{width:"625",height:"316.478",y:"11.522",fill:"#1E1E1E",rx:"4"}),t("path",{fill:"#505050",d:"M3 0h619a3 3 0 0 1 3 3v12.363H0V3a3 3 0 0 1 3-3z"}),t("text",{fill:"#75CB31","font-family":"FiraCode-Retina, Fira Code, Open Sans","font-size":"14","font-weight":"500",transform:"translate(23 23)"},t("tspan",{x:"39",y:"18"},"wdp")),t("text",{fill:"#7B7B7B","font-family":"FiraCode-Retina, Fira Code, Open Sans","font-size":"14","font-weight":"500",transform:"translate(23 23)"},t("tspan",{x:"15",y:"18"},"~/")),t("text",{fill:"#FFF","font-family":"FiraCode-Bold, Fira Code, Open Sans","font-size":"15","font-weight":"bold",transform:"translate(23 23)"},t("tspan",{x:"0",y:"18"},"λ")),t("path",{stroke:"#636363",d:"M20.5 64.357h294.711V167.5H20.5z"}),t("path",{fill:"#56AD28",d:"M34.593 88.543h290.334v16.2H34.593z"}),t("path",{fill:"#70E035",d:"M36.897 83.914h290.334v16.2H36.897z"}),t("path",{fill:"#56AD28",d:"M324.923 104.754l2.327-4.668h-2.327zM34.591 88.55l2.308-4.653v4.653z"}),t("path",{fill:"#373737",d:"M27.68 61.543h290.335v16.2H27.68z"}),t("path",{fill:"#616161",d:"M29.217 60H319.55v16.2H29.217z"}),t("path",{fill:"#373737",d:"M27.688 61.557l1.537-1.556v1.556zM318.006 77.75l1.549-1.546h-1.565zM27.68 115.543h290.335v16.2H27.68z"}),t("path",{fill:"#616161",d:"M29.217 114H319.55v16.2H29.217z"}),t("path",{fill:"#373737",d:"M27.688 115.557l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565zM27.68 140.229h290.335v16.2H27.68z"}),t("path",{fill:"#616161",d:"M29.217 138.686H319.55v16.2H29.217z"}),t("path",{fill:"#373737",d:"M27.688 140.243l1.537-1.556v1.556zm290.318 16.193l1.549-1.546h-1.565z"}),t("path",{stroke:"#474747",d:"M351.5 63.873h294.711V166.5H351.5z"}),t("path",{fill:"#2C5A13",d:"M365.593 63.373h290.334v16.12H365.593z"}),t("path",{fill:"#47951E",d:"M367.897 58.768h290.334v16.12H367.897z"}),t("path",{fill:"#2C5A13",d:"M655.923 79.504l2.327-4.644h-2.327zM365.591 63.38l2.308-4.63v4.63z"}),t("path",{fill:"#2E2E2E",d:"M358.68 89.472h290.335v16.12H358.68z"}),t("path",{fill:"#4E4E4E",d:"M360.217 87.937H650.55v16.12H360.217z"}),t("path",{fill:"#2E2E2E",d:"M358.688 89.486l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"}),t("path",{fill:"#4E4E4E",d:"M360.217 112.5H650.55v16.12H360.217z"}),t("path",{fill:"#2E2E2E",d:"M358.688 114.049l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565zm-290.326 8.436h290.335v16.12H358.68z"}),t("path",{fill:"#4E4E4E",d:"M360.217 137.063H650.55v16.12H360.217z"}),t("path",{fill:"#2E2E2E",d:"M358.688 138.612l1.537-1.548v1.548zm290.318 16.113l1.549-1.538h-1.565z"}),t("path",{stroke:"#47951E","stroke-width":"4",d:"M41.338 286.022l63.212-62.883L131.552 250l15.258-15.178 40.836 40.624 72.381-72.004 48.884 48.629 19.209-19.108 39.322 39.117 22.812-22.692 21.148 21.038 36.198-36.01 18.541 18.444 33.19-33.017 49.399 49.141 25.574-25.442 16.271 16.186"}),t("path",{stroke:"#47951E","stroke-width":"4",d:"M29.039 289.845l63.212-62.882 27.002 26.861 15.257-15.178 40.837 40.623 72.381-72.003 48.884 48.629 19.208-19.109 39.323 39.118 22.811-22.693 21.148 21.038 36.199-36.009 18.54 18.443 33.191-33.017 49.398 49.141 25.575-25.441 16.27 16.185",opacity:".17"}),t("path",{stroke:"#414141",d:"M22.375 195.626v103.271h574.138"}))),t("div",{class:"long-shadow",style:{clipPath:this.clipPath}})))}calculateLongshadow(){const t=window.innerWidth,{left:e,right:n}=this.img.getBoundingClientRect();this.clipPath=`polygon(\n      ${e/t*100}% 1%, ${n/t*100-2}% .3%, 125% 87%, ${e/t*100+10}% 60%, ${e/t*100}% 44%\n    )`}static get is(){return"app-wdp"}static get encapsulation(){return"shadow"}static get properties(){return{clipPath:{state:!0},el:{elementRef:!0},img:{state:!0}}}static get listeners(){return[{name:"window:resize",method:"calculateLongshadow",passive:!0}]}static get style(){return".host.sc-app-wdp{background:#3e3e3e;-webkit-transform:translateY(-100px);transform:translateY(-100px);z-index:-1;-webkit-clip-path:polygon(0 50px,100% 0,100% 100%,0 100%);clip-path:polygon(0 50px,100% 0,100% 100%,0 100%);padding:80px 0}.host.sc-app-wdp   .container.sc-app-wdp{max-width:900px;margin:0 auto;padding:60px}\@media all and (min-width:1024){.host.sc-app-wdp   .container.sc-app-wdp{padding:60px 0}}.host.sc-app-wdp   h2.sc-app-wdp{font:400 2em/1.5em 'Open Sans',sans-serif;color:#63c845}.host.sc-app-wdp   p.sc-app-wdp{color:#ddd;font:400 1.3em/1.5em 'Open Sans',sans-serif}.host.sc-app-wdp   a.sc-app-wdp{color:#fff}.host.sc-app-wdp   .lowlight.sc-app-wdp{color:#868686}.host.sc-app-wdp   .project-image.sc-app-wdp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.host.sc-app-wdp   .project-image.sc-app-wdp   svg.sc-app-wdp{display:block;margin:0 auto;padding:0 0 50px}.host.sc-app-wdp   .project-image.sc-app-wdp   .long-shadow.sc-app-wdp{position:absolute;width:100vw;height:750px;background:rgba(0,0,0,.3);z-index:-1;-webkit-clip-path:polygon(14% 1%,83% .3%,100% 87%,19% 60%,14% 44%);clip-path:polygon(14% 1%,83% .3%,100% 87%,19% 60%,14% 44%)}\@media all and (max-width:900px){.host.sc-app-wdp   .project-image.sc-app-wdp   svg.sc-app-wdp{-webkit-transform:scale(.5);transform:scale(.5)}.host.sc-app-wdp   .project-image.sc-app-wdp   .long-shadow.sc-app-wdp{display:none}}"}}export{e as AppAaaaa,n as AppBitalarm,Ht as AppHero,Tt as AppIntro,Mt as AppWdp};