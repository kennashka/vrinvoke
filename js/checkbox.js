$(document).ready(displayCheckbox);

function displayCheckbox() {    
   
    var checkboxes = $("input[type=checkbox]");
    var displayField = $('textarea[name=selectedCB]');

    $.each(checkboxes, function() {
      $(this).change(printChecked);
    })
    
    function printChecked() {
        var checkedIds = [];

        // for each checked checkbox, add it's id to the array of checked ids
        checkboxes.each(function() {   
            if($(this).is(':checked')) {
                checkedIds.push($(this).attr('id'));
            }
        });

         displayField.val( '<div class="' +checkedIds.join('') + '"> </div>'); 

    }
}  


