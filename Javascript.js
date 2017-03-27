

var speler1 = false;
var speler2 = false;
var huidigespeler;
var gewonnen = false;
var speler1score = 0;
var speler2score = 0;
var zetten = 9;
var gewonnen = false;
var button;

var vakje = {
    button0: false, 
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false
};

var speler = {
    button0: "",
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    button5: "",
    button6: "",
    button7: "",
    button8: "",
};

function start() {
    huidigespeler = null;
    gewonnen = false;
    zetten = 9;
   
    vakje.button0 = false; 
    vakje.button1 = false;
    vakje.button2 = false;
    vakje.button3 = false;
    vakje.button4 = false;
    vakje.button5 = false;
    vakje.button6 = false;
    vakje.button7 = false;
    vakje.button8 = false;
    
    speler.button0 = "";
    speler.button1 = "";
    speler.button2 = "";
    speler.button3 = "";
    speler.button4 = "";
    speler.button5 = "";
    speler.button6 = "";
    speler.button7 = "";
    speler.button8 = "";
    
   
    
    document.getElementById("speler").innerHTML = "Speler: " +huidigespeler;
    
    for (var i = 0; i <= 8; i++) {
        document.querySelector("#button"+i).style.backgroundColor = "yellow";
        document.getElementById("button"+i).innerHTML = "";
    }
}

function vak() {
    var wissel = true;
    if(gewonnen == true) {
        var game1 = "Je hebt al gewonnen"
        alert(game1);
        start();
    } else {
    
        if(huidigespeler == null || "") {
            huidigespeler = "X";
        }
        switch (button) {
            case 0:
                if(vakje.button0 == false) {
                    vakje.button0 = true;
                    zetten--;
                    document.getElementById("button0").innerHTML = huidigespeler;
                    speler.button0 = huidigespeler;
               } else {
                    wissel = false;

                } 
                break;
            case 1:
                if(vakje.button1 == false) {
                    vakje.button1 = true;
                    zetten--;
                    document.getElementById("button1").innerHTML = huidigespeler;
                    speler.button1 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 2:
                if(vakje.button2 == false) {
                    vakje.button2 = true;
                    zetten--;
                    document.getElementById("button2").innerHTML = huidigespeler;
                    speler.button2 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 3:
                if(vakje.button3 == false) {
                    vakje.button3 = true;
                    zetten--;
                    document.getElementById("button3").innerHTML = huidigespeler;
                    speler.button3 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 4:
                if(vakje.button4 == false) {
                    vakje.button4 = true;
                    zetten--;
                    document.getElementById("button4").innerHTML = huidigespeler;
                    speler.button4 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 5:
                if(vakje.button5 == false) {
                    vakje.button5 = true;
                    zetten--;
                    document.getElementById("button5").innerHTML = huidigespeler;
                    speler.button5 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 6:
                if(vakje.button6 == false) {
                    vakje.button6 = true;
                    zetten--;
                    document.getElementById("button6").innerHTML = huidigespeler;
                    speler.button6 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 7:
                if(vakje.button7 == false) {
                    vakje.button7 = true;
                    zetten--;
                    document.getElementById("button7").innerHTML = huidigespeler;
                    speler.button7 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
            case 8:
                if(vakje.button8 == false) {
                    vakje.button8 = true;
                    zetten--;
                    document.getElementById("button8").innerHTML = huidigespeler;
                    speler.button8 = huidigespeler;
                    
                }else {
                    wissel = false;

                } 
                break;
                
            default:
                // code
        }
        check();
        if(wissel) {
            if(huidigespeler == "X") {
                huidigespeler = "O";
                document.getElementById("speler").innerHTML = "Speler: " +document.getElementById("speler2").innerHTML;
            } else {
                huidigespeler = "X";
                document.getElementById("speler").innerHTML = "Speler: " +document.getElementById("speler1").innerHTML;
            }
        }
    }
}


function check() {
    // -
    if(speler.button0 == "X" && speler.button1 == "X" && speler.button2 == "X" ) {
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button1");
        var bt2 = document.querySelector("#button2");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if(speler.button0 == "O" && speler.button1 == "O" && speler.button2 == "O"){
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button1");
        var bt2 = document.querySelector("#button2");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    
    if(speler.button3 == "X" && speler.button4 == "X" && speler.button5 == "X" ) {
        var bt0 = document.querySelector("#button3");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button5");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if(speler.button3 == "O" && speler.button4 == "O" && speler.button5 == "O" ) {
        var bt0 = document.querySelector("#button3");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button5");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    
    if(speler.button6 == "O" && speler.button7 == "O" && speler.button8 == "O" ) {
        var bt0 = document.querySelector("#button6");
        var bt1 = document.querySelector("#button7");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
     if(speler.button6 == "X" && speler.button7 == "X" && speler.button8 == "X"  ) {
        var bt0 = document.querySelector("#button6");
        var bt1 = document.querySelector("#button7");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
         document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    // |
    if(speler.button0 == "X" && speler.button3 == "X" && speler.button6 == "X" ) {
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button3");
        var bt2 = document.querySelector("#button6");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if( speler.button0 == "O" && speler.button3 == "O" && speler.button6 == "O" ) {
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button3");
        var bt2 = document.querySelector("#button6");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    
    if(speler.button1 == "X" && speler.button4 == "X" && speler.button7 == "X" ) {
        var bt0 = document.querySelector("#button1");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button7");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
       document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if( speler.button1 == "O" && speler.button4 == "O" && speler.button7 == "O" ) {
        var bt0 = document.querySelector("#button1");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button7");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    
    if(speler.button2 == "X" && speler.button5 == "X" && speler.button8 == "X" ) {
        var bt0 = document.querySelector("#button2");
        var bt1 = document.querySelector("#button5");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
     if(speler.button2 == "O" && speler.button5 == "O" && speler.button8 == "O" ) {
        var bt0 = document.querySelector("#button2");
        var bt1 = document.querySelector("#button5");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    
    // \ /
    if(speler.button0 == "X" && speler.button4 == "X" && speler.button8 == "X" ) {
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if(speler.button0 == "O" && speler.button4 == "O" && speler.button8 == "O" ) {
        var bt0 = document.querySelector("#button0");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button8");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
    if(speler.button2 == "X" && speler.button4 == "X" && speler.button6 == "X" ) {
        var bt0 = document.querySelector("#button2");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button6");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler1").innerHTML + " wint!";
        gewonnen = true;
    }
    if(speler.button2 == "O" && speler.button4 == "O" && speler.button6 == "O" ) {
        var bt0 = document.querySelector("#button2");
        var bt1 = document.querySelector("#button4");
        var bt2 = document.querySelector("#button6");
        bt0.style.backgroundColor = "Red";
        bt1.style.backgroundColor = "Red";
        bt2.style.backgroundColor = "Red";
        document.getElementById("win0").innerHTML = "Speler " + document.getElementById("speler2").innerHTML + " wint!";
        gewonnen = true;
    }
}