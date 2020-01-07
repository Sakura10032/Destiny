$(document).ready(function () {
    $("#menu-btn").on("click", function (e) {
        $(".sidebar").toggleClass('sidebar-display');
        $("#main").toggleClass('main-position');
        $(".article-directory").toggleClass('directory-position');
        $(document).one("click", function () {
            $(".sidebar").removeClass('sidebar-display');
            $("#main").removeClass('main-position');
            $(".article-directory").removeClass('directory-position');
        });
        $(".qr-code").removeClass('qr-code-display');
        e.stopPropagation();
    });
    $(".search-text").on("click", function (e) {
        e.stopPropagation();
    });
    $("#aplayer").on("click", function (e) {
        e.stopPropagation();
    });
    $(".appreciate-btn").on("click", function (e) {
        $(".qr-code").addClass('qr-code-display');
        $(document).one("click", function () {
            $(".qr-code").removeClass('qr-code-display');
        });
        e.stopPropagation();
    });
    $(".qr-code").on("click", function (e) {
        e.stopPropagation();
    });
    $(".closinglayer").on("click", function (e) {
        $(".qr-code").removeClass('qr-code-display');
    });
    $(".zfb-btn").on("click", function (e) {
        $(".qr_code_zfb").css("opacity", "1");
        $(".qr_code_wx").css("opacity", "0");
    });
    $(".wx-btn").on("click", function (e) {
        $(".qr_code_wx").css("opacity", "1");
        $(".qr_code_zfb").css("opacity", "0");
    });
    Comment_verification();
    // (function() {
    // 	var ModalHelper = (function(bodyCls) {
    // 		var scrollTop;
    // 		return {
    // 			afterOpen: function() {
    // 				scrollTop = document.scrollingElement.scrollTop;
    // 				document.body.classList.add(bodyCls);
    // 				document.body.style.top = -scrollTop + 'px';
    // 			},
    // 			beforeClose: function() {
    // 				document.body.classList.remove(bodyCls);
    // 				document.scrollingElement.scrollTop = scrollTop;
    // 			}
    // 		};
    // 	})('modal-open');
    // 	var count = 1;
    // 	$("#menu-btn").on("click", function(e) {
    // 		count++;
    // 		if (count % 2 == 0) {
    // 			ModalHelper.afterOpen();
    // 			$(".sidebar").addClass('sidebar-display');
    // 			$("#main").addClass('main-position');
    // 		} else {
    // 			ModalHelper.beforeClose();
    // 			$(".sidebar").removeClass('sidebar-display');
    // 			$("#main").removeClass('main-position');
    // 		};
    // 		$(document).one("click", function() {
    // 			ModalHelper.beforeClose();
    // 			$(".sidebar").removeClass('sidebar-display');
    // 			$("#main").removeClass('main-position');
    // 			count++;
    // 		});
    // 		$(".qr-code").removeClass('qr-code-display');
    // 		e.stopPropagation();
    // 	});
    // })();
});

window.onpopstate = function (event) {
    $(".sidebar").removeClass('sidebar-display');
    $("#main").removeClass('main-position');
};

function OwO_show() {
    if ($("#OwO-container").css("display") == 'none') {
        $("#OwO-container").slideDown();
    } else {
        $("#OwO-container").slideUp();
    }
}
Smilies = {
    dom: function (id) {
        return document.getElementById(id);
    },
    grin: function (tag) {
        tag = ' ' + tag + ' ';
        myField = this.dom("textarea");
        document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : this.insertTag(tag);
    },
    insertTag: function (tag) {
        myField = Smilies.dom("textarea");
        myField.selectionStart || myField.selectionStart == "0" ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus());
    }
};

var commentReversal = function () {
    if ($('.comment-children>.comment-list').length > 0) {
        $('.comment-children>.comment-list').each(function () {
            var commentChildren = $(this).children("li");
            var commentChildrenArr = [];
            commentChildren.each(function () {
                commentChildrenArr.push($(this).prop("outerHTML"));
            });
            var commentChildrenArrReverse = commentChildrenArr.reverse();
            $(this).html(commentChildrenArrReverse.join(''));
        });
    }
};
commentReversal();

var setupContents = function () {
    $(".article-content img:not(img[no-zoom]), .page-content img:not(img[no-zoom])").each(function () {
        $(this).wrap(function () {
            return "<a data-fancybox='gallery' href='" + $(this).attr("src") + "' class='fancybox-a' />";
        });
    });
};
setupContents();

// 鼠标点击爱心特效
!function (e, t, a) {
    function r() {
        for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
        requestAnimationFrame(r)
    }

    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(),
                o(e)
        }
    }

    function o(e) {
        var a = t.createElement("div");
        a.className = "heart",
            s.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: c()
            }),
            t.body.appendChild(a)
    }

    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch (t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }

    function c() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }

    var s = [];
    e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function (e) {
            setTimeout(e, 1e3 / 60)
        },
        i(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        n(),
        r()
}(window, document);

// 返回顶部
$(function () {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $("#touch-to-top").fadeIn(500);
            } else {
                $("#touch-to-top").fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#touch-to-top").click(function () {
            if ($('html').scrollTop()) {
                $('html').animate({scrollTop: 0}, 1000);
            }
            $('body').animate({scrollTop: 0}, 1000);
        });
    });
});

/**
 * 百度链接提交
 */
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

/**
 * 评论验证
 * @constructor
 */
var Comment_verification = function () {
    var RandomOne = Math.round(Math.random() * 10);
    var RandomTwo = Math.round(Math.random() * 20);
    $('.random-one').text(RandomOne + " +");
    $('.random-two').text(RandomTwo + " =");
    $('.verify-the-answer').bind('input propertychange', function () {
        if ($(this).val() == (RandomOne + RandomTwo)) {
            $(".verify-the-answer").css("display", "none");
            $(".random-two").css("display", "none");
            $(".random-one").css("display", "none");
            $(".submit-box").prepend('<button type="submit" class="submit">biu~</button>');
        }
    });
};