var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var Notebook = document.getElementsByClassName("Notebook")[0];
var Jello = document.getElementsByClassName("Jello")[0];
var Spinach = document.getElementsByClassName("Spinach")[0];
var Rice = document.getElementsByClassName("Rice")[0];
var BirthdayCake = document.getElementsByClassName("Birthday Cake")[0];
var Candles = document.getElementsByClassName("Candles")[0];
var buttonDelNotebook = document.getElementById("DelNotebook");
var buttonDelJello = document.getElementById("DelJello");
var buttonDelSpinach = document.getElementById("DelSpinach");
var buttonDelRice = document.getElementById("DelRice");
var buttonDelBirthdayCake = document.getElementById("DelBirthdayCake");
var buttonDelCandles = document.getElementById("DelCandles");

buttonDelNotebook.addEventListener("click", function() {
	Notebook.parentNode.removeChild(Notebook)
});

buttonDelJello.addEventListener("click", function() {
	Jello.parentNode.removeChild(Jello)
});

buttonDelSpinach.addEventListener("click", function() {
	Spinach.parentNode.removeChild(Spinach)
});

buttonDelRice.addEventListener("click", function() {
	Rice.parentNode.removeChild(Rice)
});

buttonDelBirthdayCake.addEventListener("click", function() {
	BirthdayCake.parentNode.removeChild(BirthdayCake)
});

buttonDelCandles.addEventListener("click", function() {
	Candles.parentNode.removeChild(Candles)
});


Notebook.addEventListener("click", function(){
	Notebook.classList.toggle("done")
});

Jello.addEventListener("click", function(){
	Jello.classList.toggle("done")
});

Spinach.addEventListener("click", function(){
	Spinach.classList.toggle("done")
});

Rice.addEventListener("click", function(){
	Rice.classList.toggle("done")
});

BirthdayCake.addEventListener("click", function(){
	BirthdayCake.classList.toggle("done")
});

Candles.addEventListener("click", function(){
	Candles.classList.toggle("done")
});

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add(input.value);
	li.addEventListener("click", function(){
		li.classList.toggle("done")
	});
	var delbutton = document.createElement("button");
	delbutton.innerHTML = "Delete";
	li.appendChild(delbutton);
	delbutton.addEventListener("click", function(){
		li.parentNode.removeChild(li)
	});
		input.value = "";
	
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);