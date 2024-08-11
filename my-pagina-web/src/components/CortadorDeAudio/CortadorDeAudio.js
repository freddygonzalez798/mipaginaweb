import React, { useEffect, useState } from 'react';
 import './CortadorDeAudio.css';
import loadImg from '../../img/subir.png'; // Importa la imagen directamente

const CortadorDeAudio = () => {
  const [file, setFile] = useState(null);
  const [format, setFormat] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    function initializeDropZone() {
      const dropzoneBox = document.querySelector(".dropzone-box");
      if (!dropzoneBox) return;

      const inputElement = document.querySelector(".dropzone-area input[type='file']");
      if (!inputElement) return;

      const dropZoneElement = inputElement.closest(".dropzone-area");
      if (!dropZoneElement) return;

      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          setFile(inputElement.files[0]); // Update the file state
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
          setFile(e.dataTransfer.files[0]); // Update the file state
          updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("dropzone--over");
      });

      dropzoneBox.addEventListener("reset", () => {
        const dropzoneFileMessage = dropZoneElement.querySelector(".file-info");
        dropzoneFileMessage.innerHTML = `No hay archivos seleccionados`;
        setFile(null); // Reset the file state
      });
    }

    function updateDropzoneFileList(dropzoneElement, file) {
      const dropzoneFileMessage = dropzoneElement.querySelector(".file-info");
      dropzoneFileMessage.innerHTML = `${file.name}`;
      
    }

    initializeDropZone();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(file !== null && format !== null);
  }, [file, format]);

  return (
    <form className="convertir-audio-form" action="http://localhost:8080/convert" method="post" encType="multipart/form-data" >
      <div className="dropzone-box">
        <div className="subir-Archivo-Area">
          <h2>Cargar y adjuntar archivo</h2>
          <p>Haga clic para cargar o arrastre y suelte aquí</p>
          <div className="dropzone-area">
            <div className="file-upload-icon">
              <img src={loadImg} style={{ width: '25px' }} alt="Audio Analyzer" />
            </div>
            <input type="file" required id="upload-file" name="uploaded-file" />
            <p className="file-info">No hay archivos seleccionados</p>
          </div>
        </div>
        <div className="audio-formats">
         <h3>Datos del Audio</h3>
           <ul id="format">
            {['BPM:', 'TONO:', 'FORMATO:','PESO:','Título:','Duración:'].map((audioFormat) => (
              <li key={audioFormat}>
               <label htmlFor={audioFormat}    style={{ color: ' var(--primary)'      }}      >{audioFormat.toUpperCase()}</label>
               <label className="lblDataAnalizador" id={audioFormat} >{audioFormat.toUpperCase()}</label>

                {/* <input
                  type="text"
                  value={audioFormat}
                  id={audioFormat}
                  name="audio-format"
                  required
                  onChange={() => setFormat(audioFormat)} // Update the format state
                /> */}
                
              </li>
            ))}
          </ul>
        </div>
        <button className="btnConvertir" type="submit" disabled={!isButtonEnabled}>
          Convertir
        </button>
      </div>
    </form>
  );
};

export default CortadorDeAudio;
