// coded by SabWaFei
let previousTitle = document.getElementsByClassName("previous-title");
//current values
let workCurrentDailyValue = document.getElementById("work-current");
let playCurrentDailyValue = document.getElementById("play-current");
let studyCurrentDailyValue = document.getElementById("study-current");
let exerciseCurrentDailyValue = document.getElementById("exercise-current");
let socialCurrentDailyValue = document.getElementById("social-current");
let selfCareCurrentDailyValue = document.getElementById("self-care-current");
//previous values
let workPreviousValue = document.getElementById("work-previous");
let playPreviousValue = document.getElementById("play-previous");
let studyPreviousValue = document.getElementById("study-previous");
let exercisePreviousValue = document.getElementById("exercise-previous");
let socialPreviousValue = document.getElementById("social-previous");
let selfCarePreviousValue = document.getElementById("self-care-previous");
const Work = {
  timeFrames: {
    daily: {
      current: "5hrs",
      previous: "7hrs",
    },
    weekly: {
      current: "32hrs",
      previous: "36hrs",
    },
    monthly: {
      current: "103hrs",
      previous: "128hrs",
    },
  },
};

const Play = {
  timeFrames: {
    daily: {
      current: "1hrs",
      previous: "2hrs",
    },
    weekly: {
      current: "10hrs",
      previous: "8hrs",
    },
    monthly: {
      current: "23hrs",
      previous: "29hrs",
    },
  },
};

const Study = {
  timeFrames: {
    daily: {
      current: "0hrs",
      previous: "1hrs",
    },
    weekly: {
      current: "4hrs",
      previous: "7hrs",
    },
    monthly: {
      current: "13hrs",
      previous: "19hrs",
    },
  },
};

const Exercise = {
  timeFrames: {
    daily: {
      current: "1hrs",
      previous: "1hrs",
    },
    weekly: {
      current: "4hrs",
      previous: "5hrs",
    },
    monthly: {
      current: "11hrs",
      previous: "18hrs",
    },
  },
};

const Social = {
  timeFrames: {
    daily: {
      current: "1hrs",
      previous: "3hrs",
    },
    weekly: {
      current: "5hrs",
      previous: "10hrs",
    },
    monthly: {
      current: "21hrs",
      previous: "23hrs",
    },
  },
};

const SelfCare = {
  timeFrames: {
    daily: {
      current: "0hrs",
      previous: "1hrs",
    },
    weekly: {
      current: "2hrs",
      previous: "2hrs",
    },
    monthly: {
      current: "7hrs",
      previous: "11hrs",
    },
  },
};

//weekly work previous

//default state(daily)
document.getElementById("daily").style.opacity = 1;
//show previous values
for (let i = 0; i < previousTitle.length; i++) {
  //change all the values
  previousTitle[i].innerText = "Yesterday";
}
workCurrentDailyValue.innerText = Work.timeFrames.daily.current;
playCurrentDailyValue.innerText = Play.timeFrames.daily.current;
studyCurrentDailyValue.innerText = Study.timeFrames.daily.current;
exerciseCurrentDailyValue.innerText = Exercise.timeFrames.daily.current;
socialCurrentDailyValue.innerText = Social.timeFrames.daily.current;
selfCareCurrentDailyValue.innerText = SelfCare.timeFrames.daily.current;
workPreviousValue.innerText = Work.timeFrames.daily.previous;
playPreviousValue.innerText = Play.timeFrames.daily.previous;
studyPreviousValue.innerText = Study.timeFrames.daily.previous;
exercisePreviousValue.innerText = Exercise.timeFrames.daily.previous;
socialPreviousValue.innerText = Social.timeFrames.daily.previous;
selfCarePreviousValue.innerText = SelfCare.timeFrames.daily.previous;
//end default state

