const cards = document.querySelectorAll(".featured-projects");
const darkModeBTN = document.querySelector(".light-dark-btn");
const sunMoonIMG = document.querySelector(".light-dark");
const body = document.querySelector("body");

//THEME
darkModeBTN.addEventListener("click", changeTheme);

let isDarkModeOn = false;

function changeTheme(e) {
  if (isDarkModeOn) {
    sunMoonIMG.src = "assets/moon.png";
    body.classList.remove("dark-theme");
    isDarkModeOn = false;
  } else {
    sunMoonIMG.src = "assets/sun.png";
    body.classList.add("dark-theme");
    isDarkModeOn = true;
  }
}

//SCROLL
document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  //console.log({ currentScroll });
  const maxBodyHeight =
    document.body.clientHeight - document.documentElement.clientHeight;
  //console.log({ body: document.body.clientHeight });
  //console.log({ window: document.documentElement.clientHeight });
  const scrollPercentage = Math.round((currentScroll / maxBodyHeight) * 100);
  console.log(`scrolled: ${scrollPercentage}%`);

  if (!isBetween(35, 90, scrollPercentage)) {
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.zIndex = "-1";
    });
  } else {
    cards.forEach((card, i) => {
      card.style.zIndex = "0";
    });
  }
  let active = 0;

  if (isBetween(38, 41, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 38, 41, 0, 100);
    const movementIn = mapValue(scrollPercentage, 38, 41, 60, 50);
    cards[0].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[0].style.top = `${movementIn}%`;
    cards[0].style.translate = `-50% -${movementIn}%`;
    active = 0;
  }
  if (isBetween(47, 50, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 47, 50, 100, 0);
    const movementOut = mapValue(scrollPercentage, 47, 50, 50, 40);
    cards[0].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[0].style.top = `${movementOut}%`;
    cards[0].style.translate = `-50% -${movementOut}%`;
    active = 0;
  }

  if (isBetween(53, 56, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 53, 56, 0, 100);
    const movementIn = mapValue(scrollPercentage, 53, 56, 60, 50);
    cards[1].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[1].style.top = `${movementIn}%`;
    cards[1].style.translate = `-50% -${movementIn}%`;
    active = 1;
  }
  if (isBetween(56, 62, scrollPercentage)) {
    active = 1;
  }
  if (isBetween(62, 65, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 62, 65, 100, 0);
    const movementOut = mapValue(scrollPercentage, 62, 65, 50, 40);
    cards[1].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[1].style.top = `${movementOut}%`;
    cards[1].style.translate = `-50% -${movementOut}%`;
    active = 1;
  }

  if (isBetween(68, 71, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 68, 71, 0, 100);
    const movementIn = mapValue(scrollPercentage, 68, 71, 60, 50);
    cards[2].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[2].style.top = `${movementIn}%`;
    cards[2].style.translate = `-50% -${movementIn}%`;
    active = 2;
  }
  if (isBetween(71, 77, scrollPercentage)) {
    active = 2;
  }
  if (isBetween(77, 80, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 77, 80, 100, 0);
    const movementOut = mapValue(scrollPercentage, 77, 80, 50, 40);
    cards[2].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[2].style.top = `${movementOut}%`;
    cards[2].style.translate = `-50% -${movementOut}%`;
    active = 2;
  }
  if (isBetween(80, 83, scrollPercentage)) {
    active = 2;
  }

  if (isBetween(83, 86, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 83, 86, 0, 100);
    const movementIn = mapValue(scrollPercentage, 83, 86, 60, 50);
    cards[3].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[3].style.top = `${movementIn}%`;
    cards[3].style.translate = `-50% -${movementIn}%`;
    active = 3;
  }
  if (isBetween(92, 100, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 92, 95, 100, 0);
    const movementOut = mapValue(scrollPercentage, 92, 95, 50, 40);
    cards[3].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[3].style.top = `${movementOut}%`;
    cards[3].style.translate = `-50% -${movementOut}%`;
  }
  cards.forEach((card, i) => {
    if (i !== active) {
      card.style.opacity = "0";
    }
  });
});

function mapValue(value, start1, end1, start2, end2) {
  return Math.round(
    ((value - start1) / (end1 - start1)) * (end2 - start2) + start2
  );
}

const isBetween = (start, end, value) => value >= start && value <= end;

//Typing Text
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hi, I'm Derek! 👋"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // if (!cursorSpan.classList.contains("typing"))
    //   cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // cursorSpan.classList.remove("typing");
    // setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

setTimeout(type, newTextDelay + 250);
