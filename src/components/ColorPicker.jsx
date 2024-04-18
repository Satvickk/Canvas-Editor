import React, { useEffect, useState } from 'react';
import { Grid, Popover, Button } from '@mui/material';
import { Circle as CircleIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../features/dataSlice';

const ColorPicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [color, setColor] = useState('#1976D2');
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.Data[0]);
  const [myArray, setMyArray] = useState(["#04669D"]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    createColor(color);
  };

  useEffect(() => {
    dispatch(updateData({...Data, bgColor : color}))
  }, [color])


  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
  };

  function createColor(color){
    if(myArray.length < 5){
        myArray.push(color)
    }
    else{
        myArray.shift();
        myArray.push(color)
    }
  }

  return (
    <Grid container>
      <Grid item xs>
        {myArray.length > 0 && myArray.map((item, index) => <CircleIcon key={index} sx={{ color: item }} />)}
        <AddCircleIcon sx={{ color: '#1976D2' }} onClick={handleClick} />
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
        </Popover>
      </Grid>
    </Grid>
  );
};

export default ColorPicker;
