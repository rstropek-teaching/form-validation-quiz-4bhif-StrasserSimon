"use strict";
var firstName = false;
var lastName = false;
var Email = true;
checkErrors();
$("#firstName").keyup(function () {
    let input = $(this);
    let firstname = input.val();
    if ($(this).val()) {
        $("firstNameMandatory").hide();
        firstName = true;
        checkErrors();
    }
    else {
        $("#firstNameMandatory").show();
        firstName = false;
        checkErrors();
    }
});
$("#lastName").keyup(function () {
    let input = $(this);
    let lastname = input.val();
    if ($(this).val()) {
        $("lastNameMandatory").hide();
        lastName = true;
        checkErrors();
    }
    else {
        $("#lastNameMandatory").show();
        lastName = false;
        checkErrors();
    }
});
$("#emailMandatory").hide();
$('#email').keyup(function () {
    let input = $(this);
    let email = input.val();
    let newsletterBox = $('#newsletter').is(':checked');
    if (newsletterBox && !email) {
        $("#emailMandatory").show();
    }
    else {
        $("#emailMandatory").hide();
        Email = true;
        checkErrors();
    }
});
$('#newsletter').change(function () {
    let newsletterBox = $('#newsletter').is(':checked');
    let email = $('#email');
    if (newsletterBox && !email.val()) {
        $("#emailMandatory").show();
        Email = false;
        checkErrors();
    }
    else {
        $("#emailMandatory").hide();
    }
});
$('#otherMediaChannel').hide();
$('#mediaChannelSelect').change(function () {
    let ChannelSelect = $("#mediaChannelSelect").val();
    if (ChannelSelect === 'Other') {
        $('#otherMediaChannel').show();
    }
    else {
        $('#otherMediaChannel').hide();
    }
});
function checkErrors() {
    if (firstName && lastName && Email) {
        $('button.btn').show();
    }
    else {
        $('button.btn').hide();
    }
}
