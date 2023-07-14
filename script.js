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
function signOut()
{
  var auth2= gapi.auth2.getAuthInstance();
  auth.signOut().then(function(){
    alert("You have been successfully signed out");
    $(".signinButton").css("display","block");
     $(".data").css("display","none");
  });
}
npm install google-auth-library --save
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 80499037976-ltl3dh9jodcr59f6af38947bvlmb9ma1.apps.googleusercontent.com,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);
