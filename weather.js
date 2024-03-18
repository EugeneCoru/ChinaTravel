//const axios = require('axios');
import axios from 'axios';


//=========ПОПЫТКА СДЕЛАТЬ ТРАНСЛЕЙТ НАЗВАНИЙ ГОРОДОВ И РАБОТА С АПИ ТРАНСЛЕЙТ==========
// const TranslateGoogle = (from, to, text) =>{
//     `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${text}`
// }
// axios(TranslateGoogle('ru', 'en', encodeURI('Шанхай'))).then(resp =>
//     console.log(resp.data) );

// //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//c49a3407c9253042fb1beaf16ca4da0f
const key = 'c49a3407c9253042fb1beaf16ca4da0f';
const city = ['Beijing', 'Guangzhou', 'Shanghai', 'Hangzhou', 'Lhasa','Beijing', 'Guangzhou', 'Shanghai', 'Hangzhou', 'Lhasa'];
const ul = document.querySelector('.main_data_info_town_item_ul');



city.forEach(el=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=c49a3407c9253042fb1beaf16ca4da0f`)
        .then(resp =>{ return resp.json()})
        .then(data => {
         //console.log('Norm');
         
        console.log(Math.round(data.main.temp - 273));
        const li = document.createElement('li');
        li.className = 'main_data_info_town_item_ul_li';
        const span = document.createElement('span');
        span.className = 'main_data_info_town_item_ul_li_span';
        span.textContent = el;
        const p = document.createElement('span');
        p.className = 'main_data_info_town_item_ul_li_p';
        p.innerHTML = Math.round(data.main.temp - 273) + '&deg';

        li.appendChild(span);
        li.appendChild(p);
        ul.appendChild(li);


         })
        .catch( ()=>{
            console.log('error');
        });
});

const btnTown = document.querySelector('.main_data_info_cont_button');
const mainDataCont = document.querySelector('.main_data_info_cont');
const mainDataTown = document.querySelector('.main_data_info_town');
btnTown.addEventListener('click', ()=>{
      mainDataCont.style.display = 'none';
      mainDataTown.style.display = 'flex';
});
