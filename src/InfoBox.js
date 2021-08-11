import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

const InfoBox = ({
  title,
  isGreen,
  isBlue,
  isRed,
  cases,
  active,
  total,
  ...props
}) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infobox ${active && 'infobox--selected'} ${
        isBlue && 'infobox--blue'
      } ${isRed && 'infobox--red'}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>

        <h2
          className={`infoBox__cases
          ${isGreen && 'infobox__cases--green'}
            ${isRed && 'infobox__cases--red'}
            `}
        >
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
