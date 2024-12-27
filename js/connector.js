import { nanoid } from 'nanoid';
import { ID_LENGTH } from './const';

const parseLifetime = (lifetime) => {
  const parsed = parseInt(lifetime, 10);
  return !isNaN(parsed) ? parsed : null;
};

const parseAndUpdateLifetime = (fieldName, formData, dateEnd) => {
  const lifetime = parseLifetime(formData[fieldName]);
  if (lifetime) {
    formData[fieldName] = lifetime;
    dateEnd.setDate(dateEnd.getDate() + (lifetime * 30));
  } else {
    delete formData[fieldName];
  }
};

const transformFormData = (formData, formId) => {
  const newFormData = Object.fromEntries(formData.entries());
  const date = new Date();
  const dateEnd = new Date(date);
  let tagId = null;

  if (newFormData.lifetime) {
    parseAndUpdateLifetime('lifetime', newFormData, dateEnd);
  }
  if (newFormData.lifetimeUpdate) {
    parseAndUpdateLifetime('lifetimeUpdate', newFormData, dateEnd);
  }

  if (formId === 'addForm') {
    tagId = nanoid(ID_LENGTH);
  }

  const result = {
    data: {
      formId,
      date: date.toISOString(),
      ...(['addForm', 'updateForm'].includes(formId) && { dateEnd: dateEnd.toISOString() }),
      ...formId === 'addForm' && { tagId },
      ...newFormData,
    },
    tagId,
  };

  return result;
};

export { transformFormData };

