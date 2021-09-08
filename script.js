let estado = {}

function bill_writed(event) {
    estado.bill = event.srcElement.value;
}

function people_writed(event) {
    // body...
}

function percent_selected(event) {
    // body...
}

function percent_writed(event) {
    // body...
}

function reset_click(event) {
    // body...
}

window.addEventListener('DOMContentLoaded', function (event) {
    let bill_input = document.querySelector('#input-bill');
    let custom_input = document.querySelector('#input-custom');
    let people_input = document.querySelector('#input-people');
    let percent_btn = document.querySelector('.btn-percent');
    let reset_btn = document.querySelector('#button-reset');
    bill_input.oninput = bill_writed;
    custom_input.oninput = percent_writed;
    people_input.oninput = people_writed;
}, false);