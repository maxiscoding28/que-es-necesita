chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo && changeInfo.status == "complete") {
        if (tab.url && tab.url.startsWith("https://hashicorp.zendesk.com/agent/tickets/")) {
                chrome.tabs.sendMessage(tab.id, {id: "NEW_TICKET"})
        }
    }
  });
  