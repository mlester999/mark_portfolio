const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const navBar = document.getElementById("navbar");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const links = document.querySelectorAll("a");

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger button listener
btn.addEventListener("click", navToggle);

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on target
  e.currentTarget.children[0].classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/Marky_logo_white.png");
  } else {
    logo.setAttribute("src", "./images/Marky_logo.png");
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      btn.classList.remove("open");
      menu.classList.remove("flex");
      menu.classList.add("hidden");
      logo.setAttribute("src", "./images/Marky_logo.png");
    });
  });
}

// Sticky Navbar Display
// const obsCallback = function (results) {
//   const [result] = results;

//   if (!result.isIntersecting) {
//     navBar.classList.add("fixed", "bg-white");
//     console.log(navBar);
//   } else {
//     navBar.classList.remove("fixed", "bg-white");
//     console.log(navBar);
//   }
// };

// const header = document.querySelector(".header");

// const navHeight = navBar.getBoundingClientRect().height;

// const obsHeader = new IntersectionObserver(obsCallback, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// obsHeader.observe(header);

// Reveal sections
const allSection = document.querySelectorAll("section");

const callSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  navBar.classList.remove("opacity-0", "-translate-y-32");
  entry.target.classList.remove("opacity-0", "translate-y-32");
  entry.target.classList.add("opacity-100", "translate-y-0");
  observer.unobserve(entry.target);
};

const obsSection = new IntersectionObserver(callSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((sec) => {
  obsSection.observe(sec);
  if (!sec.classList.contains("opacity-0", "translate-y-32"))
    sec.classList.add("opacity-0", "translate-y-32");
});

// Typing Header
var typed = new Typed(".auto-type", {
  strings: ["Hello, It's Mark!", "I build things for web!"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
