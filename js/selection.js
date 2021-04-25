chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("this mf is going two time , what should i do");

  if (request.id == 'selection') {
    console.log('background.js got a message');
    console.log(request.data);
    var text = request.data;
    console.log(sender);
    sendResponse({ farewell: 'from selection' });

    insert_text(text);
  }
});

function insert_text(text) {
  if (document.getSelection()) {
    var selection = document.getSelection();
    console.log(selection);

    var range = selection.getRangeAt(0);

    var div_in = document.createElement('div');
    div_in.id = 'sumext_div';

    var newP = document.createElement('p');
    newP.appendChild(document.createTextNode(text));

    div_in.style.background = '#FFC279 ';
    div_in.style.padding = '5px';
    div_in.appendChild(newP);

    range.insertNode(div_in);

    console.log('Hope its done ');
  }
}
