"use strict";

function init() {

    /*** Modal após clicar no bobão comprar ***/
    function modalComprar() {
        $('.btn-comprar').click(function(event) {
            event.preventDefault();
            sweetAlert({
                title: "Confirmar compra?",
                imageUrl: '../../src/img/confirm-compra.png',
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonText: "Sim, desejo confirmar!",
                confirmButtonColor: "#86bbd8"
            },
            function(isConfirm) {
                if (isConfirm) {
                swal({
                    title: "Pedido realizado",
                    text: "Você recebera a confirmação da compra em seu e-mail",
                    type: "success",
                    timer: 5000
                    });
                }
            });
        });
    }

    /*** Modal após clicar em 'escolher mais produto'***/
    function modalContinueCompras() {
        $('.btn-continue').click(function(event) {
            event.preventDefault();
            sweetAlert({
                title: "Continue Comprando",
                text: "Deseja realmente sair do carrinho?",
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonText: "Sair do carrinho",
                confirmButtonColor: "#86bbd8"
            },
            function(isConfirm) {
                if (isConfirm) {
                swal({
                    title: "Redirecionando você para a nossa Home",
                    text: "Caso queira voltar, basta clicar no carrinho",
                    type: "success",
                    timer: 5000
                    });
                    window.location = "/home.html";
                }
            });
        });
    }

    /*** Verificar se a imagem não existe e adicionar uma imagem default***/
    function checkImg() {

        var obj = $('td img');

        for (var i = 0; i < obj.length; i++) {
        	if (obj[i].currentSrc == "") {
        		obj[i].src = 'src/img/cart-empty.png'
            }
        }
    }

    checkImg();
    modalComprar();
    modalContinueCompras();
}

window.onload = init;
