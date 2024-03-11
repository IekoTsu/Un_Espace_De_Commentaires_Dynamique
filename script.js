

/* identifying input fields */
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let commentContentInput = document.getElementById("message");

/* events */

/* document.querySelector("button").addEventListener("click", sendComment); */
document.querySelector("form").addEventListener("submit", sendComment);

/* ---------------------------------------------------------------------------- */

function sendComment(event){
    event.preventDefault()

    if ( validateNotEmptyFields(firstNameInput , lastNameInput , commentContentInput) === true ){

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let commentContent = commentContentInput.value;

        let comment = CreatAndAddComment(firstName , lastName , commentContent);
        addComment(comment);
        /* deleting the content of the fields */

        firstNameInput.value = "" ;
        commentContentInput.value = "";
        lastNameInput.value = "";

    }
}



function CreatAndAddComment(firstName , lastName , commentContent ){

    /* creating the comment elements and adding thier contents */

    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "flex space-x-4 text-sm text-gray-500");

    let subDiv = document.createElement("div");
    subDiv.setAttribute("class" , "flex-1 py-10 border-t border-gray-200" );

    let paragraphDiv = document.createElement("div");
    paragraphDiv.setAttribute("class" , "prose prose-sm mt-4 max-w-none text-gray-500");

    let title = document.createElement("h3");
    title.setAttribute("class" , "font-medium text-gray-900");
    title.textContent = firstName + " " + lastName;

    let paragraph = document.createElement("p");
    paragraph.textContent = commentContent ;
    

    /* -------------constructs the comment structure and append it to the comment list-------------- */

    mainDiv.appendChild(subDiv);
    subDiv.appendChild(title);
    subDiv.appendChild(paragraphDiv);
    paragraphDiv.appendChild(paragraph);

   return mainDiv;
}

function addComment(comment){
    let commentList = document.getElementById("comment-list");

    commentList.appendChild(comment);
};

function validateNotEmptyFields(firstNameInput, lastNameInput , commentContentInput){
    /* chenking if the fields strings are empty or just spaces */
    if ( firstNameInput.value.trim().length === 0 || lastNameInput.value.trim().length === 0 || commentContentInput.value.trim().length === 0) {

        document.getElementById("error-message").style.display = "block " ;

    } else {
        document.getElementById("error-message").style.display = "none " ;

        return true;  
    };
};