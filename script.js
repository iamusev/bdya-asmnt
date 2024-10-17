let currentQuestionIndex = 0;
  const pgquestions = document.querySelectorAll('.question-block');
  const pageCounter = document.getElementById('pageCounter');
  //const prevBtn = document.getElementById('prevBtn');
  //const nextBtn = document.getElementById('nextBtn');
  const submitBtnContainer = document.getElementById('submitBtnContainer');

  // Hide all questions initially
  function showQuestion(index) {
    pgquestions.forEach((question, i) => {
      question.style.display = i === index ? 'block' : 'none';
    });

    // Update pagination count dynamically
    pageCounter.textContent = `Question ${index + 1} of ${pgquestions.length}`;
    
    //prevBtn.disabled = index === 0;
    //nextBtn.disabled = index === pgquestions.length - 1;
    submitBtnContainer.style.display = index === pgquestions.length - 1 ? 'block' : 'none'; // Show "Submit" on the last question
  }

  // Event listener for when a user selects an option
  function setupOptionListeners() {
    pgquestions.forEach((question, index) => {
      const inputs = question.querySelectorAll('input[type="radio"]');
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          // When an option is selected, go to the next question
          if (index < pgquestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
          } else {
            //alert('You have completed the quiz!');
            // Optionally submit the form or show a final page
          }
        });
      });
    });
  }

  // Initialize the first question
  showQuestion(currentQuestionIndex);
  setupOptionListeners();

let currentPage = 1;
  const questionsPerPage = 1;
  
  // Select all question blocks
  const questions = document.querySelectorAll('.question-block');
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Show questions for the current page
  function showPage(page) {
    // Hide all questions
    questions.forEach((question, index) => {
      question.style.display = 'none';
    });

    // Calculate which questions to show
    const start = (page - 1) * questionsPerPage;
    const end = start + questionsPerPage;

    for (let i = start; i < end && i < questions.length; i++) {
      questions[i].style.display = 'block';
    }

    // Update button states
  }

  // Event listeners for the buttons
 
  // Initialize first page
  showPage(currentPage);

let charts = {};  // Object to store multiple charts
function createMultipleCharts(chartId, data, labels) {
  const ctx = document.getElementById(chartId).getContext('2d');

  // If the chart with the specific ID already exists, destroy it
  if (charts[chartId]) {
    charts[chartId].destroy();
  }
}

