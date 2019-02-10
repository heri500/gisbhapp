var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova','ui.bootstrap']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);


GISBHApp.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, videoSource, $log) {
  $log.info("ModalInstanceCtrl", videoSource);
  
  $scope.id = Math.floor((Math.random() * 100) + 1);
  $scope.videoSource = videoSource;
  
  $scope.ok = function() {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});

GISBHApp.controller('GISBHCtrl',['$scope','$uibModal', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, $uibModal,GISBHSvc){
    $scope.openMainPage = function(){
        window.location = 'index-main.html';
    }
    $scope.openHomePage = function(){
        window.location = 'index.html';
    }

    $scope.open = function(size, videoSource) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModal.html',
      controller: 'ModalInstanceCtrl',
      backdrop: false,
      size: size,
      resolve: {
        videoSource: function() {
          return videoSource;
        }
      }
    });

    modalInstance.result.then(function(result) {
      //
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
    };

    $scope.videoClickPertanian = function(){
        var videoSource="img/7sektor/video-perkhidmatan.mp4";
        console.log("videoClickPertanian");
        $scope.open('lg', videoSource);

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

    $('.swiper-slide a').click(function() { window.location.href = $(this).attr("href"); });

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        //Optional parameters
        //direction: 'horizontal',
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
        preventClicks : false,
        preventClicksPropagation : false,
        loop: true,

    });
});