import React from "react";
import "./JobCard.css";
import LinkIcon from "../../src/assets/LinkIcon";
import HeartIcon from "../../src/assets/HeartIcon";
import LocationIcon from "../../src/assets/LocationIcon";
import SateliteIcon from "../../src/assets/SateliteIcon";
import { useNavigate } from "react-router";

export default function JobCard({ jobs }) {
  const navigate = useNavigate()
  return (
    <div className="jobCard">
      <div className="cardHeader">
        <div className="progress">
          <div className="progressRing">
            <div className="progressValue">64%</div>
            <div className="progressLabel">Match</div>
          </div>
        </div>

        <div className="jobinfo">
          <div className="jobTopRow">
            <p className="title">{jobs.title}</p>

            <div className="jobActions hover:cursor-pointer">
              <LinkIcon/>

              <HeartIcon/>

            </div>
          </div>

          <div className="company">
            <span className="companyDot" />
            <p>{jobs.company}</p>
          </div>

          <div className="location">
            <div className="locationItem">
                <LocationIcon/>

              <p>{jobs.location}</p>
            </div>
            <div className="locationItem">
                  <SateliteIcon/>
              <p>{jobs.onsite_remote}</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="cardMidlevel">
        <span className="jobSpecifications">{jobs.employmentType}</span>
        <span className="jobSpecifications">{jobs.skillsMatch}</span>
        <span className="jobSpecifications">{jobs.level}</span>
        <span className="jobSpecifications">{jobs.pay}</span>
      </div>

      <br/>

      <div className="cardBottom">
        <div className="posting">
          <span className="timeposted">1 hours ago</span>
          <span className="applicants">25 applicants</span>
        </div>

        <div className="buttons">
          <button className="btnSecondary hover:cursor-pointer" onClick={()=>navigate("/jobdetails")}>Apply</button>
          <button className="btnPrimary hover:cursor-pointer">Mock Interview</button>
        </div>
      </div>
    </div>
  );
}