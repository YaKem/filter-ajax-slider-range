'use strict';

const txt = document.getElementById('res');

function search(str) {
    if(str.length == 0) {
        txt.innerHTML = 'Aucun résultat';
    } else {
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {                
                txt.innerHTML = this.responseText;
            }        
        }
        xhr.open('GET', './search.php?q=' + str, true);
        xhr.send();
    }
}

window.addEventListener('DOMContentLoaded', () => {

    const inputText = document.querySelector('input[type="text"]');
    inputText.addEventListener('keyup', () => {
        search(inputText.value);
    });
    
});

