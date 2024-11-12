// lois.js

// Initialize chart for Lois's weight
const ctx = document.getElementById('loisWeightChart').getContext('2d');
const loisWeightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],  // Dates go here
        datasets: [{
            label: 'Weight (kg)',
            data: [],  // Weight entries go here
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: false }
        }
    }
});

// Load data from localStorage and update the chart
const loadLoisData = () => {
    const savedData = JSON.parse(localStorage.getItem('loisWeightData')) || [];
    loisWeightChart.data.labels = savedData.map(entry => entry.date);
    loisWeightChart.data.datasets[0].data = savedData.map(entry => entry.weight);
    loisWeightChart.update();
};

// Save new data to localStorage and update the chart
document.getElementById('weightForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const weight = parseFloat(document.getElementById('weight').value);

    if (date && weight) {
        const newEntry = { date, weight };

        const savedData = JSON.parse(localStorage.getItem('loisWeightData')) || [];
        savedData.push(newEntry);
        localStorage.setItem('loisWeightData', JSON.stringify(savedData));

        loadLoisData();
        document.getElementById('weightForm').reset();
    }
});

// Load existing data on page load
loadLoisData();
// manny.js

// Initialize chart for Manny's weight
const ctx = document.getElementById('mannyWeightChart').getContext('2d');
const mannyWeightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Weight (kg)',
            data: [],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: false }
        }
    }
});

// Load data from localStorage and update the chart
const loadMannyData = () => {
    const savedData = JSON.parse(localStorage.getItem('mannyWeightData')) || [];
    mannyWeightChart.data.labels = savedData.map(entry => entry.date);
    mannyWeightChart.data.datasets[0].data = savedData.map(entry => entry.weight);
    mannyWeightChart.update();
};

// Save new data to localStorage and update the chart
document.getElementById('weightForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const weight = parseFloat(document.getElementById('weight').value);

    if (date && weight) {
        const newEntry = { date, weight };

        const savedData = JSON.parse(localStorage.getItem('mannyWeightData')) || [];
        savedData.push(newEntry);
        localStorage.setItem('mannyWeightData', JSON.stringify(savedData));

        loadMannyData();
        document.getElementById('weightForm').reset();
    }
});

// Load existing data on page load
loadMannyData();

