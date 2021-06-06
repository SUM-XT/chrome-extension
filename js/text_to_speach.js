var voices;
var utteranceIndex = 0;

var enqueue = document.getElementById('enqueue');
var lang = document.getElementById('lang');
var pitch = document.getElementById('pitch');
var rate = document.getElementById('rate');
var text = document.getElementById('srctext');
var ttsStatusBox = document.getElementById('ttsStatusBox');
var ttsStatus = document.getElementById('ttsStatus');
var voiceInfo = document.getElementById('voiceInfo');
var voicesSelect = document.getElementById('voices');
var volume = document.getElementById('volume');

// document.getElementById("innerTXT").addEventListener("click", function(tab) {
//     console.log('Injecting content script(s)');
//     //On Firefox document.body.textContent is probably more appropriate
//     chrome.tabs.executeScript(tab.id,{
//         code: 'document.body.innerText;'
//         //If you had something somewhat more complex you can use an IIFE:
//         //code: '(function (){return document.body.innerText})();'
//         //If your code was complex, you should store it in a
//         // separate .js file, which you inject with the file: property.
//     },receiveText);
// });

// //tabs.executeScript() returns the results of the executed script
// //  in an array of results, one entry per frame in which the script
// //  was injected.
// function receiveText(resultsArray){
//     console.log(resultsArray[0]);
// }

function speak(utterance, highlightText) {
  var options = {
    enqueue: Boolean(enqueue.value),
    lang: lang.value,
    pitch: Number(pitch.value),
    rate: Number(rate.value),
    volume: Number(volume.value),
    voiceName: voicesSelect.value,
    onEvent: function (event) {
      console.debug(utteranceIndex, event);
      if (event.type == 'error') {
        console.error(event);
      }
      if (highlightText) {
        text.setSelectionRange(0, event.charIndex);
      }
      if (
        event.type == 'end' ||
        event.type == 'interrupted' ||
        event.type == 'cancelled' ||
        event.type == 'error'
      ) {
        chrome.tts.isSpeaking(function (isSpeaking) {
          if (!isSpeaking) {
            ttsStatus.textContent = 'Idle';
            ttsStatusBox.classList.remove('busy');
          }
        });
      }
    },
  };
  console.debug(++utteranceIndex, options);

  chrome.tts.speak(utterance, options);

  ttsStatus.textContent = 'Busy';
  ttsStatusBox.classList.add('busy');
}

// Get the latest summary stored in chrome.storage
document.getElementById('summary-gen').addEventListener('click', function () {
  chrome.storage.sync.get('summary', function (fun) {
    if (fun.summary) {
      document.getElementById('srctext').value = fun.summary;
    } else {
      console.log('summary not set till now......');
    }
  });
});

document.getElementById('speak').addEventListener('click', function () {
  speak(text.value, true);
});

document.getElementById('stop').addEventListener('click', function () {
  chrome.tts.stop();
});

voicesSelect.addEventListener('change', function () {
  voiceInfo.textContent = '';
  for (var i = 0; i < voices.length; i++) {
    if (voices[i].voiceName === this.value) {
      voiceInfo.textContent = JSON.stringify(voices[i], null, 2);
      break;
    }
  }
});

chrome.tts.getVoices(function (availableVoices) {
  voices = availableVoices;
  for (var i = 0; i < voices.length; i++) {
    voicesSelect.add(new Option(voices[i].voiceName, voices[i].voiceName));
  }
});
