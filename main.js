

let btn = document.getElementById('scroll')
const xxx = document.querySelector('.xxx')
const bars = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const humburgerMenu = document.querySelector('.humburger')



humburgerMenu.addEventListener('click', ()=>{
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    xxx.classList.toggle("active");
})





// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });





document.addEventListener("DOMContentLoaded", function(){
    
      $('.slider').slick({
    
         dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    
        autoplay: true ,
        autoplaySpeed: 1500 ,
        // pauseOnHover: true ,
        // pauseOnFocus: true ,


        prevArrow: "prev",
        nextArrow: "next",

        responsive:[
            {
                breakpoint:768 ,
                settings: {
                    slidesToShow:2 ,
                    slidesToScroll: 1 ,
                    infinite: true ,
                    dots: true,
                      prevArrow: false,
                     nextArrow: false,

                }
            },
            {

                breakpoint:528 ,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1 ,
                      prevArrow: "prev",
                        nextArrow: "next",


                }
            }
        ]






    
      });
                    
    






})    












window.addEventListener("scroll" ,()=> {
    
    
    if(this.scrollY >= 700){
        btn.style.visibility = 'visible';
        btn.style.opacity = 1;
        btn.style.bottom = "50px";
    }else{
         btn.style.visibility= 'hidden';
         btn.style.opacity= 0;
         btn.style.bottom= "100%";
    }
    
})





btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}


 new WOW().init();