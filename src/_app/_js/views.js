function mostrarMensaje(data) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// function mostrarMensajeprueba() {
//     var popup = document.getElementById("prueba");
//     popup.classList.toggle("show");
// }



     
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
        // for (var i = 0; i<data.length; i++) {
        //     var d=data[i];
            for(var j=0;j<data.stages.length;j++)
            {
                var stg=data.stages[j];
                stages+=stage(stg);
            }
            
        // }

        var sel=document.querySelector("#conten-padre");
        if(sel)
            sel.innerHTML=stages;
            views.module_newstage();
    },

    show_modal:function(idmodal)
	{
		var element=document.querySelector("#"+idmodal);

		if(element)
			element.classList.remove("hidde_control");
	},
    close_modal:function(idmodal){
        var close=document.querySelector("#"+idmodal)

        if(close)
        {
            close.classList.add("hidde_control");
        }

    },
    module_newstage()
    {
        if(list_stages && module_newetapa)
            list_stages.appendChild(module_newetapa);
       
    },
     edit_view:function(data){
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
    disable_enable_stages:function(enable=false)
    {
        if(list_stages)
        {
            for (var i =0; i < list_stages.childNodes.length; i++) {
                var stage=list_stages.childNodes[i];
                if(stage.id!="" && stage.id!="new")
                {
                    var elements=document.querySelectorAll(`#${stage.id} input`);
                    var togle=document.querySelector(`#${stage.id} .switch2`);

                    if(enable)
                        togle.classList.remove("p-event-n");
                    else
                        togle.classList.add("p-event-n");

                    for (var j = 0; j<elements.length; j++) {
                        var inp=elements[j];
                        if(enable)
                            inp.classList.remove("p-event-n");
                        else
                            inp.classList.add("p-event-n");
                    }
                    
                }
            }
        }
    },
    edit_stage:function(id,btn=null,cancel=false)
    {
        var elements=document.querySelectorAll(`#${id} input`);
        var togle=document.querySelector(`#${id} .switch2`);
        if(togle)
            togle.classList.remove("p-event-n");

        var btn_save=document.querySelector(`#${id} #stage-save`);
        var btn_cancel=document.querySelector(`#${id} #stage-cancel`);
        var btn_edit=document.querySelector(`#${id} #stage-edit`);

        if(elements)
        {
             for (var j = 0; j<elements.length; j++) 
             {
                var inp=elements[j];
                if(!cancel)
                    inp.classList.remove("p-event-n");
                else
                    inp.classList.add("p-event-n");
            }
            if(btn!=null)btn.classList.add("hidde_control");
            if(btn_save && !cancel)btn_save.classList.remove("hidde_control");
            if(btn_cancel && !cancel)btn_cancel.classList.remove("hidde_control");
            if(cancel)
            {
                if(btn_save)btn_save.classList.add("hidde_control");
                if(btn_cancel)btn_cancel.classList.add("hidde_control");
                if(btn_edit)btn_edit.classList.remove("hidde_control");
            }
        }
    },
    delete_stage:function(id)
    {
        remove(id);
        views.view_new();
    },
    view_new:function(visible=true)
    {
        var newelm=document.querySelector("#new");
        if(newelm)
        {
            if(visible)newelm.classList.remove("hidde_control");
            else
                newelm.classList.add("hidde_control");
        }
    }
   

}