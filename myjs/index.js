function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(targetElement == parent.lastChild){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function preparePlacehoder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var placehoder = document.createElement("img");
    placehoder.setAttribute("id","placehoder");
    placehoder.setAttribute("src","images/IMG_0664.JPG");
    placehoder.setAttribute("alt","My placehoder image");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placehoder,gallery);
    insertAfter(description,placehoder);
}
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
    preparePlacehoder();
    prepareGallery();
    //countBodyChildren();
}
