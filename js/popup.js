$(document).ready(function () {
  $('#tts').css('color', 'blue');

  const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
  });
  
});