document.getElementById('personalityForm').addEventListener('submit', function(event) {
  

  event.preventDefault();

  // Collect responses
  const formData = new FormData(event.target);
  let responses = {};
  console.log("resonses collected");

  // Gather all responses from the form
  formData.forEach((value, key) => {
    responses[key] = parseInt(value);
  });

  
  const questionMapping = {
    // Reserve-related questions
    q1: "Reserve",
    q2: "Reserve",
    q3: "Reserve",
    q25: "Reserve",
    q32: "Reserve",
    q43: "Reserve",
    q52: "Reserve",
    q67: "Reserve",
    q73: "Reserve",
    q88: "Reserve",
    q114: "Reserve",
  
    // Imagination-related questions
    q9: "Imagination",
    q12: "Imagination",
    q31: "Imagination",
    q58: "Imagination",
    q87: "Imagination",
    q92: "Imagination",
    q95: "Imagination",
    q111: "Imagination",
    q124: "Imagination",
    q129: "Imagination",
    q146: "Imagination",
    q151: "Imagination",
  
    // Orderliness-related questions
    q4: "Orderliness",
    q8: "Orderliness",
    q15: "Orderliness",
    q36: "Orderliness",
    q49: "Orderliness",
    q62: "Orderliness",
    q64: "Orderliness",
    q65: "Orderliness",
    q82: "Orderliness",
    q85: "Orderliness",
    q101: "Orderliness",
    q119: "Orderliness",
    q120: "Orderliness",
    q154: "Orderliness",
  
    // Boldness-related questions
    q5: "Boldness",
    q11: "Boldness",
    q21: "Boldness",
    q47: "Boldness",
    q56: "Boldness",
    q57: "Boldness",
    q76: "Boldness",
    q79: "Boldness",
    q102: "Boldness",
    q110: "Boldness",
    q122: "Boldness",
  
    // Emotional Resilience-related questions
    q6: "Emotional Resilience",
    q22: "Emotional Resilience",
    q29: "Emotional Resilience",
    q37: "Emotional Resilience",
    q50: "Emotional Resilience",
    q55: "Emotional Resilience",
    q60: "Emotional Resilience",
    q89: "Emotional Resilience",
    q109: "Emotional Resilience",
    q133: "Emotional Resilience",
    q138: "Emotional Resilience",
    q156: "Emotional Resilience",
    q160: "Emotional Resilience",
  
    // Distrust-related questions
    q7: "Distrust",
    q39: "Distrust",
    q74: "Distrust",
    q93: "Distrust",
  
  
    // Anxiety-related questions (Apprehension)
    q10: "Anxiety",
    q30: "Anxiety",
    q40: "Anxiety",
    q77: "Anxiety",
    q80: "Anxiety",
    q100: "Anxiety",
    q104: "Anxiety",
    q113: "Anxiety",
    q136: "Anxiety",
    q158: "Anxiety",
  
    // Autonomy-related questions (Independence)
    q35: "Independence",
    q54: "Independence",
    q66: "Independence",
    q150: "Independence",
  
    // Influence-related questions
    q34: "Influence",
    q44: "Influence",
    q68: "Influence",
    q83: "Influence",
    q86: "Influence",
    q112: "Influence",
    q132: "Influence",
    q135: "Influence",
    q137: "Influence",
    q142: "Influence",
    q145: "Influence",
    q159: "Influence",
  
    // Intellect-related questions
    q13: "Intellect",
    q16: "Intellect",
    q24: "Intellect",
    q42: "Intellect",
    q53: "Intellect",
    q91: "Intellect",
    q97: "Intellect",
    q131: "Intellect",
    q147: "Intellect",
    q155: "Intellect",
  
    // Liveliness-related questions
    q17: "Liveliness",
    q23: "Liveliness",
    q78: "Liveliness",
    q107: "Liveliness",
    q125: "Liveliness",
    q127: "Liveliness",
    q149: "Liveliness",
  
    // Readiness to Change-related questions
    q19: "Readiness to Change",
    q27: "Readiness to Change",
    q123: "Readiness to Change",
  
    // Restlessness-related questions
    q33: "Restlessness",
    q41: "Restlessness",
    q69: "Restlessness",
    q140: "Restlessness",
  
    // Rule-Bounded-related questions
    q45: "Rule-Bounded",
    q48: "Rule-Bounded",
    q71: "Rule-Bounded",
    q84: "Rule-Bounded",
    q98: "Rule-Bounded",
    q105: "Rule-Bounded",
    q116: "Rule-Bounded",
    q139: "Rule-Bounded",
    q143: "Rule-Bounded",
    q152: "Rule-Bounded",
  
    // Sensitivity-related questions
    q14: "Sensitivity",
    q18: "Sensitivity",
    q38: "Sensitivity",
    q46: "Sensitivity",
    q51: "Sensitivity",
    q59: "Sensitivity",
    q63: "Sensitivity",
    q70: "Sensitivity",
    q94: "Sensitivity",
    q96: "Sensitivity",
    q103: "Sensitivity",
    q106: "Sensitivity",
    q108: "Sensitivity",
    q115: "Sensitivity",
    q118: "Sensitivity",
    q121: "Sensitivity",
    q128: "Sensitivity",
    q130: "Sensitivity",
    q141: "Sensitivity",
    q144: "Sensitivity",
    q148: "Sensitivity",
    q153: "Sensitivity",
    q157: "Sensitivity",
  
    // Warmth-related questions
    q20: "Warmth",
    q26: "Warmth",
    q28: "Warmth",
    q61: "Warmth",
    q72: "Warmth",
    q75: "Warmth",
    q81: "Warmth",
    q90: "Warmth",
    q99: "Warmth",
    q117: "Warmth",
    q126: "Warmth",
    q134: "Warmth",
  };

  // Initialize scores for each personality dimension
  let scores = {
    "Reserve": 0,
    "Imagination": 0,
    "Orderliness": 0,
    "Boldness": 0,
    "Emotional Resilience": 0,
    "Distrust": 0,
    "Anxiety": 0,
    "Independence": 0,
    "Influence": 0,
    "Intellect": 0,
    "Liveliness": 0,
    "Readiness to Change": 0,
    "Restlessness": 0,
    "Rule-Bounded": 0,
    "Sensitivity": 0,
    "Warmth": 0
  };

  // Summing up responses based on the dimension they map to
  for (const [question, response] of Object.entries(responses)) {
    const dimension = questionMapping[question];
    if (dimension) {
      scores[dimension] += response;
    }
  }

  // Normalize the scores (optional)
  for (const dimension in scores) {
    scores[dimension] = (scores[dimension] / 10) * 10;
  }

  // Generate the report
  displayGlobalDomainScores(scores);
  generateReport(scores);
});

