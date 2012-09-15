AUI.add("aui-scheduler-view",function(c1){var dh=c1.Lang,bn=dh.isBoolean,E=dh.isFunction,aW=dh.isNumber,dx=dh.isObject,cN=dh.isString,cy=function(A){return parseFloat(A)||0;},cB=function(dC,A){return Math.round(dC/A)*A;},aE=c1.DataType.DateMath,cW=c1.WidgetStdMod,a4=aE.WEEK_LENGTH,cE="scheduler-view",aV="scheduler-view-day",dn="scheduler-view-month",cs="scheduler-view-table",c7="scheduler-view-week",bC="activeColumn",cx="activeView",U="allDay",aD="body",bc="boundingBox",dA="cancel",be="close",at="col",aL="colDaysNode",c5="colHeaderDaysNode",O="colblank",D="coldata",aY="colday",b="colgrid",ae="colspan",q="coltime",bY="columnData",bl="columnDayHeader",a0="columnShims",a9="columnTableGrid",bJ="columnTime",a8="container",a5="content",ah="creationStartDate",cb="date",cw="viewDate",ce="data",de="day",aa="days",ay="dd",aN="delegate",H="delegateConfig",cv="disabled",bi="displayDaysInterval",cR="displayRows",af="div",bV="division",dr="dotted",ak="down",c9="dragNode",B="dragging",L="draggingEvent",cM="duration",aQ="endDate",bv="event",dq="eventClass",cu="eventPlaceholder",dz="eventRecorder",v="eventWidth",cS="events",cp="eventsOverlay",aj="eventsOverlayNode",cV="filterFn",aX="first",c8="firstDayOfWeek",ci="fixedHeight",bG="grid",ca="gridContainer",bw="grip",dy="hd",cY="header",by="headerDateFormatter",dv="headerTableNode",br="headerView",bT="headerViewConfig",a2="headerViewLabelNode",cJ="height",bz="horizontal",bb="host",aT="hourHeight",x="icon",x="icon",aw="isoTime",al="label",bj="lasso",bd="left",aM="locale",o="marginRight",an="marker",bx="markercell",bp="markercellsNode",P="markers",cl="markersNode",co="month",bE="monthContainerNode",da="monthRowContainer",f="monthRows",b6="more",I="mousedown",S="mousemove",bh="mouseup",a6="next",dB="node",av="nomonth",aF="noscroll",cX="offsetHeight",cZ="offsetWidth",bD="overlay",c2="pad",aZ="paddingNode",Y="parentNode",b4="proxy",bK="proxyNode",au="px",ao="region",bf="rendered",cT="repeated",cH="resizer",cO="resizerNode",cA="resizing",bq="right",b2="row",b1="rowsContainerNode",cD="save",u="scheduler",aS="scheduler-event",ag="scrollable",Z="shim",Q="showMore",c6="startDate",ad="startXY",cP="strings",bg="table",G="tableGridNode",cc="tableNode",cq="tableRowContainer",dm="tableRows",b9="tbody",i="td",bX="time",ar="timesNode",k="title",a="tl",ax="today",b0="top",dw="tr",b8="view",aK="visible",dj="week",cg="width",y="data-colnumber",m="a",bU=",",cz="-",cG=".",ct="",h="&mdash;",ch="%",ac=" ",J=c1.getClassName,bW=J(cE,aF),am=J(cE,ag);var bo=c1.Component.create({NAME:cE,AUGMENTS:[c1.WidgetStdMod],ATTRS:{bodyContent:{value:ct},eventClass:{valueFn:function(){return c1.SchedulerEvent;}},filterFn:{validator:E,value:function(A){return true;}},height:{value:600},isoTime:{value:false,validator:bn},name:{value:ct,validator:cN},navigationDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%A, %d %B, %Y",locale:dD.get(aM)});},validator:E},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:bn},triggerNode:{setter:c1.one},visible:{value:false}},BIND_UI_ATTRS:[ag],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},getAdjustedViewDate:function(dC){var A=this;return dC;},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return aE.clearTime(new Date());},limitDate:function(dC,dD){var A=this;if(aE.after(dC,dD)){dC=aE.clone(dD);}return dC;},plotEvents:function(){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetDate:function(A){},_afterRender:function(dD){var A=this;var dC=A.get(u);A._uiSetScrollable(A.get(ag));},_setScheduler:function(dD){var A=this;var dC=A.get(u);if(dC){A.removeTarget(dC);}if(dD){A.addTarget(dD);dD.after("eventsChange",c1.bind(A.flushViewCache,A));}return dD;},_uiSetScrollable:function(dD){var A=this;var dC=A.bodyNode;if(dC){dC.toggleClass(am,dD);dC.toggleClass(bW,!dD);}}}});c1.SchedulerView=bo;var cr=dh.sub;var n=c1.cached(function(){var dE=c1.config.doc,dC=dE.createElement("div"),A=dE.getElementsByTagName("body")[0],dD=0.1;if(A){dC.style.cssText="position:absolute;visibility:hidden;overflow:scroll;width:20px;";dC.appendChild(dE.createElement("p")).style.height="1px";A.insertBefore(dC,A.firstChild);dD=dC.offsetWidth-dC.clientWidth;A.removeChild(dC);}return dD;},null,0.1);var T=function(A,dC){return function(dE){var dD=dE.all(A);return(dD.size()>=dC)?dD:null;};},j=J(x),M=J(x,bw,dr,bz),a1=J(aS),bP=J(aS,cv),cK=J(aS,b4),X=J(u,ax),aB=J(u,ax,dy),F=J(cE,D),e=J(cE,b),db=J(cE,bG),dc=J(cE,bG,a8),a3=J(cE,de,cH,x),cI=J(cE,de,cH),bS=J(cE,an,bV),dd=J(cE,bx),R=J(cE,P),cd=J(cE,de,bg),dg=J(cE,de,cY,bg),w=J(cE,de,cY,de),bR=J(cE,de,cY,de,c2,bq),cL=J(cE,de,cY,de,aX),bu=J(cE,de,cY,at),bF=J(cE,de,cY,b8,al),ds=J(cE,de,bg,at),aR=J(cE,de,bg,at,Z),W=J(cE,de,bg,O),N=J(cE,de,bg,aY),dk=J(cE,de,bg,q),bZ=J(cE,de,bg,bX),s='<div class="'+cI+'">'+'<div class="'+[j,M,a3].join(ac)+'"></div>'+"</div>",ap='<div class="'+dd+'">'+'<div class="'+bS+'"></div>'+"</div>",r='<span class="'+bF+'">{label}</span>',aI='<table cellspacing="0" cellpadding="0" class="'+cd+'">'+"<tbody>"+'<tr class="'+e+'" height="1">'+'<td height="0" class="'+[ds,W].join(ac)+'"></td>'+'<td class="'+dc+'" colspan="1">'+'<div class="'+db+'">'+'<div class="'+R+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+F+'">'+'<td class="'+[ds,dk].join(ac)+'"></td>'+"</tr>"+"</tbody>"+"</table>",bL='<td class="'+[ds,N].join(ac)+'" data-colnumber="{colNumber}">'+'<div class="'+aR+'"></div>'+"</td>",l='<div class="'+bZ+'">{hour}</div>',aJ='<table cellspacing="0" cellpadding="0" class="'+dg+'">'+"<tbody>"+'<tr class="'+bu+'"></tr>'+"</tbody>"+"</table>",bO='<th class="'+w+'" data-colnumber="{colNumber}"><a href="#">&nbsp;</a></th>',aH='<td class="'+[w,cL].join(ac)+'"></td>',C='<th class="'+[w,bR].join(ac)+'">&nbsp;</th>';var du=c1.Component.create({NAME:aV,ATTRS:{bodyContent:{value:ct},days:{value:1,validator:aW},delegateConfig:{value:{},setter:function(dC){var A=this;
return c1.merge({dragConfig:{useShim:false},bubbleTargets:A,container:A.get(bc),nodes:cG+a1,invalid:"input, select, button, a, textarea, "+cG+bP},dC||{});},validator:dx},eventWidth:{value:95,validator:aW},filterFn:{value:function(A){return(A.getHoursDuration()<=24&&!A.get(U));}},headerDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%d %A",locale:dD.get(aM)});},validator:cN},headerView:{value:true,validator:bn},headerViewConfig:{setter:function(dC){var A=this;return c1.merge({displayDaysInterval:1,displayRows:6,filterFn:function(dD){return((dD.getHoursDuration()>24)||dD.get(U));},height:"auto",visible:true},dC||{});},value:{}},hourHeight:{value:52,validator:aW},name:{value:de},navigationDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%A, %B %d, %Y",locale:dD.get(aM)});},validator:E},strings:{value:{allDay:"All day"}},headerTableNode:{valueFn:function(){return c1.Node.create(aJ);}},headerViewLabelNode:{valueFn:function(){var dC=this;var A=dC.get(cP);return c1.Node.create(cr(r,{label:A[U]}));}},resizerNode:{valueFn:function(){return c1.Node.create(s);}},tableNode:{valueFn:function(){return c1.Node.create(aI);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colDaysNode:T(cG+N,1),colHeaderDaysNode:T(cG+w,2),headerTableNode:cG+dg,headerViewLabelNode:cG+bF,markercellsNode:T(cG+dd,24),resizerNode:cG+cI,tableNode:cG+cd,timesNode:T(cG+bZ,24)},EXTENDS:c1.SchedulerView,prototype:{initializer:function(){var A=this;A[aL]=A.get(aL);A[c5]=A.get(c5);A[dv]=A.get(dv);A[bp]=A.get(bp);A[cO]=A.get(cO);A[cc]=A.get(cc);A[ar]=A.get(ar);A[bC]=null;A[bY]=A[cc].one(cG+F);A[bl]=A.headerTableNode.one(cG+bu);A[a0]=A[aL].all(cG+aR);A[bJ]=A[cc].one(cG+dk);A[ca]=A[cc].one(cG+dc);A[cl]=A[cc].one(cG+R);if(A.get(br)){A[br]=new c1.SchedulerTableView(A.get(bT));}},renderUI:function(){var A=this;A[bJ].setContent(A[ar]);A[cl].setContent(A[bp]);A[aL].appendTo(A[bY]);A[c5].appendTo(A[bl]);if(A[br]){A[br].set(u,A.get(u));A[br].render();}},bindUI:function(){var A=this;A[dv].delegate("click",c1.bind(A._onClickDaysHeader,A),cG+w);A[bY].delegate("mousedown",c1.bind(A._onMouseDownTableCol,A),cG+ds);A[bY].delegate("mouseenter",c1.bind(A._onMouseEnterEvent,A),cG+a1);A[bY].delegate("mouseleave",c1.bind(A._onMouseLeaveEvent,A),cG+a1);A[bY].delegate("mousemove",c1.bind(A._onMouseMoveTableCol,A),cG+N);A[bY].delegate("mouseup",c1.bind(A._onMouseUpTableCol,A),cG+ds);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:tickAlignY",A._dragTickAlignY);A.on("schedulerChange",A._onSchedulerChange);A.after("drag:align",A._afterDragAlign);},syncUI:function(){var A=this;du.superclass.syncUI.apply(this,arguments);A[ca].attr(ae,A.get(aa));A._setupDragDrop();},syncStdContent:function(){var dC=this;dC.setStdModContent(cW.BODY,dC[cc].getDOM());var A=c1.NodeList.create(dC[dv]);if(dC[br]){A.push(dC[br].get(bc));A.push(dC.get(a2));}dC.setStdModContent(cW.HEADER,A);},calculateEventHeight:function(dD){var dC=this;var A=dC.get(aT);return Math.max(dD*(A/60),A/2);},calculateTop:function(dC){var A=this;return((dC.getHours()*60)+dC.getMinutes()+(dC.getSeconds()/60))*(A.get(aT)/60);},getNextDate:function(){var A=this;var dC=A.get(u).get(cb);return aE.add(dC,aE.DAY,1);},getPrevDate:function(){var A=this;var dC=A.get(u).get(cb);return aE.subtract(dC,aE.DAY,1);},getColumnByDate:function(dC){var A=this;return A[aL].item(A.getDateDaysOffset(dC));},getColumnShimByDate:function(dC){var A=this;return A[a0].item(A.getDateDaysOffset(dC));},getDateByColumn:function(dC){var A=this;var dD=aE.safeClearTime(A.get(u).get(cw));return aE.add(dD,aE.DAY,dC);},getDateDaysOffset:function(dC){var A=this;var dD=aE.safeClearTime(A.get(u).get(cw));return aE.getDayOffset(aE.safeClearTime(dC),dD);},getYCoordTime:function(dF){var dC=this;var A=dC.get(aT);var dG=cy((dF/A).toFixed(2));var dE=Math.floor((dG*100)%100*0.6);var dD=Math.floor(dG);return[dD,dE,0];},plotEvent:function(dD){var A=this;var dE=dD.get(dB);if(dE.size()<2){dD.addPaddingNode();}var dG=dD.get(dB).item(0);var dC=dD.get(dB).item(1);var dF=A.getColumnShimByDate(dD.get(aQ));var dH=A.getColumnShimByDate(dD.get(c6));if(dH){dH.append(dG);if(dD.get(aK)){dG.show();}}else{dG.hide();}if(dF){if(dF.compareTo(dH)||dD.isDayBoundaryEvent()){dC.hide();}else{dF.append(dC);if(dD.get(aK)){dC.show();}}}else{dC.hide();}dD.syncNodeUI();A.syncEventTopUI(dD);A.syncEventHeightUI(dD);},plotEvents:function(){var A=this;var dC=A.get(u);var dD=A.get(cV);A[a0].each(function(dH,dG){var dE=dC.getEventsByDay(A.getDateByColumn(dG),true);var dF=[];dH.empty();c1.Array.each(dE,function(dI){if(dD.apply(A,[dI])){A.plotEvent(dI);dF.push(dI);}});A.syncEventsIntersectionUI(dF);});if(A.get(br)){A.syncHeaderViewUI();}},syncColumnsUI:function(){var A=this;A[aL].each(function(dE,dD){var dC=A.getDateByColumn(dD);dE.toggleClass(X,aE.isToday(dC));});},syncDaysHeaderUI:function(){var dC=this;var dE=dC.get(u).get(cw);var dD=dC.get(by);var A=dC.get(aM);dC[c5].all(m).each(function(dH,dG){var dF=aE.add(dE,aE.DAY,dG);dH.toggleClass(aB,aE.isToday(dF));dH.html(dD.call(dC,dF));});},syncEventsIntersectionUI:function(dC){var A=this;var dD=A.get(v);A.get(u).flushEvents();c1.Array.each(dC,function(dF){var dH=A.findEventIntersections(dF,dC);var dG=dH.length;var dE=(dD/dG);c1.Array.each(dH,function(dJ,dK){var dI=dJ.get(dB).item(0);var dM=dE*dK;var dL=dE*1.7;if(dK===(dG-1)){dL=dD-dM;}dI.setStyle(cg,dL+ch);dI.setStyle(bd,dM+ch);var dN=dI.get(Y);if(dN){dN.insert(dI,dK);}dJ._filtered=true;});});},syncEventHeightUI:function(dE){var dC=this;var dI=dE.get(aQ);var A=dE.get(c6);var dF=aE.clone(A);dF.setHours(24,0,0);var dG=aE.getMinutesOffset(dC.limitDate(dI,dF),A);dE.get(dB).item(0).set(cX,dC.calculateEventHeight(dG));var dD=dE.get(dB).item(1);if(dD.inDoc()){var dH=aE.getMinutesOffset(dI,aE.toMidnight(dE.getClearEndDate()));
dD.set(cX,dC.calculateEventHeight(dH));}},syncEventTopUI:function(dC){var A=this;dC.get(dB).item(0).setStyle(b0,A.calculateTop(dC.get(c6))+au);dC.get(dB).item(1).setStyle(b0,0);},syncHeaderViewUI:function(){var dC=this;if(dC.get(br)){var dE=dC[br];dE.plotEvents();var dF=dE.get(bc);dF.setStyle(o,n());var dD=dF.one(cG+bt);var A=Math.max(dD.get(cX),40);dE.set(cJ,A);dC._fillHeight();}},calculateYDelta:function(dD,dC){var A=this;return(dC[1]-dD[1])/(A.get(aT)/2)*30;},findEventIntersections:function(dC,dD){var A=this;var dE=[];c1.Array.each(dD,function(dF){if(!dC._filtered&&dC.intersectHours(dF)){dE.push(dF);}});return dE;},getXYDelta:function(dC){var A=this;var dD=dC.currentTarget.getXY(),dE=[dC.pageX,dC.pageY];return c1.Array.map(dD,function(dG,dF){return(dE[dF]-dG);});},getTickY:function(){var A=this;return cB(Math.ceil(A.get(aT)/2),10);},roundToNearestHour:function(dC,dD){var A=this;dC.setHours(dD[0],cB(dD[1],A.getTickY()),dD[2]);},_afterDragAlign:function(dD){var dC=this;var A=dD.target;if(!dC[ad]){dC[ad]=A.actXY;}A.actXY[0]=null;},_dragTickAlignX:function(dD){var dC=this;var dG=dC[L];if(dG&&!dC[cA]){var dE=dC[cu];var dF=cy(dD.attr(y))-dC.startColNumber;dC.draggingEventStartDate=aE.add(dG.get(c6),aE.DAY,dF);var A=aE.clone(dC.draggingEventStartDate);aE.copyHours(A,dE.get(c6));dE.move(A);dC.plotEvent(dE);}},_dragTickAlignY:function(A){var dH=this;var dC=dH.get(u);var dJ=dC.get(dz);var dE=dH[L];if(dE){var dI=A.target.get(bb);var dF=dH[cu];var dG=dH.calculateYDelta(dH[ad],dI.actXY);if(dH[cA]){var dD=aE.add(dH.draggingEventEndDate,aE.MINUTES,dG);if(aE.getMinutesOffset(dD,dH.draggingEventStartDate)<30){return;}dF.set(aQ,dD);}else{dF.move(aE.add(dH.draggingEventStartDate,aE.MINUTES,dG));}dH.plotEvent(dF);}},_setupDragDrop:function(){var dC=this;if(!dC[cu]){var dD=dC.get(u);dC[cu]=new (dC.get(dq))({scheduler:dD});dC[cu].removeTarget(dD);dC[cu].get(dB).addClass(cK).hide();}if(!dC.delegate){dC.delegate=new c1.DD.Delegate(dC.get(H));}var A=dC.delegate.dd;A.unplug(c1.Plugin.DDConstrained);A.unplug(c1.Plugin.DDNodeScroll);var dE=dC.bodyNode.get(ao);dE.bottom=Infinity;dE.top=-Infinity;A.plug(c1.Plugin.DDConstrained,{bubbleTargets:dC,constrain:dE,stickY:true,tickY:dC.get(aT)/2});A.plug(c1.Plugin.DDNodeScroll,{node:dC.bodyNode,scrollDelay:150});},_uiSetDate:function(dC){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(dE){var A=this;var dD=A.get(u);if(dE.target.test(m)){var dF=dD.getViewByName(de);if(dF){var dC=cy(dE.currentTarget.attr(y));dD.set(cw,A.getDateByColumn(dC));dD.set(cx,dF);}}dE.preventDefault();},_onEventDragEnd:function(dC){var A=this;var dE=A[L];if(dE){var dD=A[cu];dD.set(aK,false);dE.set(aK,true);dE.copyDates(dD);A.get(u).syncEventsUI();}A[ad]=null;A[L]=null;},_onEventDragStart:function(dD){var A=this;var dF=A[L]=A.delegate.dd.get(dB).getData(aS);if(dF){var dE=A[cu];dE.copyPropagateAttrValues(dF);A.plotEvent(dE);dF.set(aK,false);A.draggingEventStartDate=aE.clone(dF.get(c6));A.draggingEventEndDate=aE.clone(dF.get(aQ));var dC=A.getColumnByDate(dF.get(c6));A.startColNumber=dC?cy(dC.attr(y)):0;}},_onMouseDownTableCol:function(dC){var dH=this;var dG=dC.target;var dE=dH.get(u);var dI=dE.get(dz);if(dI&&!dE.get(cv)){dI.hideOverlay();if(dG.test(cG+aR)){dH[ad]=[dC.pageX,dC.pageY];var dJ=cy(dC.currentTarget.attr(y));var dD=dH.getDateByColumn(dJ);var A=dH.getXYDelta(dC);dH.roundToNearestHour(dD,dH.getYCoordTime(A[1]));var dF=aE.add(dD,aE.MINUTES,dI.get(cM));dI.move(dD);dI.set(U,false);dI.set(aQ,dF);dH[ah]=dD;dC.halt();}else{if(dG.test([cG+cI,cG+a3].join(bU))){dH[cA]=true;}}}dH.get(bc).unselectable();},_onMouseEnterEvent:function(dD){var A=this;var dE=dD.currentTarget;var dC=dE.getData(aS);if(dC&&!dC.get(cv)){A[cO].appendTo(dE);}},_onMouseLeaveEvent:function(dC){var A=this;if(!A[cA]){A._removeResizer();}},_onMouseMoveTableCol:function(dF){var dC=this;var dE=dF.currentTarget;var dD=dC.get(u).get(dz);if(dC[bC]!==dE){dC[bC]=dE;dC._dragTickAlignX(dC[bC]);}var dG=dC[ah];if(dG){var dI=cB(dC.calculateYDelta(dC[ad],[dF.pageX,dF.pageY]),dC.getTickY());var dH=(dI>=dC._delta);if(dC._delta!==dI){if(dI>0){var A=dH?Math.max(dI,dD.get(cM)):dI;dD.set(aQ,aE.add(dG,aE.MINUTES,A));}else{dD.set(c6,aE.add(dG,aE.MINUTES,dI));}dC.plotEvent(dD);dC._delta=dI;}}},_onMouseUpTableCol:function(dE){var A=this;var dD=A.get(u);var dC=dD.get(dz);if(dC&&!dD.get(cv)){if(A[ah]){A.plotEvent(dC);dC.showOverlay([dE.pageX,dE.pageY]);}}A[ah]=null;A[cA]=false;A[ad]=null;A._removeResizer();A.get(bc).selectable();},_onSchedulerChange:function(dC){var A=this;if(A[br]){A[br].set(u,dC.newVal);}},_removeResizer:function(){var A=this;A[cO].remove();},_valueColDaysNode:function(){var A=this;var dE=A.get(aa);var dC=[],dD=0;while(dE--){dC.push(c1.Lang.sub(bL,{colNumber:dD++}));}return c1.NodeList.create(dC.join(ct));},_valueColHeaderDaysNode:function(){var A=this;var dE=A.get(aa);var dC=[],dD=0;dC.push(aH);while(dE--){dC.push(c1.Lang.sub(bO,{colNumber:dD++}));}dC.push(C);return c1.NodeList.create(dC.join(ct));},_valueMarkercellsNode:function(){var A=this;var dC=[],dD;for(dD=0;dD<=23;dD++){dC.push(ap);}return c1.NodeList.create(dC.join(ct));},_valueTimesNode:function(){var A=this;var dE=A.get(aw);var dD=[],dC;for(dC=0;dC<=23;dC++){dD.push(cr(l,{hour:dE?aE.toIsoTimeString(dC):aE.toUsTimeString(dC,false,true)}));}return c1.NodeList.create(dD.join(ct));}}});c1.SchedulerDayView=du;var aA=c1.Component.create({NAME:c7,ATTRS:{bodyContent:{value:ct},days:{value:7},headerViewConfig:{value:{displayDaysInterval:a4}},name:{value:dj},navigationDateFormatter:{valueFn:function(){return this._valueNavigationDateFormatter;},validator:E}},EXTENDS:c1.SchedulerDayView,prototype:{getAdjustedViewDate:function(dE){var A=this;var dD=A.get(u);var dC=dD.get(c8);return aE.getFirstDayOfWeek(dE,dC);},getNextDate:function(){var A=this;var dD=A.get(u);var dC=dD.get(cb);var dE=A._firstDayOfWeek(dC);return aE.add(dE,aE.WEEK,1);},getPrevDate:function(){var A=this;var dD=A.get(u);var dC=dD.get(cb);var dE=A._firstDayOfWeek(dC);return aE.subtract(dE,aE.WEEK,1);
},getToday:function(){var A=this;var dC=aA.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(dC);},_firstDayOfWeek:function(dD){var A=this;var dE=A.get(u);var dC=dE.get(c8);return aE.getFirstDayOfWeek(dD,dC);},_valueNavigationDateFormatter:function(dE){var dD=this;var dF=dD.get(u);var dC=dF.get(aM);var A=dD._firstDayOfWeek(dE);var dG=c1.DataType.Date.format(A,{format:"%B %d",locale:dC});var dI=aE.add(A,aE.DAY,dD.get(aa)-1);var dH=c1.DataType.Date.format(dI,{format:(aE.isMonthOverlapWeek(dE)?"%B %d":"%d")+", %Y",locale:dC});return[dG,h,dH].join(ac);}}});c1.SchedulerWeekView=aA;var j=J(x),p=J(x,"arrowstop-1-l"),dl=J(x,"arrowstop-1-r"),t=J(cE,bg,b),a7=J(cE,bg,b,aX),aG=J(cE,bg,b,ax),bM=J(cE,bg,a8),dt=J(cE,bg,cS,bD,dB),az=J(cE,bg,cS,bD,dB,aD),ck=J(cE,bg,cS,bD,dB,be),aC=J(cE,bg,cY,at),di=J(cE,bg,cY,de),d=J(cE,bg,cY,bg),cn=J(cE,bg,b6),c0=J(cE,bg,b2),cf=J(cE,bg,b2,a8),bt=J(cE,bg,ce),cU=J(cE,bg,ce,at),b7=J(cE,bg,ce,at,k),cQ=J(cE,bg,ce,at,k,ak),cj=J(cE,bg,ce,at,k,aX),dp=J(cE,bg,ce,at,k,a6),bQ=J(cE,bg,ce,at,k,ax),aO=J(cE,bg,ce,bv),c=J(cE,bg,ce,bv,bd),c3=J(cE,bg,ce,bv,cT),aq=J(cE,bg,ce,bv,bq),ai=J(cE,bg,ce,aX),aU=J(cE,bg,bG),cm=J(cE,bg,bG,aX),ba='<div class="'+bM+'">'+'<div class="'+cf+'"></div>'+"</div>",b5='<div class="'+dt+'">'+'<div class="'+az+'"></div>'+'<a href="javascript:;" class="'+ck+'">{label}</a>'+"</div>",cF='<td class="'+t+'">&nbsp;</td>',g='<th class="'+di+'"><div>&nbsp;</div></th>',ab='<table cellspacing="0" cellpadding="0" class="'+d+'">'+"<tbody>"+'<tr class="'+aC+'"></tr>'+"</tbody>"+"</table>",bB='<a href="javascript:;" class="'+cn+'">{label} {count}</a>',bI='<div class="'+c0+'" style="top: {top}%; height: {height}%;"></div>',bN='<table cellspacing="0" cellpadding="0" class="'+bt+'">'+"<tbody></tbody>"+"</table>",bk='<table cellspacing="0" cellpadding="0" class="'+aU+'">'+"<tbody>"+"<tr></tr>"+"</tbody>"+"</table>",V='<span class="'+[j,p].join(ac)+'"></span>',bA='<span class="'+[j,dl].join(ac)+'"></span>',bH='<td class="'+cU+'"><div></div></td>',df="<tr></tr>";var bm=c1.Component.create({NAME:cs,ATTRS:{bodyContent:{value:ct},displayDaysInterval:{value:42},displayRows:{value:4},fixedHeight:{value:true},name:{value:bg},headerDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%A",locale:dD.get(aM)});},validator:cN},navigationDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%b %Y",locale:dD.get(aM)});},validator:E},scrollable:{value:false},strings:{value:{close:"Close",showMore:"Show more"}},headerTableNode:{valueFn:function(){return c1.Node.create(ab);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},rowsContainerNode:{valueFn:function(){return c1.Node.create(ba);}},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{colHeaderDaysNode:T(cG+di,7),headerTableNode:cG+d,rowsContainerNode:cG+bM,tableGridNode:T(cG+aU,7)},EXTENDS:c1.SchedulerView,prototype:{evtDateStack:null,evtRenderedStack:null,rowDataTableStack:null,initializer:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};A[c5]=A.get(c5);A[dv]=A.get(dv);A[b1]=A.get(b1);A[G]=A.get(G);A[bl]=A.headerTableNode.one(cG+aC);A[a9]=c1.NodeList.create();A[cq]=A[b1].one(cG+cf);A[dm]=c1.NodeList.create();},bindUI:function(){var A=this;A[b1].delegate("click",c1.bind(A._onClickMore,A),cG+cn);},renderUI:function(){var A=this;var dC=A._getDisplayRowsCount();for(var dD=0;dD<dC;dD++){A[dm].push(A.buildGridRowNode(dD));}A._renderEventsOverlay();A[c5].appendTo(A[bl]);A[dm].appendTo(A[cq]);},buildEventsRow:function(dD,dI,dH){var dC=this;var dE=dC.get(cR);var A=dC._getDisplayRowDaysCount();var dG=0;var dF=c1.Node.create(df);dC.loopDates(dD,dI,function(dR,dN){if(dG>dN){return;}var dS=dC.getIntersectEvents(dR);var dP=dC._getRenderableEvent(dS,dD,dI,dR);var dL=c1.Node.create(bH);var dK=dL.one(af);if((dE<dS.length)&&(dH===(dE-1))){var dQ=dC.get(cP);var dM=c1.Node.create(dh.sub(bB,{count:(dS.length-(dE-1)),label:dQ[Q]}));dM.setData(cS,dS);dK.append(dM);}else{if(dP){var dJ=dC._getEvtSplitInfo(dP,dR,dD,dI);dL.attr(ae,dJ.colspan);dG+=(dJ.colspan-1);dC._syncEventNodeContainerUI(dP,dK,dJ);dC._syncEventNodeUI(dP,dK,dR);var dO=String(dR.getTime());dC.evtRenderedStack[dO].push(dP);}}dG++;dF.append(dL);});return dF;},buildEventsTable:function(A,dF){var dL=this;var dJ=dL.get(cR);var dI=aE.clearTime(dL._findCurrentIntervalStart());var dH=String(dI.getTime()).concat(A.getTime()).concat(dF.getTime());var dK=dL.rowDataTableStack[dH];if(!dK){dK=c1.Node.create(bN);var dE=dK.one(b9);var dD=dL.buildEventsTitleRow(dK,A,dF);dE.append(dD);for(var dG=0;dG<dJ;dG++){var dC=dL.buildEventsRow(A,dF,dG);dE.append(dC);}dL.rowDataTableStack[dH]=dK;}return dK;},buildEventsTitleRow:function(dD,dC,dF){var A=this;var dE=c1.Node.create(df);A.loopDates(dC,dF,function(dH,dG){var dI=c1.Node.create(bH);dI.addClass(b7).toggleClass(cj,(dG===0)).toggleClass(bQ,aE.isToday(dH)).toggleClass(dp,aE.isToday(aE.subtract(dH,aE.DAY,1))).toggleClass(cQ,aE.isToday(aE.subtract(dH,aE.WEEK,1)));dE.append(dI.setContent(dH.getDate()));});return dE;},buildGridRowNode:function(dG){var dD=this;var dE=dD._getDisplayRowsCount();var dC=100/dE;var A=dD._getTableGridNode(dG);var dF=c1.Node.create(dh.sub(bI,{height:dC,top:dC*dG}));dF.append(A.toggleClass(cm,(dG===0)));return dF;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtRenderedStack={};A.rowDataTableStack={};},getIntersectEvents:function(dC){var A=this;var dF=A.get(u);var dE=String(dC.getTime());if(!A.evtDateStack[dE]){var dD=dF.getIntersectEvents(dC);A.evtDateStack[dE]=dD.filter(A.get(cV));}return A.evtDateStack[dE];},getNextDate:function(){var A=this;var dD=A.get(u);var dE=dD.get(cw);var dC=A.get(bi);return aE.add(dE,aE.DAY,dC);},getPrevDate:function(){var A=this;var dD=A.get(u);var dE=dD.get(cw);var dC=A.get(bi);return aE.subtract(dE,aE.DAY,dC);},hideEventsOverlay:function(){var A=this;A[cp].set(aK,false);},loopDates:function(A,dE,dH,dI,dG){var dJ=this;var dC=aE.clone(A);var dD=dE.getTime();
var dF;for(dF=0;dC.getTime()<=dD;dF++){dH.apply(dJ,[dC,dF]);dC=aE.add(dC,(dI||aE.DAY),(dG||1));}},plotEvents:function(){var dC=this;var dF=dC._findCurrentIntervalStart();var A=aE.safeClearTime(dF);dC.flushViewCache();dC.hideEventsOverlay();dC.bodyNode.all(cG+bt).remove();var dD=dC.get(bi);var dE=Math.min(dD,a4);dC[dm].each(function(dJ,dH){var dG=aE.add(A,aE.DAY,dE*dH);var dK=aE.add(dG,aE.DAY,dE-1);var dI=dC.buildEventsTable(dG,dK);if(dH===0){dI.addClass(ai);}dJ.append(dI);});},syncDaysHeaderUI:function(){var dC=this;var dF=dC.get(u);var dG=dF.get(cw);var dE=dC.get(by);var A=dC.get(aM);var dD=dC._findFirstDayOfWeek(dG);dC.colHeaderDaysNode.all(af).each(function(dJ,dI){var dH=aE.add(dD,aE.DAY,dI);dJ.html(dE.call(dC,dH));});},syncGridUI:function(){var dL=this;var dF=dL.getToday();var dC=dL.get(u);dL[a9].removeClass(aG);var dE=dL._findCurrentIntervalStart();var dH=dL._findCurrentIntervalEnd();if(aE.between(dF,dE,dH)){var A=dC.get(c8);var dJ=dL._findFirstDayOfWeek(dF);var dG=aE.getWeekNumber(dF,A)-aE.getWeekNumber(dE,A);var dK=(dF.getDate()-dJ.getDate());var dD=dL._getCellIndex([dK,dG]);var dI=dL[a9].item(dD);if(dI){dI.addClass(aG);}}},syncStdContent:function(){var A=this;A.setStdModContent(cW.BODY,A[b1].getDOM());A.setStdModContent(cW.HEADER,A[dv].getDOM());},_findCurrentIntervalEnd:function(){var A=this;var dD=A.get(u);var dE=dD.get(cw);var dC=A.get(bi);return aE.add(dE,aE.DAY,dC);},_findCurrentIntervalStart:function(){var A=this;var dC=A.get(u);return dC.get(cw);},_findFirstDayOfWeek:function(dD){var A=this;var dE=A.get(u);var dC=dE.get(c8);return aE.getFirstDayOfWeek(dD,dC);},_getDisplayRowsCount:function(){var A=this;var dC=A.get(bi);return Math.ceil(dC/a4);},_getDisplayRowDaysCount:function(){var A=this;var dC=A.get(bi);return Math.min(dC,a4);},_getEvtLabel:function(dD){var dC=this;var dE=dD.get(aQ);var A=dD.get(c6);return[A.getHours(),cz,dE.getHours(),ac,dD.get(a5)].join(ct);},_getEvtSplitInfo:function(dG,dJ,A,dE){var dH=this;var dC=dG.getClearStartDate();var dF=dG.getClearEndDate();var dI=aE.getDayOffset(dE,dJ);var dD={colspan:Math.min(aE.getDayOffset(dF,dJ),dI)+1,left:aE.before(dC,A),right:aE.after(dF,dE)};return dD;},_getRenderableEvent:function(dK,A,dE,dL){var dJ=this;var dH=String(dL.getTime());if(!dJ.evtRenderedStack[dH]){dJ.evtRenderedStack[dH]=[];}for(var dD=0;dD<dK.length;dD++){var dI=dK[dD];var dC=dI.get(c6);var dG=aE.after(dL,dC)&&!aE.isDayOverlap(dL,A);var dF=!aE.isDayOverlap(dC,dL);var dM=c1.Array.indexOf(dJ.evtRenderedStack[dH],dI)>-1;if(!dM&&(dF||dG)){return dI;}}return null;},_getTableGridNode:function(dH){var dC=this;var dE=dC.get(bi);var A=dC[G].item(dH);var dG=A.one(dw);for(var dD=0;dD<Math.min(dE,a4);dD++){var dF=c1.Node.create(cF);dG.append(dF);if(dD==0){dF.addClass(a7);}dC[a9].push(dF);}return A;},_onClickMore:function(dD){var A=this;var dE=dD.target;var dC=dE.getData(cS);var dF=c1.NodeList.create();c1.Array.each(dC,function(dH){var dG=dH.get(dB).item(0).clone();dG.setData(aS,dH);dG.setStyles({height:"auto",left:0,position:"relative",top:0,width:"auto"});dF.push(dG);});A[cp].bodyNode.one(cG+az).setContent(dF);A[cp].setAttrs({visible:true,xy:dE.getXY()});},_renderEventsOverlay:function(){var dC=this;var A=dC.get(cP);dC[cp]=new c1.Overlay({align:{points:[a,a]},bodyContent:dh.sub(b5,{label:A[be]}),render:dC[b1],visible:false,width:250,zIndex:450});dC[cp].bodyNode.delegate("click",c1.bind(dC.hideEventsOverlay,dC),cG+ck);},_syncEventNodeContainerUI:function(dC,dE,dD){var A=this;dE.addClass(aO);if(dD.left){dE.addClass(c).prepend(V);}if(dD.right){dE.addClass(aq).append(bA);}},_syncEventNodeUI:function(dK,dC,dM){var dL=this;var dF=dL.get(u);var A=dF.get(c8);var dE=dK.get(dB);var dD=dK.get(c6);var dJ=aE.clearTime(dL._findCurrentIntervalStart());var dG=aE.getFirstDayOfWeek(new Date(Math.max(dD,dJ)),A);var dI=Math.floor(aE.getDayOffset(dM,dG)/a4);if(dE.size()<=dI){dK.addPaddingNode();}var dH=dE.item(dI);dH.setStyles({height:"auto",left:0,top:0,width:"auto"});dH.appendTo(dC);dK.syncNodeUI();},_uiSetDate:function(dC){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;var dC=A.get(bi);var dD=Math.min(dC,a4);return A._valueNodeList(dD,g);},_valueTableGridNode:function(){var A=this;var dC=A.get(bi);var dD=Math.min(dC,a4);return A._valueNodeList(dD,bk);},_valueNodeList:function(dE,dD){var A=this;var dC=[];while(dE--){dC.push(dD);}return c1.NodeList.create(dC.join(ct));}}});c1.SchedulerTableView=bm;var bs=J(dn,bg,ce,at,av);var aP=c1.Component.create({NAME:dn,ATTRS:{displayDaysInterval:{readOnly:true,value:42},name:{value:co},navigationDateFormatter:{value:function(dC){var A=this;var dD=A.get(u);return c1.DataType.Date.format(dC,{format:"%B %Y",locale:dD.get(aM)});},validator:E}},EXTENDS:c1.SchedulerTableView,prototype:{getAdjustedViewDate:function(dC){var A=this;return aE.findMonthStart(dC);},getNextDate:function(){var A=this;var dD=A.get(u);var dC=dD.get(cb);return aE.add(dC,aE.MONTH,1);},getPrevDate:function(){var A=this;var dD=A.get(u);var dC=dD.get(cb);return aE.subtract(dC,aE.MONTH,1);},plotEvents:function(){var A=this;c1.SchedulerMonthView.superclass.plotEvents.apply(A,arguments);var dC=A.get(u);var dG=dC.get(cw);var dF=aE.findMonthEnd(dG);var dE=aE.findMonthStart(dG);var dD=A._findCurrentIntervalStart();var dH=A[cq].all(cG+b7);dH.each(function(dK,dI){var dJ=aE.add(dD,aE.DAY,dI);if(aE.before(dJ,dE)||aE.after(dJ,dF)){dK.addClass(bs);}});},_findCurrentIntervalStart:function(){var A=this;var dC=A.get(u);var dD=dC.get(cw);return A._findFirstDayOfWeek(dD);},_findFirstDayOfWeek:function(dD){var A=this;var dE=A.get(u);var dC=dE.get(c8);return aE.getFirstDayOfWeek(dD,dC);}}});c1.SchedulerMonthView=aP;var z=J(cE,bg,B),K=J(cE,bg,bj),cC=J(cE,bg,b4,dB),b3='<div class="'+K+'"></div>',c4='<div class="'+cC+'"></div>';c1.SchedulerTableViewDD=function(){};c1.SchedulerTableViewDD.ATTRS={delegateConfig:{value:{},setter:function(dC){var A=this;return c1.merge({dragConfig:{offsetNode:false,useShim:false},bubbleTargets:A,container:A.get(bc),nodes:cG+a1,invalid:"input, select, button, a, textarea, "+cG+bP},dC||{});
},validator:dx}};c1.mix(c1.SchedulerTableViewDD.prototype,{initializer:function(){var A=this;A[bK]=c1.Node.create(c4);A.after(A.viewDDBindUI,A,"bindUI");A.after(A.viewDDRenderUI,A,"renderUI");A.after(A.viewDDSyncUI,A,"syncUI");},viewDDBindUI:function(){var A=this;var dC=A.get(u).get(dz);if(dC){dC.on({cancel:c1.bind(A.removeLasso,A),save:c1.bind(A.removeLasso,A)});}A[b1].on({mousedown:c1.bind(A._onMouseDownGrid,A),mousemove:c1.bind(A._onMouseMoveGrid,A),mouseup:c1.bind(A._onMouseUpGrid,A)});A.after("drag:align",A._afterDragAlign);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);},viewDDRenderUI:function(){var A=this;},viewDDSyncUI:function(){var A=this;A._setupDragDrop();},removeLasso:function(){var A=this;if(A[bj]){A[bj].remove();}},removeProxy:function(){var A=this;if(A[bK]){A[bK].remove();}},renderLasso:function(dI,dC){var dO=this;var dF=dI;var dH=dC;if(dI[1]>dC[1]){dF=dC;dH=dI;}var dP=dF[0],dK=dF[1],dD=dH[0],A=dH[1];dO.removeLasso();dO.lasso=c1.NodeList.create();for(var dE=dK;dE<=A;dE++){var dG=dO.gridCellHeight,dN=dO.gridCellWidth,dL=0,dJ=(dG*dE);if(dE===dK){if(dK===A){dL+=Math.min(dP,dD)*dN;dN*=Math.abs(dD-dP)+1;}else{dL+=dP*dN;dN*=a4-dP;}}else{if(dE===A){dN*=dD+1;}else{dN*=a4;}}var dM=c1.Node.create(b3);dO.lasso.push(dM);dO[b1].append(dM);dM.sizeTo(dN,dG);dM.setXY(dO._offsetXY([dL,dJ],1));}},_afterDragAlign:function(A){var dI=this;var dJ=A.target;var dF=dI.bodyNode.get(ao);var dG={bottom:A.pageY,left:A.pageX,right:A.pageX,top:A.pageY};if(!c1.DOM.inRegion(null,dF,true,dG)){return;}var dH=dI[L];var dC=[A.pageX,A.pageY];var dE=dI._findPosition(dI._offsetXY(dC,-1));if(dH&&dI._hasLassoChanged(dE)){dI.lassoLastPosition=dE;var dD=aE.add(dI._getPositionDate(dE),aE.MINUTES,dH.getMinutesDuration());dI.renderLasso(dE,dI._getDatePosition(dD));}},_findPosition:function(dE){var A=this;var dD=Math.floor(dE[0]/A.gridCellWidth);var dC=Math.floor(dE[1]/A.gridCellHeight);return[dD,dC];},_getCellIndex:function(dC){var A=this;return dC[1]*a4+dC[0];},_getDatePosition:function(dD){var dC=this;var dE=dC._findCurrentIntervalStart();var dF=aE.getDayOffset(dD,dE);var A=[];A[1]=Math.floor(dF/a4);A[0]=dF%a4;return A;},_getPositionDate:function(dD){var dC=this;var dF=dC._findCurrentIntervalStart();var A=aE.safeClearTime(dC._findFirstDayOfWeek(dF));var dE=aE.add(A,aE.DAY,dC._getCellIndex(dD));dE.setHours(0,0,0,0);return dE;},_hasLassoChanged:function(dC){var A=this;var dD=A.lassoLastPosition||A.lassoStartPosition;return dD&&((dC[0]!==dD[0])||(dC[1]!==dD[1]));},_offsetXY:function(dE,dD){var A=this;var dC=A[b1].getXY();return[dE[0]+dC[0]*dD,dE[1]+dC[1]*dD];},_onEventDragEnd:function(dC){var A=this;var dD=A[L];if(dD){dD.move(A._getPositionDate(A.lassoLastPosition));dD.set(aK,true);A[b1].removeClass(z).unselectable();dC.target.set(c9,A.originalDragNode);A.removeLasso();A.removeProxy();A.get(u).syncEventsUI();}A[L]=null;},_onEventDragStart:function(dF){var A=this;var dG=A[L]=A[aN][ay].get(dB).getData(aS);if(dG){A._syncCellDimensions();var dD=[dF.pageX,dF.pageY];var dE=A._findPosition(A._offsetXY(dD,-1));var dC=aE.add(A._getPositionDate(dE),aE.MINUTES,dG.getMinutesDuration());A.renderLasso(dE,A._getDatePosition(dC));dG.set(aK,false);A._syncProxyNodeUI(dG);A.lassoStartPosition=A.lassoLastPosition=dE;A[b1].addClass(z).unselectable();A.originalDragNode=dF.target.get(c9);dF.target.set(c9,A[bK]);}},_onMouseDownGrid:function(dF){var A=this;var dE=A.get(u);var dD=dE.get(dz);var dG=dF.target;if(dD&&dG.test([cG+t,cG+cU].join(bU))){A._recording=true;A._syncCellDimensions();var dC=A._offsetXY([dF.pageX,dF.pageY],-1);A.lassoStartPosition=A.lassoLastPosition=A._findPosition(dC);A.renderLasso(A.lassoStartPosition,A.lassoLastPosition);A[b1].unselectable();}},_onMouseMoveGrid:function(dE){var dC=this;var dF=dE.currentTarget;var dD=[dE.pageX,dE.pageY];var A=dC._findPosition(dC._offsetXY(dD,-1));if(dC._recording&&dC._hasLassoChanged(A)){dC.lassoLastPosition=A;dC.renderLasso(dC.lassoStartPosition,A);}},_onMouseUpGrid:function(dH){var dC=this;var dG=dC.get(u);var dE=dG.get(dz);if(dE&&dC._recording&&!dG.get(cv)){var dF=dC._getPositionDate(dC.lassoStartPosition);var dD=dC._getPositionDate(dC.lassoLastPosition);var A=new Date(Math.min(dF,dD));A.setHours(0,0,0);var dI=new Date(Math.max(dF,dD));dI.setHours(23,59,59);dE.set(U,true);dE.set(aQ,dI);dE.set(c6,A);dE.showOverlay([dH.pageX,dH.pageY]);dC._recording=false;}},_setupDragDrop:function(){var dC=this;if(!dC[aN]){dC[aN]=new c1.DD.Delegate(dC.get(H));}var A=dC[aN][ay];A.unplug(c1.Plugin.DDConstrained);A.unplug(c1.Plugin.DDNodeScroll);A.unplug(c1.Plugin.DDProxy);A.plug(c1.Plugin.DDConstrained,{bubbleTargets:dC,constrain:dC.bodyNode});A.plug(c1.Plugin.DDNodeScroll,{node:dC.bodyNode,scrollDelay:150});A.plug(c1.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false});},_syncCellDimensions:function(){var A=this;var dD=A.get(bi);var dC=Math.ceil(dD/a4);var dE=Math.min(dD,a4);A.gridCellHeight=A[b1].get(cX)/dC;A.gridCellWidth=A[b1].get(cZ)/dE;},_syncProxyNodeUI:function(dC){var A=this;var dD=dC.get(dB).item(0);A[bK].setStyles({backgroundColor:dD.getStyle("backgroundColor"),display:"block",width:"200px"});A[bK].appendTo(A[b1]);A[bK].setContent(dC.get(a5));}});c1.Base.mix(c1.SchedulerTableView,[c1.SchedulerTableViewDD]);},"@VERSION@",{skinnable:true,requires:["aui-scheduler-event","aui-datatype","aui-button-item","dd-drag","dd-delegate","dd-drop","dd-constrain"]});