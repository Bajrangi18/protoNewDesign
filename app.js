const btn = document.getElementById('btn');
const para = document.getElementById('logs');

// btn.addEventListener("click", () =>{
//         para.style.transform = 'rotate(90deg)';
//    })

   window.addEventListener("orientationchange", function(event) {
     para.style.transform = 'rotate(90deg)';
   });
