import express from  'express'
import { Book } from '../models/bookModel.js'

const router = express.Router();


//route for save a new book 
router.post('/', async (request,reponse)=>{
  try{
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return reponse.status(500).send({
        message: 'Send all required fields: Title, author and publish year'
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return reponse.status(201).send(book);
    
  } catch(error){
    console.log(error.message);
    reponse.status(500).send({message: error.message});
  }
});

//Route for get all books
router.get("/", async (request, reponse) =>{
  try{
    const books = await Book.find({});

    return reponse.status(200).json({
      count: books.length,
      data: books,
    });
    
  }catch(error){
    console.log(error.message); 
    return reponse.status(500).send({message: error.message});
  }
});

//Route for get all books
router.get("/:id", async (request, reponse) =>{
  try{
    const {id} = request.params;
    const book = await Book.findById(id);

    return reponse.status(200).json(book);
    
  }catch(error){
    console.log(error.message); 
    return reponse.status(500).send({message: error.message});
  }
});

//Route for update a book
router.put('/:id', async (request,reponse)=>{
  try{
    if(
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ){
      return response.status(400).send({
        message: 'Send all required fields: Title, author and publish year'
      });
    }

    const {id} = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if(!result){
      return reponse.status(404).json({message: 'Book Not found'})
    }

    return reponse.status(200).send({message: 'Book updated succefully'});
    
  }catch(error){
    console.log(error); 
    reponse.status(500).send({message: error.message});
  }
});

router.delete('/:id', async (request,reponse)=>{
  try{
    const {id} = request.params; 

    const result = Book.findByIdAndDelete(id);

    if(!result){
      return reponse.status(404).json({message: 'Book Not found'})
    }

    return reponse.status(200).send({message: 'Book deleted succefully'});
    
  }catch(error){
    console.log(error.message);
    reponse.status(500).send({message: error.message});
  }
});

export default router;