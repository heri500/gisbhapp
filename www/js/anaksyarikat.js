var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){
    $scope.goBackPage = function(){
        window.location = 'index-10as.html';
    }
    $scope.goBackHome = function(){
        window.location = 'index.html';
    }
    var countImage = document.getElementById("jumlah_image").value;
    $scope.AnakSyarikat = [];
    for (var i = 1;i <= countImage;i++){
        $scope.AnakSyarikat.push(i + '.jpg');
    }
}

function GISBHSvc($http, $rootScope){

}

jQuery(function ($) {
    $('#button-place').parent().css('height', '100%');
    var mySwiper = new Swiper ('.swiper-container', {
        //Optional parameters
        //direction: 'horizontal',
        preventClicks : false,
        preventClicksPropagation : false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'coverflow',
        grabCursor: false,
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        speed: 400,
        spaceBetween: 100,
        width : 1920,
        height : 1080,
        loop: true,
    });
})