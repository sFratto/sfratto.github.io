$("button.customB").on( "click", function() {
  $( "td.custom" ).each( function( i ) {

  var gamesMulti = $("input.gamesMulti").val();
  var gamesStartedMulti = $("input.gamesStartedMulti").val();
  var attsMulti = $("input.attsMulti").val();
  var yardsMulti = $("input.yardsMulti").val();
  var tdMulti = $("input.tdMulti").val();
  var firstDownsMulti = $("input.firstDownsMulti").val();
  var longMulti = $("input.longMulti").val();
  var ypaMulti = $("input.ypaMulti").val();
  var ypgMulti = $("input.ypgMulti").val();
  // var fumblesMulti = $("input.fumblesMulti").val();
  // var ageMulti = $("input.ageMulti").val();
  var ybcMulti = $("input.ybcMulti").val();
  var ybcpaMulti = $("input.ybcpaMulti").val();
  var yacMulti = $("input.yacMulti").val();
  var yacpaMulti = $("input.yacpaMulti").val();
  // var brkTklMulti = $("input.brkTklMulti").val();
  // var attpBrkTlkMulti = $("input.attpBrkTlkMulti").val();
  var attsI20Multi = $("input.attsI20Multi").val();
  var tdI20Multi = $("input.tdI20Multi").val();   
  var targetsMulti = $("input.targetsMulti").val();
  var recYardsMulti = $("input.recYardsMulti").val();
  var receptionsMulti = $("input.receptionsMulti").val();
  var yprMulti = $("input.yprMulti").val();
  var recTDMulti = $("input.recTDMulti").val();
  var snapPerMulti = $("input.snapPerMulti").val();
  
  
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
  var tdI20Div = 10;  
  var targetsDiv = 70;
  var receptionsDiv = 50;
  var recYardsDiv = 350;
  var yprDiv = 7.5;
  var recTDDiv = 4;
  var snapPerDiv = 60;
 

  
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
  var tdI20Total =   $("tr.player" + i + " td.tdI20").text();
  var targetsTotal =  $("tr.player" + i + " td.targets").text();
  var recYardsTotal = $("tr.player" + i + " td.recYards").text();
  var receptionsTotal = $("tr.player" + i + " td.receptions").text();
  var yprTotal = $("tr.player" + i + " td.ypr").text();
  var recTDTotal = $("tr.player" + i + " td.recTD").text();
  var snapPerTotal = $("tr.player" + i + " td.snapPer").text();
  

  
  
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
  var tdI20Custom =   (tdI20Total / tdI20Div) * tdI20Multi;
  var targetsCustom = (targetsTotal / targetsDiv) * targetsMulti;
  var recYardsCustom = (recYardsTotal / recYardsDiv) * recYardsMulti;
  var receptionsCustom = (receptionsTotal / receptionsDiv) * receptionsMulti;
  var yprCustom = (yprTotal / yprDiv) * yprMulti;
  var recTDCustom = (recTDTotal / recTDDiv) * recTDMulti;
  var snapPerCustom = (snapPerTotal / snapPerDiv) * snapPerMulti;
  

  

  var custom = gamesCustom + gamesStartedCustom + attsCustom + yardsCustom + tdCustom + firstDownsCustom + longCustom + ypaCustom + ypgCustom + ybcCustom + ybcpaCustom + yacCustom + yacpaCustom + attsI20Custom + tdI20Custom + targetsCustom + receptionsCustom + recTDCustom + yprCustom + snapPerCustom + recTDCustom

   


  



  
  // $("tr.player" + i + " td.custom").text(targetsDiv);
  $("tr.player" + i + " td.custom").text(Math.round((custom + Number.EPSILON) * 100) / 100);
  // console.log();
  
  });
});
// adding classes

var elements = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements.length; i++) {
  elements[i].classList.add("player" + i, "player");
};

var elements1 = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements1.length; i++) {
  var x = (0+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("player");

};

for (var i=0; i < elements1.length; i++) {
  var x = (1+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("custom");
};

var elements1 = document.querySelectorAll("tBody#players > tr")

for (var i=0; i < elements1.length; i++) {
  var x = (2+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tm");
};

for (var i=0; i < elements1.length; i++) {
  var x = (3+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("age");
};

for (var i=0; i < elements1.length; i++) {
  var x = (4+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("pos");
};

for (var i=0; i < elements1.length; i++) {
  var x = (5+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("games");
};

for (var i=0; i < elements1.length; i++) {
  var x = (6+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("gamesStarted");
};

for (var i=0; i < elements1.length; i++) {
  var x = (7+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("atts");
};

for (var i=0; i < elements1.length; i++) {
  var x = (8+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yards");
};

for (var i=0; i < elements1.length; i++) {
  var x = (9+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("td");
};

for (var i=0; i < elements1.length; i++) {
  var x = (10+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("firstDowns");
};

for (var i=0; i < elements1.length; i++) {
  var x = (11+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("long");
};

for (var i=0; i < elements1.length; i++) {
  var x = (12+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ypa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (13+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ypg");
};

for (var i=0; i < elements1.length; i++) {
  var x = (14+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("fumbles");
};


for (var i=0; i < elements1.length; i++) {
  var x = (15+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ybc");
};

for (var i=0; i < elements1.length; i++) {
  var x = (16+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ybcpa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (17+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yac");
};

for (var i=0; i < elements1.length; i++) {
  var x = (18+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("yacpa");
};

for (var i=0; i < elements1.length; i++) {
  var x = (19+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("brkTkl");
};

for (var i=0; i < elements1.length; i++) {
  var x = (20+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attpBrkTlk");
};

for (var i=0; i < elements1.length; i++) {
  var x = (21+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("attsI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (22+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("tdI20");
};

for (var i=0; i < elements1.length; i++) {
  var x = (23+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("targets");
};

for (var i=0; i < elements1.length; i++) {
  var x = (24+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("receptions");
};

for (var i=0; i < elements1.length; i++) {
  var x = (25+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("recYards");
};

for (var i=0; i < elements1.length; i++) {
  var x = (26+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("ypr");
};

for (var i=0; i < elements1.length; i++) {
  var x = (27+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("recTD");
};

for (var i=0; i < elements1.length; i++) {
  var x = (28+(i*29))
  document.querySelectorAll("tBody#players > tr > td")[x].classList.add("snapPer");
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

  $( "tr.player" ).each( function( i ) {
    
    var attsTotal = $("tr.player" + i + " td.atts").text();

    var attsLimit = $("input.attsMin").val();

    var attsDiff = attsTotal - attsLimit

    if( attsDiff < 0 ){
      $( "tr.player" + i).addClass("hide");
    }


    var targetsTotal = $("tr.player" + i + " td.targets").text();

    var targetsLimit = $("input.targetsMin").val();

    var targetsDiff = targetsTotal - targetsLimit

    if( targetsDiff < 0 ){
      $( "tr.player" + i).addClass("hide");
    }

    var gamesTotal = $("tr.player" + i + " td.games").text();

    var gamesLimit = $("input.gamesMin").val();

    var gamesDiff = gamesTotal - gamesLimit

    if( gamesDiff < 0 ){
      $( "tr.player" + i).addClass("hide");
    }

    

    
       
    
    // $("tr.player" + i + " td.custom").text(attsTotal);
  
    
    
    });
  });