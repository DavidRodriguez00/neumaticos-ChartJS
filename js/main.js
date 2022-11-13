let modoOscuro = false;
let elementoCheckbox = document.querySelector('#js-checkbox');

elementoCheckbox.addEventListener('change', function () {
    inicializarChart();
});

function inicializarChart() {

    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
    var chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };

    var color = Chart.helpers.color;
    var config = {
        type: 'radar',
        data: {
            labels: [
                ["Frenada", "Mojado"],
                ["Maniobralidad", "Mojado"],
                "Aquaplaning",
                ["Frenada", "Seco"],
                ["Maniobralidad", "Seco"],
                "Kilometraje",
                ["Consumo", "Carburante"],
            ],
            datasets: [{
                label: "Puntos Fuertes",
                backgroundColor: color(chartColors.red).alpha(0.2).rgbString(),
                borderColor: chartColors.red,
                pointBackgroundColor: chartColors.red,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: "Puntos Débiles",
                backgroundColor: color(chartColors.blue).alpha(0.2).rgbString(),
                borderColor: chartColors.blue,
                pointBackgroundColor: chartColors.blue,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            },]
        },
        options: {
            legend: {
                position: 'top',
                labels: {
                    fontColor: modoOscuro ? 'white' : '#68686c'
                }
            },
            title: {
                display: true,
                text: 'Exemplo Chart.js - @DavidRodriguez00',
                fontColor: modoOscuro ? 'white' : '#212123'
            },
            scale: {
                ticks: {
                    beginAtZero: true,
                    fontColor: modoOscuro ? '#EFEFEF' : '#68686c', // título de eje Y 10, 20 30
                    showLabelBackdrop: false // esconde el rectangulo de fondo del título del eje Y
                },
                pointLabels: {
                    fontColor: modoOscuro ? 'white' : '#68686c' // leyenda de eje X
                },
                gridLines: {
                    color: modoOscuro ? 'rgba(255, 255, 255, 0.2)' : 'rgba(104, 104, 108, 0.2)'
                },
                angleLines: {
                    color: modoOscuro ? 'rgba(255, 255, 255, 0.2)' : 'rgba(104, 104, 108, 0.2)' // lineas que unen los puntos
                }
            }
        }
    };


    Chart.plugins.register({
        beforeDraw: function (chartInstance) {
            var ctx = chartInstance.chart.ctx;
            ctx.fillStyle = modoOscuro ? '#212123' : '#EFEFEF';
            ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
        }
    })
    window.myRadar = new Chart(document.getElementById("canvas"), config);
}
inicializarChart();
