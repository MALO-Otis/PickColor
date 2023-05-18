
// THE SIDE BAR HIDING

function showSideBar()
{
    var sideBar = $("#contain");
    sideBar.show().animate({left: 0}, 500);
}
function hideSideBar()
{
    var sideBar = $("#contain");
    sideBar.show().animate({left: -1500}, 500,function() {
        $(this).hide();
      });
}
$("#side_button").click(showSideBar);
$("#close").click(hideSideBar);

// THE COLORS PICKING 
    var actual = 0;
    // select the description to update in stock div ""see the html bottom to find them"" //
    var color = $("#stocks").find('ol');
    
    //select the circle colors codes succesively
    var  backColList = [];
    var bigttTexts = [];
    color.each(function (){
        backColList.push($(this).find('li').attr('id'));
        bigttTexts.push($(this).find($('.xx')).text());
    });
function changeColorNext()
{
    //select the big title text to add
    var bigTT = $('#bigTitle').find($('.bgTTspan'));
    // select the circle and the tag where we update colors picked informations and the big title elmt to update
    var elemntToChange = $("#description");
    var coloredCircle = $('.representation');
    /* 
            updates         */
            
    // update hte bigTitle 
   
    bigTT.html(bigttTexts[actual]);

    
    // update the decription tag
    elemntToChange.html(color[actual]);

    //update the circle tag
    coloredCircle.css('background-color',backColList[actual]);
    actual++;

    var colorsNum = color.length;
    if(actual == colorsNum)
    { actual = 0;}
}
function changeColorPrevious()
{
    actual-=2;
    if(actual < 0) actual = 13;
    changeColorNext();
}
$(document).ready($("#btnradio2").click(function (){
$("#colorPath").fadeOut(100,function() {changeColorNext()}).fadeIn('slow')}));

$(document).ready($("#btnradio1").click(function (){
    $("#colorPath").fadeOut(100,function() {changeColorPrevious()}).fadeIn('slow')}));
    



    // THE side bar colors picking 


// here is an function that will allow user to copie a div content as a text in his clipboard !
                                            function copyToClipboard(text) {
                                                navigator.clipboard.writeText(text).then(function() {
                                                  alert("Text copied to clipboard");
                                                }).catch(function(error) {
                                                  alert("Error copying text to clipboard:", error);
                                                });
                                            }
//end of function 
var elmtId;
    $("document").ready($('g').click(
        function()
        {
            elmtId = $(this).find('circle').attr('class');
            chooseCircle(elmtId);
        }
    ));

function chooseCircle(element)
{
    // create a table containing all the tables
    var circles = $(".svg").find('circle');
    
    var circle = [];
    circles.each(
        function ()
        {
            circle.push($(this).attr('class'));
        }
    );
    // select the areas to show the color name:
    var chooseArea = $('.card-body').find('h5');
        // first create an object that tell the color name according to his rgb code : 
        var colorsObject = {
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800000": "Maroon",
            "#808000": "Olive",
            "#008000": "Green",
            "#800080": "Purple",
            "#008080": "Teal",
            "#000080": "Navy",
            "#FF0000": "Red",
            "#00FF00": "Green",
            "#0000FF": "Blue",
            "#FFFF00": "Yellow",
            "#FF00FF": "Magenta",
            "#00FFFF": "Cyan",
            "#FFA500": "Orange",
            "#800080": "Purple",
            "#FFC0CB": "Pink",
            "#008080": "Teal",
            "#FFD700": "Gold",
            "#800000": "Maroon",
            "#008000": "Green",
            "#000080": "Navy",
            "#808000": "Olive",
            "#808080": "Gray",
            "#800080": "Purple"
            // Add more color entries here...
          };
          
        // verifier l'element du tablau si il se trouve dans l'object, retirer son noms et le mettre dans l'areas
        
        
        chooseArea.text("You choose: " + element);
}

