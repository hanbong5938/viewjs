<template>
    <div>
        <div>
            <BarChart></BarChart>
        </div>
        <div>
            <LineChart></LineChart>
        </div>
        <div>
            <DoughnutChart></DoughnutChart>
        </div>
        <div>
            <PolarChart></PolarChart>
        </div>
    </div>


</template>

<script>
    import BarChart from "../../components/chart/barChart";
    import LineChart from "../../components/chart/lineChart";
    import DoughnutChart from "../../components/chart/doughnutChart";
    import PolarChart from "../../components/chart/polarChart";

    export default {
        components: {PolarChart, DoughnutChart, LineChart, BarChart}
    }
</script>