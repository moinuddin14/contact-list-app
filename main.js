

document.getElementById('inputBox').addEventListener('keyup', showContacts);

function showContacts(e) {
    let inputText = document.getElementById('inputBox').value.toUpperCase();

    let ulCollection = document.getElementById('filterValues');

    let liCollection = ulCollection.querySelectorAll('li.collection-item');

    // console.log(liCollection);

    for (let i = 0; i < liCollection.length; i++) {
        let item = liCollection[i].querySelector('a').text.toUpperCase();

        if (item.indexOf(inputText) > -1) {
            liCollection[i].style.display = '';
        } else {
            liCollection[i].style.display = 'none';
        }
    }
}

function showDetails() {
    let ele = document.getElementById('qwerty');
    ele.style.display = '';
}

function dontShow() {
    let ele = document.getElementById('qwerty');
    ele.style.display = 'none';
}