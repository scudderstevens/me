import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { timeline, current } = attributes;
    let GA_MEASUREMENT_ID = 'UA-90732209-1'
    return (
      <>

        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <title>Scudder Stevens - Digital Product Owner &amp; JAM Stack Developer</title>
          <meta name="description" content="Scudder Stevens - Design, Code, JAM Stack Developer &amp; Digital Product Owner" />
          <link rel="canonical" href="https://scudderstevens.me/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Scudder Stevens - Digital Product Owner &amp; JAM Stack Developer" />
          <meta property="og:description" content="Design, Code, JAM Stack Developer &amp; Digital Product Owner" />
          <meta property="og:url" content="https://scudderstevens.me/" />
          <meta property="og:site_name" content="Scudder Stevens (dot) me" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Design, Code, JAM Stack Developer &amp; Digital Product Owner" />
          <meta name="twitter:title" content="Scudder Stevens - Design, Code &amp; Front-End Development" />
          <link rel="stylesheet" type="text/css" href="https://latest.cdn-sty.link/css/main.css" />
          <link rel="stylesheet" type="text/css" href="https://latest.cdn-sty.link/css/themes/me.css" />
          <meta name="msapplication-TileImage" content="https://ssme.s3.filebase.com/theme/assets/Angular-S-Stroke-Logo-270x270.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="https://ssme.s3.filebase.com/theme/assets/Angular-S-Stroke-Logo-192x192.png" />
          <link rel="apple-touch-icon-precomposed" href="https://ssme.s3.filebase.com/theme/assets/Angular-S-Stroke-Logo-180x180.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://ssme.s3.filebase.com/theme/assets/Angular-S_solid-logo_inverse-32w.png" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }} />
        </Head>

        <article id="top" className="main me">

          <header id="header" className="grid-container-col">
            <div className="grid-container-row btn-grp">
              <div className="grid-container-col grid-1-3 btn">
                  <a href="https://github.com/scudderstevens" target="_blank" className="btn-nav_main primary" rel="noopener">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="16" fill="currentColor"/>
                          <path className="logo" cx="16" cy="16" r="16" d="M12,30v-2.7c-1.2,0.3-2.5,0.2-3.5-0.1c-1.5-0.5-1.8-1.4-2.1-2.3C6,23.6,5,23,4.4,22.5c0.3-0.5,1.3-0.6,2.2,0.1c1,0.7,1.4,2.6,3,2.7c0.9,0.1,1.8,0.1,2.6-0.3c0-0.8,0-1.4,0.6-2.2c-8.6-0.7-7.4-10-5.4-11.9C7,9.5,7,8,7.6,6.6c2,0.2,3.4,0.9,4.5,1.9c2.7-0.9,5.3-0.8,7.9,0c1.3-1.1,2.8-1.7,4.3-1.9c0.6,2,0.5,3.2,0.1,4.4c2.8,1.8,3.1,11.5-5.3,11.9c0.8,0.7,0.8,1.3,0.8,2.1v4.9C17,30.7,14.5,30.7,12,30z" fill="#ffffff" />
                      </svg>GitHub
                  </a>
              </div>
              <div className="grid-container-col grid-1-3 btn">
                  <a href="https://www.linkedin.com/in/scudder-stevens/" target="_blank" className="btn-nav_main accent" rel="noopener" alt="My linked in profile, connect with me.">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="16" fill="currentColor"/>
                          <path className="logo" d="M20.7,11.52c3.31,0,6,2.69,6,6v7h-4v-7c0-1.1-0.9-2-2-2s-2,0.9-2,2v7h-4v-7C14.7,14.21,17.38,11.52,20.7,11.52z" fill="#ffffff"/>
                          <rect className="logo" x="6.7" y="12.52" width="4" height="12" fill="#ffffff" />
                          <circle className="logo" cx="8.7" cy="7.52" r="2" fill="#ffffff" />
                      </svg>LinkedIn
                  </a>
              </div>
              <div className="grid-container-col grid-1-3 btn">
                  <a href="https://twitter.com/ScudderStevens" target="_blank" className="btn-nav_main primary" rel="noopener" alt="Twitter, an alternative channel for starting a conversation or saying hello.">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="currentColor"/>
                      <path className="logo" d="M27.27,8c-0.96,0.68-2.02,1.19-3.14,1.53c-1.62-1.87-4.45-2.06-6.32-0.44c-0.99,0.86-1.56,2.12-1.54,3.44v1c-3.57,0.09-6.95-1.61-9-4.53c0,0-4,9,5,13c-2.06,1.4-4.51,2.1-7,2c9,5,20,0,20-11.5c0-0.28-0.03-0.56-0.08-0.83C26.21,10.67,26.93,9.4,27.27,8z" fill="#ffffff" />
                      </svg>Twitter
                  </a>
              </div>
            </div>
          </header>

          <div id="intro" className="intro-duo">
            <div className="intro-duo__profile mono_s095">
              <div className="profile-img"></div>
              <div className="intro-duo__title">
                <h1>Scudder Stevens</h1>
                <p className="micro">Digital Product Owner <br/> <em>&</em> JAM Stack Developer</p>
              </div>
            </div>
            <div className="intro-duo__copy">
              <div className="intro-duo__title">
                  <h1>Scudder Stevens</h1>
                  <p className="micro">Digital Product Owner <br/> <em>&</em> JAM Stack Developer</p>
              </div>
              <p><strong>Hello</strong>. I work for <a href="https://www.uhsinc.com" target="_blank" alt="Universal Health Services, Inc." className="icon-link">Universal Health Services,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path className="svg-elem" d="M8.17,10.92a4.58,4.58,0,0,0,6.4.92,4.18,4.18,0,0,0,.5-.43l2.75-2.75a4.58,4.58,0,0,0-6.47-6.47L9.77,3.76" transform="translate(-0.07 -0.08)" /><path className="svg-elem" d="M11.83,9.08a4.58,4.58,0,0,0-6.4-.92,4.18,4.18,0,0,0-.5.43L2.18,11.34a4.58,4.58,0,0,0,6.47,6.47l1.57-1.57" transform="translate(-0.07 -0.08)" /></svg></a> in the <em>Digital Marketing Department</em>. We are a small, talented and well integrated team working out of Nashville, Tennessee and King of Prussia, Pennsylvania. 
              The latter is where I am based.</p>
              <p>On a good day, I split my time between my <em>to do</em> list and making future efforts more efficient. I am always on the hunt for the 
              perfectly optimized work flow or more efficient tooling. For exisiting platforms I work in collaboration with the larger UHS teams to keep solutions up to date and running 
              smoothly. For new products, I define specific needs and resources. From that initial research I configure software to test a potential solution. That solution should address known 
              workflow issues and support product adoption.</p>
              <p><strong>My Goals</strong>: Focus on solving users’ problems. Drive product adoption and engagement. Create viral growth for our suite of digital products. Create a unified product strategy. Embrace the teams' creative vision and foster a collaborative environment.</p>
              <p>Below you will find a list of <a href="#projects" alt="project list" className="smooth-scroll">projects</a> I am currently working on or have recently completed. When I am not banging on the keyboard for UHS, I am relaxing with my wife and our fur-baby in Philadelphia, PA. I get outside as much as possible to ride my bicycle; and occasionally, I get the chance to play music. I either noodle around on my modular synth or listen to tracks from my extensive collection of <a href="https://en.wikipedia.org/wiki/Single_(music)#7-inch_format" target="_blank" alt="Wikipedia: Music Single - The most common form of the vinyl single is the '45' or '7-inch'..." className="icon-link">45's.<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path className="svg-elem" d="M8.17,10.92a4.58,4.58,0,0,0,6.4.92,4.18,4.18,0,0,0,.5-.43l2.75-2.75a4.58,4.58,0,0,0-6.47-6.47L9.77,3.76" transform="translate(-0.07 -0.08)" /><path className="svg-elem" d="M11.83,9.08a4.58,4.58,0,0,0-6.4-.92,4.18,4.18,0,0,0-.5.43L2.18,11.34a4.58,4.58,0,0,0,6.47,6.47l1.57-1.57" transform="translate(-0.07 -0.08)" /></svg></a> Mostly <a href="https://en.wikipedia.org/wiki/Dub_music" target="_blank" alt="Wikipedia: Dub Music - Dub is a genre of electronic music that grew out of reggae in the late 1960s and early 1970s..." className="icon-link"> Dub Reggae,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" fill="none"><path className="svg-elem" d="M8.17,10.92a4.58,4.58,0,0,0,6.4.92,4.18,4.18,0,0,0,.5-.43l2.75-2.75a4.58,4.58,0,0,0-6.47-6.47L9.77,3.76" transform="translate(-0.07 -0.08)" /><path className="svg-elem" d="M11.83,9.08a4.58,4.58,0,0,0-6.4-.92,4.18,4.18,0,0,0-.5.43L2.18,11.34a4.58,4.58,0,0,0,6.47,6.47l1.57-1.57" transform="translate(-0.07 -0.08)" /></svg></a> my favorite!</p>
              <p>For additional details, read my <a href="https://drive.google.com/file/d/1JlwMp6ipw6sLnkhWBvQjyyBpELr-bUPY/view?usp=sharing" target="_blank" alt="my resume" className="icon-link">resume.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                <path className="svg-elem" d="M8.17,10.92a4.58,4.58,0,0,0,6.4.92,4.18,4.18,0,0,0,.5-.43l2.75-2.75a4.58,4.58,0,0,0-6.47-6.47L9.77,3.76" transform="translate(-0.07 -0.08)" />
                <path className="svg-elem" d="M11.83,9.08a4.58,4.58,0,0,0-6.4-.92,4.18,4.18,0,0,0-.5.43L2.18,11.34a4.58,4.58,0,0,0,6.47,6.47l1.57-1.57" transform="translate(-0.07 -0.08)" />
                </svg></a>
              </p>
            </div>
          </div>

          <div id="overview" className="grid-container-col mono_s090">
            <div className="grid-container-row grid__fixed-width">
              <h2>Overview</h2>
            </div>
          </div>

          <div className="iso-background__repeating-grid career-timeline">
            {timeline.map((c, k) => (
            <div key={k} id={c.id} className="grid-container-col grid__fixed-width">
              <div className="grid-container-row career-timeline__moment">
                <div className="grid-container-column career-timeline__moment-description">
                  <h3>{c.title}</h3>
                  <p>{c.teaser}</p>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div id="projects" className="grid-container-col mono_s090">
            <div className="grid-container-row grid__fixed-width">
              <h2>Projects</h2>
            </div>
          </div>

          {current.map((r, k) => (
          <div key={k} id={r.id} className="grid-container-col project">

            <div className="grid-container-col sepia_s095">

              <div className="grid-container-row grid__fixed-width project-header">
                <svg className="current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px">
                  <line className="svg-elem svg-line-elem" x1="3.87" y1="0.83" x2="3.87" y2="13" />
                  <circle className="svg-elem svg-fill-elem" cx="16.04" cy="3.87" r="3.04" />
                  <circle className="svg-elem svg-fill-elem" cx="3.87" cy="16.04" r="3.04" />
                  <path className="svg-elem svg-line-elem" d="M16.08,7A9.12,9.12,0,0,1,7,16.08" transform="translate(-0.04 -0.04)" />
                </svg>
                <h3>{r.project}</h3>
              </div>

              <div class="grid-container-row grid__fixed-width">
                <p class="project-owner micro"><em>{r.owner}</em></p>
              </div>

              <div id={r.id+'_description'} className="grid-container-row grid__fixed-width project-description">
                <div className="grid-container-col">
                  <h4>description</h4>
                  <p>{r.shortDescription}</p>
                </div>
              </div>

            </div>

            <div id={r.id+'_tags'} className="grid-container-row project-tags sepia_s090">
              <div className="grid-container-row grid__fixed-width">
                <ul>
                { r.tags.map((t, l) => (
                  <li key={l}><svg className="current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                    <path className="svg-elem svg-fill-elem" d="M18.4,11.69l-6.65,6.66a1.86,1.86,0,0,1-2.62,0h0l-8-8V1.11h9.27l8,8A1.85,1.85,0,0,1,18.4,11.69Z" transform="translate(-0.16 -0.11)" />
                    <line className="svg-elem svg-line-elem" x1="5.64" y1="5.64" x2="5.66" y2="5.64" />
                    </svg><div class="term">{t.term}</div></li>
                ))}
                </ul>
              </div>
            </div>

            <div id={r.id+'_tech-stack'} className="grid-container-col grid__fixed-width project-tech-stack">

              <div className="grid-container-row">
                <svg className="current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px"><polygon className="svg-elem svg-fill-elem" points="9.89 1 1 5.45 9.89 9.89 18.79 5.45 9.89 1" /><polyline className="svg-elem svg-line-elem" points="1 14.34 9.89 18.79 18.79 14.34" /><polyline className="svg-elem svg-line-elem" points="1 9.89 9.89 14.34 18.79 9.89" /></svg>
                <h4>tech stack:</h4>
              </div>

              { r.tech.map((t, l) => (
              <div key={l} className="grid-container-row grid__fixed-width">
                <div className="grid-container-col">
                  <p><a href={t.link.href} alt={t.link.alt} className="icon-link external">{t.name}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" stroke="currentColor" fill="none">
                          <path className="svg-elem" d="M8.17,10.92a4.58,4.58,0,0,0,6.4.92,4.18,4.18,0,0,0,.5-.43l2.75-2.75a4.58,4.58,0,0,0-6.47-6.47L9.77,3.76" transform="translate(-0.07 -0.08)" />
                          <path className="svg-elem" d="M11.83,9.08a4.58,4.58,0,0,0-6.4-.92,4.18,4.18,0,0,0-.5.43L2.18,11.34a4.58,4.58,0,0,0,6.47,6.47l1.57-1.57" transform="translate(-0.07 -0.08)" />
                        </svg></a> {t.description}</p>
                </div>
              </div>
              ))}

            </div>

            <div d={r.id+'_conclusion'} className="grid-container-col project-conclusion mono_s095">
                <div className="grid-container-row grid__fixed-width">
                    <svg className="current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px">
                        <path className="svg-elem svg-line-elem" d="M14.66,7.46h.85a3.38,3.38,0,0,1,0,6.75h-.85" transform="translate(-0.16 -0.55)" />
                        <path className="svg-elem svg-fill-elem" d="M1.16,7.46h13.5v7.59a3.38,3.38,0,0,1-3.37,3.38H4.54a3.38,3.38,0,0,1-3.38-3.38Z" transform="translate(-0.16 -0.55)" />
                        <line className="svg-elem svg-line-elem" x1="4.38" y1="1" x2="4.38" y2="3.53" />
                        <line className="svg-elem svg-line-elem" x1="7.75" y1="1" x2="7.75" y2="3.53" />
                        <line className="svg-elem svg-line-elem" x1="11.13" y1="1" x2="11.13" y2="3.53" />
                    </svg>
                    <h4>conclusion</h4>
                </div>
                <div className="grid-container-col grid__fixed-width">
                    <p>{r.fullDescription}</p>
                </div>
            </div>

          </div>
          ))}

          <footer className="accent_s015">

            <div className="grid-container-row grid__fixed-width top">

              <div className="grid-container-col profile-wrapper">
                <img className="profile" src="https://ssme.s3.filebase.com/theme/assets/Scudder-Portrait_square-250w.jpg" alt="Scudder Stevens" />
              </div>

              <div className="grid-container-col quote-wrapper">
                <p className="quote mega"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16"width="20px" height="16px"><path className="dbl-quote" d="M8.41,7.82V16H0V10.59A14,14,0,0,1,1.06,5,16.21,16.21,0,0,1,4.74,0L7.81,2.33A16.94,16.94,0,0,0,5.58,5.16a7.78,7.78,0,0,0-1,2.66ZM20,7.82V16H11.54V10.59A13.85,13.85,0,0,1,12.63,5,16.33,16.33,0,0,1,16.3,0l3.07,2.36a17.36,17.36,0,0,0-2.22,2.83,7.61,7.61,0,0,0-1,2.66Z" transform="translate(0.02 0.03)"/></svg>Reports that say that something hasn't happened are always interesting to me, because as we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know.</p>
                <p className="quote-src mega">Donald Rumsfeld</p>
              </div>

            </div>

            <div className="grid-container-row middle">

                <div className="grid-container-row grid__fixed-width btn-grp">

                  <div className="grid-container-col grid-1-3 btn">
                    <a href="https://github.com/scudderstevens" target="_blank" className="btn-nav_networks" rel="noopener">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <circle cx="16" cy="16" r="16" fill="currentColor"/>
                          <path className="logo" cx="16" cy="16" r="16" d="M12,30v-2.7c-1.2,0.3-2.5,0.2-3.5-0.1c-1.5-0.5-1.8-1.4-2.1-2.3C6,23.6,5,23,4.4,22.5c0.3-0.5,1.3-0.6,2.2,0.1c1,0.7,1.4,2.6,3,2.7c0.9,0.1,1.8,0.1,2.6-0.3c0-0.8,0-1.4,0.6-2.2c-8.6-0.7-7.4-10-5.4-11.9C7,9.5,7,8,7.6,6.6c2,0.2,3.4,0.9,4.5,1.9c2.7-0.9,5.3-0.8,7.9,0c1.3-1.1,2.8-1.7,4.3-1.9c0.6,2,0.5,3.2,0.1,4.4c2.8,1.8,3.1,11.5-5.3,11.9c0.8,0.7,0.8,1.3,0.8,2.1v4.9C17,30.7,14.5,30.7,12,30z"/>
                      </svg>GitHub
                    </a>
                  </div>

                  <div className="grid-container-col grid-1-3 btn">
                    <a href="https://www.linkedin.com/in/scudder-stevens/" target="_blank" className="btn-nav_networks" rel="noopener">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="16" fill="currentColor"/>
                        <path className="logo" d="M20.7,11.52c3.31,0,6,2.69,6,6v7h-4v-7c0-1.1-0.9-2-2-2s-2,0.9-2,2v7h-4v-7C14.7,14.21,17.38,11.52,20.7,11.52z"/>
                        <rect className="logo" x="6.7" y="12.52" width="4" height="12"/>
                        <circle className="logo" cx="8.7" cy="7.52" r="2"/>
                      </svg>LinkedIn
                    </a>
                  </div>

                  <div className="grid-container-col grid-1-3 btn">
                    <a href="https://twitter.com/ScudderStevens" target="_blank" className="btn-nav_networks" rel="noopener">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="16" fill="currentColor"/>
                      <path className="logo" d="M27.27,8c-0.96,0.68-2.02,1.19-3.14,1.53c-1.62-1.87-4.45-2.06-6.32-0.44c-0.99,0.86-1.56,2.12-1.54,3.44v1c-3.57,0.09-6.95-1.61-9-4.53c0,0-4,9,5,13c-2.06,1.4-4.51,2.1-7,2c9,5,20,0,20-11.5c0-0.28-0.03-0.56-0.08-0.83C26.21,10.67,26.93,9.4,27.27,8z"/>
                      </svg>Twitter
                    </a>
                  </div>

                </div>

            </div>

            <div className="accent_s025">

              <div className="grid-container-row grid__fixed-width">
                <img className="logo" src="https://ssme.s3.filebase.com/theme/assets/Angular-S_solid-logo_accent-s015-180w.png" alt="Scudder Stevens accent logo"/>
                <p className="nano copyright">&sect; Scudder Stevens © <span id="footer-year"></span></p>
              </div>

            </div>

          </footer>

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://latest.cdn-sty.link/js/smooth-scroll.js"></script>
          <script>document.getElementById("footer-year").innerHTML = new Date().getFullYear();</script>

        </article>
      </>
    )
  }
}