/*	
	SOMMAIRE :
	
	- 1 / Remplissage des tableaux associatifs ( mot-clé : id,id,id)
		-> pour les modeles + tableau géneral pour tous les mot clé
		-> pour les artistes + tableau géneral pour tous les mot clé

	- 2 / Function d'interaction. 
		-> remplissate des filtes
		-> "Event listener"
	- 3 / Fonction "utilitaire" pour factoriser un peu le code.
		-> les fonctions de comparaison et expression 
*/
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
// Global var 
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
var tab 		= [];
var tag_tab    	= new Object();		// table des tag -> r
var model_tab  	= new Object(); 		// table pour les model 
var artist_tab 	= new Object(); 		// tab artist 
var color_tab 	= new Object();
var strings_tab = new Object();
var elements;
var select; 
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
// 1 - Remplissage des tableaux associatif artiste et modèle
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
// But : Parcourir le DOM du HTML pour remplir des tableaux pour alimenter la recherche ou la selection.
/*
* Pour chaque ligne
*		-> liste de TXT 
		-Pour chaque TXT 
				-> test si apartient deja au tableau sinon on ajout son id (j)
*/
model_tab["All"]=",1,2,3,4,5,6"; 	// rajout d'une valeur au filtre qui reaffiche tous
elements = document.getElementsByClassName("model")
for (var i = 0; i < elements.length; i++) 				// voir si il l'element a deja été sauvegarder associer element à une liste d'ID 
{	
	var finmodel = false;
	var elementcontent = elements.item(i).textContent.split(" ");	// recuperation text	
	for (var j = 0 ; j< elementcontent.length; j++)			// boucle pour chaque text ( on saute le 0 )
	{															// surement pas besoin de faire deux conditions car tab_tab = model_tab
		var id = i+1;
		if (elementcontent[j] == ":" ){/* on fait rien */}
		else
		{
			// on alimente toujours le tag_tab
			if (tag_tab[elementcontent[j]] 	!= null) 			//test si il existe déjà dans la tagtable ou tablea de model
			{
				tag_tab[elementcontent[j]]   = tag_tab[elementcontent[j]]+","+id ;	
			}
			else
			{
				tag_tab[elementcontent[j]]   = ","+id ;
			}
			// -------------------- -------------------- --------------------
			if (elementcontent[j] == "Strings") 		// IDEM POUR COLOR  : Si on arrive au string, l'élèment d'apres est ":" ensuite la valeur qui nous interesse
			{
				finmodel = true 	// si on arrive au string pu besoin d'alimenter le tableau de model. 
				var strings = elementcontent[j+2]; // n a la valeur
				if (strings_tab[strings] !=  null )
				{
					strings_tab[strings] = strings_tab[strings] +","+id;
				}
				else
				{
					strings_tab[strings] = ","+id ;
				}
			}
			if (elementcontent[j] == "Color") 
			{
				var color = elementcontent[j+2]; // n a la valeur
				if (color_tab[color] !=  null )
				{
					color_tab[color] = color_tab[color] +","+id;
				}
				else
				{
					color_tab[color] = ","+id ;
				}
			}
			if (finmodel == false)
			{
				if (model_tab[elementcontent[j]] !=  null )
				{
					model_tab[elementcontent[j]] = model_tab[elementcontent[j]] +","+id;
				}
				else
				{
					model_tab[elementcontent[j]] = ","+id ;
				}
			}
		}	
	}
}

