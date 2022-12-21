import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [textValue, setTextValue] = useState('');

  console.log(textValue);
  return (
    <main className="write">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill theme='snow' value={textValue} onChange={setTextValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibity :</b> Public
          </span>
          <input style={{ display: 'none' }} type="file" name="post-file" id="post-file" />
          <label htmlFor="post-file">Upload Image</label>
        </div>
        <div className="buttons">
          <button>Save as draft</button>
          <button>Publish</button>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <input type="radio" name="cat" id="art" value='art' />
          <label htmlFor="art">Art</label>
          <input type="radio" name="cat" id="science" value='science' />
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" id="technologie" value='technologie' />
          <label htmlFor="technologie">Technologie</label>
          <input type="radio" name="cat" id="cinema" value='cinema' />
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" name="cat" id="design" value='design' />
          <label htmlFor="design">Design</label>
          <input type="radio" name="cat" id="technolgy" value='technology' />
          <label htmlFor="technolgy">Technologie</label>
        </div>
      </div>
    </main>
  )
}

export default Write