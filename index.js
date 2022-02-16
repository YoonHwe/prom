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
const field = document.querySelectorAll(".main_first_field_box_set div");
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
            newDivBodyContentAnchor.href = mainContentBox[i].querySelector(".main_content_box_body a").href;
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
           
            newDiv.style.borderLeft = "1px solid black";
            newDiv.style.borderRight = "1px solid black";
            newDiv.style.borderTop = "1px solid black";
            if(i == mainContentBox.length - 1){
                newDiv.style.borderBottom = "1px solid black";
            }
            else{
                newDiv.style.borderBottom = "0px solid black";    
            }
            
            modalSearchResult.appendChild(newDiv);
        }
    }
    const modalBodyText = document.querySelector(".modal-body p");
    modalBodyText.innerText = `'${modalSearchKeyword.value}'에 대한 검색 결과: ${searchResultCount}개`;

    const searchContentTag = modalSearchResult.querySelectorAll(".main_content_box_head_field");
    for(i = 0; i < searchContentTag.length; i++){
        switch(searchContentTag[i].innerText){
            case field[1].innerText:
                searchContentTag[i].style.backgroundColor = '#DA75FF';
                break;
            case field[2].innerText:
                searchContentTag[i].style.backgroundColor = '#6295F3';
                break;
            case field[3].innerText:
                searchContentTag[i].style.backgroundColor = '#43C5CD';
                break;
            case field[4].innerText:
                searchContentTag[i].style.backgroundColor = '#05CC91';
                break;
            case field[5].innerText:
                searchContentTag[i].style.backgroundColor = '#5FD80E';
                break;
            case field[6].innerText:
                searchContentTag[i].style.backgroundColor = '#FFBA4C';
                break;
            case field[7].innerText:
                searchContentTag[i].style.backgroundColor = '#FC8481';
                break;
            case field[8].innerText:
                searchContentTag[i].style.backgroundColor = '#F3627D';
                break;
            // case field[9].innerText:
            //     searchContentTag[i].style.backgroundColor = '#FA84EE';
            //     break;
            default:
                searchContentTag[i].style.backgroundColor = 'white';
                searchContentTag[i].style.border = '1px solid black';
                break;
        }
    }
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
// const field = document.querySelectorAll(".main_first_field_box_set div");
const contentBox = document.querySelectorAll(".main_content_box");

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

giveInitialColor();
field[0].style.backgroundColor = "black";
field[0].style.color = "white";

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
        case field[1].innerText:
            mainContentTag[i].style.backgroundColor = '#DA75FF';
            break;
        case field[2].innerText:
            mainContentTag[i].style.backgroundColor = '#6295F3';
            break;
        case field[3].innerText:
            mainContentTag[i].style.backgroundColor = '#43C5CD';
            break;
        case field[4].innerText:
            mainContentTag[i].style.backgroundColor = '#05CC91';
            break;
        case field[5].innerText:
            mainContentTag[i].style.backgroundColor = '#5FD80E';
            break;
        case field[6].innerText:
            mainContentTag[i].style.backgroundColor = '#FFBA4C';
            break;
        case field[7].innerText:
            mainContentTag[i].style.backgroundColor = '#FC8481';
            break;
        case field[8].innerText:
            mainContentTag[i].style.backgroundColor = '#F3627D';
            break;
        // case field[9].innerText:
        //     mainContentTag[i].style.backgroundColor = '#FA84EE';
        //     break;
        default:
            mainContentTag[i].style.backgroundColor = 'white';
            mainContentTag[i].style.border = '1px solid black';
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
        mainCompare.style.display = "block";
        console.log(mainCompare)
    }
    if(checkCountNum > 5){
        alert("최대 5개까지 비교하실 수 있습니다.");
        event.preventDefault();
    }
}

//필터
//로딩 작업 추후 개발 예정...

const filterSubmit = document.querySelector("#filter_submit");
filterSubmit.addEventListener("click", filterContent);
filterSubmit.addEventListener("click", filterContent);

const filterCandidate = document.querySelector("#filter_by_candidate");
const filterKeyword = document.querySelector("#filter_by_keyword");
const filterCandidateAllInput = filterCandidate.querySelectorAll("input");
const filterCandidateAllLabel = filterCandidate.querySelectorAll("label");
const filterKeywordAllInput = filterKeyword.querySelectorAll("input");
const filterKeywordAllLabel = filterKeyword.querySelectorAll("label");

mainContentCheckbox.forEach(function(checked){
    checked.addEventListener("click", checkCount);
})

filterCandidateAllInput.forEach(function(targetFilter){
    targetFilter.addEventListener("click", candidateFilterOneOrMany);
});

function candidateFilterOneOrMany(event){
    if(event.path[0].id == "btnradio0"){
        if(filterCandidateAllInput[0].checked == true){
            for(i = 1; i < filterCandidateAllInput.length; i++){
                if(filterCandidateAllInput[i].checked == true){
                    filterCandidateAllInput[i].checked = false;
                }
            }
        }
    }
    else{
        filterCandidateAllInput[0].checked = false;
    }
}

