$(document).ready(function(){

	//to add elements in to be done list
	$("#Add").click(function(e){
		if($("#taskEntered").val() === ""){//checking empty or not
			alert("Error : No Task Entered");
			return false;
		}
		else{
			var taskAdded = $("#taskEntered").val();//taking input task from textbox
			$("#to-be-done").append("<div class='row well l_property'>" + "<div class='col-xs-1'>" + "<input class='check_todo' type='checkbox' name='completed'>" + "</div>" + "<div class='col-xs-10'>" + "<h4>" + taskAdded + "</h4>" + "</div>" + "<div col-xs-1>" + "<button title='Remove from list ' class='btn btn-default btn-danger' id='removeBtn'><b>Remove</b></button>" + "</div>");
			$("#addForm")[0].reset();//to reset textbox
			e.preventDefault();//to prevent form reset			
		}	
	});

	//Remove element from list
	$(document).on('click', '#removeBtn',function(){
		var taskDel = $(this).parent().parent();
		$(taskDel).remove();
	});

	//moving checked task to 'done' list
	$("#to-be-done").on('click', '.check_todo' ,function(){
		if($(this).is(':checked')){
			var parentEle =$(this).parent().parent();
			$(parentEle).appendTo("#done");
		}
	} );

	//moving uncheck task to 'to-be-done' list
	$("#done").on('click', '.check_todo' ,function(){
		if(!($(this).is(':checked'))){
			var parentEle =$(this).parent().parent();
			$(parentEle).appendTo("#to-be-done");
		}
	} );


});
