$(function () {
    /**
     * 메인비주얼 슬라이드 + 탭
     * @version 1.0.0
     * @since 2022-05-16
     * @memo 
     * <탭>
     * 1. on의 css먼저 주기
     * 2. on의 위치가 .slide-cont h3와 부모의 관계인 것 중요
     * 3. on css를 추가함과 동시에 그외 형제 슬라이드는 on를 제거하기
     * parent() : 바로 위 부모
     * parents() : 모든 부모
     * 
     * <메인비주얼 슬라이드>
     * 처음엔 자동재생되고 있음. slide-cont slide01번은 자동재생멈춤
     */

     $('.slide-cont h3').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on')
    })

    // sc-visual .swiper(slide-cont설정시 fraction적용안됨)
    var mainSlide01 = new Swiper(".slide01 .swiper", {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide01 .fraction",
            type: "fraction",
        },
        navigation: {
            prevEl: ".slide01 .btn.prev",
            nextEl: ".slide01 .btn.next",
        }
    });

    var mainSlide02 = new Swiper(".slide02 .swiper", {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".slide02 .fraction",
            type: "fraction",
        },
        navigation: {
            prevEl: ".slide02 .btn.prev",
            nextEl: ".slide02 .btn.next",
        }
    });

    // ** on: block으로 css적용
    $('.slide01 .control-play').click(function(e){
        e.preventDefault();
        if ($(this).find('.btn.start').hasClass('on')) {
            $(this).find('.btn.pause').addClass('on');
            $(this).find('.btn.start').removeClass('on');
            mainSlide01.autoplay.start();
            
        } else {
            $(this).find('.btn.pause').removeClass('on');
            $(this).find('.btn.start').addClass('on');
            mainSlide01.autoplay.stop();
        }
    })
    $('.slide02 .control-play').click(function(e){
        e.preventDefault();
        if ($(this).find('.btn.start').hasClass('on')) {
            $(this).find('.btn.pause').addClass('on');
            $(this).find('.btn.start').removeClass('on');
            mainSlide02.autoplay.start();
            
        } else {
            $(this).find('.btn.pause').removeClass('on');
            $(this).find('.btn.start').addClass('on');
            mainSlide02.autoplay.stop();
        }
    })




  

   

    // @@ block만사용 (멈춤이 보일 때, 멈춤을 숨기고 멈춰)
    // $('.control-play').click(function(e){
    //     e.preventDefault();
    //     if ($(this).find('.btn.pause').css('display') == 'block') {
    //         $(this).find('.btn.pause').hide();
    //         $(this).find('.btn.start').show();
    //         mainSlide01.autoplay.stop();

    //     } else {
    //         $(this).find('.btn.pause').show();
    //         $(this).find('.btn.start').hide();
    //         mainSlide01.autoplay.start();

    //     }
    // });
    // $('.control-play').click(function(e){
    //     e.preventDefault();
    //     if ($(this).find('.btn.pause').css('display') == 'block') {
    //         $(this).find('.btn.pause').hide();
    //         $(this).find('.btn.start').show();
    //         mainSlide02.autoplay.stop();

    //     } else {
    //         $(this).find('.btn.pause').show();
    //         $(this).find('.btn.start').hide();
    //         mainSlide02.autoplay.start();

    //     }
    // });
   


    // @@none과 block사용
    // 오류사항 : 한번 정지를 눌러서 재생으로 바뀌면 다시 정지로 바뀌지않는다!
    // $('.control-play').click(function(e){
    //     e.preventDefault();
    //     // > 재생이 안보일때, 자동재생중이므로 시작은 보이고 멈춤은 숨겨라 
    //     if ($(this).find('.btn.start').css('display') == 'none') {//11상태
    //         // $(this).find('.btn.pause').css('display','block');
    //         $(this).find('.btn.start').hide();
    //         $(this).find('.btn.pause').show();
    //         mainSlide01.autoplay.stop();

    //     } else {//재생이 보인다면
    //         // $(this).find('.btn.start').css('display','block');
    //         // $(this).find('.btn.pause').css('display','none');
    //         $(this).find('.btn.start').hide();
    //         $(this).find('.btn.pause').show();
    //         mainSlide01.autoplay.start();
    //     }
    // })

    // $('.btn.pause').click(function(e){
    //     e.preventDefault();

    //     $(this).hide().show('.btn.start');
    //     mainSlide01.autoplay.stop()

    // })
    // $('.btn.start').click(function(e){
    //     e.preventDefault();

    //     $(this).hide().show('.btn.pause');
    //     mainSlide01.autoplay.start()
    // })


    // $('.btn.pause').click(function(e){
    //     e.preventDefault();
    //     if ($(this).css('display') ==  "block") {
            
    //         mainSlide01.autoplay.stop()
    //         $(this).hide().show('.btn.start');
            
    //     } else {
    //         mainSlide01.autoplay.start()
    //         $(this).show().hide('.btn.start');
    //     }

    // })
 
   




   


    // @ 주체를 바꿔보기..
    // $('.slide-cont.slide01').click(function(e){

    //     var childAll = $('.swiper-slide')

    //     e.preventDefault();

    //     if ($(this).hasclass('on')) {
    //         $(this).siblings().removeClass('slide-cont.slide02')
    //         childAll.removeClass().addClass('active')

    //     } else {
    //         $(this).siblings().addClass('on')
    //         // 형제의 스와이퍼 하나에만 엑티브 추가
    //         childAll.removeClass().addClass('active')
    //         $(this).siblings().find('active')

    //     }
    // })

    // @ 주체바꿔도 안됨. 이미지 자체를 1개만 나오도록 수정할 것
    // $('.swiper-slide').click(function(e){

    //     e.preventDefault();
    //     var parent = $('.slide-cont')

    //     if ($(this).hasclass('active') ) {

    //         $(this).parent.addClass('on');
    //         $(this).siblingsAll().removeClass();
    //         $(this).parent().siblings().removeClass();

    //     } else {
    //         $(this).parent.removeClass();

    //     }


    // })

    // @ show css새로 생성? > 도안됨

    // 1. active를 가지고 있다면 자신의 형제 자동재생을 멈춰라 > 그 다음 active제거
    // 2. else (active가 없다면) 자신의 형제자매를 보이게하면서 자동재생하고
    //    > 나는 자동재생을 멈춰라

    // @ 오답 삭제
    // $('.slide-cont').click(function(e){

    //     e.preventDefault();
    //     var siblingsAll = $('.slide-cont')
    //     var siblings = $(this).siblings('.slide-cont')

    //     if ($(this).hasClass('active') ) {
    //         siblings.autoplay.stop();
    //         $('.slide-cont').removeClass('active');

    //     } else {
    //         $(this).removeClass('active');
    //         mainSlide01.autoplay.start();

    //         siblings.find('active').show();
    //         mainSlide01.autoplay.start();
    //     }

    // })




    /**
     * 베너 슬라이드 + 정지재생
     * @version 1.0.0
     * @since 2022-05-16
     * @author 이유라 
     * popSlide로 변수 주기
     * show()의 의미 : display를 원래대로 돌려라이므로 재생 width가 원래대로 돌아감 
     * 본래성질 inline으로 바뀌어버림 > addclass로도 시용가능
     */


    
    var popSlide = new Swiper(".sc-popup .swiper", {
        loop: true,
        slidesPerView: 3, //한번에 보여줄 슬라이드개수
        spaceBetween: 43, //마진값
        autoplay: {
            delay: 2000,
            disableOnInteraction: false, //사용자가 움직이는 행위를 했을 때, 멈추는 기능인데 false이므로 끔
        },


        pagination: {
            el: ".sc-popup .fraction", //element요소
            type: "fraction",
        },
        navigation: {
            nextEl: ".sc-popup .next",
            prevEl: ".sc-popup .prev",
        },
    })
    // 오답
    // $('.btn-play').click(function (e) {
    //     e.preventDefault();
    //     if ($(this).find('.pause').css('display') == 'block') {
    //         $(this).find('.pause').hide();
    //         $(this).find('.start').show();
    //         popSlide.autoplay.start();
    //     } else {
    //         $(this).find('.pause').show();
    //         $(this).find('.start').hide();
    //         popSlide.autoplay.stop();
    //     }
    // })


    //  @@오답 > 해결방안
    // $('.btn-play').click(function(e){
    //     e.preventDefault();
        
    //     if ($(this).find('.btn.start').css('display') == 'none') {

    //         $(this).find('.btn.pause').hide();
    //         $(this).find('.btn.start').show();

    //         popSlide.autoplay.stop();

    //     } else {
               
    //         $(this).find('.btn.start').hide();
    //         $(this).find('.btn.pause').show();
    //         popSlide.autoplay.start();
    //     }
    // })
    // > = ㅣㅣelse





    // @@이게정답

    $('.btn-play').click(function(e){
        e.preventDefault();
        if ($(this).find('.btn.start').hasClass('on')) {

            $(this).find('.btn.pause').addClass('on')
            $(this).find('.btn.start').removeClass('on')
            popSlide.autoplay.start();
            
        } else {
            $(this).find('.btn.pause').removeClass('on')
            $(this).find('.btn.start').addClass('on')
            popSlide.autoplay.stop();
        }
    })



    /**
     * related영역 아코디언
     * @version 1.0.0
     * @since 2022-05-16
     * @author 이유라 
     * tab-event 하단슬라이드
     */

    $('.btn-related').click(function () {

        if ($(this).siblings('.agency-list').css('display') == 'none') {
            $('.agency-list').stop().slideUp();
            $(this).siblings('.agency-list').stop().slideDown();


            $('.btn-related').removeClass('on');
            $(this).addClass('on');

        } else {
            $('.agency-list').stop().slideUp();
            $('.btn-related').removeClass('on');
        }

    })

}) //end







