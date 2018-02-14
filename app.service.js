var myapp=angular.module('myapp');
myapp.service('AppService',['$http','$q',function($http,$q){
   // var students=[{
    //    name:'Arun',age:10
    //},{
    //    name:'Ajith',age:11
   // }]

    this.getStudents=function()
    {
        var defer=$q.defer();

          var httpPromise= $http.get('/students.json');
          httpPromise.then(function(result)
           {
             var students=result.data.map(
            function(item){
                item.seniority=item.age>10?"senior":"junior";
                return item;
            });

            defer.resolve(students);

           });
     // return students;
    // return $http.get('/students.json');
      //students;

      return defer.promise;
    };


}]);