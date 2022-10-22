/* Source Code JS: https://github.com/ZazerConer/Source-Code-File-Downloader/blob/main/source/js/script.js */
/* License GPLv3: https://github.com/ZazerConer/Source-Code-File-Downloader/blob/main/LICENSE */

/* 
1. Create link and Save/Download file.
2. Click button (Clear Textarea Value).
3. Click button (Show/Hide "div").
4. Click button (active).
5. Paste Text/Code Detection.
6. Auto resize textarea.
7. Preview text (PrivacyPolicy).
*/

/*-- Create link and Save/Download file -------------------------------------------*/

// Download file.
function saveHTML(file) {
    // HTML.
    let data = document.getElementById("htmlText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "text/html" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveCSS(file) {
    // CSS.
    let data = document.getElementById("cssText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "text/css" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveJS(file) {
    // JavaScript.
    let data = document.getElementById("jsText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "application/javascript" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveXML(file) {
    // XML.
    let data = document.getElementById("xmlText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "application/xml" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveJSON(file) {
    // JSON.
    let data = document.getElementById("jsonText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "application/json" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveMD(file) {
    // Markdown.
    let data = document.getElementById("mdText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "text/markdown" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveTXT(file) {
    // TXT.
    let data = document.getElementById("txtText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "text/plain" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveSVG(file) {
    // SVG.
    let data = document.getElementById("svgText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "image/svg+xml" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveM3U(file) {
    // M3U.
    let data = document.getElementById("m3uText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "audio/x-mpegurl" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function savePDF(file) {
    // PDF.
    let data = document.getElementById("pdfText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "application/pdf" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveSQL(file) {
    // SQL.
    let data = document.getElementById("sqlText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "application/x-sql" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

// Download file.
function saveCSV(file) {
    // CSV.
    let data = document.getElementById("csvText").value;
    let link = document.createElement("a");
    link.download = "href";
    let blob = new Blob([data], { type: "text/csv" });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

/*-- Click button (Clear Textarea Value) -------------------------------------------*/

// HTML.
const textarea1 = document.getElementById("htmlText");
textarea1.value = "";
const clearHTML = document.getElementById("clearHTML");
clearHTML.addEventListener("click", function handleClick() {
    console.log(textarea1.value);
    textarea1.value = "";
});

// CSS.
const textarea2 = document.getElementById("cssText");
textarea2.value = "";
const clearCSS = document.getElementById("clearCSS");
clearCSS.addEventListener("click", function handleClick() {
    console.log(textarea2.value);
    textarea2.value = "";
});

// JavaScript.
const textarea3 = document.getElementById("jsText");
textarea3.value = "";
const clearJS = document.getElementById("clearJS");
clearJS.addEventListener("click", function handleClick() {
    console.log(textarea3.value);
    textarea3.value = "";
});

// XML.
const textarea4 = document.getElementById("xmlText");
textarea4.value = "";
const clearXML = document.getElementById("clearXML");
clearXML.addEventListener("click", function handleClick() {
    console.log(textarea4.value);
    textarea4.value = "";
});

// JSON.
const textarea5 = document.getElementById("jsonText");
textarea5.value = "";
const clearJSON = document.getElementById("clearJSON");
clearJSON.addEventListener("click", function handleClick() {
    console.log(textarea5.value);
    textarea5.value = "";
});

// Markdown.
const textarea6 = document.getElementById("mdText");
textarea6.value = "";
const clearMD = document.getElementById("clearMD");
clearMD.addEventListener("click", function handleClick() {
    console.log(textarea6.value);
    textarea6.value = "";
});

// TXT.
const textarea7 = document.getElementById("txtText");
textarea7.value = "";
const clearTXT = document.getElementById("clearTXT");
clearTXT.addEventListener("click", function handleClick() {
    console.log(textarea7.value);
    textarea7.value = "";
});

// SVG.
const textarea8 = document.getElementById("svgText");
textarea8.value = "";
const clearSVG = document.getElementById("clearSVG");
clearSVG.addEventListener("click", function handleClick() {
    console.log(textarea8.value);
    textarea8.value = "";
});

// M3U.
const textarea9 = document.getElementById("m3uText");
textarea9.value = "";
const clearM3U = document.getElementById("clearM3U");
clearM3U.addEventListener("click", function handleClick() {
    console.log(textarea9.value);
    textarea9.value = "";
});

// PDF.
const textarea10 = document.getElementById("pdfText");
textarea10.value = "";
const clearPDF = document.getElementById("clearPDF");
clearPDF.addEventListener("click", function handleClick() {
    console.log(textarea10.value);
    textarea10.value = "";
});

// SQL.
const textarea11 = document.getElementById("sqlText");
textarea11.value = "";
const clearSQL = document.getElementById("clearSQL");
clearSQL.addEventListener("click", function handleClick() {
    console.log(textarea11.value);
    textarea11.value = "";
});

// CSV.
const textarea12 = document.getElementById("csvText");
textarea12.value = "";
const clearCSV = document.getElementById("clearCSV");
clearCSV.addEventListener("click", function handleClick() {
    console.log(textarea12.value);
    textarea12.value = "";
});

/*-- Click button (Show/Hide "div") -------------------------------------------*/

/* style.display = 'inline-block' > Show / 'none' > Hide */

// HTML.
function htmlClick(showDiv) {
    var clickbutton = document.getElementById("htmlBtn");
    if (htmlBtn) {
        // Button click..
        document.getElementById("html").style.display = "inline-block";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// CSS.
function cssClick(showDiv) {
    var clickbutton = document.getElementById("cssBtn");
    if (cssBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "inline-block";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// JavaScript.
function jsClick(showDiv) {
    var clickbutton = document.getElementById("jsBtn");
    if (jsBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "inline-block";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// XML.
function xmlClick(showDiv) {
    var clickbutton = document.getElementById("xmlBtn");
    if (xmlBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "inline-block";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// JSON.
function jsonClick(showDiv) {
    var clickbutton = document.getElementById("jsonBtn");
    if (jsonBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "inline-block";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// Markdown.
function mdClick(showDiv) {
    var clickbutton = document.getElementById("mdBtn");
    if (mdBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "inline-block";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// TXT.
function txtClick(showDiv) {
    var clickbutton = document.getElementById("txtBtn");
    if (txtBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "inline-block";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// SVG.
function svgClick(showDiv) {
    var clickbutton = document.getElementById("svgBtn");
    if (svgBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "inline-Block";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// M3U.
function m3uClick(showDiv) {
    var clickbutton = document.getElementById("m3uBtn");
    if (m3uBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "inline-block";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// PDF.
function pdfClick(showDiv) {
    var clickbutton = document.getElementById("pdfBtn");
    if (pdfBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "inline-block";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// SQL.
function sqlClick(showDiv) {
    var clickbutton = document.getElementById("sqlBtn");
    if (sqlBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "inline-block";
        document.getElementById("csv").style.display = "none";
        return true;
    }
}

// CSV.
function csvClick(showDiv) {
    var clickbutton = document.getElementById("csvBtn");
    if (csvBtn) {
        // Button click..
        document.getElementById("html").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("js").style.display = "none";
        document.getElementById("xml").style.display = "none";
        document.getElementById("json").style.display = "none";
        document.getElementById("md").style.display = "none";
        document.getElementById("txt").style.display = "none";
        document.getElementById("svg").style.display = "none";
        document.getElementById("m3u").style.display = "none";
        document.getElementById("pdf").style.display = "none";
        document.getElementById("sql").style.display = "none";
        document.getElementById("csv").style.display = "inline-block";
        return true;
    }
}

/*-- Click button (active) --------------------------------------------*/

var btnContainer = document.getElementById("clickBtn");
var btns = btnContainer.getElementsByClassName("clickActive");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "clickActive");
        }
        this.className += " active";
    });
}

/*-- Paste Text/Code Detection --------------------------------------------*/

function getTextAreaSelection(textarea) {
    var start = textarea.selectionStart,
        end = textarea.selectionEnd;
    return {
        start: start,
        end: end,
        length: end - start,
        text: textarea.value.slice(start, end),
    };
}
function detectPaste(textarea, callback) {
    textarea.onpaste = function () {
        var sel = getTextAreaSelection(textarea);
        var initialLength = textarea.value.length;
        window.setTimeout(function () {
            var val = textarea.value;
            var pastedTextLength = val.length - (initialLength - sel.length);
            var end = sel.start + pastedTextLength;
            callback({
                start: sel.start,
                end: end,
                length: pastedTextLength,
                text: val.slice(sel.start, end),
            });
        }, 1);
    };
}
var textarea = document.getElementById("htmlText");
detectPaste(textarea, function (pasteInfo) {
    // HTML.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("cssText");
detectPaste(textarea, function (pasteInfo) {
    // CSS.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("jsText");
detectPaste(textarea, function (pasteInfo) {
    // JS.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("xmlText");
detectPaste(textarea, function (pasteInfo) {
    // XML.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("jsonText");
detectPaste(textarea, function (pasteInfo) {
    // JSON.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("mdText");
detectPaste(textarea, function (pasteInfo) {
    // Markdown.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("txtText");
detectPaste(textarea, function (pasteInfo) {
    // TXT.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("svgText");
detectPaste(textarea, function (pasteInfo) {
    // SVG.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("m3uText");
detectPaste(textarea, function (pasteInfo) {
    // M3U.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("pdfText");
detectPaste(textarea, function (pasteInfo) {
    // PDF.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("sqlText");
detectPaste(textarea, function (pasteInfo) {
    // SQL.
    alert(pasteInfo.text);
});
var textarea = document.getElementById("csvText");
detectPaste(textarea, function (pasteInfo) {
    // CSV
    alert(pasteInfo.text);
});
// pasteInfo also has properties for the start and end character.
// index and length of the pasted text.

/*-- Auto resize textarea ------------------------------------------*/

(function ($) {
    $.fn.autoResize = function (options) {
        // Just some abstracted details, to make plugin users happy.
        var settings = $.extend(
            {
                onResize: function () {},
                animate: true,
                animateDuration: 150,
                animateCallback: function () {},
                extraSpace: 20,
                limit: 1000,
            },
            options
        );

        // Only textarea's auto-resize.
        this.filter("textarea").each(function () {
            // Get rid of scrollbars and disable WebKit resizing.
            var textarea = $(this).css({ resize: "none", "overflow-y": "hidden" }),
                // Cache original height, for use later.
                origHeight = textarea.height(),
                // Need clone of textarea, hidden off screen.
                clone = (function () {
                    // Properties which may effect space taken up by chracters.
                    var props = ["height", "width", "lineHeight", "textDecoration", "letterSpacing"],
                        propOb = {};

                    // Create object of styles to apply.
                    $.each(props, function (i, prop) {
                        propOb[prop] = textarea.css(prop);
                    });

                    // Clone the actual textarea removing unique properties
                    // and insert before original textarea.
                    return textarea
                        .clone()
                        .removeAttr("id")
                        .removeAttr("name")
                        .css({
                            position: "absolute",
                            top: 0,
                            left: -9999,
                        })
                        .css(propOb)
                        .attr("tabIndex", "-1")
                        .insertBefore(textarea);
                })(),
                lastScrollTop = null,
                updateSize = function () {
                    // Prepare the clone.
                    clone.height(0).val($(this).val()).scrollTop(10000);

                    // Find the height of text.
                    var scrollTop = Math.max(clone.scrollTop(), origHeight) + settings.extraSpace,
                        toChange = $(this).add(clone);

                    // Don't do anything if scrollTip hasen't changed.
                    if (lastScrollTop === scrollTop) {
                        return;
                    }
                    lastScrollTop = scrollTop;

                    // Check for limit.
                    if (scrollTop >= settings.limit) {
                        $(this).css("overflow-y", "");
                        return;
                    }

                    // Fire off callback.
                    settings.onResize.call(this);

                    // Either animate or directly apply height.
                    settings.animate && textarea.css("display") === "block" ? toChange.stop().animate({ height: scrollTop }, settings.animateDuration, settings.animateCallback) : toChange.height(scrollTop);
                };

            // Bind namespaced handlers to appropriate events.
            textarea.unbind(".dynSiz").bind("keyup.dynSiz", updateSize).bind("keydown.dynSiz", updateSize).bind("change.dynSiz", updateSize);
        });

        // Chain.
        return this;
    };
})(jQuery);

/*-- Preview text (PrivacyPolicy) -------------------------------------------*/

function preview() {
    // Button preview.
    var PrivacyPolicy = document.getElementById("PrivacyPolicy").value; // Preview text.
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    document.getElementById("textPreview").innerHTML = PrivacyPolicy.replace(exp, "<a href='$1'>$1</a>");
    document.getElementById("PrivacyPolicy").style.display = "none";
    document.getElementById("textPreview").style.display = "inline-block";
    document.getElementById("close").style.display = "inline-block";
    document.getElementById("preBtn").style.display = "none";
    document.getElementById("wrap-container").style.display = "none";
    return true;
}
$("#close").click(function () {
    // Button close.
    document.getElementById("PrivacyPolicy").style.display = "inline-block";
    document.getElementById("textPreview").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("preBtn").style.display = "inline-block";
    document.getElementById("wrap-container").style.display = "inline-block";
});
