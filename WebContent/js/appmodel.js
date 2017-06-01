var app=angular.module("myapp",[]);

app.controller("ctrl", function($scope){
	$scope.message="world";
});

app.directive("testDirective", function() {
    return {
    	restrict: 'AE',
        template : "<h3>My own directive!</h3><h4 ng-transclude></h4>",
        transclude: true
    };
});

app.controller('nameCtrl', function($scope) {
    $scope.name = "Piotr Ponton";
});

app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.age = 70;
    $scope.fullName = function(x) {
        return $scope.firstName + " " + $scope.lastName + " is " + $scope.age + " years old.";
    };
});

app.run(function($rootScope) {
    $rootScope.text = 'rootScope jest tutaj';
});
app.controller('scopeTest', function($scope) {
    $scope.text = "scope kontrolera scopeTest jest tutaj";
});

app.controller('filterCtrl', function($scope) {
    $scope.firstName = "John",
    $scope.lastName = "Doe"
    	
    $scope.names = [
    	{name:'Jani',country:'Norway'},
    	{name:'Carl',country:'Sweden'},
    	{name:'Margareth',country:'England'},
    	{name:'Hege',country:'Norway'},
    	{name:'Joe',country:'Denmark'},
    	{name:'Gustav',country:'Sweden'},
    	{name:'Birgit',country:'Denmark'},
    	{name:'Mary',country:'England'},
    	{name:'Kai',country:'Norway'}
    ];
    
    $scope.price = 58;
    
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});

app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});

app.controller('eventCtrl', function($scope) {
    $scope.count = 0;
    
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});