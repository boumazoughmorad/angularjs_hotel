

// configuration de Firebase
var config = {
  // apiKey: "AIzaSyB4Ta5PqYMyLl72jOEMBM6_P0G-nJRC974",
  // authDomain: "pharmacine-5277c.firebaseapp.com",
  //    databaseURL: "https://pharmacine-5277c-default-rtdb.firebaseio.com",
  //    projectId: "pharmacine-5277c",
  // storageBucket: "pharmacine-5277c.appspot.com",
  // messagingSenderId: "254030074124",
  // appId: "1:254030074124:web:f0ede76c068d0f91dfb929",
  // measurementId: "G-5D9C7X820S"
  

  apiKey: "AIzaSyCTQcAYPAk1OWhYvya7AJP_t0EP2Ub-NMQ",
  authDomain: "hotel-75eb8.firebaseapp.com",
  databaseURL: "https://hotel-75eb8-default-rtdb.firebaseio.com",
  projectId: "hotel-75eb8",
  storageBucket: "hotel-75eb8.appspot.com",
  messagingSenderId: "778814726899",
  appId: "1:778814726899:web:85b2d0f74e025d9b180d86",
  measurementId: "G-DBK1J9DTWF"

     
      };

  firebase.initializeApp(config);

angular.module('eventApp', [
  'ngRoute',
  'firebase',
  'addEvent',

])
.config([ '$routeProvider', function($routeProvider) {
  
   $routeProvider.when('/', {
    templateUrl: 'hotel/hotel.html',
    controller: 'EventCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});




}]);
  