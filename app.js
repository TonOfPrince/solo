angular.module('yogiauto', [
	// 'yogiauto.random', 
	// 'yogiauto.services', 
	// 'ui.router'
	])
.service('Counter', function() {
	this.poses = [
	  {
	    english: "Bharadvaja's Twist",
	    sanskrit: "Bharadvajasana I",
	    type: ['HIP OPENERS', 'SEATED', 'TWISTS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_269_FNL_81011.jpg',
	    description: ['Sit on the floor with your legs straight out in front of you. Shift over onto your right buttock, bend your knees, and swing your legs to the left. Lay your feet on the floor outside your left hip, with the left ankle resting in the right arch.', 'Inhale and lift through the top of the sternum to lengthen the front torso. Then exhale and twist your torso to the right, keeping the left buttock on or very close to the floor. Lengthen your tailbone toward the floor to keep the lower back long. Soften the belly.', 'Tuck your left hand under your right knee and bring your right hand to the floor just beside your right buttock. Pull your left shoulder back slightly, pressing your shoulder blades firmly against your back even as you continue to twist the chest to the right.','You can turn your head in one of two directions: continue the twist of the torso by turning it to the right; or counter the twist of the torso by turning it left and looking over the left shoulder at your feet.', 'With every inhalation lift a little more through the sternum, using the push of the fingers on the floor to help; with every exhalation twist a little more. Stay for 30 seconds to 1 minute, then release with an exhalation, return to the starting position, and repeat to the left for the same length of time.']
	  },
	  {
	    english: "Big Toe Pose",
	    sanskrit: "Padangusthasana",
	    type: ['FORWARD BENDS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/255_HP_01_fnl_4501.jpg',
	    description: ['Stand upright with your inner feet parallel and about six inches apart. Contract your front thigh muscles to lift your kneecaps. Keeping your legs completely straight, exhale and bend forward from your hip joints, moving your torso and head as one unit.', 'Slide the index and middle fingers of each hand between the big toes and the second toes. Then curl those fingers under and grip the big toes firmly, wrapping the thumbs around the other two fingers to secure the wrap. Press your toes down against your fingers. (If you can\'t reach your toes without overly rounding your back, pass a strap under the ball of each foot and hold the straps.)', 'With an inhalation, lift your torso as if you were going to stand up again, straightening your elbows. Lengthen your front torso, and on the next exhale, lift your sitting bones. Depending on your flexibility, your lower back will hollow to a greater or lesser degree. As you do this, release your hamstrings and hollow your lower belly (below your navel) as well, lightly lifting it toward the back of your pelvis.', 'Lift the top of your sternum as high as you can, but take care not to lift your head so far that you compress the back of your neck. Keep your forehead relaxed.', 'For the next few inhalations, lift your torso strongly as you continue to actively contract your front thighs; on each successive exhalation, strongly lift your sitting bones as you consciously relax your hamstrings. As you do this, deepen the hollow in your lower back.', 'Finally exhale, bend your elbows out to the sides, pull up on your toes, lengthen the front and sides of your torso, and gently lower into the forward bend.', 'If you have very long hamstrings, you can draw your forehead toward your shins. But if your hamstrings are short, it\'s better to focus on keeping the front torso long. Hunching into a forward bend isn\'t safe for your lower back and does nothing to lengthen your hamstrings.', 'Hold the final position for one minute. Then release your toes, bring your hands to your hips, and re-lengthen your front torso. With an inhale, swing your torso and head as a single unit back to upright.']
	  },
	  {
	    english: "Boat Pose",
	    sanskrit: "Paripurna Navasana",
	    type: ['CORE YOGA', 'SEATED YOGA', 'FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/boatpose.jpg',
	    description: ['Sit on the floor with your legs straight in front of you. Press your hands on the floor a little behind your hips, fingers pointing toward the feet, and strengthen the arms. Lift through the top of the sternum and lean back slightly. As you do this make sure your back doesn\'t round; continue to lengthen the front of your torso between the pubis and top sternum. Sit on the “tripod” of your two sitting bones and tailbone.', 'Exhale and bend your knees, then lift your feet off the floor, so that the thighs are angled about 45-50 degrees relative to the floor. Lengthen your tailbone into the floor and lift your pubis toward your navel. If possible, slowly straighten your knees, raising the tips of your toes slightly above the level of your eyes. If this isn\'t possible remain with your knees bent, perhaps lifting the shins parallel to the floor.', 'Stretch your arms alongside the legs, parallel to each other and the floor. Spread the shoulder blades across your back and reach strongly out through the fingers. If this isn\'t possible, keep the hands on the floor beside your hips or hold on to the backs of your thighs.', 'While the lower belly should be firm, it shouldn\'t get hard and thick. Try to keep the lower belly relatively flat. Press the heads of the thigh bones toward the floor to help anchor the pose and lift the top sternum. Breathe easily. Tip the chin slightly toward the sternum so the base of the skull lifts lightly away from the back of the neck.', 'At first stay in the pose for 10-20 seconds. Gradually increase the time of your stay to 1 minute. Release the legs with an exhalation and sit upright on an inhalation.']
	  },
	  {
	    english: "Bound Anlge Pose",
	    sanskrit: "Baddha Konasana",
	    type: ['FORWARD BENDS', 'HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/garden_228_03_4501.jpg',
	    description: ['Sit with your legs straight out in front of you, raising your pelvis on a blanket if your hips or groins are tight. Exhale, bend your knees, pull your heels toward your pelvis, then drop your knees out to the sides and press the soles of your feet together.', 'Bring your heels as close to your pelvis as you comfortably can. With the first and second finger and thumb, grasp the big toe of each foot. Always keep the outer edges of the feet firmly on the floor. If it isn\'t possible to hold the toes, clasp each hand around the same-side ankle or shin.', 'Sit so that the pubis in front and the tailbone in back are equidistant from the floor. The perineum then will be approximately parallel to the floor and the pelvis in a neutral position. Firm the sacrum and shoulder blades against the back and lengthen the front torso through the top of the sternum.', 'Never force your knees down. Instead release the heads of the thigh bones toward the floor. When this action leads, the knees follow.', 'Stay in this pose anywhere from 1 to 5 minutes. Then inhale, lift your knees away from the floor, and extend the legs back to their original position.']
	  },
	  {
	    english: "Bow Pose",
	    sanskrit: "Dhanurasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_260_10_FNL_4501.jpg',
	    description: ['Lie on your belly with your hands alongside your torso, palms up. (You can lie on a folded blanket to pad the front of your torso and legs.) Exhale and bend your knees, bringing your heels as close as you can to your buttocks. Reach back with your hands and take hold of your ankles (but not the tops of the feet). Make sure your knees aren\'t wider than the width of your hips, and keep your knees hip width for the duration of the pose.', 'Inhale and strongly lift your heels away from your buttocks and, at the same time, lift your thighs away from the floor. This will have the effect of pulling your upper torso and head off the floor. Burrow the tailbone down toward the floor, and keep your back muscles soft. As you continue lifting the heels and thighs higher, press your shoulder blades firmly against your back to open your heart. Draw the tops of the shoulders away from your ears. Gaze forward.', 'With the belly pressed against the floor, breathing will be difficult. Breathe more into the back of your torso, and be sure not to stop breathing.', 'Stay in this pose anywhere from 20 to 30 seconds. Release as you exhale, and lie quietly for a few breaths. You can repeat the pose once or twice more.']
	  },
	  {
	    english: "Bridge Pose",
	    sanskrit: "Setu Bandha Sarvangasana",
	    type: ['BACKBENDS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/257_HP_13_fnl_4502.jpg',
	    description: ['Lie supine on the floor, and if necessary, place a thickly folded blanket under your shoulders to protect your neck. Bend your knees and set your feet on the floor, heels as close to the sitting bones as possible.', 'Exhale and, pressing your inner feet and arms actively into the floor, push your tailbone upward toward the pubis, firming (but not hardening) the buttocks, and lift the buttocks off the floor. Keep your thighs and inner feet parallel. Clasp the hands below your pelvis and extend through the arms to help you stay on the tops of your shoulders.', 'Lift your buttocks until the thighs are about parallel to the floor. Keep your knees directly over the heels, but push them forward, away from the hips, and lengthen the tailbone toward the backs of the knees. Lift the pubis toward the navel.', 'Lift your chin slightly away from the sternum and, firming the shoulder blades against your back, press the top of the sternum toward the chin. Firm the outer arms, broaden the shoulder blades, and try to lift the space between them at the base of the neck (where it\'s resting on the blanket) up into the torso.', 'Stay in the pose anywhere from 30 seconds to 1 minute. Release with an exhalation, rolling the spine slowly down onto the floor.']
	  },
	  {
	    english: "Camel Pose",
	    sanskrit: "Ustrasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/258_HP_10_fnl_4501.jpg',
	    description: ['Kneel on the floor with your knees hip width and thighs perpendicular to the floor. Rotate your thighs inward slightly, narrow your hip points, and firm but don\'t harden your buttocks. Imagine that you\'re drawing your sitting bones up, into your torso. Keep your outer hips as soft as possible. Press your shins and the tops of your feet firmly into floor.', 'Rest your hands on the back of your pelvis, bases of the palms on the tops of the buttocks, fingers pointing down. Use your hands to spread the back pelvis and lengthen it down through your tail bone. Then lightly firm the tail forward, toward the pubis. Make sure though that your front groins don\'t “puff” forward. To prevent this, press your front thighs back, countering the forward action of your tail. Inhale and lift your heart by pressing the shoulder blades against your back ribs.', 'Now lean back against the firmness of the tail bone and shoulder blades. For the time being keep your head up, chin near the sternum, and your hands on the pelvis. Beginners probably won\'t be able to drop straight back into this pose, touching the hands to the feet simultaneously while keeping the thighs perpendicular to the floor. If you need to, tilt the thighs back a little from the perpendicular and minimally twist to one side to get one hand on the same-side foot. Then press your thighs back to perpendicular, turn your torso back to neutral, and touch the second hand to its foot. If you\'re not able to touch your feet without compressing your lower back, turn your toes under and elevate your heels.', 'See that your lower front ribs aren\'t protruding sharply toward the ceiling, which hardens the belly and compresses the lower back. Release the front ribs and lift the front of the pelvis up, toward the ribs. Then lift the lower back ribs away from the pelvis to keep the lower spine as long as possible. Press your palms firmly against your soles (or heels), with the bases of the palms on the heels and the fingers pointing toward the toes. Turn your arms outwardly so the elbow creases face forward, without squeezing the shoulder blades together. You can keep your neck in a relatively neutral position, neither flexed nor extended, or drop your head back. But be careful not to strain your neck and harden your throat.', 'Stay in this pose anywhere from 30 seconds to a minute. To exit, bring your hands onto the front of your pelvis, at the hip points. Inhale and lift the head and torso up by pushing the hip points down, toward the floor. If your head is back, lead with your heart to come up, not by jutting the chin toward the ceiling and leading with your brain. Rest in Child\'s Pose for a few breaths.']
	  },
	  {
	    english: "Cat Pose",
	    sanskrit: "Marjaryasana",
	    type: ['CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/252_hp_move_03_4501.jpg',
	    description: ['Start on your hands and knees in a “tabletop” position. Make sure your knees are set directly below your hips and your wrists, elbows and shoulders are in line and perpendicular to the floor. Center your head in a neutral position, eyes looking at the floor.', 'As you exhale, round your spine toward the ceiling, making sure to keep your shoulders and knees in position. Release your head toward the floor, but don\'t force your chin to your chest.', 'Inhale, coming back to neutral “tabletop” position on your hands and knees.', 'This pose is often paired with Cow Pose on the inhale for a gentle, flowing vinyasa.']
	  },
	  {
	    english: "Chair Pose",
	    sanskrit: "Utkatasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HP_269_FNL_81135.jpg',
	    description: ['Stand in Tadasana. Inhale and raise your arms perpendicular to the floor. Either keep the arms parallel, palms facing inward, or join the palms.', 'Exhale and bend your knees, trying to take the thighs as nearly parallel to the floor as possible. The knees will project out over the feet, and the torso will lean slightly forward over the thighs until the front torso forms approximately a right angle with the tops of the thighs. Keep the inner thighs parallel to each other and press the heads of the thigh bones down toward the heels.', 'Firm your shoulder blades against the back. Take your tailbone down toward the floor and in toward your pubis to keep the lower back long.', 'Stay for 30 seconds to a minute. To come out of this pose straighten your knees with an inhalation, lifting strongly through the arms. Exhale and release your arms to your sides into Tadasana.']
	  },
	  {
	    english: "Child's Pose",
	    sanskrit: "Balasana",
	    type: ['ORWARD BENDS', 'HIP OPENERS', 'RESTORATIVE POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side06_4501.jpg',
	    description: ['Kneel on the floor. Touch your big toes together and sit on your heels, then separate your knees about as wide as your hips.', 'Exhale and lay your torso down between your thighs. Broaden your sacrum across the back of your pelvis and narrow your hip points toward the navel, so that they nestle down onto the inner thighs. Lengthen your tailbone away from the back of the pelvis while you lift the base of your skull away from the back of your neck.', 'Lay your hands on the floor alongside your torso, palms up, and release the fronts of your shoulders toward the floor. Feel how the weight of the front shoulders pulls the shoulder blades wide across your back.', 'Balasana is a resting pose. Stay anywhere from 30 seconds to a few minutes. Beginners can also use Balasana to get a taste of a deep forward bend, where the torso rests on the thighs. Stay in the pose from 1 to 3 minutes. To come up, first lengthen the front torso, and then with an inhalation lift from the tailbone as it presses down and into the pelvis.']
	  },
	  {
	    english: "Cobra Pose",
	    sanskrit: "Bhujangasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/248_hp_sit_04_450.jpg',
	    description: ['Lie prone on the floor. Stretch your legs back, tops of the feet on the floor. Spread your hands on the floor under your shoulders. Hug the elbows back into your body.', 'Press the tops of the feet and thighs and the pubis firmly into the floor.', 'On an inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs. Press the tailbone toward the pubis and lift the pubis toward the navel. Narrow the hip points. Firm but don\'t harden the buttocks.', 'Firm the shoulder blades against the back, puffing the side ribs forward. Lift through the top of the sternum but avoid pushing the front ribs forward, which only hardens the lower back. Distribute the backbend evenly throughout the entire spine.', 'Hold the pose anywhere from 15 to 30 seconds, breathing easily. Release back to the floor with an exhalation.']
	  },
	  {
	    english: "Corpse Pose",
	    sanskrit: "Savasana",
	    type: ['RESTORATIVE POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/CorpsePoseYoga.jpg',
	    description: ['In Savasana it\'s essential that the body be placed in a neutral position. Sit on the floor with your knees bent, feet on the floor, and lean back onto your forearms. Lift your pelvis slightly off the floor and, with your hands, push the back of the pelvis toward the tailbone, then return the pelvis to the floor. Inhale and slowly extend the right leg, then the left, pushing through the heels. Release both legs, softening the groins, and see that the legs are angled evenly relative to the mid-line of the torso, and that the feet turn out equally. Narrow the front pelvis and soften (but don\'t flatten) the lower back.', 'With your hands lift the base of the skull away from the back of the neck and release the back of the neck down toward the tailbone. If you have any difficulty doing this, support the back of the head and neck on a folded blanket. Broaden the base of the skull too, and lift the crease of the neck diagonally into the center of the head. Make sure your ears are equidistant from your shoulders.', 'Reach your arms toward the ceiling, perpendicular to the floor. Rock slightly from side to side and broaden the back ribs and the shoulder blades away from the spine. Then release the arms to the floor, angled evenly relative to the mid-line of torso. Turn the arms outward and stretch them away from the space between the shoulder blades. Rest the backs of the hands on the floor as close as you comfortably can to the index finger knuckles. Make sure the shoulder blades are resting evenly on the floor. Imagine the lower tips of the shoulder blades are lifting diagonally into your back toward the top of the sternum. From here, spread the collarbones.', 'In addition to quieting the physical body in Savasana, it\'s also necessary to pacify the sense organs. Soften the root of the tongue, the wings of the nose, the channels of the inner ears, and the skin of the forehead, especially around the bridge of the nose between the eyebrows. Let the eyes sink to the back of the head, then turn them downward to gaze at the heart. Release your brain to the back of the head.', 'Stay in this pose for 5 minutes for every 30 minutes of practice. To exit, first roll gently with an exhalation onto one side, preferably the right. Take 2 or 3 breaths. With another exhalation press your hands against the floor and lift your torso, dragging your head slowly after. The head should always come up last.']
	  },
	  {
	    english: "Cow Face Pose",
	    sanskrit: "Gomukhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/cowfacepose.jpg',
	    description: ['Sit in Dandasana (Staff Pose), then bend your knees and put your feet on the floor. Slide your left foot under the right knee to the outside of the right hip. Then cross your right leg over the left, stacking the right knee on top of the left, and bring the right foot to the outside of the left hip. Try to bring the heels equidistant from the hips: with the right leg on top you\'ll have to tug the right heel in closer to the left hip. Sit evenly on the sitting bones.', 'Inhale and stretch your right arm straight out to the right, parallel to the floor. Rotate your arm inwardly; the thumb will turn first toward the floor, then point toward the wall behind you, with the palm facing the ceiling. This movement will roll your right shoulder slightly up and forward, and round your upper back. With a full exhalation, sweep the arm behind your torso and tuck the forearm in the hollow of your lower back, parallel to your waist, with the right elbow against the right side of your torso. Roll the shoulder back and down, then work the forearm up your back until it is parallel to your spine. The back of your hand will be between your shoulder blades. See that your right elbow doesn\'t slip away from the right side of your torso.', 'Now inhale and stretch your left arm straight forward, pointing toward the opposite wall, parallel to the floor. Turn the palm up and, with another inhalation, stretch the arm straight up toward the ceiling, palm turned back. Lift actively through your left arm, then with an exhalation, bend the elbow and reach down for the right hand. If possible, hook the right and left fingers.', 'Lift the left elbow toward the ceiling and, from the back armpit, descend the right elbow toward the floor. Firm your shoulder blades against your back ribs and lift your chest. Try to keep the left arm right beside the left side of your head.', 'Stay in this pose about 1 minute. Release the arms, uncross the legs, and repeat with the arms and legs reversed for the same length of time. Remember that whichever leg is on top, the same-side arm is lower.']
	  },
	  {
	    english: "Cow Pose",
	    sanskrit: "Bitilasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/CowPose.jpg',
	    description: ['Start on your hands and knees in a “tabletop” position. Make sure your knees are set directly below your hips and your wrists, elbows and shoulders are in line and perpendicular to the floor. Center your head in a neutral position, eyes looking at the floor.', 'As you inhale, lift your sitting bones and chest toward the ceiling, allowing your belly to sink toward the floor. Lift your head to look straight forward.', 'Exhale, coming back to neutral “tabletop” position on your hands and knees. Repeat 10 to 20 times.', 'This pose is often paired with Cat Pose on the exhale for a gentle, flowing vinyasa.']
	  },
	  {
	    english: "Crane (Crow) Pose",
	    sanskrit: "Bakasana",
	    type: ['ARM BALANCES', 'CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/Crane-Crow-Pose1.jpg',
	    description: ['Squat down from Tadasana with your inner feet a few inches apart. If it isn\'t possible to keep your heels on the floor, support them on a thickly folded blanket. Separate your knees wider than your hips and lean the torso forward, between the inner thighs. Stretch your arms forward, then bend your elbows, place your hands on the floor and the backs of the upper arms against the shins.', 'Snuggle your inner thighs against the sides of your torso, and your shins into your armpits, and slide the upper arms down as low onto the shins as possible. Lift up onto the balls of your feet and lean forward even more, taking the weight of your torso onto the backs of the upper arms. In Bakasana you consciously attempt to contract your front torso and round your back completely. To help yourself do this, keep your tailbone as close to your heels as possible.', 'With an exhalation, lean forward even more onto the backs of your upper arms, to the point where the balls of your feet leave the floor. Now your torso and legs are balanced on the backs of your upper arms. As a beginner at this pose, you might want to stop here, perched securely on the bent arms.', 'But if you are ready to go further, squeeze the legs against the arms, press the inner hands firmly to the floor and (with an inhalation) straighten the elbows. Seen from the side the arms are angled slightly forward relative to the floor. The inner knees should be glued to the outer arms, high up near the armpits. Keep the head in a neutral position with your eyes looking at the floor, or lift the head slightly, without compressing the back of the neck, and look forward.', 'Stay in the pose anywhere from 20 seconds to 1 minute. To release, exhale and slowly lower your feet to the floor, back into a squat.']
	  },
	  {
	    english: "Dolphin Plank Pose",
	    sanskrit: "Makara Adho Mukha Svanasana",
	    type: ['ARM BALANCES', 'CORE YOGA', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/Dolphin-Plank-Pose.jpg',
	    description: ['Start in Dolphin Pose, knees bent. Then walk your feet back until your shoulders are directly over the elbows and your torso is parallel to the floor.', 'Press your inner forearms and elbows firmly against the floor. Firm your shoulder blades against your back and spread them away from the spine. Similarly spread your collarbones away from the sternum.', 'Press your front thighs toward the ceiling, but resist your tailbone toward the floor as you lengthen it toward the heels. Lift the base of your skull away from the back of the neck and look straight down at the floor, keeping the throat and eyes soft.', 'Stay anywhere from 30 seconds to a minute. Then, release your knees to the floor with an exhale.']
	  },
	  {
	    english: "Dolphin Pose",
	    sanskrit: "Makarasana",
	    type: ['CORE YOGA', 'STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/263_hp_bends_10_4502.jpg',
	    description: ['Come onto the floor on your hands and knees. Set your knees directly below your hips and your forearms on the floor with your shoulders directly above your wrists. Firmly press your palms together and your forearms into the floor.', 'Curl your toes under, then exhale and lift your knees away from the floor. At first keep the knees slightly bent and the heels lifted away from the floor. Lengthen your tailbone away from the back of your pelvis and press it lightly toward the pubis. Against this resistance, lift the sitting bones toward the ceiling, and from your inner ankles draw the inner legs up into the groins.', 'Continue to press the forearms actively into the floor. Firm your shoulder blades against your back, then widen them away from the spine and draw them toward the tailbone. Hold your head between the upper arms; don\'t let it hang or press heavily against the floor.', 'You can straighten your knees if you like, but if your upper back rounds it\'s best to keep them bent. Continue to lengthen your tailbone away from the pelvis and lift the top of your sternum away from the floor.', 'Stay between 30 seconds to one minute. Then release your knees to the floor with an exhale.']
	  },
	  {
	    english: "Downward-Facing Dog",
	    sanskrit: "Adho Mukha Svanasana",
	    type: ['FORWARD BENDS', 'STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side12_450.jpg',
	    description: ['Come onto the floor on your hands and knees. Set your knees directly below your hips and your hands slightly forward of your shoulders. Spread your palms, index fingers parallel or slightly turned out, and turn your toes under.', 'Exhale and lift your knees away from the floor. At first keep the knees slightly bent and the heels lifted away from the floor. Lengthen your tailbone away from the back of your pelvis and press it lightly toward the pubis. Against this resistance, lift the sitting bones toward the ceiling, and from your inner ankles draw the inner legs up into the groins.', 'Then with an exhalation, push your top thighs back and stretch your heels onto or down toward the floor. Straighten your knees but be sure not to lock them. Firm the outer thighs and roll the upper thighs inward slightly. Narrow the front of the pelvis.', 'Firm the outer arms and press the bases of the index fingers actively into the floor. From these two points lift along your inner arms from the wrists to the tops of the shoulders. Firm your shoulder blades against your back, then widen them and draw them toward the tailbone. Keep the head between the upper arms; don\'t let it hang.', 'Adho Mukha Svanasana is one of the poses in the traditional Sun Salutation sequence. It\'s also an excellent yoga asana all on its own. Stay in this pose anywhere from 1 to 3 minutes. Then bend your knees to the floor with an exhalation and rest in Child\'s Pose.']
	  },
	  {
	    english: "Eagle Pose",
	    sanskrit: "Garudasana",
	    type: ['BALANCING', 'HIP OPENERS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/pract-well_trail_268_04_Eagle.jpg',
	    description: ['Stand in Tadasana. Bend your knees slightly, lift your left foot up and, balancing on your right foot, cross your left thigh over the right. Point your left toes toward the floor, press the foot back, and then hook the top of the foot behind the lower right calf. Balance on the right foot.', 'Stretch your arms straight forward, parallel to the floor, and spread your scapulas wide across the back of your torso. Cross the arms in front of your torso so that the right arm is above the left, then bend your elbows. Snug the right elbow into the crook of the left, and raise the forearms perpendicular to the floor. The backs of your hands should be facing each other.', 'Press the right hand to the right and the left hand to the left, so that the palms are now facing each other. The thumb of the right hand should pass in front of the little finger of the left. Now press the palms together (as much as is possible for you), lift your elbows up, and stretch the fingers toward the ceiling.', 'Stay for 15 to 30 seconds, then unwind the legs and arms and stand in Tadasana again. Repeat for the same length of time with the arms and legs reversed.']
	  },
	  {
	    english: "Easy Pose",
	    sanskrit: "Sukhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/EASYPOSE.jpg',
	    description: ['Fold a thick blanket or two into a firm support about six inches high. Sit close to one edge of this support and stretch your legs out in front of your torso on the floor in Dandasana (Staff Pose).', 'Cross your shins, widen your knees, and slip each foot beneath the opposite knee as you bend your knees and fold the legs in toward your torso.', 'Relax the feet so their outer edges rest comfortably on the floor and the inner arches settle just below the opposite shin. You\'ll know you have the basic leg fold of Sukhasana when you look down and see a triangle, its three sides formed by the two thighs and the crossed shins. Don\'t confuse this position with that of other classic seated postures in which the ankles are tucked in close to the sitting bones. In Sukhasana, there should be a comfortable gap between the feet and the pelvis.', 'As always, you should sit with your pelvis in a relatively neutral position. To find neutral, press your hands against the floor and lift your sitting bones slightly off the support. As you hang there for a few breaths, make your thigh bones heavy, then slowly lower your sit bones lightly back to the support. Try to balance your pubic bone and tail bone so they\'re equidistant from the floor.', 'Either stack your hands in your lap, palms up, or lay your hands on your knees, palms down. Lengthen your tail bone toward the floor, firm your shoulder blades against your back to you\'re your upper torso, but don\'t over arch your lower back and poke your lower front ribs forward.', 'You can sit in this position for any length of time, but if you practice this pose regularly, be sure to alternate the cross of the legs. A good rule of thumb: On even-numbered days, cross the right shin in front of the left, and on odd-numbered days, do the opposite. Alternately, you can divide the practice time in half, and spend the first half with your right leg forward, and the second half with the left leg forward.']
	  },
	  {
	    english: "Eight-Angle Pose",
	    sanskrit: "Astavakrasana",
	    type: ['ARM BALANCES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/eightangle.jpg',
	    description: ['Stand in Tadasana (Mountain Pose), with your feet separated a bit wider than usual. Exhale, bend forward to Uttanasana (Standing Forward Bend), press your hands to the floor outside your feet. Then with your knees slightly bent, slip your right arm to the inside and then behind your right leg, and finally press the hand on the floor just outside your right foot. Work your right arm across the back of the right knee, until the knee is high up on the back of your right shoulder.', 'Brace your shoulder against the knee and slide your left foot to the right. Cross the left ankle in front of the right and hook the ankles. Lean slightly to the left, taking more weight on your left arm, and begin to lift your feet a few inches off the floor.', 'With the right leg supported on the shoulder, exhale and bend your elbows. Lean your torso forward and lower it toward parallel to the floor; at the same time, straighten your knees and extend your legs out to the right, parallel to the floor (and perpendicular to your torso). Squeeze your upper right arm between your thighs. Use that pressure to help twist your torso to the left. Keep your elbows in close to the torso. Look at the floor.', 'Hold for 30 seconds to a minute. Then straighten your arms slowly, lift your torso back to upright, bend your knees, unhook your ankles, and return your feet to the floor. Stand back and rest in Uttanasana for a few breaths. Then repeat the pose for the same length of time to the left.']
	  },
	  {
	    english: "Extended Hand-To-Big-Toe Pose",
	    sanskrit: "Utthita Hasta Padangustasana",
	    type: ['BALANCING', 'HIP OPENERS', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/yogapedia_270_08_450x450.jpg',
	    description: ['From Tadasana, bring your left knee toward your belly.', 'Reach your left arm inside the thigh, cross it over the front ankle, and hold the outside of your left foot. If your hamstrings are tight, hold a strap looped around the left sole.', 'Firm the front thigh muscles of the standing leg, and press the outer thigh inward.', 'Inhale and extend the left leg forward. Straighten the knee as much as possible. If you\'re steady, swing the leg out to the side. Breathe steadily; breathing takes concentration, but it helps you balance.', 'Hold for 30 seconds, then swing the leg back to center with an inhale, and lower the foot to the floor with an exhale. Repeat on the other side for the same length of time.']
	  },
	  {
	    english: "Extended Puppy Pose",
	    sanskrit: "Uttana Shishosana",
	    type: ['FORWARD BENDS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_feat_tri03_4501.jpg',
	    description: ['Come onto all fours. See that your shoulders are above your wrists and your hips are above your knees. Walk your hands forward a few inches and curl your toes under.', 'As you exhale, move your buttocks halfway back toward your heels. Keep your arms active; don\'t let your elbows touch the ground.', 'Drop your forehead to the floor or to a blanket and let your neck relax. Keep a slight curve in your lower back. To feel a nice long stretch in your spine, press the hands down and stretch through the arms while pulling your hips back toward your heels.', 'Breathe into your back, feeling the spine lengthen in both directions. Hold for 30 seconds to a minute, then release your buttocks down onto your heels.']
	  },
	  {
	    english: "Extended Side Angle Pose",
	    sanskrit: "Utthita Parsvakonasana",
	    type: ['STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/extendedsideanglepose.jpg',
	    description: ['Stand in Tadasana. On an exhalation, step or lightly jump your feet 3.5 to 4 feet apart. Raise your arms parallel to the floor and reach them actively out to the sides, shoulder blades wide, palms down. Turn your left foot in slightly to the right and your right foot out to the right 90 degrees. Align the right heel with the left heel. Firm your thighs and turn your right thigh outward, so that the center of the kneecap is in line with the center of the right ankle. Roll the left hip slightly forward, toward the right, but rotate your upper torso back to the left.', 'Anchor the left (back) heel to the floor by lifting the inner left groin deep into the pelvis. Then exhale and bend your right knee over the right ankle, so that the shin is perpendicular to the floor. As you bend the knee aim the inner knee toward the little-toe side of the foot. If possible, bring the right thigh parallel to the floor.', 'Firm your shoulder blades against the back ribs. Extend your left arm straight up toward the ceiling, then turn the left palm to face toward your head and with an inhalation reach the arm over the back of your left ear, palm facing the floor. Stretch from your left heel through your left fingertips, lengthening the entire left side of your body. Turn your head to look at the left arm. Release your right shoulder away from the ear. Try to create as much length along the right side of your torso as you do along the left.', 'As you continue to ground your left heel to the floor, exhale and lay the right side of your torso down onto (or bring it as close as possible to) the top of the right thigh. Press your right fingertips (or palm) on the floor just outside of your right foot. Actively push the right knee back against the inner arm; counter this by burrowing your tail bone into the back of your pelvis, toward the pubis. The inside of your right thigh should be parallel with the long edge of your sticky mat.', 'Stay for 30 seconds to 1 minute. Inhale to come up. Push both heels strongly into the floor and reach the left arm forcefully toward the ceiling to lighten the upward movement. Reverse the feet and repeat for the same length of time to the left. Then come up and return to Tadasana.']
	  },
	  {
	    english: "Extended Triangle Pose",
	    sanskrit: "Utthita Trikonasana",
	    type: ['STANDING POSES', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side16_4501.jpg',
	    description: ['Stand in Tadasana. With an exhalation, step or lightly jump your feet 3 1/2 to 4 feet apart. Raise your arms parallel to the floor and reach them actively out to the sides, shoulder blades wide, palms down.', 'Turn your left foot in slightly to the right and your right foot out to the right 90 degrees. Align the right heel with the left heel. Firm your thighs and turn your right thigh outward, so that the center of the right knee cap is in line with the center of the right ankle.', 'Exhale and extend your torso to the right directly over the plane of the right leg, bending from the hip joint, not the waist. Anchor this movement by strengthening the left leg and pressing the outer heel firmly to the floor. Rotate the torso to the left, keeping the two sides equally long. Let the left hip come slightly forward and lengthen the tailbone toward the back heel.', 'Rest your right hand on your shin, ankle, or the floor outside your right foot, whatever is possible without distorting the sides of the torso. Stretch your left arm toward the ceiling, in line with the tops of your shoulders. Keep your head in a neutral position or turn it to the left, eyes gazing softly at the left thumb.', 'Stay in this pose for 30 seconds to 1 minute. Inhale to come up, strongly pressing the back heel into the floor and reaching the top arm toward the ceiling. Reverse the feet and repeat for the same length of time to the left.']
	  },
	  {
	    english: "Feathered Peacock Pose",
	    sanskrit: "Pincha Mayurasana",
	    type: ['INVERSIONS', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/featheredpeacock2.jpg',
	    description: ['Perform a modified Adho Muhka Svanasana at your yoga wall, with your palms and forearms on the floor. Your fingertips should be right at the base of the wall, and your forearms parallel to each other at shoulder width. This pose isn\'t quite as scary as Adho Mukha Vrksasana; it has a firmer base of support, and the head isn\'t as far away from the floor. But it can still be somewhat intimidating. To ready yourself for and secure yourself in this inversion, firm your shoulder blades against your back torso and pull them toward your tailbone. Then rotate your upper arms outward, to keep the shoulder blades broad, and hug your forearms inward. Finally spread your palms and press your inner wrists firmly against the floor.', 'Now bend one knee and step the foot in, closer to the wall (let\'s say the left leg), but keep the other (i.e. right) leg active by extending through the heel. Then take a few practice hops before you try to launch yourself upside down. Sweep your right leg through a wide arc toward the wall and kick your left foot off the floor, immediately pushing through the heel to straighten the leg. Hop up and down like this several times, each time pushing off the floor a little higher. Exhale deeply each time you hop.', 'Hopping up and down like this may be all you can manage for now. Regularly practice your strength poses, like Adho Mukha Svanasana (or the modified version that\'s the beginning position here) and Chaturanga Dandasana. Eventually you\'ll be able to kick all the way into the pose. At first your heels may crash into the wall, but again with more practice you\'ll be able to swing your heels up lightly to the wall.', 'If your armpits and groins are tight, your lower back may be deeply arched. To lengthen it, draw your front ribs into your torso, reach your tailbone toward your heels, and slide your heels higher up the wall. Draw the navel toward the spine. Squeeze the outer legs together and roll the thighs in. In Pincha Mayurasana your head should be off the floor; hang it from a spot between your shoulder blades and gaze out into the center of the room.', 'Stay in the pose 10 to 15 seconds. Gradually work your way up to 1 minute. When you come down, be sure not to sink onto the shoulders. Keep your shoulder blades lifted and broad, and take one foot down at a time with an exhalation. Lift into Adho Mukha Svanasana for 30 seconds to a minute. We tend to kick up with the same leg all the time: be sure to alternate your kicking leg, one day right, next day left.']
	  },
	  {
	    english: "Fire Log Pose",
	    sanskrit: "Agnistambhasana",
	    type: ['HIP OPENERS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/firelogpose.jpg',
	    description: ['Sit on one edge of a thickly-folded blanket, knees bent, feet on the floor. Lightly shrug your shoulders up, strongly roll the heads of your upper arm bones back, and press the bottom tips of your shoulder blades into your back.', 'Slide your left foot under your right leg to the outside of your right hip, and lay the outer leg on the floor. Then, stack your right leg on top of the left. Be sure the right ankle is outside the left knee (so the sole is perpendicular to the floor).', 'If you have more flexibility in the hips, you can slide your left shin forward directly below the right to increase the challenge; otherwise, keep the left heel beside the right hip. If you\'re tight in the hips, you may find that bringing the ankle to the outer knee is difficult or uncomfortable. In this case, simply sit with your shins crossed in Sukhasana (Easy Pose).', 'Press through your heels and spread your toes. Keeping your front torso long, exhale and fold forward from your groins. Be sure not to round forward from your belly: Keep the space between your pubis and navel long. Lay your hands on the floor in front of your shins.', 'As you inhale, notice how your torso rises slightly; when it does, lengthen from your pubis to your sternum. Then on the next exhalation, fold deeper.', 'Hold 1 minute or more. Inhale the torso upright and uncross your legs to come out of the pose. Repeat for the same length of time with the left leg on top.']
	  },
	  {
	    english: "Firefly Pose",
	    sanskrit: "Tittibhasana",
	    type: ['ARM BALANCES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/kathrynbudigfireflypose.jpg',
	    description: ['Squat with your feet a little less than shoulder distance apart. Tilt your pelvis forward and bring your trunk between your legs. Keeping your trunk low, straighten your legs enough to lift your pelvis to about knee height.', 'Bring your left upper arm and shoulder as far as possible underneath the back of your left thigh just above the knee and place your left hand on the floor at the outside edge of your foot, fingers pointing forward. Repeat these actions on the other side.', 'Lift yourself off the floor by carefully shifting your center of gravity. Press your hands into the floor and slowly begin to rock your weight back, off your feet and onto your hands. Keep your inner thighs as high on your arms as possible.', 'With an inhalation, stretch your legs out to the sides as straight as you can, keeping your pelvis high to make your legs parallel to the floor.', 'Press through the bases of your big toes but pull your toes back toward your torso and spread them apart. The inner edges of your feet should be angled slightly forward, the outer edges slightly back.', 'Straighten your arms as much as possible. Hollow your chest as you widen your shoulder blades as much as possible; this will round your upper back, which will lift your torso higher.', 'Without tensing your neck, lift your head and gaze forward. Breathe slowly and hold the pose for 15 seconds or longer, then release your feet to the floor with an exhale.']
	  },
	  {
	    english: "Fish Pose",
	    sanskrit: "Matsyasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/fishpose.jpg',
	    description: ['Lie on your back on the floor with your knees bent, feet on the floor. Inhale, lift your pelvis slightly off the floor, and slide your hands, palms down, below your buttocks. Then rest your buttocks on the backs of your hands (and dont lift them off your hands as you perform this pose). Be sure to tuck your forearms and elbows up close to the sides of your torso.', 'Inhale and press your forearms and elbows firmly against the floor. Next press your scapulas into your back and, with an inhale, lift your upper torso and head away from the floor. Then release your head back onto the floor. Depending on how high you arch your back and lift your chest, either the back of your head or its crown will rest on the floor. There should be a minimal amount of weight on your head to avoid crunching your neck. (For more about this, see the Beginners Tip below.)', 'You can keep your knees bent or straighten your legs out onto the floor. If you do the latter, keep your thighs active, and press out through the heels.', 'Stay for 15 to 30 seconds, breathing smoothly. With an exhalation lower your torso and head to the floor. Draw your thighs up into your belly and squeeze.']
	  },
	  {
	    english: "Four-Limbed Staff Pose",
	    sanskrit: "Chaturanga Dandasana",
	    type: ['ARM BALANCES', 'CORE YOGA', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/chaturangafourlimbedstaff.jpg',
	    description: ['Perform Adho Mukha Svanasana, then Plank Pose. Firm your shoulder blades against your back ribs and press your tailbone toward your pubis.', 'With an exhalation slowly lower your torso and legs to a few inches above and parallel to the floor. There\'s a tendency in this pose for the lower back to sway toward the floor and the tailbone to poke up toward the ceiling. Throughout your stay in this position, keep the tailbone firmly in place and the legs very active and turned slightly inward. Draw the pubis toward the navel.', 'Keep the space between the shoulder blades broad. Don\'t let the elbows splay out to the sides; hold them in by the sides of the torso and push them back toward the heels. Press the bases of the index fingers firmly to the floor. Lift the top of the sternum and your head to look forward.', 'Chaturanga Dandasana is one of the positions in the Sun Salutation sequence. You can also practice this pose individually for anywhere from 10 to 30 seconds. Release with an exhalation. Either lay yourself lightly down onto the floor or push strongly back to Adho Mukha Svanasana, lifting through the top thighs and the tailbone.']
	  },
	  {
	    english: "Garland Pose",
	    sanskrit: "Malasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/252_hp_move_10a_450.jpg',
	    description: ['Squat with your feet as close together as possible. (Keep your heels on the floor if you can; otherwise, support them on a folded mat.)', 'Separate your thighs slightly wider than your torso. Exhaling, lean your torso forward and fit it snugly between your thighs.', 'Press your elbows against your inner knees, bringing your palms to together in Anjali Mudra (Salutation Seal), and resist the knees into the elbows. This will help lengthen your front torso.', 'To go further, press your inner thighs against the sides of your torso. Reach your arms forward, then swing them out to the sides and notch your shins into your armpits. Press your finger tips to the floor, or reach around the outside of your ankles and clasp your back heels.', 'Hold the position for 30 seconds to 1 minute, then inhale, straighten the knees, and stand into Uttanasana.']
	  },
	  {
	    english: "Gate Pose",
	    sanskrit: "Parighasana",
	    type: ['STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/266_hp_side15_4501.jpg',
	    description: ['Kneel on the floor. Stretch your right leg out to the right and press the foot to the floor, or use a block for extra support if you can\'t reach. Keep your left knee directly below your left hip (so the thigh is perpendicular to the floor), and align your right heel with the left knee. Turn your pelvis slightly to the right (so the left hip point comes forward of the right), but turn your upper torso back to the left. Point the kneecap toward the ceiling, which will require you to turn your right leg out.', 'As you inhale, bring your arms out to your sides, parallel to the floor, palms down. Bend to the right over the plane of the right leg and lay your right hand down on the shin, ankle, or the floor outside the right leg. Contract the right side of the torso and stretch the left. Place your left hand on the outer left hip and push the pelvis down toward the floor. Then slip the hand up to the lower left ribs and lift them toward the shoulder, creating space in the left waist.', 'With an inhalation, sweep the left arm over the back of the left ear. The side bend tends to drop the torso toward the floor. Without pushing the left hip back (continue to roll it slightly forward), turn the upper torso away from the floor.', 'Stay in this pose anywhere from 30 seconds to a minute. Come up as you inhale, reaching through the top arm to draw the torso upright. Bring the right knee back beside the left, and repeat with the legs reversed.']
	  },
	  {
	    english: "Half Frog Pose",
	    sanskrit: "Ardha Bhekasana",
	    type: ['BACKBENDS', 'CHEST OPENERS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/2767-1011.jpg',
	    description: ['Lie on your belly. Press your forearms against the floor and lift your head and upper torso.', 'Bend your right knee and bring the heel toward the same-side buttock. Then, supporting yourself on the left forearm, reach back with your right hand and clasp the inside of your foot. As you slowly rotate your elbow toward the ceiling, slide your fingers over the top of the foot and curl them over the toe tips. The base of your palm should be pressing the top of the foot.', 'To start press your foot toward the buttock; after a while, if you have the flexibility, take the foot slightly off to the side and press it toward the floor. Be sure to keep your knee in line with your hip. Don\'t push your foot too hard if it hurts your knee.', 'Square your shoulders with the front of the mat and don\'t collapse into your left shoulder. Instead, press down with your elbow to lift your chest.', 'Do Half Bhekasana on each side for the same length of time, 30 seconds to two minutes. Once your thighs and groins open enough, you can try the full pose-both legs at the same time.']
	  },
	  {
	    english: "Half Lord of the Fishes Pose",
	    sanskrit: "Ardha Matsyendrasana",
	    type: ['HIP OPENERS', 'SEATED', 'TWISTS'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/lordofthefisheshalf.jpg',
	    description: ['Sit on the floor with your legs straight out in front of you, buttocks supported on a folded blanket. Bend your knees, put your feet on the floor, then slide your left foot under your right leg to the outside of your right hip. Lay the outside of the left leg on the floor. Step the right foot over the left leg and stand it on the floor outside your left hip. The right knee will point directly up at the ceiling.', 'Exhale and twist toward the inside of the right thigh. Press the right hand against the floor just behind your right buttock, and set your left upper arm on the outside of your right thigh near the knee. Pull your front torso and inner right thigh snugly together.', 'Press the inner right foot very actively into the floor, release the right groin, and lengthen the front torso. Lean the upper torso back slightly, against the shoulder blades, and continue to lengthen the tailbone into the floor.', 'You can turn your head in one of two directions: Continue the twist of the torso by turning it to the right; or counter the twist of the torso by turning it left and looking over the left shoulder at the right foot.', 'With every inhalation lift a little more through the sternum, pushing the fingers against the floor to help. Twist a little more with every exhalation. Be sure to distribute the twist evenly throughout the entire length of the spine; don\'t concentrate it in the lower back. Stay for 30 seconds to 1 minute, then release with an exhalation, return to the starting position, and repeat to the left for the same length of time. Watch a video demonstration of this pose.']
	  },
	  {
	    english: "Half Moon Pose",
	    sanskrit: "Ardha Chandrasana",
	    type: ['BALANCING', 'STANDING POSES'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/halfmoonpose.jpg',
	    description: ['Perform Utthita Trikonasana to the right side, with your left hand resting on the left hip. Inhale, bend your right knee, and slide your left foot about 6 to 12 inches forward along the floor. At the same time, reach your right hand forward, beyond the little-toe side of the right foot, at least 12 inches.', 'Exhale, press your right hand and right heel firmly into the floor, and straighten your right leg, simultaneously lifting the left leg parallel (or a little above parallel) to the floor. Extend actively through the left heel to keep the raised leg strong. Be careful not to lock (and so hyperextend) the standing knee: make sure the kneecap is aligned straight forward and isn\'t turned inward.', 'Rotate your upper torso to the left, but keep the left hip moving slightly forward. Most beginners should keep the left hand on the left hip and the head in a neutral position, gazing forward.', 'Bear the body\'s weight mostly on the standing leg. Press the lower hand lightly to the floor, using it to intelligently regulate your balance. Lift the inner ankle of the standing foot strongly upward, as if drawing energy from the floor into the standing groin. Press the sacrum and scapulas firmly against the back torso, and lengthen the coccyx toward the raised heel.', 'Stay in this position for 30 seconds to 1 minute. Then lower the raised leg to the floor with an exhalation, and return to Trikonasana. Then perform the pose to the left for the same length of time.']
	  },
	  {
	    english: "Handstand",
	    sanskrit: "Adho Mukha Vrksasana",
	    type: ['BALANCING', 'INVERSIONS', 'YOGA FOR STRENGTH'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/HandstandPose.jpg',
	    description: ['Perform Adho Mukha Svanasana (Downward-Facing Dog Pose) with your fingertips an inch or two away from a wall, hands shoulder-width. If your shoulders are tight, turn your index fingers out slightly; otherwise arrange them parallel to each other. If you\'re uneasy about this pose, you\'re not alone. To ready yourself for and secure yourself in this inversion, firm your shoulder blades against your back torso and pull them toward your tailbone. Then rotate your upper arms outward, to keep the shoulder blades broad, and hug your outer arms inward. Finally spread your palms and press the bases of the index fingers firmly against the floor.', 'Now bend one knee and step the foot in, closer to the wall (we\'ll say it\'s the left leg), but keep the other (i.e. right) leg active by extending through the heel. Then take a few practice hops before you try to launch yourself upside down. Sweep your right leg through a wide arc toward the wall and kick your left foot off the floor, immediately pushing through the heel to straighten the left knee. As both legs come off the ground, engage your deep core abdominal muscles to help lift your hips over your shoulders. Hop up and down like this several times, each time pushing off the floor a little higher. Exhale deeply each time you hop.', 'Hopping up and down like this may be all you can manage for now. Regularly practice strengthening poses, like Adho Mukha Svanasana and Plank Pose. Eventually you\'ll be able to kick all the way into the pose. At first your heels may crash into the wall, but again with more practice you\'ll be able to swing your heels up lightly to the wall.', 'If your armpits and groins are tight, your lower back may be deeply arched. To lengthen this area, draw your front ribs into your torso, reach your tailbone toward your heels, and slide your heels higher up the wall. Squeeze the outer legs together and roll the thighs in. Hang your head from a spot between your shoulder blades and gaze out into the center of the room.', 'To start stay in the pose 10 to 15 seconds, breathing deeply. Gradually work your way up to 1 minute. When you come down, be sure not to sink onto the shoulders. Keep your shoulder blades lifted and broad, and take one foot down at a time, each time with an exhalation. Stand in Uttanasana for 30 seconds to 1 minute. We tend to kick up with the same leg all the time: be sure to alternate your kicking leg, one day right, next day left.']
	  },
	  {
	    english: "Happy Baby Pose",
	    sanskrit: "Ananda Balasana",
	    type: ['CORE YOGA'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/249_hp_groove_16_450.jpg',
	    description: ['Lie on your back. With an exhale, bend your knees into your belly.', 'Inhale, grip the outsides of your feet with your hands (if you have difficulty holding the feet directly with your hands, hold onto a belt looped over each sole.) Open your knees slightly wider than your torso, then bring them up toward your armpits.', 'Position each ankle directly over the knee, so your shins are perpendicular to the floor. Flex through the heels. Gently push your feet up into your hands (or the belts) as you pull your hands down to create a resistance.']
	  },
	  {
	    english: "Head-to-Knee Forward Bend",
	    sanskrit: "Janu Sirsasana",
	    type: ['FORWARD BENDS', 'SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/251_hp_calm_10_450.jpg',
	    description: ['Sit on the floor with your legs straight in front of you. Use a blanket under your buttocks if necessary. Inhale, bend your right knee, and draw the heel back toward your perineum. Rest your right foot sole lightly against your inner left thigh, and lay the outer right leg on the floor, with the shin at a right angle to the left leg (if your right knee doesn\'t rest comfortably on the floor, support it with a folded blanket).', 'Press your right hand against the inner right groin, where the thigh joins the pelvis, and your left hand on the floor beside the hip. Exhale and turn the torso slightly to the left, lifting the torso as you push down on and ground the inner right thigh. Line up your navel with the middle of the left thigh. You can just stay here, using a strap to help you lengthen the spine evenly, grounding through the sitting bones.', 'Or, when you are ready, you can drop the strap and reach out with your right hand to take the inner left foot, thumb on the sole. Inhale and lift the front torso, pressing the top of the left thigh into the floor and extending actively through the left heel. Use the pressure of the left hand on the floor to increase the twist to the left. Then reach your left hand to the outside of the foot. With the arms fully extended, lengthen the front torso from the pubis to the top of the sternum.', 'Exhale and extend forward from the groins, not the hips. Be sure not to pull yourself forcefully into the forward bend, hunching the back and shortening the front torso. As you descend, bend your elbows out to the sides and lift them away from the floor.', 'Lengthen forward into a comfortable stretch. The lower belly should touch the thighs first, the head last. Stay in the pose anywhere from 1 to 3 minutes. Come up with an inhalation and repeat the instructions with the legs reversed for the same length of time.']
	  },
	  {
	    english: "Hero Pose",
	    sanskrit: "Virasana",
	    type: ['SEATED'],
	    picture: 'http://d3v7xustcq7358.cloudfront.net/wp-content/uploads/heropose.jpg',
	    description: ['Kneel on the floor (use a folded blanket or bolster to wedge between your calves and thighs if necessary), with your thighs perpendicular to the floor, and touch your inner knees together. Slide your feet apart, slightly wider than your hips, with the tops of the feet flat on the floor. Angle your big toes slightly in toward each other and press the top of each foot evenly on the floor.', 'Exhale and sit back halfway, with your torso leaning slightly forward. Wedge your thumbs into the backs of your knees and draw the skin and flesh of the calf muscles toward the heels. Then sit down between your feet.', 'If your buttocks don\'t comfortably rest on the floor, raise them on a block or thick book placed between the feet. Make sure both sitting bones are evenly supported. Allow a thumb\'s-width space between the inner heels and the outer hips. Turn your thighs inward and press the heads of the thigh bones into the floor with the bases of your palms. Then lay your hands in your lap, one on the other, palms up, or on your thighs, palms down.', 'Firm your shoulder blades against the back ribs and lift the top of your sternum like a proud warrior. Widen the collarbones and release the shoulder blades away from the ears. Lengthen the tailbone into the floor to anchor the back torso.', 'At first stay in this pose from 30 seconds to 1 minute. Gradually extend your stay up to 5 minutes. To come out, press your hands against the floor and lift your buttocks up, slightly higher than the heels. Cross your ankles underneath your buttocks, sit back over the feet and onto the floor, then stretch your legs out in front of you. It may feel good to bounce your knees up and down a few times on the floor.']
	  }
	];
})
// .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
//   $urlRouterProvider.otherwise("/random");

//   $stateProvider
//     .state('random', {
//       templateUrl: 'Random/random.html',
//       controller: 'poseCtrl',
//       url: '/random'
//     });
//     // $httpProvider.interceptors.push('AttachTokens');
// });
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
		if (number === parseInt(number) && number > 0) {	
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
		} else {
			alert('Please enter a positive integer')
		}
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
		if ($scope.current === $scope.randomPosesList[index]) {
			$scope.current = $scope.randomPosesList[0];
		}
		$scope.randomPosesList.splice(index, 1);
	}
	$scope.showPicture = function(index) {
		$scope.current = $scope.randomPosesList[index];
		$scope.started = true;
	}
});	
	













