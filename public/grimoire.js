//
//
//   	                              ▄▄ • ▄▄▄  ▪  • ▌ ▄ ·.       ▪  ▄▄▄  ▄▄▄ .      ▐▄▄▄.▄▄ ·
//   	                             ▐█ ▀ ▪▀▄ █·██ ·██ ▐███▪ ▄█▀▄ ██ ▀▄ █·▀▄.▀·       ·██▐█ ▀.
//   	                             ▄█ ▀█▄▐▀▀▄ ▐█·▐█ ▌▐▌▐█·▐█▌.▐▌▐█·▐▀▀▄ ▐▀▀▪▄     ▪▄ ██▄▀▀▀█▄
//   	                             ▐█▄▪▐█▐█•█▌▐█▌██ ██▌▐█▌▐█▌.▐▌▐█▌▐█•█▌▐█▄▄▌     ▐▌▐█▌▐█▄▪▐█
//   	                             ·▀▀▀▀ .▀  ▀▀▀▀▀▀  █▪▀▀▀ ▀█▄▀▪▀▀▀.▀  ▀ ▀▀▀   ▀   ▀▀▀• ▀▀▀▀
//
//   	                                        Copyright © 2023 Israel Blennerhasset
//   	                                              israelblennerhassett.com
//



// ATTENTION PROSPECTIVE EMPLOYERS ⚠
// Woah don't look too close this is the first proper site that
// I coded and it is not that good heh...   ok you can look BUT 
// DON'T JUDGE!!!  I had to make deals with prediluvian gods to 
// get this working.



// Checking device width for responsive js
let mobileDevice
if (window.matchMedia("(max-width: 768px)").matches) {
  mobileDevice = true
}

const vw = window.innerWidth
const vh = window.innerHeight

// let loaded
// function unveil(){
//   document.querySelector(".veil").style.animation = "example 600ms ease-out forwards"
//   loaded = true
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                  MATTER.JS PHYSICS ENGINE                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Matter.use(MatterWrap)

const matterContainer = document.querySelector("#matter-container")

// module aliases
var
  Bodies      =   Matter.Bodies,
  Body        =   Matter.Body,
  Common      =   Matter.Common,
  Composite   =   Matter.Composite,
  Constraint  =   Matter.Constraint,
  Engine      =   Matter.Engine,
  Events      =   Matter.Events,
  Mouse       =   Matter.Mouse,
  Render      =   Matter.Render,
  Runner      =   Matter.Runner,
  Svg         =   Matter.Svg,
  Vector      =   Matter.Vector,
  Vertices    =   Matter.Vertices
;



// create an engine
var engine = Engine.create()
var world = engine.world

if ( mobileDevice != true) {
  world.gravity.y = 0 //     <-- removing gravity
}

// create a renderer
var render = Render.create({
  element: matterContainer,
  engine: engine,
  options: {
    width: matterContainer.clientWidth,
    height: matterContainer.clientHeight,
    background: "transparent",
    wireframes: false ,
    // showAngleIndicator: false,
    // pixelRatio: 1
  }
})

// run the renderer and engine
Render.run(render)
Runner.run(Runner.create(), engine)







// BUILD LETTER BODIES ==========================================================================================================

let letters

