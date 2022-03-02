import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const RatingButtons = ({name,value,setValue}) => {
    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
            name={name}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
        </Box>
    );
};

export default RatingButtons;