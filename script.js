$(window).scroll(function() {
  if($(window).scrollTop()) {
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("sticky navbar-light");
    $("#myBtn").css("display", "block");
  } else {
    $(".navbar").addClass("navbar-dark");
    $(".navbar").removeClass("sticky navbar-light");
    $("#myBtn").css("display", "none");
  }
  if($(window).scrollTop()>1300&& $(window).scrollTop()<5000) {
    $(".progresscpp").addClass("cpp");
    $(".progresshtml").addClass("html");
    $(".progresscss").addClass("css");
    $(".progressjavascript").addClass("javascript");
    $(".progressbootstrap").addClass("bootstrap");
    $(".progressreact").addClass("react");
  }else {
    $(".progresscpp").removeClass("cpp");
    $(".progresshtml").removeClass("html");
    $(".progresscss").removeClass("css");
    $(".progressjavascript").removeClass("javascript");
    $(".progressbootstrap").removeClass("bootstrap");
    $(".progressreact").removeClass("react");
  }

  if($(window).scrollTop()>2000&& $(window).scrollTop()<7000) {
    $("li.left").addClass("leftbefore");
    $("li.right").addClass("rightbefore");
  } else {
    $("li.left").removeClass("leftbefore");
    $("li.right").removeClass("rightbefore");
  }
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { }";
        document.body.appendChild(css);
    };

