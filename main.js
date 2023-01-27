$(function () {
  let path = location.pathname.split("/").pop();
  $("#mainNav li a").each(function () {
    var $this = $(this);
    if ($this.length > 0) {
      var hrefValue = $this.attr("href").split("?")[0];
      if (hrefValue == path) {
        $this.addClass("active");
      }
    }
  });
});
