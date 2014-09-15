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