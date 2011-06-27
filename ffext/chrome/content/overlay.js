(function(){
    var rlist;
    var i=0;
    addEventListener("UIReady", init, false);
    addEventListener("URLChanged",closepop,false);
    addEventListener("load",onWindowLoad,false);
    function onWindowLoad(e)
    {
       
	messageManager.addMessageListener("MyCode:TitleChanged", titleChanged);
	messageManager.loadFrameScript("chrome://a11ypi/content/content.js", true);
    }
    function titleChanged(message)
    {

	       	alert("Audio Narrations present");
		//	let aud= message.json.title;
		//	alert(aud);
    }

    function init(event)
    {
	
	const id = "alipi";
	let element = document.getElementById(id);
	document.getElementById(id).addEventListener("click", alipiClicked, false);
	PageActions.register(id, function(element)
			     {
				 return true;
			     }
			     );

    }
    function alipiClicked()
    {

	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange = function() 
	    {  
		if(xhr.readyState == 4)
		    {
			if(xhr.responseText == "None")
			    {
				alert("No Renarrations present");
			    }
			else
			    {
			 
				createArrowBox(JSON.parse(xhr.responseText));
			    }
		    }
	    }
	
	xhr.open("POST","http://devel.virtual-labs.ac.in/alipi/menu",true);

    	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(String(getBrowser().currentURI.spec));
    }

    function createArrowBox(mlist){
	rlist= mlist;
	let ppup = document.getElementById('alipi-popup');
	let dbtn = document.getElementById('down');
	dbtn.addEventListener("click",downClicked,false);
	let ubtn = document.getElementById('up');
	let lbl = document.getElementById('lab');
	ppup.addEventListener("click",arrowboxClicked,false);
	ubtn.addEventListener("click",upClicked,false);
        ppup.hidden = false;
	BrowserUI.pushPopup(pHide,[ppup,dbtn,ubtn]);
	lbl.value = rlist[0];
    }
    function upClicked(e)
    {
	let lbl = document.getElementById('lab');
	
	if(i>0)
	    {
		i--;
		lbl.value=rlist[i];
	    }
    }    

    function downClicked(e)
    {

	let lbl =document.getElementById('lab');
	//	lbl.value="hello";
	e.preventDefault();	
	if(i<(rlist.length-1))
	 	    {
		
	 		i++;
	 		lbl.value=rlist[i];
	 	    }

    }
    
    function arrowboxClicked(e)
    {
	if(e.target.id == 'up')
	    {
		e.preventDefault();
	    }
	else if(e.target.id == 'down')
	    {
      		e.preventDefault();
	    }
	else if(e.target.id == 'lab')
	    {

		let ppup = document.getElementById('alipi-popup');
		ppup.removeEventListener("click",arrowboxClicked,false);
		ppup.hidden= true;
		var url = getBrowser().currentURI.spec;
		Browser.loadURI( "http://devel.virtual-labs.ac.in/alipi/replace?url="+url+"&lang="+e.target.value);
	    }
    }

    function closepop()
    {
	//	alert("url changed");
	// addEventListener("load",onWindowLoad,false);
	 let ppup = document.getElementById('alipi-popup');
	 	ppup.hidden= true;

	
    }
    
 
    var pHide =
	{
	    hide: function()
	    {
		let ppup = document.getElementById('alipi-popup');
		ppup.hidden= true;
	    }
	};

})()