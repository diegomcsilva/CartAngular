angular.module('myApp').component('headerCart', {
  templateUrl: '../view/headerCart.html',
  bindings: {
  }
});

var app = angular.module('app',[]);

app.controller('CartForm', ['$scope', function($scope) {

    $scope.invoice = {
        items:
        [
            {
                "name": "Smartphone Moto G4 Plus Colors Preto Ed. Especial 5.5\", Androidâ„¢ 6.0 Lollipop, Cam 16Mp, 32Gb",
                "price": 1399.00,
                "quantity": 1,
                "image": null
            },
            {
                "name": "iPhone 7 Plus 256Gb Preto Matte",
                "price": 4899.00,
                "quantity": 2,
                "image": "http://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=300&hei=300&fmt=png-alpha&qlt=95&.v=1472430090682"
            },
            {
                "name": "Smartphone Samsung Galaxy S7 Edge Preto Tela 5.5\" Android 6.0 CÃ¢mera 12Mp 32Gb",
                "price":  3499.00,
                "quantity": 5,
                "image": "http://c.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s7-32gb-preto-4gcam-12mp-selfie-5mp-tela-5.1-34-quad-hd-octa-core-215915300.jpg"
            },
            {
                "name": "Smartphone LG X Power Dourado Tela 5,3\" Androidâ„¢ 6.0 CÃ¢mera 13Mp Dualchip 16Gb",
                "price":  799.00,
                "quantity": 2,
                "image": "https://images-americanas.b2w.io/produtos/01/00/item/128722/0/128722002SZ.jpg"
            },
            {
                "name": "Smart TV LED 32\" Samsung UN32J4300AG HD com Conversor Digital 2 HDMI 1 USB Wi-Fi 120Hz",
                "price":  1289.99,
                "quantity": 1,
                "image": null
            },
            {
                "name": "BONECO PEPPA PIG",
                "price":  58.85,
                "quantity": 1,
                "image": "https://images-americanas.b2w.io/produtos/01/00/sku/8001/6/8001635_1GG.jpg"
            }
        ]
    };

    /*** Função responsável remover o item do carrinho ***/
    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    /*** Função responsável por diminiur o número de itens no carrinho ***/
    $scope.moreItem = function(index) {
        $scope.invoice.items[index].quantity = $scope.invoice.items[index].quantity + 1;
    }

    /*** Função responsável por diminiur o número de itens no carrinho ***/
    $scope.lessItem = function(index) {
        if ($scope.invoice.items[index].quantity > 0) {
            $scope.invoice.items[index].quantity = $scope.invoice.items[index].quantity - 1;
        } else {
            // Se o valor chegar à 0 ele continua mostrando, caso o usuário queira retoma-lo no carrinho
            $scope.invoice.items[index].quantity = 0;
        }
    }

    /*** Função o valor total no carrinho ***/
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.price * item.quantity;
        })

        return total;
    };
}]);



app.controller('FetchController', ['$scope', '$http', '$templateCache',
  function($scope, $http) {

    $scope.fetch = function() {
      $scope.code = null;
      $scope.response = null;

      $http({method: 'GET', url: 'http://api.intercase.net.br/items.json'}).
        then(function(response) {
          $scope.status = response.status;
          console.log(response.data);
          console.log($scope.response)
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
          console.log(response.data);
      });
    };

    $scope.updateModel = function(method, url) {
      $scope.method = method;
      $scope.url = url;
    };
  }]);
