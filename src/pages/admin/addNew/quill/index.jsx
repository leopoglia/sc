import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

export default function Quill(props) {
  
  return (
    <div>
      <ReactQuill
        value={props.content}
        onChange={(value) => props.setContent(value)}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean'],
          ],
        }}
        formats={['header', 'bold', 'italic', 'underline', 'code-block', 'list',]}
      />
    </div>
  );
};

