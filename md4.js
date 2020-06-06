var arrayNames =['Ajay','Niranjan','Likitha','siddu','japan','india','jaggu','Australia','jambu','jpriya'];
for (var i =0;i<arrayNames.length; i++) {
	var name = arrayNames[i];
	if(name.startsWith('j') || name.startsWith('J')) {
		console.log(' GoodBye ' + 'J' + name);
	}
	else {
		console.log(' Hello ' + name);
	}
}