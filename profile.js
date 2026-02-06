const options = {
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["70%", "100%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 999,
      },
      label: {
        show: false,
        position: "center",
      },

      data: [
        {
          value: 1048,
          name: "Search Engine",
          itemStyle: {
            color: "#FFF6B6",
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          value: 735,
          name: "Direct",
          itemStyle: {
            color: "#C7E98A",
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          value: 484,
          name: "Union Ads",
          itemStyle: {
            color: "#F8D3AF",
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          value: 300,
          name: "Video Ads",
          itemStyle: {
            color: "#C6DCFF",
          },
          emphasis: {
            disabled: true,
          },
        },
      ],
    },
  ],
};

console.log(echarts);
document.addEventListener("DOMContentLoaded", function () {
  const chartEl = document.getElementById("chart");
  const chart = echarts.init(chartEl);
  chart.setOption(options);
  console.log(chart);
});
