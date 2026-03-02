//图片切换代码
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_4057.JPG") {
    myImage.setAttribute("src", "images/IMG_4129.JPG");
  } else {
    myImage.setAttribute("src", "images/IMG_4057.JPG");
  }
};
//个性化欢迎代码
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("谁是皮皮的主人？");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "汪汪汪汪汪，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "汪汪汪汪汪，" + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
