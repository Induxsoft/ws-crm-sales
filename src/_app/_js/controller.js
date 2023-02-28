window.addEventListener("load", (event) => {
  controller.init();
  if(idpipeline)
    idpipeline.addEventListener("change",function(){
      controller.get_pipeline();
    });
});

var controller={
  idpipeline:null,list_stages:null,
  init:function()
  {
    idpipeline=document.querySelector("#pipelines");
    list_stages=document.getElementById("conten-padre");
  },
	get_pipelines:function(id,data) {
		var uri=`${url}crm/sales/pipeline/`;
        model.invoke_service(uri,null,function(data) {
          views.select("#pipelines",data);
        },
        function(error) {
          alert(error.message);
        },"GET",false);
	},
  get_pipeline:function()
  {
    var uri=`${url}crm/sales/pipeline/${idpipeline.value}`;
        model.invoke_service(uri,null,function(data) {
          views.print_stages(data);
          views.edit_view(data);
        },
        function(error) {
          alert(error.message);
        },"GET",false);
  },
  save_pieline:function()
  {

	var name = document.getElementById("txt_name");
	 var pipeline_id= document.getElementById("inpu_syspk");
		 
		 if(name.value=="")
		 {
			alert("El campo nombre es requerido.");
			return;
		 }
	var data={
		name:name.value,
		probability:0
	}
	var method="POST";
	if(pipeline_id.value!="")method="PATCH";
	
	var uri=`${url}crm/sales/pipeline/${pipeline_id.value}`;
	        model.invoke_service(uri,data,function(data) {
	          views.print_stages(data);
	          views.edit_view(data);
	        },
	        function(error) {
	          alert(error.message);
	        },method,false);
	},
  delete:function()
  {

	},
  view_modal:function()
  {
    controller.show_modal("modal_view");
  },
  show_modal:function(idmodal)
  {
    views.show_modal(idmodal);
  },
	
  close_modal:function(){
    views.close_modal("modal_view")
  },
   guid:function()
   {
        //guid con - //[1e7]+-1e3+-4e3+-8e3+-1e11
        //guid sin - //[1e7]+1e3+4e3+8e3+1e11
        return ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    },
    clear:function(){
      views.clear_modal()
     
    },
    delete:function()
    {
      
      if (!confirm('Este proceso eliminará todos sus dependencias ¿Continuar?'))
      return;

      var uri=`${url}crm/sales/pipeline/${idpipeline.value}`;
      model.invoke_service(uri,null,function(data) {
      	views.select("#pipelines",data);
      	if(data!=null)
      	{
      		views.print_stages(data[0]);
        	views.edit_view(data[0]);
      	}
        
      },
      function(error) {
        alert(error.message);
      },"DELETE",false);
      
    }

}