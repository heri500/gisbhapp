var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){
    $scope.openMainPage = function(){
        window.location = 'index-main.html';
    }
    $scope.openHomePage = function(){
        window.location = 'index.html';
    }
}

function GISBHSvc($http, $rootScope){

}

jQuery(function ($) {
    $('#button-place').parent().css('height','100%');
    $('#full-map').removeAttr('style');
    $('#full-map').addClass('zoomIn animated');
    const element =  document.querySelector('#full-map');
    element.addEventListener('animationend', function() {
        $('#gbr-premis').removeAttr('style');
        $('#gbr-premis').addClass('fadeInUp animated');
    });
});