// AddBook.jsx
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
  const [open, setOpen] = useState(false);
  const [Book, setBook] = useState({author: '', isbn: '', price: '', title: '', year: ''});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.addBook(Book);
    handleClose();
  }

  const inputChanged = (event) => {
    setBook({...Book, [event.target.name]: event.target.value});
  }

  return(
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add Book
      </Button>
     <Dialog open={open}>
       <DialogTitle>New Book</DialogTitle>
       <DialogContent> 
         <TextField
            name="author"
            value={Book.author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth
          /> 
         <TextField
           name="isbn"
           value={Book.isbn}
           onChange={inputChanged}
           margin="dense"
           label="ISBN"
           fullWidth
         /> 
         <TextField
           name="price"
           value={Book.price}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
         <TextField
           name="title"
           value={Book.title}
           onChange={inputChanged}
           margin="dense"
           label="Title"
           fullWidth
         /> 
        <TextField
           name="year"
           value={Book.year}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         /> 
      </DialogContent>
      <DialogActions>
         <Button color="primary" onClick={handleClose}>Cancel</Button>
         <Button color="primary" onClick={handleSave}>Save</Button>
      </DialogActions>
     </Dialog> 
    </>
  );
}

export default AddBook;