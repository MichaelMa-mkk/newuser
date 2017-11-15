function show_dialog() {
    $('#not_develop').addClass('show');
}

function tab1_click() {
    $('.current').removeClass('current');
    $('.hide').removeClass('hide');
    $('#tab2_content').addClass('hide');
    $('#tab1').addClass('current');
    $(':text').val('');
}

function tab2_click() {
    $('.current').removeClass('current');
    $('.hide').removeClass('hide');
    $('#tab2').addClass('current');
    $('#tab1_content').addClass('hide');
    $(':text').val('');
}

function disable_code() {
    $('#send_code').addClass('disabled');
    document.getElementById("send_code").innerHTML = "重新发送";
}

function check_phone_number() {
    if ($("#phone_input").val().length != 11) {
        $('.phone_error').show();
    }
    else {
        $('.phone_error').hide();
    }
}