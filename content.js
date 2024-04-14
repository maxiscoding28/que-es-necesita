function updateStyles(request) {
  if (request.id == "NEW_TICKET") {
    console.log("message received")
    var emberViews = document.querySelectorAll('.ember-view');

    for (let i = 0; i < emberViews.length; i++) {
      var labels = emberViews[i].querySelectorAll('label');
      for (let j = 0; j < labels.length; j++) {
        if (labels[j].textContent.trim().endsWith('*')) {
          labels[j].style.backgroundColor = '';
          labels[j].style.backgroundColor = 'red';
          labels[j].style.color = '';
          labels[j].style.color = 'white';
        }
      }
    }
  }
}

chrome.runtime.onMessage.addListener(
  function(request) {
    updateStyles(request)
});