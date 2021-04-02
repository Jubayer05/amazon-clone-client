import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  root: {
    width: 280,
    display: 'flex',
    alignItems: 'center',
  },
});

const ProductStar = ({ star }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={star}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </div>
  );
};

export default ProductStar;
