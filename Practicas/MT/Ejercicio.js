const unidades = {
    Temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    Distancia: ["Metros", "Kilómetros", "Millas", "Pies", "Pulgadas"],
    Tiempo: ["Años", "Días", "Horas", "Segundos"],
    Moneda: ["MXN", "USD", "Euro"]
};

const tipoUnidadSelect = document.getElementById('tipoUnidad');
const dynamicSelectsContainer = document.getElementById('dynamic-selects');


tipoUnidadSelect.addEventListener('change', function() {
    const tipoSeleccionado = this.value;
    
   
    dynamicSelectsContainer.innerHTML = '';

 
    if (tipoSeleccionado) {
        const listaDeUnidades = unidades[tipoSeleccionado];
        const selectDe = crearSelect('De:', 'unidadDe', listaDeUnidades);
        const selectA = crearSelect('A:', 'unidadA', listaDeUnidades);
        dynamicSelectsContainer.appendChild(selectDe);
        dynamicSelectsContainer.appendChild(selectA);
    }
});

function crearSelect(labelTexto, selectId, opciones) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = labelTexto;
    
    const select = document.createElement('select');
    select.id = selectId;


    opciones.forEach(opcion => {
        const optionElement = document.createElement('option');
        optionElement.value = opcion;
        optionElement.textContent = opcion;
        select.appendChild(optionElement);
    });

    groupDiv.appendChild(label);
    groupDiv.appendChild(select);
    
    return groupDiv;
}

function convertir(){
    const valor = parseFloat(document.getElementById('valor').value);
    const tipoUnidad = document.getElementById('tipoUnidad').value;
    const resultadoP = document.getElementById('resultado');

    if (isNaN(valor)) {
        resultadoP.innerHTML = "Por favor, inserta un número válido.";
        return;
    }

    const unidadDeSelect = document.getElementById('unidadDe');
    const unidadASelect = document.getElementById('unidadA');
    if (!unidadDeSelect || !unidadASelect) {
        resultadoP.innerHTML = "Por favor, selecciona un tipo de unidad.";
        return;
    }

    const unidadDe = unidadDeSelect.value;
    const unidadA = unidadASelect.value;

    let resultado = 0;

    if (unidadDe === unidadA) {
        resultado = valor;
    } else {
        switch (tipoUnidad) {
            case 'Temperatura':
                resultado = convertirTemperatura(valor, unidadDe, unidadA);
                break;

            case 'Distancia':
                resultado = convertirDistancia(valor, unidadDe, unidadA);
                break;

            case 'Tiempo':
                resultado = convertirTiempo(valor, unidadDe, unidadA);
                break;

            case 'Moneda':
                resultado = convertirMoneda(valor, unidadDe, unidadA);
                break;

            default:
                resultadoP.innerHTML = "Tipo de conversión no soportado.";
                return;
        }
    }


    resultadoP.innerHTML = `${valor} ${unidadDe} = ${resultado.toFixed(6)} ${unidadA}`;
}

// Función para conversión de temperatura
function convertirTemperatura(valor, de, a) {
    let valorEnCelsius;
    
    switch (de) {
        case 'Celsius':
            valorEnCelsius = valor;
            break;
        case 'Fahrenheit':
            valorEnCelsius = (valor - 32) * 5 / 9;
            break;
        case 'Kelvin':
            valorEnCelsius = valor - 273.15;
            break;
    }

    switch (a) {
        case 'Celsius':
            return valorEnCelsius;
        case 'Fahrenheit':
            return (valorEnCelsius * 9 / 5) + 32;
        case 'Kelvin':
            return valorEnCelsius + 273.15;
        default:
            return 0;
    }
}

// Función para conversión de distancia
function convertirDistancia(valor, de, a) {
    let valorEnMetros;
    
    switch (de) {
        case 'Metros':
            valorEnMetros = valor;
            break;
        case 'Kilómetros':
            valorEnMetros = valor * 1000;
            break;
        case 'Millas':
            valorEnMetros = valor * 1609.34;
            break;
        case 'Pies':
            valorEnMetros = valor * 0.3048;
            break;
        case 'Pulgadas':
            valorEnMetros = valor * 0.0254;
            break;
    }

    // Convertir de metros a la unidad destino
    switch (a) {
        case 'Metros':
            return valorEnMetros;
        case 'Kilómetros':
            return valorEnMetros / 1000;
        case 'Millas':
            return valorEnMetros / 1609.34;
        case 'Pies':
            return valorEnMetros / 0.3048;
        case 'Pulgadas':
            return valorEnMetros / 0.0254;
        default:
            return 0;
    }
}

// Función para conversión de tiempo
function convertirTiempo(valor, de, a) {
    let valorEnSegundos;
    
    switch (de) {
        case 'Segundos':
            valorEnSegundos = valor;
            break;
        case 'Horas':
            valorEnSegundos = valor * 3600;
            break;
        case 'Días':
            valorEnSegundos = valor * 86400;
            break;
        case 'Años':
            valorEnSegundos = valor * 31536000; // 365 días
            break;
    }

    switch (a) {
        case 'Segundos':
            return valorEnSegundos;
        case 'Horas':
            return valorEnSegundos / 3600;
        case 'Días':
            return valorEnSegundos / 86400;
        case 'Años':
            return valorEnSegundos / 31536000;
        default:
            return 0;
    }
}

// Función para conversión de moneda
function convertirMoneda(valor, de, a) {
    const tasas = {
        USD: { 
            MXN: 20.10, 
            Euro: 0.92,
            USD: 1
        },
        MXN: { 
            USD: 0.049, 
            Euro: 0.045,
            MXN: 1
        },
        Euro: { 
            USD: 1.09, 
            MXN: 22.00,
            Euro: 1
        }
    };

    return valor * tasas[de][a];
}

