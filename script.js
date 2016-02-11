function getStringArrayFromOptions(id){
	var inp = document.getElementById(id);
	if(!inp){return null}
	inp = inp.options; 
	var out = [];
	for(var i=0;i<inp.length;i++){
		out[i] = inp[i].text;
	};
	return out;
}

var input = document.getElementById("countries");
var awesomplete = new Awesomplete(input, {
	minChars: 0, 
	autoFirst: true,
	maxItems: 1000
});

var lists = ["own", "etype", "vol","substn", "element"];

awesomplete.list = getStringArrayFromOptions(lists[0]);
awesomplete.filter = function(text, input) {
	return Awesomplete.FILTER_CONTAINS(text, input.match(/[^~~]*$/)[0]);
};
awesomplete.replace = function(text) {
	var before = this.input.value.match(/^.+~~\s*|/)[0];
	this.input.value = before + text + "~~";
};

/* function awesomeChangeListener(e) {
	var owner = e.target;
	//Now decide the choice list based on the number of tags
	var mainStr = owner.value;
	var index = mainStr.split("~~").length - 1;
	awesomplete.list = getStringArrayFromOptions(lists[index]);
	doAutoSelection(lists, mainStr.trimRight().split("~~"));
}; */

input.addEventListener("awesomplete-selectcomplete", null);

//input.addEventListener("onkeypress", changeListener);


