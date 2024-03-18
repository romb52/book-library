import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../../share/reducers/books.reducer';
import styles from './AddBookForm.module.css';

export default function AddBookForm({ openModal }) {
  const initialForm = { title: '', author: '', publicationYear: '', publisher: '', pageCount: '', copiesAvailable: '' };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);

  const changeInput = (e) => {
    //console.log(e.target.name, e.target.value)
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitAddBook = (e) => {
    //console.log(form)
    e.preventDefault();
    const id = Date.now();
    dispatch(addBook({ ...form, id }));
    setForm(initialForm);
  };

  return (
    <>
      <h2 className={styles.title}>Add book</h2>

      <Form className='modalForm ' onSubmit={(e) => submitAddBook(e)}>
        {/* <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder='Title'
            name='title'
            value={form.title}
            onChange={(e) => changeInput(e)}
            required
          />
        </Form.Group> */}

        <FloatingLabel
          controlId="title"
          label="Title"
          className="mb-3"
        >
          <Form.Control
            placeholder='Title'
            name='title'
            value={form.title}
            onChange={(e) => changeInput(e)}
            required
          />
        </FloatingLabel>

        {/* <Form.Group className='mb-3' controlId='author'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            placeholder='Author'
            value={form.author}
            name='author'
            onChange={(e) => changeInput(e)}
            required
          />
        </Form.Group> */}

        <FloatingLabel
          controlId="author"
          label="Author"
          className="mb-3"
        >
          <Form.Control
            placeholder='Author'
            value={form.author}
            name='author'
            onChange={(e) => changeInput(e)}
            required
          />
        </FloatingLabel>
        {/* 
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Publication year</Form.Label>
          <Form.Control
            type='number'
            placeholder='Publication year'
            name='publicationYear'
            value={form.publicationYear}
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </Form.Group> */}

        <FloatingLabel
          controlId="publicationYear"
          label="Publication year"
          className="mb-3"
        >
          <Form.Control
            type='number'
            placeholder='Publication year'
            name='publicationYear'
            value={form.publicationYear}
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </FloatingLabel>
        {/* 
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Publisher</Form.Label>
          <Form.Control
            placeholder='Publisher'
            name='publisher'
            value={form.publisher}
            onChange={(e) => changeInput(e)}
            required
          />
        </Form.Group> */}

        <FloatingLabel
          controlId="publisher"
          label="Publisher"
          className="mb-3"
        >
          <Form.Control
            placeholder='Publisher'
            name='publisher'
            value={form.publisher}
            onChange={(e) => changeInput(e)}
            required
          />
        </FloatingLabel>

        {/* <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Page count</Form.Label>
          <Form.Control
            type='number'
            placeholder='Page count'
            name='pageCount'
            value={form.pageCount}
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </Form.Group> */}


        <FloatingLabel
          controlId="pageCount"
          label="Page count"
          className="mb-3"
        >
          <Form.Control
            type='number'
            placeholder='Page count'
            name='pageCount'
            value={form.pageCount}
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </FloatingLabel>

        {/* <Form.Group className='mb-3' controlId='count'>
          <Form.Label>Count</Form.Label>
          <Form.Control
            type='number'
            value={form.copiesAvailable}
            placeholder='count'
            name='copiesAvailable'
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </Form.Group> */}

        <FloatingLabel
          controlId="copiesAvailable"
          label="Count"
          className="mb-3"
        >
          <Form.Control
            type='number'
            value={form.copiesAvailable}
            placeholder='count'
            name='copiesAvailable'
            onChange={(e) => changeInput(e)}
            min={0}
            required
          />
        </FloatingLabel>

        <div className='modalContentBtnGroup'>
          <Button className='modalContentBtn me-2' variant='outline-secondary' onClick={() => openModal()}>
            CANCEL
          </Button>

          <Button className='modalContentBtn' variant='primary' type='submit'>
            ADD BOOK
          </Button>
        </div>
      </Form>
    </>
  );
}