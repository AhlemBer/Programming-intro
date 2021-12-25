/*   SQUAREE

var name="Hussein";
var age =38;

function square(input){
    if(typeof input ==="number"){
    var result= input * input ;
    return result;
  }else{
      return("********Input is not a number******* ")
  }
}

var r1= square(2);
var r2=square("Algeria");
var result =r1+r2;

console.log(r1);
console.log(r2);
console.log("la somme des carrees est :" +result);
*/



/*   PUISSANCE
function power(val, power){
    var errorMessage ="Input is not a number *****";
    if(typeof val === "number" && typeof power === "number"){
        var result=1;
        if(power === 0){
            return 1;
        }
        if (power < 0){
            var limit = power * -1;
            for (var i=0; i<limit ;i++){
                result=result * val;
        }  return 1 / result;
        }
        for (var i=0; i<power ;i++){
            result=result * val;
        }
        return result;
    }else{
        return errorMessage;
    }
}
var r1=power(-2,-5);
console.log(r1);

*/



//     METHODE 1    ****FACTORIEL
function factoriel(valeur){
    var result = valeur;
    for(var i=0 ; i<valeur;i++){
        result = result * (valeur - 1);
        valeur= valeur-1;
    }return result;
}
var r3 = factoriel(2);
console.log(r3);



/*    METHODE2 
 function factorial(val){
     var result = val;
     for(var i=0; i>1;i--){
         result=result * (i-1);
     }
     return result;
 }
 var res = factorial(5);
 console.log(res);
 */