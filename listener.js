var gDelimeters = 0;
function changeDelimeters(val){
	if(val == gDelimeters){
		return false;
	}
	else{
		gDelimeters = val;
	}
	return true;
}
function getDelimeters(){
	return gDelimeters;
}

function changeListener(id) {
	var owner = document.getElementById(id);
	//Now decide the choice list based on the number of tags
	var mainStr = owner.value;
	var index = mainStr.split("~~").length - 1;
	awesomplete.list = getStringArrayFromOptions(lists[index]);
	mainStr = mainStr.trimRight()
	if(mainStr.slice(-1) == "~"){
		doAutoSelection(lists, mainStr.split("~~"));
	}
}

function awesomeChangeListener(e) {
	var owner = e.target;
	//Now decide the choice list based on the number of tags
	var mainStr = owner.value;
	//var index = mainStr.split("~~").length - 1;
	//awesomplete.list = getStringArrayFromOptions(lists[index]);
	doAutoSelection(lists, mainStr.trimRight().split("~~"));
	changeListener('countries');
	awesomplete.open();
}

function doAutoSelection(lists, vals){
	resulJSON = {};
	for(var i=0;i<vals.length-1;i++){
		if(vals){
			resulJSON[lists[i]] = vals[i];
			}
		}
		autoSelect(lists,resulJSON);
	}				
