///<reference path="/scripts/angular.js"/>
var app = angular.module("app", []);
app.controller("KnotsController", ["$scope","$http",function ($scope,$http) {
    $http.get("http://frayedknot.azure-mobile.net/tables/knots").then(
        function (res) {
            $scope.knots = res.data;
            $scope.knots.forEach(function (knot) {
                knot.sections = [];
                $http.jsonp("http://en.wikipedia.org/w/api.php?format=json&action=parse&page=" + knot.name + "&prop=sections&callback=JSON_CALLBACK")
                    .then(function (response) { return response.data.parse.sections; })
                    .then(function (sections) {
                        sections.forEach(function (section) {
                            $http.jsonp("http://en.wikipedia.org/w/api.php?format=json&action=parse&page=" + knot.name + "&section=" + section.index + "&callback=JSON_CALLBACK")
                                .then(function (section) {
                                    knot.sections.push(section.data.parse.text["*"]);
                                });
                        });
                    })
                        
                        .then(function (response) {
                    response;
                    //find h2 whose innerText contains "History"
                    //take elements until the current element is an h2
                });
            });
            function mycallbackfunction(response) {
                response;
            }
        });
}]);