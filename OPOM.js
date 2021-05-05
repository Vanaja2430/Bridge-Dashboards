var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>Bridge OPOM Reports</h2>" +
    "<ol>";

var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ol>" +
  "</nav>";

$(".all-questions").prepend(ToC);