// Global Domains Chart
function displayGlobalDomainScores(scores) {
  // Dynamically set the scale for each global domain
  setGlobalDomainScore('apprehension', scores['Anxiety'], -10, 10);
  setGlobalDomainScore('autonomy', scores['Autonomy'], -10, 10);
  setGlobalDomainScore('determination', scores['Determination'], -10, 10);
  setGlobalDomainScore('extraversion', scores['Extraversion'], -10, 10);
  setGlobalDomainScore('willpower', scores['Willpower'], -10, 10);

  // Show the divs containing the results
  document.getElementById('results').style.display = 'block';
}

// Helper function to set global domain score
function setGlobalDomainScore(id, score, min, max) {
  const bar = document.getElementById(`${id}-bar`);
  const scoreText = document.getElementById(`${id}-score`);

  // Normalize the score for percentage fill (from 0% to 100%)
  const percentage = ((score - min) / (max - min)) * 100;
  bar.style.width = `${percentage}%`;

  // Set the score text
  scoreText.textContent = score;
}

function generateReport(scores) {
  const reportDiv = document.getElementById('report');
  reportDiv.innerHTML = '<h2>Personality Report</h2>';

 

  

const sixteenDimensionsCtx = document.getElementById('sixteenPersonalityDimensionsChart');
new Chart(sixteenDimensionsCtx, {
  type: 'line',  // Change to 'line' for a trend chart
  data: {
    labels: ['Anxiety', 'Boldness', 'Distrust', 'Emotional Resilience', 'Independence',
             'Influence', 'Intellect', 'Liveliness', 'Orderliness', 'Readiness to Change',
             'Reserve', 'Restlessness', 'Rule-Bounded', 'Sensitivity', 'Warmth'],
    datasets: [{
      label: 'Sixteen Personality Dimensions',
      data: [
        scores['Anxiety'], scores['Boldness'], scores['Distrust'], scores['Emotional Resilience'], 
        scores['Independence'], scores['Influence'], scores['Intellect'],
        scores['Liveliness'], scores['Orderliness'], scores['Readiness to Change'],
        scores['Reserve'], scores['Restlessness'], scores['Rule-Bounded'], scores['Sensitivity'], scores['Warmth']
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
      fill: false,  // Do not fill under the line
      tension: 0.1  // To create smooth curves
    }]
  },
  options: {
    scales: {
      y: {
        min: -20,  // Set minimum value to -20
        max: 20,   // Set maximum value to 20
        beginAtZero: false
      }
    }
  }
});

const ctx = document.getElementById('myRadarChart').getContext('2d');
const data = {
    labels: ['Anxiety', 'Boldness', 'Distrust', 'Emotional Resilience', 'Independence',
             'Influence', 'Intellect', 'Liveliness', 'Orderliness', 'Readiness to Change',
             'Reserve', 'Restlessness', 'Rule-Bounded', 'Sensitivity', 'Warmth'],
    datasets: [{
        label: 'Sixteen Personality Dimensions',
        data: [scores['Anxiety'], scores['Boldness'], scores['Distrust'], scores['Emotional Resilience'], 
        scores['Independence'], scores['Influence'], scores['Intellect'],
        scores['Liveliness'], scores['Orderliness'], scores['Readiness to Change'],
        scores['Reserve'], scores['Restlessness'], scores['Rule-Bounded'], scores['Sensitivity'], scores['Warmth']], // Example data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Transparent background for line area
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',  // Data point color
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        tension: 0.1  // Smooth lines
    }]
};

function setGlobalDomainScore(id, score, min, max) {
  const bar = document.getElementById(`${id}-bar`);
  const scoreText = document.getElementById(`${id}-score`);

  // Normalize the score for percentage fill (from 0% to 100%)
  const percentage = ((score - min) / (max - min)) * 100;
  bar.style.width = `${percentage}%`;

  // Set the score text
  scoreText.textContent = score;
}

// Calculate UserScore for Apprehension based on Anxiety, Emotional Resilience, Distrust, and Sensitivity
let apprehensionUserScore = (0.5 * scores['Anxiety'])  // Anxiety has a strong influence
              + (0.2 * scores['Distrust']) // Distrust increases apprehension
              + (0.2 * scores['Sensitivity']) // Sensitivity can increase apprehension
              - (0.3 * scores['Emotional Resilience']); // Emotional Resilience reduces apprehension

// Normalize the score between -10 and 10
if (apprehensionUserScore > 10) apprehensionUserScore = 10;
if (apprehensionUserScore < -10) apprehensionUserScore = -10;
function getApprehensionDescription(score) {
  if (score >= -10 && score <= -3) {
    return "Individuals with low apprehension are generally calm and composed, even in stressful situations. They are less likely to worry excessively or feel anxious, and they manage pressure well. These individuals are confident in their abilities and are not easily shaken by uncertainty.";
  } else if (score >= -2 && score <= 2) {
    return "Individuals with moderate apprehension show a balanced emotional response to stress. They may experience some worry or self-doubt in challenging situations, but they are usually able to manage their feelings and remain composed. They handle everyday stressors well but may feel anxious when faced with unfamiliar or high-pressure situations.";
  } else if (score >= 3 && score <= 10) {
    return "Individuals with high apprehension are prone to anxiety and worry, especially in stressful or uncertain situations. They may frequently second-guess their decisions and feel overwhelmed by pressure. These individuals tend to be more sensitive to criticism and may struggle with self-confidence. High apprehension can make it difficult to stay calm and focused in high-stakes environments.";
  } else {
    return "Invalid score range.";  // Fallback if the score is outside the expected range
  }
}
function updateApprehensionDescription(score) {
  const apprehensionDescription = getApprehensionDescription(score);
  document.getElementById('apprehension-description').innerText = apprehensionDescription;
}
setGlobalDomainScore('apprehension', apprehensionUserScore, -10, 10);
updateApprehensionDescription(apprehensionUserScore);


// Calculate UserScore for Autonomy based on Independence, Influence, Boldness, and Rule-Boundedness
let autonomyUserScore = (0.4 * scores['Independence'])  // Independence is the strongest factor for autonomy
              + (0.2 * scores['Influence'])     // Influence reflects confidence in decision-making
              + (0.2 * scores['Readiness to Change']) // Readiness to Change indicates flexibility and adaptability
              + (0.1 * scores['Boldness'])      // Boldness reflects confidence in independent decisions
              - (0.2 * scores['Rule-Bounded']); // Rule-Boundedness reduces autonomy (preference for rules)

              
// Normalize the score between -10 and 10
if (autonomyUserScore > 10) autonomyUserScore = 10;
if (autonomyUserScore < -10) autonomyUserScore = -10;
function getAutonomyDescription(score) {
  if (score >= -10 && score <= -3) {
    return "Individuals with low autonomy tend to rely heavily on others for guidance and support. They are more likely to follow established norms, rules, or the decisions of others. These individuals may prefer structure and external direction over taking independent actions or making autonomous decisions.";
  } else if (score >= -2 && score <= 2) {
    return "Individuals with moderate autonomy display a balanced approach to decision-making. While they may be comfortable taking direction from others, they are also capable of working independently when necessary. These individuals value collaboration but are equally comfortable taking initiative.";
  } else if (score >= 3 && score <= 10) {
    return "Individuals with high autonomy prefer to work independently and make decisions on their own. They enjoy having control over their actions and are not reliant on external validation or approval. These individuals are self-directed and confident in their ability to take initiative and lead without external influence.";
  } else {
    return "Invalid score range.";  // Fallback if the score is outside the expected range
  }
}
function updateAutonomyDescription(score) {
  const autonomyDescription = getAutonomyDescription(score);
  document.getElementById('autonomy-description').innerText = autonomyDescription;
}
setGlobalDomainScore('autonomy', autonomyUserScore, -10, 10);
updateAutonomyDescription(autonomyUserScore);

// Calculate UserScore for Determination based on Orderliness, Boldness, Emotional Resilience, and Influence
let determinationUserScore = (0.4 * scores['Orderliness'])  // Orderliness reflects discipline and perseverance
              + (0.2 * scores['Boldness'])     // Boldness reflects confidence in pursuing goals
              + (0.2 * scores['Emotional Resilience']) // Emotional resilience helps in staying determined through challenges
              + (0.1 * scores['Influence'])    // Influence reflects drive and leadership in achieving goals
              - (0.2 * scores['Restlessness']); // Restlessness reduces determination (distracted or impulsive)

              
// Normalize the score between -10 and 10
if (determinationUserScore > 10) determinationUserScore = 10;
if (determinationUserScore < -10) determinationUserScore = -10;
function getDeterminationDescription(score) {
  if (score >= -10 && score <= -3) {
    return "Individuals with low determination tend to struggle with staying focused on long-term goals. They may give up easily when faced with challenges or lose motivation when tasks become difficult. These individuals might find it harder to push through adversity and prefer short-term, less challenging objectives.";
  } else if (score >= -2 && score <= 2) {
    return "Individuals with moderate determination show a balanced level of persistence and goal-orientation. They are capable of working through challenges but may require additional support or motivation during difficult times. While they are usually consistent in pursuing their goals, occasional setbacks might cause hesitation.";
  } else if (score >= 3 && score <= 10) {
    return "Individuals with high determination are highly persistent and goal-oriented. They excel in staying focused, even when faced with obstacles, and are committed to achieving long-term objectives. These individuals have strong self-discipline and the ability to push through adversity to reach their goals, showing great resilience in challenging situations.";
  } else {
    return "Invalid score range.";  // Fallback if the score is outside the expected range
  }
}
function updateDeterminationDescription(score) {
  const determinationDescription = getDeterminationDescription(score);
  document.getElementById('determination-description').innerText = determinationDescription;
}
setGlobalDomainScore('determination', determinationUserScore, -10, 10);
updateDeterminationDescription(determinationUserScore);

// Calculate UserScore for Extraversion based on Liveliness, Warmth, Influence, and Reserve
let extraversionUserScore = (0.4 * scores['Liveliness'])  // Liveliness is the strongest contributor to extraversion
              + (0.2 * scores['Warmth'])      // Warmth reflects sociability and emotional openness
              + (0.2 * scores['Influence'])   // Influence reflects the desire to lead and engage socially
              - (0.3 * scores['Reserve'])     // Reserve (introversion) negatively affects extraversion
              + (0.1 * scores['Sensitivity']); // Sensitivity can slightly contribute to social engagement

              
// Normalize the score between -10 and 10
if (extraversionUserScore > 10) extraversionUserScore = 10;
if (extraversionUserScore < -10) extraversionUserScore = -10;
function getExtraversionDescription(score) {
  if (score >= -10 && score <= -3) {
    return "Individuals with low extraversion tend to be more introverted and reserved. They may prefer solitude or smaller social gatherings, avoiding large groups or highly social environments. These individuals are more likely to enjoy reflective or solitary activities and may feel drained after extensive social interaction.";
  } else if (score >= -2 && score <= 2) {
    return "Individuals with moderate extraversion show a balanced approach to social situations. They are comfortable in both social and solitary environments, enjoying interactions with others but also valuing their time alone. These individuals may engage in social activities when necessary but don't always seek them out.";
  } else if (score >= 3 && score <= 10) {
    return "Individuals with high extraversion are highly sociable, outgoing, and energetic. They thrive in social settings, enjoy being around others, and often seek out opportunities to interact with people. These individuals are often seen as the life of the party, and they feel energized by social engagement and group activities.";
  } else {
    return "Invalid score range.";  // Fallback if the score is outside the expected range
  }
}
function updateExtraversionDescription(score) {
  const extraversionDescription = getExtraversionDescription(score);
  document.getElementById('extraversion-description').innerText = extraversionDescription;
}
setGlobalDomainScore('extraversion', extraversionUserScore, -10, 10);
updateExtraversionDescription(extraversionUserScore);

// Calculate UserScore for Willpower based on Orderliness, Emotional Resilience, Boldness, Determination, and Restlessness
let willpowerUserScore = (0.3 * scores['Orderliness'])  // Orderliness contributes the most to self-discipline and willpower
              + (0.2 * scores['Emotional Resilience']) // Emotional resilience helps maintain focus under pressure
              + (0.1 * scores['Boldness'])      // Boldness reflects confidence in sticking to decisions
              - (0.2 * scores['Restlessness']); // Restlessness negatively impacts willpower (leads to distraction)

              
// Normalize the score between -10 and 10
if (willpowerUserScore > 10) willpowerUserScore = 10;
if (willpowerUserScore < -10) willpowerUserScore = -10;
function getWillpowerDescription(score) {
  if (score >= -10 && score <= -3) {
    return "Individuals with low willpower may struggle to maintain focus on long-term goals and often give in to distractions or short-term impulses. They may find it difficult to stay disciplined, especially when faced with challenges or temptations, and may need external support or structure to remain on task.";
  } else if (score >= -2 && score <= 2) {
    return "Individuals with moderate willpower demonstrate a balanced level of self-discipline and focus. While they can stay committed to their goals, they may occasionally struggle with distractions or setbacks. However, they are generally able to get back on track and stay focused when necessary.";
  } else if (score >= 3 && score <= 10) {
    return "Individuals with high willpower possess strong self-discipline and persistence. They are able to resist distractions, maintain focus on their long-term goals, and push through challenges. These individuals exhibit a high level of commitment and are often seen as determined and resilient in the face of adversity.";
  } else {
    return "Invalid score range.";  // Fallback if the score is outside the expected range
  }
}
function updateWillpowerDescription(score) {
  const willpowerDescription = getWillpowerDescription(score);
  document.getElementById('willpower-description').innerText = willpowerDescription;
}
setGlobalDomainScore('willpower', willpowerUserScore, -10, 10);
updateWillpowerDescription(willpowerUserScore);


const options = {
    scales: {
        r: {
            angleLines: { display: false },  // Hide angle lines
            suggestedMin: -20,  // Min value
            suggestedMax: 20,   // Max value
            grid: {
                color: function(context) {
                    // Color different zones for the chart
                    const value = context.tick.value;
                    if (value > 10) return 'rgba(0, 255, 0, 0.1)';  // Green zone
                    if (value > 0) return 'rgba(255, 255, 0, 0.1)';  // Yellow zone
                    if (value <= 0) return 'rgba(255, 0, 0, 0.1)';   // Red zone
                }
            },
            ticks: {
                display: true,  // Show axis labels
                stepSize: 5,    // Control tick intervals
                callback: function(value) {
                    return value;  // Show raw values as labels
                }
            }
        }
    },
    plugins: {
        legend: {
            display: false  // Hide the legend if not needed
        }
    }
};

// Create the radar chart
new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});




