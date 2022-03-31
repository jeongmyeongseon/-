$(function(){
    let arr = ["H마트에서 울다","1년 뒤 오늘을 마지막 날로 정해두었습니다", "헤르만 헤세,음악 위에 쓰다","가끔 집은 내가 되고","메타 리치의 시대","창업가의 습관"];
    for (let i = 0; i < arr.length; i++) {
        $.ajax({
            method:"GET",
            url:"https://dapi.kakao.com/v3/search/book?target=title",
            dataType:"json",
            headers:{Authorization:"KakaoAK 48932828539652b88f0b4a0acc93781c"},
            data:{query:arr[i]},
            success: function (data) {
                $(".discovery_slider").find(".discovery_imgbox img").eq(i).
                attr("src",data.documents[0].thumbnail);

                $(".discovery_slider").find(".discovery_textbox > h4").eq(i).
                text(data.documents[0].title);
            }
        });
    }
});