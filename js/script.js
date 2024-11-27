
let total = document.getElementById("total");
let couleur1 = ["red", "black"];


//Baskets

let plus1 = document.getElementById("plus1");
let moins1 = document.getElementById("moins1");
let supp1 = document.getElementById("supp1");
let coeur1 = document.getElementById("coeur1");
let count = 0;

plus1.addEventListener("click", function() {
    count++;
    document.getElementById("nbr1").textContent=count
    document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
})

moins1.addEventListener("click", function() {
    count--;
    if (count>=0) {
        document.getElementById("nbr1").textContent=count
        document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
    } else {
        document.getElementById("nbr1").textContent=count=0;
    }
})

supp1.addEventListener("click", ()=>{
    document.getElementById("nbr1").textContent=count=0;
    document.getElementById("total").textContent=count2 * 20 + count3 *50;
    


})
let i = 0;
coeur1.addEventListener("click", ()=>{
    document.getElementById("coeur1").style.color=couleur1[i]
    i=(i+1)%couleur1.length
})


//Socks


let plus2 = document.getElementById("plus2");
let moins2 = document.getElementById("moins2");
let supp2 = document.getElementById("supp2");
let coeur2 = document.getElementById("coeur2");
let count2 = 0;

plus2.addEventListener("click", function() {
    count2++;
    document.getElementById("nbr2").textContent=count2
   document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
})

moins2.addEventListener("click", function() {
    count2--;
    if (count2>=0) {
        document.getElementById("nbr2").textContent=count2
        document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
    } else {
        document.getElementById("nbr2").textContent=count2=0
    }
})

supp2.addEventListener("click", ()=>{
    document.getElementById("nbr2").textContent=count2=0
    document.getElementById("total").textContent=count * 100 + count3 *50;


})
let e = 0;
coeur2.addEventListener("click", ()=>{
    document.getElementById("coeur2").style.color=couleur1[e]
    e=(e+1)%couleur1.length
})

// bag


let plus3 = document.getElementById("plus3");
let moins3 = document.getElementById("moins3");
let supp3 = document.getElementById("supp3");
let coeur3 = document.getElementById("coeur3");
let count3 = 0;

plus3.addEventListener("click", function() {
    count3++;
    document.getElementById("nbr3").textContent=count3
    document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
})

moins3.addEventListener("click", function() {
    count3--; 
    if (count3>=0) {
        document.getElementById("nbr3").textContent=count3
        document.getElementById("total").textContent=count * 100 + count2 * 20 + count3 *50;
    } else {
        document.getElementById("nbr3").textContent=count3=0
    }
})

supp3.addEventListener("click", ()=>{
    document.getElementById("nbr3").textContent=count3=0
   document.getElementById("total").textContent= count * 100 + count2 * 20;

})
let r = 0;
coeur3.addEventListener("click", ()=>{
    document.getElementById("coeur3").style.color=couleur1[r]
    r=(r+1)%couleur1.length
})





