function inject(str){
	var inp = document.getElementById("countries");
	inp.value = str;
	changeListener("countries");
	document.getElementById("countries").focus();
	document.getElementById("countries").onkeypress();
	}
function getStringArrayFromOptions(id){
	var inp = document.getElementById(id);
	if(!inp){return null}
	inp = inp.options; 
	var out = [];
	for(var i=0;i<inp.length;i++){
		out[i] = inp[i].text;
	}
	return out;
}

var input = document.getElementById("countries");
var awesomplete = new Awesomplete(input, {
	minChars: 0, 
	autoFirst: true,
	maxItems: 1000
});

var lists = ["own", "etype", "vol","substn", "element","typeOfOutage"];

awesomplete.list = getStringArrayFromOptions(lists[0]);
awesomplete.filter = function(text, input) {
	return Awesomplete.FILTER_CONTAINS(text, input.match(/[^~~]*$/)[0]);//hardcoded
};
awesomplete.replace = function(text) {
	var before = this.input.value.match(/^.+~~\s*|/)[0];//hardcoded
	this.input.value = before + text + "~~";//hardcoded
};

awesomplete.listRearrange = function(list, value){
	value = value.toLowerCase();
	var start = lastIndexOf(value, "~~");//hardcoded
	value = value.substring(start);
	var count = 0;
	for(var i=0;i<list.length;i++){
		var temp = list[i];
		if(temp.toLowerCase().indexOf(value) === 0){
			list.splice(i,1);
			list.splice(count,0,temp);
			count++;
		}
	}
	return list;
};

function lastIndexOf(str, search) {
    var i = str.length-2;
    for (; i > -1; i--) {
        if (str.indexOf(search,i) != -1) {
            return i+2;
        }
    }
    return -1;
}

input.addEventListener("awesomplete-selectcomplete", awesomeChangeListener);

//input.addEventListener("onkeypress", changeListener);
