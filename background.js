let getCurrentDomain = function(){
  return chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let urlObj = new URL(tabs[0].url);
      return urlObj.hostname;
    });
}

let getDomainFromURL = function(url){
  let urlObj = new URL(url);
  return urlObj.hostname;
}

// when a tab is created
chrome.tabs.onCreated.addListener(
  function(tab){
    if (tab.url !== undefined){
      chrome.runtime.sendMessage({newURL: getCurrentDomain()});
    }
  }
)

// when a tab is updated. the url may not be updated
chrome.tabs.onUpdated.addListener(
  function(tabID, changeInfo, tabs){
      if (changeInfo.url !== undefined){
        chrome.runtime.sendMessage({newURL: getDomainFromURL(changeInfo.url)})
      }
  });


// when a tab is switched to
chrome.tabs.onActivated.addListener(
  function(activeInfo){
    chrome.runtime.sendMessage({newURL: getCurrentDomain()});
  }
);


// when a tab is killed
// chrome.tabs.onRemoved.addListener();


// // Listens for popup.js Refresh button and Reset button
// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(sender.tab ?
//                     "from a content script:" + sender.tab.url :
//                     "from the extension");

//         // if Refresh was pressed
//         if (request.button == "refresh"){
//           // do request logic
//           sendResponse({status: request.button});
//         }
//         // if Reset was pressed
//         else if (request.button == "reset"){
//             // do reset logic
//             sendResponse({status: request.button});
//         }
//         else{
//           sendResponse({status: request.button});
//         }
//         return true;
// });