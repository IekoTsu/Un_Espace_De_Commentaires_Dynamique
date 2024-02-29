document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let commentContentInput = document.getElementById("message");

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let commentContent = commentContentInput.value;

    CreatAndAddComment(firstName , lastName , commentContent);
    
    /* deleting the content of the fields */

    firstNameInput.value = "" ;
    commentContentInput.value = "";
    lastNameInput.value = "";

});

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
    

    /* -------------constructs the comment structure and appens it to the comment list-------------- */

    mainDiv.appendChild(subDiv);
    subDiv.appendChild(title);
    subDiv.appendChild(paragraphDiv);
    paragraphDiv.appendChild(paragraph);

    let commentList = document.getElementById("comment-list");

    commentList.appendChild(mainDiv);
}
