"use strict";(self.webpackChunkMarvelDEX=self.webpackChunkMarvelDEX||[]).push([[378],{4378:(Vs,it,c)=>{c.r(it),c.d(it,{AllModule:()=>Zs});var x=c(9808),M=c(1083),nt=c(520),C=c(3075),Ht=c(5756),i=c(5e3);var H=c(4004);let T=(()=>{class e{constructor(t){this.http=t,this.character=[],this.characterSelected=[],this.PUBLIC_KEY="adcff5461c8d983cd5ebdb0d930bb8c0",this.HASH="7318fdb3355d05a8a7fcc8c8f0440e47",this.URL_API=`https://gateway.marvel.com:443/v1/public/characters?&limit=100&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`}getAllCharacters(){return console.log(this.URL_API),this.http.get(this.URL_API).pipe((0,H.U)(t=>t))}findCharacter(t){const n=`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${t}&limit=100&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;return console.log(n),this.http.get(n).pipe((0,H.U)(l=>l))}addCard(t){this.character=[...this.character,t]}addCardChar(t){this.characterSelected=[...this.characterSelected,t]}getCharById(t){return this.http.get(`https://gateway.marvel.com:443/v1/public/characters/${t}?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe((0,H.U)(l=>l))}deleteCharacter(t){let n=this.character.findIndex(l=>l.id==t);this.character.splice(n,1),console.log(this.character)}deleteCharacterChar(t){let n=this.characterSelected.findIndex(l=>l.id==t);this.characterSelected.splice(n,1),console.log(this.characterSelected)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(nt.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=c(8966),w=c(9224),Y=c(7423);let Vt=(()=>{class e{constructor(t,n){this.dialogRef=t,this.data=n}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(I.so),i.Y36(I.WI))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-character-detail"]],decls:21,vars:6,consts:[[1,"example-card","contenido"],[1,"header"],[1,"titulo"],[1,"subtitulo"],[1,"crop-image"],["mat-card-image","",3,"src","alt"],[1,"descripcion"],["mat-dialog-actions",""],["mat-raised-button","",3,"click"]],template:function(t,n){1&t&&(i.TgZ(0,"mat-card",0),i.TgZ(1,"div",1),i.TgZ(2,"mat-card-title",2),i._uU(3),i.qZA(),i.TgZ(4,"mat-card-subtitle",3),i._uU(5),i.qZA(),i.qZA(),i.TgZ(6,"div",4),i._UZ(7,"img",5),i.qZA(),i.TgZ(8,"mat-card-content",6),i.TgZ(9,"h4"),i._uU(10,"Descripci\xf3n."),i.qZA(),i.TgZ(11,"p"),i._uU(12),i.qZA(),i.qZA(),i.TgZ(13,"mat-card-content",6),i.TgZ(14,"p"),i._uU(15,"N\xfamero de comics: "),i.TgZ(16,"span"),i._uU(17),i.qZA(),i.qZA(),i.qZA(),i.TgZ(18,"div",7),i.TgZ(19,"button",8),i.NdJ("click",function(){return n.onNoClick()}),i._uU(20,"Cerrar"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Oqu(n.data.nombre),i.xp6(2),i.Oqu(n.data.id),i.xp6(2),i.s9C("alt",n.data.nombre),i.Q6J("src",n.data.img,i.LSH),i.xp6(5),i.hij(" ",n.data.descripcion," "),i.xp6(5),i.hij(" ",n.data.noComics," "))},directives:[w.a8,w.n5,w.$j,w.G2,w.dn,I.H8,Y.lW],styles:["@keyframes agrandar{0%{top:0px}to{top:-10px}}.contenido[_ngcontent-%COMP%]{border-radius:10px;background-color:#011627;align-items:center;text-align:center;margin-bottom:10px;align-items:flex-end;min-height:430px;overflow-y:auto}.contenido[_ngcontent-%COMP%]{transition:top .8s linear .2s}.header[_ngcontent-%COMP%]{margin:0 auto;text-align:center;align-items:center}  .mat-card-header-text{margin:0 auto}.titulo[_ngcontent-%COMP%]{color:#e71d36;font-family:Montserrat Alternates,sans-serif;font-size:25px}.subtitulo[_ngcontent-%COMP%]{color:#fff;font-size:18px;padding-top:3px}.descripcion[_ngcontent-%COMP%]{padding-top:10px;color:#fff;font-family:Montserrat Alternates,sans-serif}.crop-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:320px;display:block;margin:auto;object-fit:cover;border-radius:10px}"]}),e})(),Ut=(()=>{class e{constructor(t,n){this.charactersService=t,this.dialog=n,this.nombre="",this.id="",this.img="",this.descripcion="",this.comics=""}ngOnInit(){}deleteChar(t){console.log(t),this.charactersService.deleteCharacterChar(t)}openDialog(t){console.log(this.comics.available),this.dialog.open(Vt,{width:"500px",data:{nombre:this.nombre,id:this.id,img:this.img,descripcion:this.descripcion,noComics:this.comics.available}}).afterClosed().subscribe(l=>{console.log("The dialog was closed")})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(T),i.Y36(I.uw))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-character"]],inputs:{nombre:"nombre",id:"id",img:"img",descripcion:"descripcion",comics:"comics"},decls:13,vars:4,consts:[[1,"example-card","contenido"],[1,"header"],[1,"titulo"],[1,"subtitulo"],[1,"crop-image"],["mat-card-image","",3,"src","alt"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,n){1&t&&(i.TgZ(0,"mat-card",0),i.TgZ(1,"div",1),i.TgZ(2,"mat-card-title",2),i._uU(3),i.qZA(),i.TgZ(4,"mat-card-subtitle",3),i._uU(5),i.qZA(),i.qZA(),i.TgZ(6,"div",4),i._UZ(7,"img",5),i.qZA(),i.TgZ(8,"mat-card-actions"),i.TgZ(9,"button",6),i.NdJ("click",function(){return n.openDialog(n.id)}),i._uU(10,"Ver detalle"),i.qZA(),i.TgZ(11,"button",7),i.NdJ("click",function(){return n.deleteChar(n.id)}),i._uU(12,"Eliminar"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Oqu(n.nombre),i.xp6(2),i.Oqu(n.id),i.xp6(2),i.s9C("alt",n.nombre),i.Q6J("src",n.img,i.LSH))},directives:[w.a8,w.n5,w.$j,w.G2,w.hq,Y.lW],styles:["@keyframes agrandar{0%{top:0px}to{top:-10px}}.contenido[_ngcontent-%COMP%]{border-radius:10px;background-color:#011627;align-items:center;text-align:center;margin-bottom:10px;align-items:flex-end;min-height:430px}.contenido[_ngcontent-%COMP%]:hover{animation-name:agrandar;animation-duration:.25s;animation-fill-mode:forwards}.contenido[_ngcontent-%COMP%]{transition:top .8s linear .2s}.header[_ngcontent-%COMP%]{margin:0 auto;text-align:center;align-items:center}  .mat-card-header-text{margin:0 auto}.titulo[_ngcontent-%COMP%]{color:#e71d36;font-family:Montserrat Alternates,sans-serif;font-size:25px}.subtitulo[_ngcontent-%COMP%]{color:#fff;font-size:18px;padding-top:3px}.descripcion[_ngcontent-%COMP%]{padding-top:10px;color:#fff;font-family:Montserrat Alternates,sans-serif}.crop-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:320px;display:block;margin:auto;object-fit:cover;border-radius:10px}"]}),e})();var lt=c(3251);function Qt(e,s){if(1&e&&i._UZ(0,"app-character",13),2&e){const t=s.$implicit;i.hYB("img","",t.thumbnail.path,".",t.thumbnail.extension,""),i.Q6J("nombre",t.name)("id",t.id)("descripcion",t.description)("comics",t.comics)}}let Nt=(()=>{class e{constructor(t){this.charactersService=t}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(T))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-marvel-permanent"]],decls:19,vars:1,consts:[[1,"container--grid"],[1,"marvelDex"],[1,"contenedor--marvelDex--grid"],[1,"titulo"],["src","assets/img/marvel.png","alt","Marvel logo",1,"imagen--titulo"],[1,"dex"],[1,"sub"],[1,"contenedor--card"],[3,"nombre","id","img","descripcion","comics",4,"ngFor","ngForOf"],[1,"content"],["mat-tab-nav-bar","",1,"nav"],["mat-tab-link","","routerLink","/marvelDex/search","routerLinkActive","active",1,"enlace"],["mat-tab-link","","routerLink","/marvelDex/save","routerLinkActive","active",1,"enlace"],[3,"nombre","id","img","descripcion","comics"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i._UZ(4,"img",4),i.TgZ(5,"span",5),i._uU(6,"DEX"),i.qZA(),i.qZA(),i.TgZ(7,"div",6),i.TgZ(8,"h2"),i._uU(9,"Tus personajes de Marvel conocidos:"),i.qZA(),i.qZA(),i.TgZ(10,"div",7),i.YNc(11,Qt,1,6,"app-character",8),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"div",9),i.TgZ(13,"nav",10),i.TgZ(14,"a",11),i._uU(15,"Busqueda"),i.qZA(),i.TgZ(16,"a",12),i._uU(17,"Guardados"),i.qZA(),i.qZA(),i._UZ(18,"router-outlet"),i.qZA(),i.qZA()),2&t&&(i.xp6(11),i.Q6J("ngForOf",n.charactersService.characterSelected))},directives:[x.sg,Ut,lt.BU,M.yS,lt.Nj,M.Od,M.lC],styles:[".container--grid{display:grid;grid-template-columns:repeat(3,1fr);width:100%;background-image:url(fondo.4f0f059d0d4ddf86.jpg);background-size:auto;width:auto}.content{grid-column:2/4;margin:0 30px;height:auto}.marvelDex{background-color:#000;margin-top:50px;display:grid;border-radius:20px;margin-left:20px;height:125vh;overflow:hidden;overflow-y:auto}.contenedor--marvelDex--grid{grid-template-columns:repeat(2,1fr)}.titulo{display:flex;justify-content:center;align-items:center}.sub{margin:0 auto;color:#fff;text-align:center}.imagen--titulo{width:150px}.dex{font-weight:700;font-size:35px;color:#fff}.nav{min-width:25px!important;color:#fff;font-weight:700;border-top-left-radius:10px;border-top-right-radius:10px;margin:0 auto}.active{min-width:25px!important;background-color:#fff;color:#000;font-weight:700;opacity:1!important}.mat-tab-link.mat-tab-link-active{min-width:25 px!important;background-color:#fff;color:#000;font-weight:700;opacity:1}.mat-tab-links{justify-content:center}.enlace{border-top-left-radius:20px;border-top-right-radius:20px;background-color:#000;color:#fff}\n"],encapsulation:2}),e})();var P=c(9062),d=c(4999),q=c(7322),rt=c(7531);function zt(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," ID. "),i.qZA())}function Wt(e,s){if(1&e&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.hij(" ",t.position," ")}}function Kt(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Imagen "),i.qZA())}function Jt(e,s){if(1&e&&(i.TgZ(0,"td",22),i._UZ(1,"img",23),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.s9C("src",t.image,i.LSH),i.s9C("alt",t.name)}}function Xt(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Nombre "),i.qZA())}function te(e,s){if(1&e&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.hij(" ",t.name," ")}}function ee(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Actions "),i.qZA())}function ie(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"td",24),i.TgZ(1,"button",25),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw().addCharacter(r)}),i.O4$(),i.TgZ(2,"svg",26),i._UZ(3,"path",6),i._UZ(4,"line",27),i._UZ(5,"line",28),i.qZA(),i.qZA(),i.kcU(),i.TgZ(6,"button",29),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw().deleteProduct(r.position)}),i.O4$(),i.TgZ(7,"svg",30),i._UZ(8,"path",6),i._UZ(9,"line",28),i.qZA(),i.qZA(),i.qZA()}}function ne(e,s){1&e&&i._UZ(0,"tr",31)}function se(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"tr",32),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw().getRow(r)}),i.qZA()}}function le(e,s){1&e&&(i.TgZ(0,"tr",33),i.TgZ(1,"td",34),i._uU(2,"No data matching the filter"),i.qZA(),i.qZA())}const re=function(){return[6,10,100]};function oe(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," ID. "),i.qZA())}function de(e,s){if(1&e&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.hij(" ",t.position," ")}}function ge(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Imagen "),i.qZA())}function ce(e,s){if(1&e&&(i.TgZ(0,"td",22),i._UZ(1,"img",23),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.s9C("src",t.image,i.LSH),i.s9C("alt",t.name)}}function ue(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Nombre "),i.qZA())}function fe(e,s){if(1&e&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&e){const t=s.$implicit;i.xp6(1),i.hij(" ",t.name," ")}}function me(e,s){1&e&&(i.TgZ(0,"th",21),i._uU(1," Actions "),i.qZA())}function xe(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"td",24),i.TgZ(1,"button",25),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw().saveChar(r)}),i._uU(2,"Guardar"),i.qZA(),i.qZA()}}function he(e,s){1&e&&i._UZ(0,"tr",26)}function pe(e,s){if(1&e){const t=i.EpF();i.TgZ(0,"tr",27),i.NdJ("click",function(){const r=i.CHM(t).$implicit;return i.oxw().getRow(r)}),i.qZA()}}function ye(e,s){if(1&e&&(i.TgZ(0,"tr",28),i.TgZ(1,"td",29),i._uU(2),i.qZA(),i.qZA()),2&e){i.oxw();const t=i.MAs(6);i.xp6(2),i.hij('No data matching the filter "',t.value,'"')}}const ve=function(){return[6,10,100]},Ae=[{path:"",component:Nt,children:[{path:"save",component:(()=>{class e{constructor(t){this.charactersService=t,this.filter=new C.NI(""),this.displayedColumns=["position","image","name","actions"],this.data=[],this.dataSource=new d.by(this.data),this.marvelCharacters=[],this.getSaves()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){}applyFilter(t){const n=this.filter.value;console.log(n),this.dataSource.filter=n.trim().toLowerCase()}getSaves(){let t;this.data=[],this.marvelCharacters=this.charactersService.character,0==this.marvelCharacters.length&&(this.dataSource=new d.by([]));for(let n of this.marvelCharacters)t={position:n.id,image:`${n.thumbnail.path}.${n.thumbnail.extension}`,name:n.name},this.data.push(t),this.dataSource=new d.by(this.data),this.dataSource.paginator=this.paginator}getRow(t){console.log(this.charactersService.character)}addCharacter(t){let n=this.marvelCharacters.findIndex(r=>r.id==t.position);this.charactersService.characterSelected.find(r=>r.id==t.position)||this.charactersService.addCardChar(this.marvelCharacters[n])}deleteProduct(t){this.charactersService.deleteCharacter(t),this.getSaves(),console.log(this.charactersService.character)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(T))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-guardados"]],viewQuery:function(t,n){if(1&t&&i.Gf(P.NW,7),2&t){let l;i.iGM(l=i.CRH())&&(n.paginator=l.first)}},decls:29,vars:6,consts:[[1,"container--busqueda"],[1,"input"],["matInput","",3,"formControl"],["input",""],["mat-raised-button","",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24","stroke-width","3","stroke","#2c3e50","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-search"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["cx","10","cy","10","r","7"],["x1","21","y1","21","x2","15","y2","15"],["mat-table","",1,"tabla",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","image"],["matColumnDef","name"],["matColumnDef","actions"],["mat-cell","","class","botones--accion",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["width","100","height","100",3,"src","alt"],["mat-cell","",1,"botones--accion"],["mat-raised-button","","color","primary",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24","stroke-width","3","stroke","#2c3e50","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-plus"],["x1","12","y1","5","x2","12","y2","19"],["x1","5","y1","12","x2","19","y2","12"],["mat-raised-button","","color","warn",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24","stroke-width","3","stroke","#2c3e50","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-minus"],["mat-header-row",""],["mat-row","",3,"click"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"mat-form-field"),i.TgZ(3,"mat-label"),i._uU(4,"Filter"),i.qZA(),i._UZ(5,"input",2,3),i.qZA(),i.TgZ(7,"button",4),i.NdJ("click",function(r){return n.applyFilter(r)}),i.O4$(),i.TgZ(8,"svg",5),i._UZ(9,"path",6),i._UZ(10,"circle",7),i._UZ(11,"line",8),i.qZA(),i.qZA(),i.qZA(),i.kcU(),i.TgZ(12,"table",9),i.ynx(13,10),i.YNc(14,zt,2,0,"th",11),i.YNc(15,Wt,2,1,"td",12),i.BQk(),i.ynx(16,13),i.YNc(17,Kt,2,0,"th",11),i.YNc(18,Jt,2,2,"td",12),i.BQk(),i.ynx(19,14),i.YNc(20,Xt,2,0,"th",11),i.YNc(21,te,2,1,"td",12),i.BQk(),i.ynx(22,15),i.YNc(23,ee,2,0,"th",11),i.YNc(24,ie,10,0,"td",16),i.BQk(),i.YNc(25,ne,1,0,"tr",17),i.YNc(26,se,1,0,"tr",18),i.YNc(27,le,3,0,"tr",19),i.qZA(),i._UZ(28,"mat-paginator",20),i.qZA()),2&t&&(i.xp6(5),i.Q6J("formControl",n.filter),i.xp6(7),i.Q6J("dataSource",n.dataSource),i.xp6(13),i.Q6J("matHeaderRowDef",n.displayedColumns),i.xp6(1),i.Q6J("matRowDefColumns",n.displayedColumns),i.xp6(2),i.Q6J("pageSizeOptions",i.DdM(5,re)))},directives:[q.KE,q.hX,rt.Nt,C.Fj,C.JJ,C.oH,Y.lW,d.BZ,d.w1,d.fO,d.ge,d.Dz,d.ev,d.as,d.XQ,d.nj,d.Gk,d.Ee,P.NW],styles:[".container--busqueda[_ngcontent-%COMP%]{width:100%;text-align:center;background-color:#000;border-radius:20px}.tabla[_ngcontent-%COMP%]{border-radius:20px}table[_ngcontent-%COMP%]{min-width:100%;margin:auto;text-align:center}.mat-header-cell[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:center;font-size:15px}.mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#000}.mat-row[_ngcontent-%COMP%]:nth-child(even)   .mat-cell[_ngcontent-%COMP%]{color:#fcfcfc}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#000}.mat-row[_ngcontent-%COMP%]:nth-child(odd)   .mat-cell[_ngcontent-%COMP%]{color:#fcfcfc}.mat-cell[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}  .mat-paginator{width:80%;margin:auto}.mat-form-field[_ngcontent-%COMP%]{font-size:13px;width:20%;margin-bottom:5px;padding:10px}  .mat-form-field-label{color:#fcfcfc!important}  .mat-form-field-underline{background-color:#fcfcfc!important}input[_ngcontent-%COMP%]{color:#fcfcfc!important}"]}),e})()},{path:"search",component:(()=>{class e{constructor(t){this.charactersService=t,this.filter=new C.NI(""),this.displayedColumns=["position","image","name","actions"],this.data=[],this.dataSource=new d.by(this.data),this.marvelCharacters=[]}ngOnInit(){this.getCharacters()}getCharacters(){let t;this.charactersService.getAllCharacters().subscribe(n=>{this.marvelCharacters=n.data.results;for(let l of this.marvelCharacters)t={position:l.id,image:`${l.thumbnail.path}.${l.thumbnail.extension}`,name:l.name},this.data.push(t),this.dataSource=new d.by(this.data),this.dataSource.paginator=this.paginator})}applyFilter(t){const n=this.filter.value;console.log(n),this.getCharacter(n)}getCharacter(t){let n;this.data=[],this.charactersService.findCharacter(t).subscribe(l=>{console.log(l.data.results),this.marvelCharacters=l.data.results,this.dataSource=new d.by([]),console.log(this.marvelCharacters),0==this.marvelCharacters.length&&this.getById(t);for(let r of this.marvelCharacters)n={position:r.id,image:`${r.thumbnail.path}.${r.thumbnail.extension}`,name:r.name},this.data.push(n),this.dataSource=new d.by(this.data),this.dataSource.paginator=this.paginator})}getRow(t){}getById(t){let n;this.data=[],this.charactersService.getCharById(t).subscribe(l=>{this.marvelCharacters=l.data.results,this.dataSource=new d.by([]),console.log(this.marvelCharacters);for(let r of this.marvelCharacters)n={position:r.id,image:`${r.thumbnail.path}.${r.thumbnail.extension}`,name:r.name},this.data.push(n),this.dataSource=new d.by(this.data),this.dataSource.paginator=this.paginator})}saveChar(t){let n=this.marvelCharacters.findIndex(r=>r.id==t.position);this.charactersService.character.find(r=>r.id==t.position)||(this.charactersService.addCard(this.marvelCharacters[n]),console.log(this.charactersService.character))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(T))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-busqueda"]],viewQuery:function(t,n){if(1&t&&i.Gf(P.NW,7),2&t){let l;i.iGM(l=i.CRH())&&(n.paginator=l.first)}},decls:29,vars:6,consts:[[1,"container--busqueda"],[1,"input"],["matInput","",3,"formControl"],["input",""],["mat-raised-button","",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","36","height","36","viewBox","0 0 24 24","stroke-width","3","stroke","#2c3e50","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-search"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["cx","10","cy","10","r","7"],["x1","21","y1","21","x2","15","y2","15"],["mat-table","",1,"tabla--data",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","image"],["matColumnDef","name"],["matColumnDef","actions"],["mat-cell","","class","contenedor-botones",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["width","100","height","100",3,"src","alt"],["mat-cell","",1,"contenedor-botones"],["mat-raised-button","","color","primary",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"mat-form-field"),i.TgZ(3,"mat-label"),i._uU(4,"By ID or Name"),i.qZA(),i._UZ(5,"input",2,3),i.qZA(),i.TgZ(7,"button",4),i.NdJ("click",function(r){return n.applyFilter(r)}),i.O4$(),i.TgZ(8,"svg",5),i._UZ(9,"path",6),i._UZ(10,"circle",7),i._UZ(11,"line",8),i.qZA(),i.qZA(),i.qZA(),i.kcU(),i.TgZ(12,"table",9),i.ynx(13,10),i.YNc(14,oe,2,0,"th",11),i.YNc(15,de,2,1,"td",12),i.BQk(),i.ynx(16,13),i.YNc(17,ge,2,0,"th",11),i.YNc(18,ce,2,2,"td",12),i.BQk(),i.ynx(19,14),i.YNc(20,ue,2,0,"th",11),i.YNc(21,fe,2,1,"td",12),i.BQk(),i.ynx(22,15),i.YNc(23,me,2,0,"th",11),i.YNc(24,xe,3,0,"td",16),i.BQk(),i.YNc(25,he,1,0,"tr",17),i.YNc(26,pe,1,0,"tr",18),i.YNc(27,ye,3,1,"tr",19),i.qZA(),i._UZ(28,"mat-paginator",20),i.qZA()),2&t&&(i.xp6(5),i.Q6J("formControl",n.filter),i.xp6(7),i.Q6J("dataSource",n.dataSource),i.xp6(13),i.Q6J("matHeaderRowDef",n.displayedColumns),i.xp6(1),i.Q6J("matRowDefColumns",n.displayedColumns),i.xp6(2),i.Q6J("pageSizeOptions",i.DdM(5,ve)))},directives:[q.KE,q.hX,rt.Nt,C.Fj,C.JJ,C.oH,Y.lW,d.BZ,d.w1,d.fO,d.ge,d.Dz,d.ev,d.as,d.XQ,d.nj,d.Gk,d.Ee,P.NW],styles:[".container--busqueda[_ngcontent-%COMP%]{width:100%;text-align:center;background-color:#000;border-radius:20px}table[_ngcontent-%COMP%]{min-width:100%;margin:auto;text-align:center}.mat-header-cell[_ngcontent-%COMP%]{color:#000;font-weight:700;text-align:center;font-size:15px}.mat-row[_ngcontent-%COMP%]:nth-child(even){background-color:#000}.mat-row[_ngcontent-%COMP%]:nth-child(even)   .mat-cell[_ngcontent-%COMP%]{color:#fcfcfc}.mat-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#000}.mat-row[_ngcontent-%COMP%]:nth-child(odd)   .mat-cell[_ngcontent-%COMP%]{color:#fcfcfc}.mat-cell[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}  .mat-paginator{width:80%;margin:auto}.mat-form-field[_ngcontent-%COMP%]{font-size:13px;width:20%;margin-bottom:5px;padding:10px}  .mat-form-field-label{color:#fcfcfc!important}  .mat-form-field-underline{background-color:#fcfcfc!important}input[_ngcontent-%COMP%]{color:#fcfcfc!important}.boton--comics[_ngcontent-%COMP%]{margin-left:5px}.contenedor-botones[_ngcontent-%COMP%]{margin:auto 0}"]}),e})()}]}];let Ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[M.Bz.forChild(Ae)],M.Bz]}),e})();c(1135),c(8306),c(6451),c(7579),c(9300),c(8505);const Me={provide:i.tb,useFactory:function be(e,s){return()=>{if((0,x.NF)(s)){const t=Array.from(e.querySelectorAll(`[class*=${ct}]`)),n=/\bflex-layout-.+?\b/g;t.forEach(l=>{l.classList.contains(`${ct}ssr`)&&l.parentNode?l.parentNode.removeChild(l):l.className.replace(n,"")})}}},deps:[x.K0,i.Lbi],multi:!0},ct="flex-layout-";let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[Me]}),e})();const z={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[],multiplier:void 0,defaultUnit:"px",detectLayoutDisplay:!1},A=new i.OlP("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>z}),G=new i.OlP("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),W=new i.OlP("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});c(3191),c(2722),c(2313);let Lt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[N]]}),e})();var tt=c(226);let Bt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[N,tt.vT]]}),e})(),jt=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[N]]}),e})(),qs=(()=>{class e{constructor(t,n){(0,x.PM)(n)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,n=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:A,useValue:Object.assign(Object.assign({},z),t)},{provide:W,useValue:n,multi:!0},{provide:G,useValue:!0}]:[{provide:A,useValue:Object.assign(Object.assign({},z),t)},{provide:W,useValue:n,multi:!0}]}}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(G),i.LFG(i.Lbi))},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[Bt,Lt,jt],Bt,Lt,jt]}),e})(),Zs=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[x.ez,nt.JF,qs,Ce,M.Bz,C.u5,C.UX,Ht.q]]}),e})()}}]);