angular.module('yogauto', [])
.service('Counter', function() {
	this.counter = 0;
})
.controller('poseCtrl', function($scope, Counter) {
	$scope.display = Counter.counter;
	$scope.increment = function() {
		Counter.counter++;
		if (Counter.counter % 3 === 0 && Counter.counter % 5 === 0) {
			$scope.display = 'FIZZBUZZ';
		} else if (Counter.counter % 3 === 0) {
			$scope.display = 'FIZZ';
		} else if (Counter.counter % 5 === 0) {
			$scope.display = 'BUZZ';
		} else {
			$scope.display = Counter.counter;
		}
	}	
	$scope.poses = [
	  {
	    english: "Bharadvaja's Twist",
	    sanskrit: "Bharadvajasana I",
	    type: ['HIP OPENERS', 'SEATED', 'TWISTS']
	  },
	  {
	    english: "Big Toe Pose",
	    sanskrit: "Padangusthasana",
	    type: ['FORWARD BENDS', 'STANDING POSES']
	  },
	  {
	    english: "Boat Pose",
	    sanskrit: "Paripurna Navasana",
	    type: ['CORE YOGA', 'SEATED YOGA', 'FOR STRENGTH']
	  },
	  {
	    english: "Bound Anlge Pose",
	    sanskrit: "Baddha Konasana",
	    type: ['FORWARD BENDS', 'HIP OPENERS', 'SEATED']
	  },
	  {
	    english: "Bow Pose",
	    sanskrit: "Dhanurasana",
	    type: ['BACKBENDS', 'CHEST OPENERS']
	  },
	  {
	    english: "Bridge Pose",
	    sanskrit: "Setu Bandha Sarvangasana",
	    type: ['BACKBENDS']
	  },
	  {
	    english: "Camel Pose",
	    sanskrit: "Ustrasana",
	    type: ['BACKBENDS', 'CHEST OPENERS']
	  },
	  {
	    english: "Cat Pose",
	    sanskrit: "Marjaryasana",
	    type: ['CORE YOGA']
	  },
	  {
	    english: "Chair Pose",
	    sanskrit: "Utkatasana",
	    type: ['STANDING POSES']
	  },
	  {
	    english: "Child's Pose",
	    sanskrit: "Balasana",
	    type: ['ORWARD BENDS', 'HIP OPENERS', 'RESTORATIVE POSES']
	  },
	  {
	    english: "Cobra Pose",
	    sanskrit: "Bhujangasana",
	    type: ['BACKBENDS', 'CHEST OPENERS']
	  },
	  {
	    english: "Corpse Pose",
	    sanskrit: "Savasana",
	    type: ['RESTORATIVE POSES']
	  },
	  {
	    english: "Cow Face Pose",
	    sanskrit: "Gomukhasana",
	    type: ['HIP OPENERS', 'SEATED']
	  },
	  {
	    english: "Cow Pose",
	    sanskrit: "Bitilasana",
	    type: ['BACKBENDS', 'CHEST OPENERS']
	  },
	  {
	    english: "Crane (Crow) Pose",
	    sanskrit: "Bakasana",
	    type: ['ARM BALANCES', 'CORE YOGA']
	  },
	  {
	    english: "Dolphin Plank Pose",
	    sanskrit: "",
	    type: ['ARM BALANCES', 'CORE YOGA', 'YOGA FOR STRENGTH']
	  }
	];
});