/**
 * Created by Lior on 11/25/2014.
 */

angular.module('CashOut.controllers').controller('AddScreenCtrl',['$scope', '$stateParams', 'storage',
    function($scope, $stateParams, storage){
        $scope.whatToAdd = $stateParams.whatToAdd;

        $scope.getLocalStorage = function (sum) {
            var recordToSave =  {sum: sum} || [];

            console.log(storage.set('records', recordToSave));
            $scope.doneAdding = true;
        }
}]);