// @flow strict
import { defineMessages } from 'react-intl';

export default defineMessages({
  label: {
    id: 'TablePagination.label',
    defaultMessage: '{from}-{to} of {count}',
    description: 'Title on table pagination',
  },
  rowsPerPage: {
    id: 'TablePagination.rowsPerPage',
    defaultMessage: 'Rows per page:',
    description: 'Title on table pagination',
  },
  next: {
    id: 'TablePagination.next',
    defaultMessage: 'Next page',
    description: 'Button tooltip on pagination',
  },
  back: {
    id: 'TablePagination.back',
    defaultMessage: 'Previous page',
    description: 'Button tooltip on pagination',
  },
});
