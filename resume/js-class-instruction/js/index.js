
class Subject{

constructor(name,rating=0){
    this.name=name;
    this.rating=rating;
}


}

let subjects=[

];

const add=() => {
    let nameCtrl=document.getElementById("name");
    let ratingCtrl=document.getElementById("rating");
    let subject= new Subject(nameCtrl.value, ratingCtrl.value);
    subjects.push(subject);
    displaySubjects();
};

const remove= () => {
    //same as add, but one line to attribute name value
    let name=document.getElementById("name").value;
    let idx=-1;
    for(let i in subjects) {
        if (name.toLowerCase()===subjects[i].name.toLowerCase()) {
            idx=i;
            break;
        }
    }
    if (idx !=-1){
    subjects.splice(idx, 1);
    }
    displaySubjects();
};

const displaySubjects=() =>{
    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";
    for(let subject of subjects){
        let tr= "<tr>";
        tr+=`<td>${subject.name}</td>`;
        tr+=`<td>${subject.rating}</td>`;
        tr+="</tr>";
        tbody.innerHTML +=tr;
    }
};