// function to start if user click on copie being in the side bar parth
function sidecopyhex()
{
    // RGB 
   if(elmtId) copyToClipboard(elmtId);
   else alert("Choose a color please");
}
function sidecopyRgb()
{
    
    var colorsObject = {
        "#FF0000": "rgb(255, 0, 0)",      // Red
        "#00FF00": "rgb(0, 255, 0)",      // Green
        "#0000FF": "rgb(0, 0, 255)",      // Blue
        "#FFFF00": "rgb(255, 255, 0)",    // Yellow
        "#FF00FF": "rgb(255, 0, 255)",    // Magenta
        "#00FFFF": "rgb(0, 255, 255)",    // Cyan
        "#FFA500": "rgb(255, 165, 0)",    // Orange
        "#800080": "rgb(128, 0, 128)",    // Purple
        "#FFC0CB": "rgb(255, 192, 203)",  // Pink
        "#008080": "rgb(0, 128, 128)",    // Teal
        "#FFFFF0": "rgb(255, 255, 240)",  // Ivory
        "#F0F8FF": "rgb(240, 248, 255)",  // AliceBlue
        "#FAEBD7": "rgb(250, 235, 215)",  // AntiqueWhite
        "#7FFFD4": "rgb(127, 255, 212)",  // Aquamarine
        "#F5F5DC": "rgb(245, 245, 220)",  // Beige
        "#FFE4C4": "rgb(255, 228, 196)",  // Bisque
        "#000000": "rgb(0, 0, 0)",        // Black
        "#FFEBCD": "rgb(255, 235, 205)",  // BlanchedAlmond
        "#0000FF": "rgb(0, 0, 255)",      // Blue
        "#8A2BE2": "rgb(138, 43, 226)",   // BlueViolet
        "#A52A2A": "rgb(165, 42, 42)",    // Brown
        "#DEB887": "rgb(222, 184, 135)",  // BurlyWood
        "#5F9EA0": "rgb(95, 158, 160)",   // CadetBlue
        "#7FFF00": "rgb(127, 255, 0)",    // Chartreuse
        "#D2691E": "rgb(210, 105, 30)",   // Chocolate
        "#FF7F50": "rgb(255, 127, 80)",   // Coral
        "#6495ED": "rgb(100, 149, 237)",  // CornflowerBlue
        "#FFF8DC": "rgb(255, 248, 220)",  // Cornsilk
        "#DC143C": "rgb(220, 20, 60)",    // Crimson
        "#00FFFF": "rgb(0, 255, 255)",    // Cyan
        "#00008B": "rgb(0, 0, 139)",      // DarkBlue
        "#008B8B": "rgb(0, 139, 139)",    // DarkCyan
        "#B8860B": "rgb(184, 134, 11)",   // DarkGoldenRod
        "#A9A9A9": "rgb(169, 169, 169)",  // DarkGray
        "#006400": "rgb(0, 100, 0)",      // DarkGreen
        "#BDB76B": "rgb(189, 183, 107)",  // DarkKhaki
        "#8B008B": "rgb(139, 0, 139)",    // DarkMagenta
        "#556B2F": "rgb(85, 107, 47)",    // DarkOliveGreen
        "#FF8C00": "rgb(255, 140, 0)",    // DarkOrange
        "#9932CC": "rgb(153, 50, 204)",   // DarkOrchid
        "#8B0000": "rgb(139, 0, 0)",      // DarkRed
        "#E9967A": "rgb(233, 150, 122)",  // DarkSalmon
        "#8FBC8F": "rgb(143, 188, 143)",  // DarkSeaGreen
        "#483D8B": "rgb(72, 61, 139)",    // DarkSlateBlue
        "#2F4F4F": "rgb(47, 79, 79)",     // DarkSlateGray
        "#00CED1": "rgb(0, 206, 209)",    // DarkTurquoise
        "#9400D3": "rgb(148, 0, 211)",    // DarkViolet
        "#FF1493": "rgb(255, 20, 147)",   // DeepPink
        "#00BFFF": "rgb(0, 191, 255)",    // DeepSkyBlue
        "#696969": "rgb(105, 105, 105)",  // DimGray
        "#1E90FF": "rgb(30, 144, 255)",   // DodgerBlue
        "#B22222": "rgb(178, 34, 34)",    // FireBrick
        "#FFFAF0": "rgb(255, 250, 240)",  // FloralWhite
        "#228B22": "rgb(34, 139, 34)",    // ForestGreen
        "#FF00FF": "rgb(255, 0, 255)",    // Fuchsia
        "#DCDCDC": "rgb(220, 220, 220)",  // Gainsboro
        "#F8F8FF": "rgb(248, 248, 255)",  // GhostWhite
        "#FFD700": "rgb(255, 215, 0)",    // Gold
        "#DAA520": "rgb(218, 165, 32)",   // GoldenRod
        "#808080": "rgb(128, 128, 128)",  // Gray
        "#008000": "rgb(0, 128, 0)",      // Green
        "#ADFF2F": "rgb(173, 255, 47)",   // GreenYellow
        "#F0FFF0": "rgb(240, 255, 240)",  // HoneyDew
        "#FF69B4": "rgb(255, 105, 180)",  // HotPink
        "#CD5C5C": "rgb(205, 92, 92)",    // IndianRed
        "#4B0082": "rgb(75, 0, 130)",     // Indigo
        "#FFFFF0": "rgb(255, 255, 240)",  // Ivory
        "#F0E68C": "rgb(240, 230, 140)",  // Khaki
        "#E6E6FA": "rgb(230, 230, 250)",  // Lavender
        "#FFF0F5": "rgb(255, 240, 245)",  // LavenderBlush
        "#7CFC00": "rgb(124, 252, 0)",    // LawnGreen
        "#FFFACD": "rgb(255, 250, 205)",  // LemonChiffon
        "#ADD8E6": "rgb(173, 216, 230)",  // LightBlue
        "#F08080": "rgb(240, 128, 128)",  // LightCoral
        "#E0FFFF": "rgb(224, 255, 255)",  // LightCyan
        "#FAFAD2": "rgb(250, 250, 210)",  // LightGoldenRodYellow
        "#90EE90": "rgb(144, 238, 144)",  // LightGreen
        "#D3D3D3": "rgb(211, 211, 211)",  // LightGrey
        "#FFB6C1": "rgb(255, 182, 193)",  // LightPink
        "#FFA07A": "rgb(255, 160, 122)",  // LightSalmon
        "#20B2AA": "rgb(32, 178, 170)",   // LightSeaGreen
        "#87CEFA": "rgb(135, 206, 250)",  // LightSkyBlue
        "#778899": "rgb(119, 136, 153)",  // LightSlateGray
        "#B0C4DE": "rgb(176, 196, 222)",  // LightSteelBlue
        "#FFFFE0": "rgb(255, 255, 224)",  // LightYellow
        "#FF0000": "rgb(255, 0, 0)",       // Red
        "#00FF00": "rgb(0, 255, 0)",       // Green
        "#0000FF": "rgb(0, 0, 255)",       // Blue
        "#FFFF00": "rgb(255, 255, 0)",     // Yellow
        "#FF00FF": "rgb(255, 0, 255)",     // Magenta
        "#00FFFF": "rgb(0, 255, 255)",     // Cyan
        "#FFA500": "rgb(255, 165, 0)",     // Orange
        "#800080": "rgb(128, 0, 128)",     // Purple
        "#FFC0CB": "rgb(255, 192, 203)",   // Pink
        "#008080": "rgb(0, 128, 128)",     // Teal
        "#FFD700": "rgb(255, 215, 0)",     // Gold
        "#800000": "rgb(128, 0, 0)",       // Maroon
        "#008000": "rgb(0, 128, 0)",       // Green
        "#000080": "rgb(0, 0, 128)",       // Navy
        "#808000": "rgb(128, 128, 0)",     // Olive
        "#800040": "rgb(128, 0, 64)",      // Burgundy
        "#808040": "rgb(128, 128, 64)",    // Khaki
        "#C0C0C0": "rgb(192, 192, 192)",   // Silver
        "#FF7F00": "rgb(255, 127, 0)",     // Orange (Dark)
        "#FF4500": "rgb(255, 69, 0)",      // Orange (Red)
        "#FF1493": "rgb(255, 20, 147)",    // Deep Pink
        "#000000": "rgb(0, 0, 0)",         // Black
        "#808080": "rgb(128, 128, 128)",   // Gray
        "#00FF7F": "rgb(0, 255, 127)",     // Spring Green
        "#ADD8E6": "rgb(173, 216, 230)",   // Light Blue
        "#20B2AA": "rgb(32, 178, 170)",    // Sea Green
        "#B22222": "rgb(178, 34, 34)",     // Fire Brick
        "#228B22": "rgb(34, 139, 34)",     // Forest Green
        "#FFFFFF":"rgb(0,0,0)",             //black
        "#871313": "rgb(135, 19, 19)",
        "#FE0415": "rgb(254, 4, 21)",
        "#26c953": "rgb(38, 201, 83)",
        "#ff0": "rgb(255, 255, 0)",
        "#590fb9": "rgb(89, 15, 185)",
        "#f78008": "rgb(247, 128, 8)",
        "#00e6ff": "rgb(0, 230, 255)",
        "#080808": "rgb(8, 8, 8)",
        "#bc9c9c": "rgb(188, 156, 156)",
        "#4B0957": "rgb(75, 9, 87)",
        "#fff": "rgb(255, 255, 255)",
        "#00A4F5": "rgb(0, 164, 245)",
        "#00ffa8": "rgb(0, 255, 168)",
        "#065FFB": "rgb(6, 95, 251)",
        "#590FB9": "rgb(89, 15, 185)",
        "#080808": "rgb(8, 8, 8)",
        "#FFFFFF": "rgb(255, 255, 255)",
        "#871313": "rgb(135, 19, 19)",
        "#26C953": "rgb(38, 201, 83)",
        "#BC9C9C": "rgb(188, 156, 156)",
        "#4B0957": "rgb(75, 9, 87)",
        "#00A4F5": "rgb(0, 164, 245)",
        "#FFFF00": "rgb(255, 255, 0)",
    }
    var text = colorsObject[elmtId];
    if(text) copyToClipboard(text)
    else alert("No Rgb code for this color !");
    $('.card-body').find('h5').text("You choose: " + text);
}
$('document').ready($('#copy2').click(sidecopyRgb));
$('document').ready($('#copy1').click(sidecopyhex));

// function to start if user click on copie being in the home parge
                                    //this part is the initialization of tooltip !
                                    var tooltipButton = document.getElementById('tooltipButton');
                                    var tooltip = new bootstrap.Tooltip(tooltipButton, {
                                    placement: 'top',
                                    title: 'Copie on Keyboard'
                                    });

var btn = $('#tooltipButton');
btn.fadeOut(1000);
var target = $('#colorPath');

function showCopy()
{
    btn.fadeIn(1000);
}

function hideCopy()
{
    btn.fadeOut(1000);
    tooltip="";
}
function copieCode()
{
    var text = $('#colorPath').find(".s1").text();
    if(text) copyToClipboard(text);
    else alert("There is an error !");
}
target.css("cursor","pointer");
target.hover(showCopy,hideCopy);
target.find(btn).click(copieCode);

// for the about page : 
$('#about').fadeOut(100);

function showAbout()
{
    $(".body").fadeOut(1000);
    $('#about').fadeIn(500);
}
function hideAbout()
{
    $('#about').fadeOut(1000);
    $(".body").delay(500).fadeIn(500);
}
$('document').ready($('#foot').click(
    function()
    {
        showAbout();
    }
))
$('document').ready($('#home').click(
    function()
    {
       hideAbout();
    }
))