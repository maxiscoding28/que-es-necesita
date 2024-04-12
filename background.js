chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url && tab.url.startsWith("https://hashicorp.zendesk.com/agent/tickets/")) {
        if (changeInfo.url) {
            chrome.tabs.sendMessage(tab.id, {id: "NEW_TICKET"})
        }
    }
  });
  