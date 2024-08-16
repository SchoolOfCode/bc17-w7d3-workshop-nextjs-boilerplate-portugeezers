import Hero from "./hero/hero"
import HowItWorks from "./how-it-works/HowItWorks"
import Trusted from "../Trusted/Trusted"

export default function Main() {
    return (
        <>
            <main className="site-main">
      
            <Hero/>

            <Trusted />

            <section className="how-it-works">
              <h2>How it works.</h2>

              <HowItWorks 
                img={"resources/how-it-works-1.png"}
                title={"Give us a call ..."}
                description={'Call us and book in a "Design Consultation" on a date and time to suit you.'}
              />


              <section id="how-it-works-2">
                <img src="resources/how-it-works-2.png" alt="" />
                <h3>We come to you ...</h3>
                <p>
                  We come to your home to do an assessment of the space and to your
                  style preference.
                </p>
              </section>

              <section id="how-it-works-3">
                <img src="resources/how-it-works-3.png" alt="" />
                <h3>We recommend ...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </section>
            </section>
          </main>
        </>
    )
}