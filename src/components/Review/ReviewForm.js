import React from 'react';

const ReviewForm = () => {
  const submitHandler = () => {
    // Write API to Upload Review
    console.log('API CAll');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        {/* Star Selection */}
        <input placeholder="Write YOur Review" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
