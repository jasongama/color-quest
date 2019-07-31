const addBtn = document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const errorMessage = document.querySelector(".error");
const shapes= document.querySelector(".shapes");
const selectColor=document.querySelector(".selectColor");
const selectNumber= document.querySelector(".selectNumber")
function clearError() {
	setTimeout(function(){
		errorMessage.innerHTML = "";
	}, 2000);
}

addBtn.addEventListener("click", function(){

	// alert()
	const currentColor =selectColor.value;
//   shapes.innerHTML= "No shapes added yet.";
 //create a new div element
 const newShape = document.createElement("div");
 newShape.classList.add("shape");
 newShape.classList.add("square");
 newShape.classList.add("blue");
 newShape.classList.add(currentColor)

 const currentNumber = selectNumber.value;

 if(currentColor === "" || currentNumber ===""){
	 errorMessage.innerHTML ="Select a color & number"
	 clearError();
	 return;
 }

const newNumber= document.createElement("div")
newNumber.innerHTML = currentNumber
 newNumber.classList.add("number")
 newNumber.classList.add(currentNumber)

 newShape.appendChild(newNumber);


 shapes.appendChild(newShape)

	errorMessage.innerHTML = "Add!"
	clearError();
	// alert("add!")
});

filterBtn.addEventListener("click", function(){
	errorMessage.innerHTML = "Filter!"
	clearError();
});


