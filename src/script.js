function function1() {
    
    
    document.getElementById("body").style.background = "red";




}
function function2() {
    
    
    document.getElementById("body").style.background = "green";




}
function function3() {
    
    
    document.getElementById("body").style.background = "blue";




}
function function4() {
    
    
    document.getElementById("body").style.background = "yellow";



}
function function5() {
    
    document.getElementById("body").style.background = "pink";


}



var html =
  "<table id='table1'><tr><td class='col1'><button type='submit' id='button1' onclick='function1()'>Column1</button></td><td class='col2'><button type='submit' id='button2' onclick='function2()'>Column2</button></td><td class='col3'><button type='submit' id='button3' onclick='function3()'>Column3</button></td><td class='col4'><button type='submit' id='button4' onclick='function4()'>Column4</button></td><td class='col5'><button type='submit' id='button5' onclick='function5()'>Column5</button></td></tr></table>";
document.getElementById("output").innerHTML = html;
