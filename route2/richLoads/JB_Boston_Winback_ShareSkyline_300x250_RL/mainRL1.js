var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.addLabel('frame1', 0)
    .to('#cloudSK1',1,{x:126, opacity:1,ease: Power1.easeOut}, "frame1+=0.5")
    .to('#copy1',1,{opacity:0,ease: Power1.easeOut}, "frame1+=3")
    .to('#blueSkyF1',1,{y:170,ease: Power1.easeOut}, "frame1+=4.5")
    .to('#cloudSK1',1,{x:-60, opacity:0,ease: Power1.easeIn}, "frame1+=4.5")

  tl.addLabel('frame2', 5)
    .to('#cloudSK2',1.5,{x:-80, opacity:1,ease: Power1.easeIn}, "frame2+=0.5")
    .to('#PaperP1',1.5,{x:223,y:-195, opacity:1,ease: Power1.easeOut}, "frame2+=1")
    .to('#PaperP2',1.5,{x:-146,y:129, opacity:1,ease: Power1.easeOut}, "frame2+=1")
    .to('#copy2',1,{opacity:1,ease: Power1.easeOut}, "frame2+=1.5")
    .to('#copy3',1,{opacity:1,ease: Power1.easeOut}, "frame2+=2")

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();

}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;