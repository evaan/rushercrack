console.log("Initializing Rushercrack...");
console.log("Once initialized, Rushercrack will being to exploit Rusherhack ports.");
console.log("This process may take a while on the first run.");
setTimeout(crack, 4500);

// Logs to console in green text
function log(msg) {
    console.log('\x1b[32m%s\x1b[0m', msg);
}

numPorts = 0;

function findPorts() {
    setTimeout(function() {
        log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

        numPorts++;
        if (numPorts < 25) {
            findPorts();
        } else {
            console.log("Found Exploit in port 666!\n");

            log(printNetworkMap());

            console.log("Injecting payload...");
            console.log("Please wait while we peform the injection...");
            setTimeout(injectPayload, 3000);
        }
    }, 500);
}

function injectPayload() {
    setTimeout(function() {
        log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

        injectPayload();
    }, 500);
}


function crack() {
    console.log("Attempting to find vulnerable ports, please wait...");
    findPorts();
}

function printNetworkMap() {
    return function asciiPascalMod2(intRows) {
        return range(1, intRows - 1).reduce(function (lstRows) {
            var lstPrevRow = lstRows.slice(-1)[0];

            return lstRows.concat([zipWith(function (left, right) {

                return left === right ? " " : "▲";
            }, [' '].concat(lstPrevRow), lstPrevRow.concat(' '))]);
        }, [
            ["▲"]
        ]);
    }(Math.pow(2, 4)).reduceRight(function (sofar, lstLine) {
        return {
            triangle: sofar.indent + lstLine.join(" ") + "\n" +
                sofar.triangle,
            indent: sofar.indent + " "
        };
    }, {
        triangle: "",
        indent: ""
    }).triangle;
};

var zipWith = function (f, xs, ys) {
        return xs.length === ys.length ? xs.map(function (x, i) {
            return f(x, ys[i]);
        }) : undefined;
    },
    range = function (m, n) {
        return Array.apply(null, Array(n - m + 1)).map(function (x, i) {
            return m + i;
        });
};
