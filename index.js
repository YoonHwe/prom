//index.html

//D-Day
const dayCount = document.querySelector("#main_first_title_lower");
const promiseDay = new Date();
const targetDay = new Date(2022, 2, 9, 0, 0, 0);
const month = String(promiseDay.getMonth()).padStart(2, "0");
const day = String(promiseDay.getDate()).padStart(2, "0");
promiseDay.setMonth(month);
promiseDay.setDate(day);
const timeGap = targetDay - promiseDay;
const dayGap = Math.floor(timeGap / (1000 * 60 * 60 * 24));
if(timeGap <= 0){
    dayCount.innerText = "D - DAY";
}
else{
    dayCount.innerText = `D - ${dayGap + 1}일`;
}

//검색 팝업
//로딩 작업 추후 개발 예정...
const modalSearch = document.querySelector("#modal_search");
const modalSearchResult = document.querySelector(".modal-body");
modalSearch.addEventListener("submit", searchMainContentbyKeyword);
function searchMainContentbyKeyword(event){
    event.preventDefault();
    modalSearchResult.innerHTML = "<p></p>"
    const modalSearchKeyword = modalSearch.querySelector("input");
    const mainContentBox = document.querySelectorAll(".main_content_box");
    let searchResultCount = 0;
    for(i = 0; i < mainContentBox.length; i++){
        const mainContentBoxTitle = mainContentBox[i].querySelector(".main_content_box_body_title").innerText;
        const mainContentBoxContent = mainContentBox[i].querySelector(".main_content_box_body_content").innerText;
        if(mainContentBoxTitle.includes(modalSearchKeyword.value) || mainContentBoxContent.includes(modalSearchKeyword.value)){
            searchResultCount++;
            const newDiv = document.createElement("div");
            newDiv.className = "main_content_box";
            const newDivHead = document.createElement("div");
            newDivHead.className = "main_content_box_head";
            const newDivHeadField = document.createElement("div");
            newDivHeadField.className = "main_content_box_head_field";
            newDivHeadField.innerText = mainContentBox[i].querySelector(".main_content_box_head_field").innerText;
            newDivHead.appendChild(newDivHeadField);
            newDiv.appendChild(newDivHead);

            const newDivBody = document.createElement("div");
            newDivBody.className = "main_content_box_body";
            const newDivBodyTitle = document.createElement("h4");
            newDivBodyTitle.className = "main_content_box_body_title";
            newDivBodyTitle.innerText = mainContentBox[i].querySelector(".main_content_box_body_title").innerText;
            const newDivBodyContent = document.createElement("h6");
            newDivBodyContent.className = "main_content_box_body_content";
            newDivBodyContent.innerText = mainContentBox[i].querySelector(".main_content_box_body_content").innerText;
            newDivBodyContent.innerText = newDivBodyContent.innerText.substr(0, newDivBodyContent.innerText.length - 6);
            const newDivBodyContentAnchor = document.createElement("a");
            newDivBodyContentAnchor.href = mainContentBox[i].querySelector(".main_content_box_body_content a").href;
            newDivBodyContentAnchor.innerText = mainContentBox[i].querySelector(".main_content_box_body_content a").innerText;
            newDivBodyContent.appendChild(newDivBodyContentAnchor);
            newDivBody.appendChild(newDivBodyTitle);
            newDivBody.appendChild(newDivBodyContent);
            newDiv.appendChild(newDivBody);

            const newDivTail = document.createElement("div");
            newDivTail.className = "main_content_box_tail";
            const newDivTailName = document.createElement("div");
            newDivTailName.className = "main_content_box_tail_name";
            newDivTailName.innerText = mainContentBox[i].querySelector(".main_content_box_tail_name").innerText;
            newDivTail.appendChild(newDivTailName);
            newDiv.appendChild(newDivTail);
           
            modalSearchResult.appendChild(newDiv);
        }
    }
    const modalBodyText = document.querySelector(".modal-body p");
    modalBodyText.innerText = `'${modalSearchKeyword.value}'에 대한 검색 결과: ${searchResultCount}개`;
}

//후보 보이기
const buttonCandidateOn = document.querySelector("#main_second_button_candidate_on");
const buttonCandidateOff = document.querySelector("#main_second_button_candidate_off");
const contentCandidate = document.querySelectorAll(".main_content_box_tail_name");

buttonCandidateOn.addEventListener("click", changeCandidateButton);

function changeCandidateButton(event){
    let selectedId = event.path[0].id;
    const target = document.getElementById(`${selectedId}`);
    if(selectedId == "main_second_button_candidate_on"){
        selectedId = selectedId.replace("_on", "_off");
        contentCandidate.forEach(element => {
            element.style.display = "none";
        })
    }
    else{
        selectedId = selectedId.replace("_off", "_on");
        contentCandidate.forEach(element => {
            element.style.display = "";
        })
    }
    target.id = selectedId
}

