var fs = require("fs");

var styles = fs.readdirSync("./public/assets/style");

//reset style.css
fs.writeFileSync("./public/assets/style.css", "");

for(var i = 0; i < styles.length; i++) {
    let stylePartContent = fs.readFileSync("./public/assets/style/" + styles[i]);
    fs.writeFileSync("./public/assets/style.css", stylePartContent.toString() + "\n", { flag: "a" });
}

var scripts = fs.readdirSync("./public/assets/script");

//reset style.css
fs.writeFileSync("./public/assets/script.js", "");

for(var i = 0; i < scripts.length; i++) {
    let scriptPartContent = fs.readFileSync("./public/assets/script/" + scripts[i]);
    fs.writeFileSync("./public/assets/script.js", scriptPartContent.toString() + "\n", { flag: "a" });
}