function onSignIn(googleuser)
{
  var profile= googleUser.getBasicProfile();
  $(".signinButton").css("display","none");
  $(".data").css("display","block");
  $("#pic") .attr('src',profile.getImageUrl());
  $("#email").text("profile.getEmail());
 }
  
  $('.signinButton').click(function() {
    // signInCallback defined in step 6.
    auth2.grantOfflineAccess().then(signInCallback);
  });