if (mobileDevice != true) {

  //                    ===★ 𝓜𝔂 𝓐𝓬𝓻𝓸𝓼𝓽𝓲𝓬 ★===
  letters = {
    0:  {x: 30,   y: 29}, //  I nteresting
    1:  {x: 52,   y: 34}, //  S exy
    2:  {x: 67,   y: 30}, //  R eliable
    3:  {x: 86,   y: 34}, //  A mbitious
    4:  {x: 103,  y: 32}, //  E pic
    5:  {x: 116,  y: 25}, //  L eg-rest

    6:  {x: 30,   y: 73}, //  B
    7:  {x: 51,   y: 73}, //  L
    8:  {x: 65,   y: 80}, //  E
    9:  {x: 83,   y: 79}, //  N
    10: {x: 98,   y: 79}, //  N
    11: {x: 115,  y: 78}, //  E
    12: {x: 135,  y: 73}, //  R
    13: {x: 150,  y: 68}, //  H
    14: {x: 174,  y: 75}, //  A
    15: {x: 193,  y: 73}, //  S
    16: {x: 205,  y: 71}, //  S
    17: {x: 219,  y: 68}, //  E
    18: {x: 235,  y: 59}, //  T
    19: {x: 250,  y: 58}, //  T
  }

} else {
  letters = { // mobile letter positions
    0:  {x: 18,   y: 20},
    1:  {x: 32,   y: 23},
    2:  {x: 42,   y: 21},
    3:  {x: 58,   y: 23},
    4:  {x: 70,  y: 22},
    5:  {x: 80,  y: 19},

    6:  {x: 15,   y: 56},
    7:  {x: 29,   y: 56},
    8:  {x: 37,   y: 51},
    9:  {x: 53,   y: 55},
    10: {x: 63,   y: 50},
    11: {x: 75,  y: 42},
    12: {x: 89,  y: 50},
    
    13: {x: 9,  y: 90},
    14: {x: 24,  y: 85},
    15: {x: 39,  y: 86},
    16: {x: 47,  y: 80},
    17: {x: 57,  y: 80},
    18: {x: 68,  y: 78},
    19: {x: 85,  y: 80},
  }
}

let x, y, xOffset, yOffset, scaleFactor;

if (mobileDevice != true) {
  xOffset = 50; yOffset = 15 //   <-- offset starting position of letters
} else{
  xOffset = 0; yOffset = 1000
}


for (let i = 0; i < 20; i++){

  let thispath = "#_" + i


  // Positioning Letters
  if (mobileDevice != true) {
    x = matterContainer.clientHeight / 100 * letters[i].x
    y = matterContainer.clientHeight / 100 * letters[i].y  
  } else{
    x = matterContainer.clientWidth / 100 * letters[i].x
    y = matterContainer.clientWidth / 100 * letters[i].y       
  }

  
  document.querySelectorAll(thispath).forEach((path) => {

    let vertices = Svg.pathToVertices(path, 
      sampleLength = 100 //         <-- SVG Resolution  (lower = smoother lines & more load time)
    )

    let thispath

    if (mobileDevice != true) {
      thispath = Bodies.fromVertices(

        x - xOffset, y - yOffset, //    <-- Starting Position
    
        [Vertices.scale(vertices, 1, 1)],
  
        { //     PHYSICS
          friction: 0.3,
          frictionAir: 0.005,           
          restitution: 0.1,   
          
          //    APPEARANCE
          render: {
            fillStyle: "#000000",
            strokeStyle: "#000000",
            lineWidth: 1
          },
  
          plugin: {wrap: {min: {x: 0, y: 0}, max: {x: matterContainer.clientWidth, y: matterContainer.clientHeight}}},
        }
      )
    } else {
      // Getting rid of wrap in mobile view
      thispath = Bodies.fromVertices(
        x - xOffset, y - yOffset, [Vertices.scale(vertices, 1, 1)],
        {
          friction: 0.3,
          frictionAir: 0.005,           
          restitution: 0.1, 
          render: { fillStyle: "#000000", strokeStyle: "#000000", lineWidth: 1}
        }
      )
    }
    

    // Resizing path to fit viewport (setting this inside Vertices.scale seems to cause more artifacts)
    if (mobileDevice != true) {
      scaleFactor = matterContainer.clientHeight * 0.3 / 280 // (vh) * (fraction of screen) / (default svg width in px)... try 260
    } else{
      scaleFactor = matterContainer.clientWidth * 0.3 / 280 // REVIEW THIS <--- (was 0.2 originally)
    }
    Body.scale(thispath, scaleFactor, scaleFactor)
    
    Composite.add(world, thispath)
    
  })
}






// CREATE BOUNDRIES AT THE TOP AND BOTTOM OF THE VIEWPORT =======================================================================

const groundwidth = 60

