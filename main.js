/*global $*/
$(document).ready(function(){
  /*start_buttonを押したら非活性にする*/
  $("#start_button").click(function(){
    $(this).prop("disabled", true);
  });
  /*stop_buttonを押したらstart_buttonが活性化される*/
  $("#stop_button").click(function(){
    $("#start_button").prop("disabled", false);
  });
  
  
  /*1の位(1/10秒毎)のカウントアップ関数*/
function countUp_1(){
  var count_1 = Number($(".countNo1").text()); 
  $(".countNo1").text(count_1+1);
  if(count_1 == 9){
    $(".countNo1").text(count_1-9);
  }
}

/*10の位（１秒毎）のカウントアップ関数*/
function countUp_2(){
  var count_2 = Number($(".countNo2").text());
  $(".countNo2").text(count_2+1);
  if(count_2 == 9){
    $(".countNo2").text(count_2-9);
  }
}

/*100の位（１０秒毎）のカウントアップ関数*/
function countUp_3(){
  var count_3 = Number($(".countNo3").text());
  $(".countNo3").text(count_3+1);
  if(count_3 == 5){
    $(".countNo3").text(count_3-5);
  }
}

/*1000の位（１分毎）のカウントアップ関数*/
function countUp_4(){
  var count_4 = Number($(".countNo4").text());
  $(".countNo4").text(count_4+1);
  if(count_4 == 5){
    $(".countNo4").text(count_4-5);
  }
}

/*タイマースタート*/
$("#start_button").click(function(){
  var startId1 = setInterval(countUp_1, 100);
  var startId2 = setInterval(countUp_2, 1000);
  var startId3 = setInterval(countUp_3, 10000);
  var startId4 = setInterval(countUp_4, 100000);

/*タイマーストップ*/
$("#stop_button").click(function(){
  clearInterval(startId1);
  clearInterval(startId2);
  clearInterval(startId3);
  clearInterval(startId4);
  
/*タイマーリセット*/
$("#reset_button").click(function(){
  $(".countNo4").text(0);
  $(".countNo3").text(0);
  $(".countNo2").text(0);
  $(".countNo1").text(0);
  
});
});
});
});