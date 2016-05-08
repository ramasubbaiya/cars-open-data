angular.module('starter.services', [])

.factory('Cars', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cars = $http.get('http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=rgp6f2zzkjawwymtmrcqunnm');


  return {
    all: function() {
      return cars;
    },
    getMake: function(carMake) {
      var request = 'https://api.edmunds.com/api/vehicle/v2/' + carMake + '/models?fmt=json&api_key=rgp6f2zzkjawwymtmrcqunnm';
      return $http.get(request);
    },
    getModel: function(carMake, carModel, carYear) {
      var request = 'http://api.edmunds.com/api/vehicle/v2/' + carMake +'/' + carModel +'/'+ carYear +'?fmt=json&api_key=rgp6f2zzkjawwymtmrcqunnm';
      return $http.get(request);
    },
  };
});
