// get reference to textboxes 
var tbFirst=document.getElementById('myTxtArea');
var tbSecond=document.getElementById('txarea123');

// button to call firstToSecond function
document.getElementById('movetext').onclick=function(){
    firstToSecond();
};

// copy #first's text value to #second
function firstToSecond(){
    // read tbFirst and copy to tbSecond
    tbSecond.value=tbFirst.value;
    // optionally, clear #first
   // tbFirst.value='';
}