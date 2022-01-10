console.log("welcome to fotofie");
let song = new Audio("idfc.mp3");
let click = document.getElementsByClassName("anab");
let click2 = document.getElementsByClassName("anab2");
let click1 = document.getElementsByClassName("anab1");
let photo = document.getElementsByClassName("box");
let pro = document.getElementsByClassName("progress");
let next = document.getElementsByClassName("next");
let g = 0;
let songlist = document.getElementsByClassName("songitems")
let poster = document.getElementsByClassName("poster")
let bts = document.getElementsByClassName("bts");
let timer = document.getElementsByClassName("timers");
// let reload = location.reload();
let list = ["idfc.mp3,idfcphoto.jpg,idfc",
"inf.mp3,infpic.jpg,infinity",
"life.mp3,lifepic.jpg,like goes on",
"ekdin.mp3,madar.jpg,ek din mar jayega",
"toxic.mp3,lifepic.jpg,toxic"]
let friend = {
	"kushal":"idfc.mp3,idfcphoto.jpg,idfc",
	"sweta":"inf.mp3,infpic.jpg,infinity",
	"himani":"life.mp3,lifepic.jpg,like goes on",
	"priyansu":"ekdin.mp3,madar.jpg,ek din mar jayega",
	"ritesh":"toxic.mp3,lifepic.jpg,toxic",
}
let r = 0;
let len = list.length - 1;

function convertTimeToString(time) {
     totalNumberOfSeconds = Math.floor(time)
     const hours = parseInt( totalNumberOfSeconds / 3600 );
     const minutes = parseInt( (totalNumberOfSeconds - (hours * 3600)) / 60 );
     const seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
     const result = (minutes < 10 ?  + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
     // console.log(result)
     return result
}

let pot;
function fg() {
	console.log("started")
	
	let bts = document.querySelectorAll('.bts')

	console.log(bts[0].innerHTML)
	let title = document.getElementsByClassName("name")
	if (bts[0].innerHTML in friend){
		let so = friend[bts[0].innerHTML];
		let gh = so.split(",");
		pot = gh[1]

		function gif() {
			let fg = photo[0].innerHTML = "<img class="+ "poster" + " width="+ "220px" +" height="+"224px"+" src="+"listf.gif"+" >"
		}
		song = new Audio(gh[0])
		console.log("hello")
		let ff = "poster"
		let df = title[0].innerHTML = gh[2];
		photo[0].innerHTML = "<img class="+ "poster" + " width="+ "220px" +" height="+"224px"+" src="+gh[1]+" >"
		
let g = 0;

function change(f) {
	console.log(f)
	song.pause();
	let aw = list[f];
	let pp = aw.split(",");
	console.log(pp[0])
	song = new Audio(pp[0]);
	pot  = pp[1]
	pro[0].value = 0;
	photo[0].innerHTML = "<img class="+ "poster" + " width="+ "220px" +" height="+"224px"+" src="+pot+" >"
	title[0].innerHTML = pp[2];
	click[0].classList.remove("fa-pause-circle");
	click[0].classList.add("fa-play-circle");
	
	song.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((song.currentTime/song.duration)* 100); 
    pro[0].value = progress;
    timer[0].innerHTML = convertTimeToString(song.currentTime) + '/' + convertTimeToString(song.duration)

})
pro[0].addEventListener('change', ()=>{
    song.currentTime = pro[0].value * song.duration/100;
})

}
click2[0].addEventListener("click",function(){
	
	
	if(g >= len){
		g = 0;
	}
	else{
		g++;
	}
	change(g)
	
		})
click1[0].addEventListener("click",function(){

	if(g == 0){
		g = len;
	}
	else{
		g--;
	}
	change(g)
})	
	
click[0].addEventListener('click', function(){
	if (song.paused|| song.currentTime<=0){
		song.play();
		click[0].classList.remove("fa-play-circle");
		click[0].classList.add("fa-pause-circle");
		gif()
		
	}
	else{
		song.pause();
		click[0].classList.remove("fa-pause-circle");
		click[0].classList.add("fa-play-circle");
		let fg = photo[0].innerHTML = "<img class="+ "poster" + " width="+ "220px" +" height="+"224px"+" src="+pot+" >"
	}
    
    console.log("Mouse down when clicked on Container");
})

song.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((song.currentTime/song.duration)* 100); 
    pro[0].value = progress;
    timer[0].innerHTML = convertTimeToString(song.currentTime) + '/' + convertTimeToString(song.duration)
})
pro[0].addEventListener('change', ()=>{
    song.currentTime = pro[0].value * song.duration/100;
})

	}
	else{
		console.log("nahi hai")
	}
}

lcr = setTimeout(fg, 1000);

