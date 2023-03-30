let counter = 0;
const form = document.querySelector(`form`);
form.addEventListener(`submit`, addTask)

function isEmpty(){
    let text = document.getElementById('input').value;

    if(text === ""){
        alert("Input field is empty");
        return true;
    }
    return false;
}



function addTask(event){
    if(!isEmpty()){

        event.preventDefault(); 
        let taskName = document.getElementById(`input`).value;
    
        const parent = document.querySelector(`form`);
        parent.style.backgroundColor = `white`;
       
        const child = document.createElement(`div`);
        child.id = `task_${counter++}`;
        child.style.display = 'flex';
        child.style.justifyContent = `space-evenly`;
        child.style.alignItems = `center`;
        child.style.backgroundColor = `rgba(249,249,249,255)`;
        child.style.marginBottom = `10px` ;
        child.style.padding = `10px`
        child.style.marginLeft = `40px`;
        child.style.marginRight = `30px`;
        child.style.borderRadius = `5px`;
        child.style.boxShadow = `0px 4px 4px rgba(0, 0, 0, 0.25)`;
        
        parent.appendChild(child);

        const checkbox = document.createElement(`input`);
        checkbox.type=`checkbox`;
        checkbox.id=taskName;
        child.appendChild(checkbox);
        
        const textName = document.createElement(`label`);
        textName.htmlFor=taskName;
        textName.textContent = taskName;
        child.appendChild(textName);
        
        const dlt = document.createElement(`button`);
        dlt.textContent = `DELETE`
        dlt.id = `delete_${new Date().getTime()}`;
        dlt.style.backgroundColor = `red`;
        dlt.style.borderColor = `red`;
        dlt.style.borderRadius = `5px`;
        dlt.style.color = `white`;
        child.appendChild(dlt);
        dlt.addEventListener("click", function () {
            const taskDiv = document.getElementById(child.id); 
            taskDiv.remove();
        });

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                textName.style.textDecoration = "line-through";
                dlt.style.textDecoration = "line-through";
            } else {
                textName.style.textDecoration = "none";
                dlt.style.textDecoration = "none";
            }
           
        });

        document.getElementById(`input`).value = ``;
    }

}



