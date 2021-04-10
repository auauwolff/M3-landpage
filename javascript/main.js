
//------Change content chair colors 
//The code can also change the picture to match the color chosen

function change(){
    colors.src = "/img/black-chair.jpg"; 
    var colorName = document.getElementById("color-name")
    colorName.innerHTML = '';
    var newSpan = document.createElement("span");
    newSpan.innerText = "Black";
    colorName.appendChild(newSpan);
    
  }
  function change1(){
    colors.src = "/img/champagne.svg"; 
    var colorName = document.getElementById("color-name")
   colorName.innerHTML = '';
    var newSpan = document.createElement("span");
    newSpan.innerText = "Pink";
    colorName.appendChild(newSpan);
    
    
  }
  function change2(){
    colors.src = "/img/gre choc.svg"; 
    var colorName = document.getElementById("color-name")
    colorName.innerHTML = '';
    var newSpan = document.createElement("span");
    newSpan.innerText = "Grey";
    colorName.appendChild(newSpan);
  }
  function change3(){
    colors.src = "/img/rose.svg"; 
    var colorName = document.getElementById("color-name")
    colorName.innerHTML = '';
    var newSpan = document.createElement("span");
    newSpan.innerText = "Champagne";
    colorName.appendChild(newSpan);
  

}



//------Slick Slide
$('.chair__type').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  fade: true,
  asNavFor: '.chair__types'
});
$('.chair__types').slick({
  centerMode: true,
  centerPadding: '30px',
  asNavFor: '.chair__type',
  arrows: false,
  mobileFirst: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint:1000,
      settings: {
        arrows: true,
        centerMode: true,
        asNavFor: '.chair__type',
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1
        
      }
    }
  ]
});

//------Content menu accordion animation set

var menus = document.getElementsByClassName("content__specification-button");

for (var i = 0; i < menus.length; i++){
    menus[i].onclick = function () {
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;

        } else{
            content.style.maxHeight = content.scrollHeight + "px";

        }
    }
}