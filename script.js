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

//index.html
const buttonLikeOn = document.querySelector("#main_second_button_like_on");
const buttonCandidateOn = document.querySelector("#main_second_button_candidate_on");
const buttonLikeOff = document.querySelector("#main_second_button_like_off");
const buttonCandidateOff = document.querySelector("#main_second_button_candidate_off");

const contentCandidate = document.querySelectorAll("#main_content_box_head_name");
const contentLike = document.querySelectorAll("#main_content_box_tail_like");

buttonLikeOn.addEventListener("click", changeLikeButton);
buttonCandidateOn.addEventListener("click", changeCandidateButton);
// buttonLikeOff.addEventListener("click", makeButtonOn);
// buttonCandidateOff.addEventListener("click", makeButtonOn);

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
