
import * as React from 'react';
import Title from '../Title'
import Chart from "react-apexcharts";

export default function DashboardChart() {
    const chartState = {
        options: {
            dataLabels: {
                enabled: false
            },
            labels: ['Maintenance', 'Capital', 'Others'],
            legend: {
                markers: {
                    radius: 0
                }
            },
            theme: {
                mode: 'light'
            },
            stroke: {
                show: false
            }
        },
        series: [44, 55, 10],

    }

    return (
        <React.Fragment>
            <Title>Work Category</Title>
            <Chart
                options={chartState.options}
                series={chartState.series}
                type="donut"
                height="80%"
            />
        </React.Fragment>
    );
}