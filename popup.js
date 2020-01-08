// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value', data.color);
//   });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };

let currentTab = "";
let currentTabStart;
let currentTimeSpent;

let recordStartTime = function(){
    // records the start time for the current tab
    currentTabStart = new Date();
};

let recordTimeSpent = function(){
    // records the time spent on the current tab
    let currentTime = new Date();
    currentTimeSpent = currentTime.getTime() - currentTabStart.getTime();
}


let refreshTimes = function(){
    
    // chrome.tabs.reload();

    // store the current tab's time
    // then load from "storage" all the times
    // update DOM
};

let resetTimes = function(){
    // chrome.runtime.sendMessage({button: "reset"}, function(response){
    //     chrome.extension.getBackgroundPage().console.log(response.status);
    // });

    // erase all values in "storage"
    // update DOM with empty table
    // set new start time for current tab
};

let storeTime = function(){
    // stores a single time inside "storage"
}

let loadTimes = function(){
    // access "storage", loads all times
};

let updateDOM = function(){

}

let refreshButton = document.getElementById('refreshButton');
let resetButton = document.getElementById('resetButton');

// refreshButton.click = refreshTimes();  // can put function here
// resetButton.click = resetTimes();  // can put function here