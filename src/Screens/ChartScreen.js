import React, { useContext } from "react";
import { Dimensions, ScrollView } from "react-native";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";
import { DataContext } from "../Data/Data";
import moment from "moment";

const chartConfig = {
  backgroundColor: "#ededed",
  backgroundGradientFrom: "#ededed",
  backgroundGradientTo: "#ededed",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const ChartScreen = () => {
  const { width } = Dimensions.get("window");
  const months = moment.months();
  const { categories, budget } = useContext(DataContext);

  const categoryChart = () =>
    categories.map((category) => {
      let filteredTotal = 0;

      budget
        .filter(({ category: c }) => c === category)
        .forEach(({ amount }) => (filteredTotal += amount));

      const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
      };

      return {
        name: category,
        amount: filteredTotal,
        color: getRandomColor(),
        legendFontColor: "#7F7F7F",
        legendFontSize: 15,
      };
    });

  const monthChart = () => ({
    labels: months,
    datasets: [
      {
        data: months.map((_, month) => {
          let filteredTotal = 0;

          budget
            .filter(({ date }) => new Date(date).getMonth() === month)
            .forEach(({ amount }) => (filteredTotal += amount));

          return filteredTotal;
        }),
      },
    ],
  });

  return (
    <ScrollView>
      <PieChart
        width={width}
        height={200}
        accessor={"amount"}
        data={categoryChart()}
        chartConfig={chartConfig}
      />
      <LineChart
        width={width}
        height={500}
        data={monthChart()}
        chartConfig={chartConfig}
        withHorizontalLabels={true}
        verticalLabelRotation={90}
      />
      <BarChart
        width={width}
        height={500}
        data={monthChart()}
        chartConfig={chartConfig}
        verticalLabelRotation={90}
      />
    </ScrollView>
  );
};

export default ChartScreen;
