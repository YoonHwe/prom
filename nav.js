//navbar.html
//navbar 하단 카테고리
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

const goToTop = document.querySelector("#gototop");
goToTop.addEventListener("click", moveToTop)
window.addEventListener("scroll", goToTopHide);

function goToTopHide(){
    goToTop.style.visibility = "visible";
    const hide = setTimeout(function(){
        goToTop.style.visibility = "hidden";
    }, 5000);
}

function moveToTop(){
    $('html, body').scrollTop(0);
}
function fnMove(){
    $('html, body').animate({scrollTop: 0}, 400);
}
