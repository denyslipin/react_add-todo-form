(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(8),r=a(2),o=a(6),c=a(1),l=(a(13),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],d=(a(14),a(0)),u=function(e){var t=e.user;return Object(d.jsxs)("ul",{className:"user",children:[Object(d.jsx)("li",{children:"Name: ".concat(t.name)}),Object(d.jsx)("li",{children:"Username: ".concat(t.username)}),Object(d.jsx)("li",{children:"Email: ".concat(t.email)})]})},b=(a(16),function(e){var t=e.todo;return Object(d.jsxs)("div",{className:"todos",children:[Object(d.jsx)("h3",{className:"todos__title",children:"Todo: ".concat(t.title)}),Object(d.jsxs)("h4",{className:"todos__status",children:["Status: ",t.completed?"Completed":"Not comleted"]}),Object(d.jsx)("p",{children:"User Info:"}),t.user&&Object(d.jsx)(u,{user:t.user})]})}),h=(a(17),function(e){var t=e.todos;return Object(d.jsx)("ul",{className:"todos-list",children:t.map((function(e){return Object(d.jsx)("li",{className:"todos-list__item",children:Object(d.jsx)(b,{todo:e})},e.id)}))})}),p=l.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:m.find((function(t){return t.id===e.userId}))||null})})),j=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!1),o=Object(r.a)(s,2),u=o[0],b=o[1],j=Object(c.useState)(""),g=Object(r.a)(j,2),y=g[0],f=g[1],O=Object(c.useState)(!1),x=Object(r.a)(O,2),v=x[0],S=x[1],_=Object(c.useState)(p),w=Object(r.a)(_,2),N=w[0],k=w[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.trim()||b(!0),y||S(!0),a.trim()&&y){var t=m.find((function(e){return e.name===y})),s={userId:t?t.id:0,id:l.length+1,title:a.trim(),completed:!1,user:t||null};k([].concat(Object(i.a)(N),[s])),n(""),f("")}},className:"App-form",children:[Object(d.jsxs)("label",{className:"App-form__label",children:[Object(d.jsx)("input",{className:"App-form__item",type:"text",name:"title",placeholder:"Title",value:a,onChange:function(e){n(e.target.value.replace(/[^A-Za-z0-9\u0410-\u042f\u0430-\u044f ]/g,"")),b(!1)}}),u&&Object(d.jsx)("p",{className:"App-form__error",children:"Please enter the title"})]}),Object(d.jsxs)("label",{className:"App-form__label",children:[Object(d.jsxs)("select",{className:"App-form__item",name:"user",value:y,onChange:function(e){f(e.target.value),S(!1)},children:[Object(d.jsx)("option",{value:"",children:"Choose a user"}),m.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:a,children:a},t)}))]}),v&&Object(d.jsx)("p",{className:"App-form__error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit",className:"App-form__button",children:"Add todo"})]}),Object(d.jsx)(h,{todos:N})]})};s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.2c90d191.chunk.js.map