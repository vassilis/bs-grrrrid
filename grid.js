

(function() {
  (function() {
    var done, initGrrrridlet, script, v;
    initGrrrridlet = function() {
      return (window.grrrridlet = function() {
        var $body, $col, $container, $grid, $row, i;

          if ($(".grrrrid").length === 0) {
            $body = $("body");
            $grid = $("<div class=\"grrrrid\"></div>");
            $container = $("<div id=\"grrrrid-container\" class=\"grrrrid-container\"></div>");
            $row = $("<div class=\"grrrrid-row\"></div>");
            $col = $("<div class=\"grrrrid-col\"></div>");
            $col.append("<div></div>");
            i = 1;
            while (i <= 12) {
              $row.append($col.clone());
              i++;
            }
            $container.append($row);
            $grid.append($container);

            style = "\
              <style id='grrrrid-style'>\
                .grrrrid * {\
                  -webkit-box-sizing: border-box;\
                  -moz-box-sizing: border-box;\
                  box-sizing: border-box;\
                }\
                .grrrrid {\
                  position: fixed;\
                  top: 0;\
                  left: 0;\
                  z-index: 100000;\
                  width: 100%;\
                  height: 100%;\
                  margin: 0 auto;\
                  opacity: .5;\
                }\
                .grrrrid div {\
                  height: 100%;\
                }\
                .grrrrid-container {\
                  margin-right: auto;\
                  margin-left: auto;\
                  padding-left: 15px;\
                  padding-right: 15px;\
                }\
                @media (min-width: 768px) {\
                  .grrrrid-container {\
                    width: 750px;\
                  }\
                }\
                @media (min-width: 992px) {\
                  .grrrrid-container {\
                    width: 970px;\
                  }\
                }\
                @media (min-width: 1200px) {\
                  .grrrrid-container {\
                    width: 1170px;\
                  }\
                }\
                .grrrrid-container-fluid {\
                  margin-right: auto;\
                  margin-left: auto;\
                  padding-left: 15px;\
                  padding-right: 15px;\
                }\
                .grrrrid-row {\
                  margin-left: -15px;\
                  margin-right: -15px;\
                }\
                .grrrrid-col {\
                  float: left;\
                  width: 8.33333333%;\
                  position: relative;\
                  min-height: 1px;\
                  padding-left: 15px;\
                  padding-right: 15px;\
                }\
                .grrrrid-col div {\
                  background: #FFA;\
                  height: 100%;\
                }\
              </style>\
            ";

            $body.append(style);
            $body.append($grid);

            return $(document).keyup(function(e) {
              console.log(e.keyCode);
              if (e.keyCode === 70) {
                $("#grrrrid-container").toggleClass("grrrrid-container grrrrid-container-fluid");
              }
              if (e.keyCode === 27) {
                $(".grrrrid").remove();
              }
            });
          } else {
            $(".grrrrid").remove();
            $("#grrrrid-style").remove();
          }

      })();
    };
    v = "2.1.3";
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
      done = false;
      script = document.createElement("script");
      script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
      script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
          done = true;
          return initGrrrridlet();
        }
      };
      return document.getElementsByTagName("head")[0].appendChild(script);
    } else {
      return initGrrrridlet();
    }
  })();

}).call(this);
