function showPic (whichPic){
    if(!document.getElementById("placehoder")) return false;
    var source = whichPic.getAttribute("href");
    var placehoder = document.getElementById("placehoder");
    placehoder.setAttribute("src",source);
    if(document.getElementById("description")){
        var title = whichPic.getAttribute("title") ? whichPic.getAttribute("title"):" ";
        var description = document.getElementById("description");
        if(description.firstChild.nodeValue == 3){
            description.firstChild.nodeValue = title;
        }
    }
    return true;
}

function countBodyChildren(){
    var elt = document.getElementsByTagName("body")[0];
    //alert(elt.childNodes.length);
    alert(elt.nodeType);
}

function prepareGallery(){
    if(!document.getElementById || !document.getElementsByTagName) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i = 0;i < links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            return showPic(this) ? false : true;
        }
    }
}

window.onload = function(){
    prepareGallery();
    countBodyChildren();
}
