//index.html
const buttonCandidateOn = document.querySelector("#main_second_button_candidate_on");
const buttonCandidateOff = document.querySelector("#main_second_button_candidate_off");
const contentCandidate = document.querySelectorAll("#main_content_box_tail_name");

buttonCandidateOn.addEventListener("click", changeCandidateButton);

function changeCandidateButton(event){
    let selectedId = event.path[0].id;
    const target = document.getElementById(`${selectedId}`);
    if(selectedId == "main_second_button_candidate_on"){
        selectedId = selectedId.replace("_on", "_off");
        contentCandidate.forEach(element => {
            element.style.visibility = "hidden";
        })
    }
    else{
        selectedId = selectedId.replace("_off", "_on");
        contentCandidate.forEach(element => {
            element.style.visibility = "visible";
        })
    }
    target.id = selectedId
}

const field = document.querySelectorAll("#main_first_field_box_set div");
const fieldAll = field[0];
const fieldOne = field[1];
const fieldTwo = field[2];
const fieldThree = field[3];
const fieldFour = field[4];
const contentBox = document.querySelectorAll("#main_content_box"); 
// const bodyField = document.querySelectorAll("#main_content_box_head_field");
field[0].style.backgroundColor = "black";
field[0].style.color = "white";
fieldAll.addEventListener("click", fieldAllFilter)
fieldOne.addEventListener("click", fieldOneFilter);
fieldTwo.addEventListener("click", fieldTwoFilter);
fieldThree.addEventListener("click", fieldThreeFilter);
fieldFour.addEventListener("click", fieldFourFilter);
function fieldAllFilter(){
    for(i = 0; i < field.length; i++){
        field[i].style.backgroundColor = "white";
        field[i].style.color = "black";
    }
    fieldAll.style.backgroundColor = "black";
    fieldAll.style.color = "white";
    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector("#main_content_box_head_field");
        console.log(bodyField);
        contentBox[i].style.display = "";
    }
}
function fieldOneFilter(){
    for(i = 0; i < field.length; i++){
        field[i].style.backgroundColor = "white";
        field[i].style.color = "black";
    }
    fieldOne.style.backgroundColor = "black";
    fieldOne.style.color = "white";
    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector("#main_content_box_head_field");
        console.log(bodyField);
        if(fieldOne.innerText == bodyField.innerText){
            contentBox[i].style.display = "";
        }
        else{
            contentBox[i].style.display = "none";
        }
    }
}
function fieldTwoFilter(){
    for(i = 0; i < field.length; i++){
        field[i].style.backgroundColor = "white";
        field[i].style.color = "black";
    }
    fieldTwo.style.backgroundColor = "black";
    fieldTwo.style.color = "white";
    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector("#main_content_box_head_field");
        console.log(bodyField);
        if(fieldTwo.innerText == bodyField.innerText){
            contentBox[i].style.display = "";
        }
        else{
            contentBox[i].style.display = "none";
        }
    }
}
function fieldThreeFilter(){
    for(i = 0; i < field.length; i++){
        field[i].style.backgroundColor = "white";
        field[i].style.color = "black";
    }
    fieldThree.style.backgroundColor = "black";
    fieldThree.style.color = "white";
    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector("#main_content_box_head_field");
        console.log(bodyField);
        if(fieldThree.innerText == bodyField.innerText){
            contentBox[i].style.display = "";
        }
        else{
            contentBox[i].style.display = "none";
        }
    }
}
function fieldFourFilter(){
    for(i = 0; i < field.length; i++){
        field[i].style.backgroundColor = "white";
        field[i].style.color = "black";
    }
    fieldFour.style.backgroundColor = "black";
    fieldFour.style.color = "white";
    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector("#main_content_box_head_field");
        console.log(bodyField);
        if(fieldFour.innerText == bodyField.innerText){
            contentBox[i].style.display = "";
        }
        else{
            contentBox[i].style.display = "none";
        }
    }
}

const mainContentCheckbox = document.querySelectorAll("#main_content_box_head_checkbox input");
mainContentCheckbox.forEach(function(checked){
    checked.addEventListener("click", checkCount);
})
const mainCompare = document.querySelector("#main_compare");
function checkCount(event){
    let checkCountNum = 0;
    for(i = 0; i < mainContentCheckbox.length; i++){
        if(mainContentCheckbox[i].checked){
            checkCountNum++;
        }
    }
    if(checkCountNum == 0){
        mainCompare.style.display = "none";
    }
    else if(checkCountNum > 0 && checkCountNum <= 5){
        mainCompare.style.display = "inline";
    }
    if(checkCountNum > 5){
        alert("최대 5개까지 비교하실 수 있습니다.");
        event.preventDefault();
    }
    console.log(checkCountNum);
}