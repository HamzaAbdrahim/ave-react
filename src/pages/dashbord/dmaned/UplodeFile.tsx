import { ChangeEvent, useState } from "react";

type UploadFileProps = {
    onFileUpload: (file: File) => void;
  }

const UplodeFile: React.FC<UploadFileProps> = ({onFileUpload}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selected = files[0];
        setSelectedFile(selected);
        onFileUpload(selected);
      }
    }

    console.log(selectedFile);
    
  return (
    <div className="uplode-file">
        <p className="uplode-titel mb-3">Ajoutez des photos pour illustrer votre besoin :</p>
        <div className="uploder-file-placeholder cenetr-grid text-center position-relative">
        <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        className="upload-input position-absolute cursor-pointer top-0 left-0 opacity-0"
      />
          <i className="bi bi-cloud-arrow-up"></i>
          <p className="uplode-discrption">Faites glisser et déposez votre photo</p>
        </div>
      </div>
  )
}

export default UplodeFile