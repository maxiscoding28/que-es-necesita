chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    if (request.id == "NEW_TICKET") {
        const labels = document.querySelector('.ticket_fields.with_omnipanel').querySelectorAll('label');
        console.log(labels)
        for (let i = 0; i < labels.length; i++) {
          let label = labels[i]
          if (label.textContent.trim().endsWith('*')) {
            label.style.backgroundColor = 'red';
            label.style.color = 'white';
          }
          else {
            label.style.display = 'none';
          }
        }
    }
});