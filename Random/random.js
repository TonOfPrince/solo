angular.module('yogiauto.random', [])
.controller('poseCtrl', function($scope, Counter) {
	$scope.undecided = true;
	$scope.practicing = true;
	$scope.paused = true;
	$scope.nextable = false;
	$scope.started = false;
	$scope.listed = false;
	$scope.poses = Counter.poses;
	$scope.randomPosesList = [];
	$scope.randomPoses = function(number) {
		$scope.undecided = false;
		$scope.practicing = false;
		$scope.listed = true;
		$scope.paused = true;
		$scope.nextable = false;
		$scope.started = true;
		if ($scope.transition) {
			clearInterval($scope.transition);
			$scope.current = null
			$scope.transition = null;
		}
		var used = {};
		$scope.randomPosesList = [];
		for (var i = 0; i < number; i++) {
			var repeat  = true;
			while(repeat) {
				var indexToPush = Math.floor(Math.random()*$scope.poses.length);
				if (!used[indexToPush]) {
					used[indexToPush] = true;
					$scope.randomPosesList.push($scope.poses[indexToPush]);
					repeat = false;
				}
			}
		}
		$scope.current = $scope.randomPosesList[0];
	};
	$scope.practicePoses = function() {
		$scope.practicing = true;
		$scope.paused = false;
		$scope.nextable = true;
		$scope.started = true;
		$scope.current = $scope.randomPosesList[0];
		$scope.transition = setInterval(function() {
			$scope.randomPosesList.shift(); 
			$scope.current = $scope.randomPosesList[0];
			if ($scope.randomPosesList.length === 0) {
				$scope.practicing = true;
				$scope.paused = true;
				$scope.nextable = false;
				$scope.started = false;
				$scope.listed = false;
				clearInterval($scope.transition);
			}
			$scope.$apply();
		}, 2000);
	};
	$scope.pausePoses = function() {
		$scope.practicing = false;
		$scope.paused = true;
		$scope.nextable = false;
		clearInterval($scope.transition);
		$scope.transition = null;
	}
	$scope.nextPose = function() {
		clearInterval($scope.transition);
		$scope.randomPosesList.shift(); 
		$scope.practicePoses();
	}
	$scope.removePose = function(index) {
		$scope.randomPosesList.splice(index, 1);
	}
	$scope.showPicture = function(index) {
		$scope.current = $scope.randomPosesList[index];
		$scope.started = true;
	}
});	