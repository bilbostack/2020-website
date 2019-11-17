module.exports =
{
    "canonical_url": "https://bilbostack.com",
    "logo": "/logo.png",
    "conference_name": "Bilbostack",
    "conference_claim": "9ª Edición de la cita tecnológica anual más esperada en&nbsp;Bilbao",
    "conference_date": "25 de Enero",
    "conference_hashtag": "#bilbostack20",
    "location": {
        "gmaps_iframe_url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.255497835498!2d-2.947592084396059!3d43.26702288533392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE2JzAxLjMiTiAywrA1Nic0My41Ilc!5e0!3m2!1ses!2ses!4v1543099024128",
        "addresses": [
            {
                "name": "Palacio Euskalduna Jauregia",
                "line": "Abandoibarra Etorb., 4<br>48011 Bilbo, Bizkaia",
                "map_link": "https://www.google.es/maps/place/Palacio+Euskalduna+Jauregia/@43.266915,-2.944521,15z/data=!4m2!3m1!1s0x0:0xdd291c55d656c0a1?sa=X&ved=0ahUKEwi_9sfjifrWAhUEY1AKHYsiCGcQ_BIIfjAR"
            }
        ]
    },
    "header_banner": {
        "cta_pre_text": "Pronto abriremos entradas",
        "cta_text": "Entradas aún no disponibles",
        "cta_url": "#"
    },
    "home": {
        "title": "Nuestro programa",
        "description": "Por noveno año consecutivo, profesionales referentes en el sector tecnológico a nivel nacional e internacional vendrán a Bilbao a compartir sus conocimientos y experiencia en los temas más punteros.",
        "agenda_cta_text": "Ver la agenda"
    },
    "speakers": [
        {
            "visible": true,
            "slug": "laura-morillo",
            "company": "SSP Tech Lead en Seedtag",
            "image": "/speakers/laura-morillo.jpg",
            "name": "Laura Morillo-Velarde Rodríguez",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/laura_morillo",
                "linkedin": "https://es.linkedin.com/in/lauramorillovelarderodriguez",
                "github": ""
            },
            "talk": {
                "title": "¿Qué le pasa a mis microservicios?",
                "description": "El desarrollo con microservicios es toda una aventura que presenta grandes desafíos, pero cuando tenemos que dar el paso a producción los retos que nos encontramos pueden ser aún mayores. En esta charla hablaremos de la importancia que tiene la monitorización de nuestros servicios y veremos algunas herramientas que nos ayudarán a que podamos medir y vigilar lo pasa en todo momento en un entorno de microservicios con Kubernetes."
            }
        },
        {
            "visible": true,
            "slug": "luis-fraile",
            "company": "CTO en B!Play Global Content",
            "image": "/speakers/luis-fraile.jpg",
            "name": "Luis Fraile Hernández",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/lfraile",
                "linkedin": "https://www.linkedin.com/in/lfraile/",
                "github": "",
                "web": "https://www.lfraile.net"
            },
            "talk": {
                "title": "DevOps: el camino de la entrega de valor en software",
                "description": "DevOps incluye muchas prácticas, testing, monitorización, feedback, y por supuesto entrega continua de valor. Vamos a hacer un recorrido sobre las estrategias que podemos seguir a la hora de entrega de valor en nuestros flujos de entrega de software, en los que incluiremos también testing automatizado, monitorización de la entrega, blue/green, entornos canary, y otras estrategias Haremos algunos ejemplos reales de entrega usando Azure DevOps Pipelines y Microsoft Azure como entorno de entrega. El objetivo  de esta charla es ver cuales de estas prácticas pueden tener sentido en vuestros equipos y productos, y por dónde empezar y un ejemplo práctico con Azure DevOps Pipelines."
            }
        },
        {
            "visible": true,
            "slug": "nerea-luis",
            "company": "AI Engineer en Sngular",
            "image": "/speakers/nerea-luis.jpg",
            "name": "Nerea Luis Mingueza",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/sailormerqury",
                "linkedin": "https://www.linkedin.com/in/nerealuis/",
                "github": ""
            },
            "talk": {
                "title": "Redes generativas adversarias",
                "description": "Hasta el momento, el paradigma típico de extracción de conocimiento utilizando Machine Learning consistía en explotar fuentes de datos utilizando diferentes algoritmos, como podían ser las redes de neuronas. Con la llegada de las redes generativas adversarias (GANs), este paradigma cambia y ahora podemos generar nuevas instancias basadas en las conocidas, las que se encuentran en las fuentes de datos. El objetivo sería, por un lado, complementar los datasets y por otro, aprender qué características son clave en la toma de decisiones. Con esto también conseguimos “engañar” a nuestro algoritmo y que no sepa descartar una instancia verdadera de una falsa. Lo “malo” es cuando estos sistemas también nos engañan a los humanos. Las GANs son una evolución de las redes de neuronas convolucionales. En esta charla pretendo explicaros su funcionamiento, aplicaciones, estructura, ver un poco de código de ejemplo con Keras/Tensor Flow y luego mostrar ejemplos de NVIDIA, de la app Zao o incluso de El Intermedio con sus imitaciones a famosos."
            }
        },
        {
            "visible": true,
            "slug": "sergi-gonzalez",
            "company": "Backend Tech Lead en Letgo",
            "image": "/speakers/sergi-gonzalez.jpg",
            "name": "Sergi González",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/sergigp",
                "linkedin": "https://www.linkedin.com/in/sergigp/",
                "github": ""
            },
            "talk": {
                "title": "Otra charla sobre microservicios",
                "description": "En los últimos años los microservicios se han convertido en una de las arquitecturas más populares en la industria. Demasiado a menudo se habla de ellos como si fueran una la solución por defecto a todos los problemas... ¡PERO NO! Una de las razones que está sonando más, es la complejidad accidental que conllevan. En letgo actualmente mantenemos más de 40 (micro)servicios operados por 11 equipos. Os explicaremos basados en nuestra experiencia los principales patrones de comunicación entre ellos, los pros y contras que nos hemos ido encontrando y cómo nos han ayudado a escalar nuestra producto a nivel de infra y a nivel de organización."
            }
        },
        {
            "visible": true,
            "slug": "isabel-garrido",
            "company": "Senior Backend Engineer en Letgo",
            "image": "/speakers/isabel-garrido.JPG",
            "name": "Isabel Garrido Cardenas",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/isabeliita90",
                "linkedin": "https://es.linkedin.com/in/isabel-garrido-4000164a",
                "github": ""
            },
            "talk": {
                "title": "Otra charla sobre microservicios",
                "description": "En los últimos años los microservicios se han convertido en una de las arquitecturas más populares en la industria. Demasiado a menudo se habla de ellos como si fueran una la solución por defecto a todos los problemas... ¡PERO NO! Una de las razones que está sonando más, es la complejidad accidental que conllevan. En letgo actualmente mantenemos más de 40 (micro)servicios operados por 11 equipos. Os explicaremos basados en nuestra experiencia los principales patrones de comunicación entre ellos, los pros y contras que nos hemos ido encontrando y cómo nos han ayudado a escalar nuestra producto a nivel de infra y a nivel de organización."
            }
        },
        {
            "visible": true,
            "slug": "ignacio-velazquez",
            "company": "Frontend Tech Lead en Packlink Shipping",
            "image": "/speakers/nacho.jpeg",
            "name": "Ignacio Velazquez",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/nass600",
                "linkedin": "https://www.linkedin.com/in/nass600",
                "github": "https://github.com/nass600",
                "web": "https://ignaciovelazquez.es/"
            },
            "talk": {
                "title": "Implementing corporate Design Systems in React",
                "description": "Los sistemas de diseño han estado en todos los medios durante los últimos años. Probablemente sepas de qué tratan, probablemente escuchaste sobre átomos, moléculas, organismos ... y, con suerte, no te diste la vuelta porque te sentiste abrumado después de leer un montón de artículos inundados con terminología de diseño que crees que no tiene nada que ver contigo como desarrollador de frontend. En esta charla, te mostraré una forma de implementarlo utilizando un framework moderno de arquitectura orientada a componentes como React y las herramientas relacionadas con sistemas de diseño que puedes encontrar en su ecosistema."
            }
        },
        
        {
            "visible": true,
            "slug": "berta-devant",
            "company": "IOS Engineer en Chartboost",
            "image": "/speakers/berta-devant.jpg",
            "name": "Berta Devant Pintado",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/bertadevant",
                "linkedin": "https://www.linkedin.com/in/berta-devant/",
                "github": ""
            },
            "talk": {
                "title": "TBD",
                "description": "TBD"
            }
        },
        {
            "visible": true,
            "slug": "joan-leon",
            "company": "Frontend Engineer en Adevinta Spain",
            "image": "/speakers/joan-leon.png",
            "name": "Joan León",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/nucliweb",
                "linkedin": "https://www.linkedin.com/in/joanleon/",
                "github": "https://github.com/nucliweb",
                "web": "http://nucliweb.net/"
            },
            "talk": {
                "title": "Unos estáticos muy dinámicos",
                "description": "En muchos proyectos, tenemos una series de recursos que no son dinámicos: imágenes, vídeos, iconos, tipografías o textos i18n. Las imágenes suelen ser las menos cuidadas, desde el punto de vista de la performance. Y lo sé de primera mano, así que os quiero contar cómo pasamos de una carpeta images desplegada en un S3, a un repositorio con unas guidelines de la estructura, naming, automatización de compresión de imágenes y generación de “Responsive Images”, test de regresión visual e incluso un garbage images collector, para hacer limpieza de esas imágenes que quedan en el olvido."
            }
        },
        {
            "visible": true,
            "slug": "silvia-calvet",
            "company": "Independent Product & UX Coach",
            "image": "/speakers/silvia-calvet.png",
            "name": "Silvia Calvet",
            "bio": "",
            "social": {
                "twitter": "https://twitter.com/silviacalvet",
                "web": "http://stereometrics.info/",
                "linkedin": "https://www.linkedin.com/in/silviacalvet/",
                "github": ""
            },
            "talk": {
                "title": "El poder de las restricciones",
                "description": "Tendemos a centrarnos en los requisitos para crear productos. Algunos de ellos son limitaciones. Y las limitaciones tienen mala prensa porque hay una creencia general que ellas nos impiden hacer lo que queremos. Sin embargo, las restricciones ayudan a desarrollar mejores soluciones! Únete a mí para descubrir cómo las limitaciones aumentan la creatividad y nos dan empatía. En esta charla revisaremos ejemplos de restricciones en nuestra industria y compartiré algunos consejos y herramientas para considerarlas con tu equipo."
            }
        }
    ],
    "agenda": {
        "visible": true,
        "time_slots": ["9:00-9:20", "9:30-10:20", "10:30-11:20", "11:30-12:00", "12:00-12:50", "13:00-13:50", ">14:00"],
        "tracks":[
            {
                "name": "Sala Barria",
                "content_in_slots": [
                    {
                        "type": "text",
                        "content": "Presentación"
                    },
                    {
                        "type": "speaker",
                        "content": "luis-fraile"
                    },
                    {
                        "type": "speaker",
                        "content": "laura-morillo"
                    },
                    {
                        "type": "text",
                        "content": "Networking + café"
                    },
                    {
                        "type": "speaker",
                        "content": "nerea-luis"
                    },
                    {
                        "type": "speaker_group",
                        "content": "isabel-garrido+sergi-gonzalez"
                    },
                    {
                        "type": "text",
                        "content": "Networking + pintxos y poteo"
                    }                    
                ]
            },
            {
                "name": "Sala A3",
                "content_in_slots": [
                    {
                        "type": "text",
                        "content": "Presentación"
                    },
                    {
                        "type": "speaker",
                        "content": "joan-leon"
                    },
                    {
                        "type": "speaker",
                        "content": "silvia-calvet"
                    },
                    {
                        "type": "text",
                        "content": "Networking + café"
                    },
                    {
                        "type": "speaker",
                        "content": "ignacio-velazquez"
                    },
                    {
                        "type": "speaker",
                        "content": "berta-devant"
                    },
                    {
                        "type": "text",
                        "content": "Networking + pintxos y poteo"
                    }
                ]
            }
        ]
    },
    "organizers": [
        {
            "image": "/org-ibon.jpg",
            "name": "Ibon Landa",
            "link": "https://twitter.com/ibonilm"
        },
        {
            "image": "/org-fran.jpg",
            "name": "Fran Mosteiro",
            "link": "https://twitter.com/fran_mosteiro"
        },
        {
            "image": "/org-asier.jpg",
            "name": "Asier Marqués",
            "link": "https://twitter.com/asiermarques"
        },
        {
            "image": "/org-vicenc.jpg",
            "name": "Vicenç García-Altés",
            "link": "https://twitter.com/vgaltes"
        }
    ],
    "sponsor_blocks": [
        {
            "visible": true,
            "name": "",
            "height_em": "5",
            "sponsors": [
                {
                    "name": "Packlink Shipping",
                    "link": "https://packlink.es",
                    "image": "/sponsors/packlink.png"
                },
                {
                    "name": "Plain Concepts",
                    "link": "https://www.plainconcepts.com",
                    "image": "/sponsors/plain-logo.png"
                },
                {
                    "name": "Lookiero",
                    "link": "https://lookiero.com",
                    "image": "/sponsors/lookiero_tech_logo.png"
                },
                {
                    "name": "Thoughtworks",
                    "link": "https://www.thoughtworks.com/",
                    "image": "/sponsors/tw-logo.png"
                },
                {
                    "name": "Comalatech",
                    "link": "https://comalatech.com",
                    "image": "/sponsors/comalatech.png"
                }
            ]
        }
    ],
    "footer_links": [
        {
            "link": "/code-of-conduct",
            "title": "Código de conducta"
        },
        {
            "link": "/#agenda",
            "title": "Agenda"
        },
        {
            "link": "/indications",
            "title": "Cómo llegar"
        },
        {
            "link": "https://2019.bilbostack.com",
            "title": "Edición del 2019"
        }

    ]
}