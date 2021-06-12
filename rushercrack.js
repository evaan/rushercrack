process.stdout.write('\033c');
var plus = "";
if (process.argv[2] === '--plus') plus = "+";
if (process.argv[2] === '--help') {
	console.log("RusherCrack 1.1");
	console.log("==================");
	console.log("--plus | Use RusherCrack in plus mode");
	process.exit(1);
}

console.log(`Initializing Rushercrack${plus}...`);
console.log(`Once initialized, Rushercrack${plus} will begin to exploit Rusherhack${plus} ports.`);
console.log("This process may take a while on the first run.");
setTimeout(crack, 4500);

// Logs to console in green text
function log(msg)
{
	console.log('\x1b[32m%s\x1b[0m', msg);
}

numPorts = 0;
function findPorts()
{
	setTimeout(function ()
	{
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
		
		numPorts++;
		if(numPorts < Math.floor( Math.random() * 150 + 1))
		{
			findPorts();
		}
		else
		{
			console.log("Found Exploit in port 666!");

			console.log("Injecting payload...");
			console.log("Please wait while we peform the injection...");
			setTimeout(injectPayload, 3000);
		}
	}, 500);
}

function injectPayload()
{
	setTimeout(function ()
	{
		log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
		
		if(Math.random() > 0.0925732923732) {
			injectPayload();
		} else {
			finishUp()
			return;
		}
	}, 500);
}

function downloadCrack() {
	setTimeout(function() {
		console.log("Downloading crack from rushercrack servers")
	}, 500)
	setTimeout(function() {
		console.log("Saving the file to appdata/roaming/.minecraft/mods")
	}, 1000)
	setTimeout(function() {
		console.log("Crack complete! Attemping to open Rusherhack")
	}, 2000)
	setTimeout(function() {
		console.log("FATAL ERROR: COULD NOT LAUNCH RUSHERHACK")
		console.log("You will have to open minecraft yourseef")
	}, 2500)
	setTimeout(function() {
		console.log("Crack complete with a status of 200 OK. Please launch minecraft.")
	}, 3000) 
}
function finishUp()
{
	console.log(`Completing the crack.. must first DOS rusherhack${plus} servers to find a valid download key via the payload injected into port 666`)
	setTimeout(downloadCrack, 1000)
}

function crack()
{
	console.log("Attempting to find vulnerable ports, please wait...");
	findPorts();
}
