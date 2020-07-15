import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import VideoPage from "./views/Video/VideoPage/VideoPage";
import VideoUploadPage from "./views/Video/VideoUploadPage/VideoUploadPage";
import VideoDetailPage from "./views/Video/VideoDetailPage/VideoDetailPage";
import SubscriptionPage from "./views/Video/SubscriptionPage/SubscriptionPage";
import ProblemPage from "./views/ProblemPage/ProblemPage";
import TestPage from "./views/TestPage/TestPage";
import TestLandingPage from "./views/TestPage/TestLandingPage";
import ExamPage from "./views/ExamPage/ExamPage";
import ExamUpdatePage from "./views/ExamPage/ExamUpdatePage";
import ExamViewer from "./views/ExamPage/ExamViewer";

import ResultPage from "./views/ResultPage/ResultPage";
import ResultGraph from "./views/ResultPage/ResultGraph";

import ExamSelection from "./views/ExamPage/ExamSelection"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div id="body" style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/video" component={Auth(VideoPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/video/upload" component={Auth(VideoUploadPage, true)} />
          <Route exact path="/video/:videoId" component={Auth(VideoDetailPage, null)} />
          <Route exact path="/subscription" component={Auth(SubscriptionPage, null)} />
          <Route exact path="/problem" component={Auth(ProblemPage, null)} />
          <Route exact path="/problem/:testid" component={Auth(ProblemPage, null)} />
          <Route exact path="/test" component={Auth(TestLandingPage, null)} />
          <Route exact path="/test/:testid" component={Auth(TestPage, true)} />
          <Route exact path="/exam/register" component={Auth(ExamPage, null)} />
          <Route exact path="/exam/update/:sec" component={Auth(ExamUpdatePage, null)} />
          <Route exact path="/exam/viewer" component={Auth(ExamViewer,null)}/>

          <Route exact path="/result" component={Auth(ResultPage, null)} />
          <Route exact path="/result/graph" component={Auth(ResultGraph, null)} />

          <Route exact path="/exam/selection" component={Auth(ExamSelection, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
