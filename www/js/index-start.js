var GISBHApp = angular.module('GISBHApp',['ionic', 'ngCordova']);

GISBHApp.service('GISBHSvc', ['$http', '$rootScope', GISBHSvc]);

GISBHApp.controller('GISBHCtrl',['$scope', 'GISBHSvc', GISBHCtrl]);

function GISBHCtrl($scope, GISBHSvc){

}

function GISBHSvc($http, $rootScope){

}
var options = { };
function run_next_sector(ObjId){
    if (typeof $('#'+ ObjId).attr('id') != 'undefined') {
        setTimeout(function() {
            var SplitText = ObjId.split('sektor');
            var NextId = parseInt(SplitText[1]) + 1;
            var NextObjId = 'sektor' + NextId;
            $('#' + ObjId).effect('slide', 800, run_next_sector(NextObjId));
        }, 900);
    }
}
jQuery(function ($) {
    $(".button-sektor").parent().css('height','100%');
    $("#sektor1").effect( 'slide', 800, run_next_sector('sektor2') );
});