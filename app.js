var myapp=angular.module('myapp',['ui.router']);

myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider.state({
        name:'home',
        url:'/home',
        //template:'<div>This is the Home page</div>'
        component:'homePage'
    });

    $stateProvider.state({
        name:'about',
        url:'/about',
        //template:'<div>This is the about page</div>'
        component:'homePage'
    });

    $stateProvider.state({
        name:'ygiri',
        url:'/ygiri',
        //template:'<div>This page about yadagiri </div>'
        component:'homePage'
    });

    $urlRouterProvider.otherwise('/ygiri');

}]);

myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService)
{
   // $scope.myval="";
  //  $scope.onClick=function()
   // {
   //     alert( $scope.myval);
    //    $scope.myval="some new val";
    //}

   // $scope.students=[{
    //    name:'Arun',age:10
    //},{
    //    name:'Ajith',age:11
    //}]
   // $scope.students=AppService.getStudents();

     AppService.getStudents().
     then(function(result){
        $scope.students=result;
     })
    
   
    $scope.onViewBtnClick=function(student)
    {
        $scope.selectedStudent=student;
    }

    
    $scope.onBtnClick=function(event)
    {
        console.log(event.target);
    }

    $scope.onAnotherBtnClick=function(event)
    {

        console.log(event.target);
    }

    
}]);