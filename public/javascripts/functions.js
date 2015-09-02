/**
 * Created by Mothra on 9/2/15.
 */
$(document).ready(function(){

    $('#addStudent').on('submit', function(e){

        var $this = $(this);

        e.preventDefault();
        var firstName = $(this).children("[name=firstName]").attr('firstName');
        var lastName = $(this).children("[name=lastName]").attr('lastName');
        console.log(firstName + lastName + "line 14");
        var data = {
            firstName: firstName,
            lastName: lastName,
        };
        console.log(data + "line 20");

        $.ajax({
            url: '/students',
            type: 'POST',
            data: data
        }).done(function(response, textStatus, jqXHR){
            console.log('Success!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });
    })
});