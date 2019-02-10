var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){
    $scope.openSyarikatPage = function(Idx){
        window.location = 'anaksyarikat'+ Idx +'.html';
    }
    $scope.goBackPage = function(){
        window.location = 'index-main.html';
    }
    $scope.goBackHome = function(){
        window.location = 'index.html';
    }
}

function GISBHSvc($http, $rootScope){

}

jQuery(function ($) {
    $('#button-place').parent().css('height', '100%');
    $('#text-title').addClass('flipInY animated');
    const element =  document.querySelector('#text-title');
    element.addEventListener('animationend', function() {
        $('#syarikat1,#syarikat2,#syarikat3,#syarikat4,#syarikat5,#madah').removeAttr('style');
        $('#madah').addClass('fadeInUp animated');
        $('#syarikat1').addClass('flipInX animated');
        $('#syarikat2').addClass('flipInX animated');
        $('#syarikat3').addClass('flipInX animated');
        $('#syarikat4').addClass('flipInX animated');
        $('#syarikat5').addClass('flipInX animated');
        const element =  document.querySelector('#syarikat5');
        element.addEventListener('animationend', function() {
            $('#line-batas').removeAttr('style');
            $('#line-batas').addClass('flash animated');
            $('#syarikat6,#syarikat7,#syarikat8,#syarikat9,#syarikat10,#back-p3,#home-p3').removeAttr('style');
            $('#syarikat6').addClass('flipInX animated');
            $('#syarikat7').addClass('flipInX animated');
            $('#syarikat8').addClass('flipInX animated');
            $('#syarikat9').addClass('flipInX animated');
            $('#syarikat10').addClass('flipInX animated');
            $('#back-p3,#home-p3').addClass('slideInUp animated');
        });
    });
})