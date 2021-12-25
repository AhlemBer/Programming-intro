/*     LISTS 

var list=[];


var person = {
    firstName : "Hussein", // string
    age : 32,  // number
    nationality : "Iraq" ,   //string
    isVaccinated : true  //boolean
}

function createProfile(fname , yo , nat , isVacc){
    var person ={
        firstName : fname ,
        age : yo ,
        nationality : nat ,
        isVaccinated : isVacc 
    }
    list.push(person);
}

createProfile("Youcef", 31, "DZ",true);
createProfile("lila", 39, "DZ",false);
createProfile("Ahlam", 16 , "DZ",true);
createProfile("med", 84, "fr",false);


isMinMaj(list);

function isMinMaj(personList){
    for (var i=0 ; i< personList.length ;i++){
        if(personList[i].age >=18){
            console.log(personList[i].firstName  + " est : Majeur" );

        }else{
            console.log(personList[i].firstName  + "est : Mineurr")
        }
    }
}
*/



/*   LIST ACCESS
var carList=[];

var bmw = {
    mark: "BMW",
    model : "645i",
    year : 2018,
    isHybrid : true
};


var toyota = {
    mark: "TOYOTA",
    model : "YARIS",
    year : 2014,
    isHybrid : true
};



var seat = {
    mark: "SEAT",
    model : "ibiza",
    year : 2015,
    isHybrid : true
};

carList[0]= bmw;
carList[1]=toyota;
carList[2]=seat;

console.log(carList[1].year);

function giveMeYears(){
    for(var i=0; i<carList.length; i++){
        if(typeof carList[i].year ==="number"){
            console.log(carList[i].model + " => " + carList[i].year);
        }
    }
}
giveMeYears(carList);

function add(obj){
    carList[carList.length -1]=obj;
}
*/
var dzScore = document.getElementById("scoreDz");
var tnScore = document.getElementById("scoreTn");
var prdBTN =document.getElementById("prdBTN")

function predictResultDz(){
  return Math.round(Math.random() * 4);
}

function predictResultTn(){
  return Math.round(Math.random() * 4);
}

dzScore.style.textAlign = "center";
dzScore.style.fontSize = "30px";
tnScore.style.textAlign = "center";
tnScore.style.fontSize = "30px";
dzScore.innerHTML ="0";
tnScore.innerHTML="0";

prdBTN.addEventListener("click", btnClicked)

function btnClicked(){
   var dz = predictResultDz();
   var tn = predictResultTn();
   dzScore.innerHTML = dz;
   tnScore.innerHTML = tn;
}
