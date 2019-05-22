document.getElementById("header").innerHTML = 
    '<a href="index.html"><h1>My Web Site</h1></a>' +
    '<div id="nav">' +
        '<a href="projects.html">Projects</a>' +
        '<a href="#">About</a>' +
        '<a href="#">Resume</a>' +
    '</div>';

document.getElementById("footer").innerHTML = '&copy;<span id="year">1066</span><br />' + 'ありがとうございます。'
document.getElementById("year").innerHTML = new Date().getFullYear();