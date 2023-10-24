import styles from "./page.module.scss"
import Link from 'next/link'
import FeaturedArticles from "@/components/blocks/FeaturedArticles"
import { Suspense } from "react"
import GuestNavigation from "@/components/blocks/GuestNavigation"
import Fallback from "@/components/cards/Fallback"

export default function Home() {
  return (
    <GuestNavigation>
      <div className='animated-2 fadeIn'>
        <section className="container text-center mt-5">
          <div>
            <h1 className='mb-4 fs-large'>
              Learn, Thrive and Connect with <br />
              <span className="theme-text-color">OwenaHub</span>.
            </h1>
            <p>
              We offer a vibrant platform for learners <br className="d-md-inline-block d-none" />
              to gain <em>career insights</em> from experienced mentors.
            </p>

            <div className="cta mt-4">
              <Link href={"/articles"} className='text-decoration-none'>
                <button className="btn btn-dark rounded rounded-0 text-uppercase fs-6 fw-light shadow">
                  Explore Articles <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
              <br />
              <div className="mt-2">
                <small className='fst-italic fs-tiny'>
                  <i className="bi bi-stars text-primary"></i> 500+ weekly readers
                </small>
              </div>
            </div>

            <span className={styles.glow}></span>
            <span className={styles.glow_2}></span>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className={`shadow shadow-0 ${styles.feature_box}`}>
              <div>
                <i className="bi bi-play-btn text-secondary"></i>
                <div>
                  <strong>Swift Sips</strong><br />
                  <span>
                    Get into our short courses; <br className='hidden' />
                    compact and focused.
                  </span>
                </div>
              </div>
              <div>
                <i className="bi bi-person-workspace text-secondary"></i>
                <div>
                  <strong>Expert Sessions</strong><br />
                  <span>
                    Connect With Skilled Mentors <br className="hidden" />
                    That Inspire You.
                  </span>
                </div>
              </div>
              <div>
                <i className="bi bi-journal-bookmark text-secondary"></i>
                <div>
                  <strong>Enriching Repository</strong><br />
                  <span>
                    Access a Wealth of Informative Articles<br className="hidden" />
                    on Owena's Blogs
                  </span>
                </div>
              </div>
              <div>
                <i className="bi bi-people text-secondary"></i>
                <div>
                  <strong>Private Session</strong><br />
                  <span>
                    Private Sessions tailored to <br className="hidden" />
                    your individual needs and goals.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='quote container'>
          <div className="text-center py-2">
            <figure className="text-center text-dark m-0">
              <blockquote className="blockquote">
                <p className='fs-6'>
                  <small>OwenaHub is resource rich for people wishing to pick up tips and tricks and gain perspective in their career path.</small>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                <span>Ernest Haruna, <i>founder</i></span>
              </figcaption>
            </figure>
          </div>
        </section >

        <section className='reasons-box mt-5 py-5 bg-f2'>
          <div className="container">

            <h3 className='fw-bold fs-4 mb-4'>
              <span className="circle">5</span> FEATURED ARTICLES
            </h3>

            <div className="text-start mx-auto">
              <Suspense fallback={<Fallback />}>
                <FeaturedArticles />
              </Suspense>
            </div>

          </div>
        </section>

        <section>
          <div className='my-5 text-center'>
            <Link href="/articles">
              <button className="btn btn-dark text-white rounded rounded-0 text-uppercase fs-6 fw-light shadow" type='button'>
                View More <i className="bi bi-arrow-right"></i>
              </button>
            </Link>
          </div>
        </section>
      </div >
    </GuestNavigation>
  )
}
