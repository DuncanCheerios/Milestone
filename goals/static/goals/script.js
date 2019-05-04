
/*
This function (borrowed from stackexchange) formats a date object so it can be
 inputted into the html form.  Used below to set the default date to 'today'
*/
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


document.addEventListener('DOMContentLoaded', () => {

    // Configures the Form Display for Adding new Journey Goal
    $('#show').on('click', function () {
        $('.hide').show();
        $('.hide-flex').css( "display", "flex" );
        $('.show').hide();
    })

    $('.closer').on('click', function () {
        $('.hide').hide();
        $('.show').show();
    })

    // Set the default date in the input fields to today
    $('.date').val(new Date().toDateInputValue());

    // This marks if the date-change alert message has not been shown (True = not yet shown)
    let alert_Bool = true;

    // This event listener marks if user starts to record progress for a future date.
    // Ideally users will only log already-completed progress, but they are free to do what they like!
    $('.date').on('change', function() {
        let today = new Date().toDateInputValue()
        let date = this.value
        if (date > today && alert_Bool) {
            alert("We advise only logging past progress, and not future progress! This message will not show again until you leave the page.")
            alert_Bool = false;
        }
    });

    // Configure the edit button for my goal_view page to make the progress logs editable
    $(".edit").on('click', function () {
        $(this).parent().hide()
        $(this).parent().next().show()
    })

    // Configure the button to close the progress-edit options
    $(".progress-cancel").on('click',function() {
        $(this).parent().parent().parent().hide()
        $(this).parent().parent().parent().prev().show()
    })




});
