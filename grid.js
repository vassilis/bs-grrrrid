(function() {
  (function() {
    var done, initGrrrridlet, script, v;
    initGrrrridlet = function() {
      return (window.grrrridlet = function() {
        var el, $body, $style, $grrrrid, $grrrrid_container, class_list, opacity, viewport, width;
          el = document;
          $body = el.body;
          if ($body.querySelector(".grrrrid") !== null) {
            $body.removeChild(el.querySelector(".grrrrid"));
            $body.removeChild(el.querySelector("#grrrrid-style"));
          } else {
            $grid = el.createElement("DIV");
            $grid.setAttribute("class", "grrrrid");
            $grid.innerHTML = '<div id="grrrrid-container" class="grrrrid-container"><div class="grrrrid-row"><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div><div class="grrrrid-col"><div></div></div></div></div>';

            $style = el.createElement("STYLE");
            $style.setAttribute("id", "grrrrid-style");
            $style.textContent = ".grrrrid *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.grrrrid{position:fixed;top:0;left:0;z-index:100000;width:100%;height:100%;margin:0 auto;opacity:.5}.grrrrid div{height:100%}.grrrrid-container,.grrrrid-container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (min-width:768px){.grrrrid-container{width:750px}}@media (min-width:992px){.grrrrid-container{width:970px}}@media (min-width:1200px){.grrrrid-container{width:1170px}}.grrrrid-row{margin-left:-15px;margin-right:-15px}.grrrrid-col{float:left;width:8.33333333%;position:relative;min-height:1px;padding-left:15px;padding-right:15px}.grrrrid-col div{background:#FFA;height:100%}";

            $body.appendChild($style);
            $body.appendChild($grid);

            $grrrrid = el.querySelector(".grrrrid");
            $grrrrid_container = el.querySelector(".grrrrid-container");

            return el.addEventListener("keydown", function(e) {
              // console.log(e.keyCode);
              opacity = parseFloat(getComputedStyle($grrrrid)["opacity"]);
              viewport = parseFloat($body.clientWidth);
              width = parseFloat(getComputedStyle($grrrrid_container)["width"]);

              if (e.keyCode === 49 && e.shiftKey || e.keyCode === 35) { // reset
                $grrrrid_container.setAttribute('style', null);;
              }
              if (e.keyCode === 37 && e.shiftKey) { // left
                if (width > 0) {
                  $grrrrid_container.style.width = width - 1 + "px";
                }
              }
              if (e.keyCode === 39 && e.shiftKey) { // right
                if (width < viewport) {
                  $grrrrid_container.style.width = width + 1 + "px";
                }
              }
              if (e.keyCode === 38 && e.shiftKey) { // up
                if (opacity < 1) {
                  $grrrrid.style.opacity = opacity + 0.1;
                }
                return false;
              }
              if (e.keyCode === 40 && e.shiftKey) { // down
                if (opacity > 0) {
                  $grrrrid.style.opacity = opacity - 0.1;
                }
                return false;
              }
              if (e.keyCode === 70 && e.shiftKey) {
                class_list = el.querySelector("#grrrrid-container").classList;
                class_list.toggle("grrrrid-container");
                class_list.toggle("grrrrid-container-fluid");
                return false;
              }
              if (e.keyCode === 27) {
                $body.removeChild(el.querySelector(".grrrrid"));
                $body.removeChild(el.querySelector("#grrrrid-style"));
              }
            });
          }
      })();
    };
    return initGrrrridlet();
  })();
}).call(this);