filterKeywordAllInput.forEach(function(targetFilter){
    targetFilter.addEventListener("click", keywordFilterOneOrMany);
});

function keywordFilterOneOrMany(event){
    if(event.path[0].id == "btnradio100"){
        if(filterKeywordAllInput[0].checked == true){
            for(i = 1; i < filterKeywordAllInput.length; i++){
                if(filterKeywordAllInput[i].checked == true){
                    filterKeywordAllInput[i].checked = false;
                }
            }
        }
    }
    else{
        filterKeywordAllInput[0].checked = false;
    }
}

function filterContent(event){
    let filterCandidateTargetLabel = "";
    let filterKeywordTargetLabel = "";

    const filterCandidateTargetArray = [];
    const filterKeywordTargetArray = [];

    for(i = 0; i < filterCandidateAllInput.length; i++){
        if(filterCandidateAllInput[i].checked){
            filterCandidateTargetInput = filterCandidateAllInput[i]; //input 찾기
            filterCandidateTargetLabel = filterCandidateAllLabel[i]; //label 찾기
            filterCandidateTargetArray.push(filterCandidateTargetLabel.innerText);
        }
    }

    for(i = 0; i < filterKeywordAllInput.length; i++){
        if(filterKeywordAllInput[i].checked){
            filterKeywordTargetInput = filterKeywordAllInput[i]; //input 찾기
            filterKeywordTargetLabel = filterKeywordAllLabel[i]; //label 찾기
            filterKeywordTargetArray.push(filterKeywordTargetLabel.innerText);
        }
    }
    
    console.log(filterCandidateTargetArray);
    console.log(filterKeywordTargetArray);
    if(filterCandidateTargetArray.length == 0 || filterKeywordTargetArray.length == 0){
        alert("각 항목에서 최소한 하나 이상의 필터를 선택해야 합니다.");
        return 0;
    }


    for(i = 0; i < contentBox.length; i++){
        let candidateTest = 0;
        let keywordTest = 0;
        
        const contentBoxCandidate = contentBox[i].querySelector(".main_content_box_tail_name");
        for(j = 0; j < filterCandidateTargetArray.length; j++){
            if(contentBoxCandidate.innerText.includes(filterCandidateTargetArray[j]) || filterCandidateTargetArray[j] == "모든 후보"){
                candidateTest = 1;
                console.log(i, " 번째 박스는 candidateTest 합격!")
            }
        }
        const contentBoxTag = contentBox[i].querySelectorAll(".main_content_box_tail_tag span");
        for(j = 0; j < contentBoxTag.length; j++){
            for(k = 0; k < filterKeywordTargetArray.length; k++){
                if(filterKeywordTargetArray[k].includes(contentBoxTag[j].innerText) || filterKeywordTargetArray[k] == "#전체"){
                    keywordTest = 1;
                    console.log(i, " 번째 박스는 keywordTest 합격!")
                }
            }
        }

        if(candidateTest && keywordTest){
            contentBox[i].style.display = ""
        }
        else{
            contentBox[i].style.display = "none"
        }
    }
    alert("필터 적용이 되었습니다.");
}

const filterInit = document.querySelector("#filter_init");
filterInit.addEventListener("click", filterInitialize);

function filterInitialize(){
    filterCandidateAllInput[0].checked = true;
    filterKeywordAllInput[0].checked = true;

    for(i = 1; i < filterCandidateAllInput.length; i++){
        if( filterCandidateAllInput[i].checked = false){
            continue;
        }
        else{
            filterCandidateAllInput[i].checked = false;    
        }
    }
    for(i = 1; i < filterKeywordAllInput.length; i++){
        if( filterKeywordAllInput[i].checked = false){
            continue;
        }
        else{
            filterKeywordAllInput[i].checked = false;    
        }
    }
}

//공약 비교하기
//개발 예정..

