/**
 * Created by Alistair on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('api.AuthService', [])
        .factory('AuthService', function ($http) {
            var authService = {};

            authService.login = function (credentials) {
                return $http.post('/api/login', credentials).then(function (res) {
                    return res;
                });
            };

            authService.logout = function () {
                return $http.get('/api/logout').then(function (res) {
                    return res;
                });
            };

            authService.signup = function (credentials) {
                return $http.post('/api/signup', credentials).then(function (res) {
                    return res;
                });
            };

            return authService;
        });
})();
