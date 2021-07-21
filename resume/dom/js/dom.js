
console.log("ok");


const move= () => {
   // first two lines read an attribute
    let ctrl=document.getElementById("inp");
    let val=ctrl.value;
    //these lines set an attribute
    let lblctrl=document.getElementById("lbl");
   lblctrl.value=val;
 if (val.toString()==="123") {
    document.getElementById("lbl").style.color="green";
}
}

//const move=() => {
  //  let val=document.getElementById("inp").val;
  //  document.getElementById("lbl").value=val;
  //  if (val.toString()==="123") {
  //      document.getElementById("lbl").style.color="green";
  //  }
//}