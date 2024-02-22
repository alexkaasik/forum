function tesktKastiLugemine(){
    let nimi=document.getElementById("nimi");
    let  vastus = document.getElementById("vastus");

    vastus.innerHTML = "Tere päevast "+nimi.value;
}

function puhasta(){

    let  vastus = document.getElementById("vastus");
    let  vastus2 = document.getElementById("vastus2");
    let  vastus3 = document.getElementById("vastus3");
    let  vastus4 = document.getElementById("vastus4");

    let pilt = document.getElementById("pilt");

    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";

    pilt.src = "";

    vastus.style.color =  "#000000";
    vastus2.style.color = "#000000";
    vastus3.style.color = "#000000";
    vastus4.style.color = "#000000";
}

// radionupp
function  radioLugemine(){
    let  vastus2 = document.getElementById("vastus2");
    let  TARgv23 = document.getElementById("TARgv23");
    let  LOGgv23 = document.getElementById("LOGgv23");
    let  TITgv23 = document.getElementById("TITgv23");

    let pilt = document.getElementById("pilt")

    if (TARgv23.checked){
        vastus2.innerHTML=TARgv23.value;
        pilt.src = "img/art.png"
    }
    else if (LOGgv23.checked){
        vastus2.innerHTML=LOGgv23.value
        pilt.src = "img/snake.png"
    }
    else if (TITgv23.checked){
        vastus2.innerHTML=TITgv23.value
        pilt.src = "img/mask.png"
    }
    else {
        vastus2.innerHTML="Palun vali midagi"
    }
}

// check box
function CheckValue(){
    let vastus3=document.getElementById("vastus3");
    let andmebaasid=document.getElementById("andmebaasid");
    let matemaatika=document.getElementById("matemaatika");
    let programmerimine=document.getElementById("programmerimine");

    let aine = "";
    if( andmebaasid.checked ){
        aine += andmebaasid.value+", "
    }
    if( matemaatika.checked ){
        aine += matemaatika.value+", "
    }
    if( programmerimine.checked ){
        aine += programmerimine.value+", "
    }
    vastus3.innerHTML = "Lemmikud on "+aine
}

function selectOptionValik(){
    let vastus4=document.getElementById("vastus4");
    let kodu=document.getElementById("kodu");
    let km=document.getElementById("km");

    if (kodu.selectedIndex!==0){
        vastus4.innerHTML="Valitus linn on" + kodu.value + ", sinu koduni on "+ km.value + "km"
    } else {
        vastus4.innerHTML="Palun tee oma valik"
    }
}

function varvValik(){
    let varv = document.getElementById("varv");
    let vastus = document.getElementById("vastus");
    let vastus2 = document.getElementById("vastus2");
    let vastus3 = document.getElementById("vastus3");
    let vastus4 = document.getElementById("vastus4");

    // console.log(varv.value)

    vastus.style.color = varv.value;
    vastus2.style.color = varv.value;
    vastus3.style.color = varv.value;
    vastus4.style.color = varv.value;
}