angular.module('ShoppingListApp', [])
  .controller('ShoppingListController', ShoppingListController);

function ShoppingListController($scope) {
  $scope.toBuyList = [
    { name: "cookies", quantity: 10 },
    { name: "milk", quantity: 2 },
    { name: "eggs", quantity: 6 },
    { name: "bread", quantity: 1 },
    { name: "apples", quantity: 5 }
  ];

  $scope.alreadyBoughtList = [];

  $scope.markAsBought = function (index) {
    const item = $scope.toBuyList.splice(index, 1)[0];
    $scope.alreadyBoughtList.push(item);

    if ($scope.toBuyList.length === 0) {
      $scope.emptyMessage = true;
    }
  };
}
