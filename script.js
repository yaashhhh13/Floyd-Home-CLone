var nav= document.querySelector("#nav")
var nav2= document.querySelector("#nav2")
var nav2ai= document.querySelector("#nav2a i")
var nav2ah1= document.querySelector("#nav2a h1")
var nav2bh1= document.querySelector("#nav2b h1")
var a1= document.querySelector("#a1")
var a2= document.querySelector("#a2")
var a3= document.querySelector("#a3")
var page2abody1 = document.querySelector("#page2abody1")
var page2abody1i = document.querySelector("#page2abody1 i")
var page2abody2 = document.querySelector("#page2abody2")
var page2abody2i = document.querySelector("#page2abody2 i")
var page2abody3 = document.querySelector("#page2abody3")
var page2abody3i = document.querySelector("#page2abody3 i")
var page2abody4 = document.querySelector("#page2abody4")
var page2abody4i = document.querySelector("#page2abody4 i")
var p2img1 = document.querySelector("#p2img1")
var p2img2 = document.querySelector("#p2img2")
var p2img3 = document.querySelector("#p2img3")
var p2img4 = document.querySelector("#p2img4")

gsap.to("#nav2",{
    backgroundColor : "rgb(248,246,237)",
    color : "black",
    scrollTrigger:{
        start: "top 0%",
        end: "top -10%",
        scrub : 1,
        markers : true
    }
})

gsap.to("#nav2b",{
    color : "red",
    scrollTrigger:{
        start: "top 0%",
        end: "top -10%",
        scrub : 1,
        markers : true
    }
})


page2abody1.addEventListener("mousemove",function(){
    page2abody1i.style.opacity = 1;
    p2img4.style.opacity = 0;
    p2img1.style.opacity = 1;
})
page2abody1.addEventListener("mouseleave",function(){
    page2abody1i.style.opacity = 0;
})
page2abody2.addEventListener("mousemove",function(){
    page2abody2i.style.opacity = 1;
    p2img1.style.opacity = 0;
    p2img2.style.opacity = 1;
})
page2abody2.addEventListener("mouseleave",function(){
    page2abody2i.style.opacity = 0;
})
page2abody3.addEventListener("mousemove",function(){
    page2abody3i.style.opacity = 1;
    p2img2.style.opacity = 0;
    p2img3.style.opacity = 1;
})
page2abody3.addEventListener("mouseleave",function(){
    page2abody3i.style.opacity = 0;
})
page2abody4.addEventListener("mousemove",function(){
    page2abody4i.style.opacity = 1;
    p2img3.style.opacity = 0;
    p2img4.style.opacity = 1;
})
page2abody4.addEventListener("mouseleave",function(){
    page2abody4i.style.opacity = 0;
})