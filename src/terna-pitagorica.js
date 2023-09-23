const input1 = document.getElementById("side1");

const input2 = document.getElementById("side2");

const input3 = document.getElementById("side3");

const btn  = document.getElementById("btn");
btn.addEventListener("click", calculateResult);

const result = document.getElementById("result");

const clean_btn = document.getElementById("clean_btn");
clean_btn.addEventListener("click", cleanAllFields);

let inputsArray = [];

function calculateResult() {
	// Cleaning the array
	inputsArray = [];
	// cleaning result paragraph 
	result.innerText = "";

	// Getting Values from inputs
	let a = Number(input1.value);
	let b = Number(input2.value);
	let c = Number(input3.value);

	//console.log(a,b,c);

	// Verify all values are integer
	if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
		alert("Por favor, introduzca solo valores enteros.");
		return;
	}

	// Verify all values are positive and not zero
	if(a<=0 || b<=0 || c<=0) {
		alert("Por favor, introduzca solo valores mayores a cero (0).");
		return;
	}

	// Verifying existence of the triangle
	if(a+b<=c || a+c<=b || b+c<=a) {
		alert("Los datos introducidos no correponden a los lados de un triángulo, ya que no cumplen con el Teorema de Desigualdad Triangular.");
		return;
	}

	// Adding all 3 values into the array
	inputsArray.push(a);
	inputsArray.push(b);
	inputsArray.push(c);

	//console.log(inputsArray);

	// Ordering array
	const newArray = inputsArray.sort(
		function(a, b) {
			return a - b;
		}
	);

	//console.log(newArray);

	// Calculating squared values
	let a2 = newArray[0]*newArray[0];
	let b2 = newArray[1]*newArray[1];
	let c2 = newArray[2]*newArray[2];

	// Calculating condition to determine the answer
	if(a2+b2 === c2) {
		result.innerText = `Los valores ${a}, ${b} y ${c} forman una terna pitagórica.
		El triángulo es rectángulo, sus catetos miden ${newArray[0]} y ${newArray[1]} y su hipotenusa mide ${newArray[2]}.`;
	} else {
		result.innerText = `Los valores ${a}, ${b} y ${c} no forman una terna pitagórica.
		El triángulo no es rectángulo.`;
	}
}

function cleanAllFields() {
	// Cleaning the array
	inputsArray = [];
	// cleaning result paragraph 
	result.innerText = "";

	input1.value = "";
	input2.value = "";
	input3.value = "";
}