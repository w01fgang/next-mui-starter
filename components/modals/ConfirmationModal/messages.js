// @flow
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'ConfirmationModal.title',
    defaultMessage: 'Are you sure?',
    description: 'Deletion confirmation dialog title',
  },
  confirmButton: {
    id: 'ConfirmationModal.confirmButton',
    defaultMessage: 'Ok',
    description: 'Button label',
  },
  cancelButton: {
    id: 'ConfirmationModal.cancelButton',
    defaultMessage: 'Cancel',
    description: 'Button label',
  },
});

export default messages;
