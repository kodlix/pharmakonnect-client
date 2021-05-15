import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import 'bootswatch/dist/pulse/bootstrap.min.css';

import agent from '../agent';
import './App.css';
import AppRouterRestricted from './Shared/AppRouterRestricted';
import AppLoading from './UI/Spinner/AppLoading';
const IndividualRegistration = React.lazy(() => import('../components/Auth/IndividualRegistration'));
const CorporateRegistration = React.lazy(() => import('../components/Auth/CorporateRegistration'));


const AppRouter = React.lazy(() => import('../components/Shared/AppRouter'));
toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (agent.Auth.isAuth()) {
      //dispatch(loadApp())
    }
  }, [dispatch])

  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppRouter />
    </React.Suspense>
  )
}

export default App