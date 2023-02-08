const openURL = open('https://openjavascript.info');

const myWindow = open();

myWindow.document.body.innerHTML = `<h1>TAE</h1>`;

const myWindow2 = open('https://openjavascript.info', '_blank', 'width=400,height=400,left=30,right=20');

openURL.close();
myWindow.close();
myWindow2.close();