const fs = require("fs");
const path = require("path");

function checkFolderExists(folderName) {
  const folderPath = path.join(__dirname, folderName);

  try {
    if (fs.existsSync(folderPath) && fs.lstatSync(folderPath).isDirectory()) {
      console.log(`Folder "${folderName}" exists.`);
      return true;
    } else {
      console.log(`Folder "${folderName}" does not exist.`);
      return false;
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return false;
  }
}

checkFolderExists("myTestFolder");
