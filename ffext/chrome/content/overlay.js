var notebox ={
    start:function()
    {
	try{
	    var nBox = Browser.getNotificationBox();
	    alert("Success");
	}
	catch(e)
	    {
		alert(e.title);
	    }
	
	var buttons = [{
        label: 'Button',
        accessKey: 'B',
        popup: 'blockedPopupOptions',
        callback: null
    }];

	alert('Hello world');
	//nBox.appendNotification("Hello world","popup-blocked","chrome://a11ypi/skin/a1icon.png",nBox.PRIORITY_INFO_HIGH,buttons);
    },
};
window.addEventListener("UIReady",function(){notebox.start();}, true);
