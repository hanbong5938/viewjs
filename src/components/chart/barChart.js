const data = []

for (let i = 0; i < 8; i++) {
    data[i] = Math.floor(Math.random() * 100) + 1;
}
//Importing Line class from the vue-chartjs wrapper
import {Bar} from 'vue-chartjs'
//Exporting this so it can be used in other components
export default {
    extends: Bar,
    data() {
        return {
            datacollection: {
                //Data to be represented on x-axis
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August'],
                datasets: [
                    {
                        label: ['Data One'],
                        backgroundColor: ['#f87979', '#ffa27f', '#f1cc6f', '#99d75a', '#52dbc1', '#2e9cec', '#ab4dea', '#ff52ff'],
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        //Data to be represented on y-axis
                        data:data
                    }
                ]
            },
            //Chart.js options that controls the appearance of the chart
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
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
        //renderChart function renders the chart with the datacollection and options object.
        this.renderChart(this.datacollection, this.options)
    }
}