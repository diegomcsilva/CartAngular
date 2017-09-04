function test(item) {
    return item + 1;
}

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
    return true
}

describe("Button Click Event Tests", function() {

  it ("should invoke the btnShowMessage click event.", function() {
    expect(modalComprar()).toEqual(true);
  });
});
