import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { FormView } from "./Pages/FormView";
import { NotFound } from "./Pages/NotFound";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormView />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};
