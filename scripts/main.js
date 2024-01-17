/*寫法1:
document.querySelector("html").onclick  = function(){
    alert("Ouch! Stop poking me!");
};
寫法2:
var myHTML = document.querySelector("html");
myHTML.onclick = function() {
    alert("Ouch! Stop poking me!");
};
*/

/*圖片變換器*/
var myImage = document.querySelector("img");
myImage.onclick = function(){
    /*getAttribute: 獲取 HTML 元素屬性值
      setAttribute: 設置 HTML 元素屬性值*/
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/high.png");
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

/*添加個客製化的歡迎訊息*/
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){
    let myName = prompt("Please enter your name.");
    /*!myName: myName是否為偽值(null undefined 空字符串等)*/
    if(!myName || myName === null) {
        setUserName()
    }else{
        /*localStorage.setItem: 用於將數據存儲到瀏覽器的本地存儲中，以便在同一網站的不同頁面之間保留數據
          "name": 存儲的鍵(key),用於標識存儲的數據*/
        localStorage.setItem("name", myName);
        /*innerHTML: 元素的內部 HTML 內容*/
        myHeading.innerHTML = "Hello, " + myName;
    }  
}
if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Hello, " + storedName;
}
myButton.onclick = function(){
    setUserName();
};