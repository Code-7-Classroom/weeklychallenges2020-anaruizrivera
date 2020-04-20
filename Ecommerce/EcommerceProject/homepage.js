var i = 0; // Starting Point
var images = [];
var time = 3000; 


//Image List
images[0] = 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
images[1] = 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
images[2] = 'https://images.unsplash.com/photo-1485456780483-06106d602fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
images[3] = 'https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
images[4] = 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

// Transition
function changeImages(){
    document.getElementById("homePage_slider").src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout('changeImages()', time);
}


window.onload = changeImages;