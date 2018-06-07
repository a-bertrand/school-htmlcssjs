function viewmore(id) // Permet d'afficher les informations suplémentaires sur certaine guitare. ( 1 et 2 )
{
	if (id < 3 )
	{
		HideAll(); // on chache tous ( function prise du search.js -> Utilitaire)
		[].forEach.call(document.querySelectorAll('.idguitare'+id), function (el) 
 		{
	  		el.style.visibility = 	'visible';
	  		el.style.height 	=	'150px';					// permet d'éviter de laisser un espace de 150px
		});

		[].forEach.call(document.querySelectorAll('.idguitaremore'+id), function (el) 
 		{
 			
	  		el.style.display = 	'block';
	  		el.style.height 	=	'300px';					// permet d'éviter de laisser un espace de 150px
		});

		[].forEach.call(document.querySelectorAll('.moreinfotitle'), function (el) 
 		{
	  		el.style.display = 	'block';
	  		el.style.height 	=	'20px';						// permet d'éviter de laisser un espace de 150px
		});
		resizesection2(5); // on essaye de "resize" ( function prise du search.js -> Utilitaire)
	}	
	else 
	{
		alert("Pas d'informations suplémentaires pour cette guitare.")	
	}	
}