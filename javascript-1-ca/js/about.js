
function replaceText() {
    const heading = document.querySelector("h1");
    const paragraphs = document.getElementsByTagName("blockquote");


    let paragraphsText = paragraphs[0].innerText; 
    let headingText = heading.innerText; 
    
    const formattedH1Text = headingText.replace("The", "Replaced");
    const formattedPText = paragraphsText.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    
    heading.innerText = formattedH1Text;
    paragraphs[0].innerText = formattedPText;
}

setInterval(replaceText, 4000);
