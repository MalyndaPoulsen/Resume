

;(function () {
    angular.module('DevResume')
        .component('mainComponent', {
            templateUrl: 'components/main-component.html',
            controller: MainController,
        })

function MainController(){
var mc= this;

document.getElementById("btnPrint").onclick = function () {
    printElement(document.getElementById("printThis"));
}

function printElement(elem) {
    var domClone = elem.cloneNode(true);
    
    var $printSection = document.getElementById("printSection");
    
    if (!$printSection) {
        var $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = "";
    $printSection.appendChild(domClone);
    window.print();
}



    }
} ());