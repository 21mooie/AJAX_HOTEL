 // JavaScript Document
/*eslint-disable*/
var hotelInfo;
var xhr = new XMLHttpRequest();
xhr.open('GET', "data.json", true);
xhr.responseType = 'text';

xhr.onload = function() {
    if(xhr.status === 200) {
        hotelInfo = JSON.parse(xhr.responseText);
        console.log(hotelInfo);
        display(0);
  
    } // end if
} // end function

xhr.send();



function display(idx){
    var hotelObj = hotelInfo[idx];
    var image = document.getElementById('photo');
    var roomName = document.getElementById('roomName');
    var roomDesc = 
    document.getElementById('desc');
    
    var weeknd = document.getElementById('weekend');
    
    var weekday = document.getElementById('weekday');
    
    var details = document.getElementById('details');
    
    image.src=hotelObj.photo;
    roomName.innerHTML=hotelObj.name;
    roomDesc.innerHTML=hotelObj.description;
    
    weeknd.innerHTML=hotelObj.cost.weekend;
    
    weekday.innerHTML=hotelObj.cost.weekday;
    
    details.innerHTML='';
    
    for (i=0;i<hotelObj.details.length;i++){
        var pNode = document.createElement('p');
        pNode.innerHTML=hotelObj.details[i];
        
        details.appendChild(pNode);
        
    }
}