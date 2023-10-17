
function openFacebook() {
    window.open('https://www.facebook.com/profile.php?id=100075055485629', '_blank');
}

function openGithub() {
    window.open('https://github.com/Yuchen-ck', '_blank');
}

function openPaper() {
    window.open('https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/ccd=ZydVNt/record?r1=1&h1=0', '_blank');
}


function downloadPDF() {
    var link = document.createElement('a');
    link.href = './paper/paper.pdf';
    link.download = '洪綵緹_碩士論文.pdf';  // Optional: set a specific download filename
    link.click();
  }
