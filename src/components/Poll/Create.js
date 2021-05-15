import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadPollSetting, createPoll } from '../../store/modules/poll'

import PageHeader from '../Shared/PageHeader'
import MultiChoiceOption from './Options/MultiChoice'
import OpenEndedOption from './Options/OpenEnded'
import SelectedQuestions from './SelectedQuestions'
import MultiAnswerOption from './Options/MultiAnswer'

import PollPreview from './PollPreview'
import TrueFalseOption from './Options/TrueFalse'
import YesNoOption from './Options/YesNo'

import './Poll.css'

const Create = () => {
  const { register, handleSubmit, errors, setValue } = useForm()
  const dispatch = useDispatch()
  const elemRef = React.createRef();
  const [itemToEdit, setItemToEdit] = useState({
    title: "",
    description: "",
    url: "",
    accessCode: "",
    requiresLogin: true,
    type: "poll",
    hint: "",
    startDate: null,
    endDate: null,
    questions: []
})
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedQuestionType, setSelectedQuestionType] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [resetOptions, setResetOptions] = useState([]);

  const multiOptionQuestionTypes = ['Multi-answer', 'Multi-choice', 'Yes/No', 'True/False'];

  const pollTypes = useSelector((state) => state.poll.setting.pollTypes)
  const questionTypes = useSelector((state) => state.poll.setting.questionTypes)

  useEffect(() => {
    dispatch(loadPollSetting())
    console.log(elemRef);
  }, [])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setItemToEdit({
      ...itemToEdit,
      [name]: value ?? JSON.parse(value),
    })
  }

  const handleLoginChange = (e) => {
    console.log(e.target.checked)
  }

  const handleQuestionTypeChange = (e) => {
    setSelectedQuestionType(e.target.value)
  }

  const getSelectedOption = (options) => {
      setSelectedOptions(options);
  }

  const addQuestion = (e) => {

    e.preventDefault();

    if(multiOptionQuestionTypes.includes(selectedQuestionType)) {
      var correctOption = selectedOptions.findIndex(x => x.isCorrect === true);
      if (correctOption === -1) {
        alert("select a correct option");
        return;
      }
    }
     

    let pollQuestionTypeInput = document.querySelector('#questionType');
    let pollQuestionContentInput = document.querySelector('#content');

    const question = {
      pollType: itemToEdit.pollType,
      questionType: selectedQuestionType,
      content: itemToEdit.content,
      options: [...selectedOptions],
    }
    setItemToEdit({...itemToEdit,  questions: [...itemToEdit.questions, question] });

    //reset question inputs
    pollQuestionContentInput.value = "";
    pollQuestionTypeInput.selectedIndex = 0;

    setResetOptions([]);

    console.log(itemToEdit);
  }

  const savePoll = (e) => {
    e.preventDefault();
    dispatch(createPoll(itemToEdit));
  }

  return (
    <React.Fragment>
      <div className="col-lg-9 col-md-8 col-12 bbg">
        <PageHeader pageTitle={'Create Poll'}>
          <Link to={`/polls`} className="pl-3">
            <button
              type="button"
              className="btn btn-md project-color size-text mr-2 text-white"
            >
              <i className="fas fa-arrow-left"></i>&nbsp;Back
            </button>
          </Link>
        </PageHeader>
        <form onSubmit={handleSubmit(savePoll)}>
          <div className="col-lg-9 col-md-8 col-12 p-0 p-sm-2">
            {/* Card */}
            <div className="card bg-white">
              {/* Card body */}
              <div className="card-body bg-white">
                <div>
                  <div className="mt-3">
                    {/* Poll Title */}
                    <h4 className=" project-text-color mb-0 font-weight-bold">
                      Poll Information
                    </h4>
                    <hr />
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="p_title">
                        Title
                        {errors.title && (
                          <span className="text-danger">* required</span>
                        )}
                      </label>
                      <input
                        type="text"
                        id="p_title"
                        className="form-control"
                        name="title"
                        placeholder="Poll Title"
                        onChange={(e) => handleOnChange(e)}
                        ref={register({ required: true })}
                      />
                    </div>
                    {/* Poll Description */}
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="p_description">
                        Description{' '}
                        {errors.description && (
                          <span className="text-danger">* required</span>
                        )}
                      </label>
                      <textarea
                        id="p_description"
                        className="form-control"
                        placeholder="Give a description of what the poll entails"
                        rows="3"
                        name="description"
                        onChange={(e) => handleOnChange(e)}
                        ref={register({ required: true })}
                      ></textarea>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="form-label" for="p_startDate">
                        Start Date
                        {errors.startDate && (
                          <span className="text-danger">* required</span>
                        )}
                      </label>
                      <input
                        type="date"
                        id="p_startDate"
                        className="form-control"
                        name="startDate"
                        placeholder="Poll startDate"
                        onChange={(e) => handleOnChange(e)}
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="form-label" for="p_endDate">
                        End Date
                        {errors.endDate && (
                          <span className="text-danger">* required</span>
                        )}
                      </label>
                      <input
                        type="date"
                        id="p_endDate"
                        className="form-control"
                        name="endDate"
                        placeholder="Poll endDate"
                        onChange={(e) => handleOnChange(e)}
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="form-group col-12 col-md-12">
                      <label className="form-label" for="p_hint">
                        Hint (Optional)
                      </label>
                      <input
                        type="text"
                        id="p_hint"
                        className="form-control"
                        name="hint"
                        onChange={(e) => handleOnChange(e)}
                        ref={register({ required: false })}
                        placeholder="Give hint about the expected result"
                      />
                    </div>
                    <div className="form-group ml-4 col-12">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineFormCheck"
                        name="requiresLogin"
                        onChange={((e) => handleOnChange(e), handleLoginChange)}
                        ref={register({})}
                      />

                      <label className="form-check-label" for="inlineFormCheck">
                        Participant must login to Vote
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-white mt-4">
              {/* Card body */}
              <div className="card-body bg-white">
                <div>
                  {/* Add Question Tab */}
                  <div
                    className="tab-pane fade show"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <h4 className=" project-text-color mb-0 font-weight-bold">
                      Question Information
                    </h4>
                    <hr />
                    <div className="mt-3">
                      <div className="form-group col-12">
                        <label className="form-label" for="address">
                          Poll Question
                        </label>
                        <input
                          type="text"
                          id="p_question"
                          className="form-control"
                          name="content"
                          id="content"
                          placeholder="Type your question here"
                          onChange={(e) => handleOnChange(e)}
                          ref={register({ required: false })}
                          required
                        />
                      </div>
                      <div className="form-group col-12 col-md-12">
                        <label className="form-label">Question Type</label>
                        <select
                          data-width="100%"
                          className="form-control"
                          name="questionType"
                          id="questionType"
                          onChange={
                            ((e) => handleOnChange(e), handleQuestionTypeChange)
                          }
                          ref={register({ required: false })}
                        >
                          <option value="">Select Question Type</option>
                          {questionTypes.map((type) => (
                            <option key={type.name} value={type.value}>
                              {type.value}{' '}
                            </option>
                          ))}{' '}
                        </select>
                      </div>
                      {selectedQuestionType === 'True/False' && (
                        <TrueFalseOption />
                      )}
                      {selectedQuestionType === 'Yes/No' && <YesNoOption />}
                      {selectedQuestionType === 'Multi-answer' && (
                        <MultiAnswerOption />
                      )}
                      {selectedQuestionType === 'Multi-choice' && (
                        <MultiChoiceOption
                          questionType="Multi-choice"
                          getSelectedOption={getSelectedOption}
                          resetOptions={resetOptions}
                        />
                      )}
                      {selectedQuestionType === 'Open-ended' && (
                        <OpenEndedOption />
                      )}
                    </div>
                    <div className="row text-right">
                      <button
                        className="btn  btn-primary my-3 mb-3 btn-sm"
                        title="add option"
                        onClick={addQuestion}
                      >
                        <i className="fas fa-plus"></i>
                        Add Question
                      </button>
                    </div>
                    <SelectedQuestions questions={itemToEdit.questions} />
                  </div>
                </div>                

            { itemToEdit && itemToEdit.questions && itemToEdit.questions.length > 0 && <div className="col-12 mt-4">
                <button className="btn btn-primary float-right" type="button" onClick={savePoll}>Save</button>
            </div>}
              </div>
            </div>
          </div>
        </form>
        {<PollPreview poll={itemToEdit} />}
      </div>
    </React.Fragment>
  )
}

export default Create
