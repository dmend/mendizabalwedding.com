angular.module('weddingApp', [])
  .controller('CountdownController', ['$scope', '$interval',
    function ($scope, $interval) {
      var weddingDay = new Date(2015, 10, 21, 15); // November 21, 2015 3:00 PM
      var now,
          timeLeft,
          secondsLeft,
          minutesLeft,
          hoursLeft;

      $interval( function () {
        now = new Date();
        timeLeft = weddingDay - now;
        secondsLeft = Math.floor(timeLeft/1000);
        minutesLeft = Math.floor(secondsLeft/60);
        hoursLeft = Math.floor(minutesLeft/60);

        $scope.seconds = secondsLeft % 60
        $scope.minutes = minutesLeft % 60
        $scope.hours = hoursLeft % 24
        $scope.days = Math.floor(hoursLeft/24);
      }, 1000);
  }]);
