// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    db = $cordovaSQLite.openDB("my.db");
    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");

    var GHCApp = angular.module('GHCApp',['ionic']);
    GHCApp.service('GHCSvc', ['$http', '$rootScope', GHCSvc]);
    GHCApp.controller('GHCCtrl',
        [
          '$scope', '$sce','$ionicLoading', '$cordovaSQLite',
          '$ionicListDelegate', 'GHCSvc', GHCCtrl
        ]
    );
    function GHCCtrl($scope, $sce, $ionicLoading, $cordovaSQLite, $ionicListDelegate, GHCSvc){
      $ionicLoading.show({template: 'Loading Blogs...'});

      $scope.blogs = [];
      $scope.params = {};

      $scope.$on('GHCApp.blogs', function(_, result){
        result.posts.forEach(function(b){
          $scope.blogs.push({
            name: b.author.name,
            avatar_URL: b.author.avatar_URL,
            title: $sce.trustAsHtml(b.title),
            URL: b.URL,
            excerpt: $sce.trustAsHtml(b.excerpt),
            featured_image: b.featured_image
          });
        });

        $scope.params.before = result.date_range.oldest;
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
        $ionicLoading.hide();
      });

      $scope.loadMore = function(){
        GHCSvc.loadBlogs($scope.params);
      }
      $scope.reload = function(){
        $scope.blogs = [];
        $scope.params = {};
        GHCSvc.loadBlogs();
      }
      $scope.show = function($index){
        console.log('show : ' + $scope.blogs[$index].URL);
      }
      $scope.share = function($index){
        $ionicListDelegate.closeOptionButtons();
        console.log('show : ' + $scope.blogs[$index].URL);
      }
      $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
          console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
          console.error(err);
        });
      }

      $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        console.log('Test');
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {

          if(res.rows.length > 0) {
            console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);

          } else {
            console.log("No results found");
          }
        }, function (err) {
          console.error(err);
        });
      }
    }

    function GHCSvc($http, $rootScope){
      this.loadBlogs = function(params){
        $http.get('https://public-api.wordpress.com/rest/v1/freshly-pressed/', {
          params: params})
            .success(function(result){
              $rootScope.$broadcast('GHCApp.blogs', result);
            });
      }
    }
  });
})
