

(function() {
  (function() {
    var done, initMyBookmarklet, script, v;
    initMyBookmarklet = function() {
      return (window.myBookmarklet = function() {
        var $body, $col, $container, $grid, $row, i;
        if ($(".container").length === 0 && $(".container-fluid").length === 0) {
          return alert("This page does not use Bootstrap!");
        } else {
          if ($(".grrrrid").length === 0) {
            $body = $("body");
            $grid = $("<div class=\"grrrrid\"></div>");
            $container = $("<div id=\"grrrrid-container\" class=\"container\"></div>");
            $row = $("<div class=\"row\"></div>");
            $col = $("<div class=\"col-sm-1\"></div>");
            $col.append("<div></div>");
            i = 1;
            while (i <= 12) {
              $row.append($col.clone());
              i++;
            }
            $container.append($row);
            $grid.append($container);
            $body.append($grid);
            $grid.css({
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 100000,
              width: "100%",
              height: "100%",
              margin: "0 auto",
              opacity: .5
            });
            $grid.find("div").css({
              height: "100%"
            });
            $grid.find(".col-sm-1 > div").css({
              background: "#FFA",
              height: "100%"
            });
            return $(document).keyup(function(e) {
              console.log(e.keyCode);
              if (e.keyCode === 70) {
                $("#grrrrid-container").toggleClass("container container-fluid");
              }
              if (e.keyCode === 27) {
                return $(".grrrrid").remove();
              }
            });
          } else {
            return $(".grrrrid").remove();
          }
        }
      })();
    };
    v = "1.3.2";
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
      done = false;
      script = document.createElement("script");
      script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
      script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
          done = true;
          return initMyBookmarklet();
        }
      };
      return document.getElementsByTagName("head")[0].appendChild(script);
    } else {
      return initMyBookmarklet();
    }
  })();

}).call(this);
