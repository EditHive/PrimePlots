let btn = document.querySelector("#but");
let p = document.querySelector('.principal');
let r = document.querySelector('.rate');
let t = document.querySelector('.time');
let result = document.querySelector('.result');
let para = document.querySelector('.para');

btn.addEventListener('click',function(){
    let pval = parseFloat(p.value);
    let rval = parseFloat(r.value)/100/12;
    let tval = parseInt(t.value);
    let n = tval*12;
    let emi = (pval*rval*(Math.pow(1+rval, n)))/((Math.pow(1+rval, n))-1);
    result.style.width = "20vw"
    result.style.padding = "10px"
    result.innerText = emi.toFixed(2);

})