/*
  // Global Domains Chart
  const ctx1 = document.createElement('canvas');
  reportDiv.appendChild(ctx1);

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Anxiety (Apprehension)', 'Autonomy', 'Determination', 'Imagination', 'Willpower'],
      datasets: [{
        label: 'Global Personality Domains',
        data: [scores['Anxiety'], scores['Autonomy'], scores['Determination'], scores['Imagination'], scores['Willpower']],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
  console.log("ctx1 generated");

  // Sixteen Personality Dimensions Chart
  const ctx2 = document.createElement('canvas');
  reportDiv.appendChild(ctx2);

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Anxiety', 'Boldness', 'Distrust', 'Emotional Resilience', 'Imagination', 'Independence',
               'Influence', 'Intellect', 'Liveliness', 'Orderliness', 'Readiness to Change',
               'Reserve', 'Restlessness', 'Rule-Bounded', 'Sensitivity', 'Warmth'],
      datasets: [{
        label: 'Sixteen Personality Dimensions',
        data: [
          scores['Anxiety'], scores['Boldness'], scores['Distrust'], scores['Emotional Resilience'], 
          scores['Independence'], scores['Influence'], scores['Intellect'],
          scores['Liveliness'], scores['Orderliness'], scores['Readiness to Change'],
          scores['Reserve'], scores['Restlessness'], scores['Rule-Bounded'], scores['Sensitivity'], scores['Warmth']
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
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
  console.log(ctx2);
  */

  // Profile Interpretation (basic textual interpretation)
  const interpretation = `
    <h3>Profile Interpretation</h3><br><div class="trait-report">
    <div class="trait-header"><span class="trait-title">Anxiety</span><span id="anxietyArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Anxiety'], 'anxiety')}</div>
    <div class="trait-header"><span class="trait-title">Boldness</span><span id="boldnessArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Boldness'], 'boldness')}</div>
    <div class="trait-header"><span class="trait-title">Distrust</span><span id="distrustArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Distrust'], 'distrust')}</div>
    <div class="trait-header"><span class="trait-title">Emotional Resilience</span><span id="emotional_ResilienceArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Emotional Resilience'], 'emotional_Resilience')}</div>
    <div class="trait-header"><span class="trait-title">Imagination</span><span id="imaginationArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Imagination'], 'imagination')}</div>
    <div class="trait-header"><span class="trait-title">Independence</span><span id="independenceArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Independence'], 'independence')}</div>
    <div class="trait-header"><span class="trait-title">Influence</span><span id="influenceArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Influence'], 'influence')}</div>
    <div class="trait-header"><span class="trait-title">Intellect</span><span id="intellectArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Intellect'], 'intellect')}</div>
    <div class="trait-header"><span class="trait-title">Liveliness</span><span id="livelinessArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Liveliness'], 'liveliness')}</div>
    <div class="trait-header"><span class="trait-title">Orderliness</span><span id="orderlinessArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Orderliness'], 'orderliness')}</div>
    <div class="trait-header"><span class="trait-title">Readiness to Change</span><span id="readiness_to_changeArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Readiness to Change'], 'readiness_to_change')}</div>
    <div class="trait-header"><span class="trait-title">Reserve</span><span id="reserveArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Reserve'], 'reserve')}</div>
    <div class="trait-header"><span class="trait-title">Restlessness</span><span id="restlessnessArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Restlessness'], 'restlessness')}</div>
    <div class="trait-header"><span class="trait-title">Rule-Bounded</span><span id="rule_boundedArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Rule-Bounded'], 'rule_bounded')}</div>
    <div class="trait-header"><span class="trait-title">Sensitivity</span><span id="sensitivityArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Sensitivity'], 'sensitivity')}</div>
    <div class="trait-header"><span class="trait-title">Warmth</span><span id="warmthArrow" class="trait-arrow">▲</span></div><div class="trait-description"> ${getInterpretation(scores['Warmth'], 'warmth')}</div>
    </div>
  `;

  reportDiv.innerHTML += interpretation;
}

