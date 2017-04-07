(function() {
  angular.module('mightybread')
        .factory('NewsletterService', NewsletterService);

  NewsletterService.$inject = ['$http', '$window'];

  function NewsletterService($http, $window){
    var base = '/users';
    var localStorage = $window.localStorage;

    function signup(user){
      return $http.post('/signup', user)
                  .then(function(response){
                    return response;
              });
}
return {
  signup: signup
}
}
}());
