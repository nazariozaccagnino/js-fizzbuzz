const wrapper = document.querySelector('.app');
wrapper.className = 'd-flex flex-wrap'

let maxnum = 100;
let tmpHtml = '';

for(let i = 1; i<=maxnum; i++){
    
    if(i % 15 ===0){
        // console.log(i,'divisibile per entrambi')
        tmpHtml += `<div class="square fizzbuzz">fizzbuzz</div>`
    }
    else if (i % 3 === 0){
        // console.log(i, 'divisibile per 3')
        tmpHtml += `<div class="square fizz">fizz</div>`        

    }else if(i % 5 === 0){
        // console.log(i, 'divisibile per 5')
        tmpHtml += `<div class="square buzz">buzz</div>`
    }
    else{
        tmpHtml += `<div class="square">${i}</div>`
    }
    wrapper.innerHTML = tmpHtml;
}
