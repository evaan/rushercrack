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
console.log(`Once initialized, Rushercrack${plus} will being to exploit Rusherhack${plus} ports.`);
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
		
		injectPayload();
	}, 500);

	setTimeout(function ()
	{
		finishUp()
	}, 500)
}

function finishUp()
{
	log("completing the crack.. must first ddos rusherhack servers to make valid download file via the payload injected into port 666")
	log("downloading crack from rushercrack servers...")
	log("saving to appdata/roaming/.minecraft/mods")
	log("crack complete!")
}

function crack()
{
	console.log("Attempting to find vulnerable ports, please wait...");
	findPorts();
}
