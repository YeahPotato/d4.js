webpackJsonp([13],{681:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(713),o=l.n(n);for(var i in n)"default"!==i&&function(t){l.d(e,t,function(){return n[t]})}(i);var c=l(749),r=l(543),a=r(o.a,c.a,!1,null,null,null);e.default=a.exports},713:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"horizontalBarChart",computed:{options:function(){return{mode:"javascript",tabSize:2,lineNumbers:!0,lineWrapping:!0,viewportMargin:1/0,showCursorWhenSelecting:!0,readOnly:!0,theme:"neo",extraKeys:{"Ctrl-Space":"autocomplete"}}}},data:function(){var t=this;return{curDirection:"horizontal",code:'\n\t\t\tchart: {\n\t\t\t\ttitle: "水平柱状图",\n\t\t\t\tdblclick: function(event) {\n\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\tif (name) {\n\t\t\t\t\t\tthis.setChartTitle(name);\n\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tcustom: ["num", "go_level2", "go_level1"],\n\t\t\t\tel: "#chart-bar",\n\t\t\t\ttype: "bar",\n\t\t\t\tdirection:"horizontal", // vertical default\n\t\t\t\tdata: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "antioxidant activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 26\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "behavior",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 223\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "binding",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 6031\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "biological adhesion",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 348\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "biological phase",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 226\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "biological regulation",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 3834\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "catalytic activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 2709\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 6486\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell aggregation",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 9\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell junction",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 359\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell killing",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 34\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 6485\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cell proliferation",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 683\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cellular component organization or biogenesis",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 1971\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "cellular process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 5976\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "detoxification",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 2\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "developmental process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 2259\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "extracellular region",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 913\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "extracellular region part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 845\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "growth",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 326\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "hijacked molecular function",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 10\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "immune system process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 882\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "virion part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 7\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"go_level2": "nitrogen utilization",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 3,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "nucleoid",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 4,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "organelle",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 5145,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "organelle part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 3144,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "other organism",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 17,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "other organism part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 17,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "pigmentation",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 24,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "positive regulation of biological process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 1375,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "presynaptic process involved in chemical synaptic transmission",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 40,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "protein tag",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 1,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "regulation of biological process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 3486,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "reproduction",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 479,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "reproductive process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 478,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "response to stimulus",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 3079,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "rhythmic process",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 108,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "signal transducer activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 701,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "signaling",\n\t\t\t\t\t\t\t"go_level1": "biological_process",\n\t\t\t\t\t\t\t"num": 2368,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "structural molecule activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 304,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "supramolecular complex",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 232,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "synapse",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 208,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "synapse part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 162,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "transcription regulator activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 355,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "translation regulator activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 13,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "transporter activity",\n\t\t\t\t\t\t\t"go_level1": "molecular_function",\n\t\t\t\t\t\t\t"num": 587,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "virion",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 7,\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t"go_level2": "virion part",\n\t\t\t\t\t\t\t"go_level1": "cellular_component",\n\t\t\t\t\t\t\t"num": 7,\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t},\n\t\t\taxis: {\n\t\t\t\tx: {\n\t\t\t\t\ttitle: "x标题",\n\t\t\t\t\tdblclick: function(event) {\n\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\t\tif (name) {\n\t\t\t\t\t\t\tthis.setXTitle(name);\n\t\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\trotate:60\n\t\t\t\t},\n\t\t\t\ty: {\n\t\t\t\t\ttitle: "y标题",\n\t\t\t\t\tdblclick: function(event) {\n\t\t\t\t\tvar name = prompt("请输入需要修改的标题", "");\n\t\t\t\t\t\tif (name) {\n\t\t\t\t\t\t\tthis.setYTitle(name);\n\t\t\t\t\t\t\tthis.updateTitle();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\tlegend: {\n\t\t\t\tshow: true,\n\t\t\t\tposition: "right",\n\t\t\t\tdblclick:function(el){\n\t\t\t\t\tconsole.log(el)\n\t\t\t\t}\n\t\t\t},\n\t\t\ttooltip: function(d) {\n\t\t\t\treturn "<span>Number："+d.num+"</span><br><span>Level2："+d.go_level2+"</span>";\n\t\t\t}\n\t}',chart:null,i:0,config:{chart:{title:"水平柱状图",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setChartTitle(e),this.updateTitle())},onselect:function(t){console.log(t)},width:600,enableChartSelect:!0,padding:.4,selectedModule:"multiple",custom:["num","go_level2","go_level1"],el:"#chart-bar",type:"bar",direction:"horizontal",data:[{go_level2:"antioxidant activity",go_level1:"molecular_function",num:26},{go_level2:"behavior",go_level1:"biological_process",num:223},{go_level2:"binding",go_level1:"molecular_function",num:6031},{go_level2:"biological adhesion",go_level1:"biological_process",num:348},{go_level2:"biological phase",go_level1:"biological_process",num:226},{go_level2:"biological regulation",go_level1:"biological_process",num:3834},{go_level2:"catalytic activity",go_level1:"molecular_function",num:2709},{go_level2:"cell",go_level1:"cellular_component",num:6486},{go_level2:"cell aggregation",go_level1:"biological_process",num:9},{go_level2:"cell junction",go_level1:"cellular_component",num:359},{go_level2:"cell killing",go_level1:"biological_process",num:34},{go_level2:"cell part",go_level1:"cellular_component",num:6485},{go_level2:"cell proliferation",go_level1:"biological_process",num:683},{go_level2:"cellular component organization or biogenesis",go_level1:"biological_process",num:1971},{go_level2:"cellular process",go_level1:"biological_process",num:5976},{go_level2:"detoxification",go_level1:"biological_process",num:2},{go_level2:"developmental process",go_level1:"biological_process",num:2259},{go_level2:"extracellular region",go_level1:"cellular_component",num:913},{go_level2:"extracellular region part",go_level1:"cellular_component",num:845},{go_level2:"growth",go_level1:"biological_process",num:326},{go_level2:"hijacked molecular function",go_level1:"molecular_function",num:10},{go_level2:"immune system process",go_level1:"biological_process",num:882},{go_level2:"virion part",go_level1:"cellular_component",num:7},{go_level2:"nitrogen utilization",go_level1:"biological_process",num:3},{go_level2:"nucleoid",go_level1:"cellular_component",num:4},{go_level2:"organelle",go_level1:"cellular_component",num:5145},{go_level2:"organelle part",go_level1:"cellular_component",num:3144},{go_level2:"other organism",go_level1:"cellular_component",num:17},{go_level2:"other organism part",go_level1:"cellular_component",num:17},{go_level2:"pigmentation",go_level1:"biological_process",num:24},{go_level2:"positive regulation of biological process",go_level1:"biological_process",num:1375},{go_level2:"presynaptic process involved in chemical synaptic transmission",go_level1:"biological_process",num:40},{go_level2:"protein tag",go_level1:"molecular_function",num:1},{go_level2:"regulation of biological process",go_level1:"biological_process",num:3486},{go_level2:"reproduction",go_level1:"biological_process",num:479},{go_level2:"reproductive process",go_level1:"biological_process",num:478},{go_level2:"response to stimulus",go_level1:"biological_process",num:3079},{go_level2:"rhythmic process",go_level1:"biological_process",num:108},{go_level2:"signal transducer activity",go_level1:"molecular_function",num:701},{go_level2:"signaling",go_level1:"biological_process",num:2368},{go_level2:"structural molecule activity",go_level1:"molecular_function",num:304},{go_level2:"supramolecular complex",go_level1:"cellular_component",num:232},{go_level2:"synapse",go_level1:"cellular_component",num:208},{go_level2:"synapse part",go_level1:"cellular_component",num:162},{go_level2:"transcription regulator activity",go_level1:"molecular_function",num:355},{go_level2:"translation regulator activity",go_level1:"molecular_function",num:13},{go_level2:"transporter activity",go_level1:"molecular_function",num:587},{go_level2:"virion",go_level1:"cellular_component",num:7},{go_level2:"virion part",go_level1:"cellular_component",num:7}]},axis:{x:{title:"x标题",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setXTitle(e),this.updateTitle())},ticks:6,position:"bottom",rotate:60},y:{title:"y标题",dblclick:function(t){var e=prompt("请输入需要修改的标题","");e&&(this.setYTitle(e),this.updateTitle())},position:"left"}},legend:{show:!0,title:"图例标题",position:"right",dblclick:function(e,l){t.$refs.inputColor.click(),t.i=l}},tooltip:function(t){return"<span>Number："+t.num+"</span><br><span>Level2："+t.go_level2+"</span>"}}}},mounted:function(){this.chart=this.d4.init(this.config),console.log(this.chart)},methods:{redraw:function(){this.chart.redraw()},deepRedraw:function(){this.chart.redraw(!0)},single:function(){this.selectedModule="single",this.chart.setChartSelectModule(this.selectedModule)},multiple:function(){this.selectedModule="multiple",this.chart.setChartSelectModule(this.selectedModule)},colorChange:function(t){this.chart.setColor(t.target.value,this.i),this.chart.redraw()},changeDirection:function(){var t=this.chart.getOptions();"horizontal"===this.curDirection?(this.curDirection="vertical",t.chart.title="vertical-bar-chart",t.chart.direction=this.curDirection,t.chart.custom=["go_level2","num","go_level1"]):(this.curDirection="horizontal",t.chart.title="horizontal-bar-chart",t.chart.direction=this.curDirection,t.chart.custom=["num","go_level2","go_level1"]),this.chart.setOptions(t),this.chart.redraw()},changeXAxis:function(t){var e=this.chart.getOptions();e.axis.x.position=t,this.chart.setOptions(e),this.chart.redraw()},changeYAxis:function(t){var e=this.chart.getOptions();e.axis.y.position=t,this.chart.setOptions(e),this.chart.redraw()}}}},749:function(t,e,l){"use strict";var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"horizontal-bar-chart"}},[l("h3",[t._v("水平柱状图")]),t._v(" "),l("p",{staticClass:"text"},[t._v("使用水平的柱子显示类别之间的数值比较。其中一个轴表示需要对比的分类维度，另一个轴代表相应的数值。")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:t.redraw}},[t._v("重画")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:t.deepRedraw}},[t._v("deepRedraw")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:t.changeDirection}},[t._v("切换方向")]),t._v("\n\t\t current:"+t._s(t.curDirection)+"\n\t\t"),l("el-button",{attrs:{size:"small"},on:{click:t.single}},[t._v("单选")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:t.multiple}},[t._v("多选")]),t._v("\n\n\t\tx:\n \t\t"),l("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeXAxis("bottom")}}},[t._v("bottom")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeXAxis("top")}}},[t._v("top")]),t._v("\n\t\t  y:\n \t\t"),l("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeYAxis("left")}}},[t._v("left")]),t._v(" "),l("el-button",{attrs:{size:"small"},on:{click:function(e){t.changeYAxis("right")}}},[t._v("right")]),t._v(" "),l("input",{ref:"inputColor",attrs:{type:"color"},on:{change:t.colorChange}}),t._v(" "),l("div",{staticClass:"chart-content",staticStyle:{height:"800px"},attrs:{id:"chart-bar"}}),t._v(" "),l("codemirror",{ref:"code",attrs:{options:t.options},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)},o=[],i={render:n,staticRenderFns:o};e.a=i}});
//# sourceMappingURL=13.js.map