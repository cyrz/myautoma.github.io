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
	'img/stars.jpg',
	'img/median.png',
	'img/tick.png',
	'img/techBoard.jpg',
	'img/hqBoard.jpg',
	'img/priorityDivider.png',
	'img/token/circle.png',
	'img/token/circle-1.png',
	'img/token/circle-2.png',
	'img/token/blue.png',
	'img/token/green.png',
	'img/token/red.png',
	'img/token/yellow.png',
	'img/token/black.png',
	'img/dice/1.png',
	'img/dice/1inv.png',
	'img/dice/2.png',
	'img/dice/2inv.png',
	'img/dice/3.png',
	'img/dice/3inv.png',
	'img/dice/4.png',
	'img/dice/4inv.png',
	'img/dice/5.png',
	'img/dice/5inv.png',
	'img/dice/6.png',
	'img/dice/6inv.png',
	'img/actions/2-transmitters-left.png',
	'img/actions/2-transmitters-right.png',
	'img/actions/3-transmitters-left.png',
	'img/actions/3-transmitters-middle.png',
	'img/actions/3-transmitters-right.png',
	'img/actions/activateGyrodone.png',
	'img/actions/flyShipPlanet.png',
	'img/actions/flyShipPlanetandPlanetOrPulsar.png',
	'img/actions/flyShipPlanetandPlanetPlanetPulsar.png',
	'img/actions/takeGyrodone.png',
	'img/actions/technology1.png',
	'img/actions/technology2.png',
	'img/actions/technology3.png',
	'img/actions/technology4.png',
	'img/actions/technology5.png',
	'img/actions/technology6.png',
	'img/goals/goal-1-back.jpg',
	'img/goals/goal-1-front.jpg',
	'img/goals/goal-2-back.jpg',
	'img/goals/goal-2-front.jpg',
	'img/goals/goal-3-back.jpg',
	'img/goals/goal-3-front.jpg',
	'img/goals/goal-4-back.jpg',
	'img/goals/goal-4-front.jpg',
	'img/goals/goal-5-back.jpg',
	'img/goals/goal-5-front.jpg',
	'img/goals/goal-6-back.jpg',
	'img/goals/goal-6-front.jpg',
	'img/help/3-transmitters-example.png',
	'img/help/3-transmitters-middle.jpg',
	'img/help/flyNextPlanet.jpg',
	'img/help/flyTwoSystemsClaimPlanet.jpg',
	'img/help/flyTwoSystemsClaimPulsar.jpg',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
];
  
preloadAll(sources)
  .then(images => initiateGameElements())
  .catch(err => console.error('Failed', err));
