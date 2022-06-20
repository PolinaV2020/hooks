import React from 'react';
import { Routes, Route} from "react-router-dom";
import { CustomHookExample } from "../components/CustomHookExample.jsx";
import { UseStateExample } from "../components/UseStateExample.jsx";
import { UseEffectExample } from "../components/UseEffectExample.jsx";

export const Layout = () => {
  return (
    <main style={{padding: "40px", backgroundColor: "bermuda"}}>
       <Routes>
        <Route path="/usestate" element={<UseStateExample />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        <Route path="/custom" element={<CustomHookExample />} />
      </Routes>
    </main>
  );
};
