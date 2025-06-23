function calculate() {
  const answers = [
    { id: 'q1', weight: 4, cost: [50, 150] },
    { id: 'q2', weight: 5, cost: [10000, 50000] },
    { id: 'q3', weight: 5, cost: [50000, 150000] },
    // q4 is handled separately below
    // { id: 'q4', weight: 3, cost: [25000, 25000] },
    { id: 'q5', weight: 3, cost: [25000, 100000] },
    { id: 'q6', weight: 2, cost: [5000, 20000] },
    { id: 'q7', weight: 3, cost: [10000, 75000] }
  ];

  let totalWeight = 0;
  let totalLow = 0;
  let totalHigh = 0;

  // Process standard Yes/No/Not Sure answers
  answers.forEach(q => {
    const value = document.getElementById(q.id).value;
    if (value === "Yes" || value === "Not sure" || value === "Within 12 months") {
      totalWeight += q.weight;
      totalLow += q.cost[0];
      totalHigh += q.cost[1];
    }
  });

  // 🔹 Employee headcount logic (q4)
  const empCount = parseInt(document.getElementById('q4').value);
  if (!isNaN(empCount) && empCount > 0) {
    let costPerEmp;

    if (empCount < 1000) costPerEmp = 180;
    else if (empCount < 3000) costPerEmp = 144;
    else if (empCount < 10000) costPerEmp = 126 * 12;       // monthly → annual
    else if (empCount < 20000) costPerEmp = 99 * 12;
    else if (empCount < 30000) costPerEmp = 81 * 12;
    else if (empCount < 40000) costPerEmp = 68.4 * 12;
    else if (empCount < 50000) costPerEmp = 69 * 12;
    else costPerEmp = 69 * 12; // for 50,000+ just reuse the top tier

    const empCost = empCount * costPerEmp;

    // Add to total
    totalWeight += 3; // risk weight for this question
    totalLow += empCost;
    totalHigh += empCost;
  }

  // Final result output
  const resultText = `Estimated Risk Score: ${totalWeight}<br>Estimated Cost Impact: £${totalLow.toLocaleString()} – £${totalHigh.toLocaleString()}`;
  document.getElementById("resultArea").innerHTML = resultText;
}
