// Появление дополнительного окна при выборе чекбокса с пополнением депозита

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#checkin').addEventListener('click', function() {
        document.querySelector('#add-sum').classList.toggle('is-active')
    })
});

// Появление выбора срока вклада (Месяц/год), открытие и закрытие вкладки

document.querySelector('.select-button').addEventListener('click', function () {
    document.querySelector('.list-select').classList.toggle('list-select-active');
});

// Выбор элементов внутри вкладки (Месяц/Год)

document.querySelectorAll('.list-select-item').forEach(function(listItem) {
    listItem.addEventListener('click', function() {
        document.querySelector('.select-button').innerText = this.innerText;
        document.querySelector('.category-select-enter').value = this.dataset.value;
        document.querySelector('.list-select').classList.remove('list-select-active')
    })
})

document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.select-button')) {
        document.querySelector('.list-select').classList.remove('list-select-active');
    }
})