var ground = Bodies.rectangle(
  matterContainer.clientWidth / 2,
  matterContainer.clientHeight + groundwidth / 2,
  matterContainer.clientWidth,
  groundwidth,
  {
    isStatic: true,
    render: {visible: false}
  }
  
)

var roof = Bodies.rectangle(
  matterContainer.clientWidth / 2,
  -groundwidth / 2,
  matterContainer.clientWidth,
  groundwidth,
  { 
    isStatic: true,
    render: {visible: false}
  }
)

let leftWall = Bodies.rectangle(
  0 - groundwidth / 2,
  matterContainer.clientHeight / 2,
  groundwidth,
  matterContainer.clientHeight,
  {
    isStatic: true,
    render: {visible: false}
  }
);

let rightWall = Bodies.rectangle(
  matterContainer.clientWidth + groundwidth / 2,
  matterContainer.clientHeight / 2,
  groundwidth,
  matterContainer.clientHeight,
  { 
    isStatic: true,
    render: {visible: false}
  }
);



loaded = true
if (mobileDevice == true) { 
  
  Composite.add(world, [rightWall, leftWall, ground])
  setTimeout(() => { Composite.add(world, [roof]) }, "1800")
  
} else {
  Composite.add(world, [ground, roof])
}


// Make objects grabable by the mouse
let mouse = Mouse.create(render.canvas)
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
})

Composite.add(world, mouseConstraint)



// allow scroll through the canvas
mouseConstraint.mouse.element.removeEventListener(
  "mousewheel",
  mouseConstraint.mouse.mousewheel
)
mouseConstraint.mouse.element.removeEventListener(
  "DOMMouseScroll",
  mouseConstraint.mouse.mousewheel
)



// Reposition boundries when window is resized
function handleResize(matterContainer) {

  render.canvas.width = matterContainer.clientWidth
  render.canvas.height = matterContainer.clientHeight

  Body.setPosition(
    ground,
    Vector.create(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + groundwidth / 2
    )
  )

  Body.setPosition(
    roof,
    Vector.create(
      matterContainer.clientWidth / 2,
      -groundwidth / 2
    )
  )
  if (mobileDevice == true) {

    Body.setPosition(
      rightWall,
      Vector.create(
        matterContainer.clientWidth + groundwidth / 2,
        matterContainer.clientHeight / 2
      )
    )  

  }
}

window.addEventListener("resize", () => handleResize(matterContainer))



//                                                                                                                   .-
//                                                                                                                  (
// CREATING MOUSE BODY ==============================================================================================\===========
//                                                                                                                    |
var headlessMouse = Bodies.circle(  //                                                            _..---"""""-.      /                             
  0, 0, 20, {                       // 𝘛𝘳𝘦𝘴 𝘤𝘢𝘦𝘤𝘰𝘴 𝘮𝘶𝘳𝘦𝘴. 𝘛𝘳𝘦𝘴 𝘤𝘢𝘦𝘤𝘰𝘴 𝘮𝘶𝘳𝘦𝘴.                    ,--'             `\__.:
    friction: 1,                    // 𝘝𝘪𝘥𝘦 𝘲𝘶𝘰𝘮𝘰𝘥𝘰 𝘤𝘶𝘳𝘳𝘶𝘯𝘵. 𝘝𝘪𝘥𝘦 𝘲𝘶𝘰𝘮𝘰𝘥𝘰 𝘤𝘶𝘳𝘳𝘶𝘯𝘵.        Ɛ==/    [אמת]   /     /--'
    frictionAir: 0,                 // 𝘊𝘶𝘳𝘳𝘦𝘣𝘢𝘯𝘵 𝘰𝘮𝘯𝘦𝘴 𝘢 𝘴𝘢𝘤𝘦𝘳𝘥𝘰𝘴 𝘪𝘶𝘴𝘵𝘶𝘴;                      ;            \    (
    restitution: 1,                 // 𝘘𝘶𝘪 𝘮𝘰𝘳𝘣𝘰𝘴 𝘴𝘶𝘣 𝘯𝘰𝘮𝘪𝘯𝘦 𝘌𝘭𝘰𝘩𝘪𝘮 𝘌𝘭𝘰.                      )\  |-..____.-;-.  >
    isSensor: true,                 // 𝘝𝘪𝘥𝘪𝘴𝘵𝘪 𝘵𝘢𝘭𝘦𝘮 𝘢𝘴𝘱𝘦𝘤𝘵𝘶𝘮 𝘪𝘯 𝘷𝘪𝘵𝘢 𝘵𝘶𝘢                       / / /      `--' .' /
    render: {                       // 𝘜𝘵 𝘵𝘳𝘦𝘴 𝘤𝘢𝘦𝘤𝘰𝘴 𝘮𝘶𝘳𝘦𝘴?                               .'.'_/           `--'
      visible: false                //                                                  `` ``
    }                                 
  }
)

