/*햄버거버튼*/

$(function(){ //document.ready
  //.hamburger-button요소 클릭시
  $(".hamburger-button").click(function(){
    $(this).toggleClass("change"); //클릭한 icon요소에 change클래스를 추가 또는 제거
    $(".sideBar").toggleClass("on");
  })

  /*언어선택*/
  
  const label = document.querySelector(".label"); //label요소 선택
    //라벨을 클릭시 옵션 목록이 열림/닫힘
    label.addEventListener("click", () => {
      //.label의 부모요소에 active클래스를 추가 또는 제거
      label.parentNode.classList.toggle("active")
    });
    
    //optionItem요소들을 선택하여 options변수에 할당
    const options = document.querySelectorAll(".optionItem");
    console.log(options)
    //옵션 클릭시 클릭한 옵션요소를 넘기는 구문
    options.forEach(item => item.addEventListener("click", () => handleSelect(item)))
    //optionItem요소를 순환하면서 클릭이벤트를 생성함 이때 handleSelect함수를 호출하고 순회하고 있는 optionItem요소를 인수로 전달
  
    //클릭한 옵션의 텍스트를 라벨 안에 넣는 구문
    const handleSelect = (item) => {
      label.parentNode.classList.remove("active"); //selectBox에 active클래스를 제거하여 옵션을 접어줌
      label.innerHTML = item.innerHTML; //item매개변수의 텍스트콘텐츠를 label의 콘텐츠로 변경합니다.
    }
});

/*탑버튼*/

$(function(){
  // window 객체에 스크롤이벤트 발생시
  $(window).scroll(function(){ // window객체에 스크롤 이벤트 발생
    var scroll = $(window).scrollTop(); // 변수 scroll에 현재 스크롤한 만큼의 거리를 저장
    if(scroll > 20){ // 스크롤이동값이 20보다 클 때 구문실행
      $(".top-button").css("display","block"); // 버튼요소를 화면에 표시
    }else{ // 스크롤이동값이 20보다 작을 때 구문실행
      $(".top-button").css("display","none"); // 버튼요소를 화면에 제거
    }
  });
  // top버튼 클릭시
  $(".top-button").click(function(){
    $(window).scrollTop(0); // window객체의 스크롤위치값을 0 (페이지상단)으로 설정
  })
});

/*검색창*/

var 로그인 = document.querySelector('#searchclick');
    var 탑서치 = document.querySelector("#topsearchline");
    var 탑클로즈 = document.querySelector("#imgclose");

    로그인.addEventListener('click', function(){
        탑서치.style.top = "0px";
    });

    탑클로즈.addEventListener('click',function(){
        탑서치.style.top = "-140px"
    });

/*로그인페이지*/

var 기본값 = false;
var 체크이미지 = document.querySelector("#checkimg");
var 체크텍스트 = document.querySelector("#checktext");
체크이미지.addEventListener('click',function(){
  if(기본값 == false){
      var 컨펌 = confirm("로그인 상태를 유지하시겠습니까?\n타인이 개인정보를 도용할 수 있으니,\n주의하시기 바랍니다.");
      if(컨펌 == true){
          체크이미지.src= "images/bg_checkbox_checked.png";
          기본값 = true;
      }
      else{
          체크이미지.src = "images/bg_checkbox.png";
      }
  }
  else{
      체크이미지.src = "images/bg_checkbox.png";
      기본값 = false;
  }
});