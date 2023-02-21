var dark_text = "Dark Mode";
var _0x2f0e = [
    "innerHTML",
    "addEventListener",
    "click",
    "preventDefault",
    "classList",
    "toggle",
    "darkmode",
    "setItem",
    "removeItem",
    "localStorage",
    "getItem",
    "myDarkMode",
    "documentElement",
    "\x20darkmode",
    "querySelector",
    "#dark-myar",
];
(function (_0x1b79a7, _0x3a0621) {
    var _0x966a12 = function (_0x3e79fd) {
        while (--_0x3e79fd) {
            _0x1b79a7["push"](_0x1b79a7["shift"]());
        }
    };
    _0x966a12(++_0x3a0621);
})(_0x2f0e, 0xa9);
var _0x2b5b = function (_0x462a3a, _0x3e5e7f) {
    _0x462a3a = _0x462a3a - 0x0;
    var _0x26f27e = _0x2f0e[_0x462a3a];
    return _0x26f27e;
};
(function (_0x512a50, _0x163dc1, _0x16c793) {
    if (!(_0x2b5b("0x0") in _0x512a50)) return;
    var _0x1d0913 = localStorage[_0x2b5b("0x1")](_0x2b5b("0x2"));
    if (_0x1d0913) {
        _0x163dc1[_0x2b5b("0x3")]["className"] += _0x2b5b("0x4");
    }
})(window, document);
(function (_0x78db9c, _0x2d7dec, _0x44c5fe) {
    if (!("localStorage" in _0x78db9c)) return;
    var _0x41c733 = _0x2d7dec[_0x2b5b("0x5")](_0x2b5b("0x6"));
    if (!_0x41c733) return;
    _0x41c733[_0x2b5b("0x7")] += "<li\x20id=\x22darkmode\x22><a\x20class=\x22mydark\x22\x20role=\x22button\x22\x20href=\x22#\x22><i\x20class=\x22fas\x20fa-moon\x22></i>" + dark_text + "</a></li>";
    var _0x42910d = _0x2d7dec[_0x2b5b("0x5")]("#darkmode");
    if (!_0x42910d) return;
    _0x42910d[_0x2b5b("0x8")](
        _0x2b5b("0x9"),
        function (_0x186dc3) {
            _0x186dc3[_0x2b5b("0xa")]();
            _0x2d7dec[_0x2b5b("0x3")][_0x2b5b("0xb")][_0x2b5b("0xc")](_0x2b5b("0xd"));
            if (_0x2d7dec["documentElement"][_0x2b5b("0xb")]["contains"](_0x2b5b("0xd"))) {
                localStorage[_0x2b5b("0xe")](_0x2b5b("0x2"), !![]);
                return;
            }
            localStorage[_0x2b5b("0xf")](_0x2b5b("0x2"));
        },
        ![]
    );
})(window, document);
/* Navigation */
$(document).ready(function () {
    $(".menu li a").click(function () {
        $(".menu li a.active").removeClass("active");
        $(this).toggleClass("active");
    });
});
/* Mobile Menu */
$(document).ready(function () {
    $(".show-menu").click(function () {
        $("#body-wrapper").toggleClass("aktif");
        $(this).toggleClass("aktif");
        $(".kanan-wrap,.menu a").click(function () {
            $("#body-wrapper").removeClass("aktif");
            $("a.show-menu").removeClass("aktif");
        });
    });
});
/* Home Show */
$(document).ready(function () {
    $("a.homex").click(function () {
        $(".home").addClass("show").removeClass("hide");
        $(".story").addClass("hide").removeClass("show");
        $(".awards").addClass("hide").removeClass("show");
        $(".volunteer").addClass("hide").removeClass("show");
        $(".contact").addClass("hide").removeClass("show");
    });
});
/* Story Show */
$(document).ready(function () {
    $("a.storyx").click(function () {
        $(".story").addClass("show").removeClass("hide");
        $(".home").addClass("hide").removeClass("show");
        $(".awards").addClass("hide").removeClass("show");
        $(".volunteer").addClass("hide").removeClass("show");
        $(".contact").addClass("hide").removeClass("show");
    });
});
/* Awards Show */
$(document).ready(function () {
    $("a.awardsx").click(function () {
        $(".awards").addClass("show").removeClass("hide");
        $(".home").addClass("hide").removeClass("show");
        $(".story").addClass("hide").removeClass("show");
        $(".volunteer").addClass("hide").removeClass("show");
        $(".contact").addClass("hide").removeClass("show");
    });
});
/* Volunteer Show */
$(document).ready(function () {
    $("a.volunteerx").click(function () {
        $(".volunteer").addClass("show").removeClass("hide");
        $(".home").addClass("hide").removeClass("show");
        $(".story").addClass("hide").removeClass("show");
        $(".awards").addClass("hide").removeClass("show");
        $(".contact").addClass("hide").removeClass("show");
    });
});
/* Contact Show */
$(document).ready(function () {
    $("a.contactx").click(function () {
        $(".contact").addClass("show").removeClass("hide");
        $(".home").addClass("hide").removeClass("show");
        $(".story").addClass("hide").removeClass("show");
        $(".awards").addClass("hide").removeClass("show");
        $(".volunteer").addClass("hide").removeClass("show");
    });
});