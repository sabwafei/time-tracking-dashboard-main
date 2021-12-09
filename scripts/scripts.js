// coded by SabWaFei

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let previousTitle = document.getElementsByClassName("previous-title");

//default state(daily)
let state = "daily";
//make selection text more visible
document.getElementById("daily").style.opacity = 1;
//show previous values
for (let i = 0; i < previousTitle.length; i++) {
  //change all the values
  previousTitle[i].innerText = "Yesterday";
}

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
    //change all the values
    previousTitle[i].innerText = "Last Week";
  }
  //   make weekly hours current hide others
  let test = document.getElementById("test");
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
    previousTitle[i].style.innerText = "Last Month";
  }
});
