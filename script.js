let estado = {}

function bill_writed(event) {
    estado.bill = event.srcElement.value;
    document.getElementById('error-bill').style.visibility = 'hidden';
    event.srcElement.style.borderColor = 'hsl(172, 67%, 45%)';
    if (event.srcElement.value === '0') {
        document.getElementById('error-bill').style.visibility = 'visible';
        event.srcElement.style.borderColor = 'red';
    }
    update_ui();
}

function people_writed(event) {
    estado.people = event.srcElement.value;
    document.getElementById('error-people').style.visibility = 'hidden';
    event.srcElement.style.borderColor = 'hsl(172, 67%, 45%)';
    if (event.srcElement.value === '0') {
        document.getElementById('error-people').style.visibility = 'visible';
        event.srcElement.style.borderColor = 'red';
    }
    update_ui();
}

function percent_selected(event) {
    let btnGroup = document.querySelectorAll('.btn-percent');
    btnGroup.forEach(el => el.classList.add('no-seleccionado'));
    btnGroup.forEach(el => el.classList.remove('seleccionado'));
    event.srcElement.classList.add('seleccionado');
    event.srcElement.classList.remove('no-seleccionado');
    let percentField = document.getElementById('input-custom');
    let billField = document.getElementById('input-bill');
    let peopleField = document.getElementById('input-people');
    percentField.value = '';
    percentField.style.borderColor = 'transparent';
    billField.style.borderColor = 'transparent';
    peopleField.style.borderColor = 'transparent';
    estado.percent = event.srcElement.dataset.percent;
    update_ui();
}

function percent_writed(event) {
    let btnGroup = document.querySelectorAll('.btn-percent');
    btnGroup.forEach(el => el.classList.add('no-seleccionado'));
    btnGroup.forEach(el => el.classList.remove('seleccionado'));
    estado.percent = event.srcElement.value;
    event.srcElement.style.borderColor = 'hsl(172, 67%, 45%)';
    if (event.srcElement.value === '0') {
        event.srcElement.style.borderColor = 'red';
    }
    update_ui();
}

function reset_mousedown(argument) {
    if (estado.bill && estado.percent && estado.people) {
        event.srcElement.classList.add('presionado');
    }
}

function reset_mouseup(argument) {
    event.srcElement.classList.remove('presionado');
}

function reset_click(event) {
    if (estado.bill && estado.percent && estado.people) {
        estado = {};
        update_ui();
        let bill_input = document.querySelector('#input-bill');
        let custom_input = document.querySelector('#input-custom');
        let people_input = document.querySelector('#input-people');
        let btnGroup = document.querySelectorAll('.btn-percent');
        bill_input.style.borderColor = 'transparent';
        bill_input.value = '';
        custom_input.style.borderColor = 'transparent';
        custom_input.value = '';
        people_input.style.borderColor = 'transparent';
        people_input.value = '';
        btnGroup.forEach(el => el.classList.add('no-seleccionado'));
        btnGroup.forEach(el => el.classList.remove('seleccionado'));
    }
}

function update_ui() {
    let tagValueTip = document.getElementById('result-tip');
    let tagValueTotal = document.getElementById('result-total');
    let reset_btn = document.querySelector('#button-reset');
    reset_btn.classList.add('inactivo');
    reset_btn.classList.remove('activo');
    if (!estado.bill || !estado.percent || !estado.people) {
        tagValueTip.innerText = '$ 0.0';
        tagValueTotal.innerText = '$ 0.0';
        return;
    }
    let bill = parseInt(estado.bill);
    let percent = parseInt(estado.percent);
    let people = parseInt(estado.people);
    if (
        !bill ||
        bill === 0 || 
        !percent || 
        percent === 0 ||
        !people ||
        people === 0) {
        tagValueTip.innerText = '$ 0.0';
        tagValueTotal.innerText = '$ 0.0';
        return;
    }
    let tip = (bill / people) * (percent / 100);
    let total = (bill / people) + tip;
    tagValueTip.innerText = `$ ${tip.toFixed(2)}`;
    tagValueTotal.innerText = `$ ${total.toFixed(2)}`;
    reset_btn.classList.add('activo');
    reset_btn.classList.remove('inactivo');
}

window.addEventListener('DOMContentLoaded', function (event) {
    let bill_input = document.querySelector('#input-bill');
    let custom_input = document.querySelector('#input-custom');
    let people_input = document.querySelector('#input-people');
    let percent_btn = document.querySelectorAll('.btn-percent');
    let reset_btn = document.querySelector('#button-reset');
    bill_input.oninput = bill_writed;
    custom_input.oninput = percent_writed;
    people_input.oninput = people_writed;
    reset_btn.onclick = reset_click;
    reset_btn.onmousedown = reset_mousedown;
    reset_btn.onmouseup = reset_mouseup;
    percent_btn.forEach(el => el.onclick = percent_selected);
}, false);