// -------------------- --------------------
// artist : 
// -------------------- --------------------
elements = document.getElementsByClassName("artist")
for (var i = 0; i < elements.length; i++) // Premiere boucle pour parcourir le tableau d'objet HTML
{
	// voir si il l'element a deja été sauvegarder
	// associer element à une liste d'ID 
	var elementcontent = elements.item(i).textContent.split(" ");	// parcours 
	// boucle pour pour asssocier le nom à la liste d'id
	for (var j = 0 ; j<= elementcontent.length; j++)
	{
		var id = i+1;
		if (tag_tab[elementcontent[j]] 	!= null) 			//test si il existe déjà dans la tagtable ou tablea de model
		{
			tag_tab[elementcontent[j]]   = tag_tab[elementcontent[j]]+","+id ;	
		}
		else
		{
			tag_tab[elementcontent[j]]   = ","+id ;
		}
		if (artist_tab[elementcontent[j]] !=  null )
		{
			artist_tab[elementcontent[j]] = artist_tab[elementcontent[j]] +","+id;
		}
		else
		{
			artist_tab[elementcontent[j]] = ","+id ;
		}
	}
	// fill the select
}
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
//						2 - INTERACTION
// Remplissage du selecteur de model.
// 2 selecteurs (1 selecteur qui remplit un selecteur) et un champ texte.
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
// EVENT LISTENER //
select = document.getElementById("select_1");
for (var element in model_tab) 
{
	var option = document.createElement("option");
		option.text  = element;
		option.value = model_tab[element];
	select.appendChild(option);
}

