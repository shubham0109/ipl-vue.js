export const chartData = [
//0
    {
        type: 'pie',
        data: {
            labels: ["Boundaries", "Not Boundaries"],
            datasets: [{
                label: 'Runs Distribution Percentage',
                data: [58, 42],
                backgroundColor: [
                    'rgb(17, 135, 52)',
                    'rgb(232, 31, 4)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    
    },
//1
    {
        type: 'pie',
        data: {
            labels: ["toss winners", "toss losers"],
            datasets: [{
                label: 'toss the boss',
                data: [291, 286],
                backgroundColor: [
                    'rgb(46, 46, 48)',
                    'rgb(217, 217, 221)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    
    },
//2
    {
        type: 'pie',
        data: {
            labels: ["Batting First", "Batting Second"],
            datasets: [{
                label: 'Wins Distribution',
                data: [261, 307],
                backgroundColor: [
                    'rgb(6, 219, 144)',
                    'rgb(237, 18, 51)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    
    },
//3
    {
        type: 'pie',
        data: {
            labels: ["Dots", "Runs"],
            datasets: [{
                label: 'Runs vs Dots',
                data: [55874, 80648],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    
    },
//4
    {
        type: 'bar',
        data: {
            labels: ["India", "Australia", "South Africa", "New Zealand", "Sri Lanka", "West Indies", "England", "Pakistan","Bangladesh","Zimbabwae", "Netherlands"],
            datasets: [{
                label: 'country Distribution',
                data: [291, 78, 44, 26, 22, 20, 18, 15, 5, 3, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255, 100, 164, 0.8)',
                    'rgba(255, 159, 200, 0.8)',
                    'rgba(100, 159, 64, 0.8)',
                    'rgba(155, 159, 64, 0.8)',
                    'rgba(55, 59, 4, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    },
 //5   
    {
        type: 'pie',
        data: {
            labels: ["Domestic", "Foreigners"],
            datasets: [{
                label: 'Score Distribution',
                data: [56, 44],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }

    },
//6
    {
        type: 'bar',
        data: {
            labels: ["1 - 10 Overs", "10 - 15 Overs", "15 - 18 Overs", "19th Over", "20th Over"],
            datasets: [{
                label: 'Over Distribution',
                data: [14, 43, 90, 95, 332],
                backgroundColor: [
                    'green',
                    'gray',
                    'blue',
                    'orange',
                    'red',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }

    },


//7
    {
        type: 'pie',
        data: {
            labels: ["Dots", "Ones", "Twos", "Threes", "Fours", "Sixes"],
            datasets: [{
                label: 'Score Distribution',
                data: [55874, 50107, 8842, 473, 15413, 5813],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ],
                
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }

    }

]

export default chartData;