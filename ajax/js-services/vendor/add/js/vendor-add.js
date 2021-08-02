

$( () => {
    console.log("We are locked and loaded!");

    $("#save").on("click", () => {
        create();
    
    });
});
  
const create = () => {
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


    vendorAdd(vendor)
    .done(res=> {
        console.debug(res);
        console.log("Add successful");
    })
    .fail(err => {
        console.error(err);
    });
};

