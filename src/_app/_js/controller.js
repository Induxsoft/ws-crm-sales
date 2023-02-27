
var controller={
	get_pipelines:function(id,data) {

		var uri=`${url}crm/sales/pipeline/`;
        model.invoke_service(uri,null,function(data) {
          views.select("#pipelines",data);
        },
        function(error) {
          alert(error.message);
        },"GET",false);
	}
	
}