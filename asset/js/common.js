$(function () {
    /**
     * 랭귀지 선택 이벤트 클릭시 해당사이트로 이동
     * @version 1.0.0
     * @since 2022-05-16
     * @author 이유라 (Nico)
     */
    $('#btnLang').click(function(){
        link = $('#langSelect').val();
        // console.log(link);//콘솔로 내부 확인

        window.open(link)// 윈도우 열때 링크로감
    })

    









    /**
     * 탑버튼 클릭하면위로 + 스크롤시 나오게
     * @version 1.0.0
     * @since 2022-05-16
     * @author 이유라 (Nico)
     */

     $(window).scroll(function () {
                var curr = $(this).scrollTop();
    
    
                if (curr > 0) {
                    $('.btn-top').addClass('show')
                } else {
                    $('.btn-top').removeClass('show')
                }
    })//괄호주의
    
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        })

    

    })





}) //end