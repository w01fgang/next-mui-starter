import { defineMessages } from 'react-intl';

const messages = defineMessages({
  confirmButton: {
    id: 'UploadProgressModal.confirmButton',
    defaultMessage: 'Ok',
    description: 'Button on modal dialog',
  },
  cancelButton: {
    id: 'UploadProgressModal.cancelButton',
    defaultMessage: 'Cancel',
    description: 'Button on modal dialog',
  },
  progress: {
    id: 'UploadProgressModal.progress',
    defaultMessage: '{progress}%',
    description: 'Word inside curly braces shouldn\'t be translated',
  },
  inProgressTitle: {
    id: 'UploadProgressModal.inProgressTitle',
    defaultMessage: '{count} {count, plural, one {file} other {files}} uploading',
    description: 'Words to translate are "file", "files" and uploading',
  },
  completedTitle: {
    id: 'UploadProgressModal.completedTitle',
    defaultMessage: '{count} {count, plural, one {file} other {files}} uploaded',
    description: 'Words to translate are "file", "files" and uploaded',
  },
  progressSize: {
    id: 'UploadProgressModal.progressSize',
    defaultMessage: '{completed} / {total} mb',
    description: 'Words inside curly braces shouldn\'t be translated',
  },
  completedProgressSize: {
    id: 'UploadProgressModal.completedProgressSize',
    defaultMessage: '{total} mb',
    description: 'Word inside curly braces shouldn\'t be translated',
  },
});

export default messages;
