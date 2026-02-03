import React, { useState } from "react";
import ProposalPage from "./pages/ProposalPage";
import SchedulerPage from "./pages/SchedulerPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const [stage, setStage] = useState("PROPOSAL"); // PROPOSAL, SCHEDULER, SUCCESS

  return (
    <div className="min-h-screen bg-[#fff0f3] flex items-center justify-center p-4">
      {stage === "PROPOSAL" && (
        <ProposalPage onAccept={() => setStage("SCHEDULER")} />
      )}
      {stage === "SCHEDULER" && (
        <SchedulerPage onConfirm={() => setStage("SUCCESS")} />
      )}
      {stage === "SUCCESS" && <SuccessPage />}
    </div>
  );
}

export default App;
