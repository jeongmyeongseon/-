$(function(){
    let arr = ["울다가 웃었다","헤르만 헤세,음악 위에 쓰다","재정 전쟁","투자를 잘한다는 것","H마트에서 울다","보통 남자 김철수","잘 살아라 그게 최고의 복수다","당신 엄마가 당신보다 잘하는 게임","메이 머스크:여자는 계획을 세운다","메멘토 모리","서영동 이야기","요즘 사는 맛","더현대 서울 인사이트"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".recommend_slider").find(".content_thumbnail_large").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".recommend_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".recommend_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});