var myHeading = document.querySelector("#header");
// myHeading.textContent = "Hello world!";

let messagesHeight = 0;
document.querySelector("#arrowImgWrapper").onclick = function () {
  const newMessage = document.createElement("div");
  newMessage.className = "message";

  let textArea = document.getElementById("inputQuestion");
  const yourMessage = document.createElement("div");
  yourMessage.innerHTML =
    "<div id='yourMessage'>Your message</div>" + textArea.value;
  newMessage.appendChild(yourMessage);

  var el = document.getElementById("messagesWrapper");
  el.appendChild(newMessage);
  textArea.value = "";
};

// const { test, expect } = require("@playwright/test");
// test("basic test", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   const title = page.locator(".navbar__inner .navbar__title");
//   await expect(title).toHaveText("Playwright");
// });

// mocha.setup("bdd");
// let assert = chai.assert;
// mocha.run();
// describe("pow", function () {
//   it("raises to n-th power", function () {
//     assert.equal(pow(2, 3), 8);
//   });
// });
