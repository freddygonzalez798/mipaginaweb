// Function to initialize the dropzone
function initializeDropZone() {
    const dropzoneBox = document.querySelector(".dropzone-box");
    if (!dropzoneBox) return;

    const inputElement = document.querySelector(".dropzone-area input[type='file']");
    if (!inputElement) return;

    const dropZoneElement = inputElement.closest(".dropzone-area");
    if (!dropZoneElement) return;

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("dropzone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("dropzone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("dropzone--over");
    });

    dropzoneBox.addEventListener("reset", (e) => {
        let dropzoneFileMessage = dropZoneElement.querySelector(".file-info");
        dropzoneFileMessage.innerHTML = `No Files Selected`;
    });

    dropzoneBox.addEventListener("submit", (e) => {
        e.preventDefault();
        const myFiled = document.getElementById("upload-file");
        console.log(myFiled.files[0]);
    });
}

function updateDropzoneFileList(dropzoneElement, file) {
    let dropzoneFileMessage = dropzoneElement.querySelector(".file-info");
    dropzoneFileMessage.innerHTML = `${file.name}, ${file.size} bytes`;
}

// Event listener for when content is loaded
document.addEventListener("contentLoaded", () => {
    initializeDropZone();
});
