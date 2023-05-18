var names=new Array();
names[0]="Lucas";
names[1]="James";
names[2]="Jennifer";
names[3]="Jason";
names[4]="Henry";
names[5]="Oliver";
names[6]="Jackson";
names[7]="Liam";
names[8]="Noah";
names[9]="Jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
