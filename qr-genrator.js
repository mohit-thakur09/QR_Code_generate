const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const qr = require("qr-image");
const inquirer = require("inquirer");
const validator = require("validator");

async function getUrl() {
    try {
        const res = await inquirer.prompt([
            {
                name: "URL",
                message: " Enter Your URL: ",
                default: "www.example.com"
            }
        ]);
        if (validator.isURL(res.URL)) {
            console.log(chalk.green.bold("Correct URL . . ."));
            return res.URL;
        } else {
            throw Error("Incorrect URL X");
        }
    } catch (err) {
        console.log(chalk.red.bold(err, "Try Again. . . .!"));
        return false;
    }
}

async function getImageType() {
    try {
        const type = await inquirer.prompt([
            {
                name: "imageType",
                message: "Select Image Type: ",
                default: "png",
                type: "list",
                choices: ["png", "jpg", "pdf"]
            }
        ])
        return type.imageType;

    } catch (err) {
        console.log(err);
    }

}

async function genrateQRCode(url, imageT) {
    try {
        const path_str = path.join(path.resolve(), "qr-project", "QR-Code");
        await fs.mkdir(path_str, { recursive: true });

        const name1 = url.slice(0, url.lastIndexOf("."));
        const name2 = name1.slice(name1.lastIndexOf(".") + 1);
        const file_name = `${name2}.${imageT}`;
        // console.log(file_name)

        const qr_code = qr.image(url, { type: imageT });
        qr_code.pipe(require("fs").createWriteStream(path.join(path_str, file_name)));

        return [file_name, url];
    } catch (err) {
        console.log(chalk.red(err));
        return false;
    }
}

async function writeToFile(qr_data) {
    // console.log("inside write file", qr_data);
    const path_str = path.join(path.resolve(), 'qr-project', "QR-Code", "URL.txt");
    try {
        await fs.appendFile(path_str, `\n${qr_data[0]} :${qr_data[1]}`);
    } catch (err) {
        console.log(chalk.red(err));
        return false;
    }
}

async function doTask() {
    const url = await getUrl();
    if (url) {
        const extension = await getImageType();
        const qr_data = await genrateQRCode(url, extension);
        if (qr_data) {
            writeToFile(qr_data);
            console.log(chalk.green.bold(`QR-Code Created Successfully . . . \nWith Name: ${qr_data[0]}`))
        }
    }
}

doTask();
