
var pagev = 1;

function writeheader()
{
  document.write('<div class="header">')
  document.write(document.title + " -- page " + pagev + "<br><br>" )
  document.write('</div>')
  pagev++
}
function startsection(s, b)
{
  str = '<table class=noborder width=100%>\
    <tr valign=top>\
    <td style="background-color:#FFD378; width:9em;">\
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\
    <center>';

  document.write(str);
  document.write(b);

  document.write(s);

  str2 = '</center>\
    <td style="width:2em">\
    <td style="width:35em">';
  document.write(str2)
}

function endsection()
{
  document.write('</table>');
}

function startpage(s)
{
  writeheader()
  startsection(s, "")
}

function endpage()
{
  endsection()
  document.write('<div class="page-break"></div>');
}

function nextsection(s)
{
  endsection()
  startsection(s, "")
}
