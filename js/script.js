


/*
    Show/hide other job role text area
*/ 

// Hide by default on load
$(`#other-title, label[for="other-title"]`).hide();

$(`#title`).change(function(){
    const $jobTitle = $(`#title`).val();
    if ($jobTitle === `other`) {
        $(`#other-title, label[for="other-title"]`).show();
    } else {
        $(`#other-title, label[for="other-title"]`).hide();
    }
});

/*
    Configure t-shirt info section options
*/ 

// $(`#design`).change(function(){
//     $(`option[value="cornflowerblue"],
//         option[value="darkslategrey"],
//         option[value="gold"],
//         option[value="tomato"],
//         option[value="steelblue"],
//         option[value="dimgrey"]`).show();
//     const $designSelected = $(`#design`).val();
//     if ($designSelected === `js puns`) {
//         $()
//         $(`option[value="tomato"],
//             option[value="steelblue"],
//             option[value="dimgrey"]`).hide();
//     } else if ($designSelected === `heart js`) {
//         $(`option[value="cornflowerblue"],
//         option[value="darkslategrey"],
//         option[value="gold"]`).hide();
//     } else {
//         $(`option[value="cornflowerblue"],
//         option[value="darkslategrey"],
//         option[value="gold"],
//         option[value="tomato"],
//         option[value="steelblue"],
//         option[value="dimgrey"]`).show();
//     }
// });

$(`#design`).change(function(){
    $(`.love-js`).show();
    $(`.js-puns`).show();
    const $designSelected = $(`#design`).val();
    if ($designSelected === `js puns`){
        $(`.love-js`).hide();
        $(`#color option`).eq(1).prop(`selected`, true);
    } else if ($designSelected === `heart js`){
        $(`.js-puns`).hide();
        $(`#color option`).eq(3).prop(`selected`, true);
    } else {
        $(`#color option`).eq(0).prop(`selected`, true);
    }
});


// ”Register for Activities” section

// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.

// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.

// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.


// enable/disable checkboxes 
$(`.activities input:checkbox`).change(function(){
    if ($(this).hasClass(`morning-session`)) {
        if ($(this).is(`:checked`)) {
            $(`.morning-session`).not($(this)).prop({ disabled: true, checked: false });
        } else {
            $(`.morning-session`).prop(`disabled`, false);
        }
    } else if ($(this).hasClass(`afternoon-session`)) {
        if ($(this).is(`:checked`)) {
            $(`.afternoon-session`).not($(this)).prop({ disabled: true, checked: false });
        } else {
            $(`.afternoon-session`).prop(`disabled`, false);
        }
    }
}); 




// Calculate total 