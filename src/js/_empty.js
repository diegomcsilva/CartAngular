"use strict";

function initEmpty() {
    function checkimg() {

        var obj = $('td img');

        for (i = 0 ; i < obj.length; i++) {
        	if (obj[i].currentSrc == "") {
        		obj[i].src = 'src/img/cart-empty.png'
            }
        }
    }
    checkimg();
}

window.onload = initEmpty;
