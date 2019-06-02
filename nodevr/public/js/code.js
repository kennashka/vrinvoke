function insertMetachars(sStartTag, sEndTag) {
  var bDouble = arguments.length > 1,
   oMsgInput = document.myForm.myTxtArea,
   nSelStart = oMsgInput.selectionStart, 
   nSelEnd = oMsgInput.selectionEnd, 
   sOldText = oMsgInput.value;
  oMsgInput.value = sOldText.substring(0, nSelStart) + (bDouble ? sStartTag + sOldText.substring(nSelStart, nSelEnd) + sEndTag : sStartTag) + sOldText.substring(nSelEnd);
  oMsgInput.setSelectionRange(bDouble || nSelStart === nSelEnd ? nSelStart + sStartTag.length : nSelStart, (bDouble ? nSelEnd : nSelStart) + sStartTag.length);
  oMsgInput.focus();
}

/*
function ResetPage(f)
{

}

*/
$(document).ready(function() {
 

  //const input = document.getElementById('txt2');  
 
 // $('#txt2').focus();


 $.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();

        }
    });
    return this;
};
$('textarea[name=txt2]').focus().setCursorPosition(31);


// need to write a conditional statement based on contents in box or fix the position of element

});




