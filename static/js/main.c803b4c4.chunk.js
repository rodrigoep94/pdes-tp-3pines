(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,n){},23:function(e,a,n){},27:function(e,a,n){e.exports=n(41)},34:function(e,a,n){},35:function(e,a,n){},38:function(e,a,n){},39:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),i=n(10),r=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(11),s=(n(34),n(1)),l=n(6),u=n(14),m=n(13),d=n(15),v=(n(35),n(23),n(16),"SELECCIONAR_ACCION"),p=function(e){return{type:v,payload:e}},f=n(2),g=function(e){var a=e.seleccionarImagen,n=e.imagen,t=e.nombre;return c.a.createElement("div",{onClick:a},c.a.createElement("img",{src:n,alt:t,className:"accion"}))};function b(e,a){return e.acciones.accionSeleccionada===a.nombre?a.imagenActiva:a.imagenInactiva}var h=Object(f.a)(function(e,a){return{imagen:b(e,a)}},function(e,a){return{seleccionarImagen:function(){return e(p(a.nombre))}}})(g),E=function(e){var a=e.maquinas,n=e.acciones,t=function(){return n.map(function(e,a){return c.a.createElement(h,{key:"accion-".concat(a),nombre:e.nombre,imagenActiva:e.imagenActivaUrl,imagenInactiva:e.imagenInactivaUrl})})},i=function(){return a.map(function(e,a){return c.a.createElement(h,{key:"maquina-".concat(a),nombre:e.nombre,imagenActiva:e.imagenActivaUrl,imagenInactiva:e.imagenInactivaUrl})})};return c.a.createElement("div",{className:"toolbox-contenedor"},c.a.createElement("div",{className:"acciones-contenedor"},c.a.createElement("div",{className:"titulo"},"M\xe1quinas"),c.a.createElement("div",{className:"toolbox-acciones borde-piola"},c.a.createElement("div",{className:"row"},i().slice(0,2)),c.a.createElement("div",{className:"row"},i().slice(2,4)),c.a.createElement("div",{className:"row"},i().slice(4,6)))),c.a.createElement("div",{className:"acciones-contenedor"},c.a.createElement("div",{className:"titulo"},"Edici\xf3n"),c.a.createElement("div",{className:"toolbox-acciones borde-piola"},c.a.createElement("div",{className:"row"},t().slice(0,2)),c.a.createElement("div",{className:"row"},t().slice(2,4)))))},w=(n(38),function(){function e(a,n,t){Object(s.a)(this,e),this.nombre=a,this.imagenUrl=n,this.imagenInactivaUrl=n,this.imagenActivaUrl=t,this.activa=!1}return Object(l.a)(e,[{key:"estaActiva",value:function(){return this.activa}},{key:"activarDesactivar",value:function(){this.activa=!this.activa,this.estaActiva()?this.imagenUrl=this.imagenActivaUrl:this.imagenUrl=this.imagenInactivaUrl}}]),e}()),y=function(e){function a(e,n,t,c,i){var r;return Object(s.a)(this,a),(r=Object(u.a)(this,Object(m.a)(a).call(this,e,c,i))).costo=n,r.frecuencia=t,r}return Object(d.a)(a,e),a}(w),O=[new w("Rotar","/pdes-tp-3pines/icons/rotar.svg","/pdes-tp-3pines/icons/rotar_activo.svg"),new w("Eliminar","/pdes-tp-3pines/icons/eliminar.svg","/pdes-tp-3pines/icons/eliminar_activo.svg"),new w("Mover","/pdes-tp-3pines/icons/mover.svg","/pdes-tp-3pines/icons/mover_activo.svg")],j=[new y("Starter","10","1","/pdes-tp-3pines/icons/starter.svg","/pdes-tp-3pines/icons/starter_activo.svg"),new y("Seller","15","1","/pdes-tp-3pines/icons/seller.svg","/pdes-tp-3pines/icons/seller_activo.svg"),new y("Crafter","20","1","/pdes-tp-3pines/icons/crafter.svg","/pdes-tp-3pines/icons/crafter_activo.svg"),new y("Furnace","25","1","/pdes-tp-3pines/icons/furnace.svg","/pdes-tp-3pines/icons/furnace_activo.svg"),new y("Transporter","30","1","/pdes-tp-3pines/icons/transporter.svg","/pdes-tp-3pines/icons/transporter_activo.svg")];function A(e){return j.find(function(a){return a.nombre===e.acciones.accionSeleccionada})}var N=Object(f.a)(function(e,a){return{maquina:A(e)}})(function(e){var a=e.maquina;return c.a.createElement("div",{className:"detalle-contenedor"},c.a.createElement("div",null,c.a.createElement("div",{className:"titulo"},"Detalles"),c.a.createElement("div",{className:"detalle-contenido borde-redondeado"},a?c.a.createElement("div",null,c.a.createElement("div",{className:"nombre-maquina"},a.nombre),c.a.createElement("div",{className:"costo-maquina"},"Costo: ",c.a.createElement("span",null," $",a.costo," ")),c.a.createElement("div",{className:"frecuencia-maquina"},"Frecuencia: ",c.a.createElement("span",null," ",a.frecuencia,"/s "))):"")))}),q=(n(39),n(40),function(e){return"celda ".concat(e?"seleccionada":"")}),I=function(e){var a=e.seleccionada,n=e.seleccionar,t=e.maquina;return c.a.createElement("div",{className:q(a),onClick:n},t?c.a.createElement("img",{src:t.imagenInactivaUrl,alt:t.nombre,height:"100%",width:"100%"}):"")},k="SELECCIONAR_CELDA",x="AGREGAR_MAQUINA",C=function(e){return function(a,n){a({type:k,payload:e});var t=n().acciones.accionSeleccionada;j.map(function(e){return e.nombre}).includes(t)&&a({type:x,payload:{celda:e,maquinaAAgregar:t}})}},U=Object(f.a)(function(e,a){return{seleccionada:a.celda.seleccionada,maquina:a.celda.maquina}},function(e,a){return{seleccionar:function(){return e(C(a.celda))}}})(I),S=function(e){return{gridTemplateColumns:"repeat(".concat(e.ancho,", ").concat(55,"px)"),gridTemplateRows:"repeat(".concat(e.alto,", ").concat(55,"px)"),width:"".concat(55*e.ancho,"px"),height:"".concat(55*e.alto,"px")}},_=Object(f.a)(function(e,a){return{alto:10,ancho:10,celdas:e.fabrica.celdas}},function(e,a){return{}})(function(e){return c.a.createElement("div",{className:"fabrica-contenedor",style:S(e)},e.celdas.map(function(e,a){return c.a.createElement(U,{key:a,celda:e})}))}),R=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-contenedor"},c.a.createElement(E,{maquinas:j,acciones:O}),c.a.createElement(_,{id:"fabrica"}),c.a.createElement(N,{id:"detalle"}))}}]),a}(t.Component),M=n(3),D=n(25),T=n(7),L={accionSeleccionada:""};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0,n=a.type,t=a.payload;switch(n){case v:return e.accionSeleccionada===t?Object(T.a)({},e,{accionSeleccionada:""}):Object(T.a)({},e,{accionSeleccionada:t});default:return e}},B=n(20),F=function(){function e(a,n){Object(s.a)(this,e),this.x=a,this.y=n,this.seleccionada=!1,this.maquina=null}return Object(l.a)(e,[{key:"seleccionar",value:function(){this.seleccionada=!0}},{key:"deseleccionar",value:function(){this.seleccionada=!1}},{key:"esIgualA",value:function(e){return this.x===e.x&&this.y===e.y}},{key:"asignarMaquina",value:function(e){this.maquina=e}}]),e}(),G={celdas:function(e,a){return Array.from(Array(e*a)).map(function(n,t){var c=t%e;return new F(c,(t-c)/a)}).sort(function(e,a){return e.x===a.x?e.y-a.y:e.x-a.x})}(10,10)};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0,n=a.type,t=a.payload;switch(n){case k:var c=Object(B.a)(e.celdas).map(function(e){return e.esIgualA(t)?e.seleccionar():e.deseleccionar(),e});return Object(T.a)({},e,{celdas:c});case x:var i=j.find(function(e){return e.nombre===t.maquinaAAgregar}),r=Object(B.a)(e.celdas).map(function(e){return e.esIgualA(t.celda)&&e.asignarMaquina(i),e});return Object(T.a)({},e,{celdas:r});default:return e}},$=n(26),Q=Object(M.combineReducers)({fabrica:J,acciones:W}),z=Object(M.createStore)(Q,Object($.composeWithDevTools)(Object(M.applyMiddleware)(D.a))),H=c.a.createElement(o.a,{store:z},c.a.createElement(R,null));r.a.render(H,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.c803b4c4.chunk.js.map