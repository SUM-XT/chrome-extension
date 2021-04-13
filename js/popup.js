
$(document).ready(function() {

$('#fed_up').css("color","pink");
// $('#fed_up').text("fuck this shit");
// console.log($('#fed_up').innerHTML);-

  var percent = 1;




  // document.getElementById("apply").addEventListener("click", set_val);
  // function set_val(){
  //   console.log("jgdgsiffiogfjf");
  //   var perc = $('#perc_val').val();
  //   chrome.storage.sync.set({per_val: perc});
  //   $("#per_val").text(perc);
  //   percent = perc;
  // }
  //
  // chrome.storage.sync.get('per_val', function(fun){
  //   var perc = $("#per_val").innerHTML
  //   if(fun.per_val){
  //     perc = fun.per_val;
  //     percent = perc;
  //     console.log(perc);
  //   }
  //   $("#per_val").text(perc);
  // });



  var obj = {
    data: percent
  }

// function ping() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {data: obj.data}, function(response) {
//       if(chrome.runtime.lastError){
//         console.log("error");
//         // setTimeout(ping, 1000);
//       }
//       else {
//         console.log(response.farewell);
//       }
//     });
//   });
// }

// ping();

});
