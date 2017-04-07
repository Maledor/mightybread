(function() {
  angular.module('mightybread')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
          templateUrl: 'html/views/home.html'
        })
        .when('/aboutus', {
          templateUrl: 'html/views/aboutus.html'
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
        .when('/newsletter', {
          controller: 'NewsletterController',
          templateUrl: 'html/views/newsletter.html'
        })
          .otherwise({
            redirectTo: '/'
          });
    }
}());
