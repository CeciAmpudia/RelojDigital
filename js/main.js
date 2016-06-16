var semana = ['DOM.', 'LUN.', 'MAR.', 'MIÉ.', 'JUE.', 'VIE.', 'SAB.'];
var meses = ['ENE.', 'FEB.', 'MAR.', 'ABR.', 'MAY.', 'JUN.', 'JUL.', 'AGO.', 'SEP.', 'OCT.', 'NOV.', 'DIC.'];

$(document).ready(function(){

	// HORA
	function actualizarHora(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes();

	//	$("#hours").append(horas);
	//	$("#minutes").append(minutos);

		document.getElementById("clock").innerHTML= horas + " : " + minutos;

		var time = setTimeout(function(){actualizarHora()}, 1000);

		
		if(minutos < 10) {
			minutos = "0" + minutos
		};
	};
	// FECHA
	function fecha(){
		var fecha = new Date(),
		diaSemana = fecha.getDay(),
		dia = fecha.getDate(),
		mes = fecha.getMonth();

		$("#dayWeek").text(semana[diaSemana]);
		$("#day").append(dia);
		$("#month").text(meses[mes]);
	}
	// VISUALIZAR LA HORA Y FECHA
	actualizarHora();
	fecha();

	// CIUDADES
	$("#country").hide();

	$("#add").click(function(){
		$("#country").show();

		$("#X").click(function(){
			$("#country").fadeOut();
		})
	})

	// CHECKBOX

	$("#chicago").on('change', function() {
		if( $(this).is(':checked') ) {
			$("#boxCountry").append("<div id='box' class='chicago'></div>");
			$("#box").append("<span id='ciudad'> Chicago </span>");
			$("#box").append("<span id='clock' class='reloj'></span>");
		} else {
			$(".chicago").hide();
		}
	})

	$("#sauPaulo").on('change', function() {
		if( $(this).is(':checked') ) {
			$("#boxCountry").append("<div id='box2' class='sauPaulo'></div>");
			$("#box2").append("<span id='ciudad'> Sau Paulo </span>");
			$("#box2").append("<span id='clock' class='reloj'></span>");
		} else {
			$(".sauPaulo").hide();
		}
	})

	$("#santiago").on('change', function() {
		if( $(this).is(':checked') ) {
			$("#boxCountry").append("<div id='box3' class='santiago'></div>");
			$("#box3").append("<span id='ciudad'> Santiago </span>");
			$("#box3").append("<span id='clock' class='reloj'></span>");
		} else {
			$(".santiago").fadeOut();
		}
	})

	$("#mexico").on('change', function() {
		if( $(this).is(':checked') ) {
			$("#boxCountry").append("<div id='box4' class='mexico'></div>");
			$("#box4").append("<span id='ciudad'> Mexico </span>");
			$("#box4").append("<span id='clock' class='reloj'></span>");
		} else {
			$(".mexico").fadeOut();
		}
	})



});