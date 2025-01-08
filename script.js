function opentab(tabname) {
    var tabcontents = document.getElementsByClassName("tab-contants");
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }
    document.getElementById(tabname).style.display = "block";
    document.getElementById(tabname).className += " active-tab";
    document.getElementById(tabname).querySelector('.tab-links').className += " active-link";

    // Add smooth scrolling effect
    document.querySelector('.tab-links').addEventListener('click', function(e) {
        e.preventDefault();
        var target = e.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({ behavior:'smooth' });
    });
}
opentab('skills');