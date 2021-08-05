$( () => {
    // $("#zGet").on("click", () => {
    //     let id = $("#zId").val();
    let urlParms = parseUrl();
    let id = +urlParms.id;
        vendorGetById(id)
            .done(res => {
                console.debug(res);
                display(res);
            })
            .fail (err => {
                $("#message").html("</b>Vendor not found!</b>");
                console.error(err);
    });

    $("#save").on("click", () => {
       update();

    });
});


const display = (vendor) => {
    $("#xId").val(vendor.id);
    $("#xCode").val(`${vendor.code}`);
    $("#xName").val(`${vendor.name}`);
    $("#xAddress").val(`${vendor.address}`);
    $("#xCity").val(`${vendor.city}`);
    $("#xState").val(`${vendor.state}`);
    $("#xZip").val(`${vendor.zip}`);
    $("#xPhone").val(`${vendor.phone}`);
    $("#xEmail").val(`${vendor.email}`);
};

  
const change = () => {
    let vendor= {};
    vendor.id= $("#xId").val();
    vendor.code= $("#xCode").val();
    vendor.name= $("#xName").val();
    vendor.address= $("#xAddress").val();
    vendor.city= $("#xCity").val();
    vendor.state= $("#xState").val();
    vendor.zip= $("#xZip").val();
    vendor.phone= $("#xPhone").val();
    vendor.email= $("#xEmail").val();

    vendorUpdate(vendor)
        .done(res => {
            console.debug(res);
            console.log("Update successful!"); 
            window.location.href = "../getall/vendor-getall.html";
        })
        .fail(err => {
            console.error(err);
        });

};
