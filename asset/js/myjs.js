(function($) {
    'use strict';

    $("#submit_btn").on('click', function() {
        // set the data
        var data = {
             action: 'my_action',
             security: my_php_variables.nonce,
             city: $("#city").val(),
             name: $("#name").val(),
             
             tel: $("#tel").val(),
             email: $("#email").val()
        }

        $.ajax({
            type: 'post',
            url: my_php_variables.ajaxurl,
            data: data,
            success: function(response) {
                //output the response on success
                $("#response").html(response);

            },
            error: function(err) {
                console.log(err);
            }
        });
    
        return false;
    });
})(jQuery);