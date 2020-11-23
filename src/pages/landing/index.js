import React from 'react';
import { Navbar } from '../../components/Navbar/NavbarLanding';
import { Hero } from './Hero';
import { LandingStart } from './landingStart/index';
import { IconSection } from './IconSection/Index';
import '../../assets/scss/core.scss';
import FadeIn from 'react-fade-in';

export default function Landing() {

    return (
        <>
            <FadeIn>
                <div className="is-white">
                    {/* Navbar */}
                    <Navbar />

                    {/* Body */}
                    <div className="landing-wrapper">
                        {/* Hero */}
                        <Hero />

                        {/* Landing Start */}
                        <LandingStart />

                        {/* Icon Section */}
                        <IconSection />
                    </div>
                </div>
            </FadeIn>
        </>
    )
} 