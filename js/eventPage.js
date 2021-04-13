
// chrome.storage.sync.get('work', function(fun){
//   var newval = $('#work').val();
//   if(fun.work){
//     newval = fun.work;
//   }
//   $('#work').text(newval);
// });


const upload = (options) => {
var url = "https://summaryapi3.herokuapp.com/sum";
fetch(url, options
).then(
res => res.json()
).then(
obj => {
  console.log(obj)
  console.log("Success")
  console.log(obj.data);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data: obj.data}, function(response) {
      console.log(response.farewell);
    });
  });
}
).catch(
error => console.log(error)
);
};






const getObjectFromLocalStorage = async function(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function(value) {
        resolve(value[key]);
      });
    } catch (ex) {
      reject(ex);
    }
  });
};

// let pc = await getObjectFromLocalStorage("per_val")
// console.log("from pc : " + pc);

let pc = getObjectFromLocalStorage("per_val")
var bb = pc.then(function(result){
  console.log(result);
  return result;
})

console.log(bb);

console.log(getObjectFromLocalStorage("per_val"));

// async function getPerc(key) {
//   return new Promise((resolve, reject) => {
//     try {
//       chrome.storage.sync.get(key, function (value) {
//         resolve(value);
//       })
//     } catch (ex) {
//       reject(ex)
//     }
//   })
// }

// const result = getPerc("per_val");
// console.log(result);


// var asyc = mainFuction();
// console.log("lets see if its working, value of fun is " + asyc);

// var percent = 1;
$(document).ready(function() {

  chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Injecting content script(s)');
    //On Firefox document.body.textContent is probably more appropriate
    chrome.tabs.executeScript(tab.id,{
        code: 'document.body.innerText;'
        //If you had something somewhat more complex you can use an IIFE:
        //code: '(function (){return document.body.innerText})();'
        //If your code was complex, you should store it in a
        // separate .js file, which you inject with the file: property.
    },receiveText);
});

//tabs.executeScript() returns the results of the executed script
//  in an array of results, one entry per frame in which the script
//  was injected.
function receiveText(resultsArray){
    console.log(resultsArray[0]);
}


  document.getElementById("apply").addEventListener("click", set_val);
  function set_val(){
    console.log("jgdgsiffiogfjf");
    var perc = $('#perc_val').val();
    chrome.storage.sync.set({per_val: perc});
    localStorage.setItem('percent', JSON.string)
    $("#per_val").text(perc);
    percent = perc;
  }

  chrome.storage.sync.get('per_val', function(fun){
    var perc = $("#per_val").innerHTML
    if(fun.per_val){
      perc = fun.per_val;
      percent = perc;
      console.log(perc);
    }
    $("#per_val").text(perc);
  });

});



chrome.runtime.onInstalled.addListener(() => {

var contextMenuItem = {
  "id": "SumExt",
  "title": "Summarize",
  "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem);

});

chrome.contextMenus.onClicked.addListener(function(data, tab) {
  if(data.menuItemId == "SumExt" && data.selectionText){

    var this_val = data.selectionText;

    chrome.tabs.executeScript(tab.id, {file: "js/selection.js"})


    // chrome.storage.sync.set({'work': this_val})
    // var percent = getPerc("per_val");
    var percent = 1;

    const Base = "http://127.0.0.1:5000/";
    var url = Base + "test3";

    // console.log("in contexmenus , here is percent : "+ percent);

    chrome.storage.sync.get("per_val", function (fun){
      if(fun.per_val){
        var percent = fun.per_val;

        const file_for_upload = {
          "name": "sonu",
          "perc": percent,
          "data": this_val,
        }

        const options = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(file_for_upload)
        }


        upload(options) ;
      }
    })


//     const file_for_upload = {
//       "name": "sonu",
//       "perc": percent,
//       "data": this_val,
//     }
//
// const options = {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(file_for_upload)
// }
//
// const upload = (file) => {
//   var url = "http://127.0.0.1:5000/test2";
//   fetch(url, options
//   ).then(
//     res => res.json()
//   ).then(
//     obj => {
//       console.log(obj)
//       console.log("Success")
//       console.log(obj.data);
//
//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, {data: obj.data}, function(response) {
//           console.log(response.farewell);
//         });
//       });
//     }
//   ).catch(
//     error => console.log(error)
//   );
// };
//
// upload(file_for_upload);


  }
});







// $('#work').text()
