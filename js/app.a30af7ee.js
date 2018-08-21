webpackJsonp([0],{"+MSu":function(e,t){},0:function(e,t,n){e.exports=n("NHnr")},"5Bh1":function(e,t){},"5gLr":function(e,t,n){e.exports=n.p+"img/running.20ed3e15.png"},C7kO:function(e,t){},G3BA:function(e,t){},HCnE:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("/5sW"),i=n("/ocq"),o=n("36EE"),s=n.n(o),r={name:"Greeting",data:function(){return{from:2010}},props:{name:String},computed:{experience:function(e){return(new Date).getFullYear()-e.from}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"greeting block"},[n("div",{staticClass:"title"},[e._m(0),n("h2",[e._v("\n      My name is "),n("strong",[e._v(e._s(e.name))]),e._v(" and I am a Software Engineer.\n      I have "+e._s(e.experience)+"+ years of experience in software development.\n      As a team lead, I take the responsibility for providing guidance,\n      instruction, direction, and leadership to the team for the purpose of reaching the business\n      goals and achieving successful results.\n    ")])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Hey there,"),a("img",{attrs:{src:n("Q5tc")}})])}],m=n("XyMi");function u(e){n("5Bh1")}var d=!1,p=u,h="data-v-7f86ef08",f=null,v=Object(m["a"])(r,l,c,d,p,h,f),g=v.exports,y={name:"Columns",props:{title:String}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns block"},[n("div",{staticClass:"block__title"},[e._v(e._s(e.title))]),n("div",{staticClass:"block__content"},[e._t("default")],2)])},_=[],w=!1,k=null,C=null,L=null,E=Object(m["a"])(y,b,_,w,k,C,L),x=E.exports,I={name:"Content",props:{data:Array,html:Array}},S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._l(e.data,function(t,a){return n("p",{key:a},[e._v("\n    "+e._s(t)+"\n  ")])}),e._l(e.html,function(t,a){return n("p",{key:a,domProps:{innerHTML:e._s(t)}},[e._v("\n    "+e._s(t)+"\n  ")])})],2)},j=[];function A(e){n("C7kO")}var M=!1,O=A,H="data-v-6e82c420",T=null,P=Object(m["a"])(I,S,j,M,O,H,T),N=P.exports,$={name:"Lines",props:{data:Array}},F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lines"},e._l(e.data,function(t,a){return n("div",{key:a,staticClass:"line"},[n("div",{staticClass:"line__row"},[n("div",{staticClass:"line__title"},[e._v(e._s(t.title))]),n("div",{staticClass:"line__date"},[e._v(e._s(t.time))])]),n("div",{staticClass:"line__description"},[e._v(e._s(t.description))])])}))},J=[];function G(e){n("chfC")}var D=!1,R=G,W="data-v-6e9bc23d",q=null,z=Object(m["a"])($,F,J,D,R,W,q),B=z.exports,U={name:"List",props:{data:Array}},Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},e._l(e.data,function(t,a){return n("div",{key:a,staticClass:"list__category"},[n("div",{staticClass:"list__category__label"},[e._v(e._s(t.label))]),n("ul",{staticClass:"list__category__item"},e._l(t.items,function(t,a){return n("li",{key:a},[e._v(e._s(t.name))])}))])}))},K=[];function V(e){n("Oxlh")}var X=!1,Y=V,Z="data-v-6585b0a4",ee=null,te=Object(m["a"])(U,Q,K,X,Y,Z,ee),ne=te.exports,ae={name:"Home",components:{Greeting:g,Columns:x,Content:N,Lines:B,List:ne},data:function(){return{author:"Leonid Trytynichenko",columns:[{name:"Intro",type:"Content",data:["This online version of my resume was created as an experiment to learning Vue.js from scratch. For development, I've used manually configured vue-cli with the following features: Router, SCSS/SASS Pre-processors, ESLint + Airbnb config, Unit Testing on Jest and E2E Testing on Cypress."],html:['The source code is available on <a href="https://github.com/trytynichenko/cv" target="_blank">GitHub</a>.']},{name:"Personal Goal",type:"Content",data:["As a Developer, I want to make all users happy with the service providing the solution to their issues, thus, helping the business grow and make more profit."]},{name:"Experience",type:"Lines",data:[{title:"Master Of Code Global",time:"From May 2018",description:"Team Lead, JavaScript Developer"},{title:"Netvertise Ltd.",time:"Nov 2015 - Apr 2018",description:"Creative Director, Front-End Lead"},{title:"Netvertise Ltd.",time:"Apr 2014 - Oct 2015",description:"Team Lead"},{title:"Netvertise Ltd.",time:"Nov 2013 - Apr 2014",description:"Software Engineer"},{title:"Pingbull LLC",time:"Apr 2013 - Oct 2013",description:"WordPress Team Lead"},{title:"Pingbull LLC",time:"Feb 2012 - Apr 2013",description:"Software Engineer"},{title:"Siter design agency",time:"Jun 2010 - Jan 2012",description:"CEO"},{title:"WebLife",time:"Feb 2010 - May 2010",description:"Junior Software Engineer"}]},{name:"Skills",type:"List",data:[{label:"Languages",items:[{name:"JavaScript (ES6)"},{name:"PHP"},{name:"HTML"},{name:"CSS/Sass"},{name:"SQL"},{name:"Bash"}]},{label:"Back end",items:[{name:"Node.js"},{name:"WordPress"},{name:"Magento"},{name:"Apache / Nginx"},{name:"MySQL"},{name:"REST"}]},{label:"Front end",items:[{name:"React + Redux"},{name:"Vue.js + Vuex"},{name:"Mustache"},{name:"jQuery"},{name:"Jest"},{name:"Cypress.io"}]},{label:"Other",items:[{name:"Kubernetes"},{name:"Docker"},{name:"Webpack"},{name:"Microsoft Azure"},{name:"Git"}]}]},{type:"List",data:[{label:"Management",items:[{name:"Jira"},{name:"InVision"},{name:"XMind"}]},{label:"CI/CD",items:[{name:"Jenkins"},{name:"GitLab"},{name:"Capistrano"}]},{label:"Methodology",items:[{name:"Scrum"},{name:"Kanban"},{name:"GitFlow"}]},{label:"Design",items:[{name:"Adobe Photoshop"},{name:"Adobe Illustrator"},{name:"Adobe After Effects"}]}]},{name:"Soft skills",type:"List",data:[{items:[{name:"Team Player"},{name:"Knowledge Sharing"}]},{items:[{name:"Thinking As End User"},{name:"Communication"}]},{items:[{name:"Flexible"},{name:"Learn New"}]},{items:[{name:"Problem Solving"},{name:"Time Management"}]}]},{name:"Testimonials",type:"Lines",data:[{title:"Sasha Miller | Netvertise Ltd.",description:'"Leo is an excellent and driven employee whom I had the pleasure of working with at Netvertise Ltd. on a number of design and technical projects. He is able to tackle complicated issues with patience, understanding and is an efficient team leader. Leo is pleasant to work with and I highly recommend him."'},{title:"David Tabachnikov | Netvertise Ltd.",description:'"Leonid is an amazingly passionate and driven professional. He\'s ability to follow-through and deliver, adding in personal insight and his vision, ultimately making any project he touches better than expected. Unfortunately, I worked with Leonid for just a short time, but I would gladly hire him for any future project, and he would be a great asset to any organization."'},{title:"Alena Chuzha | Netvertise Ltd.",description:'"It is a real pleasure to have deal with such professional and devoted colleague as Leo. I would subscribe under all the best words that HR can apply to the successful Team Lead\'s profile. Leo completely involves into the projects and keeps all the team members together coordinating and helping them in getting excellent results in time. His possibility for multitasking and positive attitude brings a great value into the team motivation."'},{title:"Kristoffer Homdrom Fredriksen | Pingbull LLC",description:'"In Pingbull I have the honour and pleasure of working with Leonid. He is structured, easy going, positive, and his passion for what he is doing is very strong. Leonid is an ambitious and very professional developer. He is always stretching for new goals, and struggles to optimize all parts of solutions he builds. Leonid is not afraid of using new methods to reach his goals, and often take part in recommending new ways to solve challenges we might face in our projects.This defiantly contributes to delivering innovative and robust new solutions."'},{title:"Joahim Furuseth | Pingbull LLC",description:'"Leo is a dedicated developer, and I have had the privilege of working with him across several projects. I have found Leo to be structured and easy to work with. His skills in WordPress development is just amazing. When working on a project Leo is also creative and comes with his own ideas to the projects, this is very useful for me as a project manager."'}]}]}}},ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("greeting",{attrs:{name:e.author}}),e._l(e.columns,function(e,t){return n("columns",{key:t,attrs:{title:e.name}},[n(e.type,{tag:"component",attrs:{data:e.data,html:e.html}})],1)})],2)},oe=[],se=!1,re=null,le=null,ce=null,me=Object(m["a"])(ae,ie,oe,se,re,le,ce),ue=me.exports,de={name:"About",components:{Content:N},data:function(){return{columns:[{type:"Content",data:["For more than 8 years I have been working in the international companies that develop products and business solutions for the markets of the USA, Europe, and Scandinavia. My major responsibilities were the development and support of big high-load projects using the most innovative technologies available. I like to challenge myself and always seek for new ways of improvement and find the most appropriate solutions to difficult tasks. My life is experienced only in moving forward.","I am a team player appreciating an opportunity to work with other professionals and create responsive and beautifully designed websites and apps. I always dedicate a lot of time and attention to training and motivation of each member of my team – that is how I ensure my mates are goal-driven and feel supported.","They say, the devil is in the detail, so I take it as a personal challenge to balance creativity and close attention to the details. I aim my clients receive a high-quality product based on their needs and requirements. I like working with brands and product companies helping reach their business goals and leave their customers happy with the experience.","I attend profile conferences and training on regular basis. A while ago I started teaching my own course in one of the most popular projects in Ukraine dedicated to creative education and training. My interests are vast: from cooking to traveling. I get my inspiration from new experience and emotions."]}]}}},pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about block"},[n("div",[e._m(0),e._l(e.columns,function(e,t){return n(e.type,{key:t,tag:"component",attrs:{data:e.data}})})],2)])},he=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Long story short "),a("img",{attrs:{src:n("5gLr")}})])}],fe=!1,ve=null,ge=null,ye=null,be=Object(m["a"])(de,pe,he,fe,ve,ge,ye),_e=be.exports,we={name:"Contact",components:{Content:N},data:function(){return{columns:[{type:"Content",data:["I am an open-minded positive individual who shapes new ideas with right values and bright vision. If you have any questions or interested in the partnership, I will be happy to talk:"],html:['by email <a href="mailto:leo@trytynichenko.com">leo@trytynichenko.com</a> or <a href="https://www.linkedin.com/in/trytynichenko/" target="_blank">LinkedIn</a>, even on <a href="skype:trytynichenko" target="_blank">Skype</a>.']}]}}},ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contact block"},[n("div",[e._m(0),e._l(e.columns,function(e,t){return n(e.type,{key:t,tag:"component",attrs:{data:e.data,html:e.html}})})],2)])},Ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Contact "),a("img",{staticClass:"icons",attrs:{src:n("lyRJ")}})])}],Le=!1,Ee=null,xe=null,Ie=null,Se=Object(m["a"])(we,ke,Ce,Le,Ee,xe,Ie),je=Se.exports;a["a"].use(i["a"]);var Ae=new i["a"]({routes:[{path:"/",name:"home",component:ue},{path:"/about",name:"about",component:_e},{path:"/contact",name:"contact",component:je}]});s()(Ae,"UA-50810083-1");var Me=Ae,Oe={name:"Navigation",props:{items:Array}},He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav"},e._l(e.items,function(t,a){return n("router-link",{key:a,attrs:{to:t.path}},[e._v(e._s(t.name))])}))},Te=[];function Pe(e){n("HCnE")}var Ne=!1,$e=Pe,Fe="data-v-04f67a6a",Je=null,Ge=Object(m["a"])(Oe,He,Te,Ne,$e,Fe,Je),De=Ge.exports,Re={name:"Header",components:{Navigation:De},data:function(){return{nav:[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Contact",path:"/contact"}]}}},We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header block"},[n("navigation",{attrs:{items:e.nav}})],1)},qe=[];function ze(e){n("qykR")}var Be=!1,Ue=ze,Qe="data-v-644f46fa",Ke=null,Ve=Object(m["a"])(Re,We,qe,Be,Ue,Qe,Ke),Xe=Ve.exports,Ye={name:"Footer",data:function(){return{author:"Leonid Trytynichenko"}},computed:{year:function(){return(new Date).getFullYear()}}},Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer block"},[a("p",[e._v("Made with "),a("img",{attrs:{src:n("gfE7")}}),e._v(" by "+e._s(e.author)+" © "+e._s(e.year))]),a("p")])},et=[];function tt(e){n("+MSu")}var nt=!1,at=tt,it="data-v-0441b98b",ot=null,st=Object(m["a"])(Ye,Ze,et,nt,at,it,ot),rt=st.exports,lt={name:"App",components:{MainHeader:Xe,MainFooter:rt}},ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-header"),n("transition",{attrs:{name:"jump",mode:"out-in"}},[n("router-view")],1),n("main-footer")],1)},mt=[];function ut(e){n("G3BA")}var dt=!1,pt=ut,ht=null,ft=null,vt=Object(m["a"])(lt,ct,mt,dt,pt,ht,ft),gt=vt.exports;a["a"].config.productionTip=!1,new a["a"]({router:Me,render:function(e){return e(gt)}}).$mount("#app")},Oxlh:function(e,t){},Q5tc:function(e,t,n){e.exports=n.p+"img/v.ac2e90c1.png"},chfC:function(e,t){},gfE7:function(e,t,n){e.exports=n.p+"img/fire.1932a267.png"},lyRJ:function(e,t,n){e.exports=n.p+"img/mailbox.f672ae21.png"},qykR:function(e,t){}},[0]);
//# sourceMappingURL=app.a30af7ee.js.map