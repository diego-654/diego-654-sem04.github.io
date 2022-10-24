const $=(selector)=>document.querySelector(selector)
const input=$('#textid');
const btn=$('#btn');
const content=$('#content');

btn.addEventListener('click',()=>{
    content.innerHTML=`
        <img src='${input.value}'> </img>       
    `
})