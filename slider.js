const numImg=3;
let imgCorrente=1;
const timer = 4500;

function successiva() {
    imgCorrente++;
    if(imgCorrente>numImg){
        imgCorrente=1;
    }
    for(let i=1; i<=numImg; i++){
        if(i!=imgCorrente) {
            document.querySelector("#img img:nth-child(" + i +")").style.display = "none";
        }
        else {
            document.querySelector("#img img:nth-child(" + i +")").style.display = "block";
        }
    }
    clearInterval(intervalID);
    intervalID = setInterval(successiva,timer);
}

function precedente() {
    imgCorrente--;
    if(imgCorrente==0){
        imgCorrente=numImg;
    }
    for(let i=1; i<=numImg; i++){
        if(i!=imgCorrente) {
            document.querySelector("#img img:nth-child(" + i +")").style.display = "none";
        }
        else {
            document.querySelector("#img img:nth-child(" + i +")").style.display = "block";
        }
    }
    clearInterval(intervalID);
    intervalID = setInterval(successiva,timer);
}


let intervalID = setInterval(successiva,timer);