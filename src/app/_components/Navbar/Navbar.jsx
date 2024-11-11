'use client'
import './Navbar.css';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Navbar() {
    // State to manage menu open/close
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();


    //  Function to toggle menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    //  Function to handle scroll
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };


    //  Add event listener to handle scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            // On homepage, directly scroll to the target section
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // Redirect to the homepage and then scroll
            await router.push('/');

            // Ensure scrolling happens after page navigation
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }

        // Close the menu on mobile after clicking
        setMenuOpen(false);
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <div className="logo">
                    <img
                        onClick={() => scrollToTarget('hero')}
                        className="nav-logo"
                        src="/images/nav-logo.webp"
                        alt="Logo mladejovsky"
                        draggable="false"
                        loading="eager"
                        placeholder="blur"
                    />
                    SOŠ a SOU Kolín
                </div>


                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToTarget('about-action')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="0"><span>O akci</span>
                    </li>
                    <li onClick={() => scrollToTarget('program')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100"><span>Program</span>
                    </li>
                    <li onClick={() => scrollToTarget('about-kratom')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200"><span>Lepší místo</span>
                    </li>
                    <li onClick={() => scrollToTarget('partneri')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="300"><span>Partneři</span>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                        <button onClick={() => scrollToTarget('contact')} className={`btn btn-primary`}>Chci se zúčastnit
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
