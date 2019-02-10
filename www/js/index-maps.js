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
    //$('#screen-saver').attr('src','img/screen-saver.png');
    (function() {
        var timeout;
        var isHidden = true;
        $(document).mousemove(function() {
            if (timeout) {
                window.clearTimeout(timeout);
            }
            timeout = window.setTimeout(function() {
                if (!isHidden) {
                    //hide the element here
                    $('#screensaver-place').removeClass('screensaver-off').addClass('screensaver-back');
                    isHidden = true;
                }
            }, 60000);
            if (isHidden) {
                //show the element here
                $('#screensaver-place').removeClass('screensaver-back').addClass('screensaver-off');
                isHidden = false;
            }
        });
    })();
    $(document).mousemove();
    $('#full-map').removeAttr('style');
    $('#full-map').addClass('zoomIn animated');
    const element =  document.querySelector('#full-map');
    element.addEventListener('animationend', function() {
        $('#gbr-premis').removeAttr('style');
        $('#gbr-premis').addClass('fadeInUp animated');
    });
});