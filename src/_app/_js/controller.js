window.addEventListener("load", (event) => {
  controller.init();
  if(idpipeline)
    idpipeline.addEventListener("change",function(){
      controller.get_pipeline();
    });
});
var controller={
  idpipeline:null,
  init:function()
  {
    idpipeline=document.querySelector("#pipelines");
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
        },
        function(error) {
          alert(error.message);
        },"GET",false);
  }
	
}