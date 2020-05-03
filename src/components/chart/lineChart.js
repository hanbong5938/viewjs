import {Line} from 'vue-chartjs'
import {getRandomColor, getRandomData} from "./makeRandomInfo";

const num = 8;
export default {
    extends: Line,
    data() {
        return {
            datacollection: {
                labels: ['1번', '2번', '3번', '4번', '5번', '6번', '7번', '8번'],
                datasets: [
                    {
                        label: '크기',
                        backgroundColor: getRandomColor(),
                        data: getRandomData(num)
                    },
                    {
                        label: '길이',
                        backgroundColor: getRandomColor(),
                        data: getRandomData(num)
                    },
                    {
                        label: '넓이',
                        backgroundColor: getRandomColor(),
                        data: getRandomData(num)
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.datacollection, this.options)
    }
}