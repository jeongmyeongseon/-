$(function(){
    let arr = ["달러구트 꿈 백화점 2","돈의 역사는 되풀이된다","하얀 늑대들","물고기는 존재하지 않는다","타이탄의 도구들","무의식은 답을 알고 있다","죽여 마땅한 사람들","유괴의 날","천 개의 파랑","부의 추월차선","불안한 사람들","문명 1","데일 카네기 인간관계론","박시백의 고려사 1","조인계획","피를 마시는 새","죽여 마땅한 사람들","뉴 맵"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".popular_slider").find(".content_thumbnail_small").eq(i).
                append($("<img/>").attr("src",data.documents[0].thumbnail));

                $(".popular_slider").find(".content_text > h5").eq(i).
                text(data.documents[0].title);

                $(".popular_slider").find(".content_text > p").eq(i).
                text(data.documents[0].authors);
            }
        });
    }
});