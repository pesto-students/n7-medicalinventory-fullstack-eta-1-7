(this["webpackJsonpn7-medicalinventory-fullstack-eta-1-7"]=this["webpackJsonpn7-medicalinventory-fullstack-eta-1-7"]||[]).push([[0],{351:function(e,t,a){"use strict";a(0);var c=a(414),r=a(8),n=(a(406),a(1));t.a=function(e){var t=e.actions;Object(r.f)();return Object(n.jsxs)("div",{className:"empty-state-wrapper",children:[Object(n.jsx)("p",{children:Object(n.jsx)(c.a,{size:100})}),Object(n.jsx)("p",{children:Object(n.jsx)("h4",{children:"No data found!"})}),t]})}},372:function(e,t){},374:function(e,t){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},409:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(9),n=a(0),i=a(420),s=a(67),l=a(418),d=a(66),o=a(82),j=a(419),u=a(417),b=(a(407),a(15)),h=a(8),m=a(120),p=a(351),O=a(64),x=a(20),f=a.n(x),v=a(106),g=a(1),y=[{label:"Relevance",value:"relevance"},{label:"Price: Low to High",value:"lowToHigh"},{label:"Price: High to Low",value:"highToLow"}],_=[{label:"StayHappi",value:"StayHappi"},{label:"Dolo",value:"Dolo"},{label:"Crocin",value:"Crocin"},{label:"Alkem",value:"Alkem"},{label:"Metacin",value:"Metacin"}],N=[{label:"Tablet",value:"Tablet"},{label:"Syrup",value:"Syrup"},{label:"Drop",value:"Drop"},{label:"Injection",value:"Injection"},{label:"Capsule",value:"Capsule"}],k=[{label:"Required",value:"true"},{label:"Not Required",value:"false"}],q=[{label:"All",value:"All"},{label:"Child",value:"Child"}];t.default=function(e){var t=e.location,a=Object(h.f)(),x=Object(b.b)(),w=new URLSearchParams(t.search).get("searchQuery"),S=Object(n.useState)(!1),C=Object(r.a)(S,2),R=C[0],D=C[1],T=Object(n.useState)("Relevance"),A=Object(r.a)(T,2),B=A[0],I=A[1],M=Object(n.useState)(null),P=Object(r.a)(M,2),H=P[0],F=P[1],L=Object(n.useState)({medicine_brand:[],product_form:[],presecription_required:[],age:[]}),z=Object(r.a)(L,2),E=z[0],K=z[1];Object(n.useEffect)((function(){var e=new URLSearchParams(t.search);e.get("asc")&&("true"===e.get("asc")?I("Price: Low to High"):I("Price: High to Low"));var a=Object.fromEntries(e.entries()),r=Object(c.a)({},E);r.medicine_brand=a&&a.medicine_brand?a.medicine_brand.split(","):[],r.product_form=a&&a.product_form?a.product_form.split(","):[],r.presecription_required=a&&a.presecription_required?a.presecription_required.split(","):[],r.age=a&&a.age?a.age.split(","):[],K(r)}),[]),Object(n.useEffect)((function(){var e=new URLSearchParams(t.search);"Relevance"!==B?(e.get("asc")&&e.delete("asc"),e.append("asc","Price: Low to High"===B?"true":"false"),x(Object(O.b)(e)),a.push("/search?".concat(e))):(e.get("asc")&&e.delete("asc"),x(Object(O.b)(e)),a.push("/search?".concat(e)))}),[B]),Object(n.useEffect)((function(){if(E.medicine_brand.length>0||E.product_form.length>0||E.presecription_required>0||E.age.length>0){var e=new URLSearchParams(t.search),r=Object(c.a)({},E);r.medicine_brand=r.medicine_brand.toString(),r.product_form=r.product_form.toString(),r.presecription_required=r.presecription_required.toString(),r.age=r.age.toString(),Object.keys(r).forEach((function(t){r[t]&&(e.get(t)&&e.delete(t),e.append(t,r[t]))})),x(Object(O.b)(e)),a.push("/search?".concat(e))}}),[E]);var J=Object(b.c)((function(e){return e.search}));return"failed"===J.status?Object(g.jsx)(g.Fragment,{children:"Error"}):"success"===J.status||"loading"===J.status?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v.a,{}),Object(g.jsxs)("div",{className:"search-page-wrapper",children:[Object(g.jsxs)("div",{className:"search-page--left-panel",children:[Object(g.jsxs)("div",{className:"m-b-12 clear-filter-wrapper",children:[Object(g.jsx)("h4",{children:"Filters"}),Object(g.jsx)("span",{className:"clear-filter",onClick:function(){return function(){var e=new URLSearchParams(t.search);e.delete("medicine_brand"),e.delete("product_form"),e.delete("presecription_required"),e.delete("age"),x(Object(O.b)(e)),a.push("/search?".concat(e)),K({medicine_brand:[],product_form:[],presecription_required:[],age:[]})}()},children:"Clear Filters"})]}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Brands"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:_.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.medicine_brand.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.medicine_brand;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{medicine_brand:t}))}else if(-1!==E.medicine_brand.indexOf(e.target.name)){var a=E.medicine_brand;a.splice(E.medicine_brand.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{medicine_brand:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Product Form"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:N.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.product_form.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.product_form;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{product_form:t}))}else if(-1!==E.product_form.indexOf(e.target.name)){var a=E.product_form;a.splice(E.product_form.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{product_form:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Prescription Required"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:k.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.presecription_required.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.presecription_required;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{presecription_required:t}))}else if(-1!==E.presecription_required.indexOf(e.target.name)){var a=E.presecription_required;a.splice(E.presecription_required.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{presecription_required:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Age"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:q.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.age.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.age;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{age:t}))}else if(-1!==E.age.indexOf(e.target.name)){var a=E.age;a.splice(E.age.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{age:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})})]}),Object(g.jsxs)("div",{className:"search-page--right-panel",children:[Object(g.jsxs)("div",{className:"search-page--header",children:[Object(g.jsxs)("div",{className:"flex-column",children:[Object(g.jsx)("span",{className:"font-size-14",children:"Search Results"}),Object(g.jsxs)("span",{className:"font-size-26",children:['"',w,'"']})]}),Object(g.jsxs)("div",{className:"flex-items-center",children:[Object(g.jsx)("span",{children:"Sort By"}),Object(g.jsx)("span",{children:Object(g.jsxs)(l.a,{className:"dropdown-wrapper",onSelect:function(e){I(e)},children:[Object(g.jsx)(l.a.Toggle,{variant:"white",id:"dropdown-basic",children:B}),Object(g.jsx)(l.a.Menu,{children:y.map((function(e){return Object(g.jsx)(l.a.Item,{eventKey:e.label,children:e.label},e.value)}))})]})})]})]}),Object(g.jsx)("div",{className:"margin-top-12",children:"loading"===J.status?Object(g.jsx)("div",{children:Object(g.jsx)(m.a,{inline:!0})}):Object(g.jsx)(g.Fragment,{children:J&&J.searchedData&&J.searchedData.length?Object(g.jsx)(g.Fragment,{children:J.searchedData.map((function(e,t){return Object(g.jsx)(d.a,{className:"m-b-12",children:Object(g.jsx)(d.a.Body,{children:Object(g.jsxs)("div",{className:"flex-column",children:[Object(g.jsxs)("div",{className:"flex-content-sb",children:[Object(g.jsx)("div",{className:"flex-column",children:Object(g.jsx)("span",{className:"font-weight-700",children:null===e||void 0===e?void 0:e.name})}),Object(g.jsx)("div",{className:"flex-column",children:Object(g.jsxs)("span",{children:["\u20b9",(null===e||void 0===e?void 0:e.sell_price)||0]})})]}),Object(g.jsxs)("div",{className:"search-page--counter-wrapper",children:[Object(g.jsx)("div",{className:"search-page-wrapper"}),Object(g.jsxs)("div",{id:"addToCartWrapper",style:{display:"flex"},children:[H===t&&Object(g.jsx)("div",{className:"search-page--add-cart",children:"\u2713"}),"\xa0",H!==t?Object(g.jsx)("div",{className:"search-page--add-cart",onClick:function(){!function(e,t){var a=function(e,t){if(0==t.length)return e.count=1,t.push(e),t;for(var a,c=!1,r=0;r<t.length;r++)t[r].id===e.id&&(a=r,c=!0);return c?(t[a].count=t[a].count+1,t):(e.count=1,t.push(e),t)}(Object(c.a)({},e),JSON.parse(f.a.get("cartData"))||[]);f.a.set("cartData",JSON.stringify(a)),F(t),setTimeout((function(){F(null)}),1e3)}(e,t)},children:"ADD TO CART"}):Object(g.jsx)(g.Fragment,{children:H===t&&Object(g.jsx)("div",{id:"addToCart",className:"search-page--add-cart",children:"ADDED"})})]})]})]})})},e.id)}))}):Object(g.jsx)(p.a,{})})})]}),Object(g.jsx)("div",{className:"filter-button",children:Object(g.jsx)(o.a,{onClick:function(){return D(!0)},className:"funner-filter--wrapper",children:Object(g.jsx)(u.a,{size:30,color:"#28b8b0",className:"mr-20 cursor-pointer"})})}),Object(g.jsxs)(j.a,{show:R,fullscreen:!0,onHide:function(){return D(!1)},children:[Object(g.jsx)(j.a.Header,{closeButton:!0,children:Object(g.jsx)(j.a.Title,{children:"Apply Filters"})}),Object(g.jsx)(j.a.Body,{children:Object(g.jsxs)("div",{children:[Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Brands"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:_.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.medicine_brand.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.medicine_brand;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{medicine_brand:t}))}else if(-1!==E.medicine_brand.indexOf(e.target.name)){var a=E.medicine_brand;a.splice(E.medicine_brand.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{medicine_brand:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Product Form"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:N.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.product_form.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.product_form;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{product_form:t}))}else if(-1!==E.product_form.indexOf(e.target.name)){var a=E.product_form;a.splice(E.product_form.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{product_form:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Prescription Required"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:k.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.presecription_required.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.presecription_required;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{presecription_required:t}))}else if(-1!==E.presecription_required.indexOf(e.target.name)){var a=E.presecription_required;a.splice(E.presecription_required.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{presecription_required:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)(i.a,{flush:!0,className:"m-b-12",children:Object(g.jsxs)(i.a.Item,{eventKey:"1",children:[Object(g.jsx)(i.a.Header,{children:"Age"}),Object(g.jsx)(i.a.Body,{className:"accordion-body",children:q.map((function(e){return Object(g.jsx)(s.a.Check,{type:"checkbox",name:e.value,checked:-1!==E.age.indexOf(e.value),onChange:function(e){if(e.target.checked){var t=E.age;t.push(e.target.name),K(Object(c.a)(Object(c.a)({},E),{},{age:t}))}else if(-1!==E.age.indexOf(e.target.name)){var a=E.age;a.splice(E.age.indexOf(e.target.name),1),K(Object(c.a)(Object(c.a)({},E),{},{age:a}))}},label:e.label,style:{cursor:"pointer"}},e.value)}))})]})}),Object(g.jsx)("div",{className:"filter-apply-button",children:Object(g.jsx)("div",{className:"d-grid gap-2",children:Object(g.jsx)(o.a,{size:"lg",className:"apply-button--wrapper",onClick:function(){return D(!1)},children:"Apply"})})})]})})]})]})]}):void 0}},421:function(e,t,a){"use strict";a.r(t);var c=a(9),r=a(0),n=a(66),i=a(423),s=a(424),l=a(12),d=a.n(l),o=a(21),j=a(318),u=a(322),b=a(163),h=a(82),m=a(51),p=a(46),O=a(57),x=a(69),f=a.n(x),v=(a(37),a(25)),g=a(29),y=a(15),_=a(20),N=a.n(_),k=a(1),q=function(){var e=Object(y.c)(g.d),t=function(){var e=Object(o.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"Token ".concat(N.a.get("token"))}},e.next=3,f.a.post("https://abdulrashidalaskar.pythonanywhere.com/api/medicine/",t,a).then((function(e){v.b.success("Medicine added successfully")})).catch((function(e){v.b.error(e.message||"Something went wrong!")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=p.c({name:p.d().required("Required*"),company:p.d().required("Required*"),medical_typ:p.d().required("Required*"),manufacture:p.d().required("Required*"),qty_in_strip:p.b().required("Required*").positive().integer(),in_stock_total:p.b().required("Required*").positive().integer(),free_strip:p.b().required("Required*").positive().integer(),description:p.d().required("Required*"),shelf_no:p.d().required("Required*"),batch_no:p.d().required("Required*"),s_gst:p.d().required("Required*"),c_gst:p.d().required("Required*"),sell_price:p.b().required("Required*").positive().integer(),buy_price:p.b().required("Required*").positive().integer(),medicine_tags:p.d().required("Required*"),expire_date:p.a().required("Required*"),mfg_date:p.a().required("Required*"),category:p.d().required("Required*"),unit_of_measure:p.d().required("Required*"),buyer:p.d().required("Required*")});return Object(k.jsx)(O.c,{validationSchema:a,initialValues:{name:"",company:e,manufacture:"",qty_in_strip:"",in_stock_total:"",free_strip:"",description:"",shelf_no:"",batch_no:"",s_gst:"",c_gst:"",sell_price:"",buy_price:"",medicine_tags:"",expire_date:"",mfg_date:"",category:"",unit_of_measure:"",buyer:""},onSubmit:function(e){t(e)},children:function(t){return Object(k.jsx)("div",{children:Object(k.jsx)(O.b,{children:Object(k.jsxs)(j.a,{children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{label:"Medicine Name",name:"name",type:"text"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{label:"Company Name",name:"company",value:e,disabled:!0,type:"text"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"manufacture",label:"Manufacturer Name"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"number",name:"qty_in_strip",label:"Quantity In Strip"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"category",label:"Category"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"buyer",label:"Buyer"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"medical_typ",label:"Medical Type"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"number",name:"in_stock_total",label:"In Stock Total"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"number",name:"free_strip",label:"Free Strip"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"description",label:"Description"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"shelf_no",label:"Shelf Number"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"batch_no",label:"Batch Number"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"s_gst",label:"SGST"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"c_gst",label:"CGST"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"number",name:"sell_price",label:"Sell Price"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"number",name:"buy_price",label:"Buy Price"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"medicine_tags",label:"Medicine Tags"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"text",name:"unit_of_measure",label:"Unit of Measure"})})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"date",name:"expire_date",label:"Expiry Date"})}),Object(k.jsx)(b.a,{md:6,children:Object(k.jsx)(m.a,{type:"date",name:"mfg_date",label:"Manufacturing Date"})})]}),Object(k.jsx)(u.a,{children:Object(k.jsxs)("div",{className:"d-grid gap-2",children:[Object(k.jsx)(h.a,{type:"submit",style:{border:"none",backgroundColor:"#28b8b0"},disabled:!(t.isValid&&t.dirty),children:"Submit"}),Object(k.jsx)(h.a,{type:"submit",variant:"outline-secondary",children:"Cancel"})]})})]})})})}})},w=a(67),S=a(319),C=a(106),R=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(""),s=Object(c.a)(i,2),l=s[0],d=s[1],o=Object(r.useState)(""),x=Object(c.a)(o,2),g=x[0],y=x[1],_=Object(r.useState)(""),q=Object(c.a)(_,2),C=q[0],R=q[1],D=p.c({in_stock_total:p.b().required("Required*").positive().integer(),free_strip:p.b().required("Required*").positive().integer()});return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(u.a,{children:Object(k.jsx)(b.a,{children:Object(k.jsx)(w.a,{style:{display:"flex"},onSubmit:function(e){e.preventDefault()},children:Object(k.jsxs)("div",{style:{width:"100%"},children:[Object(k.jsxs)("div",{style:{display:"flex"},children:[Object(k.jsx)(w.a.Control,{placeholder:"Search..",type:"text",name:"searchbox",value:a,className:"header-form-control",onChange:function(e){n(e.target.value)}}),Object(k.jsx)(h.a,{type:"submit",disabled:!a,style:{border:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:"#28b8b0"},onClick:function(){!function(){var e={headers:{Authorization:"Token ".concat(N.a.get("token"))}};f.a.get("https://abdulrashidalaskar.pythonanywhere.com/search?searchQuery=".concat(a),e).then((function(e){d(e.data)})).catch((function(e){console.log(e)}))}()},children:Object(k.jsx)(S.a,{size:25})})]}),l&&l.length&&Object(k.jsx)("div",{className:"search-selector-wrapper",children:l&&l.length&&l.map((function(e){return Object(k.jsx)(u.a,{children:Object(k.jsx)(b.a,{md:12,children:Object(k.jsx)("div",{onClick:function(){y(e.name),R(e.id)},className:"header-form-control form-control",children:e.name})})})}))})]})})})})}),Object(k.jsx)("br",{}),Object(k.jsx)(O.c,{validationSchema:D,initialValues:{in_stock_total:"",free_strip:""},onSubmit:function(e){console.log(e),function(e){var t={headers:{"Content-Type":"application/json",Authorization:"Token ".concat(N.a.get("token"))}};f.a.patch("https://abdulrashidalaskar.pythonanywhere.com/api/medicine/".concat(C,"/"),e,t).then((function(e){v.b.success("Medicine updated successfully")})).catch((function(e){v.b.error(e.message||"Something went wrong!")}))}(e)},children:function(e){return Object(k.jsx)("div",{children:Object(k.jsx)(O.b,{children:Object(k.jsxs)(j.a,{children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(b.a,{md:4,children:Object(k.jsx)(m.a,{label:"Medicine Name",value:g,name:"name",type:"text"})}),Object(k.jsx)(b.a,{md:4,children:Object(k.jsx)(m.a,{type:"number",name:"in_stock_total",label:"In Stock Total"})}),Object(k.jsx)(b.a,{md:4,children:Object(k.jsx)(m.a,{type:"number",name:"free_strip",label:"Free strip"})})]}),Object(k.jsx)(u.a,{children:Object(k.jsxs)("div",{className:"d-grid gap-2",children:[Object(k.jsx)(h.a,{type:"submit",style:{border:"none",backgroundColor:"#28b8b0"},disabled:!(e.isValid&&e.dirty),children:"Submit"}),Object(k.jsx)(h.a,{type:"submit",variant:"outline-secondary",children:"Cancel"})]})})]})})})}})]})};a(409),t.default=function(){var e=Object(r.useState)("addMedicine"),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(k.jsxs)("div",{className:"medicine-wrapper",children:[Object(k.jsx)(C.a,{}),Object(k.jsx)(n.a,{children:Object(k.jsx)(n.a.Body,{children:Object(k.jsxs)(i.a,{activeKey:a,onSelect:function(e){return l(e)},className:"mb-3",children:[Object(k.jsx)(s.a,{eventKey:"addMedicine",title:"Add Medicine",children:Object(k.jsx)(q,{})}),Object(k.jsx)(s.a,{eventKey:"updateMedicine",title:"Update Medicine",children:Object(k.jsx)(R,{})})]})})})]})}},422:function(e,t,a){"use strict";a.r(t);var c=a(12),r=a.n(c),n=a(2),i=a(21),s=a(9),l=a(0),d=a(66),o=a(82),j=a(361),u=a.n(j),b=(a(405),a(20)),h=a.n(b),m=a(351),p=a(37),O=a(69),x=a.n(O),f=a(120),v=a(25),g=a(8),y=a(106),_=a(1);t.default=function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],j=Object(l.useState)(0),b=Object(s.a)(j,2),O=b[0],N=b[1],k=Object(l.useState)([]),q=Object(s.a)(k,2),w=q[0],S=q[1],C=Object(l.useState)(!1),R=Object(s.a)(C,2),D=R[0],T=R[1];Object(g.f)();Object(l.useEffect)((function(){var e=JSON.parse(h.a.get("cartData"));e&&e.length>0&&c(e)}),[]),Object(l.useEffect)((function(){var e=0;a.map((function(t){e+=t.count*t.sell_price})),N(e);for(var t=[],c=0;c<a.length;c++)t.push({quantity:a[c].count,description:a[c].name,tax:12,price:a[c].sell_price*a[c].count});S(t)}),[a]);var A=function(){!function(e,t,a,c,r,n,i){var s={currency:"INR",locale:"en-IN",taxNotation:"GST",marginTop:25,marginRight:25,marginLeft:25,marginBottom:25,logo:e,sender:t,client:a,invoiceNumber:c,invoiceDate:r,products:n,bottomNotice:i};u.a.createInvoice(s,(function(e){return u.a.download("myInvoice.pdf",e.pdf)}))}("https://www.logomoose.com/wp-content/uploads/2013/08/ms_moose.jpg",{company:"Sample Corp",address:"Sample Street 123",zip:"1234 AB",city:"Sampletown",country:"Samplecountry"},{company:"Client Corp",address:"Clientstreet 456",zip:"4567 CD",city:"Clientcity",country:"Clientcountry"},"2021.0001",function(){var e=new Date;return e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()}(),w,"Please visit again. Thank you."),T(!1),c([]),h.a.remove("cartData")},B=function(){var e=Object(i.a)(r.a.mark((function e(t){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=Object(n.a)({},t)).count>1)){e.next=10;break}return i.count=i.count-1,s=a.map((function(e){return i.id===e.id?i:e})),e.next=6,c(s);case 6:return e.next=8,h.a.remove("cartData");case 8:return e.next=10,h.a.set("cartData",JSON.stringify(s));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(r.a.mark((function e(t){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Object(n.a)({},t)).count=i.count+1,s=a.map((function(e){return i.id===e.id?i:e})),e.next=5,c(s);case 5:return e.next=7,h.a.remove("cartData");case 7:return e.next=9,h.a.set("cartData",JSON.stringify(s));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(h.a.get("cartData")),n=a.filter((function(e){return e.id!==t.id})),c(n),e.next=5,h.a.remove("cartData");case 5:return e.next=7,h.a.set("cartData",JSON.stringify(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(y.a,{}),Object(_.jsx)("div",{className:"checkout-page-wrapper",children:D?Object(_.jsx)(f.a,{}):Object(_.jsx)(_.Fragment,{children:a&&a.length>0?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"order-summary-wrapper",children:"Order Summary"}),Object(_.jsx)("div",{className:"products-wrapper",children:"PRODUCTS"}),Object(_.jsxs)("div",{className:"checkout-page-content-wrapper",children:[Object(_.jsx)("div",{className:"flex-1",children:Object(_.jsx)(d.a,{className:"margin-bottom-12",children:Object(_.jsx)(d.a.Body,{children:a.map((function(e){return Object(_.jsxs)("section",{className:"medicine-card-wrapper",children:[Object(_.jsxs)("div",{className:"flex-content-sb",children:[Object(_.jsx)("div",{className:"flex-column",children:Object(_.jsx)("span",{className:"font-weight-700",children:e.name})}),Object(_.jsxs)("div",{className:"checkout-price",children:["Rs. ",e.sell_price*Number(e.count)]})]}),Object(_.jsxs)("div",{className:"checkout-page--counter-wrapper",children:[Object(_.jsxs)("div",{className:"checkout-counter--wrapper",children:[Object(_.jsx)("div",{className:"increment-decrement-counter-wrapper",onClick:function(){B(e)},children:"-"}),"\xa0",Object(_.jsx)("div",{className:"checkout-page--counter-value",children:e.count}),"\xa0",Object(_.jsx)("div",{className:"increment-decrement-counter-wrapper",onClick:function(){I(e)},children:"+"})]}),Object(_.jsx)("div",{children:Object(_.jsx)(o.a,{variant:"secondary",size:"sm",onClick:function(){M(e)},children:"Remove"})})]})]})}))})})}),Object(_.jsx)("div",{className:"checkout-payment-details",children:Object(_.jsx)(d.a,{children:Object(_.jsxs)(d.a.Body,{children:[Object(_.jsx)("div",{className:"opacity-6",children:"PAYMENT DETAILS"}),Object(_.jsxs)("div",{className:"total-amount",children:[Object(_.jsx)("div",{children:"Total Amount *"}),Object(_.jsxs)("div",{children:["Rs. ",O]})]}),Object(_.jsxs)("div",{className:"total-amoount-wrapper",children:[Object(_.jsxs)("div",{className:"flex-column",children:[Object(_.jsx)("div",{className:"total-amount-wrapper",children:"TOTAL AMOUNT"}),Object(_.jsxs)("div",{className:"font-weight-bold",children:["Rs. ",O]})]}),Object(_.jsx)("div",{children:Object(_.jsx)(o.a,{className:"checkout-proceed-button",onClick:function(){!function(){T(!0);for(var e=[],t=0;t<a.length;t++)e.push({id:a[t].id,qty:a[t].count});var c={headers:{Authorization:"Token ".concat(p.a)}};x.a.post("https://abdulrashidalaskar.pythonanywhere.com/api/order/",{medicines:e},c).then((function(e){A(),console.log(e)})).catch((function(e){v.b.error("Medicine out of stock!"),T(!1),console.log(e)}))}()},children:"DOWNLOAD INVOICE"})})]})]})})})]})]}):Object(_.jsx)(m.a,{actions:Object(_.jsx)("h5",{className:"empty-state-cart",children:"Please add a medicine to cart"})})})})]})}}}]);
//# sourceMappingURL=checkout.b26f5ffc.chunk.js.map