//분야별로 공약 보기
const field = document.querySelectorAll(".main_first_field_box_set div");
const contentBox = document.querySelectorAll(".main_content_box"); 
field[0].style.backgroundColor = "black";
field[0].style.color = "white";
function giveInitialColor(){
    for(i = 0; i < field.length; i++){
        switch(i){
            case 0:
                field[i].style.backgroundColor = "white";
                break;
            case 1:
                field[i].style.backgroundColor = "#DA75FF";
                break;
            case 2:
                field[i].style.backgroundColor = "#6295F3";
                break;
            case 3:
                field[i].style.backgroundColor = "#43C5CD";
                break;
            case 4:
                field[i].style.backgroundColor = "#05CC91";
                break;
            case 5:
                field[i].style.backgroundColor = "#5FD80E";
                break;
            case 6:
                field[i].style.backgroundColor = "#FFBA4C";
                break;
            case 7:
                field[i].style.backgroundColor = "#FC8481";
                break;
            case 8:
                field[i].style.backgroundColor = "#F3627D";
                break;
            case 9:
                field[i].style.backgroundColor = "#FA84EE";
                break;
            default:
                field[i].style.backgroundColor = "white";
                break;
        }
        field[i].style.color = "black";
    }
}

field.forEach(function(fieldEvent){
    fieldEvent.addEventListener("click", fieldFilter);
})

function fieldFilter(fieldEvent){
    giveInitialColor();
    const targetField = document.querySelector(`#${fieldEvent.path[0].id}`);
    switch(targetField){
        case field[0]:
            targetField.style.backgroundColor = "black";
            break;
        case field[1]:
            targetField.style.backgroundColor = "#BE5BE3";
            break;
        case field[2]:
            targetField.style.backgroundColor = "#4D7ED8";
            break;
        case field[3]:
            targetField.style.backgroundColor = "#3CAFB6";
            break;
        case field[4]:
            targetField.style.backgroundColor = "#04A777";
            break;
        case field[5]:
            targetField.style.backgroundColor = "#51B90C";
            break;
        case field[6]:
            targetField.style.backgroundColor = "#F4A72C";
            break;
        case field[7]:
            targetField.style.backgroundColor = "#EF6A67";
            break;
        case field[8]:
            targetField.style.backgroundColor = "#D95870";
            break;
        case field[9]:
            targetField.style.backgroundColor = "#E067D4";
            break;
        default:
            targetField.style.backgroundColor = "black";
            break;
    }
    targetField.style.color = "white";

    for(i = 0; i < contentBox.length; i++){
        const bodyField = contentBox[i].querySelector(".main_content_box_head_field");
        if(fieldEvent.path[0].innerText == bodyField.innerText || fieldEvent.path[0].innerText == "전체"){
            contentBox[i].style.display = "";
        }
        else{
            contentBox[i].style.display = "none";
        }
    }
}

//main_content 분야 태그 색상
const mainContentTag = document.querySelectorAll(".main_content_box_head_field");
for(i = 0; i < mainContentTag.length; i++){
    switch(mainContentTag[i].innerText){
        case '분야 1':
            mainContentTag[i].style.backgroundColor = '#DA75FF';
            break;
        case '분야 2':
            mainContentTag[i].style.backgroundColor = '#6295F3';
            break;
        case '분야 3':
            mainContentTag[i].style.backgroundColor = '#43C5CD';
            break;
        case '분야 4':
            mainContentTag[i].style.backgroundColor = '#05CC91';
            break;
        case '분야 5':
            mainContentTag[i].style.backgroundColor = '#5FD80E';
            break;
        case '분야 6':
            mainContentTag[i].style.backgroundColor = '#FFBA4C';
            break;
        case '분야 7':
            mainContentTag[i].style.backgroundColor = '#FC8481';
            break;
        case '분야 8':
            mainContentTag[i].style.backgroundColor = '#F3627D';
            break;
        case '분야 9':
            mainContentTag[i].style.backgroundColor = '#FA84EE';
            break;
        default:
            mainContentTag[i].style.backgroundColor = 'white';
            break;
    }
}
//체크 + 공약 비교하기 display
//이슈: 체크 박스 선택 후 뒤로 가기 후 다시 앞으로 왔을 때...
//체크박스는 체크 되어있는데 비교하기 안 뜬다 
const mainContentCheckbox = document.querySelectorAll(".main_content_box_head_checkbox input");
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
    console.log(checkCountNum);
    if(checkCountNum == 0){
        mainCompare.style.display = "none";
    }
    else if(checkCountNum > 0 && checkCountNum <= 5){
        mainCompare.style.display = "";
    }
    if(checkCountNum > 5){
        alert("최대 5개까지 비교하실 수 있습니다.");
        event.preventDefault();
    }
}
// checkCount();

