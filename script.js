// Dummy data for demonstration
const analogInputs = [
    { id: 'A0', value: 2.5 },
    { id: 'A1', value: 3.3 },
    { id: 'A2', value: 1.8 },
];

const digitalPorts = [
    { id: 'D0', type: 'input', state: 'HIGH' },
    { id: 'D1', type: 'output', state: 'LOW' },
    { id: 'D2', type: 'input', state: 'LOW' },
    { id: 'D3', type: 'output', state: 'HIGH' },
];

function updateAnalogInputs() {
    const analogInputsContainer = document.getElementById('analog-inputs');
    analogInputsContainer.innerHTML = '';
    analogInputs.forEach(input => {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'port';
        inputDiv.innerHTML = `
            <div class="port-label">${input.id}</div>
            <div class="port-value">${input.value}V</div>
        `;
        analogInputsContainer.appendChild(inputDiv);
    });
}

function updateDigitalPorts() {
    const digitalPortsContainer = document.getElementById('digital-ports');
    digitalPortsContainer.innerHTML = '';
    digitalPorts.forEach(port => {
        const portDiv = document.createElement('div');
        portDiv.className = 'port';
        portDiv.innerHTML = `
            <div class="port-label">${port.id} (${port.type})</div>
            <label class="toggle-switch">
                <input type="checkbox" ${port.state === 'HIGH' ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        `;
        digitalPortsContainer.appendChild(portDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateAnalogInputs();
    updateDigitalPorts();
});
