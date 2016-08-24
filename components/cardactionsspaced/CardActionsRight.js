/**
 * Created by mitya on 8/23/16.
 */
import React from 'react';
import { CardActions } from 'react-toolbox/lib/card';
import theme from './theme.scss';

const CardActionsSpaced = (props) => (
    <CardActions {...props} theme={theme} />
);

export default CardActionsSpaced;