// daily selection
daily.addEventListener("click", function () {
  //make selection text more visible
  daily.style.opacity = 1;
  //make other selections less visible
  weekly.style.opacity = 0.7;
  monthly.style.opacity = 0.7;
  //show previous values
  for (let i = 0; i < previousTitle.length; i++) {
    //change all the values
    previousTitle[i].innerText = "Yesterday";
  }
  //change current value amounts
  workCurrentDailyValue.innerText = Work.timeFrames.daily.current;
  playCurrentDailyValue.innerText = Play.timeFrames.daily.current;
  studyCurrentDailyValue.innerText = Study.timeFrames.daily.current;
  exerciseCurrentDailyValue.innerText = Exercise.timeFrames.daily.current;
  socialCurrentDailyValue.innerText = Social.timeFrames.daily.current;
  selfCareCurrentDailyValue.innerText = SelfCare.timeFrames.daily.current;
  //change previous value amounts
  workPreviousValue.innerText = Work.timeFrames.daily.previous;
  playPreviousValue.innerText = Play.timeFrames.daily.previous;
  studyPreviousValue.innerText = Study.timeFrames.daily.previous;
  exercisePreviousValue.innerText = Exercise.timeFrames.daily.previous;
  socialPreviousValue.innerText = Social.timeFrames.daily.previous;
  selfCarePreviousValue.innerText = SelfCare.timeFrames.daily.previous;
});

//weekly selection
weekly.addEventListener("click", function () {
  //make selection text more visible
  weekly.style.opacity = 1;
  //make other selections less visible
  daily.style.opacity = 0.7;
  monthly.style.opacity = 0.7;
  //show previous values
  for (let i = 0; i < previousTitle.length; i++) {
    //change value titles
    previousTitle[i].innerText = "Last Week";
  }
  //change current value amounts
  workCurrentDailyValue.innerText = Work.timeFrames.weekly.current;
  playCurrentDailyValue.innerText = Play.timeFrames.weekly.current;
  studyCurrentDailyValue.innerText = Study.timeFrames.weekly.current;
  exerciseCurrentDailyValue.innerText = Exercise.timeFrames.weekly.current;
  socialCurrentDailyValue.innerText = Social.timeFrames.weekly.current;
  selfCareCurrentDailyValue.innerText = SelfCare.timeFrames.weekly.current;
  //change previous value amounts
  workPreviousValue.innerText = Work.timeFrames.weekly.previous;
  playPreviousValue.innerText = Play.timeFrames.weekly.previous;
  studyPreviousValue.innerText = Study.timeFrames.weekly.previous;
  exercisePreviousValue.innerText = Exercise.timeFrames.weekly.previous;
  socialPreviousValue.innerText = Social.timeFrames.weekly.previous;
  selfCarePreviousValue.innerText = SelfCare.timeFrames.weekly.previous;
});

//monthly selection
monthly.addEventListener("click", function () {
  //make selection text more visible
  monthly.style.opacity = 1;
  //make other selections less visible
  daily.style.opacity = 0.7;
  weekly.style.opacity = 0.7;
  //show previous values
  for (let i = 0; i < previousTitle.length; i++) {
    //change all the values
    previousTitle[i].innerText = "Last Month";
  }
  //change current value amounts
  workCurrentDailyValue.innerText = Work.timeFrames.monthly.current;
  playCurrentDailyValue.innerText = Play.timeFrames.monthly.current;
  studyCurrentDailyValue.innerText = Study.timeFrames.monthly.current;
  exerciseCurrentDailyValue.innerText = Exercise.timeFrames.monthly.current;
  socialCurrentDailyValue.innerText = Social.timeFrames.monthly.current;
  selfCareCurrentDailyValue.innerText = SelfCare.timeFrames.monthly.current;
  //change previous value amounts
  workPreviousValue.innerText = Work.timeFrames.monthly.previous;
  playPreviousValue.innerText = Play.timeFrames.monthly.previous;
  studyPreviousValue.innerText = Study.timeFrames.monthly.previous;
  exercisePreviousValue.innerText = Exercise.timeFrames.monthly.previous;
  socialPreviousValue.innerText = Social.timeFrames.monthly.previous;
  selfCarePreviousValue.innerText = SelfCare.timeFrames.monthly.previous;
});
