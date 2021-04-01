import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const labels = {
  0.5: 'Very Dissatisfied',
  1: 'Very Dissatisfied+',
  1.5: 'Dissatisfied',
  2: 'Dissatisfied+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Satisfied',
  4: 'Satisfied+',
  4.5: 'Very Satisfied',
  5: 'Very Satisfied+',
};

const useStyles = makeStyles({
  root: {
    width: 280,
    display: 'flex',
    alignItems: 'center',
  },
});

const ProductStar = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
      {value !== null && (
        <Box component="fieldset" borderColor="transparent" ml={1}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </div>
  );
};

export default ProductStar;
