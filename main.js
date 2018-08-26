// 有缝轮播
// $(document).ready(function(){
//   setTimeout(function(){
//     $(".images>img:nth-child(1)").css({
//       transform: "translateX(-100%)"
//     });
//     $(".images>img:nth-child(2)").css({
//       transform: "translateX(-100%)"
//     });
//     $('.images>img:nth-child(1)').one('transitionend',function(e){
//         console.log('1')
//         $(e.currentTarget).addclass('right').css({transform:'none'})
//     })
//   }, 2000);
//   setTimeout(function(){
//     $(".images>img:nth-child(2)").css({
//       transform: "translateX(-200%)"
//     });
//     $(".images>img:nth-child(3)").css({
//       transform: "translateX(-100%)"
//     });
//     $('.images>img:nth-child(2)').one('transitionend',function(e){
//         $(e.currentTarget).addclass('right').css({transform:'none'})
//     })
//   }, 4000);
//   setTimeout(function(){
//     $(".images>img:nth-child(3)").css({
//       transform: "translateX(-200%)"
//     });
//     $(".images>img:nth-child(1)").css({
//       transform: "translateX(-100%)"
//     });
//     $('.images>img:nth-child(3)').one('transitionend',function(e){
//         $(e.currentTarget).addclass('right').css({transform:'none'})
//     })
//   }, 6000);
//   })


//无缝轮播
$(document).ready(function(){
  let n
  初始化()

setInterval(function(){
$(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
console.log('2')
  .one('transitionend',function(e){
    console.log('1')
      $(e.currenTtarget).removeClass('leave').addClass('enter')
  })
  console.log('1')
  $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},3000)

function x(n){
  if(n > 3){
      n = n%3
      if(n===0){
          n=3
      }
  }
  return n
}
})

function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
  .siblings().addClass('enter')
  }