// var swiper = new Swiper(".mainSwiper", {
//     loop: true,
//     slidesPerView: 1, //한번에 보여줄 슬라이드개수

//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// var swiper = new Swiper(".mySwiper", {
//     loop: true,
//     slidesPerView: 3, //한번에 보여줄 슬라이드개수
//     spaceBetween: 10,

//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });


//     $('.btn').click(function (e) {
//         e.preventDefault();

//         var childAll = $('.link-direct-agency')
//         var child = $(this).siblings('.link-direct-agency')

//         if ($(this).hasClass('active')) {
//             childAll.stop().slideUp();
//             $('.btn').removeClass('active')

//         } else {
//             $('.btn').removeClass('active');
//             $(this).addClass('active');

//             childAll.stop().slideUp();
//             child.stop().slideDown();

//         }
//     })

//     $(window).scroll(function () {
//         var curr = $(this).scrollTop();

//         target = $('.here').offset().top;

//         $('.target').text(target);


//         if (target) {
//             $('header').addClass('on')
//         } else {
//             $('header').removeClass('on')
//         }


//     })


//     $('.btn-top').click(function (e) {
//         e.preventDefault();
//         $('body,html').animate({
//             scrollTop: 0
//         })

//         $('body,html').animate({
//             scrollTop: target
//         })

//     })
