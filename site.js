function loadXMLDoc() {
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText);

        }
    };

    xmlhttp.open("GET", "sma_gentext.xml", true);
    xmlhttp.send();
}

 function myFunction(responseText) {
    var parser= new DOMParser();
    var xmlDoc=parser.parseFromString(responseText,"text/xml");

    var txt="";
    var targetElement=xmlDoc.querySelector('trans-unit[id="42007"] target');
    if(targetElement) {
        txt=targetElement.textContent;

        var dataURL='data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
        var downloadLink=document.createElement('a');
        downloadLink.href=dataURL;
        downloadLink.download='target.txt';
        //downloadLink.style.display='none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    else
    {
        txt="Not found";
    }
    document.getElementById("display").innerHTML=txt;
 }