(function(){
    addEventListener("UIReady", init, false);
    function init(event)
    {
	 const id = "renarate-here";
	 let element = document.getElementById(id);
	 document.getElementById(id).addEventListener("click", onClick, false);
	 PageActions.register(id, function(element)
			      {
				  return true;
			      }
			      );
    }
    function onClick(e)
    {
	alert(e.type);
    }
})()