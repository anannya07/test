function onSignIn(googleuser)
{
  var profile= googleUser.getBasicProfile();
  $(".g_id_signin").css("display","none");
  $(".data").css("display","block");
  $("#pic") .attr('src',profile.getImageUrl());
  $("#email").text("profile.getEmail());
 }
  
