export const required = value => value ? undefined : 'This field is required';

export const notEmpty = value => value.trim() !== '' ? undefined : 'Must not be empty';

export const lengthOfFive = value => value.length === 5 ? undefined : 'Tracking numbers are 5 characters';

export const onlyNumbers = value => !isNaN(value) ? undefined : 'Tracking numbers must contain only numbers';