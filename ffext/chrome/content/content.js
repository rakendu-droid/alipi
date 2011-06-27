//This is for child proces
// function domTitleChanged(aMessage) {
//   // Send the title to the main application process
//   let title = content.document.title;
//   alert("child"+e);
//   sendAsyncMessage("MyCode:TitleChanged", { title: title });
// }
// alert("Hello child");
// addMessageListener("DOMTitleChanged", domTitleChanged, false);



function domTitleChanged(aMessage) {
  // Send the title to the main application process
  let title = content.document.title;
  let aud = content.document.getElementsByTagName("audio");
  let title = content.document.title;
  let url = content.location.href;
  // let valid = content.document.write(url.search("http://devel.virtual-labs.ac.in/alipi/replace?url="));
  let audSize = aud.length;
  let uStr = "http://devel.virtual-labs.ac.in/alipi/";
  let i =0;
  if(audSize > 0 && url.search(uStr) != -1 )
      {
	  //	if(url.search(uStr) != -1)
	  //{
	  // sendAsyncMessage("MyCode:TitleChanged", {title:title });
	    while(i< audSize)
	      {
		  eid= aud[i].id;
		  let aele = content.document.getElementById(eid);
		  aele.style.border= "medium outset red";
		   i++;
		     }
      
	  
	  sendAsyncMessage("MyCode:TitleChanged", { title: url });
	  // }
      }

}
addEventListener("DOMTitleChanged", domTitleChanged, false);
