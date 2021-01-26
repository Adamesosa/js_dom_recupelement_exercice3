let premierEnfant = dernierD.firstElementChild;
console.log(premierEnfant);


let dernierEnfant = dernierD.lastElementChild;
console.log(dernierEnfant);



let elem = dernierD.getElementsByTagName('p')[0];
let elemI = elem.firstElementChild;
console.log(elemI);


let p = dernierD.lastElementChild; 
console.log(p.firstElementChild);

// 4 (methode 2 )
let b = document.getElementsByTagName('b')[0]; 
console.log(b); 


let i = dernierD.getElementsByTagName('i')[0]; 
console.log(i.parentElement); // parentNode; 


console.log(b.parentNode); 


console.log(premierEnfant.nextElementSibling); 


