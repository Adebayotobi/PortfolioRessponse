import React, { CSSProperties } from 'react';

interface CustomButtonProps {
  text: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  fontSize?: string;
  width?: string;
  bgColor?: string;
  textColor?: string;
  border?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  height,
  type,
  onClick,
  fontSize = '14px',
  width = '150px',
  bgColor = '#1CE124',
  textColor = 'white',
  border,
}) => {
  const buttonStyle: CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
    padding: '10px',
    borderRadius: '4px',
    width: width,
    cursor: 'pointer',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: fontSize,
    border: `1px solid ${border}`,
    height: height,
  };

  return (
    <div>
      <button style={buttonStyle} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
