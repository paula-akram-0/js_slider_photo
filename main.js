var imgs = Array.from(document.querySelectorAll(".item img"))
var outerBox =document.getElementById("outerBox")
var innerBox = document.getElementById("innerBox")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var currentIndex = 0
for (var i =0 ; i<imgs.length; i++){
    imgs[i].addEventListener("click",function(e){
        outerBox.style.display="flex";
        var imgsrc = e.target.getAttribute("src")
        innerBox.style.backgroundImage = `url(${imgsrc})`
        currentIndex= imgs.indexOf(e.target)
    })
}
next.addEventListener("click",nextElement)
function nextElement(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var imgsrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage=`url(${imgsrc})`
}
prev.addEventListener("click",prevElement)
function prevElement(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = imgs.length -1
    }
    var imgsrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage=`url(${imgsrc})`
}


close.addEventListener("click",closeElement)
function closeElement(){
    outerBox.style.display ="none"
}
outerBox.addEventListener("click",function(e){
    if(e.target.getAttribute("id")=="outerBox")
    closeElement()
})


