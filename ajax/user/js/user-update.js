const baseurl= "http://localhost:8080/api/users/";

$( () => {
    console.log("We are locked and loaded!");

    $("#getId").on("click", () => {
        var id= $("#zId").val();
        getUserById(id);
    });
   
    $("#save").on("click", () => {
        let user= {};
        getDataInput(user);
        update(user);
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

const getDataInput = (user) => {
    user.id= $("#xId").val();
    user.username= $("#xUsername").val();
    user.password= $("#xPassword").val();
    user.firstName= $("#xFirstName").val();
    user.lastName= $("#xLastName").val();
    user.phone= $("#xPhone").val();
    user.email= $("#xEmail").val();
    user.reviewer= $("#xReviewer").prop("checked");
    user.admin= $("#xAdmin").prop("checked");
};


const displayUser = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(`${user.username}`);
    $("#xPassword").val(`${user.password}`);
    $("#xFirstName").val(`${user.firstName}`);
    $("#xLastName").val(`${user.lastName}`);
    $("#xPhone").val(`${user.phone}`);
    $("#xEmail").val(`${user.email}`);
    $("#xReviewer").prop("checked", `${user.reviewer}`);
    $("#xAdmin").prop("checked", `${user.admin}`);
};


const update = (user) => {
    user.id= Number(user.id);
    console.log(user);
    $.ajax({
        method: "PUT",
        url: `${baseurl}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done(res => {
            console.log("Update successful");
        })
        .fail(err => {
            console.error(err);
        });
 

};