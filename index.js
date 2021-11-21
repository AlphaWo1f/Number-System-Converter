
function binToDec(){

    var number = document.getElementById("binToDec").value;
    var output = parseInt(number,2);
    document.getElementById("htmlResult1").innerHTML = output;
    }
    
    function binToDecReset() {
    
        document.getElementById("binToDec").value = null;
        document.getElementById("htmlResult1").value = null;
    }

function decToBin(){

    var number = document.getElementById("decToBin").value;
    var output = (number >>> 0).toString(2);
    document.getElementById("htmlResult2").innerHTML = output;
    }
    
    function decToBinReset() {
    
        document.getElementById("decToBin").value = null;
        document.getElementById("htmlResult2").value = null;
    }

function decToHexa(){

    var number = document.getElementById("decToHexa").value;
    var output = (number >>> 0).toString(16);
    document.getElementById("htmlResult3").innerHTML = output;
    }
    
    function decToHexaReset() {
    
        document.getElementById("decToHexa").value = null;
        document.getElementById("htmlResult2").value = null;
    }

function hexaToDec(){

    var number = document.getElementById("hexaToDec").value;
    var output = parseInt(number,16);
    document.getElementById("htmlResult4").innerHTML = output;
    }
    
    function hexaToDecReset() {
    
        document.getElementById("hexaToDec").value = null;
        document.getElementById("htmlResult4").value = null;
    }

function binToHexa(){

    var number = document.getElementById("binToHexa").value;
    var output = parseInt(number,2).toString(16);
    document.getElementById("htmlResult5").innerHTML = output;
    }
    
    function binToHexaReset() {
    
        document.getElementById("binToHexa").value = null;
        document.getElementById("htmlResult5").value = null;
    }

function hexaToBin(){

    var number = document.getElementById("hexaToBin").value;
    var temp = parseInt(number,16);
    var output = (temp >>> 0).toString(2);

    document.getElementById("htmlResult6").innerHTML = output;
    }
    
    function binToHexaReset() {
    
        document.getElementById("hexaToBin").value = null;
        document.getElementById("htmlResult6").value = null;
    }