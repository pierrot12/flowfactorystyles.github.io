// Paramètres de base pour l'effet de neige
const snowflakesCount = 50; // Nombre de flocons de neige
const snowflakeCharacter = '❄'; // Caractère utilisé pour le flocon

// Création des flocons de neige
for (let i = 0; i < snowflakesCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.innerHTML = snowflakeCharacter;
  snowflake.style.position = 'absolute';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = `${Math.random() * 24 + 10}px`;
  snowflake.style.color = 'black';
  snowflake.style.top = `${Math.random() * window.innerHeight}px`;
  snowflake.style.left = `${Math.random() * window.innerWidth}px`;
  snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
  document.body.appendChild(snowflake);
}

// Animation CSS pour la chute des flocons
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(${window.innerHeight}px) rotate(360deg);
    }
  }
`;
document.head.appendChild(style);
