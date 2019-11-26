// @flow
import {
  grey as greyBase,
  blue as blueBase,
  indigo as indigoBase,
  green as greenBase,
  orange as orangeBase,
  red as redBase,
} from '@material-ui/core/colors';

const buildGradient = (start, end) => `linear-gradient(180deg, ${start} 0%, ${end} 100%)`;

const grey = buildGradient(greyBase[400], greyBase[600]);
const blue = buildGradient(blueBase[700], blueBase[900]);
const indigo = buildGradient(indigoBase[400], indigoBase[600]);
const green = buildGradient(greenBase[400], greenBase[600]);
const orange = buildGradient(orangeBase[400], orangeBase[700]);
const red = buildGradient(redBase[500], redBase[700]);

export default {
  grey,
  blue,
  indigo,
  green,
  orange,
  red,
};
