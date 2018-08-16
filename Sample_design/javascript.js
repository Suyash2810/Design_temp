function func_box(){
    var box1 = document.querySelector('.box1');
    setTimeout(function(){
        box1.style.visibility = 'visible';
    },800);
    var box2 = document.querySelector('.box2');
    setTimeout(function(){
        box2.style.visibility = 'visible';
    },900);
    var box3 = document.querySelector('.box3');
    setTimeout(function(){
        box3.style.visibility = 'visible';
    },1000);
    var box4 = document.querySelector('.box4');
    setTimeout(function(){
        box4.style.visibility = 'visible';
    },1000);
}

func_box();


document.querySelector('.img1').addEventListener('mouseenter',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img1',
        translateY: '-150px',
        easing:'easeInOutSine',
        duration:500,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:1.0},
            {value:0.5}
        ]
    });

    var description = document.querySelector('.title1');

    setTimeout(function(){
        description.style.display = 'block';
    },800);

    var objdes = anime({
        targets:'.title1',
        translateY:'-120px',
        easing:'easeInOutSine',
        duration:1300,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:0},
            {value:1.0}
        ],
        opacity:[
            {value:0},
            {value:1.0}
        ]
    });

});

document.querySelector('.box1').addEventListener('mouseleave',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img1',
        translateY: '0px',
        easing:'easeInOutSine',
        duration:1000,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:0.5},
            {value:1.0}
        ]
    });


    var description = document.querySelector('.title1');

    setTimeout(function(){
        description.style.display = 'none';
    },800);

    var objdes = anime({
        targets:'.title1',
        easing:'easeInOutSine',
        translateY:'-80px',
        duration:600,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:1.0},
            {value:0}
        ],
        opacity:[
            {value:1.0},
            {value:0}
        ]
    });

});

//second box

document.querySelector('.img2').addEventListener('mouseenter',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img2',
        translateY: '-150px',
        easing:'easeInOutSine',
        duration:500,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:1.0},
            {value:0.5}
        ]
    });

    var description = document.querySelector('.title2');

    setTimeout(function(){
        description.style.display = 'block';
    },800);

    var objdes = anime({
        targets:'.title2',
        translateY:'-130px',
        easing:'easeInOutSine',
        duration:1300,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:0},
            {value:1.0}
        ],
        opacity:[
            {value:0},
            {value:1.0}
        ]
    });

});

document.querySelector('.box2').addEventListener('mouseleave',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img2',
        translateY: '0px',
        easing:'easeInOutSine',
        duration:1000,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:0.5},
            {value:1.0}
        ]
    });


    var description = document.querySelector('.title2');

    setTimeout(function(){
        description.style.display = 'none';
    },800);

    var objdes = anime({
        targets:'.title2',
        easing:'easeInOutSine',
        translateY:'-80px',
        duration:600,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:1.0},
            {value:0}
        ],
        opacity:[
            {value:1.0},
            {value:0}
        ]
    });

});

//third box

document.querySelector('.img3').addEventListener('mouseenter',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img3',
        translateY: '-150px',
        easing:'easeInOutSine',
        duration:500,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:1.0},
            {value:0.5}
        ]
    });

    var description = document.querySelector('.title3');

    setTimeout(function(){
        description.style.display = 'block';
    },800);

    var objdes = anime({
        targets:'.title3',
        translateY:'-130px',
        easing:'easeInOutSine',
        duration:1300,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:0},
            {value:1.0}
        ],
        opacity:[
            {value:0},
            {value:1.0}
        ]
    });

});

document.querySelector('.box3').addEventListener('mouseleave',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img3',
        translateY: '0px',
        easing:'easeInOutSine',
        duration:1000,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:0.5},
            {value:1.0}
        ]
    });


    var description = document.querySelector('.title3');

    setTimeout(function(){
        description.style.display = 'none';
    },800);

    var objdes = anime({
        targets:'.title3',
        easing:'easeInOutSine',
        translateY:'-80px',
        duration:600,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:1.0},
            {value:0}
        ],
        opacity:[
            {value:1.0},
            {value:0}
        ]
    });

});

//fourth box

document.querySelector('.img4').addEventListener('mouseenter',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img4',
        translateY: '-150px',
        easing:'easeInOutSine',
        duration:500,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:1.0},
            {value:0.5}
        ]
    });

    var description = document.querySelector('.title4');

    setTimeout(function(){
        description.style.display = 'block';
    },800);

    var objdes = anime({
        targets:'.title4',
        translateY:'-130px',
        easing:'easeInOutSine',
        duration:1300,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:0},
            {value:1.0}
        ],
        opacity:[
            {value:0},
            {value:1.0}
        ]
    });

});

document.querySelector('.box4').addEventListener('mouseleave',function(e){
    e.preventDefault();

    var obj = anime({
        targets:'.img4',
        translateY: '0px',
        easing:'easeInOutSine',
        duration:1000,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 100*i;
        },
        scale:[
            {value:0.5},
            {value:1.0}
        ]
    });


    var description = document.querySelector('.title4');

    setTimeout(function(){
        description.style.display = 'none';
    },800);

    var objdes = anime({
        targets:'.title4',
        easing:'easeInOutSine',
        translateY:'-80px',
        duration:600,
        elasticity:function(el,i,l){
            return 200 + (200*i);
        },
        delay:function(el,i,l){
            return 110*i;
        },
        scale:[
            {value:1.0},
            {value:0}
        ],
        opacity:[
            {value:1.0},
            {value:0}
        ]
    });

});