if (mobileDevice != true) {
  Composite.add(world, [headlessMouse])
}

Matter.MouseConstraint.update = function(mouseConstraint) {
  var
  constraint = mouseConstraint.constraint,
  body = Composite.allBodies(world)[Composite.allBodies(world).length-1]

  constraint.pointA = mouseConstraint.mouse.position
  constraint.bodyB = mouseConstraint.body = body
  constraint.angleB = body.angle
}


setTimeout(() => { headlessMouse.isSensor = false }, "1000")





// MAKE GRAVITY RESPOND TO MOBILE DEVICE ORIENTATION ============================================================================

if (mobileDevice == true) {setTimeout(() => {
  
  function updateGravity(event){

    engine.world.gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
    engine.world.gravity.y = Common.clamp(event.beta, -90, 90) / 90;

  };

  window.addEventListener('deviceorientation', updateGravity, true);

}, "1800")}







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                 CURSOR & HORIZONTAL SCROLL                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(ScrollTrigger)

let sharedProgress
let sharedX
const cursor = document.querySelector(".cursor")
const siteWidth = document.querySelector(".full-width-container").offsetWidth
let horizontalScroll
const scrollSpeed = 0.8

// THIS VERSION OF siteWidth RETURNS A VALUE WITH DECIMAL PLACES
// const siteWidth = window.getComputedStyle(document.querySelector('.full-width-container'), null).getPropertyValue("width").replace('px', '')

