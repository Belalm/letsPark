angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {

        $urlRouterProvider.otherwise('/login');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: false
        });

        $breadcrumbProvider.setOptions({
            prefixStateName: 'app',
            includeAbstract: true,
            template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
        });

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'views/common/layouts/full.html',
                //page title goes here
                ncyBreadcrumb: {
                    label: 'Root',
                    skip: true
                },
                resolve: {
                    loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load CSS files
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'Flags',
                            files: ['node_modules/flag-icon-css/css/flag-icon.min.css']
                        }, {
                            serie: true,
                            name: 'Font Awesome',
                            files: ['node_modules/font-awesome/css/font-awesome.min.css']
                        }, {
                            serie: true,
                            name: 'Simple Line Icons',
                            files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
                        }]);
                    }],
                    loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load([{
                            serie: true,
                            name: 'chart.js',
                            files: [
                                'node_modules/chart.js/dist/Chart.min.js',
                                'node_modules/angular-chart.js/dist/angular-chart.min.js'
                            ]
                        }]);
                    }],
                }
            })

        .state('app.right_now', {
            url: '/rightNow',
            templateUrl: 'views/rightNow.html',
            ncyBreadcrumb: {
                label: 'Right Now Analytics',
            },
            params: { subtitle: 'Right Now Analytics' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/now.js']
                    });
                }]
            }
        })

        .state('app.statistics', {
            url: "/statistics",
            abstract: true,
            template: '<ui-view></ui-view>',
            ncyBreadcrumb: {
                label: 'Statistics'
            }
        })

        .state('app.statistics.weekly', {
            url: '/weekly',
            templateUrl: 'views/weekly.html',
            ncyBreadcrumb: {
                label: 'Weekly'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/weekly.js']
                    });
                }]
            }
        })

        .state('app.statistics.monthly', {
            url: '/monthly',
            templateUrl: 'views/monthly.html',
            ncyBreadcrumb: {
                label: 'Monthly'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/monthly.js']
                    });
                }]
            }
        })

        .state('app.statistics.yearly', {
            url: '/yearly',
            templateUrl: 'views/yearly.html',
            ncyBreadcrumb: {
                label: 'Yearly'
            },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/yearly.js']
                    });
                }]
            }
        })

        .state('app.chooseParking', {
            url: '/chooseParking',
            templateUrl: 'views/chooseParking.html',
            ncyBreadcrumb: {
                label: 'Choose Parking',
            },
            params: { subtitle: 'Choose Your parking space' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/chooseParking.js']
                    });
                }]
            }
        })

        .state('app.chooseParking.floor', {
            url: '/chooseFloor/{location}',
            templateUrl: 'views/chooseFloor.html',
            ncyBreadcrumb: {
                label: '{{location}} Parking',
            },
            params: { subtitle: 'floor location', location: '' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/chooseFloor.js']
                    });
                }]
            }
        })

        .state('app.chooseParking.floor.map', {
            url: '/{floor}',
            templateUrl: 'views/map.html',
            ncyBreadcrumb: {
                label: '{{floor}} Floor',
            },
            params: { subtitle: 'floor location', floor: '', location: '' },
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['js/controllers/map.js']
                    });
                }]
            }
        })

        .state('app.main', {
            url: '/dashboard',
            templateUrl: 'views/main.html',
            //page title goes here
            ncyBreadcrumb: {
                label: 'Home',
            },
            //page subtitle goes here
            params: { subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit' },
            resolve: {
                loadPlugin: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'chart.js',
                        files: [
                            'node_modules/chart.js/dist/Chart.min.js',
                            'node_modules/angular-chart.js/dist/angular-chart.min.js'
                        ]
                    }, ]);
                }],
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['js/controllers/main.js']
                    });
                }]
            }
        })

        .state('appSimple', {
            abstract: true,
            templateUrl: 'views/common/layouts/simple.html',
            resolve: {
                loadCSS: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load CSS files
                    return $ocLazyLoad.load([{
                        serie: true,
                        name: 'Font Awesome',
                        files: ['node_modules/font-awesome/css/font-awesome.min.css']
                    }, {
                        serie: true,
                        name: 'Simple Line Icons',
                        files: ['node_modules/simple-line-icons/css/simple-line-icons.css']
                    }]);
                }],
            }
        })

        // Additional Pages
        .state('appSimple.login', {
            url: '/login',
            templateUrl: 'views/pages/login.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['js/controllers/login.js']
                    });
                }]
            }
        })

        .state('appSimple.register', {
            url: '/register',
            templateUrl: 'views/pages/register.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load controllers
                    return $ocLazyLoad.load({
                        files: ['js/controllers/register.js']
                    });
                }]
            }
        })

        .state('appSimple.404', {
            url: '/404',
            templateUrl: 'views/pages/404.html'
        })

        .state('appSimple.500', {
            url: '/500',
            templateUrl: 'views/pages/500.html'
        })


    }]);