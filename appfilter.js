var myapp=angular.module('myapp');
//myapp.filter('customName',[function(){
  //  return function(value){
   //     return "value fom filter is "+value;
   // }
//}]);

myapp.filter('customName',[function(){
    return function(value,greeting){
        return greeting+" "+value.substr(0,2).toUpperCase();
    }
}]);