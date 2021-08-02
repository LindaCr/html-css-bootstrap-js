const baseurl= "http://localhost:8080/api/users/";

$( () => {
    console.log("We are locked and loaded!");

    $("#getId").on("click", () => {
        let id= $("#zId").val();
        getUserById(id);
    });
    $("#delete").on("click", () => {
        let id= $("#yId").val();
        deleteUser(id);
    });

});

const getUserById = (id) => {
    $.getJSON(`${baseurl}${id}`)
        .done(res => {
            console.debug(res);
            displayUser(res);
        })
        .fail(err => {
            console.error(err);
        });
};

const displayUser = (user) => {
    $("#dId").html(user.id);
    $("#dUsername").text(user.username);
    $("#dPassword").text(user.password);
    $("#dFirstName").text(user.firstName);
    $("#dLastName").text(user.lastName);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#dReviewer").text(`${(user.reviewer ? "Yes":"No")}`);
    $("#dAdmin").text(`${(user.admin ? "Yes":"No")}`);
};

const deleteUser = (id) => {

    $.ajax({
        method: "DELETE",
        url: `${baseurl}${id}`,
        contentType: `application/json`
    })
        .done(res => { 
            console.log("Delete successful.");
        })
        .fail(err => {
            console.error(err);
        });
};
