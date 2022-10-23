import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SaiSlider = () => {
  return (
    <Box width={320}>
      <Slider
        orientation='Vertical'
        size="large"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}

export default SaiSlider 