import {cardTitleButtonsFactory} from './CardTitleButtons';
import {CardTitlePrimary} from './CardTitlePrimary';
import {CardMediaPlus} from './CardMediaPlus';
import {CardMediaPrimary} from './CardMediaPrimary';
import {themr} from 'react-css-themr';
import theme from './theme.scss';
import {CARDTITLEBUTTONS} from '../identifiers';
const CardTitleButtons = cardTitleButtonsFactory();
const ThemedCardTitleButtons = themr(CARDTITLEBUTTONS, theme)(CardTitleButtons);
const _CardTitlePrimary = themr('cardTitle', theme)(CardTitlePrimary);
const _CardMediaPlus = themr('cardMediaPlus', theme)(CardMediaPlus);
const _CardMediaPrimary = themr('media', theme)(CardMediaPrimary);

export {ThemedCardTitleButtons as CardTitleButtons};
export {_CardTitlePrimary as CardTitlePrimary};
export {_CardMediaPlus as CardMediaPlus};
export {_CardMediaPrimary as CardMediaPrimary};