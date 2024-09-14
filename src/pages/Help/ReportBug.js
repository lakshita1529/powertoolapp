import React from 'react';
import '../../styles/Form.module.css';

const ReportBug = () => {
  return (
    <div>
      <iframe
        src="https://forms.monday.com/forms/embed/d5fd3ed52feb7b60c84984ec931d804c?r=use1"
        width="650"
        height="500"
        style={{ border: 0, boxShadow: '5px 5px 56px 0px rgba(0, 0, 0, 0.25)' }}
        title="Embedded Monday Form"
      ></iframe>
    </div>
  );
};

export default ReportBug;