//mainContent의 스크롤 시 페이지 로딩
mainCompare.addEventListener("click", showCompare);
function showCompare(){
    //체크된 것 무엇인지 우선 가져와
    const compareInit = document.querySelectorAll(".compare_chosen");
    if(compareInit.length > 0){
        for(i = 0; i < compareInit.length; i++){
            compareInit[i].remove();
        }
    }
    const mainContentBox = document.querySelectorAll(".main_content_box");
    for(i = 0; i < mainContentCheckbox.length; i++){
        if(mainContentCheckbox[i].checked == true){
            console.log(mainContentBox[i]);
            //소속
            const candidateName = mainContentBox[i].querySelector(".main_content_box_tail_name").innerText;
            // console.log(candidateName);
            const candidateNameInTable = document.createElement("td");
            candidateNameInTable.innerText = candidateName;
            candidateNameInTable.className = "compare_chosen"
            const tableCandidate = document.querySelector("#table_candidate");
            tableCandidate.appendChild(candidateNameInTable);
            //이미지
            let imageURL = "#";
            switch(true){
                case candidateName.includes("이재명"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138381/gicho/100138381.JPG';
                    break;
                case candidateName.includes("윤석열"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138362/gicho/100138362.JPG';
                    break;
                case candidateName.includes("심상정"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138383/gicho/100138383.JPG';
                    break;
                case candidateName.includes("안철수"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138392/gicho/100138392.JPG';
                    break;
                case candidateName.includes("오준호"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138395/gicho/100138395.JPG';
                    break;
                case candidateName.includes("허경영"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138378/gicho/100138378.JPG';
                    break;
                case candidateName.includes("이백윤"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138411/gicho/100138411.JPG';
                    break;
                case candidateName.includes("옥은호"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138489/gicho/100138489.JPG';
                    break;
                case candidateName.includes("김동연"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138373/gicho/100138373.JPG';
                    break;
                case candidateName.includes("김경재"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138380/gicho/100138380.JPG';
                    break;
                case candidateName.includes("조원진"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138379/gicho/100138379.JPG';
                    break;
                case candidateName.includes("김재연"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138375/gicho/100138375.JPG';
                    break;
                case candidateName.includes("이경희"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138531/gicho/100138531.JPG';
                    break;
                case candidateName.includes("김민찬"):
                    imageURL = 'http://info.nec.go.kr/photo_20220309/Gsg1/Hb100138402/gicho/100138402.JPG';
                    break;
                default:
                    imageURL = "#"
                    break;
            }
            const candidateImageInTable = document.createElement("th");
            candidateImageInTable.scope = "col";
            const candidateImage = document.createElement("img");
            candidateImage.src = imageURL;
            candidateImageInTable.appendChild(candidateImage);
            candidateImageInTable.className = "compare_chosen"
            const tableImage = document.querySelector("#table_image");
            tableImage.appendChild(candidateImageInTable); 

            //공약보기 버튼
            buttonHref = mainContentBox[i].querySelector(".main_content_box_body_content a").href;
            const candidateButtonInTable = document.createElement("th");
            candidateButtonInTable.scope = "col";
            const candidateButton = document.createElement("button");
            const candidateButtonAnchor = document.createElement("a");
            candidateButtonAnchor.href = buttonHref
            candidateButtonAnchor.target = "_blank";
            candidateButton.type = "button";
            candidateButton.className = "btn btn-outline-primary";
            candidateButton.innerText = "공약 보기";
            candidateButtonAnchor.appendChild(candidateButton);
            candidateButtonInTable.appendChild(candidateButtonAnchor);
            candidateButtonInTable.className = "compare_chosen"
            const tableButton = document.querySelector("#table_button");
            tableButton.appendChild(candidateButtonInTable);

            //분야
            const candidateFieldInTable = document.createElement("td");
            const candidateField = mainContentBox[i].querySelector(".main_content_box_head_field").innerText;
            candidateFieldInTable.innerText = candidateField;
            candidateFieldInTable.className = "compare_chosen"
            const tableField = document.querySelector("#table_field");
            tableField.appendChild(candidateFieldInTable);

            //제목
            const candidateTitleInTable = document.createElement("td");
            const candidateTitle = mainContentBox[i].querySelector(".main_content_box_body_title").innerText;
            candidateTitleInTable.innerText = candidateTitle;
            candidateTitleInTable.className = "compare_chosen"
            const tableTitle= document.querySelector("#table_title");
            tableTitle.appendChild(candidateTitleInTable);

            //내용(요약)
            const candidateSummaryInTable = document.createElement("td");
            const candidateSummary = mainContentBox[i].querySelector(".main_content_box_body_content").innerText;
            // console.log(candidateSummary);
            if(candidateSummary.includes("...더보기")){
                candidateSummaryInTable.innerText = candidateSummary.substr(0, candidateSummary.length - 6);
            }
            else{
                candidateSummaryInTable.innerText = candidateSummary;
            }
            candidateSummaryInTable.className = "compare_chosen"
            const tableSummary= document.querySelector("#table_summary");
            tableSummary.appendChild(candidateSummaryInTable);

            //태그
            const candidateTagInTable = document.createElement("td");
            const candidateTags = mainContentBox[i].querySelectorAll(".main_content_box_tail_tag span");
            console.log(candidateTags);
            console.log(candidateTags.length);
            for(j = 0; j < candidateTags.length; j++){
                const candidateTag = document.createElement("span");
                candidateTag.innerText = candidateTags[j].innerText;
                console.log(candidateTag);
                candidateTagInTable.appendChild(candidateTag);
            }
            candidateTagInTable.className = "compare_chosen"
            const tableTag = document.querySelector("#table_tag");
            tableTag.appendChild(candidateTagInTable);
        }
    }
}