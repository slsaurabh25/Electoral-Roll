(function() {
    'use strict';

    var app = angular.module('electoralRoll', []);

    app.controller('electoralRollController', ['$scope', '$http', function($scope, $http) {
        console.log("In controller");
        //$scope.saurabh = "Saurabh Landge";
        $scope.lists = [{
                "serialNo": 1,
                "name": "Gunjal Tarabai Shankar",
                "age": 66,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 2,
                "name": "Gunjal Narayan Shankar",
                "age": 51,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 3,
                "name": "Gunjal Ujvala Narayan",
                "age": 40,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 4,
                "name": "Daundkar Umesh Vitthal",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 5,
                "name": "Bhivare Jyoti Arvind",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 6,
                "name": "Darvade Kailas Dnyaneshwar",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 7,
                "name": "Pawar Amrut Sahebrao",
                "age": 37,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 8,
                "name": "Pawar Tanhaji Sahebrao",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 9,
                "name": "Pawar Maina Amrut",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 10,
                "name": "Yadav Chaitrali Santosh",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 11,
                "name": "Kusale Varsha Rohidas",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 12,
                "name": "Kusale Chaya Laxman",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 13,
                "name": "Kusale Keru Damu",
                "age": 90,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 14,
                "name": "Chavan Sunil Sopan ",
                "age": 46,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 15,
                "name": "Chavan Nirmala Sunil",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 16,
                "name": "Chavan Sanjay Sopan ",
                "age": 44,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 17,
                "name": "Chavan Nanda Sanjay",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 18,
                "name": "Netke Anil Jijaram",
                "age": 40,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 19,
                "name": "Netke Savita Anil",
                "age": 37,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 20,
                "name": "Pawar Gangubai Baban",
                "age": 83,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 21,
                "name": "Pawar Sahebrao Manjaba",
                "age": 67,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 22,
                "name": "Pawar Chanrdabhaga Sahebrao",
                "age": 62,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 23,
                "name": "Kusekar Alka Harishchandra",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 24,
                "name": "Kusekar Savitrabai Laxman",
                "age": 85,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 25,
                "name": "Kusekar Ashok Laxman",
                "age": 53,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 26,
                "name": "Kusekar Bhimabai Ashok",
                "age": 48,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 27,
                "name": "Kusekar Harishchandra Laxman",
                "age": 45,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 28,
                "name": "Kusekar Mahadu Laxman",
                "age": 48,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 29,
                "name": "Kusekar Radhabai Mahadu",
                "age": 40,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 30,
                "name": "Pawar Namdev Satyavan",
                "age": 53,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 31,
                "name": "Pawar Sushila Satyavan",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 32,
                "name": "Netke Sukhdev Dadu",
                "age": 67,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 33,
                "name": "Netke Jijaram Dadu",
                "age": 61,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 34,
                "name": "Netke Fulabai Jijaram",
                "age": 58,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 35,
                "name": "Netke Ravindra Jijaram",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 36,
                "name": "Netke Kondabai Sukhdev",
                "age": 60,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 37,
                "name": "Netke Hiraman Sukhdev",
                "age": 36,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 38,
                "name": "Netke Ananda Sukhdev",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 39,
                "name": "Daundkar Sushila Mhasu",
                "age": 54,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 40,
                "name": "Daundkar Swati Rajendra",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 41,
                "name": "Daundkar Keru Shankar",
                "age": 65,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 42,
                "name": "Daundkar Babai Keru",
                "age": 60,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 43,
                "name": "Daundkar Mhasu Shankar ",
                "age": 56,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 44,
                "name": "Daundkar Shantaram Keru",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 45,
                "name": "Daundkar Rajendra Keru",
                "age": 39,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 46,
                "name": "Daundkar Ganesh Narayan ",
                "age": 36,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 47,
                "name": "Daundkar Ankush Narayan",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 48,
                "name": "Daundkar Narayan Shankar ",
                "age": 60,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 49,
                "name": "Daundkar Lilabai Narayan",
                "age": 54,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 50,
                "name": "Kusale Rahibai Dagdu",
                "age": 77,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 51,
                "name": "Kusalkar Vijay Dagdu",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 52,
                "name": "Kusale Dhondiba Gana ",
                "age": 75,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 53,
                "name": "Kusale Salubai Dhondiba",
                "age": 69,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 54,
                "name": "Kusalkar Swati Vijay",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 55,
                "name": "Kusale Laxman Govinda",
                "age": 75,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 56,
                "name": "Kusale Vinod Laxman",
                "age": 39,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 57,
                "name": "Dhotre Rambhau Tukaram",
                "age": 58,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 58,
                "name": "Dhotre Suman Rambhau",
                "age": 52,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 59,
                "name": "Dhotre Shilpa Rambhau",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 60,
                "name": "Kusale Laxman Dhondiba",
                "age": 57,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 61,
                "name": "Kusale Chandrabhaga Laxman",
                "age": 51,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 62,
                "name": "Kusale Sudhakar Laxman",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 63,
                "name": "Kusale Ranjana Maruti",
                "age": 44,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 64,
                "name": "Fadtare Arundati Narayan",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 65,
                "name": "Kusalkar Sunita Namdev",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 66,
                "name": "Dhotre Pandurang Devram",
                "age": 65,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 67,
                "name": "Dhotre Alka Pandurang",
                "age": 58,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 68,
                "name": "Dhotre Rahul Pandurang",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 69,
                "name": "Dhotre Amol Pandurang",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 70,
                "name": "Kusalkar Sharad Fakkad ",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 71,
                "name": "Dhotre Jyoti Rahul",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 72,
                "name": "Kusalkar Janabai Fakkad",
                "age": 59,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 73,
                "name": "Kusalkar Namdev Fakkad",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 74,
                "name": "Kusalkar Rohidas Fakkad",
                "age": 36,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 75,
                "name": "Pawar Vishnu Shankar",
                "age": 85,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 76,
                "name": "Pawar Anusaya Vishnu",
                "age": 72,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 77,
                "name": "Pawar Ananda Vishnu",
                "age": 57,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 78,
                "name": "Pawar Suvarna Sampat",
                "age": 38,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 79,
                "name": "Pawar Tai Ananda",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 80,
                "name": "Pawar Sangam Ananda",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 81,
                "name": "Chavan Sopan Bhiva",
                "age": 79,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 82,
                "name": "Chavan Anjana Sopan",
                "age": 72,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 83,
                "name": "Chavan Laxman Sopan",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 84,
                "name": "Chavan Nilam Balasaheb",
                "age": 72,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 85,
                "name": "Chavan Somnath Balasaheb",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 86,
                "name": "Chavan Simatai Balasaheb ",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 87,
                "name": "Chavan Suresh Sopan",
                "age": 53,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 88,
                "name": "Chavan Mangal Suresh",
                "age": 51,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 89,
                "name": "Chavan Chetan Suresh",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 90,
                "name": "Chavan Jayram Balasaheb",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 91,
                "name": "Chavan Sampat Parasram",
                "age": 70,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 92,
                "name": "Chavan Shashikala Sampat",
                "age": 66,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 93,
                "name": "Chavan Sunita Anil",
                "age": 38,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 94,
                "name": "Chavan Sunil Sampat",
                "age": 42,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 95,
                "name": "Chavan Anita Sunil",
                "age": 38,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 96,
                "name": "Tagad Sharad Uttam",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 97,
                "name": "Kusale Parvatibai Shankar",
                "age": 61,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 98,
                "name": "Kusale Pravin Shankar",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 99,
                "name": "Pawar Kiran Shivaji",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 100,
                "name": "Shirke Santosh Prakash",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 101,
                "name": "Chougule Amol Shivaji ",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 102,
                "name": "Nanekar Rajendra Shivaji",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 103,
                "name": "Nanekar Nilesh Shivaji",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 104,
                "name": "Pawar Tushar Balasaheb",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 105,
                "name": "Daundkar Bhagyashri Shantaram",
                "age": 36,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 106,
                "name": "Chavan Manisha Bhausaheb",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 107,
                "name": "Chavan Navnath Shivaji",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 108,
                "name": "Thorat Mohan Balasaheb",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 109,
                "name": "Gorade Vanita Sambhaji",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 110,
                "name": "Gorade Anita Sambhaji",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 111,
                "name": "Thithe Tushar Tukaram",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 112,
                "name": "Nagwade Ratan Ramdas ",
                "age": 56,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 113,
                "name": "Ransingh Laxman Sahebrao",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 114,
                "name": "Jaykar Chabubai Babu",
                "age": 68,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 115,
                "name": "Jaykar Babu Maruti",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 116,
                "name": "Thorat Rajashri Vinayak",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 117,
                "name": "Thorat Manisha Anandrao",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 118,
                "name": "Ransingh Anusaya Rajaram",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 119,
                "name": "Ransingh Asha Rajaram",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 120,
                "name": "Ransingh Rekha Janardan",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 121,
                "name": "Bathe Bhau Vakil",
                "age": 54,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 122,
                "name": "Randive Bharat Babanrao",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 123,
                "name": "Nagwade Arjun Bhivaji",
                "age": 51,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 124,
                "name": "Randive Gauri Ganesh",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 125,
                "name": "Chavan Ratmala Sambhaji",
                "age": 51,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 126,
                "name": "Chavan Manohar Sambhaji",
                "age": 37,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 127,
                "name": "Chavan Dipak Sambhaji",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 128,
                "name": "Chavan Sambhaji Dashrath",
                "age": 56,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 129,
                "name": "Kusekar Vishal Ashok",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 130,
                "name": "Nagwade Navnath Ramdas",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 131,
                "name": "Kusalkar Savita Suresh",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 132,
                "name": "Kusalkar Prashant Suresh",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 133,
                "name": "Chavan Shobha Ananda",
                "age": 45,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 134,
                "name": "Chavan Laxmibai Bapu",
                "age": 54,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 135,
                "name": "Chavan Santosh Bapu",
                "age": 35,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 136,
                "name": "Chavan Jayashri Santosh",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 137,
                "name": "Chavan Asha Manohar",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 138,
                "name": "Jaykar Anita Shahaji",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 139,
                "name": "Thorat Varsha Vilas ",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 140,
                "name": "Shhinde Kisan Khandu",
                "age": 75,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 141,
                "name": "Shinde Vastalabai Kisan",
                "age": 70,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 142,
                "name": "Shinde Shridhar Prabhakar ",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 143,
                "name": "Jaykar Lalita Amit",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 144,
                "name": "Karpe Pradip Sukhdev",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 145,
                "name": "Karpe Pramod Sukhdev",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 146,
                "name": "Nagwade Kalu Shivaji",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 147,
                "name": "Nagwade Chandrabhaga Kalu",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 148,
                "name": "Pawar Shekhar Vijay",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 149,
                "name": "Kambale Vilesh Balu",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 150,
                "name": "Karpe Sachin Balasaheb",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 151,
                "name": "Chavan Gorukh Popat ",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 152,
                "name": "Chavan Amol Popat",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 153,
                "name": "Chavan Prashant Kisan",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 154,
                "name": "Chavan Sagar Baban ",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 155,
                "name": "Pawar Sharad Shivaji",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 156,
                "name": "Pawar Manisha Shivaji",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 157,
                "name": "Pawar Dipak Shivaji",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 158,
                "name": "Dherenge Uttam Kisan ",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 159,
                "name": "Yadav Rani Ramesh",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 160,
                "name": "Vidhate Vijay Maruti",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 161,
                "name": "Chavan Anil Sampat",
                "age": 44,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 162,
                "name": "Chavan Sanjay Sampat",
                "age": 38,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 163,
                "name": "Dhotre Sonali Rambhau",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 164,
                "name": "Kusekar Prashant Mahadu",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 165,
                "name": "Kusekar Pallavi Mahadu",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 166,
                "name": "Netke Vidya Anand",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 167,
                "name": "Chavan Namdev Bapu",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 168,
                "name": "Chavan Manisha Bapu",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 169,
                "name": "Chavan Gorak Bapu",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 170,
                "name": "Netke Supriya Ravindra ",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 171,
                "name": "Kusalkar Monika Sharad",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 172,
                "name": "Kusale Anupama Laxman",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 173,
                "name": "Pawar Navnath Satyavan ",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 174,
                "name": "Pawar Bhaginath Satyavan",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 175,
                "name": "Pawar Vishal Ananda ",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 176,
                "name": "Chavan Pratibha Sanjay",
                "age": 31,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 177,
                "name": "Chavan Vishal Sanjay",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 178,
                "name": "Chavan Akshay Sanjay ",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 179,
                "name": "Tagad Jyati Vijay",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 180,
                "name": "Tagad Bharat Uttam",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 181,
                "name": "Pawar Yogesh Narayan ",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 182,
                "name": "Pingale Sagar Vithoba",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 183,
                "name": "Yadav Maya Arun",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 184,
                "name": "Gawate Reshma Machindra",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 185,
                "name": "Marathe Sangita Shivaji",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 186,
                "name": "Vidhate Pramila Niloba",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 187,
                "name": "Gavhane Kavita Rajkumar",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 188,
                "name": "Gavhane Priyanka Ramsingh",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 189,
                "name": "Shinde Shoba Ajit",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 190,
                "name": "Chougule Rahul Dilip",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 191,
                "name": "Shinde Vibhave Dnyaneshwar",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 192,
                "name": "Chougule Sunil Shivaji",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 193,
                "name": "Chougule Chandrakant Shivaji",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 194,
                "name": "Gavhane Ajit Ramsingh",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 195,
                "name": "Gavhane Shital Ramsingh",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 196,
                "name": "Gavhane Kiran Ramsingh",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 197,
                "name": "Ransingh Akshay Bhausaheb",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 198,
                "name": "Ransingh Tajas Kailash",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 199,
                "name": "Karpe Sager Jayvantrao",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 200,
                "name": "Karpe Rohini Ganesh",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 201,
                "name": "Karpe Kalyani Sager",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 202,
                "name": "Chavan Reshma Sandip",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 203,
                "name": "Chavan Rajashri Sandip",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 204,
                "name": "Shirke Vijay Nehru",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 205,
                "name": "Mahadik Shital Prabhakar ",
                "age": 41,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 206,
                "name": "Vidhate Tanuja Vijay",
                "age": 26,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 207,
                "name": "Mahadik Prabhakar Pandharinath",
                "age": 49,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 208,
                "name": "Vidhate Punam Satish ",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 209,
                "name": "Nagwade Nikhil Sanjay",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 210,
                "name": "Shinde Dattatray Kisan",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 211,
                "name": "Shinde Sujata Dattatray",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 212,
                "name": "Chavan Suvarna Kerba",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 213,
                "name": "Chavan Shradha Ananda",
                "age": 212,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 214,
                "name": "Vidhate Swapnil Sanjay",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 215,
                "name": "Gunjal Rohit Narayan",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 216,
                "name": "Gunjal Kunal Narayan",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 217,
                "name": "Kusalkar Vandana Namdev",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 218,
                "name": "Chavan Jayashri Bhagwan",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 219,
                "name": "Netke Kiran Anil",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 220,
                "name": "Chavan Shubhangi Prabhakar",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 221,
                "name": "Wade Komal Radhu",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 222,
                "name": "Chavan Gorakshanath Haribhau",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 223,
                "name": "Chavan Alka Gorakshanath",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 224,
                "name": "Kedari Shital Dattatray",
                "age": 30,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 225,
                "name": "Landge Sneha Sarjerao",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 226,
                "name": "Landge Shubhangi Sarjerao",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 227,
                "name": "Pawar Punam Tanaji",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 228,
                "name": "Gorade Abhinav Sambhaji",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 229,
                "name": "Pawar Ramrao Namdev",
                "age": 67,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 230,
                "name": "Ghawate Dhanashri Pandurang ",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 231,
                "name": "Ghawate Dhaiyashri Pandurang",
                "age": 19,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 232,
                "name": "Chavan Sarika Suresh",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 233,
                "name": "Vidhate Sujata Sandip",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 234,
                "name": "Chavan Vishal Shantaram",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 235,
                "name": "Pawar Mira Gorakh",
                "age": 39,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 236,
                "name": "Pawar Vaishali Kiran",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 237,
                "name": "Sarode Nikhil Vilas",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 238,
                "name": "Yadav Miravati Ganesh",
                "age": 33,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 239,
                "name": "Gawate Nutan Rajendra",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 240,
                "name": "Chaugule Dipak Kailas",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 241,
                "name": "Gawate Urmila Popat ",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 242,
                "name": "Tagad Kavita Sharad ",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 243,
                "name": "Kusale Harshada Dattatray",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 244,
                "name": "Kambale Nikita Nitesh",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 245,
                "name": "Yadav Anuja Sachin",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 246,
                "name": "Bhagawat Rohini Chandrakant",
                "age": 27,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 247,
                "name": "Pawar Kiran Shivaji",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 248,
                "name": "Gavhane Satish Machindra",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 249,
                "name": "Gavhane Sagar Machindra",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 250,
                "name": "Gavhane Mangal Dattatray",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 251,
                "name": "Chavan Pallavi Maruti",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 252,
                "name": "Pawar Radha Ramrao",
                "age": 63,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 253,
                "name": "Bankar Mangesh Bajirao",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 254,
                "name": "Nagwade Amit Arjun",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 255,
                "name": "Chavan Vikas Shankar",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 256,
                "name": "Chavan Sonali Ravindra",
                "age": 32,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 257,
                "name": "Karpe Anita Kaluram",
                "age": 28,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 258,
                "name": "Bhagawat Karishma Dilip",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 259,
                "name": "Chavan Ganesh Sunil",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 260,
                "name": "Nagwade Yuvraj Ramdas",
                "age": 25,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 261,
                "name": "Chavan Yogita Machindra",
                "age": 20,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 262,
                "name": "Bhagawat Sagar Sampat",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 263,
                "name": "Kusale Sunita Pravin",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 264,
                "name": "Vidhate Kailas Gujaba",
                "age": 57,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 265,
                "name": "Landge Mayur Balu",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 266,
                "name": "Landge Mashesh Balu",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 267,
                "name": "Shinde Priyanka Shekhar",
                "age": 23,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 268,
                "name": "Gosawi Shradha Nilesh",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 269,
                "name": "Gawade Mayur Sunil",
                "age": 24,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 270,
                "name": "Nagwade Kaweri Vishal",
                "age": 21,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 271,
                "name": "Nawale Nilam Yogesh",
                "age": 22,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 272,
                "name": "Pawar Gulabrao Dashrath",
                "age": 63,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 273,
                "name": "Pawar Vimal Gulabrao",
                "age": 62,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 274,
                "name": "Pawar Ravindra Gulabrao",
                "age": 37,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 275,
                "name": "Vidhate Sarika Dnyaneshwar",
                "age": 34,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 276,
                "name": "Daundkar Umesh Vitthal",
                "age": 29,
                "Ward": "Mararthi Shala Parisar"
            },
            {
                "serialNo": 277,
                "name": "Gawade Punam Bharat",
                "age": 31,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 278,
                "name": "Bhagawat Subhash Maruti",
                "age": 30,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 279,
                "name": "Tagad Hausabai Dadabhau",
                "age": 70,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 280,
                "name": "Tagad Bapu Dadabhau",
                "age": 41,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 281,
                "name": "Tagad Anil Dadabhau",
                "age": 40,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 282,
                "name": "Landge Balasaheb Mahadu",
                "age": 55,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 283,
                "name": "Gaikwad Baban Parvatrao",
                "age": 48,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 284,
                "name": "Ransingh Prabhu Pandurang",
                "age": 32,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 285,
                "name": "Pingale Shantabai Vithoba",
                "age": 49,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 286,
                "name": "Gosawi Maheshgiri Ashok",
                "age": 31,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 287,
                "name": "Gosawi Nilesh Ashok",
                "age": 28,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 288,
                "name": "Gosawi Indumati Sanjay",
                "age": 42,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 289,
                "name": "Gosawi Anjana Babugir",
                "age": 93,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 290,
                "name": "Gosawi Sureshgir Babugir",
                "age": 64,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 291,
                "name": "Gosawi Pramila Sureshgir",
                "age": 60,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 292,
                "name": "Gosawi Sanjay Sureshgir",
                "age": 48,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 293,
                "name": "Gosawi Ajit Sureshgir",
                "age": 42,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 294,
                "name": "Gosawi Pratibha Sureshgir",
                "age": 36,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 295,
                "name": "Galande Namdev Dhondiba",
                "age": 52,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 296,
                "name": "Galande Maruti Dhondiba",
                "age": 47,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 297,
                "name": "Galande Sangita Namdev",
                "age": 46,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 298,
                "name": "Galande Sachin Namdev",
                "age": 27,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 299,
                "name": "Galande Sonal Maruti",
                "age": 52,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 300,
                "name": "Kale Lankabai Sanjay",
                "age": 42,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 301,
                "name": "Chavan Suresh Shankar",
                "age": 51,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 302,
                "name": "Marathe Sakhubai Shivaji ",
                "age": 53,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 303,
                "name": "Marathe Kausabai Balasaheb",
                "age": 60,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 304,
                "name": "Marathe Sunil Balasaheb",
                "age": 41,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 305,
                "name": "Marathe Jyoti Sunil",
                "age": 38,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 306,
                "name": "Marathe Santosh Balasaheb",
                "age": 36,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 307,
                "name": "Marathe Balasaheb Haribhau",
                "age": 53,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 308,
                "name": "Marathe Fakkad Haribhau",
                "age": 70,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 309,
                "name": "Marathe Lilabai Fakkad",
                "age": 65,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 310,
                "name": "Marathe Vasant Fakkad",
                "age": 33,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 311,
                "name": "Marathe Dattatray Fakkad",
                "age": 40,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 312,
                "name": "Marathe Nirmala Dattatray",
                "age": 36,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 313,
                "name": "Chaudhari Nita Laxman",
                "age": 33,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 314,
                "name": "Marathe Sunita Balasaheb",
                "age": 50,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 315,
                "name": "Marathe Dnyaneshwar Haribhau",
                "age": 57,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 316,
                "name": "Marathe Sitabai Dnyaneshwar",
                "age": 55,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 317,
                "name": "Tagad Dattatray Kisan",
                "age": 61,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 318,
                "name": "Tagad Svita Dattatray",
                "age": 58,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 319,
                "name": "Tagad Sanjay Dattatray ",
                "age": 37,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 320,
                "name": "Tagad Sujata Anil",
                "age": 34,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 321,
                "name": "Tagad Uttam Kisan",
                "age": 55,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 322,
                "name": "Tagad Alka Uttam",
                "age": 51,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 323,
                "name": "Tagad Parubai Bapu",
                "age": 40,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 324,
                "name": "Gosawi Dnyanoba Bandugir",
                "age": 87,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 325,
                "name": "Gosawi Sulochana Shivaji",
                "age": 55,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 326,
                "name": "Gosawi Gurudatta Shivaji",
                "age": 37,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 327,
                "name": "Gosawi Shobha Shivaji",
                "age": 35,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 328,
                "name": "Gosawi Nanda Gurudatta",
                "age": 31,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 329,
                "name": "Dhotre Sharad Gulab",
                "age": 44,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 330,
                "name": "Dhotre Chaya Sharad",
                "age": 39,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 331,
                "name": "Pingale Yashwant Namdev",
                "age": 81,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 332,
                "name": "Pingale Maruti Yashwant ",
                "age": 45,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 333,
                "name": "Pingale Kanchan Maruti",
                "age": 39,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 334,
                "name": "Pawar Dadabhau Ramchandra",
                "age": 54,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 335,
                "name": "Pawar Ashabai Dadabhau",
                "age": 47,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 336,
                "name": "Randive Nabubai Harishchandra",
                "age": 60,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 337,
                "name": "Pawar Ganesh Dadabhau",
                "age": 30,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 338,
                "name": "Pawar Varsha Dadabhau",
                "age": 28,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 339,
                "name": "Pawar Vaishali Dadabhau",
                "age": 26,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 340,
                "name": "Pawar Narayan Chandar",
                "age": 47,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 341,
                "name": "Pawar Saraswati Narayan",
                "age": 41,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 342,
                "name": "Pawar Jayashri Balu",
                "age": 36,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 343,
                "name": "Pawar Vithoba Maruti",
                "age": 85,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 344,
                "name": "Pawar Shivaji Vithoba",
                "age": 54,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 345,
                "name": "Pawar Anjana Shivaji",
                "age": 49,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 346,
                "name": "Pawar Sharada Dattatray",
                "age": 44,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 347,
                "name": "Pawar Rajendra Shankar",
                "age": 47,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 348,
                "name": "Pawar Mangal Rajendra",
                "age": 45,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 349,
                "name": "Shirke Prakash Bapu",
                "age": 68,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 350,
                "name": "Shirke Hirabai Praksh",
                "age": 63,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 351,
                "name": "Pawar Shobha Vijay",
                "age": 47,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 352,
                "name": "Karpe Avinash Valmik",
                "age": 33,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 353,
                "name": "Karpe Pratap Raghunath",
                "age": 32,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 354,
                "name": "Gosawi Vasant Bhagawan",
                "age": 77,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 355,
                "name": "Gosawi Dwarakabai Vasantgiri",
                "age": 70,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 356,
                "name": "Gosawi Sunil Vasantgiri",
                "age": 44,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 357,
                "name": "Gosawi Rahul Vasantgiri",
                "age": 38,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 358,
                "name": "Gosawi Savita Vasantgiri",
                "age": 35,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 359,
                "name": "Gosawi Jayashri Sunil",
                "age": 33,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 360,
                "name": "Tagad Vijay Dattatray",
                "age": 37,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 361,
                "name": "Galande Rahul Namdev",
                "age": 28,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 362,
                "name": "Marathe Swapnali Ajay",
                "age": 29,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 363,
                "name": "Gosawi Priti Maheshgiri",
                "age": 25,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 364,
                "name": "Marathe Priyanka Balasaheb",
                "age": 25,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 365,
                "name": "Pawar Suraj Dattatray",
                "age": 26,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 366,
                "name": "Gawate Ashwini Mahendra",
                "age": 23,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 367,
                "name": "Gavhane Ujvala Sunil",
                "age": 34,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 368,
                "name": "Shinde Ajit Dnyaneshwar",
                "age": 25,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 369,
                "name": "Chaugule Durga Rajkumar",
                "age": 31,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 370,
                "name": "Karpe Sonali Pradip",
                "age": 28,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 371,
                "name": "Chavan Baban Sampat",
                "age": 45,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 372,
                "name": "Pawar Balu Vitthal",
                "age": 51,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 373,
                "name": "Tagad Ashwini Sanjay",
                "age": 32,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 374,
                "name": "Gosawi Ranjana Rahul",
                "age": 34,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 375,
                "name": "Shirke Amol Prakash",
                "age": 30,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 376,
                "name": "Chavan Arati Namdev",
                "age": 21,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 377,
                "name": "Pawar Akash Narayan",
                "age": 22,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 378,
                "name": "Bagawat Rupali Shivaji",
                "age": 33,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 379,
                "name": "Vidhate Varsha Somnath",
                "age": 28,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 380,
                "name": "Bhagawat Punam Yogesh",
                "age": 26,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 381,
                "name": "Vidhate Ashok Dnyanoba",
                "age": 29,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 382,
                "name": "Vidhate Chitra Bhushan",
                "age": 25,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 383,
                "name": "Daundkar Mohini Vitthal",
                "age": 27,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 384,
                "name": "Bhagawat Mayuri Subhash",
                "age": 23,
                "Ward": "Marathe Vasti"
            },
            {
                "serialNo": 385,
                "name": "Bhagawat Sandip Dattatray",
                "age": 34,
                "Ward": "Marathe Vasti"
            }
        ];
    }]);
})();