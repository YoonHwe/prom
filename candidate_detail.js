//candidate_detail.html

//뒤로 가기
const candidateDetailHeadPrev = document.querySelector("#candidate_detail_head_previous");
candidateDetailHeadPrev.addEventListener("click", () => {
    console.log()
    window.history.back();
})

//분야 태그 색상 입히기
const candidateDetailField = document.querySelectorAll(".candidate_detail_content_box_head_field");
function giveDetailFieldColor(target){
    switch(target.innerText){
        case '분야 1':
            target.style.backgroundColor = '#DA75FF';
            break;
        case '분야 2':
            target.style.backgroundColor = '#6295F3';
            break;
        case '분야 3':
            target.style.backgroundColor = '#43C5CD';
            break;
        case '분야 4':
            target.style.backgroundColor = '#05CC91';
            break;
        case '분야 5':
            target.style.backgroundColor = '#5FD80E';
            break;
        case '분야 6':
            target.style.backgroundColor = '#FFBA4C';
            break;
        case '분야 7':
            target.style.backgroundColor = '#FC8481';
            break;
        case '분야 8':
            target.style.backgroundColor = '#F3627D';
            break;
        case '분야 9':
            target.style.backgroundColor = '#FA84EE';
            break;
        default:
            target.style.backgroundColor = 'white';
            break;
    }
}
for(i = 0; i < candidateDetailField.length; i++){
    giveDetailFieldColor(candidateDetailField[i]);
}

//분야별로 공약 보기
const candidateField = document.querySelectorAll(".candidate_detail_field_box_set div");
const candidateContentBox = document.querySelectorAll(".candidate_detail_content_box"); 
candidateField[0].style.backgroundColor = "black";
candidateField[0].style.color = "white";
function giveInitialColor(){
    for(i = 0; i < candidateField.length; i++){
        switch(i){
            case 0:
                candidateField[i].style.backgroundColor = "white";
                break;
            case 1:
                candidateField[i].style.backgroundColor = "#DA75FF";
                break;
            case 2:
                candidateField[i].style.backgroundColor = "#6295F3";
                break;
            case 3:
                candidateField[i].style.backgroundColor = "#43C5CD";
                break;
            case 4:
                candidateField[i].style.backgroundColor = "#05CC91";
                break;
            case 5:
                candidateField[i].style.backgroundColor = "#5FD80E";
                break;
            case 6:
                candidateField[i].style.backgroundColor = "#FFBA4C";
                break;
            case 7:
                candidateField[i].style.backgroundColor = "#FC8481";
                break;
            case 8:
                candidateField[i].style.backgroundColor = "#F3627D";
                break;
            case 9:
                candidateField[i].style.backgroundColor = "#FA84EE";
                break;
            default:
                candidateField[i].style.backgroundColor = "white";
                break;
        }
        candidateField[i].style.color = "black";
    }
}

candidateField.forEach(function(candidateFieldEvent){
    candidateFieldEvent.addEventListener("click", candidateFieldFilter);
})

function candidateFieldFilter(candidateFieldEvent){
    giveInitialColor();
    const targetField = document.querySelector(`#${candidateFieldEvent.path[0].id}`);
    switch(targetField){
        case candidateField[0]:
            targetField.style.backgroundColor = "black";
            break;
        case candidateField[1]:
            targetField.style.backgroundColor = "#BE5BE3";
            break;
        case candidateField[2]:
            targetField.style.backgroundColor = "#4D7ED8";
            break;
        case candidateField[3]:
            targetField.style.backgroundColor = "#3CAFB6";
            break;
        case candidateField[4]:
            targetField.style.backgroundColor = "#04A777";
            break;
        case candidateField[5]:
            targetField.style.backgroundColor = "#51B90C";
            break;
        case candidateField[6]:
            targetField.style.backgroundColor = "#F4A72C";
            break;
        case candidateField[7]:
            targetField.style.backgroundColor = "#EF6A67";
            break;
        case candidateField[8]:
            targetField.style.backgroundColor = "#D95870";
            break;
        case candidateField[9]:
            targetField.style.backgroundColor = "#E067D4";
            break;
        default:
            targetField.style.backgroundColor = "black";
            break;
    }
    targetField.style.color = "white";

    for(i = 0; i < candidateContentBox.length; i++){
        const bodyField = candidateContentBox[i].querySelector(".candidate_detail_content_box_head_field");
        if(candidateFieldEvent.path[0].innerText == bodyField.innerText || candidateFieldEvent.path[0].innerText == "전체"){
            candidateContentBox[i].style.display = "";
        }
        else{
            candidateContentBox[i].style.display = "none";
        }
    }
}
