angular.module('weddingApp', [])
  .controller('CountdownController', ['$scope', '$interval',
    function ($scope, $interval) {
      var WEDDING_DAY = new Date(Date.UTC(2015, 10, 21, 21)); // November 21, 2015 3:00 PM CST
      var now,
          timeLeft,
          secondsLeft,
          minutesLeft,
          hoursLeft;

      $interval( function () {
        now = new Date();
        timeLeft = WEDDING_DAY - now;
        secondsLeft = Math.floor(timeLeft/1000);
        minutesLeft = Math.floor(secondsLeft/60);
        hoursLeft = Math.floor(minutesLeft/60);

        $scope.seconds = secondsLeft % 60
        $scope.minutes = minutesLeft % 60
        $scope.hours = hoursLeft % 24
        $scope.days = Math.floor(hoursLeft/24);
      }, 1000);
  }]);
