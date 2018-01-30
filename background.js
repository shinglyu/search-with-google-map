const base_url = 'https://www.google.com/maps/search/';

browser.contextMenus.create({
  id: "search-selection",
  title: "Search Google Map",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "search-selection":
      console.debug(info.selectionText);
      browser.tabs.create({
        url: base_url + encodeURIComponent(info.selectionText)
      });
      break;
  }
});
