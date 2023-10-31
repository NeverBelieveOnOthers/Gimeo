var Css =`
.inputVideo{
position:fixed;
top:4px;
left:33%;
width:400px;
heigth:70px;
background:black;
color:white;
padding:8px;
border-radius:4px;
z-index:23231323;
font-family:Tahoma;

}

`;
var Html = `
<div class="inputVideo">
<center>
<span id="MessageText">
Want do watch a video with Gimeo.JS ? 
Click <b style='cursor:pointer' onclick="ToFileInput()"> [Here]</b>




</span>
</center>
</div>

<div id="VideoListSavJS"> 




</div>


`;

Jscript = `
function MainMessage(text){
	var m = document.getElementById("MessageText")
	m.innerHTML=text;
	
	
}

function ToFileInput(){
	const inp  = ["<input type='file' onchange='OpenWithGIMEO()' id='MediaFileInput'  />"];
	MainMessage(inp);
}

function OpenWithGIMEO(){
	//VideoListSavJS
	const gime_media = document.getElementById("MediaFileInput").files[0];
	GIMEO.NewVideoAt(gime_media,"VideoListSavJS")
	
}

`;



var MainCss = document.createElement("style")
MainCss.innerHTML=Css;
var MainHtml = document.createElement("div")
MainHtml.innerHTML=Html;
var MainJs = document.createElement("script")
MainJs.innerHTML=Jscript;


document.head.appendChild(MainCss);
document.head.appendChild(MainJs);
document.body.appendChild(MainHtml)