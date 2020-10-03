let box = document.querySelector("#box");
let sec = document.querySelector("#sec");
let icon = document.querySelector("#icon");
let mSec = document.querySelector("#mSec");
let sbtn = document.querySelector("#start");
let rbtn = document.querySelector("#reset");

let timerId;

let time = 0;
let mTime = 0;

function numberFormat(n) {
  return n > 9 ? "" + n : "0" + n;
}

sec.textContent = time;
mSec.textContent = numberFormat(mTime);

function timeLeap() {
  sbtn.textContent = "Stop";
  mTime++;
  if (mTime === 100) {
    time++;
    mTime = 0;
  }
  sec.textContent = time;
  mSec.textContent = numberFormat(mTime);
}

function interval() {
  const id = setInterval(timeLeap, 10);
  console.log(id);
  return id;
}
sbtn.addEventListener("click", () => {
  if (sbtn.textContent === "Start") {
    timerId = interval();
    
    rbtn.addEventListener("click", ()=>{
        time = 0;
        mTime = 0;
        sec.textContent = 0;
        mSec.textContent = numberFormat(mTime);
        sbtn.textContent = "Start";
        clearInterval(timerId);
    })

  } else if (sbtn.textContent === "Stop") {
    sbtn.textContent = "Start";
    clearInterval(timerId);
  }
});

rbtn.addEventListener("click", ()=>{
    time = 0;
    mTime = 0;
    sec.textContent = 0;
    mSec.textContent = numberFormat(mTime);
    sbtn.textContent = "Start";
})
