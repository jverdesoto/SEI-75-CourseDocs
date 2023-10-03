//??homepage /library
    //!FRONTEND
    //create vue component with two boxes(buttons)
    //!ROUTER?
    //create a route to navigate to author and title searches
    //library/author library/title
    //!BACKEND
    //GET requests for library/author library/title FETCH info from db
    // '/'
    //req.params authors or titles

//?Author Search /library/author
    //!FRONTEND
    //Create a Vue component for the author search page.
    //authorsearch.vue
    // Fetch data of  authors and display as a list
    //!ROUTER?
    //create a route to navigate to author-specific pages.
    //!BACKEND
    //GET requests for library/author to FETCH list of authors from db and 
    //return list as a response for frontend

//?Title Search /library/title
    //!FRONTEND
    // Create a Vue component for the title search page.
    //titlesearch.vue
    // Fetch data of books and display as a list
    //!ROUTER
    // create a route to navigate to title-specific pages 
    //!BACKEND
    //GET requests for library/title to FETCH list of titles from db 
    //return list as a response for frontend


//?Author Page /library/author/:name
    //FRONTEND
    // Create a Vue component for author-specific pages.
    //authorpage.vue
    // Fetch data of book and filer? by the selected author.
    //ROUTER
    // create a route to navigate to title-specific pages.
    //BACKEND
    //GET /library/author/:name and FETCH lis of books by author from :name
    //return list of books filtered by author :name

//?Title Page /library/title/:title
    //FRONTEND
    // Create a Vue component for title-specific pages.
    //titlepage.vue
    // Fetch info of book information and display info
    //ROUTER
    // create a route to navigate to author-specific pages.
    //BACKEND
    //GET /library/title/:title and FETCH list of titles 
    //return all info from book

//?Add Book Page /library/addbook
    //FRONTEND
    // Create a Vue component for the add book page.
    //addbook.vue
    // create form to collect title, publishing date, and author info.
    //ROUTER
    // create a route to navigate back to other pages after adding a book.
    //POST /library/addbook receive data from front end and submit form
    //extract info from body
    //sucess you sent the info

//BACKEND index.js
//?DATABASE INFO
    //define librarySCHEMA: title, piblishing date, author to add to collection library books
    //app.listenport4000