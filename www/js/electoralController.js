(function() {
    'use strict';

    var app = angular.module('electoralRoll', []);

    app.controller('electoralRollController', ['$scope', '$http', function($scope, $http) {
        console.log("In controller");
        //$scope.saurabh = "Saurabh Landge";
        $scope.lists = [{
                "serialNo": 1,
                "name": "Gunjal Tarabai Shankar",
                "age": 66
            },
            {
                "serialNo": 2,
                "name": "Gunjal Narayan Shankar",
                "age": 51
            },
            {
                "serialNo": 3,
                "name": "Gunjal Ujvala Narayan",
                "age": 40
            },
            {
                "serialNo": 4,
                "name": "Daundkar Umesh Vitthal",
                "age": 31
            },
            {
                "serialNo": 5,
                "name": "Bhivare Jyoti Arvind",
                "age": 30
            },
            {
                "serialNo": 6,
                "name": "Darvade Kailas Dnyaneshwar",
                "age": 34
            },
            {
                "serialNo": 7,
                "name": "Pawar Amrut Sahebrao",
                "age": 37
            },
            {
                "serialNo": 8,
                "name": "Pawar Tanhaji Sahebrao",
                "age": 34
            },
            {
                "serialNo": 9,
                "name": "Pawar Maina Amrut",
                "age": 31
            },
            {
                "serialNo": 10,
                "name": "Yadav Chaitrali Santosh",
                "age": 33
            },
            {
                "serialNo": 11,
                "name": "Kusale Varsha Rohidas",
                "age": 32
            },
            {
                "serialNo": 12,
                "name": "Kusale Chaya Laxman",
                "age": 30
            },
            {
                "serialNo": 13,
                "name": "Kusale Keru Damu",
                "age": 90
            },
            {
                "serialNo": 14,
                "name": "Chavan Sunil Sopan ",
                "age": 46
            },
            {
                "serialNo": 15,
                "name": "Chavan Nirmala Sunil",
                "age": 41
            },
            {
                "serialNo": 16,
                "name": "Chavan Sanjay Sopan ",
                "age": 44
            },
            {
                "serialNo": 17,
                "name": "Chavan Nanda Sanjay",
                "age": 41
            },
            {
                "serialNo": 18,
                "name": "Netke Anil Jijaram",
                "age": 40
            },
            {
                "serialNo": 19,
                "name": "Netke Savita Anil",
                "age": 37
            },
            {
                "serialNo": 20,
                "name": "Pawar Gangubai Baban",
                "age": 83
            },
            {
                "serialNo": 21,
                "name": "Pawar Sahebrao Manjaba",
                "age": 67
            },
            {
                "serialNo": 22,
                "name": "Pawar Chanrdabhaga Sahebrao",
                "age": 62
            },
            {
                "serialNo": 23,
                "name": "Kusekar Alka Harishchandra",
                "age": 35
            },
            {
                "serialNo": 24,
                "name": "Kusekar Savitrabai Laxman",
                "age": 85
            },
            {
                "serialNo": 25,
                "name": "Kusekar Ashok Laxman",
                "age": 53
            },
            {
                "serialNo": 26,
                "name": "Kusekar Bhimabai Ashok",
                "age": 48
            },
            {
                "serialNo": 27,
                "name": "Kusekar Harishchandra Laxman",
                "age": 45
            },
            {
                "serialNo": 28,
                "name": "Kusekar Mahadu Laxman",
                "age": 48
            },
            {
                "serialNo": 29,
                "name": "Kusekar Radhabai Mahadu",
                "age": 40
            },
            {
                "serialNo": 30,
                "name": "Pawar Namdev Satyavan",
                "age": 53
            }
        ];
    }]);
})();