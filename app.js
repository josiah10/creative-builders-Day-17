const btn = document.getElementById('submitBtn');
const output = document.getElementById('output');
const text = document.getElementById('box');

btn .addEventListener('click',(e)=>{
    e.preventDefault();
    const val= text.value.toLocaleString().length;
    output.innerHTML=val;

})