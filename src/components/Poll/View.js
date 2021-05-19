import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { loadPoll } from '../../store/modules/poll';
import PageHeader from '../Shared/PageHeader';
import 'react-datepicker/dist/react-datepicker.css';
import './Poll.css';
import { Link } from 'react-router-dom';

const View = (props) => {
  const dispatch = useDispatch();
  const poll = useSelector((state) => state.poll.poll);
  const pollId = props.match.params.id;

  const { setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    dispatch(loadPoll(pollId));
  }, [dispatch]);

  useEffect(() => {
    if (poll) {
      Object.keys(poll).forEach((key) => {
        setValue(key, poll[key]);
      });
    }
  }, [poll]);

  return (
    <>
      <div className="col-lg-9 col-md-8 col-12">
        <PageHeader pageTitle={'Poll Detail'} heading={poll?.title}>
          <div className="dropdown pb-2" style={{ float: 'right' }}>
            <Link to={`/polls`} className="pl-3">
              <button
                type="button"
                className="btn btn-md project-color size-text mr-2 text-white"
              >
                <i className="fas fa-arrow-left"></i>&nbsp;Back
              </button>
            </Link>
          </div>
        </PageHeader>
        <div className="shadow p-5 mt-1 mb-5 bg-white rounded">
          <div className="">
            <div className="">
              <div className="col-lg-12 col-md-12 col-12 pl-1">
                <p className=""></p>
                {Date.parse(poll.endDate) > new Date() ? (
                  <p className="badge bg-secondary text-white">Inactive</p>
                ) : (
                  <p className="badge bg-success text-white">Active</p>
                )}
                <br />
                <h1 className="mb-2">{poll.title}</h1>
                <p className="des mb-4">{poll.description}</p>
                <p className="">
                  <strong>Start date:</strong>{' '}
                  {moment(poll.startDate).format('DD-MMM-YYYY')}
                  <strong className="pl-4">End date:</strong>{' '}
                  {moment(poll.endDate).format('DD-MMM-YYYY')}
                </p>
              </div>
              <hr />

              <div className="mt-3">
                <h3>Questions ({poll?.questions?.length})</h3>
                {poll?.questions?.length > 0 &&
                  poll.questions.map((q, index) => (
                    <>
                      <p className="p-0">
                        <strong>Question Type:</strong> {q.questionType}
                      </p>
                      <div className="row">
                        <ul className="list-group ml-3 col-12 pt-2">
                          <li className="list-group-item active font-weight-bold">
                            <p className="mb-2 font-weight-larger well">
                              <span className="bg-light px-1 mx-2 text-dark">
                                {index + 1}
                              </span>
                              {q.content}
                            </p>
                          </li>
                          {q?.options.length > 0 &&
                            q?.options.map((o, index) => (
                              <li className="list-group-item" key={o.content}>
                                <span className="bg-light px-1 mx-2 text-dark">{index + 1}</span>{o.content}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
