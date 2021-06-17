console.log("primer script");
/*DOM- seleccionar elementos
let container=document.querySelector(".container");
console.log(container);
let table=document.querySelector(".table");
console.log(table);
//seleccionar mas de un elemento
let links=document.querySelectorAll("a");//devuelve una lista
links.forEach(function(lnk) {
    console.log(lnk);
});
*/
//eventos
let cells=document.querySelectorAll("td");
cells.forEach(function(td) {
    td.addEventListener("click",function(){console.log(this)});
});

let links=document.querySelectorAll(".close");
links.forEach(function(lnk) {
    lnk.addEventListener("click",function(ev)
    {
     ev.preventDefault();
     let contn=document.querySelector(".content");
     contn.classList.remove("fadeInDown");
     contn.classList.remove("animated");
     contn.classList.add("fadeInUp");
     contn.classList.add("animated");
     setTimeout(function()
     {
         window.history.back();
       // location.href="../design";
     },600);
     
     return false; //deshabilita la función de click sobre las etiquetas de clase .close
    });
});
 
/* quita clases
let icons=document.querySelectorAll("i");
icons.forEach(function(icn) {
 icn.classList.remove("fa-star"); 
 

});
*/


