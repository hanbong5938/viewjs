import {Doughnut} from 'vue-chartjs'
import {getRandomColor, getRandomData} from "./makeRandomInfo";

export default {
    extends: Doughnut,
    data() {
        return {
            datacollection: {
                labels: ['동그 라미', '세모', '네모'],
                datasets: [
                    {
                        backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor()],
                        data: getRandomData(3)
                    },
                ]
            },
            options: {
                legend: {
                    display: true
                },
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.datacollection, this.options)
    }
}
