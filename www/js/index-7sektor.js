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

$(document).ready(function () {
    VideoPertanian = '<video id="video-pertanian" loop controls="true" width="100%" height="100%" poster="img/screen-saver.png" muted preload autoplay >';
    VideoPertanian += '<source src="img/7sektor/video-pertanian.mp4" type="video/mp4">';
    VideoPertanian += '<source src="img/7sektor/video-pertanian.ogg" type="video/ogg">';
    VideoPertanian += '<source src="img/7sektor/video-pertanian.webm" type="video/webm">';
    VideoPertanian += 'Sorry but your device does not support html5 video';
    VideoPertanian += '</video>';
    $('#play-video-1').on('click', function(){
        $('#play-video-1-frame').css('width','100%').css('height','100%');
        $('#play-video-1-frame').html(VideoPertanian);
    });
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        //Optional parameters
        //direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
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
        preventClicks : false,
        preventClicksPropagation : false,
    });
});