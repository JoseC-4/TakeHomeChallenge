import React from "react";
import "./Company.css";
import LocationIcon from "../../src/assets/LocationIcon";
import { Hospital } from "lucide-react";
import HospitalIcon from "../../src/assets/HospitalIcon";
import EmployeeIcon from "../../src/assets/EmployeeIcon";
import WebsiteIcon from "../../src/assets/WebsiteIcon";

export default function Company({ company }) {
  return (
    <div className="companyCard">

      <div className="companyInner">
        <div className="companyHeader">
          <div className="companyLogo" />

          <div className="companyHeaderInfo">
            <p className="companyName">{company.company}</p>

            <div className="companyMetaRow">
              <span className="companyMetaItem flex"><HospitalIcon/> {company.founded}</span>
              
              <span className="companyMetaItem flex"><LocationIcon/>{company.location}</span>
              
              <span className="companyMetaItem flex"><EmployeeIcon/> {company.employees}</span>
              
              <span className="companyMetaItem flex"><WebsiteIcon/>{company.websiteLabel}</span>
            </div>
          </div>
        </div>

        <p className="companyAbout">{company.about}</p>
      </div>
    </div>
  );
}