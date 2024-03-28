import '/weather';

function Main(){
document.getElementById('date').valueAsDate = new Date();

//Название города на слайдере через некоторое время на сайте
const shadowSlider =  document.querySelectorAll('.slider_shadow');
const textSlider =  document.querySelectorAll('.slider_text');
const slider =  document.querySelectorAll('.slider_cont');
const subSlider = document.querySelectorAll('.slider_text_subtitle');
console.log(slider);

const TimeSlider = ()=>{
     for (let i = 0; i < slider.length; i++) {
        console.log(slider[i].classList[1]);
         if (slider[i].classList[1] == 'active') {
            console.log(shadowSlider[i]);
             //shadowSlider[i].style.opacity = '0.7';
             shadowSlider[i].style.animation = 'showBlock 1s linear forwards';
             textSlider[i].style.display = 'block';
             textSlider[i].style.animation = 'showText 1s linear forwards';
            
         }
        
     }
};



const btnForm = document.querySelector('.main_data_form_cont_button');
const inputUser = document.getElementById('user');
const inputNumber = document.getElementById('number');
btnForm.addEventListener('click', ()=>{
     if (inputUser.value == '') {
        inputUser.style.border = '0.5px solid darkred';
     }else{
        inputUser.style.border = '0.5px solid black';
     }
     inputNumber.value == '' ? inputNumber.style.border = '0.5px solid darkred' :  inputNumber.style.border = '0.5px solid black';

});
setTimeout(TimeSlider, 5000);

//======СЛАЙДЕР=====
const sliderCont = document.querySelectorAll('.slider_cont');
let currIndex = 0;

function showSlider(index) {
    sliderCont[currIndex].classList.remove('active');
    sliderCont[index].classList.add('active');
    
    currIndex = index;
    
}
const arrowLeft = document.querySelector('.cont_arrow_left');
const arrowRight = document.querySelector('.cont_arrow_right');

arrowRight.addEventListener('click', async ()=>{
    let index = currIndex + 1;
    
    if (index == sliderCont.length){ index = 0};
    console.log(index);
    console.log(sliderCont.length);
    
    showSlider(index);
    await setTimeout(TimeSlider, 500);
});
arrowLeft.addEventListener('click', async ()=>{
    let index = currIndex - 1;
    
    if (index < 0) {
        index = sliderCont.length - 1;
    }
    
    showSlider(index);
    await setTimeout(TimeSlider, 500);
});









//Попытка сделать оформление на почту обратного звонка
const FEEDBACK_FORM = document.querySelector('.form');

function sendMessage(feedback) {
    fetch("/api/feedback",  {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(feedback),
    }).then((response)=>response.json()).then(data=>{
        console.log(data);
        alert('Успешно');
    }).catch((err) =>{
        console.error(err);
        alert('Ошибка');
    });
}

FEEDBACK_FORM.addEventListener('submit', (e)=>{
       e.preventDefault();
       const feedbackFormData = new FormData(e.target);
       console.log('feedbackFormData', feedbackFormData);
       const feedback = Object.fromEntries(feedbackFormData);
       console.log('feedback', feedback);

       sendMessage(feedback);
});
}
