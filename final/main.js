$(document).ready(function() {
    $(".draggable").draggable();
});

$(".droppable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
        console.log("Image dropped!");
        const newPageURL = $(ui.helper).data('page');
        window.location.href = newPageURL;
    }
});

