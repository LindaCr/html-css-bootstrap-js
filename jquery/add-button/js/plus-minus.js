let nbr=0;

$( () => {
    console.log("new page working");
    $("div, #nbr").css("text-align", "center");
    $("#minus").on("click", () => {
        nbr--;
        display();
    });
    $("#plus").on("click", () => {
        nbr++;
        display();
    });
});


const display = () => {
    $("#nbr").val(nbr);
    $("#nbr").css("color", (nbr%2==0 ? "red": "black"));
    $("#nbr").css("fontWeight", (nbr%3==0 ? "bold": "normal"));
    $("#nbr").css("fontStyle", (nbr%5==0 ? "italic": "normal"));
}