import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Select the containers for marquee content
const marqueeContent = document.querySelector(".marquee-content");
const marqueeContentDuplicate = document.querySelector(
  ".marquee-content--duplicate"
);

// Create a base box element
const boxEl = document.createElement("div");
boxEl.classList.add("card");

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Append multiple boxes with numbers inside to create a marquee effect
for (let i = 1; i <= 8; i++) {
  const boxCopy = boxEl.cloneNode();
  // boxCopy.style.backgroundColor = getRandomColor(); // Assign random color
  boxCopy.textContent = i; // Add number inside the box
  marqueeContent.appendChild(boxCopy);

  // Also append the same box to the duplicate content for seamless effect
  const boxCopyDuplicate = boxCopy.cloneNode(true);
  marqueeContentDuplicate.appendChild(boxCopyDuplicate);
}

gsap.to(".square", {
  x: 1000,
  duration: 3,
  scrollTrigger: {
    trigger: ".square",
    start: "center center",
    end: "bottom 30%",
    markers: true,
    scrub: 5,
    pin: true,
  },
});

gsap.fromTo(
  ".contentBox",
  {
    scale: 0.8,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: ".contentBox",
      scrub: true,
    },
  }
);
