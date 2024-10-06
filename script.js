cities = [
    "Faisalabad",
    "Lahore",
    "Karachi",
    "Islamabad",
    "Burewala",
    "Sheikhupura",
    "Kashmir",
];

// simple alert function

function smpAlert() {
    alert(cities);
}

// printName 

function prntName() {
    let myName = document.getElementById("input").value;
    if (myName === "") {
        document.getElementById("result").innerHTML = "Please Fill the input field"
        return;
    }
    document.getElementById("result").innerHTML = myName;

}

// print cities name 

function prntCities()
{

    document.getElementById("result").innerHTML = "";
    for(let i = 0 ; i< cities.length ; i++)
    {
        document.getElementById("result").innerHTML +=   i+1 + " ) " + cities[i] + "<br>";
    }
}

// add new city in the list 

function addcity()
{
    let city = document.getElementById("input").value;
    if(city === "")
    {
        document.getElementById("result").innerHTML = "Please Add city"
        return;
    }

    cities.push(city);
  document.getElementById("result").innerHTML = '<span style="font-size: 26px; color: green;">"'+city+'"</span> Added to your list !'
}

// generate table of any input number 
function genTable(){
    let num = document.getElementById("input").value;
    if(num === "")
    {
        document.getElementById("result").innerHTML = "Please Add A Number in input Field";
        return;
        
    }

    document.getElementById("result").innerHTML = " ";
    for(let i = 1 ; i<=10 ; i++)
    {
        document.getElementById("result").innerHTML += num + " * " + i + " = " + num*i + "<br>";
    }


}


// clear function

document.getElementById("clr").onclick = function(){
    document.getElementById("input").innerHTML = "";
}


document.getElementById("ClearResult").onclick = function(){
    result.innerHTML = " ";
}