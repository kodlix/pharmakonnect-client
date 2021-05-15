import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deletePoll, loadPolls } from '../../store/modules/poll';
import moment from 'moment'
import './Poll.css';
import PageHeader from '../Shared/PageHeader';
import Swal from 'sweetalert2';

const List = (props) => {
    const dispatch = useDispatch();
    var polls = useSelector(state => state.poll.polls);

    const pageNumber = 1;

    useEffect(() => {
        dispatch(loadPolls(pageNumber));
    }, [dispatch]);

    const handleDeletePoll = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                dispatch(deletePoll(id));
                polls = polls.filter(x => x.id !== id);
            }
        })
    }
    return (
        <React.Fragment>
            <div className="list-poll col-lg-9 col-md-8 col-12">
                <PageHeader pageTitle={'Polls'} count={polls?.length}>
                    <Link to={`/polls/new`} className="pl-3">
                        <button type="button" className="btn btn-md project-color size-text mr-2 text-white">
                            <i className="fas fa-plus"></i>&nbsp;Create Poll</button>
                    </Link>
                </PageHeader>
                <div className="shadow p-3 pt-5 bg-white rounded scroll-bar-y">
                      {/* Content */}
                    <div class="py-2">
                        <div class="container">
                            <div class="row">
                                {/* Tab content */}
                                <div class="col-12">
                                    <div class="tab-content">
                                        {/* Tab pane */}
                                        <div class="pb-4" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
                                            {/* Card */}
                                            <div class="card mb-4 card-hover">
                                                <div class="row no-gutters">
                                                    <div class="col-lg-12 col-md-12 col-12">
                                                        {/* Card body */}
                                                        {
                                                            polls && polls.length > 0 && polls.map((poll) => 
                                                                    
                                                            <div class="card-body mb-3">
                                                                <p class="badge bg-primary text-white">{poll.type}</p>
                                                                { Date.parse(poll.endDate) > new Date() ?
                                                                    <p class="badge bg-secondary text-white float-right">Inactive</p>:
                                                                    <p class="badge bg-success text-white float-right">Active</p>
                                                                }
                                                                <br />
                                                                <h1 class="mb-2 font-weight-bold">
                                                                    <Link to={`/polls/view/${poll.id}`} class="text-inherit">
                                                                        {poll.title}
                                                                    </Link>
                                                                </h1>
                                                                <p class="des mb-4">
                                                                    {poll.description}
                                                                </p>
                                                                <p class="mb-3 font-weight-bold">Created &nbsp; 
                                                                    <time class="timeago"
                                                                        datetime="2021-03-25T05:09:58+0000" title="25th March 2021">
                                                                             about  {moment(poll.createdAt).fromNow()}
                                                                        </time></p>                                                          
                                                                <div class="row align-items-center no-gutters">
                                                                    <div class="float-right">
                                                                        <span class="text-muted" data-toggle="tooltip"
                                                                            data-placement="top" title=""
                                                                            data-original-title="Add to Bookmarks">
                                                                            <span class="badge badge-secondary">11 Votes</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            )
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default List;