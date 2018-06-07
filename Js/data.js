function GenerateDataContent (Data)
{
	var i = 0;
	var list_guitare = [];
	while (i < Data.length)
	{	
		var caract =  Data[i][4].split("||");
		// ------------
		var id 		= Data[i][0];
		var imgurl 	= Data[i][1];
		var model 	= Data[i][2];
		var artist 	= Data[i][3];
		var strings = caract[0];
		var color  = caract[1];

		list_guitare[i] = new Guitare (id,imgurl,model,artist,strings,color);
		i++;
	}
	return list_guitare;
}	

//-----------------------------------------------------------------------------------------------------------------
// Array of array : like a data. 
var fakeData = 
[
	[1,"IMG/img0.jpg",	"Guitar Duvell 7 Standard",	"John Wayne (BR) Rogerio Torres","7||Violet"],
	[2,"IMG/img1.jpg",	"Guitar Regius 7 Gothic",	"ODDLAND (FIN) Joni, Jussi, Sakari   NAMI (AND) Iván Marín Filipe Baldaia Ricard Tolosa","7||Black"],
	[3,"IMG/img2.jpg",	"Bass Be Elite",			"INSOMNIUM (FI) Niilo Sevänen Ville Friman   DIAL, Damian Wilson Band (NL) Kristoffer Gildenlöw","5||Wood"],
	[4,"IMG/img3.jpg",	"Bass Comodous Classic",	"Felton Crews Miles Davis, Carlos Santana   Lauro Farias (BR) O Rappa   Mohini Dey (IND)   Jimmy Haslip (USA) Yellowjackets","5||Wood"],
	[5,"IMG/img4.jpg",	"Guitar Regius 6 MM CW",			"PERIPHERY (USA) Misha 'Bulb' Mansoor","6||Wood"],
	[6,"IMG/img5.jpg",	"Guitar Legend 22 Katatonia",		"KATATONIA, BLOODBATH (S) Anders Blakkheim Nyström","6||White"]
];
// Generate global Data 
var global_data = GenerateDataContent(fakeData);  //  array of object( id,imgurl,model,artist(string need to be explode ('//')) )
//-----------------------------------------------------------------------------------------------------------------
// Quelques informations supplémentaires pour certaine guitare. 
// MODEL :  id, description, Specification, AVAILABLE VERSIONS, ADDITIONAL EQUIPMENT
//-----------------------------------------------------------------------------------------------------------------
var moredata = 
[
	[
		1,
		'I would like to announce my signature model crafted by Mayones Guitars. This is part of the Duvell series and will be named Qatsi. Qatsi is the hopi indian word for life and seemed like the most obvious choice for the name of the guitar as this instrument has been a huge part of my life since I first began playing.The Mayones family have done an unbelievable job at making this instrument, all the hours they spent constructing it, organising the details and giving me the time of day in the first place is more than anything I could of ever imagined happening when I first started this path that is music. From the bottom of my heart - Thank you.John Browne / MONUMENTS',
		'Quilted Maple 3A top Profiled American Ash T.E.W. (Tonally Enhanced Wood) backs',
		' 6 string - Standard scale (25.4" / 645 mm) 7 string - Standard scale (25.4" / 645 mm) 7 string',		
		' Hardcase Duvell QATSI Custom Truss Rod Cover, John Browne Signature Electronics Cavity Cover'
	],
	[
		2,
		'A distinguish 7-string version of our Regius series. Features an ergonomic contoured body with harsh Ash top in Gothic finish and 11-ply monolith neck and fancy Ebony fingerboard. Swamp Ash body for modern sound with quick attack or Mahogany for warmer and more round tones.Delivered with plain fretboard or optional Iron Cross markers (available at extra fee).Strings-thru-body fixed bridge for the wood vibration enhancement.Equipped with Hipshot locking tuners and Seymour Duncan, EMG or DiMarzio pickups. Several colour options and hardcase included.',
		'Quilted Maple 3A top   Profiled American Ash T.E.W. (Tonally Enhanced Wood) backs',
		'6 string - Standard scale (25.4" / 645 mm) 7 string - Standard scale (25.4" / 645 mm) 7 string - Baritone scale (27" / 687 mm) - Extra fee required',
		'Graph Tech nut, Switchcraft jack, Schaller Security Straplocks, Hardcase'
	]
];