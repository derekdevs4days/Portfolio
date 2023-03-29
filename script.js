const cards = document.querySelectorAll('.featured-projects');
const darkModeBTN = document.querySelector('.light-dark-btn');
const sunMoonIMG = document.querySelector('.light-dark');
const body = document.querySelector('body');

//THEME
darkModeBTN.addEventListener('click', changeTheme);

let isDarkModeOn = false;

function changeTheme(e) {
  if (isDarkModeOn) {
    sunMoonIMG.src = 'assets/moon.png';
    body.classList.remove('dark-theme');
    isDarkModeOn = false;
  } else {
    sunMoonIMG.src = 'assets/sun.png';
    body.classList.add('dark-theme');
    isDarkModeOn = true;
  }
}

//SCROLL
document.addEventListener('scroll', () => {
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
      card.style.opacity = '0';
      card.style.zIndex = '-1';
    });
  } else {
    cards.forEach((card, i) => {
      card.style.zIndex = '0';
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
      card.style.opacity = '0';
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
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const paragraph = document.querySelector('.container > p');

const textArray = ["Hi, I'm Derek! "];
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
    const span = document.createElement('span');
    span.innerText = '👋 ';
    span.classList.add('wave');
    paragraph.insertBefore(span, cursorSpan);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

setTimeout(type, newTextDelay + 250);

const options = {
  autoPlay: true,
  background: {
    color: {
      value: 'transparent',
    },
    image: '',
    position: '',
    repeat: '',
    size: '',
    opacity: 1,
  },
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      color: {
        value: 'transparent',
      },
      opacity: 1,
    },
    enable: false,
  },
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,

    zIndex: -1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: '#ff0000',
      animation: {
        h: {
          count: 0,
          enable: true,
          offset: 0,
          speed: 20,
          decay: 0,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true,
        },
      },
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      random: false,
      size: false,
      speed: 6,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: 30,
      value: 10,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 0.5,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        sync: false,
        destroy: 'none',
        startValue: 'random',
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: '#000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: 'circle',
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: {
        min: 0.1,
        max: 4,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        sync: false,
        destroy: 'none',
        startValue: 'random',
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
    },
    destroy: {
      bounds: {},
      mode: 'none',
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: 'vertical',
      speed: 25,
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: 'clockwise',
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: '#ffffff',
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: '#000',
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
};
