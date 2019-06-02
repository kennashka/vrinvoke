$( 'input[type=button]' ).on('click', function(){
            var cursorPos = $('#text').prop('selectionStart');
            var v = $('#text').val();
            var textBefore = v.substring(0,  cursorPos );
            var textAfter  = v.substring( cursorPos, v.length );
            $('#text').val( textBefore+ $(this).val() +textAfter + '\n' + (',')
             );
        });