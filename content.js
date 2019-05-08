function readTextFile(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
				return allText;
			}
		}
	}
	rawFile.send(null);
}


var journal_list = readTextFile("journal_list.txt");
console(journal_list)
var journals = document.getElementsByClassName('gs_a');
for (var i = 0, l = journals.length; i < l; i++) {
	// console.log("Full inner " + i + journals[i].innerHTML);
	// console.log("Parsed inner " + i + journals[i].innerHTML.split('-')[1].split(',')[0].split(';')[0].split('&nbsp')[0] );

	if (journals[i].innerHTML.includes(journal_list)){
		journals[i].style = "background-color:Tomato;"
	}

}