console.log("Renderer script loaded.");

const fileInput = document.getElementById("file-input");
const fileInfo = document.getElementById("file-info");
const convertBtn = document.getElementById("convert-btn");
const status = document.getElementById("status");

let selectedFile = null;

//user picks file
fileInput.addEventListener('change', () => {

    const file = fileInput.files[0];

    if (!file){
        selectedFile = null;
        fileInfo.textContent = "No file selected.";
        convertBtn.disabled = true;
        status.textContent = '';
        return;
    }

    selectedFile = file;
    fileInfo.textContent = `Selected: ${file.name}`;
    convertBtn.disabled = false;
    status.textContent = '';
});

//user clicks convert (test)
convertBtn.addEventListener('click', () => {
    if (!selectedFile){
        status.textContent = 'No file selected.';
        return;
    }

    status.textContent = `Converting ${selectedFile.name}... (this is a test)`;
    console.log('Converting file:', selectedFile);
})