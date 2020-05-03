import {PolarArea} from 'vue-chartjs';
import {getRandomColor, getRandomData, getRandomName} from "./makeRandomInfo";

export default {
    extends: PolarArea,
    data() {
        return {
            datacollection: {
                datasets: [
                    {
                        backgroundColor: getRandomColor(),
                        data: getRandomData(3)
                    },
                    {
                        backgroundColor: getRandomColor(),
                        data: getRandomData(4)
                    }
                ],
                labels: [
                    getRandomName(3), getRandomName(4)
                ]
            },
            options: {
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.datacollection, this.options)
    }
}