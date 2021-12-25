


var num =13;
console.log(num);

function max(n1,n2){
    if(typeof n1 ==="number" && typeof n2 ==="number"){ 
    if (n1 > n2){
       console.log( n1 + " is bigger than " + n2);
    }  else if (n1<n2){
       console.log(n2 + " is bigger than " + n1);
    }  else {
       console.log(n1 + " is equal to " + n2);
    }
}else{
    console.log("The inputs you entered must be numbers , THANKS ");
}
}


max(9,"ahlem");