/* var codedJSON = {
"own": 311,
"etype": "L",
"vol": "765 kV",
"substn": 290,
"element": 2009,
"typeOfOutage": "P",
"txtStartDate": "10-02-2016",
"txtStartTime": "09:30",
"txtExpDate": "10-02-2016",
"txtExpTime": "18:30",
"txtComments": "Sudhir Prashanth"
} */

function autoSelect(htmlSelectsArray,cj){
  /* htmlSelectsArray = ["own","etype","vol","substn","element","typeOfOutage","txtStartDate","txtStartTime","txtExpDate","txtExpTime","txtComments"]; */
  for(var i=0;i<htmlSelectsArray.length;i++){
    var selectElement = document.getElementById(htmlSelectsArray[i]);
	//get the select input texts
	var texts = [];
	for(var j=0;j<selectElement.options.length;j++){
		texts[j] = selectElement.options[j].text;
		}
  selectElement.selectedIndex = texts.indexOf(cj[htmlSelectsArray[i]]);
    if(i<5){selectElement.onchange();}
  }
}

//inject current time with permission
//extract contents from clipboard
