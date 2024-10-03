import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import UploadImage from "../../assets2/ModalIcons/Upload.svg";
import { useSelector } from "react-redux";
import FileIcon from "../../assets2/ModalIcons/FileIcon.svg";
import Delete from "../../assets2/ModalIcons/DeleteIcon.svg";
import Progress from "../../assets2/ModalIcons/CompleteIcon.svg";
import { AttachmentUpload } from "../../Api/Apis";

const Upload = styled.div`
  border: 1px dashed #dadbdf;
  width: 360px;
  height: 200px;
  margin: auto;
  border-radius: 8px;
`;

const InfoText = styled.div`
  font-size: 14px;
  color: #484848;
  text-align: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dadbdf;
  margin: 10px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  margin: 0 20px;
`;

const Btn1 = styled.div`
  font-size: 15px;
  color: #232222;
  border: 1px solid #cbcbcb;
  padding: 10px 15px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 50px;
  text-align: center;
  cursor: pointer;
`;

const Btn2 = styled.div`
  font-size: 15px;
  color: #ffffff;
  border: 1px solid #cbcbcb;
  padding: 11px 16px;
  width: 50px;
  text-align: center;
  background-color: #1677ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const FormatText = styled.div`
  font-size: 15px;
  color: #9d9d9d;
  text-align: center;
`;

const BrowseBtn = styled.button`
  font-size: 14px;
  background-color: #ffffff;
  box-shadow: 0px 1.702708125114441px 8.513540267944336px 0px #00000040;
  border-radius: 8px;
  text-align: center;
  color: #2e90fa;
  padding: 10px 15px;
  border: none;
  transition: all 0.5s ease;
  width: 110px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

const FileNameList = styled.div`
  padding: 10px;
  margin: 5px;
  height: 120px;
  overflow-y: auto;
  background-color: #f9f9f9;
  border: 1px solid #dadbdf;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* Scrollbar styles for WebKit browsers */
  ::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; /* Background color of the track */
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Color of the scrollbar thumb */
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb on hover */
  }
`;

const FileNameItem = styled.li`
  font-size: 14px;
  color: #484848;
  text-align: center;
`;

const FileTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const File = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #cbcbcb;
  padding: 5px 8px;
  border-radius: 8px;
`;

const Img = styled.img`
  height: 20px;
  width: 20px;
`;

const ProgressIcon = styled.img`
  height: 25px;
  cursor: pointer;
`;

const Line2 = styled.div`
  width: 360px;
  height: 1px;
  background-color: #dadbdf;
  margin: auto;
`;

const Files = styled.div`
  font-size: 13px;
  color: #525252;
  height: 0px;
  width: 360px;
  margin: auto;
  padding-top: 10px;
`;

const MyDropzone = ({ CancelAction, stateChange }) => {
  const [fileNames, setFileNames] = useState([]);

  const [hoveredFileIndex, setHoveredFileIndex] = useState(null);
  const [file, setFile] = useState(null);
  const [issueDate, setIssueDate] = useState(null);
  const [apiIssueDate, setApiIssueDate] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles, "Accepted File");
    setFile(acceptedFiles);
    const fileIssueDate = new Date(acceptedFiles[0].lastModified);
    const formattedDate = fileIssueDate.toISOString().split("T")[0]; // This will give the format YYYY-MM-DD

    setIssueDate(formattedDate);
    console.log("Formatted Issue Date:", formattedDate);
    console.log(file, "file");

    setFileNames(acceptedFiles.map((file) => file.name));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const themeKeys = useSelector((state) => state.localization.themeKeys);

  const handleMouseEnter = (index) => {
    setHoveredFileIndex(index);
    console.log(index);
  };

  const deselectFile = (index) => {
    setFileNames((prevFileNames) =>
      prevFileNames.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const handleMouseLeave = () => {
    setHoveredFileIndex(null);
  };
  const handleFileChange = (event) => {
    console.log(file, "ghcgc");
  };

  const handleSave = async () => {
    if (file && file.length > 0) {
      const formData = new FormData();
      const issueDateObj = new Date(issueDate);
      const formattedIssueDate = `${issueDateObj.getFullYear()}-${
        issueDateObj.getMonth() + 1
      }-${issueDateObj.getDate()}`;
      const email = localStorage.getItem("email");
      // Append formData fields
      formData.append("expiryDate", "2024-12-09");
      formData.append("documentNo", "Doc-0001");
      formData.append("notes", "Testing Attachments");
      formData.append("userEmail", email);
      formData.append("status", "true");
      formData.append("issueDate", formattedIssueDate);
      file.forEach((f) => formData.append("files", f));

      try {
        const response = await AttachmentUpload(formData);

        if (response.status) {
          console.log("File uploaded successfully:", response);
          setApiIssueDate(response.data.issueDate);
          console.log(response.data, "cwecwecewv");
          stateChange();
        } else {
          console.error("File upload failed:", response);
        }
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    } else {
      console.error("No file selected or file is null.");
    }
  };

  return (
    <>
      <Upload {...getRootProps()}>
        <Container>
          <Image src={UploadImage} alt="efwef" />
          <input {...getInputProps()} />
          <InfoText>Choose a file or drag it here</InfoText>
          <FormatText>
            JPEG, DOC, XLS, CSV, and PDF format up to 20MB
          </FormatText>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BrowseBtn hover={themeKeys.hover}>Browse File</BrowseBtn>
          </div>
        </Container>
      </Upload>
      <Files>
        {fileNames.length} file{fileNames.length !== 0 ? "s" : ""} uploaded
      </Files>
      <div style={{ margin: "20px 0" }}>
        <Line2 />
      </div>
      <FileNameList>
        {fileNames.length === 0 ? (
          <div
            style={{
              fontSize: "14px",
              color: "#9d9d9d",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            No files uploaded yet
          </div>
        ) : (
          fileNames.map((fileName, index) => (
            <FileTemplate key={index}>
              <File>
                <Img src={FileIcon} alt="file-icon" />
                <div style={{ fontSize: "13px", color: "#606260" }}>
                  {fileName}
                </div>
              </File>
              <ProgressIcon
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => deselectFile(index)}
                src={hoveredFileIndex === index ? Delete : Progress}
                alt="icon"
              />
            </FileTemplate>
          ))
        )}
      </FileNameList>
      <Line />
      <ActionButtons>
        <Btn1 onClick={CancelAction}>Cancel</Btn1>
        <Btn2 onClick={handleSave}>Save</Btn2>
      </ActionButtons>
    </>
  );
};

export default MyDropzone;
