import { Box, Typography } from '@mui/material';
import TextTransition, { presets } from "react-text-transition";
import React, { useEffect, useState } from 'react';

const TEXTS = [
  "Web Developer",
  "UI Designer",

];

const TextMotion = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <Box textAlign={'center'} position={'relative'}>
      <div >
        <Typography variant='h5'>
          I'm a&nbsp;
          <TextTransition
            inline={true}
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.wobbly}
          />
        </Typography>
      </div>
    </Box>
  );
};

export default TextMotion;