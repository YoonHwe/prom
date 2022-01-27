//navbar.html
// const navIconSearch = document.querySelector("#nav_search i");
// const navIconHome = document.querySelector("#nav_home i");
// const navIconUser = document.querySelector("#nav_user i");
// const navClicked = document.querySelector("#nav_clicked");
// navIconSearch.addEventListener("click", changeSearchColor);
// navIconHome.addEventListener("click", changeHomeColor);
// navIconUser.addEventListener("click", changeUserColor);
// function changeSearchColor(){
//     if(navIconHome.classList.contains("fas")){
//         navIconHome.classList.remove("fas")
//         navIconHome.classList.add("far")
//     }
//     if(navIconUser.classList.contains("fas")){
//         navIconUser.classList.remove("fas")
//         navIconUser.classList.add("far")
//     }
//     navIconSearch.classList.toggle("fas");
//     navIconSearch.classList.toggle("far");   
//     console.log(navIconSearch);
//     navClicked.innerText = "Search"
//     if(navIconSearch.classList.contains("far")){
//         navClicked.innerText = ""
//     }
// }
// function changeHomeColor(){
//     if(navIconSearch.classList.contains("fas")){
//         navIconSearch.classList.remove("fas")
//         navIconSearch.classList.add("far")
//     }
//     if(navIconUser.classList.contains("fas")){
//         navIconUser.classList.remove("fas")
//         navIconUser.classList.add("far")
//     }
//     navIconHome.classList.toggle("fas");
//     navIconHome.classList.toggle("far");   
//     console.log(navIconHome);
//     navClicked.innerText = "Home"
//     if(navIconHome.classList.contains("far")){
//         navClicked.innerText = ""
//     }
// }
// function changeUserColor(){
//     if(navIconSearch.classList.contains("fas")){
//         navIconSearch.classList.remove("fas")
//         navIconSearch.classList.add("far")
//     }
//     if(navIconHome.classList.contains("fas")){
//         navIconHome.classList.remove("fas")
//         navIconHome.classList.add("far")
//     }
//     navIconUser.classList.toggle("fas");
//     navIconUser.classList.toggle("far");   
//     console.log(navIconUser);
//     navClicked.innerText = "User"
//     if(navIconUser.classList.contains("far")){
//         navClicked.innerText = ""
//     }
// }

// const goToTop = document.querySelector("#gototop");
// goToTop.addEventListener("click", moveToTop)
// window.addEventListener("scroll", goToTopHide);

// function goToTopHide(){
//     goToTop.style.visibility = "visible";
//     const hide = setTimeout(function(){
//         goToTop.style.visibility = "hidden";
//     }, 5000);
// }

function moveToTop(){
    $('html, body').scrollTop(0);
}
function fnMove(){
    $('html, body').animate({scrollTop: 0}, 400);
}
//index.html
const buttonLikeOn = document.querySelector("#main_second_button_like_on");
const buttonCandidateOn = document.querySelector("#main_second_button_candidate_on");
const buttonLikeOff = document.querySelector("#main_second_button_like_off");
const buttonCandidateOff = document.querySelector("#main_second_button_candidate_off");

const contentCandidate = document.querySelectorAll("#main_content_box_tail_name");

buttonCandidateOn.addEventListener("click", changeCandidateButton);

function changeLikeButton(event){
    let selectedId = event.path[0].id;
    const target = document.getElementById(`${selectedId}`);
    if(selectedId == "main_second_button_like_on"){
        selectedId = selectedId.replace("_on", "_off");
        contentLike.forEach(element => {
            element.style.visibility = "hidden";
        })
    }
    else{
        selectedId = selectedId.replace("_off", "_on");
        contentLike.forEach(element => {
            element.style.visibility = "visible";
        })
    }
    target.id = selectedId
}

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
