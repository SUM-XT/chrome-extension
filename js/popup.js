$(document).ready(function () {
  $('#tts').css('color', 'blue');

  $('#api-call').on('click', function(e){
    console.log("doc method is triggered");
    e.preventDefault();
    chrome.tabs.create({url: "https://sum-xt-api.herokuapp.com/profile", active: false});
    return false;
});


});
