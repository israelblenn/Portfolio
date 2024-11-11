if (window.screen.width > 1280) {

  let rem
  if (window.innerHeight < 1000) { rem = window.innerHeight/1000 }

  let fullHeight = 100
  
  // When the user scrolls down, animate key to come up to meet main section
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("main").style.height = 700*rem + "px";
    } else {
      document.getElementById("main").style.height = fullHeight + "vh";
    }
  }

  // When user scrolls to the bottom, have key section fade to white
  document.addEventListener('scroll', () => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
          document.getElementById("key").style.opacity = "0%";
          document.getElementById("break").style.opacity = "0%";
      } else {
          document.getElementById("key").style.opacity = "100%";
          document.getElementById("break").style.opacity = "100%";
      }
  });

} else {

  // When the user scrolls down, animate key to come up to meet main section
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() { 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("main").style.height = "1800px";
    } else {
      document.getElementById("main").style.height = "100vh";
    }
  }

};