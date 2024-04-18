import { data } from 'autoprefixer';
import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function CanvasEditor() {

  const Data = useSelector((state) => state.Data[0])
  const canvasRef = useRef(null);

    if(Data){
        const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = Data.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drawing design pattern
    const patternImg = new Image();
    patternImg.src = "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png";
    patternImg.onload = () => {
      ctx.drawImage(patternImg, 0, 0);
    };

    // Drawing mask
    const maskImg = new Image();
    maskImg.src = "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask.png";
    maskImg.onload = () => {
      ctx.drawImage(maskImg, 56, 442, 970, 600);
    };

    // Drawing mask stroke
    const strokeImg = new Image();
    strokeImg.src = Data.image ? Data.image : "/not-found.jpg";
    strokeImg.onload = () => {
      ctx.drawImage(strokeImg, 56, 442, 970, 600);
    };

    drawCaption(ctx, Data.caption, 50, 50, 44, "left", "#FFFFFF", 31);

    // Drawing CTA text
    ctx.font = "30px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = 'center';
    ctx.fillText(Data.cta, 190 + (20 / 2), 320 + 30);
    }


    function drawCaption(ctx, caption, positionX, positionY, fontSize, alignment, textColor, maxCharactersPerLine) {
      ctx.font = fontSize + "px Arial";
      ctx.fillStyle = textColor;
      ctx.textAlign = alignment;
  
      // Spliting the caption into lines based on maxCharactersPerLine
      let words = caption.split(' ');
      let lines = [];
      let currentLine = '';
  
      words.forEach(word => {
          if (currentLine.length + word.length <= maxCharactersPerLine) {
              currentLine += (currentLine === '' ? '' : ' ') + word;
          } else {
              lines.push(currentLine);
              currentLine = word;
          }
      });
      lines.push(currentLine);
  
      // Drawing caption
      let offsetY = 0;
      lines.forEach(line => {
          ctx.fillText(line, positionX, positionY + offsetY);
          offsetY += fontSize;
      });
  }
  

  return (
    <div>
      <canvas ref={canvasRef} width={1080} height={1080} style={{ height: '400px', width: '400px', backgroundColor: "#F8F8FF", borderRadius: "7px", border: "4px solid #FFFFFF"}}></canvas>
    </div>
  );
}

export default CanvasEditor;
