"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import "./style.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from './_components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';
import Countdown from "@/app/_components/Countdown/Countdown";
import Marquee from "@/components/ui/marquee";
import Contact from "@/app/_components/Contact/Contact";

export default function Home() {
  useEffect(() => {
    //load aos animations
    AOS.init();
  }, []);


  // function to scroll to target section
  const scrollToTarget = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const firstRow = [
    {
      img: "/images/partner1.webp",
      alt: "",
    },
    {
      img: "/images/partner2.webp",
      alt: "",
    },
    {
      img: "/images/partner3.webp",
      alt: "",
    },
    {
      img: "/images/partner4.webp",
      alt: "",
    },
    {
      img: "/images/partner5.webp",
      alt: "",
    },
  ];

  const ReviewCard = ({img, alt}) => {
    return (
        <div>
          <div className="flex reviewCard flex-row items-center gap-2">
            <img src={img} alt={alt}/>
          </div>
        </div>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <section className='hero' id='hero'>
          <div className="container">
            <div className="row">
              <h1>Slavnostní otevření odpočívací místnosti</h1>
              <p>Přijměte pozvání na slavnostní otevření Odpočívárny na Střední odborné škole informatiky a spojů v
                Kolíně, které se uskuteční 26.6.2024 od 9:00. Otevření povede ředitel školy Ing. Miloš Hölzel.</p>
              <div className="btns-row">
                <button onClick={() => scrollToTarget('contact')} className="btn btn-primary">Zúčastním se</button>
                <button onClick={() => scrollToTarget('about-action')} className="btn">Zjistít více</button>
              </div>
            </div>
          </div>
        </section>
        <section className="about-action" id="about-action">
          <div className="container">
            <div className="row">
              <div className="item">
                <h2>O akci</h2>
                <p>
                  Zveme vás na slavnostní otevření Odpočívárny na Střední odborné škole informatiky a spojů v Kolíně,
                  které se uskuteční 26. června 2024 od 9:00 hodin pod vedením ředitele školy, Ing. Miloše Hölzla.
                </p>
                <p>
                  K dispozici bude bohaté občerstvení po celý den – od grilovaných specialit a domácích pochoutek až po
                  sladké dezerty a zmrzlinu pro všechny milovníky sladkého. Učitelský sbor vás obslouží v netradičních
                  rolích a postará se o zábavnou atmosféru. Akce nabízí ideální prostředí pro odpočinek a příjemná
                  setkání.
                </p>
              </div>
              <div className="item">
                <img
                    src="/images/about-img.webp"
                    alt=""
                    draggable="false"
                    loading="lazy"
                    placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="countdown" id="countdown">
          <div className="container">
            <div className="row">
              <Countdown/>
              <div className="location">
                <img src="/images/location-icon.webp" alt=""/>
                Jaselská 767, Kolín
              </div>
            </div>
          </div>
        </section>
        <section className="program" id="program">
          <div className="container">
            <h2>Program</h2>
            <div className="row">
              <div className="left">
                <div className="item">
                  <h3>9:00</h3>
                  <p>
                    Zahájení akce a slavnostní otevření Odpočívárny pod vedením ředitele školy Ing. Miloše Hölzla
                  </p>
                </div>
                <div className="item">
                  <h3>14:00</h3>
                  <p>
                    Zápas ve vybíjené mezi studenty a učiteli (zápas bude večer vysílán na internetu)
                  </p>
                </div>
                <div className="item">
                  <h3>20:00</h3>
                  <p>
                    Beseda s pracovníky školy
                  </p>
                </div>
                <div className="item">
                  <h3>23:00</h3>
                  <p>
                    Ohňostroj a zakončení akce tančícími kuchařkami
                  </p>
                </div>

              </div>
              <div className="right">
                <div className="item big">
                  <h3>Celý den</h3>
                  <p>
                    Občerstvení a grilování, sladké dobroty a zmrzlina, učitelský sbor v roli obsluhy
                  </p>
                </div>
                <div className="item">
                  <h3>
                    Hudební vystoupení
                  </h3>
                </div>
                <div className="item-group">
                  <div className="item-border">
                    <p>
                      <b>Chlapecký pěvecký sbor Dori Bimbo Bim</b> (studenti tříd 4TA a 4TB)
                    </p>
                  </div>
                  <div className="item-border">
                    <p>
                      <b>Kapela Pískomil a Hračky v kuchyni</b> (oblíbená kolínská kapela)
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-kratom" id="about-kratom">
          <div className="container">
            <div className="row">
              <div className="item">
                <h2>O projektu lepší místo</h2>
                <p>
                  Lepší Místo je projekt společnosti KratomWorld, která se věnuje zajišťování kvalitního kratomu pro své zákazníky. Tento projekt má za cíl podpořit komunitu a zlepšit veřejný prostor v českých městech. Lepší Místo umožňuje lidem sdílet nápady na zvelebení svého okolí, hlásit problémy ve veřejném prostoru a podporovat iniciativy, které přispívají ke zdravému a příjemnému životnímu prostředí.
                </p>
                <p>
                  Díky spolupráci místních obyvatel, firem a veřejné správy se tak projekt snaží vytvářet lepší podmínky pro každodenní život a podporovat pozitivní změny v komunitách.
                </p>
              </div>
              <div className="item">
                <img
                    src="/images/lepsi-misto-img.webp"
                    alt=""
                    draggable="false"
                    loading="lazy"
                    placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="partneri" id="partneri">
          <div className="container">
            <h2>Partneři</h2>
          </div>
              <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                ))}
              </Marquee>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <h2>Kontakt</h2>
            <div className="row">
              <Contact/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
