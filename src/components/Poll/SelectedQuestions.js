import React from 'react'

const SelectedQuestions = ({ questions }) => {
  return (
    <div className='row'>
      <div className='card shadow px-3 col-12'>
        <div className='row border-bottom border-light py-3'>
          <div className='col-12 font-weight-bold'>
            <span>Total Questions ({questions && questions.length})</span> 
            {questions && questions.length > 0 && <span className='ms-auto btn btn-primary btn-sm float-right'>preview</span>}
          </div>
        </div>
        {questions?.map((question, index) => (
          <div class='accordion' id='accordionExample' key={question.content}>
            <div class='card'>
              <div class='card-header' id={`headingOne-${index + 1}`}>
                <a
                  href='#!'
                  class='d-flex align-items-center text-inherit text-decoration-none'
                  data-toggle='collapse'
                  data-target='#collapseOne'
                  aria-expanded='true'
                  aria-controls='collapseOne'
                >
                  <div class='mr-auto'>
                    <h5 class='mb-1 d-flex'>
                      #{index + 1} {question.content}
                    </h5>
                    <span className='text-white badge-secondary rounded px-1'>
                      {question.questionType} question
                    </span>
                  </div>
                  <span class='chevron-arrow ml-4'>
                    <i class='fe fe-chevron-down font-size-md'></i>
                  </span>
                </a>
              </div>
              <div
                id='collapseOne'
                class='collapse show'
                aria-labelledby={`headingOne-${index + 1}`}
                data-parent='#accordionExample'
              >
                <div class='card-body'>
                    {question?.options?.map((option, index) => (
                      <li>
                        <span>#{index + 1} </span>
                        {option.content}
                        {option.isCorrect && (
                          <span className='bg-success p-1 ml-4 text-light rounded'>
                             <i className="fas fa-check-circle"></i>
                          </span>
                        )}
                      </li>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectedQuestions
