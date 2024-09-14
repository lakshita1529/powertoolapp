import React from 'react';
import '../../styles/Form.module.css';

const ReportBug = () => {
  return (
    <div>
      <iframe
        src="https://forms.monday.com/forms/embed/42681f52761b84a4f0718b48c7480c90?r=use1"
        width="650"
        height="500"
        style={{ border: 0, boxShadow: '5px 5px 56px 0px rgba(0, 0, 0, 0.25)' }}
        title="Embedded Monday Form"
      ></iframe>
    </div>
  );
};

export default ReportBug;