if (mobileDevice != true) {

  // make cursor visble after 1 second
  setTimeout(() => {
    cursor.style.visibility = "visible"
    cursor.classList.add("spawnAnimation")
  }, "1000")

  // Position cursor to mouse location (and correct for scroll animation)
  window.addEventListener("mousemove", function (e) {
    sharedX = e.clientX

    cursor.style.left = `${sharedX + sharedProgress*(siteWidth-vw)}px`
    // cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`
    // cursor.style.top = `${e.clientY * 1.25}px`

  })

  // have cursor dissapear when mouse leaves the page 
  document.addEventListener("mouseover", function(){cursor.style.display = "inline"})
  document.addEventListener("mouseleave", function(){cursor.style.display = "none"})


  // Apply apropriate cursor styles when hovering
  function addHoverClass(element, className) {
    element.addEventListener('mouseover', function() {cursor.classList.add(className)}, false)
    element.addEventListener('mouseleave', function() {cursor.classList.remove(className)}, false)
  }

  const focusElements = document.getElementsByClassName("focusCursor")
  const expandElements = document.getElementsByClassName("expandCursor")

  for (var i = 0; i < focusElements.length; i++) { addHoverClass(focusElements[i], "hoverFocus") }
  for (var i = 0; i < expandElements.length; i++) { addHoverClass(expandElements[i], "hoverExpand") }


  
  // Scroll page horizontally
  horizontalScroll = gsap.to(".full-width-container", {
    xPercent: -100,
    x: () => vw,
    onUpdate() { // Make mouse and outline move in line with scrolling animation
      sharedProgress = this.progress()
      cursor.style.left = `${sharedX + sharedProgress*(siteWidth-vw)}px`
      document.querySelector(".outline").style.left = `${sharedProgress*(siteWidth-vw)+vw/4}px`
    },
    ease: "none",
    scrollTrigger: {
      pin: ".pin-container",
      trigger: ".pin-container",
      start: "left left",
      end: () => `+=${siteWidth * scrollSpeed} right`,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  })

}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                    NAVIGATION ANIMATIONS                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(ScrollToPlugin)
ScrollToPlugin.autoKillThreshold = 1;

let position
let containerOffset
let elementOffset
let elementWidth
let verticalisedPosition


const alignmentValues = {
  "center": 0.5,
  "left": 0,
  "right": 1
}


function jumpTo(element, alignment){

  alignment = alignmentValues[alignment]

  containerOffset = document.querySelector(".full-width-container").getBoundingClientRect().left
  elementOffset = document.querySelector(element).getBoundingClientRect().left
  elementWidth = document.querySelector(element).offsetWidth

  // Calculating where the viewport should scroll to
  position = Math.round(containerOffset * -1 + elementOffset - vw*alignment + elementWidth*alignment);
  verticalisedPosition = position/(siteWidth-vw)*horizontalScroll.scrollTrigger.end; // this is necessary because the scroll technically still takes place on the y-axis

  gsap.to(window, {
    duration: 1, // <-- change speed of scroll-jump animation
    scrollTo: {y: verticalisedPosition, autoKill: true},
  });

}


function goTo(address) { window.location.href = address}

function openTo(address){
  window.open(
    'externalPages/' + address + "/" + address + ".html",
    '_blank' // <- open in a new window.
  );
}

function linkTo(address){
  window.open(
    address,
    '_blank'
  );
}


// Mobile Navigation
function changeTo(animation, destination){

  let
    workMargin = 0,
    homeMargin = 0,
    titleHeight,
    workPageFooter = document.querySelector(".workPageFooter")
  ;

  if (animation == "swap") {
      document.querySelector(".link-theHarbourAgency").style.display = "flex"
    document.querySelector(".link-markBoChu").style.display = "flex"
    document.querySelector(".link-lismoreBaptist").style.display = "flex"
    document.querySelector(".link-yourSky").style.display = "flex"
    document.getElementById("d1").style.display = "block"
    document.getElementById("d2").style.display = "block"
    document.getElementById("d3").style.display = "block"
    workPageFooter.style.display = "block"
  }

  if (destination == "home") {
    workMargin = vw
  } else {

    homeMargin = -vw
    document.querySelector(".workContent").innerHTML = document.querySelector("." + destination).innerHTML
    document.querySelector(".link-" + destination).style.display = "none"

    if (destination == "markBoChu") {
      document.getElementById("d1").style.display = "none" 
    } else if (destination == "theHarbourAgency") {
      document.getElementById("d3").style.display = "none"
    } else {
      document.getElementById("d2").style.display = "none"
    }

    titleHeight = window.getComputedStyle(document.querySelector(".title"), null).getPropertyValue("height").replace('px', '')
    document.querySelector(".images").style.marginTop = titleHeight - 40 + "px"
  }

  let
    footerPosition = workPageFooter.getBoundingClientRect().y,
    footerHeight = Number(window.getComputedStyle(workPageFooter, null).getPropertyValue("height").replace('px', ''))
  ;

  // If the footer menu doesn't fit on the page, get rid of it. (implemented for iPhone SE).
  if (footerPosition + footerHeight > vh) {
    workPageFooter.style.display = "none"
  }

  if (animation == "swipe") {

    // The following replaces the code below so that mobile page "swipes" now just cut to their destination.
    // Justification: swiping animations where lagging my phone.

    if (destination == "home") {
      document.querySelector(".workPage").style.display = "none"
      document.querySelector(".mobile-home").style.display = "flex"

      document.querySelector(".link-theHarbourAgency").style.display = "flex"
      document.querySelector(".link-markBoChu").style.display = "flex"
      document.querySelector(".link-lismoreBaptist").style.display = "flex"
      document.querySelector(".link-yourSky").style.display = "flex"
      document.getElementById("d1").style.display = "block"      
      document.getElementById("d2").style.display = "block"
      workPageFooter.style.display = "block"
    } else {
      document.querySelector(".mobile-home").style.display = "none"
      document.querySelector(".workPage").style.display = "flex"
      document.querySelector(".workPage").style.margin = 0
    }

    if (destination != "home") {
      titleHeight = window.getComputedStyle(document.querySelector(".title"), null).getPropertyValue("height").replace('px', '')
      document.querySelector(".images").style.marginTop = titleHeight - 40 + "px"
    }

    // gsap.to(".mobile-home", {
    //   marginLeft: homeMargin,
    //   duration: 1.3,
    //   ease: 'power1.inOut',
    //   onStart: function(){ document.querySelector(".mobile-home").style.pointerEvents = "none" },
    //   onComplete: function(){ document.querySelector(".mobile-home").style.pointerEvents = "auto" }
    // })

    // gsap.to(".workPage", {
    //   marginLeft: workMargin,
    //   duration: 1.3,
    //   ease: 'power1.inOut',
    //   onStart: function(){ document.querySelector(".workPage").style.pointerEvents = "none" },
    //   onComplete: function(){ document.querySelector(".workPage").style.pointerEvents = "auto" 
    //     if (destination == "home") { 
    //       document.querySelector(".link-lismoreBaptist").style.display = "flex"
    //       document.querySelector(".link-yourSky").style.display = "flex"
    //       document.querySelector(".link-visualisingPersonality").style.display = "flex"
    //       document.getElementById("d1").style.display = "block"      
    //       document.getElementById("d2").style.display = "block"
    //       workPageFooter.style.display = "block"
    //     }
    //   }
    // })

  }

}










/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        SITE OUTLINE                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gsap.registerPlugin(TextPlugin)



// making value responsive 
let rem
if (vh < 880 && mobileDevice != true) { rem = vh/880 } else { rem = 1 }
const works = 4

let showcase1_offset = (vw+(200+450)*rem)/2*(vw/siteWidth)
let showcase2_offset = (vw+(200+1100+450)*rem)/2*(vw/siteWidth)
let showcase3_offset = (vw+(200+1100+1100+450)*rem)/2*(vw/siteWidth)
let showcase4_offset = (vw+(200+1100+1100+1100+450)*rem)/2*(vw/siteWidth)

// let showcase2 = 200+900
// let showcase3 = 1100+1100
// let showcase4 = 1100+1100+1100
// let showcase1 = 1100+1100+1100+1100

let showcase1 = 0
let showcase2 = 800
let showcase3 = 800+800
let showcase4 = 800+800+800

let thumbWidth = vw/2*(vw/siteWidth) // (px)

let homeWidth = vw/siteWidth*100 // (%)
let workWidth = (200+1100*works)/siteWidth*100*rem // (%)
let contactWidth = 1580/siteWidth*100*rem // (%)

if (mobileDevice != true) {

  // position labels
  document.getElementById("showcase1").style.marginLeft = showcase1_offset + "px"
  document.getElementById("showcase2").style.marginLeft = showcase2_offset + "px"
  document.getElementById("showcase3").style.marginLeft = showcase3_offset + "px"
  document.getElementById("showcase4").style.marginLeft = showcase4_offset + "px"

  // set dimensions of thumb in relation to screen size
  document.getElementById("thumb").style.width = thumbWidth + "px"

  // set dimensions & positions of sections
  document.getElementById("homePortion").style.width = homeWidth + "%"
  document.getElementById("workPortion").style.width = workWidth + "%"
  document.getElementById("contactPortion").style.width = contactWidth + "%"
  document.getElementById("workPortion").style.marginLeft = homeWidth + "%"
  document.getElementById("contactPortion").style.marginLeft = homeWidth+workWidth + "%"


  // animate thumb on scroll
  gsap.to('.thumb', {
    marginLeft: "calc(100% - " + thumbWidth + "px)",
    ease: 'none',
    scrollTrigger: { scrub: 1 }
  })





  // limiting values to the actual scrollable area
  let ap = siteWidth/(siteWidth-vh)

  // Animate first showcase label
  gsap.to("#showcase1_1", {
    text: "The",
    scrollTrigger: {start: `${showcase1*ap*rem+vw/2} top`, end: `${showcase1*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase1_2", {
    text: "Harbour",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase1*ap*rem+vw/2} top`, end: `${showcase1*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase1_3", {
    text: "Agency",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase1*ap*rem+vw/2} top`, end: `${showcase1*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase1_1", {
    text: "The",
    scrollTrigger: {start: `${(showcase1+800)*ap*rem+vw/2} top`, end: `${(showcase1+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase1_2", {
    text: "Harbour",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase1+800)*ap*rem+vw/2} top`, end: `${(showcase1+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase1_3", {
    text: "Agency",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase1+800)*ap*rem+vw/2} top`, end: `${(showcase1+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  


  // Animate second showcase label
  gsap.to("#showcase2_1", {
    text: "Mark",
    scrollTrigger: {start: `${showcase2*ap*rem+vw/2} top`, end: `${showcase2*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase2_2", {
    text: "Bo",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase2*ap*rem+vw/2} top`, end: `${showcase2*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase2_3", {
    text: "Chu",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase2*ap*rem+vw/2} top`, end: `${showcase2*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase2_1", {
    text: "Mark",
    scrollTrigger: {start: `${(showcase2+800)*ap*rem+vw/2} top`, end: `${(showcase2+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase2_2", {
    text: "Bo",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase2+800)*ap*rem+vw/2} top`, end: `${(showcase2+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase2_3", {
    text: "Chu",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase2+800)*ap*rem+vw/2} top`, end: `${(showcase2+800)*ap*rem+vw/2} top`, scrub: 1},
  })

  // Animate third showcase label
  gsap.to("#showcase3_1", {
    text: "Lismore",
    scrollTrigger: {start: `${showcase3*ap*rem+vw/2} top`, end: `${showcase3*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase3_2", {
    text: "Baptist",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase3*ap*rem+vw/2} top`, end: `${showcase3*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase3_1", {
    text: "Lismore",
    scrollTrigger: {start: `${(showcase3+800)*ap*rem+vw/2} top`, end: `${(showcase3+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase3_2", {
    text: "Baptist",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase3+800)*ap*rem+vw/2} top`, end: `${(showcase3+800)*ap*rem+vw/2} top`, scrub: 1},
  })

  // Animate fourth showcase label
  gsap.to("#showcase4_1", {
    text: "Light",
    scrollTrigger: {start: `${showcase4*ap*rem+vw/2} top`, end: `${showcase4*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase4_2", {
    text: "Pollution",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase4*ap*rem+vw/2} top`, end: `${showcase4*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.to("#showcase4_3", {
    text: "Simulator",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${showcase4*ap*rem+vw/2} top`, end: `${showcase4*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase4_1", {
    text: "Light",
    scrollTrigger: {start: `${(showcase4+800)*ap*rem+vw/2} top`, end: `${(showcase4+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase4_2", {
    text: "Pollution",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase4+800)*ap*rem+vw/2} top`, end: `${(showcase4+800)*ap*rem+vw/2} top`, scrub: 1},
  })
  gsap.from("#showcase4_3", {
    text: "Simulator",
    marginLeft: 4*rem,
    scrollTrigger: {start: `${(showcase4+800)*ap*rem+vw/2} top`, end: `${(showcase4+800)*ap*rem+vw/2} top`, scrub: 1},
  })





  // have outline appear on-scroll
  let scrolled
  let duration = 0
  let scrollReminder = document.querySelector(".scrollReminder")



  document.addEventListener("scroll", function(){

    if (scrolled != true) {
      
      if (scrollReminder.style.opacity != 0) {
        duration = 0.5
      }

      gsap.timeline()
        .to('.scrollReminder', {
          opacity: 0,
          duration: duration,
          ease: 'power1.inOut',
          onStart: function(){ scrollReminder.style.classList.remove("winker") },
          onComplete: function(){ scrollReminder.style.visibility = "hidden" }
        })
        .to('.outline', {
          opacity: 1,
          bottom: 15*rem,
          duration: 0.5, 
          ease: 'power1.inOut', 
          onStart: function(){ document.querySelector(".outline").style.visibility = "visible" },
          onComplete: function(){ 

            // |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|
            // |  Making the outline respond to the color of the background   |
            // |  and making it possible to dissable this in Firefox because  |
            // |  I was getting some weird cross-browser CSS buggs.  ╥ _ ╥    |
            // |______________________________________________________________|

            document.querySelector(".outline").classList.add("invertBackground")

            document.getElementById("showcase1").classList.add("invertBackground")
            document.getElementById("showcase2").classList.add("invertBackground")
            document.getElementById("showcase3").classList.add("invertBackground")
            document.getElementById("showcase4").classList.add("invertBackground")

            document.querySelector(".thumb").classList.add("invert")
            document.querySelector(".homePortion").classList.add("invert")
            document.querySelector(".workPortion").classList.add("invert")
            document.querySelector(".contactPortion").classList.add("invert")

          }
        })
      ;

      scrolled = true
    }
  })



  // wait a bit then remind user to scroll
  setTimeout(() => {
    if (scrolled != true && window.scrollY == 0) {
      gsap.to('.scrollReminder', {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        onStart: function(){ scrollReminder.style.visibility = "visible"},
        onComplete: function(){ scrollReminder.classList.add("winker") },
      })
    }
  }, "7777")



  // Hide the outline when the user is at the contact section
  let athend

  document.addEventListener('scroll', () => {

    if (window.scrollY*ap+1 >= siteWidth) {
      gsap.to(".outline", {
        opacity: 0,
        y: 15*rem,
        duration: 0.5, 
        ease: 'power1.inOut', 
      })
      athend = true
    } else if (athend == true){
      gsap.to(".outline", {
        opacity: 1,
        y: 0*rem,
        duration: 0.5, 
        ease: 'power1.inOut', 
      })
      athend = false
    }

  });


}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        CONTACT FORM                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let clicked = false
var tweeny

const form = document.getElementById('form');
const result = document.getElementById('contactBtnText');

// the following uses the web3forms api to read the data and send an email to my inbox accordingly
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  document.querySelector(".contactBtn").style.pointerEvents = "none"

  gsap.timeline()
    .to(".contactBtn", {
      color: "white",
      background: "#0015ff"
    })
    .to("#contactBtnText", {
      opacity: 0,
    }, "<")
    .to(".contactBtn", {
      text: "...",
      onComplete: function(){
        tweeny = gsap.timeline({repeat: -1 })
          .fromTo(".contactBtn", { text: {value: "...", padSpace: true}}, { text: {value: "", padSpace: true}})
          .fromTo(".contactBtn", { text: {value: "", padSpace: true}}, { text: {value: "...", padSpace: true}}) 
        ;
      }
    })
  ;

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {

    let json = await response.json();

    if (response.status == 200) {
      console.log(response);

      tweeny.kill()
    
      gsap.timeline()
        .to(".contactBtn", {
          text: "",
          background: "#46c74a",
        })
        .to(".contactBtn", {
          text: "sent",
          duration: 0
        })
        .from(".contactBtn", {
          color: "#46c74a"
        }, "<")
        .to(".contactBtn", {
          background: "rgba(255, 255, 255, 0.3)",
          color: "black",
          onComplete: function(){ document.querySelector(".contactBtn").style.pointerEvents = "none" }
        }, 3)
      ;

    } else {
      console.log(response);
      result.innerHTML = json.message;
    }

  })
  .catch(error => {
    console.log(error);
    result.innerHTML = "ERROR";
  })
  .then(function() {
    form.reset();
    setTimeout(() => {
      result.style.display = "none";
    }, 3000);
  });

});