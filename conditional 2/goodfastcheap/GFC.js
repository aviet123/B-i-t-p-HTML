function check() {
    var Good = document.getElementById('good');
    var Cheap = document.getElementById('cheap');
    var Fast = document.getElementById('fast');

    switch (Good == true) {
        case Cheap:
            Fast = false;
            break;
        case Fast:
            Cheap = false;
            break;
    }
    switch (Fast == true) {
        case Cheap:
            Good = false;
            break;
    }

}