
var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){
    $scope.startProfile = function(){
        window.location = 'start.html';
    }
    $scope.screensaverOff = function(){
        console.log(this);
    }

     $scope.openprofile = function(){
        window.location = 'index-profile-gisbh.html';
    }
    
}

function GISBHSvc($http, $rootScope){

}

jQuery(function ($) {
    $('#btn-gisbh').on('click', function(){
        $('#logo-gisbh').addClass('fadeOut animated');
        $('#btn-gisbh, #btn-giibf').addClass('fadeOut animated');
        $('#text-logo').addClass('zoomOutUp animated');
        const element =  document.querySelector('#text-logo');
        element.addEventListener('animationend', function() {
            window.location = 'index-main.html';
        });
    });

     $('#btn-giibf').on('click', function(){
        $('#logo-gisbh').addClass('fadeOut animated');
        $('#btn-gisbh, #btn-giibf').addClass('fadeOut animated');
        $('#text-logo').addClass('zoomOutUp animated');
        const element =  document.querySelector('#text-logo');
        element.addEventListener('animationend', function() {
            window.location = 'index-giibf.html';
        });
    });
     
});