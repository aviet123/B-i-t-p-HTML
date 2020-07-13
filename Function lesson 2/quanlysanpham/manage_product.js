
let Array = ['Bphong','iphone'];
function add_product() {
    let a = document.getElementById('product').value;
    Array.push(a);
    document.getElementById('product').value = "";
    display_product();

}
function display_product() {
    let row = "<table border='0' width='500px' height='100px' cellspacing='0' cellpadding='3'>"
    let count = 1;
    for (let i = 0; i < Array.length; i++) {
        row = row + "<tr>";
            row += '<td>'+ count +'</td>';
            row += '<td id="edit">'+ Array[i] +'</td>';
            row += '<td>'+ '<button type="button" onclick="edit_product('+i+')">Edit</button>' +'</td>';
            row += '<td>'+ '<button type="button" onclick="delete_product('+i+')">Delete</button>' +'</td>';
        row = row + '</tr>';
        count++;
    }
    row = row + '</table>'
    document.getElementById('result').innerHTML = row ;
}
function delete_product(i) {
    Array.splice(i,1)
    display_product();

}
function edit_product(i) {
    let ChangeProduct = prompt('thay đổi sản phẩm thành');
     Array.splice(i,1, ChangeProduct);
    display_product();

}

