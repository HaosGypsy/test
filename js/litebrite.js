if (parent.frames.length) {
	alert('This page was not meant to be framed, and will now be escaped from the frame');
	top.location.href = document.location;
}

function askQ(obj) {
	if (confirm('Are you sure you wish to choose a new fill colour? All work will be lost')) {
		window.location.replace('/litebrite.php?fill=' + obj);
	}
	else {
		return;
	}
}

function colorclick(varX, varY) {
	obj = document.getElementById(varX);
	dest = document.getElementById(varY);
	obj.src = eval(p);
	dest.value = color;
}

function colorhover(varX, varY) {
}

function popup(page, w, h) {
	OpenWin = this.open(page, "newwindow", "height=" + h + ",width=" + w + ',toolbar=no,menubar=no,location=no,scrollbars=no,resizable=no');
}

var p = "pic[color].src";
var x = color;
var color = 0;
var pic = new Array(10);
for (i = 0; i < 10; i++) {
	pic[i] = new Image();
}
pic['A'] = new Image();
pic['B'] = new Image();
pic['C'] = new Image();
var path = '../media/';
pic[0].src = path + "blue.gif";
pic[1].src = path + "purp.gif";
pic[2].src = path + "mar.gif";
pic[3].src = path + "red.gif";
pic[4].src = path + "oran.gif";
pic[5].src = path + "yell.gif";
pic[6].src = path + "green.gif";
pic[7].src = path + "pale.gif";
pic[8].src = path + "black.gif";
pic[9].src = path + "black.gif";
pic['C'].src = path + "gray.gif";
pic['B'].src = path + "skin.gif";
pic['A'].src = path + "brown.gif";

function pickColor(number) {
	color = number;
	document.pick.src = pic[color].src;
	document.pick.value = color.value;
}
