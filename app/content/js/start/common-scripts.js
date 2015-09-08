var Script = function () {
    $(document).on("click", ".nav-collapse", function (e) {
        $(e.target).is("a") && $(this).collapse("hide")
    }), jQuery("#sidebar .sub-menu > a").click(function () {
        var e = jQuery(".sub-menu.open", $("#sidebar"));
        e.removeClass("open"), jQuery(".arrow", e).removeClass("open"), jQuery(".sub", e).slideUp(200);
        var o = jQuery(this).next();
        o.is(":visible") ? (jQuery(".arrow", jQuery(this)).removeClass("open"), jQuery(this).parent().removeClass("open"), o.slideUp(200)) : (jQuery(".arrow", jQuery(this)).addClass("open"), jQuery(this).parent().addClass("open"), o.slideDown(200))
    }), $(document).on("click", ".navbar-collapse.in", function (e) {
        $(e.target).is("a") && "dropdown-toggle" != $(e.target).attr("class") && $(this).collapse("hide")
    }), $(".icon-reorder").click(function () {
        $("#sidebar > ul").is(":visible") === !0 ? ($("#main-content").css({
            "margin-left": "0px"
        }), $("#sidebar").css({
            "margin-left": "-180px"
        }), $("#sidebar > ul").hide(), $("#container").addClass("sidebar-closed")) : ($("#main-content").css({
            "margin-left": "180px"
        }), $("#sidebar > ul").show(), $("#sidebar").css({
            "margin-left": "0"
        }), $("#container").removeClass("sidebar-closed"))
    }), $(".sidebar-scroll").niceScroll({
        styler: "fb",
        cursorcolor: "#4A8BC2",
        cursorwidth: "5",
        cursorborderradius: "0px",
        background: "#404040",
        cursorborder: ""
    }), $("html").niceScroll({
        styler: "fb",
        cursorcolor: "#4A8BC2",
        cursorwidth: "8",
        cursorborderradius: "0px",
        background: "#404040",
        cursorborder: "",
        zindex: "1000"
    });
    var e = "60px";
    jQuery("#theme-change").click(function () {
        !$(this).attr("opened") || $(this).attr("opening") || $(this).attr("closing") ? $(this).attr("closing") || $(this).attr("opening") || ($(this).attr("opening", "1"), $("#theme-change").css("overflow", "visible").animate({
            width: "226px",
            height: e,
            "padding-top": "3px"
        }, {
            complete: function () {
                $(this).removeAttr("opening"), $(this).attr("opened", 1)
            }
        }), $("#theme-change .settings").show()) : ($(this).removeAttr("opened"), $(this).attr("closing", "1"), $("#theme-change").css("overflow", "hidden").animate({
            width: "20px",
            height: "22px",
            "padding-top": "3px"
        }, {
            complete: function () {
                $(this).removeAttr("closing"), $("#theme-change .settings").hide()
            }
        }))
    }), jQuery("#theme-change .colors span").click(function () {
        var e = $(this).attr("data-style");
        o(e)
    }), jQuery("#theme-change .layout input").change(function () {
        setLayout()
    });
    var o = function (e) {
        $("#style_color").attr("href", "css/style-" + e + ".css")
    };
    jQuery(".widget .tools .icon-chevron-down, .widget .tools .icon-chevron-up").click(function () {
        var e = jQuery(this).parents(".widget").children(".widget-body");
        jQuery(this).hasClass("icon-chevron-down") ? (jQuery(this).removeClass("icon-chevron-down").addClass("icon-chevron-up"), e.slideUp(200)) : (jQuery(this).removeClass("icon-chevron-up").addClass("icon-chevron-down"), e.slideDown(200))
    }), jQuery(".widget .tools .icon-remove").click(function () {
        jQuery(this).parents(".widget").parent().remove()
    }), $(".element").tooltip(), $(".tooltips").tooltip(), $(".popovers").popover(), $(".scroller")
}();
