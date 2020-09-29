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

export const getYYYYMMDD = (date: Date) => {
  // safe check
  if (date == null || typeof date.getMonth !== 'function') {
    return '';
  }

  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
  ].join('-');
};
