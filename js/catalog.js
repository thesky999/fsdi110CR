
function fetchData(){

    $.ajax({
        url: "/catalog/getCatalog",
        type: "GET",
        success: function(data){
            console.log("Server responded with", data);

            // sort by lowest price first
            // data = data.sort(??) // javascript mozilla array sort

            for(let i = 0; i < data.length; i++){
                let property = data[i];
                var syntax = 
                    `<div class="item">
                        <img src="${property.imageUrl}">
                        <label class='price'>$ ${property.price ? property.price.toFixed(2) : 'Please Call'}</label>
                            <div class="info">
                                <label class="rooms"> ${property.rooms}</label>
                                <label class="bathrooms"> ${property.bathrooms}</label>
                                <label class="area"> ${property.sqrFeet}</label>
                            </div>
                        <label>Description:</label>
                        <p>${property.description}</p>
                    </div`;
                
                $("#catalogContainer").append(syntax);
            }

            //travel the array
            // get each property
            // display property in html
            

        },
        error: function(details){
            console.log("Error", details);
        }
    })
}

function init(){
    console.log("Catalog page");

    fetchData();
}

window.onload = init;