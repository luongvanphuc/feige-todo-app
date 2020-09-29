export const getDayLabel = (day: number) => {
  // if null for some reason, return the empty string instead of 'undefined'
  if (day == null) {
    return '';
  }

  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
};

export const getMonthLabel = (month: number) => {
  // if null for some reason, return the empty string instead of 'undefined'
  if (month == null) {
    return '';
  }

  return ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'][month];
};
