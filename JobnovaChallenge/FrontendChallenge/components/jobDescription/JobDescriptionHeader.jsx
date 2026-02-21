import React from "react";
import "./JobDescriptionHeader.css";

import LinkIcon from "../../src/assets/LinkIcon";
import HeartIcon from "../../src/assets/HeartIcon";
import LocationIcon from "../../src/assets/LocationIcon";
import SateliteIcon from "../../src/assets/SateliteIcon";
import ClockIcon from "../../src/assets/ClockIcon";
import BriefcaseIcon from "../../src/assets/BriefcaseIcon";
import MoneyIcon from "../../src/assets/MoneyIcon";
import LevelIcon from "../../src/assets/LevelIcon";

export default function JobDescriptionHeader({ jobs }) {
  return (
    <div className="jobDesc">
      <div className="jobDesc-topPillRow">
        <span className="jobDesc-timePill">{jobs.postedAgo}</span>
      </div>

      <div className="jobDesc-top">
       
        <div className="jobDesc-logoWrap">
          <div className="jobDesc-logo">{jobs.companyInitial || "G"}</div>
        </div>

        
        <div className="jobDesc-info">
          <div className="jobDesc-titleRow">
            <div className="jobDesc-titleBlock">
              <p className="jobDesc-title">{jobs.title}</p>

              <div className="jobDesc-companyRow">
                <span className="jobDesc-companyDot" />
                <p className="jobDesc-company">{jobs.company}</p>
              </div>

            
              <div className="jobDesc-metaRow">
                <div className="jobDesc-metaItem">
                  <LocationIcon />
                  <p>{jobs.location}</p>
                </div>

                <div className="jobDesc-dot" />

                
                {jobs.activeAgo && (
                  <>
                    <div className="jobDesc-metaItem">
                      <p className="jobDesc-muted">{jobs.activeAgo}</p>
                    </div>
                    <div className="jobDesc-dot" />
                  </>
                )}

                <div className="jobDesc-metaItem">
                  <SateliteIcon />
                  <p>{jobs.workMode}</p>
                </div>
              </div>
            </div>

         
            <div className="jobDesc-actions">
              <button className="jobDesc-iconBtn" type="button" aria-label="Share">
                <LinkIcon />
              </button>
              <button className="jobDesc-iconBtn" type="button" aria-label="Save">
                <HeartIcon />
              </button>
            </div>
          </div>

          <div className="jobDesc-details">
            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><LocationIcon/></span>
              <span>{jobs.country}</span>
            </div>

            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><ClockIcon/></span>
              <span>{jobs.experience}</span>
            </div>

            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><BriefcaseIcon/></span>
              <span>{jobs.employmentType}</span>
            </div>

            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><MoneyIcon/></span>
              <span>{jobs.salary}</span>
            </div>

            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><SateliteIcon/></span>
              <span>{jobs.workMode}</span>
            </div>

            <div className="jobDesc-detailItem">
              <span className="jobDesc-detailIcon"><LevelIcon/></span>
              <span>{jobs.level}</span>
            </div>
          </div>
        </div>

        <div className="jobDesc-match">
          <div className="jobDesc-ring">
            <div className="jobDesc-ringValue">{jobs.matchPercent}%</div>
            <div className="jobDesc-ringLabel">Match</div>
          </div>
        </div>
      </div>
    </div>
  );
}