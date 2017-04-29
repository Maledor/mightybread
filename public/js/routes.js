(function() {
  angular.module('mightybread')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
          controller: 'NewsletterController',
          templateUrl: 'html/views/home.html'
        })
        .when('/aboutus', {
          templateUrl: 'html/views/aboutus.html'
        })
        .when('/donate', {
          templateUrl: 'html/views/donate.html'
        })
        .when('/getinvolved', {
          templateUrl: 'html/views/getinvolved.html'
        })
        .when('/programs', {
          templateUrl: 'html/views/programs.html'
        })
        .when('/events', {
          templateUrl: 'html/views/events.html'
        })
        .when('/contactus', {
          controller: 'ContactusController',
          templateUrl: 'html/views/contactus.html'
        })
        .when('/fooddrives', {
          templateUrl: 'html/views/fooddrives.html'
        })
        .when('/wishlist', {
          templateUrl: 'html/views/wishlist.html'
        })
          .otherwise({
            redirectTo: '/'
          });
    }
}());
