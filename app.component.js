var myapp=angular.module('myapp');

//myapp.component('studentDetails',{template:'<div>Student Details</div>'});

myapp.component('studentDetails',{
    templateUrl:'student-details.tpl.html',
    controllerAs:'vm',
    //controller:['$element',function($element){
     //   console.log($element);
     //   this.myName='custom component'
   // }]
   bindings:{
      myTitle:'@',//string
      myList:'<',//getting from properties(passing)
      currentStudent:'<'//getting from properties(passing)
   },
   controller:[function(){
    this.myName='custom component'
}]
});

myapp.component('homePage',{
    template:'<div>This page about home page </div>'
});

myapp.component('about',{
    template:'<div>This page about page </div>'
});