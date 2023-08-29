import { x, y, sleep, disableButton, enableButton, swap } from "../sorting.js"
document.getElementById('bubble-sort').addEventListener('click',async ()=>{
    disableButton();
    let ele = document.querySelectorAll('.box');
    await bubbleSort(ele);
    enableButton();
});
async function bubbleSort(ele){
    let swapped ;
    for(let i = 0; i < x; i++){
        swapped = false;
        for (let j = 0; j < x - i - 1; j++) {
            let h1 = parseInt(ele[j].style.height)
            let h2 = parseInt(ele[j+1].style.height)
            ele[j].style.backgroundColor = 'blue';
            ele[j+1].style.backgroundColor = 'blue';
            await sleep(.01*y);

            if (h1 <= h2)
                ele[j].style.backgroundColor = 'aqua';
            else{
                ele[j].style.backgroundColor = 'aqua';
                swap(ele, j, j+1); 
                swapped = true;
            }
        }
        ele[x - i - 1].style.backgroundColor = 'green';
        if(swapped === false)   break;
    }
    for(let i = 0; i < x; i++){
        ele[i].style.backgroundColor = 'green';
    }
}
