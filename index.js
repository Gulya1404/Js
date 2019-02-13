
function updateP(textbox){
	let p2 = document.getElementById("p2");
	let p3 = document.getElementById("p3");
	let pText2 = document.getElementById("pText2");
	let value = textbox.value;

	let seconds =  Math.floor(value % 60); 
	let minute = Math.floor(( value / 60 ) % 60) ;
	let hour = Math.floor((value / 3600) % 60);
	
	let secondsPassed = minute * 60+seconds; 
	
	p2.value = hour + " : " + minute+ " : " + seconds ;
	pText2.innerHTML = "Seonds Have Passed since last half of "+ hour + " o'clock." ;
	p3.value = secondsPassed;

}

function findWords( letterbox){
	let text = document.getElementById("text1").value;
	let text3 = document.getElementById("pText3");
	let indexBox = document.getElementById("indexBox");
	let indexes= [];
	let indexText = "";
	
	for(let i = 0 ; i < text.length ; i++){
		if(text[i] == letterbox.value{
			indexes.push(i);
		}
		}
	}

	for(let i = 0 ; i< indexes.length ; i++){
		indexText += " " +indexes[i];
	}

	text3.innerHTML = "Letter indexes " + letterbox.value;
	indexBox.value = indexText;
}






