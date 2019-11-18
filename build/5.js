webpackJsonp([5],{676:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(708),a=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);var o=n(744),s=n(543),l=s(a.a,o.a,!1,null,null,null);e.default=l.exports},708:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"scatterChart",computed:{options:function(){return{mode:"javascript",tabSize:2,lineNumbers:!0,lineWrapping:!0,viewportMargin:1/0,showCursorWhenSelecting:!0,readOnly:!0,theme:"neo",extraKeys:{"Ctrl-Space":"autocomplete"}}}},data:function(){var t=this;return{curDirection:"vertical",code:'\n\t\t{\n\t\t\tchart: {\n\t\t\t\ttitle: "散点图",\n\t\t\t\tdblclick: function(event) {\n\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\tif (name) {\n\t\t\t\t\t\tthis.setChartTitle(name);\n\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tel: "#chart-bar",\n\t\t\t\ttype: "scatter",\n\t\t\t\tradius:3,  // custom radius\n\t\t\t\thoverRadius:6,  // custom hover radius\n\t\t\t\tcustom: ["height", "weight","gender"], // x y category\n\t\t\t\tdata: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"gender": "female",\n\t\t\t\t\t\t\t"height": 161.2,\n\t\t\t\t\t\t\t"weight": 51.6\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"gender": "female",\n\t\t\t\t\t\t\t"height": 167.5,\n\t\t\t\t\t\t\t"weight": 59\n\t\t\t\t\t\t},\n\t\t\t\t\t\t......\n\t\t\t\t\t\t......\n\t\t\t\t\t\t......\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"gender": "male",\n\t\t\t\t\t\t\t"height": 180.3,\n\t\t\t\t\t\t\t"weight": 83.2\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t},\n\t\t\taxis: {\n\t\t\t\tx: {\n\t\t\t\t\ttitle: "Height(CM)",\n\t\t\t\t\tdblclick: function(event) {\n\t\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\t\tif (name) {\n\t\t\t\t\t\t\tthis.setXTitle(name);\n\t\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\ty: {\n\t\t\t\t\ttitle: "Weight(KG)",\n\t\t\t\t\tdblclick: function(event) {\n\t\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\t\tif (name) {\n\t\t\t\t\t\t\tthis.setYTitle(name);\n\t\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tlegend: {\n\t\t\t\tshow: true,\n\t\t\t\tposition: "right",\n\t\t\t\tdblclick: function(el) {\n\t\t\t\t\tconsole.log(el);\n\t\t\t\t},\n\t\t\t\t// custom category\n\t\t\t\t// if no data use key of chart\'s data to computed category\n\t\t\t\tdata:[\'female\',\'male\']\n\t\t\t},\n\t\t\ttooltip: function(d) {\n\t\t\t\treturn (\n\t\t\t\t\t"<span>身高：" +\n\t\t\t\t\td.height +\n\t\t\t\t\t"</span><br><span>体重：" +\n\t\t\t\t\td.weight +\n\t\t\t\t\t"</span>"\n\t\t\t\t);\n\t\t\t}\n\t}',chart:null,i:0,config:{chart:{title:"散点图",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setChartTitle(e),this.updateTitle())},onselect:function(t){console.log(t)},el:"#chart-bar",type:"scatter",radius:3,hoverRadius:6,custom:["pca_comp1","pca_comp2","sample_name"],data:[{sample_name:"KO_elo",pca_comp1:-.414345827931845,pca_comp2:.234081607476174},{sample_name:"KO_pac",pca_comp1:-.418018469635253,pca_comp2:.0008428518728297},{sample_name:"KO_rou",pca_comp1:-.408099550781589,pca_comp2:.419796881420451},{sample_name:"WT_elo",pca_comp1:-.407906990171309,pca_comp2:.374828429512092},{sample_name:"WT_pac",pca_comp1:-.38973256808292,pca_comp2:-.710069138131184},{sample_name:"WT_rou",pca_comp1:-.410795890091437,pca_comp2:-.352535298225427}]},axis:{x:{title:"Height(CM)",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setXTitle(e),this.updateTitle())},rotate:45},y:{title:"Weight(KG)",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setYTitle(e),this.updateTitle())},rotate:60}},legend:{show:!0,position:"right",dblclick:function(e,n){t.$refs.inputColor.click(),t.i=n},data:["female","male"]},tooltip:function(t){return console.log(t),"<span>身高："+t.height+"</span><br><span>体重："+t.weight+"</span>"}}}},mounted:function(){this.chart=this.d4.init(this.config),console.log(this.chart)},methods:{redraw:function(){this.chart.redraw()},deepRedraw:function(){this.chart.redraw(!0)},single:function(){this.selectedModule="single",this.chart.setChartSelectModule(this.selectedModule)},multiple:function(){this.selectedModule="multiple",this.chart.setChartSelectModule(this.selectedModule)},colorChange:function(t){console.log(t.target.value,this.i),this.chart.setColor(t.target.value,this.i),this.chart.redraw()},changeXAxis:function(t){var e=this.chart.getOptions();e.axis.x.position=t,this.chart.setOptions(e),this.chart.redraw()},changeYAxis:function(t){var e=this.chart.getOptions();e.axis.y.position=t,this.chart.setOptions(e),this.chart.redraw()}}}},744:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"scatter-chart"}},[n("h3",[t._v("散点图")]),t._v(" "),n("p",{staticClass:"text"},[t._v("它将所有的数据以点的形式展现在笛卡尔坐标系上，以显示变量之间的相互影响程度，点的位置由变量的数值决定。")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.redraw}},[t._v("重画")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.deepRedraw}},[t._v("deepRedraw")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.single}},[t._v("单选")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:t.multiple}},[t._v("多选")]),t._v("\n\n\t\tx:\n \t\t"),n("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeXAxis("bottom")}}},[t._v("bottom")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeXAxis("top")}}},[t._v("top")]),t._v("\n\t\t  y:\n \t\t"),n("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeYAxis("left")}}},[t._v("left")]),t._v(" "),n("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeYAxis("right")}}},[t._v("right")]),t._v(" "),n("input",{ref:"inputColor",attrs:{type:"color"},on:{change:t.colorChange}}),t._v(" "),n("div",{staticClass:"chart-content",attrs:{id:"chart-bar"}}),t._v(" "),n("codemirror",{ref:"code",attrs:{options:t.options},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)},a=[],c={render:i,staticRenderFns:a};e.a=c}});
//# sourceMappingURL=5.js.map