//필터
//로딩 작업 추후 개발 예정...
const filterSubmit = document.querySelector("#filter_submit");
filterSubmit.addEventListener("click", filterContent);
const filterCandidate = document.querySelector("#filter_by_candidate");
const filterKeyword = document.querySelector("#filter_by_keyword");
const filterCandidateAllInput = filterCandidate.querySelectorAll("input");
const filterCandidateAllLabel = filterCandidate.querySelectorAll("label");
const filterKeywordAllInput = filterKeyword.querySelectorAll("input");
const filterKeywordAllLabel = filterKeyword.querySelectorAll("label");

function filterContent(){
    //선택된 거 두개 값 가져오기
    //filterCandidate가 박스 내 후보자 이름이랑 같으면... or filterKeyword가 박스 내 태그에 있으면...
    //display = "" else display = "none"
    let filterCandidateTargetInput = "";
    let filterCandidateTargetLabel = "";
    let filterKeywordTargetInput = "";
    let filterKeywordTargetLabel = "";

    for(i = 0; i < filterCandidateAllInput.length; i++){
        if(filterCandidateAllInput[i].checked){
            filterCandidateTargetInput = filterCandidateAllInput[i]; //input 찾기
            filterCandidateTargetLabel = filterCandidateAllLabel[i]; //label 찾기
            console.log("후보자 필터: ", filterCandidateTargetLabel.innerText);
            break;
        }
    }

    for(i = 0; i < filterKeywordAllInput.length; i++){
        if(filterKeywordAllInput[i].checked){
            filterKeywordTargetInput = filterKeywordAllInput[i]; //input 찾기
            filterKeywordTargetLabel = filterKeywordAllLabel[i]; //label 찾기
            console.log("키워드 필터: ", filterKeywordTargetLabel.innerText);
            break;
        }
    }

    for(i = 0; i < contentBox.length; i++){
        const contentBoxCandidate = contentBox[i].querySelector(".main_content_box_tail_name");
        const contentBoxTag = contentBox[i].querySelectorAll(".main_content_box_tail_tag span");
        if(contentBoxTag.length > 0){
            for(j = 0; j < contentBoxTag.length; j++){
                if((contentBoxCandidate.innerText.includes(filterCandidateTargetLabel.innerText) || filterCandidateTargetLabel.innerText == "모든 후보") && (contentBoxTag[j].innerText == filterKeywordTargetLabel.innerText || filterKeywordTargetLabel.innerText == "#전체")){
                    contentBox[i].style.display = "";
                    break;
                }
                else{
                    contentBox[i].style.display = "none";
                }
            }
        }
        else{
            if((contentBoxCandidate.innerText.includes(filterCandidateTargetLabel.innerText) || filterCandidateTargetLabel.innerText == "모든 후보") && (filterKeywordTargetLabel.innerText == "#전체")){
                contentBox[i].style.display = "";
            }
            else{
                contentBox[i].style.display = "none";
            }
        }
    }
    alert("필터 적용이 되었습니다.");

    // 후보자 필터
    // for(i = 0; i < filterCandidateAllinput.length; i++){
    //     if(filterCandidateAllinput[i].checked){
    //         for(j = 0; j < contentBox.length; j++){
    //             const contentBoxName = contentBox[j].querySelector(".main_content_box_tail_name");
    //             if(contentBoxName.innerText.includes(filterCandidateAlllabel[i].innerText) || filterCandidateAlllabel[i].innerText == "모든 후보"){
    //                 contentBox[j].style.display = "";
    //             }
    //             else{
    //                 contentBox[j].style.display = "none";
    //             }
    //         }
    //     }
    // }

    // 키워드 필터
    // for(i = 0; i < filterKeywordAllinput.length; i++){
    //     if(filterKeywordAllinput[i].checked){
    //         console.log(filterKeywordAlllabel[i].innerText);
    //         for(j = 0; j < contentBox.length; j++){
    //             const contentBoxTags = contentBox[j].querySelectorAll(".main_content_box_tail_tag span");
    //             if(contentBoxTags.length > 0){
    //                 for(k = 0; k < contentBoxTags.length; k++){
    //                     if(contentBoxTags[k].innerText == filterKeywordAlllabel[i].innerText || filterKeywordAlllabel[i].innerText == "#전체"){
    //                         contentBox[j].style.display = "";
    //                         break;
    //                     }
    //                     else{
    //                         contentBox[j].style.display = "none";
    //                     }
    //                 }
    //             }
    //             else if(filterKeywordAlllabel[i].innerText == "#전체"){
    //                 contentBox[j].style.display = "";
    //             }
    //             else{
    //                 contentBox[j].style.display = "none";
    //             }
                
    //         }
    //     }
    // }
}

const filterInit = document.querySelector("#filter_init");
filterInit.addEventListener("click", filterInitialize);

function filterInitialize(){
    filterCandidateAllinput[0].checked = "true";
    filterKeywordAllinput[0].checked = "true";
}

//공약 비교하기
//개발 예정..