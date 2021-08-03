

$( () => {
    console.log("We are locked and loaded!");

    $("#zGet").on("click", () => {
        let id= $("#zId").val();
        vendorGetById(id)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => console.error(err));
    });
    $("#delete").on("click", () => {
        let id= $("#yId").val();
        vendorDelete(id)
            .done(res => {
                console.log("Delete successful");
            })
            .fail(err => {
                console.error(err);
            });
    });

});

const display = (vendor) => {
    $("#dId").val(vendor.id);
    $("#dCode").val(vendor.code);
    $("#dName").val(vendor.name);
    $("#dAddress").val(vendor.address);
    $("#dCity").val(vendor.city);
    $("#dState").val(vendor.state);
    $("#dZip").val(vendor.zip);
    $("#dPhone").val(vendor.phone);
    $("#dEmail").val(vendor.email);
}