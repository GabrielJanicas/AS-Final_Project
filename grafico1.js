document.addEventListener("DOMContentLoaded", function() {
            var ctx = document.getElementById('meuGrafico').getContext('2d');
            var meuGrafico = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Poluição do Ar',
                        data: [35, 25, 30, 20, 40, 50, 35, 25, 40, 20, 35, 40],
                        backgroundColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        borderColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        borderWidth: 1
                    },
                    {
                        label: 'Poluição Sonora',
                        data: [15, 30, 20, 30, 25, 25, 15, 15, 35, 15, 35, 45],
                        backgroundColor: 'rgba(192, 192, 192, 1)', // Cor cinza clara sólida
                        borderColor: 'rgba(192, 192, 192, 1)', // Cor cinza clara sólida
                        borderWidth: 1
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
