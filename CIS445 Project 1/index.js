const main = document.querySelector('main');
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.nav-link');
const externalContainer = document.querySelector('.external');
let portfolioSnapped = false;

main.addEventListener('scroll', () => {
  const scrollPosition = main.scrollTop;
  const windowHeight = main.clientHeight;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition + windowHeight <= sectionBottom) {
      // Remove the red underline from all navigation links
      navLinks.forEach(link => link.classList.remove('red-underline'));

      // Add the red underline to the corresponding navigation link
      navLinks[index].classList.add('red-underline');
    }
  });
});

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = ["Welcome to my website!", "Please take a look around.", "But don't break anything!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("#intro-text").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

document.addEventListener('DOMContentLoaded', function (event) {
  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

  setTimeout(function () {
    $cont.classList.remove('s--inactive');
  }, 200);

  $elsArr.forEach(function ($el) {
    $el.addEventListener('click', function () {
      if (this.classList.contains('s--active')) return;
      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });

  $closeBtnsArr.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
});

const cube = document.querySelector(".cube");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);
