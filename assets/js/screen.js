// 
$( document ).ready(function() {
    var listOfClasses = ["bg-color-1","bg-color-2","bg-color-3","bg-color-4","bg-color-5","bg-color-6"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length); 
    $("html").addClass(listOfClasses[randomNum]);
});
