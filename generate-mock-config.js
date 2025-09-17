const fs = require('fs');

// Function to generate random planet data
function generatePlanet(id) {
  const types = ['Terrestrial', 'Gas Giant', 'Ice Giant', 'Dwarf'];
  const names = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
  const name = names[Math.floor(Math.random() * names.length)] + '-' + id;
  const type = types[Math.floor(Math.random() * types.length)];
  const size = Math.floor(Math.random() * 100000) + 1000; // km
  const distance = Math.floor(Math.random() * 1000000000) + 1000000; // km from sun
  const moons = Math.floor(Math.random() * 10);

  return {
    id,
    name,
    type,
    size,
    distance,
    moons
  };
}

// Generate a solar system with multiple planets
function generateSolarSystem(numPlanets) {
  const planets = [];
  for (let i = 1; i <= numPlanets; i++) {
    planets.push(generatePlanet(i));
  }
  return {
    systemName: 'Mock Solar System',
    planets
  };
}

// Main function
function main() {
  const numPlanets = process.argv[2] ? parseInt(process.argv[2]) : 8; // Default to 8 planets
  const solarSystem = generateSolarSystem(numPlanets);
  const jsonOutput = JSON.stringify(solarSystem, null, 2);

  // Output to console
  console.log(jsonOutput);

  // Optionally, write to a file
  fs.writeFileSync('mock-config.json', jsonOutput);
  console.log('Mock config saved to mock-config.json');
}

// Run the script
main();
