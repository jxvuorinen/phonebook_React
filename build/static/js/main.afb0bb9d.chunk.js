(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),u=t(13),c=t.n(u),r=t(14),l=t(3),i=function(e){var n=e.text,t=e.onChange;return console.log("Filter-komponentti kutsuttu!"),o.a.createElement("div",null,n," ",o.a.createElement("input",{onChange:t}))},m=function(e){var n=e.onSubmit;return console.log("PersonForm kutsuttu!"),o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"name: ",o.a.createElement("input",{id:"name"})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{id:"number"})),o.a.createElement("button",{type:"submit"},"add"))},s=function(e){var n=e.name,t=e.number,a=e.handleDelete;return console.log("Persons propsit: ",n,t,a),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,n," ",t," ",o.a.createElement("button",{type:"button",onClick:a},"Delete")))},d=t(2),f=t.n(d),p="/api/persons",b=function(){return f.a.get(p).then((function(e){return e.data}))},h=function(e){return f.a.post(p,e).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(p,"/").concat(e))},v=function(e,n){return f.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message;return console.log("Notificationin props: ",n.text,n.cName),null===n.text||null===n.cName?null:o.a.createElement("div",{className:n.cName},n.text)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),f=d[0],p=d[1],w=Object(a.useState)({text:null,cName:null}),y=Object(l.a)(w,2),C=y[0],k=y[1];Object(a.useEffect)((function(){console.log("effect"),b().then((function(e){console.log("promise fulfilled"),u(e)}))}),[]);var x=function(e,n){v(e.id,n).then((function(n){u(t.map((function(t){return t.id!==e.id?t:n}))),N("Updated ".concat(e.name),"success")})).catch((function(n){console.log("virhe"),N("Information of ".concat(e.name," has \n            already been removed from server"),"error"),u(t.filter((function(n){return n.id!==e.id})))}))},N=function(e,n){k({text:e,cName:n}),setTimeout((function(){k({text:null,cName:null})}),5e3)},j=""===f?t:t.filter((function(e){return e.name.toUpperCase().includes(f)||e.number.includes(f)}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(g,{message:C}),o.a.createElement(i,{text:"filter shown with",onChange:function(e){p(e.target.value.toUpperCase())}}),o.a.createElement("h3",null,"Add a new person"),o.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n={name:document.getElementById("name").value,number:document.getElementById("number").value};if(t.find((function(e){return e.name.toUpperCase()===n.name.toUpperCase()}))){var a=t.find((function(e){return e.name.toUpperCase()===n.name.toUpperCase()})),o=Object(r.a)({},n);window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&x(a,o)}else h(n).then((function(e){u(t.concat(e))})),N("Added ".concat(n.name),"success");document.getElementById("name").value="",document.getElementById("number").value=""}}),o.a.createElement("h3",null,"Numbers"),j.map((function(e){return o.a.createElement(s,{key:e.name,name:e.name,number:e.number,handleDelete:function(){return function(e){window.confirm("Delete ".concat(e.name,"?"))&&(E(e.id).then(u(t.filter((function(n){return n.id!==e.id})))),N("Deleted ".concat(e.name),"success"))}(e)}})})))};t(37);c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.afb0bb9d.chunk.js.map