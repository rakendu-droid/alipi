(function(){
    var rlist;
    var i=0;
    addEventListener("UIReady", init, false);
    addEventListener("URLChanged",closepop,false);
    function init(event)
    {
	const id = "renarate-here";
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
	let rbtn = document.getElementById('right');
	rbtn.addEventListener("click",rightClicked,false);
	let lbtn = document.getElementById('left');
	let lbl =document.getElementById('lab');
	ppup.addEventListener("click",arrowboxClicked,false);

	lbtn.addEventListener("click",leftClicked,false);
        ppup.hidden = false;
	BrowserUI.pushPopup(pHide,[ppup,rbtn,lbtn]);
	lbl.value = rlist[0];
       


    }
    function rightClicked(e)
    {

	let lbl =document.getElementById('lab');
	lbl.value="hello";
	e.preventDefault();	
	// if(i<rlist.length)
	// 	    {
		
	// 		i++;
	// 		lbl.value=rlist[i];
	// 	    }

    }
    function leftClicked(e)
    {
	let lbl = document.getElementById('lab');
	
	if(i>0)
	    {
		i--;
		lbl.value=rlist[i];
	    }
    }    

    function arrowboxClicked(e)
    {
	if(e.target.id == 'left')
	    {
		//	alert('Hello');
		e.preventDefault();
	    }
	else if(e.target.id == 'right')
	    {
		//	alert('Hello');
		e.preventDefault();
	    }
	else
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