

$.ajax({
	url:"https://entreprise.data.gouv.fr/api/sirene/v1/full_text/afpa"
	datatype : html,
		success:function (data) {
			etablissement.sirene(' ')
			etablissement.siret(' ')
			etablissement.nom(' ')
			etablissement.adresse(' ')

	//script pioché sur Discord
			var iframe='<iframe src="https://maps.google.com/maps?q=';
			iframe += latitude+","+longitude;
			iframe += '&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>';
				 $("#etablissement").append(iframe);
			},
				
			error:function(xhr){
				console.log(xhr);
			}
			
})