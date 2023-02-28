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


window.addEventListener("load", (event) => {
  views.init();
  
});


var views={
    module_newetapa:null,
    init:function()
    {
        module_newetapa=document.querySelector(".nuevo");
    },
    select:function(id,data)
    {
        var select="";
        for (var i = 0; i<data.length; i++) {
            var d=data[i];
             if(i==0)
                views.edit_view(d);
            select+=`<option value="${d.sys_pk}">${d.codigo ?? ""+"  "+d.name}</option>`;
        }

        var sel=document.querySelector(id);
        if(sel){
            sel.innerHTML=select;
        }
    },
    print_stages:function(data)
    {
        var stages="";
        for (var i = 0; i<data.length; i++) {
            var d=data[i];

            for(var j=0;j<d.stages.length;j++)
            {
                var stg=d.stages[j];
                stages+=stage(stg);
            }
            
        }

        var sel=document.querySelector("#conten-padre");
        if(sel)
            if(stages!=""){
                sel.innerHTML=stages;
                views.module_newstage();
            }
    },

    show_modal:function(idmodal)
	{
		var element=document.querySelector("#"+idmodal);
       console.log(element)

       // alert('mostrar')
		if(element)
			element.classList.remove("modal");
	},
    close_modal:function(idmodal){
        var close=document.querySelector("#"+idmodal)

        if(close)
        {
            close.classList.add("modal")
        }

    },
    module_newstage()
    {
        if(list_stages && module_newetapa)
            list_stages.appendChild(module_newetapa);
       
    },
     edit_view:function(data){
        console.log(data)
        var name = document.getElementById("txt_name");
        var sys_pk=document.getElementById("inpu_syspk")
        name.value=data.name;
        sys_pk.value=data.sys_pk;

    },
    clear_modal:function(){
        var name = document.getElementById("txt_name");
        var sys_pk=document.getElementById("inpu_syspk")
        name.value="";
        sys_pk.value="";

    },

   

}