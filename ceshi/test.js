require('../css/test.css');
// require('./fire.png')

window.onload=() => {
	
	// console.log()
	
	var btnName = ["第一个","第二个","第三个","第四个"];
	var boxName = ["盒子一","盒子二","盒子三","盒子四"];
	
	var ul=document.getElementById("box").firstElementChild;
	var div=document.getElementById("box").lastElementChild;
	
	for(var i=0 ;i<btnName.length;i++){
		var li=document.createElement("li");
		var divs=document.createElement("div");
		
		li.appendChild(document.createTextNode(btnName[i]));
		divs.appendChild(document.createTextNode(boxName[i]));
		console.log(divs);
		
		
		ul.appendChild(li);
		div.appendChild(divs);
	}
	
	var li=ul.getElementsByTagName("li");
	var div1=div.getElementsByTagName("div");
	li[0].className="con"
	
	for(var i=1;i<div1.length;i++){
		div1[i].style.display="none";
	}
	
	for(var i=0;i<li.length;i++){
		li[i].onmouseover=function(){
			for(var j=0 ;j<li.length;j++){
				if(li[j]==this){
					li[j].className="con";
					div1[j].style.display="block";
				}
				else{
					li[j].className="";
					div1[j].style.display="none";
				}
			}
		}
	}
	
}