(this["webpackJsonpreact-table"]=this["webpackJsonpreact-table"]||[]).push([[0],{12:function(e,t,o){},13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),l=o(6),a=o.n(l),c=(o(12),o(1)),i=o(2),s=o(4),u=o(3),h=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(c.a)(this,o),(n=t.call(this,e)).getStyle=function(e){return{borderStyle:"solid",borderColor:"black",backgroundColor:n.state.color,display:"inline-block",height:"50px",width:"125px"}},n.handleClick=function(){n.setState({color:n.props.color})},n.state={defColor:n.props.defColor},n}return Object(i.a)(o,[{key:"render",value:function(){return console.log("In tableCell the color is:"+this.props.color),r.a.createElement("td",{style:this.getStyle(this.state.defColor),onClick:this.handleClick})}}]),o}(n.Component),d=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){return Object(c.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){return r.a.createElement("tr",null,Array(this.props.length).fill(r.a.createElement(h,{color:this.props.color,defColor:this.props.defColor})))}}]),o}(n.Component),p=function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){return Object(c.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){var e=new Array(this.props.rows);return r.a.createElement("table",null,r.a.createElement("tbody",null,e.fill(r.a.createElement("div",null,r.a.createElement(d,{length:this.props.cols,color:this.props.color,defColor:this.props.defColor})))))}}]),o}(n.Component),f=(o(13),function(e){Object(s.a)(o,e);var t=Object(u.a)(o);function o(){var e;return Object(c.a)(this,o),(e=t.call(this)).handleAddRow=function(){e.setState({rows:e.state.rows+1})},e.handleAddColumn=function(){e.setState({cols:e.state.cols+1})},e.handleColorChange=function(t){e.setState({selectedColor:t.target.value})},e.state={rows:4,cols:3,currColor:"white",selectedColor:""},e}return Object(i.a)(o,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{onChange:this.handleColorChange},r.a.createElement("option",{value:"white"},"White"),r.a.createElement("option",{value:"black"},"Black"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"blue"},"Blue"),r.a.createElement("option",{value:"red"},"Red")),r.a.createElement("button",{onClick:this.handleAddRow},"Add Row"),r.a.createElement("button",{onClick:this.handleAddColumn},"Add Column"),r.a.createElement(p,{rows:this.state.rows,cols:this.state.cols,defColor:this.state.currColor,color:this.state.selectedColor}))}}]),o}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,o){e.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.872f8599.chunk.js.map