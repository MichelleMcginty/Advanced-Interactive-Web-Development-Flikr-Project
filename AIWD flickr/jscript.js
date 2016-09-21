function jsonFlickrApi(pics){
	var tString ="<ul id='thumbnails'>";
	selectedImage="<ul id='thumbnails'>";
	var picLength=pics.photos.photo.length;	
		for (x = 0; x<pics.photos.photo.length; x++ ) {
				url = "http://farm" + pics.photos.photo[x].farm ;
				url += ".static.flickr.com/" ;
				url += pics.photos.photo[x].server + "/";
				url += pics.photos.photo[x].id + "_";
				url += pics.photos.photo[x].secret; 
				var urlLittle = "_s.jpg";		
				var urlBig = "_b.jpg";			
				picArr[x]=url+urlBig;
				tString += " <li><img id=\"thumbnails_"+x+"\" onclick='showPic()' src = " + url + urlLittle+"></li>"; }
			if (tString=="<ul id='thumbnails'>"){tString+="</ul>";
				selectedImage+="</ul>";}
			else{tString+="</ul>";
				selectedImage+="</ul>";
				document.getElementById('carousel').innerHTML = tString;	
				document.getElementById('popup').innerHTML = "";
				picCentered();
				document.getElementById('findPic').innerHTML;
			    }	
	} 

function findPictures(){	
	tagString="";
	string="";
	var arr = new Array();
	arr = document.getElementsByTagName('input') 
		for (i = 0; i < arr.length; i++ )
			{tagString += arr[i].value+ ","	
			 string=escape(tagString);}
		if (string=="%"){				
			string="";
			document.getElementById('findPic').innerHTML = "Find pics";
			document.getElementById('carousel').innerHTML = "";
			document.getElementById('popup').innerHTML = "No Tag Selected";}
		else{newScript = document.createElement('script');
			request = "https://www.flickr.com/services/rest/?method=flickr.photos.search"
			 request += "&per_page=15";	 
			 request += "&api_key=cbb376337bc560ea93101d217e1fb13d";
			 request += "&tags="+string; 
			 request += "&format=json";
			 request += "&tag_mode=all";
			 newScript.setAttribute('src',request);
			 document.getElementsByTagName('head')[0].appendChild(newScript);
			 document.getElementById('findPic').innerHTML;
			 $('#carousel').html(loader);	
			}
}
//navigate with key board arrows
$(document).keydown(function(e) { 
	switch (e.which) {
		case 37:
			$('#carousel').animate({'marginLeft' : "+=70px" });
		break;
		case 39:
			$('#carousel').animate({'marginLeft' : "-=70px" }); 
		break;
			}
	})		
function click() {
	document.getElementById("findPic").addEventListener("click",findPictures);
	document.getElementById("addTag").addEventListener("click",tagField);
	}
	var loader = new Image();
	loader.src = "load.gif";
	var picArr=[];
	window.onload = click;

function tagField() {
	var newTag = document.createElement("input");	
	var button = document.createElement("button");			
	var minus = document.createTextNode("-");			
	newTag.setAttribute("id", "tag"); //input
	newTag.setAttribute("type", "text");
	newTag.setAttribute("name", "tag");
	document.getElementById("showTag").appendChild(newTag);		
	button.setAttribute ("id", "deleteBtn");
	button.appendChild(minus);
	document.getElementById("showTag").appendChild(button);	
		button.addEventListener('click', function(){ 					
			newTag.parentNode.removeChild(newTag)					
			button.parentNode.removeChild(button)},false);
	}
		
function picCentered(){
	halfOuterW = document.getElementById("frame").offsetWidth / 2;
	halfImageW = document.getElementById("thumbnails_0").offsetWidth / 2; 
	outerLeftOffset = halfOuterW - halfImageW;
	innerLeftOffset = document.getElementById("thumbnails_0").offsetLeft;
	var left = outerLeftOffset - innerLeftOffset;
	document.getElementById("carousel").style.left = left + "px";
}
function showPic(){		
	var getLi = document.getElementsByTagName('li');		
	var lengthLi = getLi.length;		
		for ( var y = 0; y < lengthLi; y++ ) 
			(function(y){ getLi[y].onclick = function() {
				var getDisplay = picArr[y];		
				document.getElementById('popup').innerHTML = "<img src="+getDisplay+">";
				return false;
				}
		})(y)			
	}		