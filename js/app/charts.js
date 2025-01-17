(function ($) {
  $(document).ready(function () {

    $().peity && $('[data-spark]').each(function () {
      const $this = $(this),
        data = $this.attr('data-spark'),
        color = $this.attr('data-spark-color') || 'blue',
        type = $this.attr('data-spark-type') || 'line';

      const $div = $('<div />').html(data);
      $this.append($div);

      let strokeColor = tabler.colors[color],
        fillColor = tabler.colors[color];

      if (type === 'donut' || type === 'pie') {
        fillColor = [fillColor, tabler.hexToRgbA(fillColor, .1)];
      } else if (type === 'bar') {
        fillColor = [fillColor];
      } else if (type === 'line') {
        fillColor = tabler.hexToRgbA(fillColor, .1);
      }

      $div.peity(type, {
        width: $this.width(),
        height: $this.height(),
        // max: 100,
        // min: 0,
        stroke: strokeColor,
        strokeWidth: 2,
        fill: fillColor,
        padding: .2,
        innerRadius: (type === 'donut') ? 17 : 0
      });


    });

  });
})(jQuery);


/*
charts default configuration
 */
if (window.Apex) {

  window.Apex = {
    grid: {
      show: false,
      padding: {
        right: 0,
        left: 0,
        bottom: 0,
        top: 0
      }
    },

    dataLabels: {
      enabled: false
    },

    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },

    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
      animations: {
        enabled: false,
      }
    },

    stroke: {
      width: 2,
      curve: 'smooth',
    },

    fill: {
      type: 'solid',
      opacity: 1
    },

    markers: {
      strokeWidth: 1
    },

    legend: {
      show: false
    },

    title: {
      style: {
        fontSize: '14px',
        fontFamily: 'inherit'
      }
    },

    tooltip: {
      fillSeriesColor: false
    },

    xaxis: {
      labels: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      axisBorder: {
        show: false
      }
    },

    yaxis: {
      show: false,
      labels: {
        show: false
      }
    }
  };
}
