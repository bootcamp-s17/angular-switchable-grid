// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("switchableGrid", ['cb.x2js']);

app.service('catPicturesService', ['$http', function($http){
    return $http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20');
}]);

app.controller('SwitchableGridController', ['$scope', 'x2js', 'catPicturesService', function ($scope, x2js, catPicturesService) {

  // Default layout of the app. Clicking the buttons in the toolbar
  // changes this value.

  $scope.layout = 'grid';

  $scope.pics = [];

  catPicturesService.success(function(data){

    $scope.pics = (x2js.xml_str2json(data)).response.data.images.image;

  });
    
}]);

