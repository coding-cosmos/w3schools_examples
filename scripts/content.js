// selects all the div with .w3-example
const examples = document.querySelectorAll(".w3-example");

// console.log(examples.length);

// store page link in pageLink
const pageLink = window.location.href;

// console.log(preLink(pageLink));


// remove sidebar
 document.querySelector(".w3-sidebar").remove();
 document.querySelector(".topnav").remove();
 document.getElementById("pagetop").remove();
 document.getElementById("right").remove();
//  document.getElementById("mainLeaderboard").remove();

// access each example and add show button to it after "try it yourself" button
for (let i = 0; i < examples.length; i++) {

    // selecting element a
    let linkElement = examples[i].querySelectorAll("a.w3-btn");

    // access each link element in example and add "show" button to it
    for (let j = 0; j < linkElement.length; j++) {
        // console.log(linkElement);

        // selects if linkElement exists
        if (linkElement[j]) {

            // creating button
            let btn = document.createElement("A");
            btn.text = "Show";
            btn.style.color = "#ffffff";
            btn.setAttribute("class", "w3-btn w3-margin-bottom w3-margin-top");

            // putting button in place
            let brk = document.createElement("BR");
            linkElement[j].insertAdjacentElement("afterend", brk);
            brk.insertAdjacentElement("afterend", btn);
            let brkAfter = document.createElement("BR");
            btn.insertAdjacentElement("afterend", brkAfter);
            let clicked = false;

            // add event listener to "show" button which displays iframe 
            btn.addEventListener("click",
                // function that put iframe in layout on clicking "show" button
                function () {
                    if (!clicked) {
                        // getting link postfix
                        let postLink = linkElement[j].getAttribute("href");
                        // complete link
                        let link = preLink(pageLink) + postLink;


                        // creating iframe 
                        let ifram = document.createElement("IFRAME");
                        ifram.setAttribute("src", `${link}`);
                        ifram.setAttribute("width", "850px");
                        ifram.setAttribute("height", "550px");
                        ifram.setAttribute("id",`iframe_${i}`)

                        // put iframe in layout 
                        brkAfter.insertAdjacentElement("afterend", ifram);
                        clicked = true;
                    }else{
                        document.getElementById(`iframe_${i}`).remove();
                        clicked = false;
                    }
                });
        }

    }
}

// gives prefix of the link 
function preLink(Link) {
    let count = 0;
    let i = 1;
    while (Link[25 + i] != "/") {
        count++;
        i++;
    }
    let page = Link.slice(26, 26 + count);
    return "https://www.w3schools.com/" + page + "/";

}


