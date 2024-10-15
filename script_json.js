// Function to load the JSON data
function loadJsonData() {
  // Fetch the JSON file (make sure the file path is correct)
  fetch('AssestResult.json')
    .then(response => response.json())
    .then(jsonData => {
      // Process the data and update the webpage
      updateGlobalDimensions(jsonData[0].globalDimensions);
      updatePersonalityDimensions(jsonData[0].dimensions);
      updateProfileInterpretation(jsonData[0].dimensions);
      updateTopAndBottomTraits(jsonData[0].top3, jsonData[0].bottom3);
    })
    .catch(error => console.error('Error loading JSON:', error));
}

// Function to update global dimensions (Extraversion, Autonomy, etc.)
function updateGlobalDimensions(globalDimensions) {
  const globalDomainsData = [
    globalDimensions.Extraversion.score,
    globalDimensions.Autonomy.score,
    globalDimensions.Determination.score,
    globalDimensions.Will_Power.score,
    globalDimensions.Apprehension.score
  ];

  const ctx = document.getElementById('globalDomainsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Extraversion', 'Autonomy', 'Determination', 'Will Power', 'Apprehension'],
      datasets: [{
        label: 'Global Personality Domains',
        data: globalDomainsData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Function to update 16 Personality Dimensions
function updatePersonalityDimensions(dimensions) {
  const dimensionNames = dimensions.map(dim => dim.name);
  const dimensionScores = dimensions.map(dim => dim.value);

  const ctx = document.getElementById('sixteenPersonalityDimensionsChart').getContext('2d');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: dimensionNames,
      datasets: [{
        label: '16 Personality Dimensions',
        data: dimensionScores,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        r: {
          beginAtZero: true
        }
      }
    }
  });
}

// Function to update the profile interpretation section
function updateProfileInterpretation(dimensions) {
  const profileContent = dimensions.map(dim => `
    <h3>${dim.name}</h3>
    <p>${dim.description.replace('{{name}}', 'User')}</p>
  `).join('');
  
  document.getElementById('profile-interpretation').innerHTML = profileContent;
}

// Function to update Top 3 and Bottom 3 personality traits
function updateTopAndBottomTraits(top3, bottom3) {
  const top3Content = top3.map(trait => `<li>${trait.name}</li>`).join('');
  const bottom3Content = bottom3.map(trait => `<li>${trait.name}</li>`).join('');
  
  document.getElementById('top3-traits').innerHTML = top3Content;
  document.getElementById('bottom3-traits').innerHTML = bottom3Content;
}

// Call the function to load and display JSON data
window.onload = loadJsonData;
