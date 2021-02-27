function writeheader()
{
  document.write('<div class=pheader>')
  document.write(document.title);
  document.write('</div>')

}
function startsection(s)
{
  str = '<table class=noborder width=100%>\
    <tr valign=top>\
    <td style="background-color:#ffd080; width:9em;">\
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\
    <center>\
    <br><br>';
  document.write(str);

  document.write(s);

  str2 = '</center>\
    <td style="width:2em">\
    <td style="width:35em"><br><br>';
  document.write(str2)
}

function endsection()
{
  document.write('</table>');
}

function startpage(s)
{
    writeheader()
    startsection(s)
}

function endpage()
{
  endsection()
  document.write('<div class="page-break"></div>');
}

function nextsection(s)
{
  endsection()
  startsection(s)
}
