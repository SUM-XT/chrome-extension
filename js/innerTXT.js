
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.id == "innerT"){

            console.log("inner got a message");
        //   console.log(request.data);
            var text = request.data;
            console.log(sender);
            sendResponse({thanks: "from inner with love..."});
            // console.log(text);
            console.log("after send response");
            // inner_field(text);
            // $('#intext').css("color","blue");
            // window.location.href="/templates/innerTxt.htm";
        //   document.getElementById('inner_text').innerText = text;
            chrome.storage.sync.set({summary2: text});
            // $('#intext').text("the summary has been changed...");
        }
    }
);

$(document).ready(function() {

    
    chrome.storage.sync.get('summary2',function (fun) {
        // var perc = $('#intext').innerHTML;
        if (fun.summary2) {
            // window.location.href="/templates/innerTxt.htm";
            $('#intext').text(fun.summary2);
        }
      });

});



    // $('#intext').css("color","blue");

