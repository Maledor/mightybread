(function() {
  angular.module('mightybread')
         .controller('NewsletterController', NewsletterController);

  NewsletterController.$inject = ['$scope', 'NewsletterService'];

  function NewsletterController($scope, NewsletterService){
    $scope.newUser = {};
    $scope.signup = signup;

    function signup(user){
      NewsletterService.signup(user)
                  .then(function(response){
                    $scope.newUser = {};
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }
  }
}());
