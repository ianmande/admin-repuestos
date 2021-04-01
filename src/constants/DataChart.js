export const DataLineChart = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Ganancias',
      data: [1200, 100, 200, 300, 400, 800, 1200, 2400, 900, 2000, 800, 1000],
      backgroundColor: 'transparent',
      borderColor: '#4ad987',
    },
    {
      label: 'Ganancias mes anterior',
      data: [300, 400, 800, 1200, 2400, 100, 9000, 0, 100, 2000, 1100, 5000],
      borderColor: '#37a8ff',
      backgroundColor: 'transparent',
    },
  ],
};
