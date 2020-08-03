$(function() {
    $("#slider-range").slider({
      range: true,
      min: 20000,
      max: 50000,
      values: [20000, 50000],
      step: 1000,
      slide: function(event, ui) {
        $("#amount").val(ui.values[0] + "€ - " + ui.values[1] + "€");
        $.ajax({
          method: "GET",
          url: "search.php",
          data: {min: ui.values[0], max: ui.values[1]}
        })
          .done(function(res) {
            $("#res").html(res);
          });
      }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "€ - " + $("#slider-range").slider("values", 1) + "€");
});