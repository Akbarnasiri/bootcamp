let listInfo = [];

let submit_button = document.getElementById("sub_btn");
let tbody= document.getElementById("tbody");


function addTask() {
    let info = {
        firstName: document.getElementById("f_name").value,
        lastName: document.getElementById("l_name").value,
        id: createIndex(),
    }
    listInfo.push(info);
    creatRow();

    document.getElementById("f_name").value = null;
    document.getElementById("l_name").value = null;
    document.getElementById("f_name").focus();
}
let index = 0;
function createIndex() {
    index++;
    return index;
}
function creatRow() {
    tbody.innerHTML = "";
    for (let index = 0; index < listInfo.length; index++) {
        let row = tbody.insertRow(index);
        creatColume(row, index);
    }
}
function creatColume(row, rowNumber) {
    let info = listInfo[rowNumber];
    for (let index = 0; index < 4; index++) {
        let cell = row.insertCell(index);
        if (index == 0) {
            cell.innerText = rowNumber + 1;
        } else if (index == 1) {
            cell.innerText = info.firstName;
        } else if (index == 2) {
            cell.innerText = info.lastName;
        } else if (index == 3) {
            let del = document.createElement("button");
            del.innerText = "del";
            del.style.padding = "5px";
            del.style.backgroundColor = "rgb(210, 101, 101)";
            del.style.marginRight = "5px";
            del.onclick = function () {
                deleteRow(row, info.id);
            };
            cell.appendChild(del);

            let edit = document.createElement("button");
            edit.innerText = "edit";
            edit.style.padding = "5px";
            edit.style.backgroundColor = "rgb(107, 236, 107)";
            edit.onclick = function () {
                editRow(info.id);
            };
            cell.appendChild(edit);
            document.getElementById("f_name").value = null;
            document.getElementById("l_name").value = null;
            document.getElementById("f_name").focus();
        }
    }
}
function deleteRow(row, id) {
    let rowParent = row.parentNode;
    rowParent.removeChild(row);
    let index = findIndexByID(id);
    listInfo.splice(index, 1);
    creatRow();
}

function editRow(id) {
    let index = findIndexByID(id);
    let data = listInfo[index];
    document.getElementById("f_name").value = data.firstName;
    document.getElementById("l_name").value = data.lastName;
    submit_button.value = "edit";
    submit_button.onclick = () => {
        editData(index);
    };
}

function editData(index) {
    let fn =  document.getElementById("f_name").value;
    let ln =  document.getElementById("l_name").value;
    listInfo[index].firstName = fn;
    listInfo[index].lastName = ln;
    creatRow();
    submit_button.value = "submit";
    submit_button.onclick = () => {
        addTask();
    };
}

function findIndexByID(id) {
    let index = -1;
    listInfo.forEach((element, i) => {
        if (element.id == id) {
            index = i;
        }
    });
    return index;
}