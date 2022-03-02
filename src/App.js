import React, {lazy, Suspense} from "react";
import TestLandingPage from "./test-landing-page";
import {ToastProvider} from "react-toast-notifications";
import {BrowserRouter as Router, Switch, Route, Redirect, Link, BrowserRouter, useHistory} from "react-router-dom";
import Loader from "./helpers/loader";



function App() {


    return (
      <ToastProvider placement="bottom-left">
          <Suspense fallback={Loader()}>
              <BrowserRouter>
                  <TestLandingPage/>
              </BrowserRouter>
          </Suspense>
      </ToastProvider>
  )
  ;
}

export default App;
