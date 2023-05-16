
const numPointsInput = 0;
const numPoints = 0;
const sum = 0;

function generateSum(numPoints) {
  let sum = 0;
  const points = generatePoints(numPoints);
  for (let i = 0; i < numPoints; i++) {
    const x = points[i];
    const y = x ** 2;
    sum += y;
  }
  return sum;
}

function generatePoints(numPoints) {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const point = Math.random(); 
    points.push(point);
  }
  return points;
}


function calculateMonteCarloIntegration(numPoints, sum) {
  const interval = 1 / (numPoints - 1);
  const area = sum * interval;
  return area;
}

function calculateMean(numPoints, sum) {
  const mean = sum / numPoints;
  return mean;
}

function calculateSD(numPoints, mean) {
  let sdSum = 0;
  const points = generatePoints(numPoints);

  for (let i = 0; i < numPoints; i++) {
    const x = points[i];
    const y = x ** 2;
    sdSum += (y - mean) ** 2;
  }

  const mse = Math.sqrt(sdSum / (numPoints - 1));
  return mse;
}

function calculateAbsoluteError(calculatedValue, trueValue) {
  const absError = Math.abs(calculatedValue - trueValue);
  return absError;
}

function Button1() {
      const numPointsInput = document.getElementById("numPoints");
      const numPoints = parseInt(numPointsInput.value, 10);
      const sum = generateSum(numPoints);

      const area = calculateMonteCarloIntegration(numPoints, sum);
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = "Інтеграл методом Монте-Карло для функції f(x) = x^2 з " + numPoints + " точками, дорівнює: " + area.toFixed(4);
      const resultDiv2 = document.getElementById("result2");
      resultDiv2.textContent = "";
      const resultDiv3 = document.getElementById("result3");
      resultDiv3.textContent = "";
      const resultDiv4 = document.getElementById("result4");
      resultDiv4.textContent = "";

}


function Button2() {
      const numPointsInput = document.getElementById("numPoints");
      const numPoints = parseInt(numPointsInput.value, 10);
      const sum = generateSum(numPoints);
      
      const area = calculateMonteCarloIntegration(numPoints, sum);
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = "Інтеграл методом Монте-Карло для функції f(x) = x^2 з " + numPoints + " точками, дорівнює: " + area.toFixed(8);

      const mean = calculateMean(numPoints, sum);
      const resultDiv2 = document.getElementById("result2");
      resultDiv2.textContent = "Математичне очікування: " + mean.toFixed(8);

      const sd = calculateSD(numPoints, mean);
      const resultDiv3 = document.getElementById("result3");
      resultDiv3.textContent = "Середньо-квадратичне відхилення: " + sd.toFixed(8);

      const trueValue = calculateMonteCarloIntegration(1000000, generateSum(1000000));
      const absError = calculateAbsoluteError(area, trueValue);
      const resultDiv4 = document.getElementById("result4");
      resultDiv4.textContent = "Абсолютна похибка: " + absError.toFixed(8);
}

