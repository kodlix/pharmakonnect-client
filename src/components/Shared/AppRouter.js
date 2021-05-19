import React, { useEffect, } from 'react'
import { Switch, Redirect, useLocation, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import AppAlert from './AppAlert';
// import { BrowserView } from "react-device-detect"
// import { clearErrorMessage } from "../store/actions";
import AppLoading from '../UI/Spinner/AppLoading'
import AnonymousRoute from './AnonymousRoute';
import ProtectedRoute from './ProtectedRoute';

const ListSector = React.lazy(() => import('../Sector/List'));
const CreateSector = React.lazy(() => import('../Sector/Create'));
const EditSector = React.lazy(() => import('../Sector/Edit'));
const ViewSector = React.lazy(() => import('../Sector/View'));
const DeleteSector = React.lazy(() => import('../Sector/Delete'));

const ListJobVacancy = React.lazy(() => import('../JobVacancy/List'));
const CreateJobVacancy = React.lazy(() => import('../JobVacancy/Create'));
const EditJobVacancy = React.lazy(() => import('../JobVacancy/Edit'));
const ViewJobVacancy = React.lazy(() => import('../JobVacancy/View'));

const ListBlog = React.lazy(() => import('../Blog/List'));
const CreateBlog = React.lazy(() => import('../Blog/Create'));
const ViewBlog = React.lazy(() => import('../Blog/View'));
const EditBlog = React.lazy(() => import('../Blog/Edit'));

const ListCategory = React.lazy(() => import('../Category/List'));
const CreateCategory = React.lazy(() => import('../Category/Create'));
const EditCategory = React.lazy(() => import('../Category/Edit'));
const ViewCategory = React.lazy(() => import('../Category/View'));

const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));
const LandingPage = React.lazy(() => import('../LandingPage/LandingPage'));
const Login = React.lazy(() => import('../Auth/Login'));
const Register = React.lazy(() => import('../Auth/Register'));
const IndividualRegistration = React.lazy(() => import('../Auth/IndividualRegistration'));
const CorporateRegistration = React.lazy(() => import('../Auth/CorporateRegistration'));
const VideoConference = React.lazy(() => import('../video-conference/Room'));
const ScheduleMeeting = React.lazy(() => import('../video-conference/Create'));
const ScheduledMeetings = React.lazy(() => import('../video-conference/List'))
const EditScheduledMeeting = React.lazy(() => import('../video-conference/Edit'))
const ConfirmationPage = React.lazy(() => import('../Auth/ConfirmationPage'));



// admin components
const AdminDashboard = React.lazy(() => import('../Admin/Dashboard/Dashboard'));
const AdminBlogList = React.lazy(() => import('../Admin/Blog/List'));
const AdminBlogDetail = React.lazy(() => import('../Admin/Blog/Detail'));


const AdminListEventType = React.lazy(() => import('../Admin/EventType/List'));
const AdminCreateEventType = React.lazy(() => import('../Admin/EventType/Create'));
const AdminEditEventType = React.lazy(() => import('../Admin/EventType/Edit'));
const AdminViewEventType = React.lazy(() => import('../Admin/EventType/View'));




// const ContactList = React.lazy(() => import('../Chat/Main'));
// const CallLog = React.lazy(() => import('../Chat/CallLog'));
// const ChatList = React.lazy(() => import('../Chat/ChatList'));
// const Contact = React.lazy(() => import('../Chat/Contact'));
// const EmptyChat = React.lazy(() => import('../Chat/EmptyChat'));

const Chat = React.lazy(() => import('../Chat/Main'));
const CallLog = React.lazy(() => import('../Chat/CallLog'));
const ChatList = React.lazy(() => import('../Chat/ChatList'));
const Contact = React.lazy(() => import('../Chat/Contact'));
const EmptyChat = React.lazy(() => import('../Chat/EmptyChat'));

const ListOutlet = React.lazy(() => import('../Outlet/List'));
const EditOutlet = React.lazy(() => import('../Outlet/Edit'));
const CreateOutlet = React.lazy(() => import('../Outlet/Create'));
const ViewOutlet = React.lazy(() => import('../Outlet/View'));

const ListPoll = React.lazy(() => import('../Poll/List'));
const EditPoll = React.lazy(() => import('../Poll/Edit'));
const CreatePoll = React.lazy(() => import('../Poll/Create'));
const ViewPoll = React.lazy(() => import('../Poll/View'));

const ListEvent = React.lazy(() => import('../Event/List'));
const EditEvent = React.lazy(() => import('../Event/Edit'));
const CreateEvent = React.lazy(() => import('../Event/Create'));
const ViewEvent = React.lazy(() => import('../Event/View'));

const EventRegistration = React.lazy(() => import('../EventRegistration/Registration'));
const RegisteredUsers = React.lazy(() => import('../EventRegistration/RegisteredUsers'));

const ListEventType = React.lazy(() => import('../EventType/List'));
const CreateEventType = React.lazy(() => import('../EventType/Create'));
const EditEventType = React.lazy(() => import('../EventType/Edit'));
const ViewEventType = React.lazy(() => import('../EventType/View'));




