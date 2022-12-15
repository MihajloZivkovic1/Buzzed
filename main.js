
         //Dinamicko ispisivanje navigacije
         let nizHref = ["index.html","autor.html"];
         let nizTekst = ["HOME","AUTOR"];

         let divNavMeni = document.getElementById('navbarNavAltMarkup');

         let formatZaispis = `<div class="navbar-nav navbar-nav2">`
         for(let i in nizHref){
             formatZaispis += `<a class ="nav-item nav-link"  href ="${nizHref[i]}">"${nizTekst[i]}"</a>`;
         }
         formatZaispis += `</div></div>`;
         divNavMeni.innerHTML += formatZaispis;

         //ikonice
         let nizHref2 =["#","#","#","#"];
         let nizIkonice =["images/fb-icon.png","images/twitter-icon.png","images/linkdin-icon.png","images/instagram-icon.png"];
         let divIkonice =document.querySelector('.social_icon');
         let formatZaIspis2 = `<ul>`
         for(i in nizIkonice){
            formatZaIspis2 += `<li><a href="${nizHref2[i]}"><img src="${nizIkonice[i]}"></a></li>`;
         }
         formatZaIspis2 += `</ul>`;
         divIkonice.innerHTML += formatZaIspis2;

        //carousel
         let nizCarousel = ["#myCarousel"];
         let nizDataSlide = ["1","2","3"];
         let divCarousel = document.querySelector('#myCarousel');

         formatZaispis3 = `<ol class = "carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li>`
         for(i in nizDataSlide){
            formatZaispis3 += `<li data-target="${nizCarousel}" data-slide-to="${nizDataSlide[i]}""></li>`;
         }
         formatZaispis3 += `</ol>`;
         divCarousel.innerHTML += formatZaispis3;



         const getDiscountBtn = document.querySelector(".get-discount-btn");
         const couponContariner = document.querySelector(".coupon-container");
         const closeBtn = document.querySelector(".coupon-container .close");


         getDiscountBtn.addEventListener('click',() =>{
              couponContariner.classList.add("active");
          });

          closeBtn.addEventListener("click",() => {
              couponContariner.classList.remove("active");
          });
         

         const openModalButtons = document.querySelectorAll('[data-modal-target]')
         const closeModalButtons = document.querySelectorAll('[data-close-button]')
         const overlay = document.getElementById('overlay')
         
         openModalButtons.forEach(button => {
         button.addEventListener('click', () => {
             const modal = document.querySelector(button.dataset.modalTarget)
             openModal(modal)
         })
         })
         
         overlay.addEventListener('click', () => {
         const modals = document.querySelectorAll('.modal.active')
         modals.forEach(modal => {
             closeModal(modal)
         })
         })
         
         closeModalButtons.forEach(button => {
         button.addEventListener('click', () => {
             const modal = button.closest('.modal-obican')
             closeModal(modal)
         })
         })

         function openModal(modal) {
             if (modal == null) return
             modal.classList.add('active')
             overlay.classList.add('active')
         }
         
         function closeModal(modal) {
             if (modal == null) return
             modal.classList.remove('active')
             overlay.classList.remove('active')
         }




         const countdown =() =>{
             const countDate = new Date('December 29,2022 00:00:00').getTime();
             const now = new Date().getTime();
             const gap = countDate-now;


             //vreme
             const second = 1000;
             const minute = second * 60;
             const hour = minute * 60;
             const day = hour * 24;

             //calculate
             const textDay = Math.floor(gap/day);
             const textHour = Math.floor((gap % day) / hour);
             const textMinutes = Math.floor((gap % hour)/minute);
             const textSecond = Math.floor((gap % minute)/second);

             document.querySelector('.day').innerText = textDay;
             document.querySelector('.hour').innerText = textHour;
             document.querySelector('.minute').innerText = textMinutes;
             document.querySelector('.second').innerText = textSecond;
             
         };
         setInterval(countdown,1000);


         //menjanje slika
         let objSlika = document.querySelector("#slika1");
         objSlika.addEventListener("mouseover", function(){
         objSlika.src = "images/img-4.png";
         });

         objSlika.addEventListener("mouseleave", function(){
         this.src = "images/img-3.png";
         });


         let objSlika2 = document.querySelector("#slika2");
         objSlika2.addEventListener("mouseover", function(){
         objSlika2.src = "images/img-3.png";
         });

         objSlika2.addEventListener("mouseleave", function(){
         this.src = "images/img-4.png";
         });

         let objSlika3 = document.querySelector("#slika3");
         objSlika3.addEventListener("mouseover", function(){
         objSlika3.src = "images/img-4.png";
         });

         objSlika3.addEventListener("mouseleave", function(){
         this.src = "images/img-5.png";

            $(document).ready(function(){
                $("#myCarousel").on("touchstart", function(event){

                    var Click1 = event.originalEvent.touches[0].pageY;
                    $(this).one("touchmove", function(event){

                        var click2 = event.originalEvent.touches[0].pageY;
                        if( Math.floor(Click1 - click2) > 1 ){
                            $(".carousel").carousel('next');
                        }
                        else if( Math.floor(Click1 - click2) < -1 ){
                            $(".carousel").carousel('prev');
                        }
                    });
                    $(".carousel").on("touchend", function(){
                        $(this).off("touchmove");
                    });
                });

            })
         });

 
        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');
    
    
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
    
    
            checkInputs();
        });
    

function checkInputs(){
        const userNameValue = username.value.trim();
        const emailValue= email.value.trim()
        const passwordValue = password.value.trim()
        const password2Value = password2.value.trim();


        if(userNameValue === ''){
            //show error
            //add erroe class
            setErrorFor(username,"Username can not be empty.")
        }
        else if(!isName(userNameValue)){
            setErrorFor(username,"Username is not valid. Example:Username123")
        }
        else{
            //add succes class
            setSuccessFor(username);
        }

        if(emailValue === ''){
            setErrorFor(email,"Email can not be blank. ");
        }
        else if(!isEmail(emailValue)){
             setErrorFor(email,"Email is not valid.Example:username@gmail.com");
        }
        else{
            setSuccessFor(email);
        }



      if(passwordValue === '' || passwordValue.length < 7){

        setErrorFor(password,"Password must contain at least 8 characters")
        }
        else{
            //add succes class
            setSuccessFor(password);
        }
    

        if(password2Value === '' || password2Value.length < 7 ){

            setErrorFor(password2,"Password2 can not be blank")
        }
        else if(passwordValue !== password2Value){
            setErrorFor(password2,"Passwords does not match");
        }
        else{
                //add succes class
                setSuccessFor(password2);
        }


}


function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add erorr message
    small.innerText = message;

    //add error class
    formControl.className = 'form-control1 error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control1 success';


}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isName(name) {
	return /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/.test(name);
}





