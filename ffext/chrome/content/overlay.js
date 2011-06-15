var notebox ={
    start:function()
    {
	//gBrowser.getNotificationBox();
	alert('Hello world');
	document.getElementById('navbox').appendNotification("Hello world","5");
    },
};
alert('Hello');
window.addEventListener("load", notebox.start, true);