const AppRouter = () => {
  const dispatch = useDispatch();
  let location = useLocation()

  useEffect(() => {
    // dispatch(clearErrorMessage());
  }, [location, dispatch])
  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppAlert />
      <Switch>
        <AnonymousRoute exact path="/" component={LandingPage} />
        {/* <AnonymousRoute path="/landingpage" exact component={LandingPage} /> */}
        <AnonymousRoute path="/login" exact component={Login} />
        <AnonymousRoute path="/register" exact component={Register} />
        <ProtectedRoute path="/individualregistration" exact component={IndividualRegistration} />
        {/* <ProtectedRoute path="/individualregistration/edit/:email" component={IndividualRegistration} /> */}
        <ProtectedRoute path="/corporateregistration" exact component={CorporateRegistration} />
        <AnonymousRoute path="/confirmationpage" exact component={ConfirmationPage} />

        <ProtectedRoute path="/Sectors" exact component={ListSector} />
        <ProtectedRoute path="/Sectors/new" exact component={CreateSector} />
        <ProtectedRoute path="/Sectors/edit/:id" component={EditSector} />
        <ProtectedRoute path="/Sectors/view/:id" component={ViewSector} />
        <ProtectedRoute path="/Sectors/delete/:id" component={DeleteSector} />
        <ProtectedRoute path="/jobvacancy" exact component={ListJobVacancy} />
        <ProtectedRoute path="/jobvacancy/new" exact component={CreateJobVacancy} />
        <ProtectedRoute path="/jobvacancy/edit/:id" ownerOnly={true} component={EditJobVacancy} />
        <ProtectedRoute path="/jobvacancy/view/:id" component={ViewJobVacancy} />

        <ProtectedRoute path="/blogs" exact component={ListBlog} />
        <ProtectedRoute path="/blog/new" exact component={CreateBlog} />
        <ProtectedRoute path="/blog/view/:id" exact component={ViewBlog} />
        <ProtectedRoute path="/blog/edit/:id" exact component={EditBlog} />

        <ProtectedRoute path="/categories" exact component={ListCategory} />
        <ProtectedRoute path="/category/new" exact component={CreateCategory} />
        <ProtectedRoute path="/category/edit/:id" exact component={EditCategory} />
        <ProtectedRoute path="/category/view/:id" exact component={ViewCategory} />

        <ProtectedRoute path="/dashboard" component={Dashboard} />

        <AnonymousRoute path="/conference" exact showHead={false} component={VideoConference} />
        <AnonymousRoute path="/conference/schedule" exact showHead={false} component={ScheduleMeeting} />
        <AnonymousRoute path="/conference/list" exact showHead={false} component={ScheduledMeetings} />
        <AnonymousRoute path="/conference/edit/:id" exact showHead={false} component={EditScheduledMeeting} />

        <ProtectedRoute path="/chat" exact showHead={false} component={Chat} />
        <ProtectedRoute path="/chatList/:id" exact showHead={false} component={ChatList} />
        <ProtectedRoute path="/callLog" exact showHead={false} component={CallLog} />
        <ProtectedRoute path="/chatList" exact showHead={false} component={ChatList} />
        <ProtectedRoute path="/contact" exact showHead={false} component={Contact} />
        <ProtectedRoute path="/emptyChat" exact showHead={false} component={EmptyChat} />

        <ProtectedRoute path="/outlets" exact component={ListOutlet} />
        <ProtectedRoute path="/outlet/edit/:id" exact component={EditOutlet} />
        <ProtectedRoute path="/outlet/new" exact component={CreateOutlet} />
        <ProtectedRoute path="/outlet/view/:id" exact component={ViewOutlet} />

        <ProtectedRoute path="/polls" exact component={ListPoll} />
        <ProtectedRoute path="/polls/edit/:id" exact component={EditPoll} />
        <ProtectedRoute path="/polls/new" exact component={CreatePoll} />
        <ProtectedRoute path="/polls/view/:id" exact component={ViewPoll} />

        <ProtectedRoute path="/events" exact component={ListEvent} />
        <ProtectedRoute path="/events/edit/:id" exact component={EditEvent} />
        <ProtectedRoute path="/events/new" exact component={CreateEvent} />
        <ProtectedRoute path="/events/view/:id" exact component={ViewEvent} />

        <ProtectedRoute path="/registration/:id" exact component={EventRegistration} />
        <ProtectedRoute path="/registeredusers/:id" exact component={RegisteredUsers} />

        <ProtectedRoute path="/eventtypes" exact component={ListEventType} />
        <ProtectedRoute path="/eventtypes/edit/:id" exact component={EditEventType} />
        <ProtectedRoute path="/eventtypes/new" exact component={CreateEventType} />
        <ProtectedRoute path="/eventtypes/view/:id" exact component={ViewEventType} />

        {/* admin routes */}
        <ProtectedRoute path="/admin/dashboard" showHead={false} exact component={AdminDashboard} />
        <ProtectedRoute path="/admin/blogs" showHead={false} exact component={AdminBlogList} />
        <ProtectedRoute path="/admin/blogs/detail/:id" showHead={false} exact component={AdminBlogDetail} />

        <ProtectedRoute path="/admin/eventtypes" exact component={AdminListEventType} />
        <ProtectedRoute path="/admin/eventtypes/edit/:id" exact component={AdminCreateEventType} />
        <ProtectedRoute path="/admin/eventtypes/new" exact component={AdminEditEventType} />
        <ProtectedRoute path="/admin/eventtypes/view/:id" exact component={AdminViewEventType} />
        <Redirect to="/login" />
      </Switch>
    </React.Suspense>
  )
}

export default AppRouter;