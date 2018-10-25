var points = 0;
document.getElementById("points").innerHTML = points;
var attempts = 0;
var level = 0;
var dividing = false;
var input1 = document.getElementById("in3");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("ans").click();
    }
});

var input2 = document.getElementById("in2");
input2.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("ans").click();
    }
});

function diff1(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 5);
		var y = Math.floor(Math.random() * 5);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 1;
		}
function diff2(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 12);
		var y = Math.floor(Math.random() * 12);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 2;
}

function diff3(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in2").readOnly = false;
		var x = Math.floor(Math.random() * 12);
		var y = Math.floor(Math.random() * 12);
		document.getElementById("in1").value = x;
		document.getElementById("in3").value = x*y;
		document.getElementById("in2").focus();
		document.getElementById("in3").readOnly = true;
		level = 3;

    }
function diff4(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 150);
		var y = Math.floor(Math.pow(10,Math.floor((Math.random()*2)+1)));
		var opdecide = Math.random();
		if(opdecide<0.25){
			document.getElementById("operator").innerHTML = "&divide";
			dividing = true;
		}
		else{ document.getElementById("operator").innerHTML = "&times";
			dividing = false;
		}
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 4;
}

function diff5(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 12);
		var y = Math.floor(Math.random() * 12-Math.random()*12);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 5;
}

function diff6(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in2").readOnly = false;
		var x = Math.floor(Math.random() * 12);
		var y = Math.floor(Math.random() * 12 - Math.random()*12);
		document.getElementById("in1").value = x;
		document.getElementById("in3").value = x*y;
		document.getElementById("in2").focus();
		document.getElementById("in3").readOnly = true;
		level = 6;

    }
function diff7(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 30);
		var y = Math.floor(Math.random() * 30);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 7;
		}
function diff8(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 30);
		var y = Math.floor(Math.random() * 30-Math.random()*30);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 8;
}
function diff9(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 90);
		var y = Math.floor(Math.random() * 90);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level = 9;
		}
function diff10(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 100);
		var y = Math.floor(Math.random() * 100-Math.random()*100);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level =10;
}
function diff11(){
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		document.getElementById("in3").value = "";
		var x = Math.floor(Math.random() * 1000);
		var y = Math.floor(Math.random() * 1000-Math.random()*1000);
		document.getElementById("in1").value = x;
		document.getElementById("in2").value = y;
		document.getElementById("in3").focus();
		level =11;
}
		
function loadQuest(){
	switch(level){
		case 1:
			diff1();
			break;
		case 2:
			diff2();
			break;
		case 3:
			diff3();
			break;
		case 4:
			diff4();
			break;
		case 5:
			diff5();
			break;
		case 6:
			diff6();
			break;
		case 7:
			diff7();
			break;
		case 8:
			diff8();
			break;
		case 9:
			diff9();
			break;
		case 10:
			diff10();
			break;
		case 11:
			diff11();
			
	}
	}

function givePoints() {
	points = points + 1;
	clear();
	document.getElementById("points").innerHTML = points+" ";
	loadQuest();
	
}
	
function clear() {
	document.getElementById("in1").value = "";
	document.getElementById("in2").value = "";
	document.getElementById("in3").value = "";
	
}


function checkAns() {
	document.getElementById("frame3").style.display = "block";
	var z = document.getElementById("in3").value;
	var x = document.getElementById("in1").value;
	var y = document.getElementById("in2").value;
	
	
	if(y == "" || z == "" ){
		alert("You must enter a number");
	}
	
	else if(level<3 && z==x*y){
		givePoints();
	}	
	
	else if(level==3 && y==z/x){
		givePoints();
		
	}
	else if(level==4){
		if(dividing==true && z == x/y){givePoints();}
		else if(dividing==false && z==x*y){givePoints();}
	}
	else if(level==5 && z==x*y){
		givePoints();
	}
	else if(level==6 && y==z/x){
		givePoints();
	}
	else if(level==7 && z==x*y){
		givePoints();
	}
	else if(level==8 && z==x*y){
		givePoints();
	}
	else if(level==9 && z==x*y){
		givePoints();
	}
	else if(level==10 && z==x*y){
		givePoints();
	}
	else if(level==11 && z==x*y){
		givePoints();
	}
	else {
		clear();
		loadQuest();
		}
attempts = attempts + 1;
document.getElementById("attempts").innerHTML = attempts+" ";
console.log(dividing);
}






var t = 0;
setInterval(
	function timer(){
		t = t+1; 
		document.getElementById("time").innerHTML = t;
				},1000);

				

