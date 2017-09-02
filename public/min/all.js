angular.module('app').component('headerCart', {
  templateUrl: 'src/view/headerCart.html',
  bindings: ""
});

var app = angular.module('app',[]);

app.controller('CartForm', ['$scope', '$http', function($scope, $http) {

    //Get dados do JSON
    $http.get("http://api.intercase.net.br/items.json").then(function(response) {
        $scope.items = response.data;
        // console.log($scope.items);
        // console.log(response.data);
    }),

    /*** Função responsável remover o item do carrinho ***/
    $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    },

    /*** Função responsável por diminiur o número de itens no carrinho ***/
    $scope.moreItem = function(index) {
        $scope.items[index].quantity = $scope.items[index].quantity + 1;
    }

    /*** Função responsável por diminiur o número de itens no carrinho ***/
    $scope.lessItem = function(index) {
        if ($scope.items[index].quantity > 0) {
            $scope.items[index].quantity = $scope.items[index].quantity - 1;
        } else {
            // Se o valor chegar à 0 ele continua mostrando, caso o usuário queira retoma-lo no carrinho
            $scope.items[index].quantity = 0;
        }
    }

    /*** Função o valor total no carrinho ***/
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.price * item.quantity;
        })

        return total;
    };
}]);
