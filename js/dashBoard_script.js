document.addEventListener('DOMContentLoaded', function () {
            const userType = localStorage.getItem('userType');
            const userName = localStorage.getItem('userName');

            console.log("type: " + userType);
            console.log("name: " + userName);

            if (userType === null) {
                window.location.href = 'login.html';

            } else if (userType === 'free') {
                document.getElementById('premium').style.display = 'none';

                document.getElementById('name_navbar').textContent = userName;
                document.getElementById('account').setAttribute('href', 'profile.html');

            } else if (userType === 'premium') {
                name_navbar.textContent = userName;
                document.getElementById('account').setAttribute('href', 'profile.html');

                document.getElementById('free').style.display = 'none';

            }
        });

        const pollutionData = {
            'Aveiro': {
                air: [35, 25, 30, 20, 40, 50, 35, 25, 40, 20, 35, 40],
                sound: [15, 30, 20, 30, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [65, 59, 80, 81, 56, 55],
                soundLine: [28, 48, 40, 19, 86, 27]
            },
            'Beja': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Braga': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            },
            'Bragança': {
                air: [20, 15, 20, 10, 30, 40, 20, 15, 30, 10, 25, 30],
                sound: [10, 20, 10, 20, 15, 15, 10, 10, 25, 10, 25, 35],
                airLine: [45, 50, 70, 65, 55, 50],
                soundLine: [18, 38, 30, 13, 68, 25]
            },
            'Castelo Branco': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Coimbra': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            },
            'Évora': {
                air: [20, 15, 20, 10, 30, 40, 20, 15, 30, 10, 25, 30],
                sound: [10, 20, 10, 20, 15, 15, 10, 10, 25, 10, 25, 35],
                airLine: [45, 50, 70, 65, 55, 50],
                soundLine: [18, 38, 30, 13, 68, 25]
            },
            'Faro': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Guarda': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            },
            'Leiria': {
                air: [20, 15, 20, 10, 30, 40, 20, 15, 30, 10, 25, 30],
                sound: [10, 20, 10, 20, 15, 15, 10, 10, 25, 10, 25, 35],
                airLine: [45, 50, 70, 65, 55, 50],
                soundLine: [18, 38, 30, 13, 68, 25]
            },
            'Lisboa': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Portalegre': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            },
            'Porto': {
                air: [20, 15, 20, 10, 30, 40, 20, 15, 30, 10, 25, 30],
                sound: [10, 20, 10, 20, 15, 15, 10, 10, 25, 10, 25, 35],
                airLine: [45, 50, 70, 65, 55, 50],
                soundLine: [18, 38, 30, 13, 68, 25]
            },
            'Santarém': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Setúbal': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            },
            'Viana do Castelo': {
                air: [20, 15, 20, 10, 30, 40, 20, 15, 30, 10, 25, 30],
                sound: [10, 20, 10, 20, 15, 15, 10, 10, 25, 10, 25, 35],
                airLine: [45, 50, 70, 65, 55, 50],
                soundLine: [18, 38, 30, 13, 68, 25]
            },
            'Vila Real': {
                air: [25, 20, 25, 15, 35, 45, 25, 20, 35, 15, 30, 35],
                sound: [10, 25, 15, 25, 20, 20, 10, 10, 30, 10, 30, 40],
                airLine: [50, 55, 75, 70, 60, 65],
                soundLine: [20, 40, 35, 15, 70, 30]
            },
            'Viseu': {
                air: [30, 20, 25, 15, 40, 45, 30, 20, 40, 15, 30, 35],
                sound: [15, 25, 20, 25, 25, 25, 15, 15, 35, 15, 35, 45],
                airLine: [60, 55, 75, 70, 65, 60],
                soundLine: [25, 45, 35, 20, 75, 30]
            }
            // Add data for other districts here...
        };

        function updateChartData(chart, data, type) {
            if (type === 'bar') {
                chart.data.datasets[0].data = data.air;
                chart.data.datasets[1].data = data.sound;
            } else if (type === 'line') {
                chart.data.datasets[0].data = data.airLine;
                chart.data.datasets[1].data = data.soundLine;
            }
            chart.update();
        }

        document.addEventListener("DOMContentLoaded", function () {
            const ctx1 = document.getElementById('meuGrafico').getContext('2d');
            const meuGrafico = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Poluição do Ar',
                        data: pollutionData['Aveiro'].air,
                        backgroundColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        borderColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        borderWidth: 1
                    },
                    {
                        label: 'Poluição Sonora',
                        data: pollutionData['Aveiro'].sound,
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

            const ctx2 = document.getElementById('meuGrafico2').getContext('2d');
            const meuGrafico2 = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: ['01', '02', '03', '04', '05', '06'],
                    datasets: [{
                        label: 'Poluição do Ar',
                        data: pollutionData['Aveiro'].airLine,
                        borderColor: 'rgba(0, 0, 0, 1)', // Cor preta sólida
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Sem cor de fundo
                        borderWidth: 2
                    },
                    {
                        label: 'Poluição Sonora',
                        data: pollutionData['Aveiro'].soundLine,
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
            
            document.getElementById('escolha').addEventListener('change', function () {
                const selectedDistrict = this.value;
                const data = pollutionData[selectedDistrict];
                updateChartData(meuGrafico, data, 'bar');
                updateChartData(meuGrafico2, data, 'line');
            });


            document.getElementById('navbar-toggler').addEventListener('click', function() {
                window.location.href = 'index.html';
            });

        });