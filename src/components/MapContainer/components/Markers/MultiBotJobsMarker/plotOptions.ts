const dataLabels: ApexDataLabels = {
  enabled: false,
};

const plotOptions: ApexPlotOptions = {
  pie: {
    expandOnClick: false,
    donut: {
      size: '60%',
      background: 'white',
      labels: {
        show: true,
        name: {
          show: true,
          fontSize: '10px',
          offsetY: 11,
        },
        value: {
          offsetY: -18,
          fontSize: '12px',
        },
        total: {
          show: true,
          showAlways: true,
          label: 'Vagas',
          fontSize: '10px',
        },
      },
    },
  },
};

export { plotOptions, dataLabels };
