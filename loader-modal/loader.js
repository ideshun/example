var loaderBox;
function loaderShow(loadData) {
  loaderBox = $("<div class='load-box' style='position:absolute;top: 0;left:0;height: 100%;width: 100%;background: rgba(0,0,0,0.1);z-index: 9999'><div class='load-inner' style='position: fixed;top: 20%;left: 10%;background: #FFF;width: 80%;padding: 30px 20px;text-align: center;border:1px solid  #F2F2F2;border-radius: 5px'><img style='width: 40px;margin-bottom: 20px' src='img/loading-icon.gif'><p>"+loadData+"，请稍后....</p></div></div>")
  $("html,body").css({height:"100%",overflow:"hidden"});
  $("body").append(loaderBox);
}
function loaderHide() {
  $("html,body").css({height:"auto",overflow:"auto"});
  $(".load-box").remove()
}