const cards = document.querySelectorAll(".featured-projects");

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  //console.log({ currentScroll });
  const maxBodyHeight =
    document.body.clientHeight - document.documentElement.clientHeight;
  //console.log({ body: document.body.clientHeight });
  //console.log({ window: document.documentElement.clientHeight });
  const scrollPercentage = Math.round((currentScroll / maxBodyHeight) * 100);
  console.log(`scrolled: ${scrollPercentage}%`);

  if (!isBetween(35, 100, scrollPercentage)) {
    cards.forEach((card, i) => {
      card.style.opacity = "0";
    });
  }

  if (isBetween(38, 42, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 38, 42, 0, 100);
    const movementIn = mapValue(scrollPercentage, 38, 42, 60, 50);
    cards[0].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[0].style.top = `${movementIn}%`;
    cards[0].style.translate = `-50% -${movementIn}%`;
  }
  if (isBetween(45, 49, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 45, 49, 100, 0);
    const movementOut = mapValue(scrollPercentage, 45, 49, 50, 40);
    cards[0].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[0].style.top = `${movementOut}%`;
    cards[0].style.translate = `-50% -${movementOut}%`;
  }

  if (isBetween(52, 56, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 52, 56, 0, 100);
    const movementIn = mapValue(scrollPercentage, 52, 56, 60, 50);
    cards[1].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[1].style.top = `${movementIn}%`;
    cards[1].style.translate = `-50% -${movementIn}%`;
  }
  if (isBetween(59, 63, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 59, 63, 100, 0);
    const movementOut = mapValue(scrollPercentage, 59, 63, 50, 40);
    cards[1].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[1].style.top = `${movementOut}%`;
    cards[1].style.translate = `-50% -${movementOut}%`;
  }

  if (isBetween(66, 70, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 66, 70, 0, 100);
    const movementIn = mapValue(scrollPercentage, 66, 70, 60, 50);
    cards[2].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[2].style.top = `${movementIn}%`;
    cards[2].style.translate = `-50% -${movementIn}%`;
  }
  if (isBetween(73, 77, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 73, 77, 100, 0);
    const movementOut = mapValue(scrollPercentage, 73, 77, 50, 40);
    cards[2].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[2].style.top = `${movementOut}%`;
    cards[2].style.translate = `-50% -${movementOut}%`;
  }

  if (isBetween(80, 84, scrollPercentage)) {
    const fadeInOpacity = mapValue(scrollPercentage, 80, 84, 0, 100);
    const movementIn = mapValue(scrollPercentage, 80, 84, 60, 50);
    cards[3].style.opacity = `${(fadeInOpacity / 100) * 2}`;
    cards[3].style.top = `${movementIn}%`;
    cards[3].style.translate = `-50% -${movementIn}%`;
  }
  if (isBetween(87, 91, scrollPercentage)) {
    const fadeOutOpacity = mapValue(scrollPercentage, 87, 91, 100, 0);
    const movementOut = mapValue(scrollPercentage, 87, 91, 50, 40);
    cards[2].style.opacity = `${(fadeOutOpacity / 100) * 2}`;
    cards[2].style.top = `${movementOut}%`;
    cards[2].style.translate = `-50% -${movementOut}%`;
  }
});
function mapValue(value, start1, end1, start2, end2) {
  return Math.round(
    ((value - start1) / (end1 - start1)) * (end2 - start2) + start2
  );
}

const isBetween = (start, end, value) => value >= start && value <= end;
