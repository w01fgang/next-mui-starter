// @flow
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageIcon from '../../assets/svg/imageIcon.svg';

// $flow: flow error with colling useStyles
const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  fileInput: {
    color: 'transparent',
    width: '100%',
    height: 48,
    '&::before': {
      width: '100%',
      height: 48,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1E88E5',
      fontWeight: 'bold',
      fontSize: 13,
      // $flow: have to be dynamic
      content: (props) => props.content,
      background: 'white',
      border: '1px solid #A3D2FC',
      borderRadius: '3px',
      padding: '5px 8px',
      outline: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      cursor: 'pointer',
    },
    '&::-webkit-file-upload-button': {
      visibility: 'hidden',
    },
  },
  icon: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    // $flow: have to be dynamic
    left: (props) => props.left,
    top: '50%',
  },
});

type Props = {
  handleChange: Function,
  title?: string,
}

function FileInput({ handleChange, title }: Props) {
  const iconLeftPosition = `calc(50% - ${(((title && title.length) || 'Choose Photos'.length) * 4) + 10}px)`;
  const styleProps = {
    left: iconLeftPosition,
    content: title ? `'${title}'` : "'Choose Photos'",
  };
  // $flow: need to pass object
  const classes = useStyles(styleProps);
  return (
    <Box className={classes.container}>
      <input
        type="file"
        multiple
        className={classes.fileInput}
        onChange={(e) => handleChange(e.target)}
      />
      <ImageIcon className={classes.icon} />
    </Box>
  );
}

FileInput.defaultProps = {
  title: '',
};

export default FileInput;
