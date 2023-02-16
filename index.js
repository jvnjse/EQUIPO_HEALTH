var xValues1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var yValues1 = [1160, 451, 325, 171, 156, 120, 90, 80, 49, 24, 3, 1, 1];
var barColors = ["#7cb5eb", "#424448", "#90ef7c", "#f6a45c", "#7f86e7","#424448",""];

// canvas.width = chart1-container.clientWidth;
// canvas.height = theDiv.clientHeight;



new Chart("myChart1", {
    type: "bar",
    data: {
        labels: xValues1,
        datasets: [{
            backgroundColor: barColors,
            data: yValues1,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
            display: true,
            text: "Service Providers"
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Orders",
                }
            },
            x: {
                title: {
                    display: false,
                    text: 'xTitle'
                }
            }
        }
    },

});
var xValues2 = [0];
var yValues2 = [451];
var barColors = ["#7cb5eb"];


new Chart("myChart2", {
    type: "bar",
    data: {

        labels: xValues2,
        datasets: [{
            backgroundColor: barColors,
            data: yValues2,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
            display: true,
            text: "Service Type"
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Orders",
                }
            },
            x: {
                title: {
                    display: false,
                    text: 'xTitle'
                }
            }
        }
    },

});



var xValues3 = ["routine", "stat", "Urgent"];
var yValues3 = [221, 168, 62];
var barColors = ["#56a73c", "#f80300", "#fdc000"];


new Chart("myChart3", {
    type: "bar",
    data: {
        labels: xValues3,
        datasets: [{
            backgroundColor: barColors,
            data: yValues3,
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
            display: true,
            text: "Priority Breakdown of last 2 month"
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Orders",
                }
            },
            x: {
                title: {
                    display: false,
                    text: 'xTitle'
                }
            }
        }
    },

});


var xValues4 = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
var yValues4 = [729, 649, 578, 296, 218, 4];
var yValues4a = [0, 3, 4, 1, 0, 4];
// var barColors = ["lightblue", "green", "blue", "orange", "black"];
var dataFirst = {
    label: "Routine",
    data: [729, 649, 578, 296, 218, 4],
    lineTension: 0,
    fill: false,
    borderColor: 'green'
};

var dataSecond = {
    label: "Urgent",
    data: [0, 3, 4, 1, 0, 4],
    lineTension: 0,
    fill: false,
    borderColor: 'yellow'
};
var dataThird = {
    label: "Stat",
    data: [0, 0, 0, 0, 57, 4],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
};
var speedData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [dataFirst, dataSecond, dataThird]
};

new Chart("myChart4", {
    type: "line",
    data: speedData,
    options: {
        maintainAspectRatio: false,
        legend: { display: false },
        title: {
            display: true,
            text: "Order Trend of Last 6 Months"
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Orders",
                }
            },
            x: {
                title: {
                    display: false,
                    text: 'xTitle'
                }
            }
        }
    },

});
