/*! Built with http://stenciljs.com */
const{h:t}=window.App;class a{async onSWUpdate(){window.location.reload()}render(){return t("div",null,t("app-hero",null),t("app-intro",null),t("app-wdp",null),t("app-bitalarm",null),t("app-aaaaa",null))}static get is(){return"app-root"}static get listeners(){return[{name:"window:swUpdate",method:"onSWUpdate"}]}static get style(){return".host{background:#333}"}}export{a as AppRoot};