const setRtClickId = () => {
  var anchorTag = document.getElementById("rtRef");
  var anchorUrl = new URL(anchorTag.href);
  var anchorParams = new URLSearchParams(anchorUrl.search);

  // Assume your window location is something like /path?param2=value2
  var windowUrl = new URL(window.location.href);
  var windowParams = new URLSearchParams(windowUrl.search);

  windowUrl.searchParams.set("age", "64");
  window.history.pushState(
    {
      path: windowUrl.toString(),
    },
    "",
    windowUrl.toString()
  );
  // Append params from the anchor tag to the main URL's params
  for (let pair of anchorParams.entries()) {
    windowParams.append(pair[0], pair[1]);
  }

  // Set the window's location search params
  windowUrl.search = windowParams.toString();
  history.replaceState({}, "", windowUrl.toString());
};

const loadRingba = () => {
  var script = document.createElement("script");
  script.src = "<?php echo $ringbaScriptPrimary; ?>";
  document.head.appendChild(script);
};

function scrollToTop() {
  window.scrollTo({
    top: 0, // Scroll to the top of the window
    behavior: "smooth", // Smooth scroll
  });
}
const runCountdownTimer = () => {
  var now = new Date().getTime();
  var countDownDate = new Date(now + 3 * 60000).getTime();

  setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 500);
};
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const btnYes1 = document.getElementById("btn-yes1");
const btnNo1 = document.getElementById("btn-no1");

const mainContainer = document.getElementById("mainContainer");
const display0 = document.getElementById("display0");
const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");
const display4 = document.getElementById("display4");

btn2.addEventListener("click", () => {
  display1.style.display = "none";
  display0.style.display = "none";
  display2.style.display = "block";
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("age", "64");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );

  setRtClickId();
});
btn3.addEventListener("click", () => {
  display1.style.display = "none";
  display0.style.display = "none";
  display2.style.display = "block";
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("age", "76");
  window.history.pushState(
    {
      path: newUrl.href,
    },
    "",
    newUrl.href
  );

  setRtClickId();
});

btnYes.addEventListener("click", () => {
  display2.style.display = "none";
  display4.style.display = "block";
});

btnNo.addEventListener("click", () => {
  display2.style.display = "none";
  window.location.href = "/";
});

btnYes1.addEventListener("click", () => {
  display2.style.display = "none";
  mainContainer.style.display = "none";
  display4.style.display = "block";

  loadRingba();
  runCountdownTimer();
  scrollToTop();
});

btnNo1.addEventListener("click", () => {
  display2.style.display = "none";
  mainContainer.style.display = "none";
  display4.style.display = "block";
  loadRingba();
  runCountdownTimer();
  scrollToTop();
});
