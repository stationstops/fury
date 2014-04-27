
var myTextArray;
var myWordCount;
var myInterval=false;

getbook('./sampletext.txt');

function getbook(bookURL){
   
    var req = new XMLHttpRequest();  
    req.open('GET', bookURL, false);   
    req.send(null);  
    if(req.status == 200) {
       myTextArray=req.responseText.split(/\s+/);
       myWordCount=myTextArray.length;
      
       // $('#book_title')

   }
}

function playpause(){
	
	if(myInterval){
		clearInterval(myInterval);
		myInterval=false;
	}else{
		myInterval=setInterval(function(){getword()},300);
	}
}

function getword(){
		$('#textDiv').html(myTextArray.shift());
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}