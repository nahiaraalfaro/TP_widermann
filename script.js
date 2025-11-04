document.addEventListener('DOMContentLoaded', () => {
  
    const colorAzulOscuro = '#003366'; 
    const colorAcento = '#4a90e2'; 


    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.textAlign = 'center'; 
    contenedorPrincipal.style.margin = '50px auto';
    contenedorPrincipal.style.maxWidth = '600px';


    const botonCita = document.createElement('button');
    botonCita.textContent = 'Ver la Cita de Coco Chanel';
    

    botonCita.style.padding = '12px 25px';
    botonCita.style.fontSize = '18px';
    botonCita.style.cursor = 'pointer';
    botonCita.style.backgroundColor = '#1c1c1c';
    botonCita.style.color = 'white';
    botonCita.style.border = 'none';
    botonCita.style.borderRadius = '25px';
    botonCita.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    botonCita.style.transition = 'background-color 0.3s ease';


    botonCita.onmouseover = () => { botonCita.style.backgroundColor = '#555'; };
    botonCita.onmouseout = () => { botonCita.style.backgroundColor = '#1c1c1c'; };
    

    const contenedorCita = document.createElement('p');
    contenedorCita.id = 'cita-coco-chanel';
    contenedorCita.textContent = "“La moda no es algo que existe solo en los vestidos. La moda está en el cielo, en la calle, tiene que ver con las ideas, con la forma en que vivimos y con lo que está pasando.”\n\n— Coco Chanel";
    

    contenedorCita.style.marginTop = '30px';
    contenedorCita.style.padding = '20px 25px';
    contenedorCita.style.fontSize = '1.1em';
    contenedorCita.style.lineHeight = '1.6';
    contenedorCita.style.borderLeft = `5px solid ${colorAcento}`; 
    contenedorCita.style.backgroundColor = colorAzulOscuro; 
    contenedorCita.style.color = 'white'; 
    contenedorCita.style.fontStyle = 'italic';
    contenedorCita.style.textAlign = 'left';
    contenedorCita.style.whiteSpace = 'pre-wrap';
    contenedorCita.style.borderRadius = '5px';
    contenedorCita.style.display = 'none';


    botonCita.addEventListener('click', () => {
        if (contenedorCita.style.display === 'none') {
            contenedorCita.style.display = 'block';
            botonCita.textContent = 'Ocultar la Cita';
        } else {
            contenedorCita.style.display = 'none';
            botonCita.textContent = 'Ver la Cita de Coco Chanel';
        }
    });


    contenedorPrincipal.appendChild(botonCita);
    contenedorPrincipal.appendChild(contenedorCita);
    

    document.body.appendChild(contenedorPrincipal); 
});