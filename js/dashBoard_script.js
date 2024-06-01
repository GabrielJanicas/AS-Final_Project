document.addEventListener('DOMContentLoaded', function() {
    const userType = localStorage.getItem('userType');
    const userName = localStorage.getItem('userName');

    console.log("type: " + userType);
    console.log("name: " + userName);

    if(userType === null){
        window.location.href = 'login.html';
    
    }else if(userType === 'free'){
        document.getElementById('premium').style.display = 'none';

        document.getElementById('name_navbar').textContent = userName;
        //document.getElementById('account').setAttribute('href', 'profile.html');
        document.getElementById('account').setAttribute('href', 'profile.html');
        
    }else if(userType === 'premium'){
        name_navbar.textContent = userName;
        document.getElementById('account').setAttribute('href', 'profile.html');

        document.getElementById('free').style.display = 'none';
        
    }

    

});




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
