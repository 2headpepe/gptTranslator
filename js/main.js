var myHeading = document.querySelector("#header");
// myHeading.textContent = "Hello world!";

let messagesHeight = 0;
document.querySelector("#arrowImgWrapper").onclick = function () {
  const newMessage = document.createElement("div");
  newMessage.style.cssText =
    'width: 621px;background: #edecf0;border-radius: 50px;margin-bottom: 29px;margin-left: 43px;text-align: center;padding: 15px 25px; line-height: 21px;font-family: "gothamLight";font-size: 12px;';
  const inputText = document.getElementById("inputQuestion").value;
  const node = document.createTextNode(inputText);
  newMessage.appendChild(node);
  var el = document.getElementById("messagesWrapper");
  el.appendChild(newMessage);
};
