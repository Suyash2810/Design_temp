const whiteSparks = new mojs.Burst({
    radius: {
        0: 50,
        easing: 'elastic.out'
    },
    angle: {
        360: 0,
        easing: 'cubic.out'
    },
    left: 0,
    top: 0,
    count: 20,
    children: {
        shape: 'line',
        points: '15',
        radius: 'rand(1,10)',
        angle: 'rand(-90,90)',
        stroke: ['white', 'grey'],
        fill: 'none',
        duration: 1000,
        delay: 100,
        strokeWidth: 1

    }
});


document.querySelector('.img1').addEventListener('mouseover', function (event) {
    whiteSparks
        .tune({
            x: event.pageX,
            y: event.pageY
        })
        .replay()
        .generate();

});
document.querySelector('.img2').addEventListener('mouseover', function (event) {
    whiteSparks
        .tune({
            x: event.pageX,
            y: event.pageY
        })
        .replay()
        .generate();

});
document.querySelector('.img3').addEventListener('mouseover', function (event) {
    whiteSparks
        .tune({
            x: event.pageX,
            y: event.pageY
        })
        .replay()
        .generate();

});
document.querySelector('.img4').addEventListener('mouseover', function (event) {
    whiteSparks
        .tune({
            x: event.pageX,
            y: event.pageY
        })
        .replay()
        .generate();

});
