//detail.html

//뒤로 가기
const detailHeadPrev = document.querySelector("#detail_head_previous");
detailHeadPrev.addEventListener("click", () => {
    window.history.back();
})

//링크 복사하기
const detailHeadShare = document.querySelector("#detail_head_share");
detailHeadShare.addEventListener("click", copyLink);

function copyLink(){
    const url = document.URL;
    console.log(url);
    navigator.clipboard.writeText(url).then(
        () => {
            alert(`${document.URL}\n링크가 복사되었습니다.`);
        }
    )
    .catch(
        err => {
            alert('링크 복사 실패..', err);
        }
    )
    // let confirmBoolean = confirm("링크를 복사하시겠습니까?");
    // if(confirmBoolean == false){
    //     console.log(confirmBoolean);
    //     event.preventDefault();
    // }
    // else{
    //}
}

//분야 태그 색상 입히기
const detailField = document.querySelector("#detail_body_field");
const detailrelatedField = document.querySelectorAll(".detail_tail_content_box_head_field");
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
giveDetailFieldColor(detailField);
for(i = 0; i < detailrelatedField.length; i++){
    giveDetailFieldColor(detailrelatedField[i]);
}

//후보 상세 화면 href 지정
const detailBodyNameAnchor = document.querySelector("#detail_body_name_href");
const detailBodyName = detailBodyNameAnchor.innerText;

if(detailBodyName.includes("이재명")){
    detailBodyNameAnchor.href = "candidate_detail.html";
} 
else if(detailBodyName.includes("윤석열")){
    detailBodyNameAnchor.href = "candidate_detail.html";
}
else if(detailBodyName.includes("안철수")){
    detailBodyNameAnchor.href = "candidate_detail.html";
}
else if(detailBodyName.includes("심상정")){
    detailBodyNameAnchor.href = "candidate_detail.html";
}
else{
    detailBodyNameAnchor.href = "";
}

//공약 내용 innerHTML
const promiseContent = document.querySelector("#detail_body_content h4");
const promiseContentText = promiseContent.innerText;
promiseContent.innerHTML = promiseContentText;
