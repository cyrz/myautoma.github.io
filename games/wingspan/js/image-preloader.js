const preload = src => new Promise(function(resolve, reject) {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    }
    img.onerror = reject;
    img.src = src;
  });
  
  const preloadAll = sources =>
    Promise.all(
      sources.map(
        preload));
  
  const sources = [
	'img/cards/1.jpg',
	'img/cards/2.jpg',
	'img/cards/3.jpg',
	'img/cards/4.jpg',
	'img/cards/5.jpg',
	'img/cards/6.jpg',
	'img/cards/7.jpg',
	'img/cards/8.jpg',
	'img/cards/9.jpg',
	'img/cards/10.jpg',
	'img/cards/11.jpg',
	'img/cubeValue/-1.png',
	'img/cubeValue/0.png',
	'img/cubeValue/1.png',
	'img/cubeValue/2.png',
	'img/cubeValue/3.png',
	'img/cubeValue/4.png',
	'img/cubeValue/5.png',
	'img/cubeValue/6.png',
	'img/cubeValue/7.png',
	'img/cubeValue/8.png',
	'img/cubeValue/11.png',
	'img/cubeValue/14.png',
	'img/cubeValue/20.png',
	'img/icons/dice-action-example.png',
	'img/icons/food-fish.png',
	'img/icons/food-fruit.png',
	'img/icons/food-invertebrate.png',
	'img/icons/food-mix.png',
	'img/icons/food-rodent.png',
	'img/icons/food-seed.png',
	'img/icons/food-wild.png',
	'img/icons/habitat-forest.png',
	'img/icons/habitat-grassland.png',
	'img/icons/habitat-wetland.png',
	'img/icons/nest-bowl.png',
	'img/icons/nest-cavity.png',
	'img/icons/nest-ground.png',
	'img/icons/nest-platform.png',
	'img/icons/wild-nest.png',
	'img/icons/predator.png',
	'img/icons/flock.png',
	'img/roundBonus/birdsInForest.jpg',
	'img/roundBonus/birdsInGrassland.jpg',
	'img/roundBonus/birdsInWetland.jpg',
	'img/roundBonus/bowlNestBirdsEggs.jpg',
	'img/roundBonus/cavityNestBirdsEggs.jpg',
	'img/roundBonus/eggsInBowlNests.jpg',
	'img/roundBonus/eggsInCavityNests.jpg',
	'img/roundBonus/eggsInForest.jpg',
	'img/roundBonus/eggsInGrassland.jpg',
	'img/roundBonus/eggsInGroundNests.jpg',
	'img/roundBonus/eggsInPlatformNests.jpg',
	'img/roundBonus/eggsInWetland.jpg',
	'img/roundBonus/groundNestBirdsEggs.jpg',
	'img/roundBonus/platformNestBirdsEggs.jpg',
	'img/roundBonus/setsOfThreeEggs.jpg',
	'img/roundBonus/totalBirds.jpg',
	'img/roundBonus/brownPowers.jpg',
	'img/roundBonus/birdsWithTuckedCards.jpg',
	'img/roundBonus/birdsInOneRow.jpg',
	'img/roundBonus/birdCardsInHand.jpg',
	'img/roundBonus/birdsWithNoEggs.jpg',
	'img/roundBonus/filledColumns.jpg',
	'img/roundBonus/foodCostOfPlayedBirds.jpg',
	'img/roundBonus/foodInPersonalSupply.jpg',
	'img/roundBonus/whiteAndNoPowers.jpg',
	'img/roundBonus/birdsOver4Points.jpg',
	'img/roundBonus/blueScoring.png',
	'img/roundBonus/blueScoring-inactive.png',
	'img/roundBonus/greenScoring.png',
	'img/roundBonus/greenScoring-inactive.png',
	'img/roundInfo/cube.png',
	'img/roundInfo/eggs.png',
	'img/roundInfo/faceDownCards.png',
	'img/roundInfo/faceUpCards.png',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
];
  
preloadAll(sources)
  .then(images => initiateGameElements())
  .catch(err => console.error('Failed', err));
