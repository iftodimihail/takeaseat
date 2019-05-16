import { notification } from 'antd';
import config from '../../config';
import { errorList } from '../../utils/errors';

/**
 * General Errors Notification
 * param {string} key
 * param {object} errors
 * param {string} message
 * param {string} placement
 * @description open a message notification
 */
export const generalErrorsNotification = (key, errors = {}, message = 'Error', placement) => {
  const generalError = errors.general;
  if (generalError) {
    notification.error({
      key: key || `error_${message}`,
      message,
      description: generalError.join(', '),
      placement: placement || 'topRight'
    });
  }
  return null;
};

/**
 * Internal Error Notification
 * param {string} key
 * param {string} message
 * param {string} placement
 * @description open a message notification
 */
export const internalErrorNotification = (key, message = 'Error', placement) => {
  notification.error({
    key: key || `error_${message}`,
    message,
    description: config.generalError.unknownError[0],
    placement: placement || 'topRight'
  });
};

/**
 * Success Notification
 * param {string} key
 * param {string} message
 * param {string} description
 * param {string} placement
 * @description open a message notification
 */
export const successNotification = (key, message = 'Success', description, placement) => {
  notification.success({
    key: key || `success_${message}`,
    message,
    description,
    placement: placement || 'topRight'
  });
};

/**
 * customNotification
 * @param {string} type
 * @param {string} key
 * @param {object} description, Ex: {descriptionKey: ['description 1', 'description 2']}
 * @param {string} message
 * @param {string} placement
 * @description open a message notification
 */
export const customNotification = (type, key, description = {}, message = 'Error', placement = 'topRight') => {
  notification[type]({
    key,
    message,
    placement,
    description: errorList(description).join(', ')
  });
  return null;
};
