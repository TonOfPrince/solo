angular.module('yogauto', [])
.service('Counter', function() {
	this.poses = [
	  {
	    english: "Bharadvaja's Twist",
	    sanskrit: "Bharadvajasana I",
	    type: ['HIP OPENERS', 'SEATED', 'TWISTS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_269_FNL_81011.jpg'
	  },
	  {
	    english: "Big Toe Pose",
	    sanskrit: "Padangusthasana",
	    type: ['FORWARD BENDS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/255_HP_01_fnl_4501.jpg'
	  },
	  {
	    english: "Boat Pose",
	    sanskrit: "Paripurna Navasana",
	    type: ['CORE YOGA', 'SEATED YOGA', 'FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/boatpose.jpg'
	  },
	  {
	    english: "Bound Anlge Pose",
	    sanskrit: "Baddha Konasana",
	    type: ['FORWARD BENDS', 'HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/garden_228_03_4501.jpg'
	  },
	  {
	    english: "Bow Pose",
	    sanskrit: "Dhanurasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_260_10_FNL_4501.jpg'
	  },
	  {
	    english: "Bridge Pose",
	    sanskrit: "Setu Bandha Sarvangasana",
	    type: ['BACKBENDS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/257_HP_13_fnl_4502.jpg'
	  },
	  {
	    english: "Camel Pose",
	    sanskrit: "Ustrasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/258_HP_10_fnl_4501.jpg'
	  },
	  {
	    english: "Cat Pose",
	    sanskrit: "Marjaryasana",
	    type: ['CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/252_hp_move_03_4501.jpg'
	  },
	  {
	    english: "Chair Pose",
	    sanskrit: "Utkatasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_269_FNL_81135.jpg'
	  },
	  {
	    english: "Child's Pose",
	    sanskrit: "Balasana",
	    type: ['ORWARD BENDS', 'HIP OPENERS', 'RESTORATIVE POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side06_4501.jpg'
	  },
	  {
	    english: "Cobra Pose",
	    sanskrit: "Bhujangasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/248_hp_sit_04_450.jpg'
	  },
	  {
	    english: "Corpse Pose",
	    sanskrit: "Savasana",
	    type: ['RESTORATIVE POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/CorpsePoseYoga.jpg'
	  },
	  {
	    english: "Cow Face Pose",
	    sanskrit: "Gomukhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/cowfacepose.jpg'
	  },
	  {
	    english: "Cow Pose",
	    sanskrit: "Bitilasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/CowPose.jpg'
	  },
	  {
	    english: "Crane (Crow) Pose",
	    sanskrit: "Bakasana",
	    type: ['ARM BALANCES', 'CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/Crane-Crow-Pose1.jpg'
	  },
	  {
	    english: "Dolphin Plank Pose",
	    sanskrit: "Makara Adho Mukha Svanasana",
	    type: ['ARM BALANCES', 'CORE YOGA', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/Dolphin-Plank-Pose.jpg'
	  },
	  {
	    english: "Dolphin Pose",
	    sanskrit: "Makarasana",
	    type: ['CORE YOGA', 'STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/263_hp_bends_10_4502.jpg'
	  },
	  {
	    english: "Downward-Facing Dog",
	    sanskrit: "Adho Mukha Svanasana",
	    type: ['FORWARD BENDS', 'STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side12_450.jpg'
	  },
	  {
	    english: "Eagle Pose",
	    sanskrit: "Garudasana",
	    type: ['BALANCING', 'HIP OPENERS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/pract-well_trail_268_04_Eagle.jpg'
	  },
	  {
	    english: "Easy Pose",
	    sanskrit: "Sukhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/EASYPOSE.jpg'
	  },
	  {
	    english: "Eight-Angle Pose",
	    sanskrit: "Astavakrasana",
	    type: ['ARM BALANCES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/eightangle.jpg'
	  },
	  {
	    english: "Extended Hand-To-Big-Toe Pose",
	    sanskrit: "Utthita Hasta Padangustasana",
	    type: ['BALANCING', 'HIP OPENERS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/yogapedia_270_08_450x450.jpg'
	  },
	  {
	    english: "Extended Puppy Pose",
	    sanskrit: "Uttana Shishosana",
	    type: ['FORWARD BENDS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_feat_tri03_4501.jpg'
	  },
	  {
	    english: "Extended Side Angle Pose",
	    sanskrit: "Utthita Parsvakonasana",
	    type: ['STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/extendedsideanglepose.jpg'
	  },
	  {
	    english: "Extended Triangle Pose",
	    sanskrit: "Utthita Trikonasana",
	    type: ['STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side16_4501.jpg'
	  },
	  {
	    english: "Feathered Peacock Pose",
	    sanskrit: "Pincha Mayurasana",
	    type: ['INVERSIONS', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/featheredpeacock2.jpg'
	  },
	  {
	    english: "Fire Log Pose",
	    sanskrit: "Agnistambhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/firelogpose.jpg'
	  },
	  {
	    english: "Firefly Pose",
	    sanskrit: "Tittibhasana",
	    type: ['ARM BALANCES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/kathrynbudigfireflypose.jpg'
	  },
	  {
	    english: "Fish Pose",
	    sanskrit: "Matsyasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/fishpose.jpg'
	  },
	  {
	    english: "Four-Limbed Staff Pose",
	    sanskrit: "Chaturanga Dandasana",
	    type: ['ARM BALANCES', 'CORE YOGA', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/chaturangafourlimbedstaff.jpg'
	  },
	  {
	    english: "Garland Pose",
	    sanskrit: "Malasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/252_hp_move_10a_450.jpg'
	  },
	  {
	    english: "Gate Pose",
	    sanskrit: "Parighasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side15_4501.jpg'
	  },
	  {
	    english: "Half Frog Pose",
	    sanskrit: "Ardha Bhekasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/2767-1011.jpg'
	  },
	  {
	    english: "Half Lord of the Fishes Pose",
	    sanskrit: "Ardha Matsyendrasana",
	    type: ['HIP OPENERS', 'SEATED', 'TWISTS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/lordofthefisheshalf.jpg'
	  },
	  {
	    english: "Half Moon Pose",
	    sanskrit: "Ardha Chandrasana",
	    type: ['BALANCING', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/halfmoonpose.jpg'
	  },
	  {
	    english: "Handstand",
	    sanskrit: "Adho Mukha Vrksasana",
	    type: ['BALANCING', 'INVERSIONS', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HandstandPose.jpg'
	  },
	  {
	    english: "Happy Baby Pose",
	    sanskrit: "Ananda Balasana",
	    type: ['CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/249_hp_groove_16_450.jpg'
	  },
	  {
	    english: "Head-to-Knee Forward Bend",
	    sanskrit: "Janu Sirsasana",
	    type: ['FORWARD BENDS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/251_hp_calm_10_450.jpg'
	  },
	  {
	    english: "Hero Pose",
	    sanskrit: "Virasana",
	    type: ['SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/heropose.jpg'
	  }
	];
})
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
	













