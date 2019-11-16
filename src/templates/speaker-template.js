import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Header from "../components/headerInner"
import Footer from "../components/footer"
import { FaArrowLeft, FaTwitter, FaLinkedin, FaGithub, FaWeebly } from 'react-icons/fa'

const SpeakerTemplate = context => {
  const speaker = context.pageContext.speaker;

  const configData = context.pageContext.configData;

  function bioWithHtml() {
      return {__html: speaker.bio};
  }

  function talkDescriptionWithHtml() {
      return {__html: speaker.talk.description};
  }

  return (
    <Layout>

        <Helmet>
            <meta charSet="utf-8" />
            <title>{speaker.name}</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"></link>
            <link rel="canonical" href="{configData.conference_claim}" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" ></meta>
        </Helmet>

        <Header data={configData}/>

        <section>
            <div className="container">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/#agenda"><FaArrowLeft/> volver a la agenda</a>
                    </li>
                </ul>
            </div>
        </section>

        <section id="speaker-detail">

            <div className="container">

                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={speaker.image} alt={speaker.name} className="img-fluid"/>
                    </div>
                    <div className="col-md-8">
                        <h1>{speaker.name}</h1>
                        <h5>{speaker.company}</h5>
                        <p>
                            {speaker.social.twitter ? <a href={speaker.social.twitter}><FaTwitter/></a> : ""}&nbsp;
                            {speaker.social.github ? <a href={speaker.social.github}><FaGithub/></a> : ""}&nbsp;
                            {speaker.social.web ? <a href={speaker.social.web}><FaWeebly/></a> : ""}&nbsp;
                            {speaker.social.linkedin ? <a href={speaker.social.linkedin}><FaLinkedin/></a> : ""}
                        </p>

                        {speaker.bio ?
                        <div className="block">
                            <h4>Acerca de</h4>
                            <p dangerouslySetInnerHTML={bioWithHtml()}></p>
                        </div> : ""}

                        <div className="block">
                            <h4>{speaker.talk.title}</h4>
                            <p dangerouslySetInnerHTML={talkDescriptionWithHtml()}></p>
                        </div>


                    </div>

                </div>

            </div>

        </section>


        <Footer/>

    </Layout>
  )
}
export default SpeakerTemplate