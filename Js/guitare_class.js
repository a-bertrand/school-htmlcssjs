//-------------------------------
//	Classe Guitare (ID, IMGURL, MODEL, ARTIST)
//-------------------------------
function Guitare (id,imgurl,model, artist, strings, color)
{

	this.id = id;			// Id permettant de faire des liens (recherche, section)
	this.imgurl = imgurl;	// lien de l'image
	this.model = model;		// infos divers
	this.artist = artist;	// infos divers

	
	this.strings = strings  //  pas présent de base mais nécessaire pour répondre au besoin du TP. 
	this.color  = color   //  pas présent de base mais nécessaire pour répondre au besoin du TP.
	//-------------------------------
	//	Méthodes : 
	//-------------------------------

	this.getid = function() 
	{
	       return this.id;
	}
	this.getimgurl = function() 
	{
	       return this.imgurl;
	}
	this.getmodel = function() 
	{
	       return this.model;
	}
	this.getartist = function() 
	{
	       return this.artist;
	}
	this.getstrings = function() 
	{
	       return this.strings;
	}
	this.getcolor = function() 
	{
	       return this.color;
	}
}
