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
//   console.log(id);
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

// -------------------------------------------------------------------------------------------------------------------
let swnav = document.querySelector("#sw");
let tnav = document.querySelector("#t");
let stopwatch = document.querySelector("#stopwatch");
let timewatch = document.querySelector("#timewatch");
let inputM = document.querySelector("#inputM");
let inputH = document.querySelector("#inputH");
let inputS = document.querySelector("#inputS");
let hours = document.querySelector("#hours");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let stbtn = document.querySelector("#Tstart");
let rtbtn = document.querySelector("#Treset");
let submit = document.querySelector("#submit");

let zero = false;

let hoursTime = 5;
let minsTime = 0;
let secsTime = 0;

let savedH;
let savedM;
let savedS;

hours.textContent = numberFormat(hoursTime);
mins.textContent = numberFormat(minsTime);
secs.textContent = numberFormat(secsTime);

swnav.addEventListener("click",()=>{
    if(!swnav.classList.contains("clicked")){
        stopwatch.classList.toggle("hidden");
        timewatch.classList.toggle("hidden");
        swnav.classList.toggle("clicked");
        tnav.classList.toggle("clicked");
    }
})

tnav.addEventListener("click",()=>{
    if(!tnav.classList.contains("clicked")){
        stopwatch.classList.toggle("hidden");
        timewatch.classList.toggle("hidden");
        swnav.classList.toggle("clicked");
        tnav.classList.toggle("clicked");
    }
})

submit.addEventListener("click", ()=>{
    hoursTime = parseInt(inputH.value);
    minsTime = parseInt(inputM.value);
    secsTime = parseInt(inputS.value);
    if(!Number.isInteger(hoursTime)){
        hoursTime = 0;
    }
    if(!Number.isInteger(minsTime)){
        minsTime = 0;
    }
    if(!Number.isInteger(secsTime)){
        secsTime = 0;
    }
    savedH = hoursTime;
    savedM = minsTime;
    savedS = secsTime;
    // console.log(hoursTime + ":" + minsTime + ":" + secsTime);
    hours.textContent = numberFormat(hoursTime);
    mins.textContent = numberFormat(minsTime);
    secs.textContent = numberFormat(secsTime);
})

function clock(){
    stbtn.textContent = "Stop";
    zero = false;
    if(secsTime !== 0 ){
        secsTime--;
        secs.textContent = numberFormat(secsTime);
    }else if(secsTime === 0 && (minsTime !== 0 || hoursTime !== 0)){
        secsTime = 59;
        secs.textContent = numberFormat(secsTime);
        if(minsTime !== 0){
            minsTime--;
            mins.textContent = numberFormat(minsTime);
        }else if(minsTime === 0 && hoursTime !== 0){
            minsTime = 59;
            mins.textContent = numberFormat(minsTime);
            hoursTime--;
            hours.textContent = numberFormat(hoursTime);
        }
    }else if(secsTime === 0 && minsTime === 0 && hoursTime === 0){
        zero = true;
        // console.log(zero);
    }
    if(zero){
        clearInterval(timerId);
        stbtn.textContent = "Start"; 
        // console.log(zero);       
    }
}

function timeInterval(){
    const id = setInterval(clock,1000);
    return id;
}


stbtn.addEventListener("click" , ()=>{
    if(stbtn.textContent === "Start"){
        timerId = timeInterval();

        rtbtn.addEventListener("click",()=>{
            clearInterval(timerId);
            stbtn.textContent = "Start";
            if(Number.isInteger(savedH,savedM,savedS)){
                hoursTime = savedH;
                minsTime = savedM;
                secsTime = savedS;
                hours.textContent = numberFormat(hoursTime);
                mins.textContent = numberFormat(minsTime);
                secs.textContent = numberFormat(secsTime);
            }else {
                hoursTime = 5;
                minsTime = 0;
                secsTime = 0;
        
                hours.textContent = numberFormat(hoursTime);
                mins.textContent = numberFormat(minsTime);
                secs.textContent = numberFormat(secsTime);
            }
        })

    }else if(stbtn.textContent === "Stop"){
        stbtn.textContent = "Start";
        clearInterval(timerId);
    }
})



rtbtn.addEventListener("click",()=>{
    if(Number.isInteger(savedH,savedM,savedS)){
        hoursTime = savedH;
        minsTime = savedM;
        secsTime = savedS;
        hours.textContent = numberFormat(hoursTime);
        mins.textContent = numberFormat(minsTime);
        secs.textContent = numberFormat(secsTime);
    }else {
        hoursTime = 5;
        minsTime = 0;
        secsTime = 0;

        hours.textContent = numberFormat(hoursTime);
        mins.textContent = numberFormat(minsTime);
        secs.textContent = numberFormat(secsTime);
    }
})