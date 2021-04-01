export const COLOR__PROGRESS = {
  overSeventy: '#4ad987',
  overForty: '#37a8ff',
  lessForty: '#FFA833',
};

export const determinateColor = (percentage) => {
  let color = '';

  if (percentage >= 70) {
    color = COLOR__PROGRESS.overSeventy;
  } else if (percentage >= 40) {
    color = COLOR__PROGRESS.overForty;
  } else {
    color = COLOR__PROGRESS.lessForty;
  }
  return color;
};
