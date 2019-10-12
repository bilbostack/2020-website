import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SpeakerCard from "../components/speakerCard"
import Header from "../components/headerHome"
import Agenda from "../components/agenda"
import Footer from "../components/footer"
import { graphql} from "gatsby"


export default ({data}) => {

  const configData = data.site.siteMetadata;

  return <Layout>

    <Helmet>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet"></link>
          <title>{configData.conference_name} {configData.conference_hashtag}</title>
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

    <section id="stats">
      <div className="container">
          <div className="row">
            <div className="col col-xs-6">
              <span>2&nbsp;tracks</span>
            </div>
            <div className="col col-xs-6">
              <span>8&nbsp;ponentes</span>
            </div>
            <div className="col col-xs-6">
              <span>~700&nbsp;asistentes</span>
            </div>
            <div className="col col-xs-6">
              <span>10x&nbsp;networking</span>
            </div>
          </div>
      </div>
    </section>

    <div id="content" class="container">

        <section id="presentation" class="text-center">
            <h2>{configData.home.title} <span>{configData.conference_hashtag}</span></h2>
            <p>{configData.home.description}</p>
            <p>
                <a href="#agenda">{configData.home.agenda_cta_text}</a>
            </p>
        </section>



        <section id="speakers" class="row">
            {configData.speakers.map((speaker, i) => {
                return (<div class="col-lg-4 col-sm-6 col-xs-12"><SpeakerCard speaker={speaker}/></div>)
            })}
        </section>

        <Agenda agenda={configData.agenda} speakers={configData.speakers}/>
    </div>

    <Footer/>

  </Layout>
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        canonical_url,
        conference_hashtag,
        logo,
        conference_name,
        conference_date,
        conference_claim
        home {
            title
            description
            agenda_cta_text
        }
        header_banner {
          cta_pre_text,
          cta_text,
          cta_url
        }
        speakers {
          slug,
          name,
          image,
          company,
          talk{
              title,
              description
          }
        },
        agenda {
            visible,
            time_slots,
            tracks{ 
                name,
                content_in_slots {
                    type,
                    content
                }
            }
        }
      }
    }
  }
`