document.writeln("<TABLE BORDER = '1' WIDTH = '50%'>");
document.writeln("<TR><TH WIDTH = '50'><B>N</b></TH>");
document.writeln("<TH><B>N^2</B></TH>");
document.writeln("<TH><B>N^3</B></TH>");
document.writeln("<TH><B>N^4</B></TH>");
for (let i = 1; i <= 5; i++) {
  document.writeln("<TR>");
  for (let j = 1; j <= 4; j++) {
    document.writeln( "<TD>"  + Math.pow(i,j)+"</TD>");

  }
document.writeln("</TR>");
}