document.addEventListener("DOMContentLoaded", function() {
            var ctx = document.getElementById('meuGrafico2').getContext('2d');
            var meuGrafico = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['01', '02', '03', '04', '05', '06'],
                    datasets: [{
                        label: 'Poluição do Ar',
                        data: [65, 59, 80, 81, 56, 55],
                        borderColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Sem cor de fundo
                        borderWidth: 2
                    },
                    {
                        label: 'Poluição Sonora',
                        data: [28, 48, 40, 19, 86, 27],
                        borderColor: 'rgba(192, 192, 192, 1)', // Cor cinza clara sólida
                        backgroundColor: 'rgba(192, 192, 192, 0)', // Sem cor de fundo
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#333' // Cor das legendas
                            }
                        }
                    }
                }
            });
        });
