var flag = prompt('quelle est la première couleur du drapeau Français ? bleu, blanc ou rouge ?');
var color1='bleu';
var color2 = 'rouge';
var color3= 'blanc'
if (flag == color1){
    alert('gagné!');
}else if (flag == color2){
    alert("faux le rouge est le troisème ");
}else if(flag == color3){
    alert("faux le blanc est le deuxième ");
}else{
    alert("entrée incorrecte");
}
