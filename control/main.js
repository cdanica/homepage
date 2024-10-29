$(document).ready(function() {
    $(".draggable").draggable();
});

function toggleVisibility(id, button) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        $(element).draggable();
    } else {
        element.classList.add('hidden');
    }
}
 