function Property(name, room, bathrooms, price, sqrFeet, image, desc){
    this.Name = name;
    this.Rooms = parseInt(room);
    this.Bathrooms = parseInt(bathrooms);
    this.Price = parseFloat(price);
    this.SqrFeet = parseInt(sqrFeet);
    this.ImageUrl = image;
    this.Description = desc;

}

function register(){
    console.log("Getting form data");
    var name = $("#txtName").val();
    var room = $("#txtRooms").val();
    var bathrooms = $("#txtBathrooms").val();
    var price = $("#txtPrice").val();
    var sqrFeet = $("#txtSqrFeet").val();
    var image = $("#txtImageUrl").val();
    var desc = $("#txtDescription").val();

    var property = new Property(name, room, bathrooms, price, sqrFeet, image, desc);

    console.log(property);

    $.ajax({
        url: "/catalog/registerProperty",
        type: "POST",
        data: JSON.stringify(property),
        contentType: "application/json",
        success: function(res){
            console.log("Server responded", res);
        },
        error: function(details){
            console.log("Error ", details);
        }
    })
}

function init(){
    console.log("Register page");
    // events
    $("#btnSave").click(register);
}


window.onload = init;