// Function to dynamically update the arrow based on the user's score
function setTraitArrow(score, arrowElementId) {
  const arrowElement = document.getElementById(arrowElementId);
  
  if (score >= 12) {
    // Positive score: Show up arrow (▲)
    arrowElement.textContent = '▲';
    arrowElement.style.color = 'green';  // Green color for upward arrow
  } else if(score >= 7){
    arrowElement.textContent = '-';
    arrowElement.style.color = 'gray';  // Gray color for upward arrow
  }
  else {
    // Negative score: Show down arrow (▼)
    arrowElement.textContent = '▼';
    arrowElement.style.color = 'red';  // Red color for downward arrow
  }
}

function getInterpretation(score, dimension) {
  if (dimension === 'anxiety') {
    if (score >= 12) return "You are highly aware of potential dangers and tend to be careful in planning and decision-making, which can help you avoid risks.";
    if (score >= 7) return "You occasionally feel anxious but generally manage stress well in most situations.";
    return "You are prone to worrying excessively, which can lead to feelings of insecurity and difficulty in managing stress.";
    setTraitArrow(score, 'anxietyArrow');  // Sets arrows
  }
  
  if (dimension === 'boldness') {
    if (score >= 12) return "You are confident in taking risks and speaking your mind, even in the face of opposition. You excel in leadership roles and enjoy taking the initiative.";
    if (score >= 7) return "You are comfortable with both taking the lead and stepping back when needed, depending on the context.";
    return "You may avoid taking risks and often hesitate to speak up, possibly missing opportunities to assert yourself.";
    setTraitArrow(score, 'boldnessArrow');  // Sets arrows
  }
  
  if (dimension === 'distrust') {
    if (score >= 12) return "You are cautious about others' intentions and prefer to analyze situations before trusting people. This protects you from being taken advantage of.";
    if (score >= 7) return "You strike a balance between trust and skepticism, depending on the person and situation.";
    return "You may find it hard to trust others, which could lead to feelings of isolation or difficulty in building strong relationships.";
    setTraitArrow(score, 'distrustArrow');  // Sets arrows
  }
  
  if (dimension === 'emotional_Resilience') {
    if (score >= 12) return "You handle stress and adversity well, bouncing back from setbacks with a positive attitude. Challenges motivate you rather than discourage you.";
    if (score >= 7) return "You are generally calm under pressure but may occasionally struggle with particularly difficult situations.";
    return "You are prone to feeling overwhelmed by stress and might find it challenging to recover from emotional setbacks.";
    setTraitArrow(score, 'emotional_ResilienceArrow');  // Sets arrows
  }
  
  if (dimension === 'imagination') {
    if (score >= 12) return "You are highly creative and often come up with innovative solutions and ideas. You thrive in environments that allow for out-of-the-box thinking.";
    if (score >= 7) return "You appreciate both practical solutions and creative approaches, depending on the situation.";
    return "You tend to rely on traditional methods and may struggle with abstract or unconventional ideas.";
    setTraitArrow(score, 'imaginationArrow');  // Sets arrows
  }

  if (dimension === 'independence') {
    if (score >= 12) return "You are self-reliant and confident in making decisions without relying on others. You value autonomy and prefer working on your own.";
    if (score >= 7) return "You enjoy working independently but also appreciate collaboration when needed.";
    return "You may struggle with taking initiative and often depend on others for direction and decision-making.";
    setTraitArrow(score, 'independenceArrow');  // Sets arrows
  }

  if (dimension === 'influence') {
    if (score >= 12) return "You are skilled at persuading others and enjoy leading discussions. People naturally look to you for guidance and support.";
    if (score >= 7) return "You can take on leadership roles when necessary but are also comfortable being part of the team.";
    return "You may find it challenging to assert your opinions, and others might overlook your contributions in group settings.";
    setTraitArrow(score, 'influenceArrow');  // Sets arrows
  }

  if (dimension === 'intellect') {
    if (score >= 12) return "You enjoy intellectual challenges and love exploring complex ideas and concepts. You thrive in environments that stimulate your mind.";
    if (score >= 7) return "You appreciate intellectual discussions but do not always seek them out. You prefer a balanced approach.";
    return "You might struggle with complex or abstract thinking, preferring to focus on concrete and practical tasks.";
    setTraitArrow(score, 'intellectArrow');  // Sets arrows
  }

  if (dimension === 'liveliness') {
    if (score >= 12) return "You are full of energy and enthusiasm. You enjoy social events and have a positive outlook on life, often spreading joy to those around you.";
    if (score >= 7) return "You are generally positive but may prefer quieter moments from time to time.";
    return "You may feel lethargic or unmotivated, finding it difficult to engage in social activities or maintain a positive outlook.";
    setTraitArrow(score, 'livelinessArrow');  // Sets arrows
  }

  if (dimension === 'orderliness') {
    if (score >= 12) return "You are very organized and disciplined. You plan your tasks meticulously and are rarely caught off-guard by unexpected events.";
    if (score >= 7) return "You value structure but can adapt to a more flexible environment when necessary.";
    return "You might struggle with maintaining an organized system and could feel overwhelmed by the need for structure.";
    setTraitArrow(score, 'orderlinessArrow');  // Sets arrows
  }

  if (dimension === 'readiness_to_change') {
    if (score >= 12) return "You embrace new ideas and are quick to adapt to change. You enjoy experimenting with different approaches and are open to innovation.";
    if (score >= 7) return "You are open to change but prefer a structured approach, making adjustments gradually.";
    return "You may resist change and prefer sticking to familiar routines and methods, even when change is necessary.";
    setTraitArrow(score, 'readiness_to_changeArrow');  // Sets arrows
  }

  if (dimension === 'reserve') {
    if (score >= 12) return "You are selective in forming close relationships and prefer meaningful interactions with a few individuals rather than superficial ones with many.";
    if (score >= 7) return "You are comfortable with both alone time and social interactions, striking a balance between deep conversations and casual exchanges.";
    return "You may find it difficult to open up to others and could come across as distant or difficult to approach.";
    setTraitArrow(score, 'reserveArrow');  // Sets arrows
  }

  if (dimension === 'restlessness') {
    if (score >= 12) return "You are driven and always on the move, seeking new opportunities and challenges. Your energy helps you achieve your goals quickly.";
    if (score >= 7) return "You are generally content but may feel the occasional urge for excitement or a change of pace.";
    return "You may feel unsettled or dissatisfied, constantly searching for something new and finding it difficult to stick to one path.";
    setTraitArrow(score, 'restlessnessArrow');  // Sets arrows
  }

  if (dimension === 'rule_bounded') {
    if (score >= 12) return "You have a strong sense of responsibility and prefer to follow rules and guidelines closely. Others see you as reliable and dependable.";
    if (score >= 7) return "You follow rules when necessary but also know when to bend them to adapt to situations.";
    return "You may have difficulty conforming to rules and might struggle with authority or rigid structures.";
    setTraitArrow(score, 'rule_boundedArrow');  // Sets arrows
  }

  if (dimension === 'sensitivity') {
    if (score >= 12) return "You are empathetic and in tune with the emotions of others. People often come to you for support, and you excel in compassionate roles.";
    if (score >= 7) return "You are understanding of others' feelings but are also able to distance yourself when necessary.";
    return "You may struggle to cope with your own emotions or the emotions of others, finding it overwhelming at times.";
    setTraitArrow(score, 'sensitivityArrow');  // Sets arrows
  }

  if (dimension === 'warmth') {
    if (score >= 12) return "You are open and approachable, making it easy for others to connect with you. You enjoy nurturing relationships and value close connections.";
    if (score >= 7) return "You are friendly but may prefer to keep a healthy distance from others, depending on the situation.";
    return "You may come across as distant or cold, finding it challenging to form or maintain close relationships.";
    setTraitArrow(score, 'warmthArrow');  // Sets arrows
  }
}

