//funcion flecha envio de selector

enviar= ()=>{
	let estacionAno= document.querySelector('select').value;
	if (estacionAno == 'invierno') {
		htmlCode = `
			<article id="invierno">
				<img src="../MEDIA/invierno.jpg">
				<h2><b>El invierno</b></h2>
				<p>Es una de las cuatro estaciones de las zonas templadas. Sigue al otoño y precede a la primavera. Esta estación se caracteriza por días más cortos, noches más largas y temperaturas más bajas a medida que nos alejamos de la línea ecuatorial. En algunos países de la zona intertropical se utiliza el término de estación lluviosa para denominar a una época de mayor precipitación y pluviosidad.</p>
			</article>`;
		document.getElementById('estaciones').innerHTML=htmlCode;
	}
	else if (estacionAno == 'verano') {
		htmlCode= `
			<article id="verano">
				<img src="../MEDIA/verano.jpg">
				<h2><b>El verano</b></h2>
				<p>Verano o estío es una de las cuatro estaciones de las zonas templadas. Es la más cálida de ellas. Sigue a la primavera y precede al otoño. El verano se caracteriza porque los días son más largos y las noches más cortas. Astronómicamente, el solsticio de verano (alrededor del 21 de diciembre el austral y el 21 de junio el boreal) marca el comienzo de esta estación y el equinoccio de otoño (alrededor del 21 de marzo el austral y el 23 de septiembre el boreal) marca el término de esta estación y el comienzo del otoño.</p>
			</article>`;
		document.getElementById('estaciones').innerHTML=htmlCode;
	}
	else if (estacionAno == 'otoño') {
		htmlCode= `
			<article id="otono">
				<img src="../MEDIA/otoño.jpg">
				<h2><b>El otoño</b></h2>
				<p>Es una de las cuatro estaciones del año de las zonas templadas. Sigue al verano y precede al invierno. Astronómicamente, comienza con el equinoccio de otoño (alrededor del 22 o 23 de septiembre en el hemisferio norte y del 20 o 21 de marzo en el hemisferio sur) y termina con el solsticio de invierno (alrededor del 21 de diciembre en el hemisferio norte y del 21 de junio en el hemisferio sur). En la zona intertropical inicia el 22 o 23 de septiembre hasta el 19 o 20 de marzo y en la zona intertropical va desde el 19 o 20 de marzo hasta el 22 o 23 de septiembre, abarcando seis meses.</p>
			</article>`;
		document.getElementById('estaciones').innerHTML=htmlCode;
	}
	else if (estacionAno == 'primavera') {
		htmlCode= `
			<article id="primavera">
				<img src="../MEDIA/primavera.jpg">
				<h2><b>La primavera</b></h2>
				<p>Primavera (del latín primo vere, principio de la primavera) es una de las cuatro estaciones del año, sigue al invierno y precede al verano. La definición y duración de la misma varía, desde el punto de vista meteorológico, es propia de las zonas templadas y corresponde a un tiempo intermedio entre la estación fría, el invierno, y cálida, el verano. Desde la astronomía, comienza en el equinoccio de primavera, que corresponde al 20/21 de marzo en el hemisferio norte y 21/23 de septiembre en el hemisferio sur. En el calendario, la primavera corresponde a los meses de marzo, abril y mayo, o bien, septiembre, octubre y noviembre.</p>
			</article>`;
		document.getElementById('estaciones').innerHTML=htmlCode;
	}
	else{
		alert('Debe seleccionar un número para ver la estación del año');
	}
	
}


