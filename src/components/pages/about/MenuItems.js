import React, { useState } from 'react';
import EducationContent from './EducationContent';
import JobsContent from "./JobsContent";
import OverviewContent from "./OverviewContent";
import PersonalContent from "./PersonalContent";

function MenuItems() {
    const [overviewIsActive, setOverviewIsActive] = useState(true);
    const [personalIsActive, setPersonalIsActive] = useState(false);
    const [educationIsActive, setEducationIsActive] = useState(false);
    const [jobsIsActive, setJobsIsActive] = useState(false);

    return (
        <>
            <div className="left-menu">
                <div className="left-menu-inner">
                    {overviewIsActive ? <div onClick={() => {
                        setPersonalIsActive(false);
                        setOverviewIsActive(true);
                        setEducationIsActive(false);
                        setJobsIsActive(false);
                    }}>
                        <div className='menu-item is-active' data-content="overview-content">
                            <div className="menu-icon">
                                <i className="mdi mdi-progress-check"></i>
                                <span>Overview</span>
                            </div>
                        </div>
                    </div> : <div onClick={() => {
                        setPersonalIsActive(false);
                        setOverviewIsActive(true);
                        setEducationIsActive(false);
                        setJobsIsActive(false);
                    }}>
                            <div className='menu-item' data-content="overview-content">
                                <div className="menu-icon">
                                    <i className="mdi mdi-progress-check"></i>
                                    <span>Overview</span>
                                </div>
                            </div>
                        </div>
                    }
                    {personalIsActive
                        ? <div onClick={() => {
                            setPersonalIsActive(true);
                            setOverviewIsActive(false);
                            setEducationIsActive(false);
                            setJobsIsActive(false);
                        }}>
                            <div className='menu-item is-active' data-content="personal-content" >
                                <div className="menu-icon">
                                    <i className="mdi mdi-apps"></i>
                                    <span>Personal Info</span>
                                </div>
                            </div>
                        </div>
                        : <div onClick={() => {
                            setPersonalIsActive(true);
                            setOverviewIsActive(false);
                            setEducationIsActive(false);
                            setJobsIsActive(false);
                        }}>
                            <div className='menu-item' data-content="personal-content" >
                                <div className="menu-icon">
                                    <i className="mdi mdi-apps"></i>
                                    <span>Personal Info</span>
                                </div>
                            </div>
                        </div>
                    }
                    {educationIsActive
                        ? <div onClick={() => {
                            setPersonalIsActive(false);
                            setOverviewIsActive(false);
                            setEducationIsActive(true);
                            setJobsIsActive(false);
                        }}>
                            <div className='menu-item is-active' data-content="education-content">
                                <div className="menu-icon">
                                    <i className="mdi mdi-school"></i>
                                    <span>Education</span>
                                </div>
                            </div>
                        </div>
                        : <div onClick={() => {
                            setPersonalIsActive(false);
                            setOverviewIsActive(false);
                            setEducationIsActive(true);
                            setJobsIsActive(false);
                        }}>
                            <div className='menu-item' data-content="education-content">
                                <div className="menu-icon">
                                    <i className="mdi mdi-school"></i>
                                    <span>Education</span>
                                </div>
                            </div>
                        </div>
                    }

                    {jobsIsActive
                        ? <div onClick={() => {
                            setPersonalIsActive(false);
                            setOverviewIsActive(false);
                            setEducationIsActive(false);
                            setJobsIsActive(true);
                        }}>
                            <div className='menu-item is-active' data-content="job-content">
                                <div className="menu-icon">
                                    <i className="mdi mdi-briefcase-plus"></i>
                                    <span>Jobs</span>
                                </div>
                            </div>
                        </div>
                        : <div onClick={() => {
                            setPersonalIsActive(false);
                            setOverviewIsActive(false);
                            setEducationIsActive(false);
                            setJobsIsActive(true);
                        }}>
                            <div className='menu-item' data-content="job-content">
                                <div className="menu-icon">
                                    <i className="mdi mdi-briefcase-plus"></i>
                                    <span>Jobs</span>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
            {overviewIsActive
                && <div className="right-content">
                    <OverviewContent viewContent='is-active' />
                </div>
            }
            {personalIsActive
                && <div className="right-content">
                    <PersonalContent viewContent='is-active' />
                </div>
            }
            {educationIsActive
                && <div className="right-content">
                    <EducationContent viewContent='is-active' />
                </div>
            }
            {jobsIsActive
                && <div className="right-content">
                    <JobsContent viewContent='is-active' />
                </div>
            }
        </>
    );
}

export default MenuItems;
