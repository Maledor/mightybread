(function() {
  angular.module('mightybread')
      .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
          controller: 'HomeController',
          templateUrl: 'html/views/home.html'
        })
        .when('/aboutus', {
          controller: 'AboutUsController',
          templateUrl: 'html/views/aboutus.html'
        })
        .when('/programs', {
          controller: 'ProgramsController',
          templateUrl: 'html/views/programs.html'
        })
        .when('/events', {
          controller: 'EventsController',
          templateUrl: 'html/views/events.html'
        })
        .when('/contactus', {
          controller: 'ContactUsController',
          templateUrl: 'html/views/contactus.html'
        })
        .when('/fooddrives', {
          controller: 'FoodDrivesController',
          templateUrl: 'html/views/fooddrives.html'
        })
        .when('/wishlist', {
          controller: 'WishListController',
          templateUrl: 'html/views/wishlist.html'
        })
          .otherwise({
            redirectTo: '/'
          });
    }
}());
