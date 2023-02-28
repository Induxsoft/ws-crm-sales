
                
$(document).ready(function(){
        function mostrarMensaje() {
                    var popup = document.getElementById("myPopup");
                    popup.classList.toggle("show");
                }

                function mostrarMensajeprueba() {
                    var popup = document.getElementById("prueba");
                    popup.classList.toggle("show");
                }


            
                const divItem = document.getElementById("form");
                const divItem2 = document.getElementById("head");
                const divItem3 = document.getElementById("icon-mas");
                const divItem4 = document.getElementById("icon-mas1");
                const divItem5 = document.getElementById("btn-delete");

                 divItem2.addEventListener("click",(e)=>{
                    divClick()
                })
                 divItem.addEventListener("click",(e)=>{
                    divClick()
                });

                 // var newstage=document.querySelector(".nuevo");
                 // if(newstage)
                 //    newstage.addEventListener("click",function(){
                 //        // newstage();
                 //        alert()
                 //    });
               
                 $(".nuevo").click(function(){
                    newstage(this);
                 })
                function divClick(){
                    divItem.style.background="#F5F5F6"
                    divItem2.style.background="#F5F5F6"
                    divItem2.style.opacity="5"
                    divItem.style.opacity="5"
                    divItem3.style.visibility="visible"
                    divItem4.style.visibility="visible"
                    divItem5.style.visibility="visible"

                }


                        function addElement(){
                           
                            var newDiv = document.createElement("div");
                            var newContent = document.createTextNode("Hola!¿Qué tal?");
                            newDiv.appendChild(newContent); 

                            
                            var currentDiv = document.getElementById("div1");
                            document.body.insertBefore(newDiv, currentDiv);
                        }


                //clonar
                  var orden=1;
                function clonarNodos()
                {
                    var id=document.getElementById("enlaces");
                    var nuevos=id.cloneNode(true);
                    nuevos.style.id="enlaces"+orden;
                    // nuevos.style.background="#461c5"
                    orden++;
                    
                    id=document.getElementById("conten-padre");
                    
                    //id.style.position="absolute"
                    // id.style.left="19%"
                    // id.style.bottom="25px"
                   
                    id.appendChild(nuevos);
                }

                
                

               
                
});

 function newstage(e)
{
    var t=e;
    
    var list_stages=document.getElementById("conten-padre");
    if(list_stages)
       list_stages.innerHTML+=stage(); 
   if(e)
   {
        document.querySelector(".nuevo").remove();
        list_stages.appendChild(t);
   }
}
function stage(data=null)
{
                    if(data==null)
                        data={
                            ref_pipeline:idpipeline.value,
                            sequence:0,
                            name:"New Stage",
                            probability:0,
                            stuck_in_days:false
                        };
                    var uuid="stg"+controller.guid();
                    return `<div class="container-pruebas ${uuid}" id="enlaces">
                    <div class="head" draggable="true" id="head">
                    <icons class="icon-mas" id="icon-mas" onclick="javascript:clonarNodos()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                        </svg>
                    </icons>
                    <h3 class="navegacion">${data.name}</h3>
                    <icons class="icon-head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                            <path fill2-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z"></path>
                        </svg>
                    </icons>
                    <icons class="icon-head">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"></path>
                        </svg>
                    </icons>
                    <icons class="icon-mas1" id="icon-mas1" onclick="javascript:clonarNodos()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                        </svg>
                    </icons>
                </div>
                <div class="container1">
                    <div class="grid-item grid-item-2  active" id="form">
                        <div class="letras">
                            <label dkli-for="" class="label">Nombre</label>
                            <br>
                            <input class="inputs" type="text" placeholder="Cualificado" value="${data.name}"><br><br><br>
                            <label for="" class="label">Probabilidad</label>
                            <icons class="ico popup">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onclick="mostrarMensajeprueba()" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                                </svg>
                                <span class="popuptext" id="prueba">
                                    <h4>Probabilidad de ganar</h4>
                                    Este valor representa la confianza que tienes en ganar el trato para la fecha de cierre prevista. La probabilidad puede asignarse por trato o etapa del embudo, y se utiliza para planificar tus ingresos futuros. 
                                                La probabilidad por defecto para cada etapa es del 100%, pero puedes asignar cualquier valor entre 0% y 100%.
                                </span>
                            </icons>
                            <br>
                            <input class="inputs" type="text" placeholder="100" value="${data.probability}"><br><br>
                        </div>
                        <label dkli-for="" class="label">Estancado en (dias)</label>
                        <icons class="ico popup">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="icon1" onclick="mostrarMensaje()" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                            </svg>
                            <span class="popuptext" id="myPopup">
                                <h4>Función de estancamiento</h4>
                                                    El estancamiento de tratos te alerta de tratos inactivos coloreándolos en rojo.
                                                    Define aquí el período de estancamiento.
                            </span>
                        </icons>
                        <label class="switch2">
                            <input type="checkbox" id="togBtn2" ${data.stuck_in_days==true ? "checked":""}>
                            <div class="slider2 round2">
                                <span class="on"></span>
                                <span class="off"></span>
                            </div>
                        </label>
                        <div class="botn-delete"><hr>
                            <button class="delete" id="btn-delete" onclick="remove('${uuid}')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                </svg>Eliminar etapa
                            </button>
                        </div>
                    </div>
                </div>
            </div>`;
                }
//eliminar 
function remove(uuid)
 {
    if(uuid=="")
        return;

     if (confirm("¿Estas seguro de eliminar?")) 
     {
         var eDiv=document.getElementById("conten-padre");
         var id=`.${uuid}`;
         var stage=document.querySelector(id);
         if(stage)
            eDiv.removeChild(stage);
    }
 
}
                
