function check(num) {
    var Good = document.getElementById('good');
    var Cheap = document.getElementById('cheap');
    var Fast = document.getElementById('fast');

    if (Good.checked == Fast.checked == true)
    {if (num == 1) {
        document.getElementById('cheap').checked = false;
    }
    }
    if (Fast.checked == Cheap.checked == true)
    {if (num == 2) {
        document.getElementById('good').checked = false;
    }
    }
    if (Cheap.checked == Good.checked == true)
    {if (num == 3) {
        document.getElementById('good').checked = false;
    }
    }

}