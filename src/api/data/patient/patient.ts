import {Epd} from "../../../app/class/patient";

export const EPD: Epd [] = [
  {
    id: "epd",
    beschreibung: "Einrichtungsübergreifende Elektronische Patientenakten (eEPA) sollten von Beginn an als umfassende Behandlungsmanagement-Plattformen gedacht werden, welche dem Patienten und seinem gesamten Behandlungs-Team eine bestmögliche Steuerung der Gesundheitsversorgung erlauben. Weit über ein „Patientenfach“ hinausgehen sollten daher auch eEPA-Anwendungen für Patienten. ",
    title: "Elektronische PD",
    logoUrl: "assets/medical/doctor2.jpg",
    hintergrundbilder: [
      {
        url: "assets/medical/hospital3.jpg",
        urlMobile: "assets/medical/hospital3.jpg"
      },
      {
        url: "assets/medical/doctor2.jpg",
        urlMobile: "assets/medical/doctor2.jpg"
      },

    ],

    patienten: [
      {
        id: "1",
        url: "assets/medical/doctor3.jpg",
        title: "Herr MusterMan",
        beschreibung: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        fallnr: "fv52df2",
        name: "Max MusterMan",
        gebDatum: "",

        address:
          {
            plz: "35394",
            stadt: "Giessen",
            strasse: "Rödgener",
            telefon: "017637613768",
            title: "Privat"
          },

        careTeam: [
          {
            title: "Dr.Hans",
            name: "Hans",
            role: "admin",
            beschreibung: "Arzt",
            url: ""
          },
          {
            title: "Frau Pfeiffer",
            role: "Pflege",
            name: "Pfeiffer",
            beschreibung: "Pflegerin",
            url: ""
          }
        ],
        erkrankungen: [
          {
            title: "Diabetes mellitus,",
            beschreibung: "Diabetes mellitus, die Zuckerkrankheit, ist die häufigste Stoffwechselerkrankung mit mehr als 6 Millionen Erkrankten allein in Deutschland.",
          },
          {
            title: "Fieber, Grippe, Erkältung",
            beschreibung: "Zwischen Grippe und Erkältung wird oft nicht unterschieden. Doch werden die Erkrankungen durch verschiedene Erreger verursacht und sind für Betroffene unterschiedlich gefährlich .",
          },
        ],

        medikament: [
          {
            title: "Aspirine",
            beschreibung: "Acetyl...",
            url: "assets/medical/aspirine.PNG",
          },
          {
            title: "Voltaren",
            beschreibung: "Voltaren...",
            url: "assets/medical/voltarene.PNG",
          }
        ],
        zugriffsprotokoll: [
          {
            zeitpunkt: "11.01.2017 09:50",
            zugriffvon: "Dr Helmund",
            geaendereDaten: [
              {
                title: "EKG Messungen",
                beschreibung: "EKG Messungen von DR Müller"
              }
            ],
            betrachtenteDaten: [
              {
                title: "EKG Messungen",
                beschreibung: "EKG Messungen von DR Müller"

              }
            ],
            neueDaten: [
              {
                title: "",
                beschreibung: ""
              }
            ]

          }
        ]

      }
      ,
      {
        id: "2",
        url: "assets/medical/doctor3.jpg",
        title: "Herr Bastian",
        beschreibung: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        fallnr: "kffe412",
        name: "Bastian",
        gebDatum: "12.05.1985",

        address:
          {
            plz: "35394",
            stadt: "Giessen",
            strasse: "Credner",
            telefon: "017637613768",
            title: "Geschäftlich"
          },

        careTeam: [
          {
            title: "Dr Tabet",
            role: "Admin",
            name: "Tabet",
            beschreibung: "Chef Artz",
            url: ""
          },
          {
            title: "Dr Ngatchou",
            role: "Admin",
            name: "Ngatchou",
            beschreibung: "OberArzt",
            url: ""
          }
        ],
        erkrankungen: [
          {
            title: "Kollagenosen",
            beschreibung: "Der Begriff Kollagenosen umfasst zum Teil sehr unterschiedlich verlaufende Immunkrankheiten, die wie andere Rheuma-Erkrankungen zu chronischen Entzündungen führen",
          },
          {
            title: "Alzheimer",
            beschreibung: "Fast immer beginnt die Erkrankung mit Gedächtnisschwäche, zunächst vor allem Störungen von Kurzzeitgedächtnis und Konzentration, später auch Sprachstörungen."
          }
        ],
        medikament: [
          {
            title: "52Wochen",
            beschreibung: "Voltaren...",
            url: "assets/medical/52wochen.jpg",
          },
          {
            title: "Bauchweh",
            beschreibung: "Tablette mit 500 mg Acetylsalicylsäure ,50 Tabletten",
            url: "assets/medical/bauchweg.jpg",
          }
        ],
        zugriffsprotokoll: [
          {
            zeitpunkt: "11.01.2017 09:50",
            zugriffvon: "Dr Helmund",
            geaendereDaten: [
              {
                title: "EKG Messungen",
                beschreibung: "EKG Messungen von DR Müller"
              }
            ],
            betrachtenteDaten: [
              {
                title: "EKG Messungen",
                beschreibung: "EKG Messungen von DR Müller"

              }
            ],
            neueDaten: [
              {
                title: "",
                beschreibung: ""
              }
            ]

          }
        ]

      },
    ]
  }
]