select = document.getElementById("select_2");
for (var element in strings_tab) 
{
	var option = document.createElement("option");
		option.text  = element;
		option.value = strings_tab[element];
	select.appendChild(option);
}
select = document.getElementById("select_3");
for (var element in color_tab) 
{
	var option = document.createElement("option");
		option.text  = element;
		option.value = color_tab[element];
	select.appendChild(option);
}
// EVENT FUNCTION //
// function qui réagis en fonction du changement du selecteur de MODEL 
function change_select(value)
{
	var id = value.split(","); 			// on a une liste d'ID 
	 
	HideAll(); // on chache tous
	for (var i = 1; i < id.length;i++) 					// on fait revenir ceux qui nous interesse.
	{
		[].forEach.call(document.querySelectorAll('.idguitare'+id[i]), function (el) 
	 	{
	  		el.style.visibility = 	'visible';
	  		el.style.height 	=	'150px';					// permet d'éviter de laisser un espace de 150px
		});
	}
	resizesection2(id.length-1);
}
function inputsearch()
{
	var search = document.getElementById("search-helper")  // on affiche le helper
	search.style.display = 'block';
	// lui ajouter un rectangle blanc avec les propositions du tag tab
	var element = document.getElementById("listtofill") // on récuperere la liste à remplir ( ul)
	for (var item in tag_tab)
	{
		var itemtolist = document.createElement('li');
		itemtolist.appendChild(document.createTextNode(item));  
		element.appendChild(itemtolist); 
	}
}
function hidesearch()
{
	var search = document.getElementById("search-helper")  // on affiche le helper
	search.style.display = 'none';
}
function searchbutton()
{
	var value = document.getElementById("input-search").value;	
	var id = null;

	// Test si un = ou autre caractere speciaux sont la chaine
	if (value.split("&NOT").length>1) // on coupe la valeur pour voir si elle possède le caractere &NOT
	{
		var sentence = value.split("&NOT");
		var list_id1 = findID(sentence[0]); // une liste d'id en fonction de son operateur
		var list_id2 = findID(sentence[1]); 

		console.log(list_id1,list_id2)
		id = compare (list_id1,list_id2,false);  // comapre deux tableaux -> renvoie les valeurs en commun si True, sinon valeur non égal
		if (id == " ,") {id=null;}
		console.log(id)
	}
	else if (value.split("&").length>1)
	{
		var sentence = value.split("&");
		var list_id1 = findID(sentence[0]); 
		var list_id2 = findID(sentence[1]); 
		console.log(list_id1,"//",list_id2)
		id = compare (list_id1,list_id2,true);
		if (id == " ,") {id=null;}
		console.log(id)
	}
	else 
	{
		id = findID(value); // retourne l'id ou la liste d'ID en fonction de l'operateur si il y a 
	}
	if (id==null) 
	{
		alert("mot clé incorect ou Guitare introuvable (Exemple : 'Strings=5' OU 'Color=black' OU Color=Violet&Strings=7 ) " )
	}
	else if (id==false) {} // pour qui'l ne se passe rien. (évite les doublons de messages après l'utilisation de finID())
	else
	{
		id = ""+id;		// pour pouvoir utiliser search
		if (id.search(",") != -1){id = id.split(",")}
		HideAll(); // on chache tous
		for (var i = 1; i < id.length;i++) 					// on fait revenir ceux qui nous interesse.
		{
			[].forEach.call(document.querySelectorAll('.idguitare'+id[i]), function (el) 
		 	{
		  		el.style.visibility = 	'visible';
		  		el.style.height 	=	'150px';					// permet d'éviter de laisser un espace de 150px
			});
		}
		resizesection2(id.length-1);
	}
}
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
//	3 - Utilitaire
// -------------------- -------------------- -------------------- -------------------- -------------------- --------------------
// Le return false ou null ne renvoie pas le message d'erreur ou évite les doublons de messages
//
function findID (mot) // mot peut être égale à Black ou Color=Black ou Strings=7 
{ 
	var tmp_id = 0; 
	if(mot.split("<=").length>1)  // parcours du tableau Strings_tab et si superieur alors add to id
	{
		var sentence = mot.split("<=");
		if (sentence[0]=="Strings")      
		{
			for (i=1; i<10;i++) // pas plus de 10 cordes par guitares !! 
			{
				if (strings_tab[""+i] != null)
				{
					if (i <= sentence[1] )
					{
						if (tmp_id == null) {tmp_id = strings_tab[""+i].split(",");}
						else
						{
							tmp_id =  tmp_id +strings_tab[""+i].split(",") ;
						}
					}
				}
			}
		}
		else { return null; }
		return tmp_id;
	}
	else if(mot.split(">=").length>1)  // parcours du tableau Strings_tab et si superieur alors add to id
	{
		
		var sentence = mot.split(">=");
		if (sentence[0]=="Strings")       
		{
			for (i=1; i<10;i++) 		// pas plus de 10 cordes par guitares !! 
			{
				if (strings_tab[""+i] != null)
				{
					if (i >= sentence[1] )
					{
						if (tmp_id == null) {tmp_id = strings_tab[""+i].split(",");}
						else
						{
							tmp_id =  tmp_id +strings_tab[""+i].split(",") ;
						}
					}
				}
			}
		}
		else { return null; }
		return tmp_id;
	}
	else if(mot.split("=").length>1)   // s'il y a un = dedans 
	{
		var sentence = mot.split("=") 
		if (sentence[0]=="Strings")
		{
			if (strings_tab[""+sentence[1]] == null)
			{
				alert("Désoler mais ce nombre de corde est invalide (Exemple : Strings=5)")
				return false;																	
			}
			else
			{
				tmp_id = strings_tab[""+sentence[1]].split(",");
			}
		}
		else if (sentence[0]=="Color")
		{
			if (color_tab[""+sentence[1]] == null)
			{
				alert("Désoler mais cette couleur est invalide 		(Exemple : Color=Black)")
				return false;																	
			}
			else
			{
				tmp_id = color_tab[""+sentence[1]].split(",");
			}
		}
		else 
		{return null;}
		return tmp_id;
	}
	else if(mot.split(">").length>1)  // parcours du tableau Strings_tab et si superieur alors add to id
	{
		var sentence = mot.split(">");
		if (sentence[0]=="Strings")       //
		{
			for (i=1; i<10;i++) // pas plus de 10 cordes par guitares !! 
			{
				if (strings_tab[""+i] != null)
				{
					if (i > sentence[1] )
					{
						if (tmp_id == null) {tmp_id = strings_tab[""+i].split(",");}
						else
						{
							tmp_id =  tmp_id +strings_tab[""+i].split(",") ;
						}
					}
				}
			}
		}
		else { return null; }
		return tmp_id;
	}
	else if(mot.split("<").length>1)  // parcours du tableau Strings_tab et si superieur alors add to id
	{
		var sentence = mot.split("<");
		if (sentence[0]=="Strings")       //
		{
			for (i=1; i<10;i++) // pas plus de 10 cordes par guitares !! 
			{
				if (strings_tab[""+i] != null)
				{
					if (i < sentence[1] )
					{
						if (tmp_id == null) {tmp_id = strings_tab[""+i].split(",");}
						else
						{
							tmp_id =  tmp_id +strings_tab[""+i].split(",") ;
						}
					}
				}
			}
		}
		else { return null; }
		return tmp_id;
	}
	else 
	{
		if (tag_tab[""+mot] != null)
		{
			tmp_id = tag_tab[""+mot].split(",");
			return tmp_id;
		}
		else { return null; }
	}
}
// -------------------- -------------------- -------------------- --------------------
// retourne une liste d'id commune entre deux tableau d'ID.
// permet de comparer.
// -------------------- -------------------- -------------------- --------------------
function compare(list_id1, list_id2, isSame)
{
	var tmp_id = null;
	var isnotexist;
	if(isSame==true)  // si on doit retourner les caracteres en commun Sinon on met les caractere différents
	{
		for(var i = 1; i<list_id1.length;i++) // parcours de la premiere liste 
		{
			for(var j = 1; j<list_id2.length;j++) // parcours de la seconde liste en comparant un élèment de l'autre liste
			{
				if (list_id1[i] == 	list_id2[j]) 
				{
					if (tmp_id == null) {tmp_id = ","+list_id1[i]}
					else 
					{
						tmp_id = tmp_id + ","+ list_id1[i];
					}
				}
			}
		}
	}
	else  // si on doit retourner les caracteres en commun Sinon on met les caractere différents
	{
		for(var i = 1; i<list_id1.length;i++)
		{
			isnotexist = false;
			for(var j = 1; j<list_id2.length;j++)
			{
				if (list_id1[i] == 	list_id2[j])
				{
					isnotexist = true;
				}
			}
			if(isnotexist == false)
			{
				if (tmp_id == null) {tmp_id = ","+list_id1[i]}
				else 
				{
					tmp_id = tmp_id+","+ list_id1[i];
				}
			}
		}
	}	
	return tmp_id;
}
// -------------------- -------------------- -------------------- --------------------
function isexist(tab,motcle) // retourne vraie si le motclé € à tab
{
	var i =0;
	while (i<tab.length)
	{
		if (tab[i]==motcle){return true}
		i++;
	}
	return false
}
// -------------------- -------------------- -------------------- --------------------
// Cache les guitares et les infos en suplément.
function HideAll ()
{
	for (var i = 1; i<=global_data.length; i++) 
	{
		[].forEach.call(document.querySelectorAll('.idguitare'+i), function (el) 
 		{
	  		el.style.visibility = 	'hidden';
	  		el.style.height 	=	'0px';					// permet d'éviter de laisser un espace de 150px
		});
	}	
	[].forEach.call(document.querySelectorAll('.moreinfo'), function (el) 
	{	
  		el.style.display = 	'none';
  		el.style.height 	=	'Opx';					// permet d'éviter de laisser un espace de 150px
	});

	[].forEach.call(document.querySelectorAll('.moreinfotitle'), function (el) 
	{
  		el.style.display = 	'none';
  		el.style.height 	=	'Opx';					// permet d'éviter de laisser un espace de 150px
	});
}
// -------------------- -------------------- -------------------- --------------------
// Permet de resizer la section 
function resizesection2 (nb)
{
	var nb = nb;
	var height = nb * 150 + 50 ; // 150 / guitare + 25 pout l'en-tête et 25 pour le bas
	// maj de la hauteur du block
	document.getElementById('Index_Section2').style.height = height+"px";
}