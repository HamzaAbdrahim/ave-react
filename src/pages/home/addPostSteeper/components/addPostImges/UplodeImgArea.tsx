import React, { useState, ChangeEvent } from 'react';
import "./addPost_imges.css";
const UploadImgArea: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  return (
    <>
      <div className="upload__container mb-3 col-lg-6 mx-auto position-relative">
      <i className="bi bi-cloud-upload fs-px-40 clr-green-light"></i>
        <p className="fs-px_18 ln-ht-17px fw-medium">Browse Files to upload</p>
        <input
          type="file"
          onChange={handleFileChange}
          className="position-absolute top-0 left-0 w-100 h-100 opacity-0 cursor-pointer"
          multiple
        />
      </div>

        <div className="d-grid gap-2">
          {selectedFiles.length > 0 ? (
            selectedFiles.map((file, index) => (
              <div className="selected__files flex-items justify-content-between py-1 px-2"
               style={{ backgroundColor: 'rgb(139 233 119 / 49%)', borderRadius: '1rem' }}>
              <i className="bi bi-images "></i>
              <div key={index} className="flex-items gap-2">
                <p className="text-black fs-px_18 ln-ht-17px fw-medium">{file.name}</p>
                <i className="bi bi-trash3 clr-green-light" onClick={() => handleRemoveFile(index)}></i>
              </div>
              </div>
            ))
          ) : (
            <p className="text-black fs-px_18 ln-ht-17px fw-medium">No selected Files -</p>
          )}
      </div>
    </>
  );
};

export default UploadImgArea;
