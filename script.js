function calculate() {
      const answers = [
        { id: 'q1', weight: 4, cost: [50, 150] },
        { id: 'q2', weight: 5, cost: [10000, 50000] },
        { id: 'q3', weight: 5, cost: [50000, 150000] },
        { id: 'q4', weight: 3, cost: [25000, 25000] },
        { id: 'q5', weight: 3, cost: [25000, 100000] },
        { id: 'q6', weight: 2, cost: [5000, 20000] },
        { id: 'q7', weight: 3, cost: [10000, 75000] }
      ];

      let totalWeight = 0;
      let totalLow = 0;
      let totalHigh = 0;

      answers.forEach(q => {
        const value = document.getElementById(q.id).value;
        if (value === "Yes" || value === "Not sure" || value === "Within 12 months") {
          totalWeight += q.weight;
          totalLow += q.cost[0];
          totalHigh += q.cost[1];
        }
      });

      const resultText = `Estimated Risk Score: ${totalWeight}<br>Estimated Cost Impact: £${totalLow.toLocaleString()} – £${totalHigh.toLocaleString()}`;
      document.getElementById("resultArea").innerHTML = resultText;
    }