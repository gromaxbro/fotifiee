let friend = {
	"kushal":"idfc.mp3",
	"sweta":"inf.mp3",
	"himani":"life.mp3",
	"priyansu":"ekdin.mp3",
	"ritesh":"toxic.mp3",
}

let dnext = document.getElementsByClassName("sub");


function clickeds() {
	console.log("hello")
	let syb = document.getElementsByClassName("sys")[0].value
	if (syb in friend){
		console.log("done")
		dnext[0].style.visibility = "visible";
		document.getElementsByClassName("sub")[0].click();
	}
	else{
		alert("not found")
		dnext[0].style.visibility = "hidden";
	} 

}