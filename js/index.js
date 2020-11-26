let options = {
    startAngle: -1.55,
    size: 250,
    value: 76,
    fill: { color: "#fff" }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)))
    });

$(".js .bar").circleProgress({
    value: 0.76,
});

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

async function getVijesti() {
    let res = await fetch('http://localhost:3000/vijesti');
    let json = await res.json();
    return json;
}


getVijesti().then((vijesti) => {
    console.log(vijesti);
})



async function addMessage(data) {
    debugger;
    let res = await fetch('http://localhost:3000/poruke', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            data,
        }),
    });
    let json = await res.json();
    return json;
}


let button = document.getElementById('btn');
console.log(button);


button.addEventListener('click', (e) => {
    debugger;
    let ime = document.getElementById('name-forma');
    let email = document.getElementById('email-forma');
    let message = document.getElementById('message-forma');
    let data = {
        name: ime.value,
        email: email.value,
        message: message.value,
    };
    addMessage(data).then((res) => {
        console.log(res);
    });
});