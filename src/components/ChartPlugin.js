import Chart from 'chartjs'; 

export default {
    install(Vue, options)  {
        Vue.prototype.ChartJs = Chart;
    },
}