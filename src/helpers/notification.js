import {Notify} from 'quasar'

export const notification = {
  showErrorMessage,
  showSuccessMessage
};

function showErrorMessage(message, caption) {
  Notify.create({
    progress: true,
    icon: 'report_problem',
    textColor:'negative',
    classes: 'bg-blue-grey-10 text-negative',
    caption: caption,
    message: message || 'Action failed.',
    position: 'top',
    timeout: 10000,
    actions: [{label: 'Close', color: 'white'}]
  })
}

function showSuccessMessage(message, caption) {
  Notify.create({
    progress: true,
    icon: 'done',
    textColor:'positive',
    classes: 'bg-blue-grey-10',
    caption: caption,
    message: message || 'Action was successful.',
    position: 'top',
    timeout: 10000,
    actions: [{label: 'Close', color: 'white'}]
  })
}
