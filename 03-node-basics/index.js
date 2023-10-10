// const os = require("os");
// const fs = require("fs");
// const path = require("path");
// const http = require("http");


// const server = http.createServer(function (req, res) {
//     res.write("Hello Client");
//     res.end();
// })


// server.listen(9090, () => console.log("Server started at PPORT : 9090"));



// const url = "http://www.example.com/public/index.html";

// console.log(path.dirname(url));
// console.log(path.basename(url));
// console.log(path.extname(url));


// const content = fs.readFileSync("./demo/content.txt")
// console.log(content.toString());
// fs.writeFileSync("./demo/file-two.txt", content.toString())

// console.log("Total Memory : ", os.totalmem())
// console.log("Free Memory : ", os.freemem())
// console.log("Architecture : ", os.arch())
// console.log("Numbr of CPU's : ", os.cpus().length);


// require("colors");
// const yargs = require("yargs");
// // console.log(yargs.argv)

// console.log("Some Error".brightRed)
// console.log("Some Success".brightGreen)

// yargs.command({
//     command: "list",
//     description: "To list all the items",
//     builder: {
//         label: {
//             type: "string",
//             demandOption: true,
//             description: "the new item"
//         },
//         status: {
//             type: "boolean",
//             demandOption: true,
//             description: "the status of label"
//         }
//     },
//     handler: (args) => {
//         console.log("ARGUMENTS : ", args)
//     }
// })


// yargs.parse()


// node index.js --env = "development"




const { sum, mul } = require("./utils/math");       // COMMONJS

// import {sum, mul} from './utils/math';              // ESM


console.log("Sum : ", sum(2, 4));
console.log("Mul : ", mul(2, 4));