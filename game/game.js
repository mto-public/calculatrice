// nom du joueur
let playerName = prompt("Quel est votre nom ?");
// sauvegarde du nom du joueur
const rightPrice = Math.ceil(Math.random() * 100);
let playerGuess = 0;
let attempts = 5;

// Game loop
while (attempts > 0) {
  
  playerGuess = parseInt(prompt(`Devinez le juste prix entre 1 et 100. Il vous reste ${attempts} essais.`), 10);

  if (playerGuess > rightPrice) {
    alert("C'est moins");
    attempts--;
  } else if (playerGuess < rightPrice) {
    alert("C'est plus");
    attempts--;
  } else if (playerGuess === rightPrice) {
    alert(`Bravo ${playerName} tu as gagné !`);
    break;
  } else {
    alert("Ce n'est pas un nombre valide.");
    attempts--;
  }

  if (attempts === 0) {
    alert(`Désolé ${playerName}, vous avez utilisé tous vos essais. Le juste prix était ${rightPrice}.`);
  }
}
