// @flow strict
import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl, type IntlShape } from 'react-intl';
import MuiTablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

import messages from './messages';

const StyledTablePagination = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.lightGrey,
  },
}))(MuiTablePagination);

type Props = {|
  +count: number,
  +rowsPerPage: number,
  +page: number,
  +handleChangePage: () => void,
  +handleChangeRowsPerPage: () => void,
  +intl: IntlShape,
  +className?: string,
|};

class TablePagination extends PureComponent<Props> {
  formatLabel = ({ from, to, count }) => this.props.intl.formatMessage(messages.label, { from, to, count })

  render() {
    const {
      count, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, intl, className,
    } = this.props;

    return (
      <StyledTablePagination
        className={className}
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelDisplayedRows={this.formatLabel}
        labelRowsPerPage={<FormattedMessage {...messages.rowsPerPage} />}
        nextIconButtonText={intl.formatMessage(messages.next)}
        backIconButtonText={intl.formatMessage(messages.back)}
      />
    );
  }
}

export default injectIntl(TablePagination);
