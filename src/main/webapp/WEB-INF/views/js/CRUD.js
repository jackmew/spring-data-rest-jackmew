$(document).ready(function(){
       	  console.log("ready");

       	  
       	  $("button[name='dispatch']").on("click",dispatchClick);
       	  $("#getUsers").on("click",getUsersClick);
       	  $("#getUser").on("click",getUserClick);
       	  $("#insertUser").on("click",insertUserClick);
          $("#replaceUser").on("click",replaceUserClick);
       	  $("#updateUser").on("click",updateUserClick);
       	  $("#deleteUser").on("click",deleteUserClick);

 });
function dispatchClick(){
	var pageName = $(this).text();
	var pageUrl = "/views/page/"+pageName+".html";
	window.location = pageUrl;
}
function getUsersClick(){

  $('#show').find("tbody").remove();

	$.ajax({
		url: "http://127.0.0.1:8080/people",
		
		type: "GET",
		      			
		success: function(dto,status){
    var peopleArray = dto._embedded.people;
    var peopleNum = peopleArray.length;

    $.each(peopleArray,function( index , value){
      var id = index+1;
      $('#show').append("<tr>"+ 
                          "<td>"+ id +"</td>"+
                          "<td>"+peopleArray[index].firstName+"</td>"+
                          "<td>"+peopleArray[index].lastName+"</td>"+
                        "</tr>");      
    });

		},
		error: function(xhr,status){
			alert("error");
		}
	});
}
function insertUserClick(){

  var fname = $("input[name='fname']").val();
  var lname = $("input[name='lname']").val()


  $.ajax({
  	url: "http://127.0.0.1:8080/people",
  	
  	type: "POST",
  	
  	contentType: 'application/json',
  	
  	data: JSON.stringify({
        firstName: fname,
        lastName: lname
     }),
  	
  	success: function(dto,status){
  		alert("success");
  	},
  	error: function(xhr,status){
  		alert("error");
  	}
  }); 
}
function getUserClick(){

  $('#show').find("tbody").remove();

  var id = $("input[name='getId']").val();

  $.ajax({
  	url: "http://127.0.0.1:8080/people/"+id,
  	
  	type: "GET",
  	      			
  	success: function(dto,status){
  		$('#show').append("<tr>"+ 
                          "<td>"+ id +"</td>"+
                          "<td>"+dto.firstName+"</td>"+
                          "<td>"+dto.lastName+"</td>"+
                        "</tr>");    
  	},
  	error: function(xhr,status){
  		alert("error");
  	}
  });
}
function replaceUserClick(){
  $('#show').find("tbody").remove();

  var id = $("input[name='replaceId']").val();
  var fname = $("input[name='replaceFirstName']").val();
  var lname = $("input[name='replaceLastName']").val()


  $.ajax({
    url: "http://127.0.0.1:8080/people/"+id,
    
    type: "PUT",
    
    contentType: 'application/json',
    
    data: JSON.stringify({
        firstName: fname,
        lastName: lname
     }),
    
    success: function(dto,status){
      alert("success");
    },
    error: function(xhr,status){
      alert("error");
    }
  }); 
}
function updateUserClick(){
	$('#show').find("tbody").remove();

  var id = $("input[name='updateId']").val();
  var fname = $("input[name='updateFirstName']").val();

  var lname = $("input[name='updateLastName']").val()
  var jsonData ;
  if(lname==""){
    jsonData = JSON.stringify({
                    firstName: fname
                });
  }else if(fname==""){
    jsonData = JSON.stringify({
                    lastName: lname
                });
  }else {
    jsonData = JSON.stringify({
                    firstName: fname,
                    lastName: lname
                });
  }
  $.ajax({
    url: "http://127.0.0.1:8080/people/"+id,
    
    type: "PATCH",
    
    contentType: 'application/json',
    
    data: jsonData,
    
    success: function(dto,status){
      alert("success");
    },
    error: function(xhr,status){
      alert("error");
    }
  }); 
}
function deleteUserClick(){
	$('#show').find("tbody").remove();

  var id = $("input[name='deleteId']").val();

  $.ajax({
    url: "http://127.0.0.1:8080/people/"+id,
    
    type: "DELETE",
                
    success: function(dto,status){
      alert("success"); 
    },
    error: function(xhr,status){
      alert("error");
    }
  });
}