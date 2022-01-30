const detailHeadShare = document.querySelector("#detail_head_share");
detailHeadShare.addEventListener("click", copyLink);

function copyLink(event){
    let confirmBoolean = confirm("제출하시겠습니까?");
    if(confirmBoolean == false){
        event.preventDefault();
    }
    else{
        const url = document.URL;
        navigator.clipboard.writeText(url)
            .then(() => {
                alert(`${document.URL}\n링크가 복사되었습니다.`);
        })
            .catch(err => {
            alert('링크 복사 실패..', err);
        })
    }
}