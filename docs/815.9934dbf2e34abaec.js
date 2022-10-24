"use strict";(self.webpackChunkBeer_Shop=self.webpackChunkBeer_Shop||[]).push([[815],{5815:(ue,x,s)=>{s.r(x),s.d(x,{SearchModule:()=>he});var E=s(4466),t=s(8256),N=s(1240),B=s(7244),U=s(910),h=s(6895);const L=function(e,n){return{width:e,borderRadius:n}};let Q=(()=>{class e{constructor(){this.text="Reset to default",this.buttonClicked=new t.vpe,this.disabled=!1,this.width="auto",this.borderRadius="4px"}ngOnInit(){}handleClick(){this.buttonClicked.emit()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-secondary-button"]],inputs:{text:"text",disabled:"disabled",width:"width",borderRadius:"borderRadius"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:6,consts:[[3,"ngStyle","disabled","click"]],template:function(o,i){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.handleClick()}),t._uU(1),t.qZA()),2&o&&(t.Q6J("ngStyle",t.WLB(3,L,i.width,i.borderRadius))("disabled",i.disabled),t.xp6(1),t.hij(" ",i.text,"\n"))},dependencies:[h.PC],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";button[_ngcontent-%COMP%]{font-size:14px;line-height:24px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;height:40px;min-width:152px;outline:none;border:1px solid #5AB0BB;color:#5ab0bb;background-color:#fff;cursor:pointer;padding:0 24px;font-weight:900!important}button[_ngcontent-%COMP%]:hover{padding:0 22px;border:2px solid #1493A4;color:#1493a4}button[_ngcontent-%COMP%]:focus{padding:0 22px;border:2px solid #FB8200;color:#1493a4}button[_ngcontent-%COMP%]:disabled{border:1px solid #7B7E82;color:#7b7e82}']}),e})(),w=(()=>{class e{transform(o,...i){return o.toUpperCase().replace("_"," ")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"filter",type:e,pure:!0}),e})();const W=function(e,n){return{width:e,borderRadius:n}};let z=(()=>{class e{constructor(){this.text="Filter tag",this.width="auto",this.borderRadius="0px",this.icon_path="assets/icons/cross.svg",this.iconClicked=new t.vpe}ngOnInit(){}onClick(){this.iconClicked.emit()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-filter-tag"]],inputs:{text:"text",width:"width",borderRadius:"borderRadius",icon_path:"icon_path"},outputs:{iconClicked:"iconClicked"},decls:6,vars:8,consts:[["tabindex","0",1,"tag",3,"ngStyle","click"],["alt","filter-tag-icon",3,"src"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return i.onClick()}),t.TgZ(1,"div")(2,"p"),t._uU(3),t.ALo(4,"filter"),t.qZA(),t._UZ(5,"img",1),t.qZA()()),2&o&&(t.Q6J("ngStyle",t.WLB(5,W,i.width,i.borderRadius)),t.xp6(3),t.Oqu(t.lcZ(4,3,i.text)),t.xp6(2),t.Q6J("src",i.icon_path,t.LSH))},dependencies:[h.PC,w],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";.tag[_ngcontent-%COMP%]{white-space:nowrap;background-color:#fff;border:1px solid #000000;color:#000;min-width:120px;height:40px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;padding:0 16px;outline:none}.tag[_ngcontent-%COMP%]:hover{border:1px solid #1493A4;color:#1493a4}.tag[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{filter:invert(45%) sepia(96%) saturate(373%) hue-rotate(139deg) brightness(88%) contrast(99%)}.tag[_ngcontent-%COMP%]:focus{padding:0 15px;border:2px solid #FB8200;color:#1493a4}.tag[_ngcontent-%COMP%]:focus   img[_ngcontent-%COMP%]{filter:invert(45%) sepia(96%) saturate(373%) hue-rotate(139deg) brightness(88%) contrast(99%)}div[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center}img[_ngcontent-%COMP%]{width:16px;height:16px}p[_ngcontent-%COMP%]{margin-right:8px}']}),e})();var K=s(2834),Y=s(4806),V=s(7851),G=s(217),j=s(9646),y=s(8421),q=s(9751),T=s(5577),$=s(1144),f=s(576),X=s(3268);const tt=["addListener","removeListener"],et=["addEventListener","removeEventListener"],nt=["on","off"];function v(e,n,o,i){if((0,f.m)(o)&&(i=o,o=void 0),i)return v(e,n,o).pipe((0,X.Z)(i));const[r,l]=function rt(e){return(0,f.m)(e.addEventListener)&&(0,f.m)(e.removeEventListener)}(e)?et.map(c=>d=>e[c](n,d,o)):function ot(e){return(0,f.m)(e.addListener)&&(0,f.m)(e.removeListener)}(e)?tt.map(O(e,n)):function it(e){return(0,f.m)(e.on)&&(0,f.m)(e.off)}(e)?nt.map(O(e,n)):[];if(!r&&(0,$.z)(e))return(0,T.z)(c=>v(c,n,o))((0,y.Xf)(e));if(!r)throw new TypeError("Invalid event target");return new q.y(c=>{const d=(...a)=>c.next(1<a.length?a:a[0]);return r(d),()=>l(d)})}function O(e,n){return o=>i=>e[o](n,i)}var P=s(4004),M=s(8505),lt=s(9300),st=s(1566),ct=s(4482),k=s(5403);const A={leading:!0,trailing:!1};var dt=s(5963);function ht(e,n,o,i){const r=window&&!!window.document&&window.document.documentElement;let l=r&&n?window:o;if(e&&(l=e&&r&&"string"==typeof e?function ut(e,n,o){return(o?window.document:n).querySelector(e)}(e,o.nativeElement,i):e,!l))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return l}function _(e){return e&&!e.firstChange}const gt={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},mt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class Ct{constructor(n=!0){this.vertical=n,this.propsMap=n?gt:mt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function St(e){return["Window","global"].some(o=>Object.prototype.toString.call(e).includes(o))}function b(e,n){return e?n.document.documentElement:null}function H(e,n){const o=function yt({container:e,isWindow:n,axis:o}){const{offsetHeightKey:i,clientHeightKey:r}=Z(o);return I(e,n,i,r)}(n);return n.isWindow?function xt(e,n,o){const{axis:i,container:r,isWindow:l}=o,{offsetHeightKey:c,clientHeightKey:d}=Z(i),a=e+F(b(l,r),i,l),p=I(n.nativeElement,l,c,d),g=function Tt(e,n,o){const i=n.topKey();if(e.getBoundingClientRect)return e.getBoundingClientRect()[i]+F(e,n,o)}(n.nativeElement,i,l)+p;return{height:e,scrolled:a,totalToScroll:g,isWindow:l}}(o,e,n):function wt(e,n,o){const{axis:i,container:r}=o;return{height:e,scrolled:r[i.scrollTopKey()],totalToScroll:r[i.scrollHeightKey()],isWindow:!1}}(o,0,n)}function Z(e){return{offsetHeightKey:e.offsetHeightKey(),clientHeightKey:e.clientHeightKey()}}function I(e,n,o,i){if(isNaN(e[o])){const r=b(n,e);return r?r[i]:0}return e[o]}function F(e,n,o){const i=n.pageYOffsetKey(),r=n.scrollTopKey(),l=n.offsetTopKey();return isNaN(window.pageYOffset)?b(o,e)[r]:e.ownerDocument?e.ownerDocument.defaultView[i]:e[l]}function Ot(e,n={down:0,up:0},o){let i,r;if(e.totalToScroll<=0)return!1;const l=e.isWindow?e.scrolled:e.height+e.scrolled;return o?(i=(e.totalToScroll-l)/e.totalToScroll,r=(n?.down?n.down:0)/10):(i=e.scrolled/(e.scrolled+(e.totalToScroll-l)),r=(n?.up?n.up:0)/10),i<=r}class Ht{constructor({totalToScroll:n}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,o){this.updateScrollPosition(n),this.updateTotalToScroll(o)}updateTriggeredFlag(n,o){o?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,o){return o?this.triggered.down===n:this.triggered.up===n}}function Zt(e){const{scrollContainer:n,scrollWindow:o,element:i,fromRoot:r}=e,l=function _t({windowElement:e,axis:n}){return function bt(e,n){const o=e.isWindow||n&&!n.nativeElement?n:n.nativeElement;return{...e,container:o}}({axis:n,isWindow:St(e)},e)}({axis:new Ct(!e.horizontal),windowElement:ht(n,o,i,r)}),c=new Ht({totalToScroll:H(i,l)}),a={up:e.upDistance,down:e.downDistance};return function It(e){let n=v(e.container,"scroll");return e.throttle&&(n=n.pipe(function pt(e,n=st.z,o=A){const i=(0,dt.H)(e,n);return function at(e,n=A){return(0,ct.e)((o,i)=>{const{leading:r,trailing:l}=n;let c=!1,d=null,a=null,p=!1;const g=()=>{a?.unsubscribe(),a=null,l&&(J(),p&&i.complete())},S=()=>{a=null,p&&i.complete()},D=m=>a=(0,y.Xf)(e(m)).subscribe((0,k.x)(i,g,S)),J=()=>{if(c){c=!1;const m=d;d=null,i.next(m),!p&&D(m)}};o.subscribe((0,k.x)(i,m=>{c=!0,d=m,(!a||a.closed)&&(r?J():D(m))},()=>{p=!0,(!(l&&c&&a)||a.closed)&&i.complete()}))})}(()=>i,o)}(e.throttle,void 0,{leading:!0,trailing:!0}))),n}({container:l.container,throttle:e.throttle}).pipe((0,T.z)(()=>(0,j.of)(H(i,l))),(0,P.U)(p=>function Ft(e,n,o){const{scrollDown:i,fire:r}=function Mt(e,n,o){const i=function Pt(e,n){return e<n.scrolled}(e,n);return{fire:Ot(n,o,i),scrollDown:i}}(e,n,o);return{scrollDown:i,fire:r,stats:n}}(c.lastScrollPosition,p,a)),(0,M.b)(({stats:p})=>c.updateScroll(p.scrolled,p.totalToScroll)),(0,lt.h)(({fire:p,scrollDown:g,stats:{totalToScroll:S}})=>function vt(e,n,o){return!!(e&&n||!o&&n)}(e.alwaysCallback,p,c.isTriggeredScroll(S,g))),(0,M.b)(({scrollDown:p,stats:{totalToScroll:g}})=>{c.updateTriggeredFlag(g,p)}),(0,P.U)(Rt))}function Rt(e){const{scrollDown:n,stats:{scrolled:o}}=e;return{type:n?"[NGX_ISE] DOWN":"[NGX_ISE] UP",payload:{currentScrollPosition:o}}}let Dt=(()=>{class e{constructor(o,i){this.element=o,this.zone=i,this.scrolled=new t.vpe,this.scrolledUp=new t.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:o,infiniteScrollDisabled:i,infiniteScrollDistance:r}){const l=_(o),c=_(i),d=_(r),a=!c&&!this.infiniteScrollDisabled||c&&!i.currentValue||d;(l||c||d)&&(this.destroyScroller(),a&&this.setup())}setup(){(function ft(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=Zt({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(o=>this.zone.run(()=>this.handleOnScroll(o)))})}handleOnScroll({type:o,payload:i}){switch(o){case"[NGX_ISE] DOWN":return this.scrolled.emit(i);case"[NGX_ISE] UP":return this.scrolledUp.emit(i);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.SBq),t.Y36(t.R0b))},e.\u0275dir=t.lG2({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[t.TTD]}),e})(),Jt=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})(),Et=(()=>{class e{constructor(){this.data="IPA",this.icon_path="assets/icons/check.svg",this.id="checkbox_id",this.value=!1,this.clicked=new t.vpe}ngOnInit(){}onHandleClick(){this.clicked.emit(this.data)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-checkbox-input"]],inputs:{data:"data",icon_path:"icon_path",id:"id",value:"value"},outputs:{clicked:"clicked"},decls:5,vars:6,consts:[["tabindex","0",1,"checkbox-container"],["type","checkbox",3,"id","checked","change"],[3,"for"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"input",1),t.NdJ("change",function(){return i.onHandleClick()}),t.qZA(),t.TgZ(2,"label",2),t._uU(3),t.ALo(4,"filter"),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("id",i.id)("checked",i.value),t.xp6(1),t.Q6J("for",i.id),t.xp6(1),t.Oqu(t.lcZ(4,4,i.data)))},dependencies:[w],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";input[_ngcontent-%COMP%]{display:none}.checkbox-container[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:400;text-transform:uppercase;position:relative;width:-moz-fit-content;width:fit-content;outline:none}label[_ngcontent-%COMP%]{display:flex;cursor:pointer}label[_ngcontent-%COMP%]:before{content:"";display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:24px;height:24px;background-color:#fff;border:1px solid #000000;margin-right:8px}input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{content:url(/assets/icons/check.svg)}.checkbox-container[_ngcontent-%COMP%]:hover   label[_ngcontent-%COMP%]:before{border:1px solid #5AB0BB}.checkbox-container[_ngcontent-%COMP%]:focus   label[_ngcontent-%COMP%]:before{border:2px solid #FB8200}']}),e})();function Nt(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",5)(1,"app-custom-checkbox-input",6),t.NdJ("clicked",function(r){t.CHM(o);const l=t.oxw();return t.KtG(l.onCheckboxClicked(r))}),t.qZA()()}if(2&e){const o=n.$implicit,i=t.oxw();t.xp6(1),t.Q6J("data",o)("id",o+"_input_checkbox")("value",i.selectedValue==o)}}const Bt=function(e){return{width:e}},Ut=function(e){return{fliped:e}},Lt=function(e,n){return{open:e,closed:n}};let Qt=(()=>{class e{constructor(){this.isOpen=!0,this.title="",this.width="100%",this.datas=[],this.checkboxClicked=new t.vpe}ngOnInit(){}handleOpenClose(){this.isOpen=!this.isOpen}onCheckboxClicked(o){this.checkboxClicked.emit(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-filter-container"]],inputs:{title:"title",width:"width",datas:"datas",selectedValue:"selectedValue"},outputs:{checkboxClicked:"checkboxClicked"},decls:7,vars:13,consts:[[1,"filter-container",3,"ngStyle"],[1,"filter-header",3,"click"],["alt","arrow-icon",3,"ngClass","src"],[1,"filter-section",3,"ngClass"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[3,"data","id","value","clicked"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.handleOpenClose()}),t.TgZ(2,"p"),t._uU(3),t.qZA(),t._UZ(4,"img",2),t.qZA(),t.TgZ(5,"div",3),t.YNc(6,Nt,2,3,"div",4),t.qZA()()),2&o&&(t.Q6J("ngStyle",t.VKq(6,Bt,i.width)),t.xp6(3),t.Oqu(i.title),t.xp6(1),t.Q6J("ngClass",t.VKq(8,Ut,i.isOpen))("src","assets/icons/arrow-down.svg",t.LSH),t.xp6(1),t.Q6J("ngClass",t.WLB(10,Lt,i.isOpen,!i.isOpen)),t.xp6(1),t.Q6J("ngForOf",i.datas))},dependencies:[h.mk,h.sg,h.PC,Et],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";.filter-container[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;padding-left:16px}.open[_ngcontent-%COMP%]{max-height:1000px}.closed[_ngcontent-%COMP%]{max-height:0px}.filter-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;cursor:pointer}.filter-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:700;padding:9px 0}.filter-section[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.filter-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:10px 0}.fliped[_ngcontent-%COMP%]{transform:rotate(180deg)}']}),e})();var u=s(433);const Wt=function(e,n){return{width:e,borderRadius:n}};let zt=(()=>{class e{constructor(){this.text="Reset to default",this.buttonClicked=new t.vpe,this.disabled=!1,this.width="auto",this.borderRadius="4px",this.type="button"}ngOnInit(){}handleClick(){this.buttonClicked.emit()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-text-button"]],inputs:{text:"text",disabled:"disabled",width:"width",borderRadius:"borderRadius",type:"type"},outputs:{buttonClicked:"buttonClicked"},decls:2,vars:7,consts:[[3,"ngStyle","disabled","type","click"]],template:function(o,i){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.handleClick()}),t._uU(1),t.qZA()),2&o&&(t.Q6J("ngStyle",t.WLB(4,Wt,i.width,i.borderRadius))("disabled",i.disabled)("type",i.type),t.xp6(1),t.hij(" ",i.text,"\n"))},dependencies:[h.PC],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";button[_ngcontent-%COMP%]{font-size:14px;line-height:24px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;font-weight:900!important;white-space:nowrap;height:40px;outline:none;border:none;color:#1493a4;background-color:#fff;padding:0 24px;border:2px solid transparent;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#cee7eb}button[_ngcontent-%COMP%]:focus{background-color:#cee7eb;border:2px solid #FB8200}button[_ngcontent-%COMP%]:disabled{color:#7b7e82;background-color:#e9e9e9}']}),e})();var Kt=s(959);function Yt(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1," The From value is greater than the Until value "),t.qZA())}function Vt(e,n){if(1&e&&(t.TgZ(0,"div",9),t.YNc(1,Yt,2,0,"p",10),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.alcoholControlGroup.hasError("invalid_intputs"))}}const Gt=function(e){return{width:e}},jt=function(e){return{fliped:e}},qt=function(e,n){return{open:e,closed:n}};function $t(e){let n=e.get("greaterAbvControl")?.value,o=e.get("lesserAbvControl")?.value;return n&&o?parseInt(o)<parseInt(n)?(console.log(n,o),e.get("greaterAbvControl")?.setErrors({invalid:!0}),e.get("lesserAbvControl")?.setErrors({invalid:!0}),{invalid_intputs:!0}):(e.get("greaterAbvControl")?.setErrors(null),e.get("lesserAbvControl")?.setErrors(null),{}):{}}let Xt=(()=>{class e{constructor(){this.alcoholControlGroup=new u.cw({greaterAbvControl:new u.NI(void 0,{validators:[u.kI.min(0)]}),lesserAbvControl:new u.NI(void 0,{validators:[u.kI.min(0)]})},{validators:[$t]}),this.lesserPlaceHolder="from (%)",this.greaterPlaceHolder="until (%)",this.title="Alcohol range",this.width="100%",this.setAlcoholRange=new t.vpe,this.isOpen=!0}get greaterAbvControl(){return this.alcoholControlGroup.get("greaterAbvControl")}get lesserAbvControl(){return this.alcoholControlGroup.get("lesserAbvControl")}ngOnInit(){this.abv_gt&&this.greaterAbvControl.setValue(this.abv_gt),this.abv_lt&&this.lesserAbvControl.setValue(this.abv_lt)}handleOpenClose(){this.isOpen=!this.isOpen}handleGreaterInput(o){parseInt(o)<0&&this.greaterAbvControl.setValue(void 0)}handleLesserInput(o){parseInt(o)<0&&this.lesserAbvControl.setValue(void 0)}onSubmit(){this.alcoholControlGroup.valid&&this.setAlcoholRange.emit({abv_gt:parseInt(this.greaterAbvControl.value),abv_lt:parseInt(this.lesserAbvControl.value)})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-filter-alcohol-range"]],inputs:{lesserPlaceHolder:"lesserPlaceHolder",greaterPlaceHolder:"greaterPlaceHolder",title:"title",width:"width",abv_gt:"abv_gt",abv_lt:"abv_lt"},outputs:{setAlcoholRange:"setAlcoholRange"},decls:14,vars:25,consts:[[1,"filter-container",3,"ngStyle"],[1,"filter-header",3,"click"],["alt","arrow-icon",3,"ngClass","src"],[3,"formGroup","ngClass","ngSubmit"],[1,"filter-section"],[1,"item"],[3,"type","width","control","placeholder","onInputHandler"],[3,"width","text","type"],["class","error-container",4,"ngIf"],[1,"error-container"],[4,"ngIf"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return i.handleOpenClose()}),t.TgZ(2,"p"),t._uU(3),t.qZA(),t._UZ(4,"img",2),t.qZA(),t.TgZ(5,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(6,"div",4)(7,"div",5)(8,"app-custom-text-input",6),t.NdJ("onInputHandler",function(l){return i.handleGreaterInput(l)}),t.qZA()(),t.TgZ(9,"div",5)(10,"app-custom-text-input",6),t.NdJ("onInputHandler",function(l){return i.handleLesserInput(l)}),t.qZA()(),t.TgZ(11,"div",5),t._UZ(12,"app-text-button",7),t.qZA()(),t.YNc(13,Vt,2,1,"div",8),t.qZA()()),2&o&&(t.Q6J("ngStyle",t.VKq(18,Gt,i.width)),t.xp6(3),t.Oqu(i.title),t.xp6(1),t.Q6J("ngClass",t.VKq(20,jt,i.isOpen))("src","assets/icons/arrow-down.svg",t.LSH),t.xp6(1),t.Q6J("formGroup",i.alcoholControlGroup)("ngClass",t.WLB(22,qt,i.isOpen,!i.isOpen)),t.xp6(3),t.Q6J("type","number")("width","92px")("control",i.greaterAbvControl)("placeholder",i.lesserPlaceHolder),t.xp6(2),t.Q6J("type","number")("width","92px")("control",i.lesserAbvControl)("placeholder",i.greaterPlaceHolder),t.xp6(2),t.Q6J("width","85px ")("text","Apply")("type","submit"),t.xp6(1),t.Q6J("ngIf",i.alcoholControlGroup.invalid))},dependencies:[u._Y,u.JL,u.sg,h.mk,h.O5,h.PC,zt,Kt.z],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";.filter-container[_ngcontent-%COMP%]{overflow:hidden;height:-moz-fit-content;height:fit-content}.open[_ngcontent-%COMP%]{max-height:1000px}.closed[_ngcontent-%COMP%]{max-height:0px}.filter-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;cursor:pointer}.filter-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:700;padding:9px 0}.filter-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;height:-moz-fit-content;height:fit-content;flex-wrap:wrap}.filter-section[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:10px 0}.fliped[_ngcontent-%COMP%]{transform:rotate(180deg)}.error-container[_ngcontent-%COMP%]{font-size:12px;line-height:20px;font-weight:400;text-align:center;color:#be0028}']}),e})();function te(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"app-filter-tag",22),t.NdJ("iconClicked",function(){const l=t.CHM(o).ngIf,c=t.oxw();return t.KtG(c.onHandleHops(l))}),t.qZA()}2&e&&t.Q6J("text",n.ngIf)}function ee(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"app-filter-tag",22),t.NdJ("iconClicked",function(){const l=t.CHM(o).ngIf,c=t.oxw();return t.KtG(c.onHandleMalts(l))}),t.qZA()}2&e&&t.Q6J("text",n.ngIf)}function ne(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",23)(1,"app-search-item-card",24),t.NdJ("cartEmit",function(r){t.CHM(o);const l=t.oxw();return t.KtG(l.onHandleCart(r))})("favoriteEmit",function(r){t.CHM(o);const l=t.oxw();return t.KtG(l.onHandleWhislist(r))}),t.qZA()()}if(2&e){const o=n.$implicit,i=t.oxw();t.xp6(1),t.Q6J("beer",o)("favorited",i.isInWhislist(o.id))}}function oe(e,n){1&e&&(t.TgZ(0,"div",23),t._UZ(1,"app-search-item-card-skelton"),t.qZA())}const ie=function(){return[1,2,3,4,5,6]};function re(e,n){1&e&&(t.TgZ(0,"div",25),t.YNc(1,oe,2,0,"div",19),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.DdM(1,ie)))}function le(e,n){1&e&&(t.TgZ(0,"div",26)(1,"h4"),t._uU(2,"Looks Like we are out of this kind of beers"),t.qZA()())}const se=function(){return["/"]},ce=function(){return["/beer"]};let ae=(()=>{class e{constructor(o,i,r){this.searchService=o,this.whislistService=i,this.cartService=r,this.hops=[],this.malts=[],this.beers$=this.searchService.beers$,this.hops=this.searchService.hops,this.malts=this.searchService.malts,this.beerSearchParameters=this.searchService.searchParameters,this.currentlyFetching$=this.searchService.currentlyFetching$,this.scrollIsDisabled$=this.searchService.scrollIsDisabled$}ngOnDestroy(){this.searchService.onResetToDefault()}ngOnInit(){this.searchService.getBeersBySearchParameters()}onScroll(){this.currentlyFetching$.getValue()||(console.log("scrolled"),this.searchService.onHandleNextPage())}onHandleWhislist(o){this.whislistService.addOrRemoveFromList(o)}isInWhislist(o){return this.whislistService.isInTheList(o)}onHandleCart(o){this.cartService.addToCart(o)}onHandleHops(o){this.searchService.onHandleHops(o)}onHandleMalts(o){this.searchService.onHandleMalts(o)}onResetToDefault(){this.searchService.onResetToDefault()}onHandleAlcoholRange(o){this.searchService.onHandleAlcoholRange(o)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(N.o),t.Y36(B.p),t.Y36(U.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:32,vars:29,consts:[[1,"search-page"],[1,"breadcrumbs-container"],[3,"linkTo"],[3,"linkTo","text","showIcon"],[1,"notification-bar-container"],[1,"title-container"],[1,"filters-container"],[1,"filter-title"],["src","assets/icons/filter.svg","alt",""],[3,"datas","title","width","selectedValue","checkboxClicked"],[3,"abv_lt","abv_gt","setAlcoholRange"],[1,"button-container"],[3,"text","buttonClicked"],[1,"main-content"],[1,"active-filters-container"],[1,"text"],[1,"active-filters"],["class","item",3,"text","iconClicked",4,"ngIf"],["infiniteScroll","",1,"search-items-container",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollDisabled","scrolled"],["class","search-item",4,"ngFor","ngForOf"],["class","loading-items",4,"ngIf"],["class","end-message",4,"ngIf"],[1,"item",3,"text","iconClicked"],[1,"search-item"],[3,"beer","favorited","cartEmit","favoriteEmit"],[1,"loading-items"],[1,"end-message"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-breadcrumbs",2)(3,"app-breadcrumbs",3),t.qZA(),t.TgZ(4,"div",4),t._UZ(5,"app-notification-bar"),t.qZA(),t.TgZ(6,"div",5)(7,"h1"),t._uU(8,"All Beers"),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7),t._UZ(11,"img",8),t.TgZ(12,"p"),t._uU(13,"Filter By"),t.qZA()(),t.TgZ(14,"app-search-filter-container",9),t.NdJ("checkboxClicked",function(l){return i.onHandleHops(l)}),t.qZA(),t.TgZ(15,"app-search-filter-container",9),t.NdJ("checkboxClicked",function(l){return i.onHandleMalts(l)}),t.qZA(),t.TgZ(16,"app-search-filter-alcohol-range",10),t.NdJ("setAlcoholRange",function(l){return i.onHandleAlcoholRange(l)}),t.qZA(),t.TgZ(17,"div",11)(18,"app-secondary-button",12),t.NdJ("buttonClicked",function(){return i.onResetToDefault()}),t.qZA()()(),t.TgZ(19,"section",13)(20,"div",14)(21,"p",15),t._uU(22,"Active Filters"),t.qZA(),t.TgZ(23,"div",16),t.YNc(24,te,1,1,"app-filter-tag",17),t.YNc(25,ee,1,1,"app-filter-tag",17),t.qZA()(),t.TgZ(26,"div",18),t.NdJ("scrolled",function(){return i.onScroll()}),t.YNc(27,ne,2,2,"div",19),t.ALo(28,"async"),t.YNc(29,re,2,2,"div",20),t.ALo(30,"async"),t.YNc(31,le,3,0,"div",21),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("linkTo",t.DdM(27,se)),t.xp6(1),t.Q6J("linkTo",t.DdM(28,ce))("text","All Beers")("showIcon",!1),t.xp6(11),t.Q6J("datas",i.hops)("title","Hops")("width","100%")("selectedValue",i.beerSearchParameters.hops),t.xp6(1),t.Q6J("datas",i.malts)("title","Malts")("width","100%")("selectedValue",i.beerSearchParameters.malts),t.xp6(1),t.Q6J("abv_lt",i.beerSearchParameters.abv_lt)("abv_gt",i.beerSearchParameters.abv_gt),t.xp6(2),t.Q6J("text","Reset to default"),t.xp6(6),t.Q6J("ngIf",i.beerSearchParameters.hops),t.xp6(1),t.Q6J("ngIf",i.beerSearchParameters.malts),t.xp6(1),t.Q6J("infiniteScrollDistance",2)("infiniteScrollThrottle",1500)("infiniteScrollDisabled",i.scrollIsDisabled$.getValue()),t.xp6(1),t.Q6J("ngForOf",t.lcZ(28,23,i.beers$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(30,25,i.currentlyFetching$)),t.xp6(2),t.Q6J("ngIf",i.scrollIsDisabled$.getValue()))},dependencies:[h.sg,h.O5,Q,z,K.n,Y.K,V.m,G.F,Dt,Qt,Xt,h.Ov],styles:['@import"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";.breadcrumbs-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px 0;grid-column:1/13}.notification-bar-container[_ngcontent-%COMP%]{grid-column:1/13}.filter-title[_ngcontent-%COMP%]{display:flex;align-items:center}.filter-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:400;text-transform:uppercase;padding:8px}.title-container[_ngcontent-%COMP%]{grid-column:1/13;padding:16px 0}.search-page[_ngcontent-%COMP%]{width:100%;margin:auto;display:grid;grid-template-columns:repeat(12,1fr)}.filters-container[_ngcontent-%COMP%]{grid-column:1/4;padding-right:25px}.filters-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:12px 0}.main-content[_ngcontent-%COMP%]{grid-column:4/13;width:100%}.active-filters-container[_ngcontent-%COMP%]{width:100%;display:none;margin:16px 0}.active-filters-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:8px;font-size:14px;line-height:24px;font-weight:700}.active-filters-container[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-wrap:wrap}.active-filters-container[_ngcontent-%COMP%]   .active-filters[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:8px}.active-filters-container[_ngcontent-%COMP%]:has(.item){display:block}.loading-items[_ngcontent-%COMP%]{width:100%;grid-column:1/4;grid-auto-rows:auto;display:grid;grid-template-columns:repeat(3,1fr)}.search-items-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:auto}.search-item[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;padding:15px}.button-container[_ngcontent-%COMP%]{width:100%;max-width:305px;display:flex;align-items:center;justify-content:center}.end-message[_ngcontent-%COMP%]{grid-column:1/4;text-align:center;width:100%}']}),e})();var R=s(7861);const de=[{path:"",component:ae}];let pe=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[R.Bz.forChild(de),R.Bz]}),e})(),he=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[E.m,pe,Jt]}),e})()}}]);