// Define the `phonecatApp` module
var app = angular.module('ElfReport', ['chart.js']);

app.controller('ReportInfo', function($scope, $http, $sce, $window) {
   $scope.kids=
   [
    { 
        "Name" : "Susie Q.",
        "Age" : "8",
        "Gender": "Girl",
        "Data": [85,15],
        "Nices": ["Nice", "A/B Honor Role"],
        "Naughties": ["Fights with brother and sister", "Needs to keep room clean"],
        "Notes": "Susie is a very good big sister. She makes good grades in school and is nice to her classmates and teachers. She is well behaved for the most part with the occasional fight with her siblings.",
        "Address": "1600 Amphitheatre Parkway in Mountain View, CA 94043",
        "Gifts":["American Girl Doll"]

    },
    {
        "Name" : "Johnny B.",
        "Age" : "7",
        "Gender": "Boy",
        "Data": [85, 15],
        "Nices": ["Nice", "Knighted at school for honesty", "Always helps his little sister"],
        "Naughties": ["Fights with sisters", "Needs to keep room clean"],
        "Notes": "Johnny was given a award at school for being honest and is well liked by his teachers and classmates. He generally helps his parents out, but offten has to be told many times to 'Clean his room'.",
        "Address": "1600 Amphitheatre Parkway in Mountain View, CA 94043",
        "Gifts":["BB-8"]
    },
    {
        "Name" : "Little Susie Q",
        "Age" : "2",
        "Gender": "Girl",
        "Data": [90, 10],
        "Nices": ["Nice","Sweet", "Helps Mom with chores", "Throws trash away"],
        "Naughties": ["Fights with brother and sister"],
        "Notes": "Little Susie is sweet and helps Mom do the laundry, throw away trash, etc.",
        "Address": "1600 Amphitheatre Parkway in Mountain View, CA 94043",
        "Gifts":["Little People"]
    },
   ]

    $scope.getIframeSrc = function (address) {
        return $sce.trustAsResourceUrl('http://maps.google.com/?q=' + address + "&output=embed");
    };

    $scope.labels = ["Nice", "Naughty"];

    $scope.colors = ["#14B500","#D10000"];
    
    $scope.options = {
      "responsive": false,
      legend: {
          display: true, labels:{fontColor: "#fff", fontSize: 15}
      }
    }

    $scope.WinSize = "4500px";
});
