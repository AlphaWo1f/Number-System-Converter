
function binToDec(){

    var number = document.getElementById("bin").value;
    var output = parseInt(number,2);
    document.getElementById("htmlResult1").innerHTML = output;
    }
    
    function binToDecReset() {
    
        document.getElementById("binToDec").value = null;
        document.getElementById("htmlResult1").value = null;
    }

function decToBin(){

    var str = document.getElementById("decToBin").value;
    var output = (str >>> 0).toString(2);
    document.getElementById("htmlResult2").innerHTML = output;
    }
    
    function decToBinReset() {
    
        document.getElementById("decToBin").value = null;
        document.getElementById("htmlResult2").value = null;
    }

function decToHexa(){

    var str = document.getElementById("decToHexa").value;
    var output = (str >>> 0).toString(16);
    document.getElementById("htmlResult3").innerHTML = output;
    }
    
    function decToHexaReset() {
    
        document.getElementById("decToHexa").value = null;
        document.getElementById("htmlResult2").value = null;
    }

function hexaToDec(){

    var str = document.getElementById("hexaToDec").value;
    var output = parseInt(str, 16);
    document.getElementById("htmlResult4").innerHTML = output;
    }
    
    function hexaToDecReset() {
    
        document.getElementById("hexaToDec").value = null;
        document.getElementById("htmlResult4").value = null;
    }

function binToHexa(){

    var str = document.getElementById("binToHexa").value;
    var output = parseInt(str, 2).toString(16);
    document.getElementById("htmlResult5").innerHTML = output;
    }
    
    function binToHexaReset() {
    
        document.getElementById("binToHexa").value = null;
        document.getElementById("htmlResult5").value = null;
    }

function hexaToBin(){

    var str = document.getElementById("hexaToBin").value;
    var temp = parseInt(str, 16);
    var output = (temp >>> 0).toString(2);

    document.getElementById("htmlResult6").innerHTML = output;
    }
    
    function binToHexaReset() {
    
        document.getElementById("hexaToBin").value = null;
        document.getElementById("htmlResult6").value = null;
    }