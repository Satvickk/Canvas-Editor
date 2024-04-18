import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../features/dataSlice';

function FileUpload() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Data[0]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file); // Log the file instead of selectedFile
    dispatch(updateData({ ...Data, image: file.name }));
  };

  return (
    <Button
      component="label"
      fullWidth
      variant="contained"
      sx={{ my: 3 }}
    >
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      Upload file <DriveFolderUploadIcon sx={{ mx: 1 }} />
    </Button>
  );
}

export default FileUpload;
