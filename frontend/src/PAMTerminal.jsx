import {useState} from "react";

import styles from "./PAMTerminal.module.css";

export default function PAMTerminal() {
  const [imagePreview, setImagePreview] = useState(null);
  const [vehicleType, setVehicleType] = useState("");
  const [carModel, setCarModel] = useState("");
  const [fileName, setFileName] = useState("");
  const [carInfo, setCarInfo] = useState("");

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
    setFileName(file.name);
  };

  const handleUploadURL = () => {
    alert("Upload URL clicked!");
  };

  const handleHelp = () => {
    alert("Help clicked!");
  };

  return (
    <div className={styles.terminal}>
      {/* prettier-ignore */}
      <p className={styles.titleText}style={{whiteSpace: "pre"}}>
        {String.raw
`======== Burners Car Insurance =========
                  ____   _    __  __ 
          ______ |  _ \ / \  |  \/  |
      __________ | |_) / _ \ | |\/| |
  ______________ |  __/ ___ \| |  | |
                 |_| /_/   \_\_|  |_|

======= Premium Analysis Machine =======



Welcome to the Burners Car Insurance
Premium Analysis Machine.
Upload an image of your car to receive
an instant insurance premium quote.



`}
        <span className={styles.terminalButton} onClick={handleUploadImage}>
          [ Upload Image ]
          <input type="file" accept="image/*" onChange={handleUploadImage} />
        </span>{" "}
        <span className={styles.terminalButton} onClick={handleUploadURL}>
          [ Upload URL ]
        </span>{" "}
        <span className={styles.terminalButton} onClick={handleHelp}>
          [ Help ]
        </span>
        {`

----------------------------------------
UPLOADED FILE: ${fileName || "None"}

----------------------------------------
PREMIUM: ${carInfo || "N/A"}

----------------------------------------
        
        
        `}
      </p>
      <img className={styles.imagePreview} src={imagePreview}></img>
    </div>
  );
}
