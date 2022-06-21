baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');



function handleSearch () {
    //get the value of the search field. No importa como la persona escriba, va a ser convertido a minuscula
    const search = document.getElementById("search").value.toLowerCase();
    //get the images on the page. Data caption es lo qe quieres que js lo encuentre 
    const gallery = document.querySelectorAll(".gallery a");
    //hide imgs if search of user does not match with any link 
    for (let i = 0; i < gallery.length; i++) {
        //we want to get the current link in the loop 
        const image = gallery[i];
        const caption = image.getAttribute("data-caption").toLowerCase();
        //IF the img txt includes the search value
        if (caption.includes(search)) {
            //if true display image
            image.style.display = "";
        }
        //else hide image
        else {
            image.style.display = "none";
        }
    }
 
}

