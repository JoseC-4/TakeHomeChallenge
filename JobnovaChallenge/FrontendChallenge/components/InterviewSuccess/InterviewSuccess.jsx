import React from "react";
import "./InterviewSuccess.css";
import TrophyIcon from "../../src/assets/TrophyIcon";

export default function InterviewSuccess() {
  return (
    <div className="interviewBoost">
      <div className="boostHeader">
        <div className="boostIcon"><TrophyIcon/></div>

        <div className="boostHeaderText">
          <p className="boostTitle">Maximize your interview success</p>
          <p className="boostSubtitle">
            Our platform simulates real interview scenarios, helping you refine your responses
            and boost your confidence.
          </p>
        </div>
      </div>

      <div className="boostGrid">
        <div className="boostCol">
          <p className="boostSectionTitle">Job-Specific Simulations:</p>
          <p className="boostBody">
            Practice with questions tailored to your target role, ensuring relevance and preparation.
          </p>
        </div>

        <div className="boostCol">
          <p className="boostSectionTitle">Actionable Feedback</p>
          <p className="boostBody">
            Get detailed analysis of your responses and practical, step-by-step improvement suggestions.
          </p>
        </div>

        <div className="boostCol">
          <p className="boostSectionTitle">Boost Success Rates:</p>
          <p className="boostBody">
            Perfect your interview skills and increase your chances of landing the job you want.
          </p>
        </div>
      </div>

      <div className="boostFooter">
        <button className="boostBtn" type="button">
          Start Interview
        </button>
      </div>
    </div>
  );
}