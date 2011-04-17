AUI.add("aui-dialog",function(r){var l=r.Lang,J=l.isBoolean,D=l.isArray,P=l.isObject,U=function(A){return parseInt(A,10)||0;},w="",n="bodyContent",V="boundingBox",Z="button",d="buttons",W="close",Q="closethick",K="constrain2view",b="container",e="dd",R="default",X="destroyOnClose",y="dialog",z=".",o="draggable",m="dragInstance",h="footerContent",S="hd",I="height",G="icon",c="icons",u="io",x="loading",C="modal",aa="proxy",f="resizable",p="resizableInstance",F="stack",j="useARIA",O="viewportRegion",g="width",s="resize:resize",N="resize:end",i=r.getClassName,B=i(y),k=i(y,Z),E=i(y,Z,b),T=i(y,Z,R),a=i(y,S),v=i(G,x),q=i(e),H=document.createTextNode(""),M='<button class="'+k+'"></button>',Y='<div class="'+E+'"></div>';var t=function(A){if(!r.DialogMask){r.DialogMask=new r.OverlayMask().render();}};r.mix(t,{NAME:y,ATTRS:{bodyContent:{value:H},buttons:{value:[],validator:D},close:{value:true},constrain2view:{value:false,validator:J},destroyOnClose:{value:false,validator:J},draggable:{lazyAdd:true,value:true,setter:function(A){return this._setDraggable(A);}},dragInstance:{value:null},modal:{setter:function(A){return this._setModal(A);},lazyAdd:false,value:false,validator:J},resizable:{setter:function(A){return this._setResizable(A);},value:true},resizableInstance:{value:null},stack:{lazyAdd:true,value:true,setter:function(A){return this._setStack(A);},validator:J},strings:{value:{close:"Close dialog"}}}});t.prototype={initializer:function(ab){var A=this;var ac=A.get(c);var ae=A.get(W);var ad=A.get(d);if(ad&&ad.length&&!A.get(h)){A.set(h,H);}if(ae){var L={icon:Q,id:Q,handler:{fn:A.close,context:A},title:A.get("strings").close};if(ac){ac.push(L);}A.set(c,ac);}A.after("render",A._afterRenderer);},bindUI:function(){var A=this;A._bindLazyComponents();A.publish("close",{defaultFn:A._close});A.on("visibleChange",A._afterSetVisible);},syncUI:function(){var A=this;if(A.get(j)){A.plug(r.Plugin.Aria,{attributes:{visible:{ariaName:"hidden",format:function(L){return !L;}}}});}},destructor:function(){var A=this;var L=A.get(V);r.Event.purgeElement(L,true);r.DialogManager.remove(A);},alignToViewport:function(ab,L){var A=this;var ac=r.getDoc().get(O);A.move([ac.left+U(ab),ac.top+U(L)]);},_bindLazyComponents:function(){var A=this;var L=A.get(V);L.on("mouseenter",r.bind(A._initLazyComponents,A));},close:function(){var A=this;A.fire("close");},_afterConstrain2viewChange:function(L){var A=this;A._setConstrain2view(L.newVal);},_afterRenderer:function(L){var A=this;A._initButtons();A.get(F);A.get(u);},_close:function(){var A=this;if(A.get(X)){A.destroy();}else{A.hide();}if(A.get(C)){r.DialogMask.hide();}},_initButtons:function(){var A=this;var ab=A.get(d);var L=r.Node.create(Y);var ac=r.Node.create(M);r.each(ab,function(af,ae){var ai=ac.clone();if(af.isDefault){ai.addClass(T);}if(af.handler){var ah=af.handler;var ag=ah.fn||ah;var ad=ah.context||A;ai.on("click",ag,ad);}ai.html(af.text||w);L.append(ai);});if(ab.length){A.set(h,L);}},_initLazyComponents:function(){var A=this;if(!A.get(m)&&A.get(o)){A.get(o);}if(!A.get(p)&&A.get(f)){A.get(f);}},_setConstrain2view:function(L){var A=this;var ab=A.get(m);if(ab){if(L){ab.plug(r.Plugin.DDConstrained,{constrain2view:A.get(K)});}else{ab.unplug(r.Plugin.DDConstrained);}}},_setDefaultARIAValues:function(){var A=this;if(!A.get(j)){return;}A.aria.setRole("dialog",A.get(V));if(A.icons){var L=A.icons.item(Q);if(L){A.aria.setAttribute("controls",A.get("id"),L.get(V));}}},_setDraggable:function(ad){var A=this;var ab=A.get(V);var ac=function(){var ag=A.get(m);if(ag){ag.destroy();ag.unplug(r.Plugin.DDConstrained);}};r.DD.DDM.CSS_PREFIX=q;if(ad){var ae={node:ab,handles:[z+a]};var L=r.merge(ae,ad||{});if(L.on){r.each(L.on,function(ah,ag){L.on[ag]=r.bind(ah,A);});}ac();var af=new r.DD.Drag(L);A.set(m,af);A.after("constrain2viewChange",A._afterConstrain2viewChange,A);A._setConstrain2view(A.get("constrain2view"));}else{ac();}return ad;},_setModal:function(L){var A=this;if(L){r.DialogMask.show();}else{r.DialogMask.hide();}return L;},_setResizable:function(ad){var A=this;var ae=A.get(p);var ac=function(){if(ae){ae.destroy();}};if(ad){var ab=function(ag){var af=ag.type;var ah=ag.info;if((af==N)||((af==s)&&!ag.currentTarget.get(aa))){A.set(I,ah.offsetHeight);A.set(g,ah.offsetWidth);}};ac();var L=new r.Resize(r.merge({handles:"r,br,b",minHeight:100,minWidth:200,constrain2view:true,node:A.get(V),proxy:true},ad||{}));L.after("end",ab);L.after("resize",ab);A.set(p,L);return ad;}else{ac();}},_setStack:function(L){var A=this;if(L){r.DialogManager.register(A);}else{r.DialogManager.remove(A);}return L;},_afterSetVisible:function(L){var A=this;if(A.get(C)){if(L.newVal){r.DialogMask.show();}else{r.DialogMask.hide();}}}};r.Dialog=r.Base.build(y,r.Panel,[t,r.WidgetPosition,r.WidgetStack,r.WidgetPositionAlign,r.WidgetPositionConstrain]);r.DialogManager=new r.OverlayManager({zIndexBase:1000});r.mix(r.DialogManager,{findByChild:function(A){return r.Widget.getByNode(r.one(A).ancestor(z+B,true));},closeByChild:function(A){return r.DialogManager.findByChild(A).close();},refreshByChild:function(L){var A=r.DialogManager.findByChild(L);if(A&&A.io){A.io.start();}}});},"@VERSION@",{requires:["aui-panel","dd-constrain","aui-button-item","aui-overlay-manager","aui-overlay-mask","aui-io-plugin","aui-resize"],skinnable:true});