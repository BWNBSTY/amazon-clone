// Image Slider

let flag = 0;

function controller(x) {
    flag = flag + x;
    slideShow(flag);
}

slideShow(flag);

function slideShow(num) {
    let slide = document.getElementsByClassName("Image");

    let changeCol = document.getElementById("shop_sec_id");

    if(num == 0){
        changeCol.style.background = "#feeeca";
    }

    if(num == 1){
        changeCol.style.background = "#bae0b7";
    }

    if(num == 2){
        changeCol.style.background = "#f2f2f2";
    }

    if(num == 3){
        changeCol.style.background = "#ffd004";
    }

    if(num == 4){
        changeCol.style.background = "#fed2c7";
    }

    if(num == slide.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slide.length - 1; 
        num = slide.length - 1; 
    }

    for(let y of slide){
        y.style.display = "none";
    }

    slide[num].style.display = "block";
}


// menu bar
function menu_bar() {
    let me_nu = document.getElementById("contain-er");
    me_nu.style.left = "0px";

    let one1 = document.getElementById("one");
    let one2 = document.getElementById("two");
    let one3 = document.getElementById("three");
    let one4 = document.getElementById("shop_sec_id");
    let one5 = document.getElementById("four");
    let one6 = document.getElementById("five");
    one1.style.filter = "blur(2.5px)";
    one2.style.filter = "blur(2.5px)";
    one3.style.filter = "blur(2.5px)";
    one4.style.filter = "blur(2.5px)";
    one5.style.filter = "blur(2.5px)";
    one6.style.filter = "blur(2.5px)";
}

function closed() {
    let cl_ose = document.getElementById("contain-er");
    cl_ose.style.left = "-400px";

    let one1 = document.getElementById("one");
    let one2 = document.getElementById("two");
    let one3 = document.getElementById("three");
    let one4 = document.getElementById("shop_sec_id");
    let one5 = document.getElementById("four");
    let one6 = document.getElementById("five");
    one1.style.filter = "blur(0px)";
    one2.style.filter = "blur(0px)";
    one3.style.filter = "blur(0px)";
    one4.style.filter = "blur(0px)";
    one5.style.filter = "blur(0px)";
    one6.style.filter = "blur(0px)";
}


// back to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



