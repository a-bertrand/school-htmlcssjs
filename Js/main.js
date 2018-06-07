// ------------------ ------------------ ------------------ ------------------ ------------------
// Boucle de parcours du DATA pour afficher sonc contenu   | Notre acces unique 
// ------------------ ------------------ ------------------ ------------------ ------------------

for(var j=0; j<3; j++) // loop for each column 
{
	var list = document.createElement('ul');
	var new_row = document.createElement('div');
    	new_row.className ="column";
        new_row.id="id"+j;
    // ------------------ ------------------ ------------------ ------------------
	document.getElementById('guitar_content').appendChild(new_row); 
    // ------------------ ------------------ ------------------ ------------------
	for (var i=-1; i<global_data.length; i++)
	{
        var item_list = document.createElement('li');
        if (i == -1 )                                                       // Ajouts des en-têtes pour les tableaux.
        {  
            if (j==0)   {item_list.appendChild(document.createTextNode(  "View"));} 
            if (j==1)   {item_list.appendChild(document.createTextNode( "Model"));}
            if (j==2)   {item_list.appendChild(document.createTextNode("Artist"));}
        }
        else
        {
            if (j==0)                                                       // column : j=0 -> IMG
            {
                var item_img = document.createElement('img');                   // Nouvel élèment type image
                    item_img.setAttribute ("src", global_data[i].getimgurl())
                    item_img.setAttribute ("onclick", "viewmore("+global_data[i].getid()+")")

                item_list.className="idguitare"+global_data[i].getid();
                item_list.appendChild(item_img);                                // on ajoute à la list 
            }       
            if (j==1) // column : j=1 -> model 
            {
                item_list.className="model idguitare"+global_data[i].getid();    // pour la recherche
                item_list.appendChild(document.createTextNode(""+global_data[i].getmodel() ));

                var caract1 = document.createElement('p');
                    caract1.appendChild(document.createTextNode(" Strings : "+global_data[i].getstrings() )); // " " avant pour pas perturber la recherche qui split par " "
                var caract2 = document.createElement('p');
                    caract2.appendChild(document.createTextNode(" Color : "+global_data[i].getcolor() ));    
                item_list.appendChild(caract1);
                item_list.appendChild(caract2);
            }                  
            if (j==2) // column : j=2 -> artist
            {
                // TODO split()
                item_list.className="artist idguitare"+global_data[i].getid();   // pour la recherche
                item_list.appendChild(document.createTextNode(""+global_data[i].getartist() ));
            }       
            // Add it to the list:
        }  
        list.appendChild(item_list); 
	}
    // Ajouter les futurs data en + 
	document.getElementById('id'+j).appendChild(list);
}
// ------------------ ------------------ ------------------ ------------------ ------------------
// Les infos suplémentaires. 
// ------------------ ------------------ ------------------ ------------------ ------------------

for(var j=1; j<=4; j++) // loop for each column 
{
    var list = document.createElement('ul');
    var new_row = document.createElement('div');
            new_row.className ="col-3"; // width 25%
            new_row.id="id+"+j;
    // ------------------ ------------------ ------------------ ------------------
    document.getElementById('guitar_content').appendChild(new_row); 
    // ------------------ ------------------ ------------------ ------------------

    for (var i=-1; i<moredata.length; i++)
    {
        var item_list = document.createElement('li');
        if (i == -1)                                                       // Ajouts des en-têtes pour les tableaux.
        {  
            if (j==1)   
            {   
                item_list.className="moreinfotitle";
                item_list.appendChild(document.createTextNode(         "DESCRIPTION"));
            } 
            if (j==2)   
            {
                item_list.className="moreinfotitle";
                item_list.appendChild(document.createTextNode(                "BODY"));
            }
            if (j==3)   
            {
                item_list.className="moreinfotitle";
                item_list.appendChild(document.createTextNode( "AVAILABLE VERSIONS"));
                        
            }
            if (j==4)   
            {
                item_list.className="moreinfotitle";
                item_list.appendChild(document.createTextNode( "AVAILABLE EQUIPMENT"));
            }
        }
        else
        {
            var id = i +1;
            if (j==1)                                                       // column : j=0 -> IMG
            {
                item_list.className="moreinfo descrp idguitaremore"+id    // pour la recherche
                item_list.appendChild(document.createTextNode(""+moredata[i][1] ));                              // on ajoute à la list 
            }       
            if (j==2) // column : j=1 -> model 
            {
                item_list.className="moreinfo body idguitaremore"+id;    // pour la recherche
                item_list.appendChild(document.createTextNode(""+moredata[i][2] ));
            }                  
            if (j==3) // column : j=2 -> artist
            {
                // TODO split()
                item_list.className="moreinfo vers idguitaremore"+id;   // pour la recherche
                item_list.appendChild(document.createTextNode(""+moredata[i][3]));
            } 
            if (j==4) // column : j=2 -> artist
            {
                // TODO split()
                item_list.className="moreinfo equip idguitaremore"+id;   // pour la recherche
                item_list.appendChild(document.createTextNode(""+moredata[i][4]));
            }       
            // Add it to the list:
        }  
         list.appendChild(item_list);
    }
      document.getElementById('id+'+j).appendChild(list);
} 