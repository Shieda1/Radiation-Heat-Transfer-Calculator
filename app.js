// https://calculator.swiftutors.com/radiation-heat-transfer-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const radiationHeatTransferRadio = document.getElementById('radiationHeatTransferRadio');
const higherTemperatureRadio = document.getElementById('higherTemperatureRadio');
const colderTemperatureRadio = document.getElementById('colderTemperatureRadio');
const crossSectionalAreaRadio = document.getElementById('crossSectionalAreaRadio');

let radiationHeatTransfer;
const σ = 5.6703e-8;
let higherTemperature = v1;
let colderTemperature = v2;
let crossSectionalArea = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

radiationHeatTransferRadio.addEventListener('click', function() {
  variable1.textContent = '(THot) Higher Temperature (°C)';
  variable2.textContent = '(TCold) Colder Temperature (°C)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  higherTemperature = v1;
  colderTemperature = v2;
  crossSectionalArea = v3;
  result.textContent = '';
});

higherTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Radiation Heat Transfer (W)';
  variable2.textContent = '(TCold) Colder Temperature (°C)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  radiationHeatTransfer = v1;
  colderTemperature = v2;
  crossSectionalArea = v3;
  result.textContent = '';
});

colderTemperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Radiation Heat Transfer (W)';
  variable2.textContent = '(THot) Higher Temperature (°C)';
  variable3.textContent = '(A) Cross Sectional Area (m²)';
  radiationHeatTransfer = v1;
  higherTemperature = v2;
  crossSectionalArea = v3;
  result.textContent = '';
});

crossSectionalAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Radiation Heat Transfer (W)';
  variable2.textContent = '(THot) Higher Temperature (°C)';
  variable3.textContent = '(TCold) Colder Temperature (°C)';
  radiationHeatTransfer = v1;
  higherTemperature = v2;
  colderTemperature = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(radiationHeatTransferRadio.checked)
    result.textContent = `Radiation Heat Transfer = ${computeRadiationHeatTransfer().toFixed(2)} W`;

  else if(higherTemperatureRadio.checked)
    result.textContent = `Higher Temperature = ${computeHigherTemperature().toFixed(2)} °C`;

  else if(colderTemperatureRadio.checked)
    result.textContent = `Colder Temperature = ${computeColderTemperature().toFixed(2)} °C`;

  else if(crossSectionalAreaRadio.checked)
    result.textContent = `Cross Sectional Area = ${computeCrossSectionalArea().toFixed(2)} m²`;
})

// calculation

function computeRadiationHeatTransfer() {
  return σ * (Math.pow(Number(higherTemperature.value), 4) - Math.pow(Number(colderTemperature.value), 4)) * Number(crossSectionalArea.value);
}

function computeHigherTemperature() {
  return Math.pow((Number(radiationHeatTransfer.value) / (σ * Number(crossSectionalArea.value))) + Math.pow(Number(colderTemperature.value), 4), 1/4);
}

function computeColderTemperature() {
  return Math.pow(Math.pow(Number(colderTemperature.value), 4) - (Number(radiationHeatTransfer.value) / (σ * Number(crossSectionalArea.value))) , 1/4);
}

function computeCrossSectionalArea() {
  return Number(radiationHeatTransfer.value) / (σ * (Math.pow(Number(higherTemperature.value), 4) - Math.pow(Number(colderTemperature.value), 4)));
}