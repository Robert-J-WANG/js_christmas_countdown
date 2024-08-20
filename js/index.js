document.addEventListener("DOMContentLoaded", () => {
  // 初始化页面
  document.querySelector(".next").innerHTML = getMyData();

  // 倒计时定时器开启
  setInterval(updateCountdown, 1000);

  // 背景颜色定时器开启，每1秒变化一次
  setInterval(changeBackgroundColor, 1000);
});

function updateCountdown() {
  // 获取今年或者明年的圣诞节的剩余天数
  getCountDown();
}

function changeBackgroundColor() {
  // 设置随机变化的背景颜色
  document.querySelector(".container").style.backgroundColor =
    getRandomColor(false);
}

// 获取当前时间模块
function getMyData() {
  const date = new Date();
  const y = date.getFullYear();
  const m = _addZeros(date.getMonth() + 1);
  const d = _addZeros(date.getDate());
  return `Today is ${d} - ${m} - ${y}`;
}

// 动态获取今年圣诞节的日期
function getNextChristmas() {
  const now = new Date();
  const year = now.getFullYear();
  const christmasThisYear = new Date(`${year}-12-25 00:00:00`);

  // 如果今天已经过了圣诞节，设置为明年的圣诞节
  if (now > christmasThisYear) {
    return new Date(`${year + 1}-12-25 00:00:00`);
  } else {
    return christmasThisYear;
  }
}

// 倒计时模块
function getCountDown() {
  // 当前时间戳
  const now = +new Date();
  // 获取今年或者明年的圣诞节时间戳
  const next = getNextChristmas();
  // 倒计时总秒数
  const time = parseInt((next - now) / 1000);
  // 转换时分秒并补零
  const d = parseInt(time / 60 / 60 / 24);
  const h = _addZeros(parseInt((time / 60 / 60) % 24));
  const m = _addZeros(parseInt((time / 60) % 60));
  const s = _addZeros(parseInt(time % 60));

  // 渲染到页面
  document.querySelector("#day").innerHTML = d;
  document.querySelector("#hour").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#second").innerHTML = s;
}

// 补零函数
function _addZeros(num) {
  return num < 10 ? "0" + num : num;
}

// 随机背景颜色
function getRandomColor(flag) {
  if (flag) {
    let str = "#";
    const arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    for (let i = 0; i < 6; i++) {
      str += arr[Math.floor(Math.random() * arr.length)];
    }
    return str;
  } else {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b},0.3)`;
  }
}
