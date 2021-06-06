
// Create context menu
// To select the text for summary
chrome.runtime.onInstalled.addListener(() => {
  var contextMenuItem = {
    id: 'SumExt',
    title: 'Summarize',
    contexts: ['selection']
  };
  chrome.contextMenus.create(contextMenuItem);
});



// @method1 Get Text from Context Menus
// Use selected text from the user
chrome.contextMenus.onClicked.addListener(function (data, tab){
  Method1(data, tab);
});


$(document).ready(function () {

  console.log("Document is ready >>>");

  // @method2 Get text from DOM of webpage
  $('#innerTXT').click( function(tab) {
    console.log("second method is triggered...");
    inner_text_fun(tab);  
    
  });

//   $('#api-call').on('click', function(e){
//     console.log("doc method is triggered");
//     e.preventDefault();
//     chrome.tabs.create({url: "http://stackoverflow.com/", active: false});
//     return false;
// });


  // Launch Text to speech
  $('#tts').click(start_text_to_speech);

  
  $('#apply').click(set_val);

  chrome.storage.sync.get('per_val', function (fun) {
    var perc = $('#per_val').innerHTML;
    if (fun.per_val) {
      perc = fun.per_val;
      percent = perc;
      console.log(perc);
    }
    $('#per_val').text(perc);
  });
});












// setting the percent value
function set_val() {
  console.log('jgdgsiffiogfjf');
  var perc = $('#perc_val').val();
  chrome.storage.sync.set({ per_val: perc });
  localStorage.setItem('percent', JSON.string);
  $('#per_val').text(perc);
  percent = perc;
}



// Funtion for first method
function Method1(data, tab) {
  if (data.menuItemId == 'SumExt' && data.selectionText) {
    var this_val = data.selectionText;

    // Getting the percentage value
    chrome.storage.sync.get('per_val', function (fun) {
      var percent = 20;
      if (fun.per_val) {
        percent = fun.per_val;
      }

      // File for summarization
      const file_for_upload = {
        name: 'sonu',
        perc: percent,
        data: this_val,
      };

      // Options for post req to api
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file_for_upload),
      };

      upload(options);
    });
  }
}



// Api funtion for @method1
const upload = (options) => {
  var url = 'https://summaryapi3.herokuapp.com/sum';
  fetch(url, options)
    .then((res) => res.json())
    .then((obj) => {
      console.log(obj);
      console.log('Success');
      console.log(obj.data);

      chrome.storage.sync.set({ summary: obj.data });

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("lets if it is going two times .....");
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: obj.data, id: 'selection' },
          function (response) {
            console.log("is it going two times for event.....");
            console.log(response.farewell);
          }
        );
      });

      // insert_text(obj.data);
    })
    .catch((error) => console.log(error));
};



// Api function for @method2
const upload2 = (options) => {
  var url = 'https://summaryapi3.herokuapp.com/sum';
  fetch(url, options)
    .then((res) => res.json())
    .then((obj) => {
      console.log(obj);
      console.log('Success');

      console.log('im here in upload2................');

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { data: obj.data, id: 'innerT' },
          function (response) {
            console.log(response.thanks);
            chrome.storage.sync.get('summary2',function (fun) {
              // var perc = $('#intext').innerHTML;
              if (fun.summary2) {
                console.log("new tab has been created........");
                  window.location.href="/templates/innerTxt.htm";
                  // $('#intext').text("the summary has been changed...");
              }
              else{
                console.log("summary two has not yet saved ...");
              }
            });
          }
        );
      });
    })
    .catch((error) => console.log(error));
};

const getObjectFromLocalStorage = async function (key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function (value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

let pc = getObjectFromLocalStorage('per_val');
var bb = pc.then(function (result) {
  console.log(result);
  return result;
});

console.log(bb);

console.log(getObjectFromLocalStorage('per_val'));



// @method2 implementation
function inner_text_fun(tab) {
  console.log('Injecting content script(s)');
  // window.location.href = '/templates/innerTxt.htm';
  chrome.tabs.executeScript(tab.id, { file: 'js/innerTXT.js' });
  //On Firefox document.body.textContent is probably more appropriate
  chrome.tabs.executeScript(
    tab.id,
    {
      code: 'document.body.innerText;',
      //If you had something somewhat more complex you can use an IIFE:
      //code: '(function (){return document.body.innerText})();'
      //If your code was complex, you should store it in a
      // separate .js file, which you inject with the file: property.
    },
    receiveText
  );
};

//tabs.executeScript() returns the results of the executed script
//  in an array of results, one entry per frame in which the script
//  was injected.


function receiveText(resultsArray) {
  // console.log(resultsArray[0]);

  chrome.storage.sync.get('per_val', function (fun) {
    if (fun.per_val) {
      var percent = fun.per_val;

      const file_for_upload = {
        name: 'sonu',
        perc: 10,
        data: resultsArray[0],
      };

      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(file_for_upload),
      };

      upload2(options);
    }
  });
}

  /**
   * Listens for the app launching then creates the window
   *
   * @see http://developer.chrome.com/apps/app.runtime.html
   * @see http://developer.chrome.com/apps/app.window.html
   */

function start_text_to_speech() {
  // Center window on screen.
  console.log('in text to speech listener....');
  // var screenWidth = screen.availWidth;
  // var screenHeight = screen.availHeight;
  // var width = 1024;
  // var height = 768;

  // chrome.app.window.create('/templates/text_to_speach.htm', {
  //   id: 'ttsID',
  //   outerBounds: {
  //     width: width,
  //     height: height,
  //     left: Math.round((screenWidth-width)/2),
  //     top: Math.round((screenHeight-height)/2)
  //   }
  // });

  // chrome.tabs.create({ url: chrome.runtime.getURL("/templates/text_to_speach.htm") });
  window.location.href = '/templates/text_to_speach.htm';
}