"use strict";

function initEmpty() {
    function checkImg() {

        var obj = $('td img');

        for (var i = 0; i < obj.length; i++) {
        	if (obj[i].currentSrc == "") {
        		obj[i].src = 'src/img/cart-empty.png'
            }
        }
    }
    checkImg();
}

$( document ).ready(function() {
    checkImg();
})
window.onload = initEmpty;
