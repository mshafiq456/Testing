/**
 * Created by Shafiq on 7/31/2015.
 */
function showMap (latitude, longitude) {
    var myMap = new ymaps.Map('map',{
        center:[latitude, longitude],
        zoom:16
    });


}

/*
MORE PROJECT description checking for looking to see on github. I don't know what is going on!
 */
function mybreakpoint(){
    var myelement = document.getElementsByTagName('h1')[0];
    for(i = 0; i<5;i++){
        myelement.textContent = i;
    }
}
