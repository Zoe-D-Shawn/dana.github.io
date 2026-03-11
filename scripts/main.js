// ===== scripts/main.js =====

// 图片切换代码
const myImage = document.getElementById("mainShibaImg");

// 注意：这里假设您的 images 文件夹下存在这两张图片
// 如果暂时没有，切换时可能会显示 broken image，实际部署时请替换为真实图片
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  // 判断当前图片路径，切换到另一张
  if (mySrc === "images/IMG_4057.JPG") {
    myImage.setAttribute("src", "images/IMG_4129.JPG");
  } else {
    myImage.setAttribute("src", "images/IMG_4057.JPG");
  }
};

// 个性化欢迎代码
let myButton = document.getElementById("changeUserBtn");
let myHeading = document.querySelector("h1");

// 设置用户名的函数 (增强版)
function setUserName() {
  // 增加一个可爱的狗狗头像提示
  let myName = prompt("🐕 汪汪！谁是皮皮的主人？输入你的名字吧～", "小可爱");

  if (myName === null || myName.trim() === "") {
    // 如果取消或空白，询问是否重试
    if (confirm("不告诉我的话……皮皮会伤心的哦！再试一次？")) {
      setUserName();
    } else {
      // 用户拒绝，用可爱的默认主人
      localStorage.setItem("name", "神秘两脚兽");
      myHeading.innerHTML = `🐕 汪汪汪汪汪，神秘两脚兽 ✨ <i class="fa-solid fa-paw" style="font-size: 3rem; color: #b27d52;"></i>`;
    }
  } else {
    // 去除首尾空格，并限制长度
    let cleanName = myName.trim().slice(0, 12);
    localStorage.setItem("name", cleanName);
    myHeading.innerHTML = `🐕 汪汪汪汪汪，${cleanName}  <i class="fa-solid fa-paw" style="font-size: 3rem; color: #b27d52;"></i>`;
  }
}

// 初始化检查本地存储
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = `🐕 汪汪汪汪汪，${storedName}  <i class="fa-solid fa-paw" style="font-size: 3rem; color: #b27d52;"></i>`;
}

// 按钮点击事件
myButton.addEventListener("click", () => {
  setUserName();
});

// 额外小彩蛋：标题双击也可以改名（更隐蔽）
myHeading.addEventListener("dblclick", () => {
  setUserName();
});

// 修复可能的空标题情况（例如localStorage存了空字符串）
if (localStorage.getItem("name") === "") {
  localStorage.removeItem("name");
  setUserName();
}
