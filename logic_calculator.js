var ops = document.querySelectorAll(".ops"),
    nums = document.querySelectorAll(".num"),
    equals = document.getElementById("button_="),
    clear = document.getElementById("button_c"),
    backspace = document.getElementById("button_backs"),
    off = document.getElementById("button_off"),
    eq = "",
    resultnum ="";
function getdisplay2(){
    return document.getElementById("display2").innerText;
};

function printdisplay2(num){
    document.getElementById("display2").innerText = num;
};

function getdisplay1(){
    return document.getElementById("display1").innerText;
};

function printdisplay1(num){
    //if(num==""){
        document.getElementById("display1").innerText = num;
   // }else{
        //document.getElementById("display1").innerText = update(num);    
    //}
};
/*
function update(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
};
*/

function og(num){
    return Number(num);
};

for(var i=0; i<ops.length; i++){
    ops[i].addEventListener('click',function(){
        eq = getdisplay1();
        eq += this.getAttribute("data-ops");
        printdisplay1(eq);
    });
};

for(var i=0; i<nums.length; i++){
    nums[i].addEventListener('click',function(){
        if(resultnum!=""){
            printdisplay2(resultnum);
            resultnum ="";
            printdisplay1("");
            
        }
        eq = getdisplay1();
        if(eq!=NaN){
            eq += this.getAttribute("data-num");
            printdisplay1(eq);
        }
    });
};

equals.addEventListener('click',function(){
    eq = getdisplay1();
    
    if(eq!=""){
        //eq = og(eq);
        resultnum = eval(eq);

        printdisplay2(eq);
        printdisplay1(resultnum);
    }
});

clear.addEventListener('click',function(){
    printdisplay1("0");
    printdisplay2("");
    resultnum = "";
    //equals.setAttribute("data-result",resultnum);
});

backspace.addEventListener('click',function(){
    if(eq){
        eq = eq.substring(0,eq.length-1);
        printdisplay1(eq);    
    }
});

//off.addEventListener('click',close());