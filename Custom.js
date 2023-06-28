$("button.customB").on( "click", function() {
  $( "td.custom" ).each( function( i ) {

  var gamesMulti = $("td.gamesMulti").text();
  var gamesStartedMulti = $("td.gamesStartedMulti").text();
  var attsMulti = $("td.attsMulti").text();
  var yardsMulti = $("td.yardsMulti").text();
  var tdMulti = $("td.tdMulti").text();
  var firstDownsMulti = $("td.firstDownsMulti").text();
  var longMulti = $("td.longMulti").text();
  var ypaMulti = $("td.ypaMulti").text();
  var ypgMulti = $("td.ypgMulti").text();
  // var fumblesMulti = $("td.fumblesMulti").text();
  // var ageMulti = $("td.ageMulti").text();
  var ybcMulti = $("td.ybcMulti").text();
  var ybcpaMulti = $("td.ybcpaMulti").text();
  var yacMulti = $("td.yacMulti").text();
  var yacpaMulti = $("td.yacpaMulti").text();
  // var brkTklMulti = $("td.brkTklMulti").text();
  // var attpBrkTlkMulti = $("td.attpBrkTlkMulti").text();
  var attsI20Multi = $("td.attsI20Multi").text();
  var yardsI20Multi = $("td.yardsI20Multi").text();
  var tdI20Multi = $("td.tdI20Multi").text();   
  // var perRushI20Multi = $("td.perRushI20Multi").text();
  var attsI10Multi = $("td.attsI10Multi").text();
  var yardsI10Multi = $("td.yardsI10Multi").text();
  var tdI10Multi = $("td.tdI10Multi").text();
  // var perRush10Multi = $("td.perRushI10Multi").text();
  var attsI5Multi = $("td.attsI5Multi").text();
  var yardsI5Multi = $("td.yardsI5Multi").text();
  var tdI5Multi = $("td.tdI5Multi").text();
  // var perRushI5Multi = $("td.perRushI5Multi").text();
  
  var gamesDiv = 16;
  var gamesStartedDiv = 16;
  var attsDiv = 200;
  var yardsDiv = 1200;
  var tdDiv = 10;
  var firstDownsDiv = 80;
  var longDiv = 55;
  var ypaDiv = 4.5;
  var ypgDiv = 85;
  // var fumblesDiv = .25;
  // var ageDiv = 0;
  var ybcDiv = 832;
  var ybcpaDiv = 3.7;
  var yacDiv = 821;
  var yacpaDiv = 2.6;
  // var brkTklDiv = 35;
  // var attpBrkTlkDiv = 0;
  var attsI20Div = 40;
  var yardsI20Div = 100;
  var tdI20Div = 10;   
  // var perRushI20Div = $("td.perRushI20Div").text();
  var attsI10Div = 25;
  var yardsI10Div = 50;
  var tdI10Div = 8;
  // var perRush10Div = $("td.perRushI10Div").text();
  var attsI5Div = 10;
  var yardsI5Div = 15;
  var tdI5Div = 5;
  // var perRushI5Div = $("td.perRushI5Div").text();

  
  var gamesTotal = $("tr.player" + i + " td.games").text();
  var gamesStartedTotal = $("tr.player" + i + " td.gamesStarted").text();
  var attsTotal = $("tr.player" + i + " td.atts").text();
  var yardsTotal = $("tr.player" + i + " td.yards").text();
  var tdTotal = $("tr.player" + i + " td.td").text();
  var firstDownsTotal = $("tr.player" + i + " td.firstDowns").text();
  var longTotal = $("tr.player" + i + " td.long").text();
  var ypaTotal = $("tr.player" + i + " td.ypa").text();
  var ypgTotal = $("tr.player" + i + " td.ypg").text();
  // var fumblesTotal = $("tr.player" + i + " td.fumbles").text();
  // var ageTotal = $("tr.player" + i + " td.age").text();
  var ybcTotal = $("tr.player" + i + " td.ybc").text();
  var ybcpaTotal = $("tr.player" + i + " td.ybcpa").text();
  var yacTotal = $("tr.player" + i + " td.yac").text();
  var yacpaTotal = $("tr.player" + i + " td.yacpa").text();
  // var brkTklTotal = $("tr.player" + i + " td.brkTkl").text();
  // var attpBrkTlkTotal =  $("tr.player" + i + " td.attpBrkTkl").text();
  var attsI20Total = $("tr.player" + i + " td.attsI20").text();
  var yardsI20Total = $("tr.player" + i + " td.yardsI20").text();
  var tdI20Total =   $("tr.player" + i + " td.tdI20").text();
  // var perRushI20Total =  $("tr.player" + i + " td.perRushI20").text();
  var attsI10Total = $("tr.player" + i + " td.attsI10").text();
  var yardsI10Total = $("tr.player" + i + " td.yardsI10").text();
  var tdI10Total = $("tr.player" + i + " td.tdI10").text();
  // var perRush10Total = $("tr.player" + i + " td.perRushI10").text();
  var attsI5Total = $("tr.player" + i + " td.attsI5").text();
  var yardsI5Total = $("tr.player" + i + " td.yardsI5").text();
  var tdI5Total = $("tr.player" + i + " td.tdI5").text();
  // var perRushI5Total = $("tr.player" + i + " td.perRushI5").text();

  
  
  var gamesCustom = (gamesTotal / gamesDiv) * gamesMulti;
  var gamesStartedCustom = (gamesStartedTotal / gamesStartedDiv) * gamesStartedMulti;
  var attsCustom = (attsTotal / attsDiv) * attsMulti;
  var yardsCustom = (yardsTotal / yardsDiv) * yardsMulti;
  var tdCustom = (tdTotal / tdDiv) * tdMulti;
  var firstDownsCustom = (firstDownsTotal / firstDownsDiv) * firstDownsMulti;
  var longCustom = (longTotal / longDiv) * longMulti;
  var ypaCustom = (ypaTotal / ypaDiv) * ypaMulti;
  var ypgCustom = (ypgTotal / ypgDiv) * ypgMulti;
  // var fumblesCustom = 1-(fumblesTotal * (fumblesDiv * fumblesMulti));
  // var ageCustom = (ageTotal / ageDiv) * ageMulti;
  var ybcCustom = (ybcTotal / ybcDiv) * ybcMulti;
  var ybcpaCustom = (ybcpaTotal / ybcpaDiv) * ybcpaMulti;
  var yacCustom = (yacTotal / yacDiv) * yacMulti;
  var yacpaCustom = (yacpaTotal / yacpaDiv) * yacpaMulti;
  // var brkTklCustom = (brkTklTotal / brkTklDiv) * brkTklMulti;
  // var attpBrkTlkCustom = (attpBrkTlkTotal / attpBrkTlkDiv) * attpBrkTlkMulti;
  var attsI20Custom = (attsI20Total / attsI20Div) * attsI20Multi;
  var yardsI20Custom = (yardsI20Total / yardsI20Div) * yardsI20Multi;
  var tdI20Custom =   (tdI20Total / tdI20Div) * tdI20Multi;
  // var perRushI20Custom = (perRushI20Total / perRushI20Div) * perRushI20Multi;
  var attsI10Custom = (attsI10Total / attsI10Div) * attsI10Multi;
  var yardsI10Custom = (yardsI10Total / yardsI10Div) * yardsI10Multi;
  var tdI10Custom = (tdI10Total / tdI10Div) * tdI10Multi;
  // var perRushI10Custom = (perRushI10Total / perRushI10Div) * perRushI10Multi;
  var attsI5Custom = (attsI5Total / attsI5Div) * attsI5Multi;
  var yardsI5Custom = (yardsI5Total / yardsI5Div) * yardsI5Multi;
  var tdI5Custom = (tdI5Total / tdI5Div) * tdI5Multi;
  // var perRushI5Custom = (perRushI5Total / perRushI5Div) * perRushI5Multi;

  

  var custom = gamesCustom + gamesStartedCustom + attsCustom + yardsCustom + tdCustom + firstDownsCustom + longCustom + ypaCustom + ypgCustom + ybcCustom + ybcpaCustom + yacCustom + yacpaCustom + attsI20Custom + yardsI20Custom + tdI20Custom + attsI10Custom + yardsI10Custom + tdI10Custom + attsI5Custom + yardsI5Custom + tdI5Custom


  
  // $("tr.player" + i + " td.custom").text(ybcpaCustom);
  $("tr.player" + i + " td.custom").text(Math.round((custom + Number.EPSILON) * 100) / 100);
  // console.log();
  
  });
});
// adding classes

