import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import { sidebarTags } from "../../components/Sidebar/sidebarTags.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./jobdetails.css"
import JobCard from "../../components/JobCard/JobCard.jsx";
import { JobCardInfo } from "../../components/JobCard/JobCardInfo.jsx";
import Star from "../../src/assets/Star.jsx";
import LeftArrow from "../../src/assets/LeftArrow.jsx";
import ArrowTopRight from "../../src/assets/ArrowTopRight.jsx";
import HeartIcon from "../../src/assets/HeartIcon.jsx";
import JobDescriptionHeader from "../../components/jobDescription/JobDescriptionHeader.jsx";
import { JobDescriptionInfo } from "../../components/jobDescription/JobDescriptionInfo.jsx";
import Qualifications from "../../components/Qualifications.jsx/Qualifications.jsx";
import { QualificationsInformation } from "../../components/Qualifications.jsx/QualificationsInformation.jsx";
import Required from "../../components/Required/Required.jsx";
import { RequiredData } from "../../components/Required/RequiredData.jsx";
import { PreferredQualifications } from "../../components/PreferredQualifications/PreferedQualitfications.jsx";
import { Responsibilities } from "../../components/Responsibilities/Responsibilities.jsx";
import { BenefitsData } from "../../components/Benefits/BenefitsData.jsx";
import Benefits from "../../components/Benefits/Benefits.jsx";
import InterviewSuccess from "../../components/InterviewSuccess/InterviewSuccess.jsx";
import { useNavigate } from "react-router";
import Company from "../../components/Company/Company.jsx";
import { CompanyInfo } from "../../components/Company/CompanyInfo.jsx";

function JobDetails() {
  const navigate = useNavigate()

  return (
    <div className="jobDetails">
      <div>
        <Sidebar items={sidebarTags}/>
        
      </div>
      <div className="jobDetails-right">
        <Navbar />

        <div className="jobDetails-content">
          <div className="mx-auto w-full space-y-4">
              <div className="jobDetails-topActions">
                <div className="jobDetails-topLeft">
                  <button className="jobDetails-backBtn hover:cursor-pointer" type="button" aria-label="Back" onClick={()=>{navigate("/")}}>
                    <LeftArrow/>
                  </button>

                  <span className="jobDetails-pill">27 applicants</span>
                </div>

                <div className="jobDetails-topRight">
                  <button className="jobDetails-iconBtn" type="button" aria-label="Share">
                    <ArrowTopRight/>
                  </button>

                  <button className="jobDetails-iconBtn" type="button" aria-label="Save">
                    <HeartIcon/>
                  </button>

                  <button className="jobDetails-applyNow" type="button">
                    Apply Now <span className="jobDetails-applyArrow"><ArrowTopRight/></span>
                  </button>
                </div>
              </div>
            <JobDescriptionHeader jobs={JobDescriptionInfo[0]} />
            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Job Description</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis facere hic voluptas quae exercitationem officiis necessitatibus corrupti. Similique vitae beatae dicta delectus doloribus vel, repudiandae, expedita obcaecati error sed rem, natus voluptas sint corporis neque deleniti quas facilis rerum? Atque ratione quibusdam incidunt sapiente quam. Hic numquam, temporibus fuga assumenda magnam accusantium necessitatibus exercitationem corporis? Repudiandae laborum ipsa itaque deserunt eum debitis voluptates odit obcaecati quos tempore.</p>
            </div>
             <br/> 
              <InterviewSuccess/>
            <br/> 
            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Qualifications</p>
              <p>Discover how your skills align with the requirements of this position. Below is a detailed list of the essential skills needed for the role.</p>
              <div className="qualificationSection"><Qualifications qualifications={QualificationsInformation}/></div>
              
            </div>

            <br/>

            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Required</p>
              <div className="qualificationSection"><Required skills={RequiredData}/></div>
              
            </div>
            <br/>

            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Preferred</p>
              <div className="qualificationSection"><Required skills={PreferredQualifications}/></div>
              
            </div>
            <br/>

            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Responsibilities</p>
              <div className="qualificationSection"><Required skills={Responsibilities}/></div>
              
            </div>
            <br/>

            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Benefits</p>
              <p className="text-base"> We believe happy team members create amazing work. Here’s what we offer to make that happen:</p>
              <div className="qualificationSection"><Benefits skills={BenefitsData}/></div>
              
            </div>
            <br/>

            <div className="jobQualifications">
              <p className="text-xl font-semibold text-slate-900">Company</p>
              
              <div className="qualificationSection"><Company company={CompanyInfo}/></div>
              
            </div>

          </div>

          <div className="jobDetails-right">
            <div className="jobDetails-inner">
              <div className="jobDetails-star">
                <Star />
              </div>

              <div className="jobDetails-intro">
                <p className="jobDetails-subject">
                  Ace Your interviews with AI-Powered Mock Sessions!
                </p>
                <p className="jobDetails-body">
                  Struggling with interview nerves or unsure how to prepare? Let
                  our cutting-edge AI mock interviews help you shine!
                </p>
              </div>

              <hr className="jobDetails-divider" />

              <div className="jobDetails-section">
                <p className="jobDetails-subject">
                  Why Choose Our AI Mock Interviews?{" "}
                  <span className="jobDetails-subjectIcon">
                    <Star />
                  </span>
                </p>

                <p className="jobDetails-sectionTitle">Job-Specific Simulations:</p>
                <ul className="jobDetails-bullets">
                  <li>
                    Practice with questions tailored to your target role,
                    ensuring relevance and preparation.
                  </li>
                </ul>

                <p className="jobDetails-sectionTitle">Actionable Feedback</p>
                <ul className="jobDetails-bullets">
                  <li>
                    Get detailed analysis of your responses and practical,
                    step-by-step improvement suggestions.
                  </li>
                </ul>

                <p className="jobDetails-sectionTitle">Boost Success Rates:</p>
                <ul className="jobDetails-bullets">
                  <li>
                    Perfect your interview skills and increase your chances of
                    landing the job you want.
                  </li>
                </ul>
              </div>

              <button className="jobDetails-mockBtn" type="button">
                <span className="jobDetails-mockBtnIcon">⌕</span>
                Mock Interview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;