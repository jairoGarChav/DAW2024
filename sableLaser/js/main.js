 // Función para manejar el evento de cambio
 function handleSelectChange() {
    // Obtener el elemento <select> por su ID
    var selectElement = document.getElementById("jediSith");

    // Obtener el valor seleccionado
    var selectedValue = selectElement.value;

    // Imprimir el valor seleccionado en la consola (puedes hacer lo que quieras con este valor)
    console.log(selectedValue);


    // Obtener el elemento de la imagen por su ID
    var imageElement = document.querySelector("#fotoMangu");

    // Cambiar la fuente de la imagen según el valor seleccionado
    switch (selectedValue) {
        case "Obi":
            imageElement.src = "img/cal_kestis.png";
            break;
        case "Luke":
            imageElement.src = "img/luke_skywalker.png";
            break;
        case "Vader":
            imageElement.src = "img/anakin_skywalker.png";
            break;
        default:
            // Puedes proporcionar una imagen predeterminada o manejar otros casos aquí
            break;
    }
}

// Función para manejar el cambio de color
function handleColorChange() {
    // Obtener el valor de color seleccionado del input
    var selectedColor = document.getElementById("colorPicker").value;

    // Obtener el elemento <div> por su ID
    var saberColor = document.getElementById("colorSable");

    // Actualizar el color de fondo del <div> con el color seleccionado
    saberColor.style.background = "linear-gradient(90deg, "+selectedColor+", white, "+selectedColor+")";
    saberColor.style["boxShadow"] = "0 0 15px "+selectedColor+", 0 0 5px "+selectedColor+", 0 0 35px "+selectedColor;

    
}

handleColorChange();