function tesktKastiLugemine(){
    let nimi=document.getElementById("nimi");
    let  vastus = document.getElementById("vastus");

    vastus.innerHTML = "Tere päevast "+nimi.value;
}

function puhasta(){
    let  vastus = document.getElementById("vastus");
    vastus.innerHTML=" ";
    let  vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML=" ";
}

// radionupp
function  radioLugemine(){
    let  vastus2 = document.getElementById("vastus2");
    let  TARgv23 = document.getElementById("TARgv23");
    let  LOGgv23 = document.getElementById("LOGgv23");
    let  TITgv23 = document.getElementById("TITgv23");

    if (TARgv23.checked){
        vastus2.innerHTML=TARgv23.value
    }
    else if (LOGgv23.checked){
        vastus2.innerHTML=LOGgv23.value
    }
    else if (TITgv23.checked){
        vastus2.innerHTML=TITgv23.value
    }
    else {
        vastus2.innerHTML="Palun vali midagi"
    }
}