var elements = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements.length; i++) {
  elements[i].classList.add("player" + i);
};

var elements1 = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements1.length; i++) {
  var x = (0+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("players");

};

for (var i=0; i < elements1.length; i++) {
  var x = (1+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("custom");
};

var elements1 = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements1.length; i++) {
  var x = (2+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tm");
};

for (var i=0; i < elements1.length; i++) {
  var x = (3+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("age");
};

for (var i=0; i < elements1.length; i++) {
  var x = (4+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("pos");
};

for (var i=0; i < elements1.length; i++) {
  var x = (5+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("games");
};

for (var i=0; i < elements1.length; i++) {
  var x = (6+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("gamesStarted");
};

for (var i=0; i < elements1.length; i++) {
  var x = (7+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("atts");
};

for (var i=0; i < elements1.length; i++) {
  var x = (8+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yards");
};

for (var i=0; i < elements1.length; i++) {
  var x = (9+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("td");
};

for (var i=0; i < elements1.length; i++) {
  var x = (10+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("firstDowns");
};

for (var i=0; i < elements1.length; i++) {
  var x = (11+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("long");
};

for (var i=0; i < elements1.length; i++) {
  var x = (12+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ypa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (13+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ypg");
};

for (var i=0; i < elements1.length; i++) {
  var x = (14+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("fumbles");
};


for (var i=0; i < elements1.length; i++) {
  var x = (15+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ybc");
};

for (var i=0; i < elements1.length; i++) {
  var x = (16+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ybcpa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (17+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yac");
};

for (var i=0; i < elements1.length; i++) {
  var x = (18+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yacpa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (19+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("brkTkl");
};

for (var i=0; i < elements1.length; i++) {
  var x = (20+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attpBrkTlk");
};

for (var i=0; i < elements1.length; i++) {
  var x = (21+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attsI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (22+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yardsI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (23+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tdI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (24+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("perRushI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (25+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attsI10");
};

for (var i=0; i < elements1.length; i++) {
  var x = (26+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yardsI10");
};

for (var i=0; i < elements1.length; i++) {
  var x = (27+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tdI10");
};

for (var i=0; i < elements1.length; i++) {
  var x = (28+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("perRushI10");
};

for (var i=0; i < elements1.length; i++) {
  var x = (29+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attsI5");
};

for (var i=0; i < elements1.length; i++) {
  var x = (30+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yardsI5");
};

for (var i=0; i < elements1.length; i++) {
  var x = (31+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tdI5");
};

for (var i=0; i < elements1.length; i++) {
  var x = (32+(i*33))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("perRushI5");
};





function sortTable(tableClass, n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

  table = document.getElementsByClassName(tableClass)[0];
  switching = true;
  dir = "asc";
  while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          var xContent = (isNaN(x.innerHTML)) 
              ? (x.innerHTML.toLowerCase() === '-')
                    ? 0 : x.innerHTML.toLowerCase()
              : parseFloat(x.innerHTML);
          var yContent = (isNaN(y.innerHTML)) 
              ? (y.innerHTML.toLowerCase() === '-')
                    ? 0 : y.innerHTML.toLowerCase()
              : parseFloat(y.innerHTML);
          if (dir == "desc") {
              if (xContent > yContent) {
                  shouldSwitch= true;
                  break;
              }
          } else if (dir == "asc") {
              if (xContent < yContent) {
                  shouldSwitch= true;
                  break;
              }
          }
      }
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount ++;      
      } else {
          if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
          }
      }
   }
};

$("button.customatts").on( "click", function() {

  $( "td.custom" ).each( function( i ) {
    
    var attsTotal = $("tr.player" + i + " td.atts").text();

    var attsLimit = $("td.attsMin").text();

    alert(attsLimit);

    

    
       
    
     
  
    
    
    });
  });