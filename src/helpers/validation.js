export const required = (val) =>
  (!!val) || 'This field is required';
export const validation = {
  required,
};
