function DeleteMe(){
document.getElementById("Myresult").value =""
};


function calculator(Newvalue) {
   document.getElementById("Myresult").value += Newvalue;
}
function Answer(){
 let a = document.getElementById("Myresult").value
 let b = eval(a);
 document.getElementById("Myresult").value = b;
};

