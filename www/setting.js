var GHCApp = angular.module('GHCApp',['ionic', 'ngCordova','ngStorage']);

GHCApp.factory ('StorageService', function ($localStorage) {
        $localStorage = $localStorage.$default({
            ghcthings: []
        });
        var _getAll = function () {
            return $localStorage.ghcthings;
        };

        var _add = function (thing) {
            $localStorage.ghcthings.push(thing);
        }

        var _remove = function (thing) {
            $localStorage.ghcthings.splice($localStorage.ghcthings.indexOf(thing), 1);
        }

        return {
            getAll: _getAll,
            add: _add,
            remove: _remove
        };
    });
GHCApp.service('GHCSvc', ['$http', '$rootScope', GHCSvc]);

GHCApp.controller('GHCCtrl',['$scope', 'StorageService', 'GHCSvc', GHCCtrl]);

function GHCCtrl($scope, StorageService, GHCSvc){
    $scope.url_information = new Object;
    var dataStorage = StorageService.getAll();
    if (dataStorage.length > 0) {
        var urlData = JSON.parse(dataStorage);
        $scope.url_information.url = urlData[0].url;
        $scope.url_information.username = urlData[0].username;
        $scope.url_information.password = urlData[0].password;
    } else {
        var urlInfo = new Object;
        urlInfo.url = 'http://galeri.ikhwanit.com';
        urlInfo.username = 'ikhwan mart';
        urlInfo.password = '@abuya313';
        var storedData = new Array;
        storedData.push(urlInfo);
        StorageService.add(JSON.stringify(storedData));
        dataStorage = StorageService.getAll();
        var urlData = JSON.parse(dataStorage);
        $scope.url_information.url = urlData[0].url;
        $scope.url_information.username = urlData[0].username;
        $scope.url_information.password = urlData[0].password;
    }
    $scope.saveUrlData = function () {
        if ($scope.url_information.url && $scope.url_information.username && $scope.url_information.password) {
            var storedData = new Array;
            storedData.push($scope.url_information);
            StorageService.remove(0);
            StorageService.add(JSON.stringify(storedData));
            dataStorage = StorageService.getAll();
            var urlData = JSON.parse(dataStorage);
            $scope.url_information.url = urlData[0].url;
            $scope.url_information.username = urlData[0].username;
            $scope.url_information.password = urlData[0].password;
            alert('Setting aplikasi berhasil disimpan...!!');
            $scope.allproducts = [];
            $scope.hargaproduct = [];
            konterSvc.loadProducts(urlData[0]);
        } else {
            alert('Mohon input seluruh informasi dengan benar...!!!')
        }
    };
    url_connection = urlData[0];
    $scope.gotoOrder = function(){
        window.location = 'index.html';
    }
    $scope.checkUsernamePassword = function(){
        GHCSvc.checkConnection($scope.url_information);
    }
}

function GHCSvc($http, $rootScope, StorageService){
    this.checkConnection = function($urlInfo){
        var serverLink = $urlInfo.url + '/sites/all/modules/datapelanggan/server_processing.php';
        $http.get(serverLink + '?request_data=checkconnection&userkonter='+ $urlInfo.username +'&passkonter='+ $urlInfo.password)
            .success(function (result) {
                console.log(result);
                if (result[0].uservalid == 1){
                    alert('Username & Password Validation Success...!!!');
                }else{
                    alert('Username & Password Validation Failed...!!!');
                }
            })
            .error(
                function () {
                    alert('Server Connection Error...!!Check server address');
                }
            );
    };
    Object.toparams = function ObjecttoParams(obj)
    {
        console.log(obj);
        var p = [];
        if (obj.length > 0) {
            var countObj = 0;
            for (var key in obj) {
                for (var key2 in obj[key]) {
                    p.push(key2 + '__'+ countObj +'=' + encodeURIComponent(obj[key][key2]));
                }
                countObj++;
            }
        }
        return p.join('&');
    };
}