function mostrarMensaje() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function mostrarMensajeprueba() {
    var popup = document.getElementById("prueba");
    popup.classList.toggle("show");
}



     
let form=document.getElementById("form");
if(form)
 form.addEventListener(
"fous",
function(event){
     event.target.style.background = "blue"
},
 true
);

if(form)
form.addEventListener(
 "blur",
 function(event){
    event.target.style.background = ""
 },
true
);

var views={
    select:function(id,data)
    {
        var select="";
        for (var i = 0; i<data.length; i++) {
            var d=data[i];
            select+=`<option value="${d.sys_pk}">${d.codigo ?? ""+"  "+d.name}</option>`;
        }

        var sel=document.querySelector(id);
        if(sel)
            sel.innerHTML=select;
    },
    print_stages:function(data)
    {
        var stages="";
        for (var i = 0; i<data.length; i++) {
            var d=data[i];
            stages+=`<option value="${d.sys_pk}">${d.codigo ?? ""+"  "+d.name}</option>`;
        }

        var sel=document.querySelector("#conten-padre");
        if(sel)
            sel.innerHTML=stages;
    }
}