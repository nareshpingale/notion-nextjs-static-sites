"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3880],{39185:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(71180),i=n(85811),l=n(55247);function a(e){var t,n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:l.Z(e.nodes(),function(t){var n=e.node(t),i=e.parent(t),l={v:t};return r.Z(n)||(l.value=n),r.Z(i)||(l.parent=i),l}),edges:l.Z(e.edges(),function(t){var n=e.edge(t),i={v:t.v,w:t.w};return r.Z(t.name)||(i.name=t.name),r.Z(n)||(i.value=n),i})};return r.Z(e.graph())||(n.value=(t=e.graph(),(0,i.Z)(t,4))),n}n(65377)},83880:function(e,t,n){n.d(t,{r:function(){return O}});var r=n(87892),i=n(39185),l=n(73198),a=n(71421),d=n(42521),o=n(3694),s=n(27509);let h={},c={},g={},f=()=>{c={},g={},h={}},u=(e,t)=>(a.l.trace("In isDecendant",t," ",e," = ",c[t].includes(e)),!!c[t].includes(e)),w=(e,t)=>(a.l.info("Decendants of ",t," is ",c[t]),a.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(c[t]?c[t].includes(e.v)||u(e.v,t)||u(e.w,t)||c[t].includes(e.w):(a.l.debug("Tilt, ",t,",not in decendants"),!1))),p=(e,t,n,r)=>{a.l.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let i=t.children(e)||[];e!==r&&i.push(e),a.l.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach(i=>{if(t.children(i).length>0)p(i,t,n,r);else{let l=t.node(i);a.l.info("cp ",i," to ",r," with parent ",e),n.setNode(i,l),r!==t.parent(i)&&(a.l.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(a.l.debug("Setting parent",i,e),n.setParent(i,e)):(a.l.info("In copy ",e,"root",r,"data",t.node(e),r),a.l.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));let d=t.edges(i);a.l.debug("Copying Edges",d),d.forEach(i=>{a.l.info("Edge",i);let l=t.edge(i.v,i.w,i.name);a.l.info("Edge data",l,r);try{w(i,r)?(a.l.info("Copying as ",i.v,i.w,l,i.name),n.setEdge(i.v,i.w,l,i.name),a.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):a.l.info("Skipping copy of edge ",i.v,"-->",i.w," rootId: ",r," clusterId:",e)}catch(e){a.l.error(e)}})}a.l.debug("Removing node",i),t.removeNode(i)})},v=(e,t)=>{let n=t.children(e),r=[...n];for(let i of n)g[i]=e,r=[...r,...v(i,t)];return r},y=(e,t)=>{a.l.trace("Searching",e);let n=t.children(e);if(a.l.trace("Searching children of id ",e,n),n.length<1)return a.l.trace("This is a valid node",e),e;for(let r of n){let n=y(r,t);if(n)return a.l.trace("Found replacement for",e," => ",n),n}},x=e=>h[e]&&h[e].externalConnections&&h[e]?h[e].id:e,m=(e,t)=>{if(!e||t>10){a.l.debug("Opting out, no graph ");return}a.l.debug("Opting in, graph "),e.nodes().forEach(function(t){let n=e.children(t);n.length>0&&(a.l.warn("Cluster identified",t," Replacement id in edges: ",y(t,e)),c[t]=v(t,e),h[t]={id:y(t,e),clusterData:e.node(t)})}),e.nodes().forEach(function(t){let n=e.children(t),r=e.edges();n.length>0?(a.l.debug("Cluster identified",t,c),r.forEach(e=>{if(e.v!==t&&e.w!==t){let n=u(e.v,t),r=u(e.w,t);n^r&&(a.l.warn("Edge: ",e," leaves cluster ",t),a.l.warn("Decendants of XXX ",t,": ",c[t]),h[t].externalConnections=!0)}})):a.l.debug("Not a cluster ",t,c)}),e.edges().forEach(function(t){let n=e.edge(t);a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),a.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(a.l.warn("Fix XXX",h,"ids:",t.v,t.w,"Translating: ",h[t.v]," --- ",h[t.w]),h[t.v]&&h[t.w]&&h[t.v]===h[t.w]){a.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name);let l=t.w+"---"+t.v;e.setNode(l,{domId:l,id:l,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});let d=structuredClone(n),o=structuredClone(n);d.label="",d.arrowTypeEnd="none",o.label="",d.fromCluster=t.v,o.toCluster=t.v,e.setEdge(r,l,d,t.name+"-cyclic-special"),e.setEdge(l,i,o,t.name+"-cyclic-special")}else(h[t.v]||h[t.w])&&(a.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=x(t.v),i=x(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v&&(n.fromCluster=t.v),i!==t.w&&(n.toCluster=t.w),a.l.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name))}),a.l.warn("Adjusted Graph",i.c(e)),b(e,0),a.l.trace(h)},b=(e,t)=>{if(a.l.warn("extractor - ",t,i.c(e),e.children("D")),t>10){a.l.error("Bailing out");return}let n=e.nodes(),r=!1;for(let t of n){let n=e.children(t);r=r||n.length>0}if(!r){a.l.debug("Done, no node has children",e.nodes());return}for(let r of(a.l.debug("Nodes = ",n,t),n))if(a.l.debug("Extracting node",r,h,h[r]&&!h[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),h[r]){if(!h[r].externalConnections&&e.children(r)&&e.children(r).length>0){a.l.warn("Cluster without external connections, without a parent and with children",r,t);let n=e.graph(),l="TB"===n.rankdir?"LR":"TB";h[r]&&h[r].clusterData&&h[r].clusterData.dir&&(l=h[r].clusterData.dir,a.l.warn("Fixing dir",h[r].clusterData.dir,l));let o=new d.k({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});a.l.warn("Old graph before copy",i.c(e)),p(r,e,o,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:h[r].clusterData,labelText:h[r].labelText,graph:o}),a.l.warn("New graph after copy node: (",r,")",i.c(o)),a.l.debug("Old graph after copy",i.c(e))}else a.l.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!h[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),a.l.debug(h)}else a.l.debug("Not a cluster",r,t);for(let r of(n=e.nodes(),a.l.warn("New list of nodes",n),n)){let n=e.node(r);a.l.warn(" Now next level",r,n),n.clusterNode&&b(n.graph,t+1)}},N=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach(t=>{let r=e.children(t),i=N(e,r);n=[...n,...i]}),n},E=e=>N(e,e.children()),X={rect:(e,t)=>{a.l.info("Creating subgraph rect for ",t.id,t);let n=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=n.insert("rect",":first-child"),i=(0,a.m)((0,a.c)().flowchart.htmlLabels),d=n.insert("g").attr("class","cluster-label"),h="markdown"===t.labelType?(0,o.a)(d,t.labelText,{style:t.labelStyle,useHtmlLabels:i}):d.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),c=h.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let e=h.children[0],t=(0,s.Ys)(h);c=e.getBoundingClientRect(),t.attr("width",c.width),t.attr("height",c.height)}let g=0*t.padding,f=t.width<=c.width+g?c.width+g:t.width;t.width<=c.width+g?t.diff=(c.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,a.l.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-f/2).attr("y",t.y-t.height/2-g/2).attr("width",f).attr("height",t.height+g),i?d.attr("transform","translate("+(t.x-c.width/2)+", "+(t.y-t.height/2)+")"):d.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");let u=r.node().getBBox();return t.width=u.width,t.height=u.height,t.intersect=function(e){return(0,l.i)(t,e)},n},roundedWithTitle:(e,t)=>{let n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=n.insert("g").attr("class","cluster-label"),d=n.append("rect"),o=i.node().appendChild((0,l.c)(t.labelText,t.labelStyle,void 0,!0)),h=o.getBBox();if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let e=o.children[0],t=(0,s.Ys)(o);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}h=o.getBBox();let c=0*t.padding,g=c/2,f=t.width<=h.width+t.padding?h.width+t.padding:t.width;t.width<=h.width+t.padding?t.diff=(h.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+c).attr("height",t.height+c),d.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+h.height-1).attr("width",f+c).attr("height",t.height+c-h.height-3),i.attr("transform","translate("+(t.x-h.width/2)+", "+(t.y-t.height/2-t.padding/3+((0,a.m)((0,a.c)().flowchart.htmlLabels)?5:3))+")");let u=r.node().getBBox();return t.height=u.height,t.intersect=function(e){return(0,l.i)(t,e)},n},noteGroup:(e,t)=>{let n=e.insert("g").attr("class","note-cluster").attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding,a=i/2;r.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");let d=r.node().getBBox();return t.width=d.width,t.height=d.height,t.intersect=function(e){return(0,l.i)(t,e)},n},divider:(e,t)=>{let n=e.insert("g").attr("class",t.classes).attr("id",t.id),r=n.insert("rect",":first-child"),i=0*t.padding;r.attr("class","divider").attr("x",t.x-t.width/2-i/2).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);let a=r.node().getBBox();return t.width=a.width,t.height=a.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,l.i)(t,e)},n}},C={},S=(e,t)=>{a.l.trace("Inserting cluster");let n=t.shape||"rect";C[t.id]=X[n](e,t)},D=()=>{C={}},B=async(e,t,n,d,o)=>{a.l.info("Graph in recursive render: XXX",i.c(t),o);let s=t.graph().rankdir;a.l.trace("Dir in recursive render - dir:",s);let c=e.insert("g").attr("class","root");t.nodes()?a.l.info("Recursive render XXX",t.nodes()):a.l.info("No nodes found for",t),t.edges().length>0&&a.l.trace("Recursive edges",t.edge(t.edges()[0]));let g=c.insert("g").attr("class","clusters"),f=c.insert("g").attr("class","edgePaths"),u=c.insert("g").attr("class","edgeLabels"),w=c.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let r=t.node(e);if(void 0!==o){let n=JSON.parse(JSON.stringify(o.clusterData));a.l.info("Setting data for cluster XXX (",e,") ",n,o),t.setNode(o.id,n),t.parent(e)||(a.l.trace("Setting parent",e,o.id),t.setParent(e,o.id,n))}if(a.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r&&r.clusterNode){a.l.info("Cluster identified",e,r.width,t.node(e));let i=await B(w,r.graph,n,d,t.node(e)),o=i.elem;(0,l.u)(r,o),r.diff=i.diff||0,a.l.info("Node bounds (abc123)",e,r,r.width,r.x,r.y),(0,l.s)(o,r),a.l.warn("Recursive render complete ",o,r)}else t.children(e).length>0?(a.l.info("Cluster - the non recursive path XXX",e,r.id,r,t),a.l.info(y(r.id,t)),h[r.id]={id:y(r.id,t),node:r}):(a.l.info("Node - the non recursive path",e,r.id,r),await (0,l.e)(w,t.node(e),s))})),t.edges().forEach(function(e){let n=t.edge(e.v,e.w,e.name);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),a.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),a.l.info("Fix",h,"ids:",e.v,e.w,"Translateing: ",h[e.v],h[e.w]),(0,l.f)(u,n)}),t.edges().forEach(function(e){a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))}),a.l.info("#############################################"),a.l.info("###                Layout                 ###"),a.l.info("#############################################"),a.l.info(t),(0,r.bK)(t),a.l.info("Graph after layout:",i.c(t));let p=0;return E(t).forEach(function(e){let n=t.node(e);a.l.info("Position "+e+": "+JSON.stringify(t.node(e))),a.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(0,l.p)(n):t.children(e).length>0?(S(g,n),h[n.id].node=n):(0,l.p)(n)}),t.edges().forEach(function(e){let r=t.edge(e);a.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r);let i=(0,l.g)(f,e,r,h,n,t,d);(0,l.h)(r,i)}),t.nodes().forEach(function(e){let n=t.node(e);a.l.info(e,n.type,n.diff),"group"===n.type&&(p=n.diff)}),{elem:c,diff:p}},O=async(e,t,n,r,d)=>{(0,l.a)(e,n,r,d),(0,l.b)(),(0,l.d)(),D(),f(),a.l.warn("Graph at first:",JSON.stringify(i.c(t))),m(t),a.l.warn("Graph after:",JSON.stringify(i.c(t))),await B(e,t,r,d)}}}]);