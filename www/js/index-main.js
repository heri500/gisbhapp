var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){
    $scope.openAlpPage = function(){
        window.location = 'index-alp.html';
    }
    $scope.openMapPage = function(){
        window.location = 'index-map.html';
    }
    $scope.open7SektorPage = function(){
        window.location = 'index-7sektor.html';
    }
    $scope.open10AsPage = function(){
        window.location = 'index-10as.html';
    }

    $scope.openProdukIkhwan = function(){
        window.location = 'index-produk-ikhwan.html';
    }

    $scope.openInfoGraph = function(){
        window.location = 'index-infograph.html';
    }

    $scope.openprofile = function(){
        window.location = 'index-profile-gisbh.html';
    }





}

function GISBHSvc($http, $rootScope){

}

function roolbackP1(){
    $('#logo-gisbh').addClass('fadeOut animated fast');
    const element =  document.querySelector('#logo-gisbh');
    element.addEventListener('animationend', function() {
        $('#button-place').removeClass('button-sektor-p3').addClass('button-sektor');
        $('#btn-menu-1').addClass('slideOutLeft fast');
        $('#btn-menu-4').addClass('slideOutRight fast');
        const element1 =  document.querySelector('#btn-menu-1');
        element1.addEventListener('animationend', function() {
            $('#btn-menu-2').addClass('slideOutLeft fast');
            $('#btn-menu-5').addClass('slideOutRight fast');
            const element2 =  document.querySelector('#btn-menu-2');
            element2.addEventListener('animationend', function() {
                $('#btn-menu-3').addClass('slideOutLeft fast');
                $('#btn-menu-6').addClass('slideOutRight fast');
                $('#text-p3').addClass('fadeOut fast');
                $('#back-p3,#home-p3').addClass('slideOutDown fast');
                const element3 =  document.querySelector('#back-p3');
                element3.addEventListener('animationend', function() {
                    window.location = 'index.html';
                });
            });
        });
    });
}

jQuery(function ($) {
    $('#button-place').parent().css('height','100%');
    //$('#screen-saver').attr('src','img/screen-saver.png');
    $('#logo-gisbh').addClass('fadeIn animated').removeAttr('style');
    $('#btn-menu-1,#btn-menu-4').removeAttr('style');
    $('#btn-menu-1').addClass('slideInLeft animated');
    $('#btn-menu-4').addClass('slideInRight animated');
    const element1 =  document.querySelector('#btn-menu-1');
    element1.addEventListener('animationend', function() {
        $('#btn-menu-2,#btn-menu-5').removeAttr('style');
        $('#btn-menu-2').addClass('slideInLeft animated');
        $('#btn-menu-5').addClass('slideInRight animated');
    });
    const element2 =  document.querySelector('#btn-menu-2');
    element2.addEventListener('animationend', function() {
        $('#btn-menu-3,#btn-menu-6, #text-p3, #back-p3, #home-p3').removeAttr('style');
        $('#btn-menu-3').addClass('slideInLeft animated');
        $('#btn-menu-6').addClass('slideInRight animated');
        $('#text-p3').addClass('fadeIn animated');
        $('#back-p3,#home-p3').addClass('slideInUp animated');
        $('#back-p3').off('click');
        $('#back-p3,#home-p3').on('click', function(){
            roolbackP1();
        });
    });
});