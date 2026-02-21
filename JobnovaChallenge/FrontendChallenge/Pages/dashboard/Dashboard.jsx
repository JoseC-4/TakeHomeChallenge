import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import {sidebarTags} from "../../components/Sidebar/sidebarTags.jsx"
import Navbar from "../../components/Navbar/Navbar.jsx"
import "./dashboard.css"
import JobCard from "../../components/JobCard/JobCard.jsx";
import { JobCardInfo } from "../../components/JobCard/JobCardInfo.jsx";
import Star from "../../src/assets/Star.jsx";
import Reload from "../../src/assets/Reload.jsx";
import SearchIcon from "../../src/assets/SearchIcon.jsx";
function Dashboard(){
    return (
    <div className="dashboard">
      <div>
        <Sidebar items={sidebarTags}/>
        
      </div>
      
      <div className="dashboard-right">
        <Navbar />
        <div className="content">
          
          <div className="mx-auto w-full space-y-4">
              <div className="topbar ">
                  <button className="topbarMainBtn hover:cursor-pointer" type="button">
                    <Reload/>
                    <span>Change Job Reference</span>
                  </button>

                  <button className="topbarFilterBtn hover:cursor-pointer" type="button">
                    <span className="topbarSearchIcon"><SearchIcon/></span>
                    <span>Top matched</span>
                  </button>
              </div>
                {JobCardInfo.map((val, key) => (
                  <JobCard key={key} jobs={val}/>
                ))}
          </div>

          <div className="rightContainer">
              <div className="rightInner">
                <div className="star">
                  <Star />
                </div>

                <div className="textContainer1">
                  <p className="subject">Ace Your interviews with AI-Powered Mock Sessions!</p>
                  <p className="bodyText">
                    Struggling with interview nerves or unsure how to prepare? Let our cutting-edge AI mock interviews help you shine!
                  </p>
                </div>

                <hr className="rightDivider" />

                <div className="textContainer2">
                  <p className="subject">
                    Why Choose Our AI Mock Interviews? <span className="subjectIcon"><Star /></span>
                  </p>

                  <p className="sectionTitle">Job-Specific Simulations:</p>
                  <ul className="bullets">
                    <li>Practice with questions tailored to your target role, ensuring relevance and preparation.</li>
                  </ul>

                  <p className="sectionTitle">Actionable Feedback</p>
                  <ul className="bullets">
                    <li>Get detailed analysis of your responses and practical, step-by-step improvement suggestions.</li>
                  </ul>

                  <p className="sectionTitle">Boost Success Rates:</p>
                  <ul className="bullets">
                    <li>Perfect your interview skills and increase your chances of landing the job you want.</li>
                  </ul>
                </div>

                <button className="mockBtn" type="button">
                  <span className="mockBtnIcon">⌕</span>
                  Mock Interview
                </button>
              </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
export default Dashboard