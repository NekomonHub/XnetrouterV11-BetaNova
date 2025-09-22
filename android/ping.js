const {
	exec
} = require('child_process');

function ed(){
	exec('ping -b -s 1400 192.168.1.255');
}

setInterval(() => {
	ed();
	ed();
}, 500);
