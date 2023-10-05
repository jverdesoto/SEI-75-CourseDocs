async function addBook(bookTitle, bookAuthor, publishingDate, model) {
  let message = "";
  //Check if author is already in the db
  const foundAuthor = await model.find({ name: bookAuthor });
  console.log(foundAuthor);
  //If not create a new author
  if (!foundAuthor.length) {
    const newAuthor = new model({
      name: bookAuthor,
      titles: [
        {
          title: bookTitle,
          author: bookAuthor,
          publishingDate: publishingDate,
        },
      ],
    });
    await newAuthor.save().then(() => {
      console.log("New Author Added");
      message = "New Author Added";
    });
  } else {
    console.log(foundAuthor[0].titles);
    //If so, check if book is already in db
    let duplicates = 0;
    foundAuthor[0].titles.forEach((item) => {
      if (item.title === bookTitle) duplicates++;
    });
    console.log(duplicates);
    if (duplicates) {
      console.log("Book already exists in database");
      message = "Book already exists in database";
    } else {
      foundAuthor[0].titles.push({
        title: bookTitle,
        author: bookAuthor,
        publishingDate: publishingDate,
      });
      await foundAuthor[0].save().then(() => {
        console.log("New book added to existing author");
        message = "New book added to existing author";
      });
    }
    duplicates = 0;
    return message;
  }
}

export default addBook;
