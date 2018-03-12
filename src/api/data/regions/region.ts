import {Region} from "../../../app/class/region";

export const REGIONS: Region [] = [
  {
    id: "wetzlar",
    title: "Elektronische Pflegedokumentation",
    beschreibung: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excep turi sint occaecati cupiditate non provident, similique sunt in culpa qui fficia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctioam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    logoUrl: "assets/medical/doctor2.jpg",
    photos: [
      {
        url: "assets/wetzlar/apothek-start.PNG",
        urlMobile: "assets/wetzlar/wetzlar1_foto1_s.jpg"
      },
      {
        url: "assets/wetzlar/apothek-start1.PNG",
        urlMobile: "assets/wetzlar/wetzlar1_foto2_s.jpg"
      },
      {
        url: "assets/wetzlar/apothek-start2.PNG",
        urlMobile: "assets/wetzlar/wetzlar2_foto1_s.jpg"
      },
      {
        url: "assets/wetzlar/apothek-start.PNG",
        urlMobile: "assets/wetzlar/wetzlar2_foto2_s.jpg"
      }
    ],
    hintergrundbilder: [
      {
        // url: "assets/wetzlar/Hintergrund_unscharf.jpg",
        // urlMobile: "assets/wetzlar/Hintergrund_unscharf.jpg"
         url: "assets/medical/hospital3.jpg",
         urlMobile: "assets/medical/hospital3.jpg",

      },
      {
        url: "assets/medical/hospital3.jpg",
        urlMobile: "assets/medical/hospital3.jpg"
      },

    ],
    map: {
      zoom: 13,
      latitude: 50.550695,
      longitude: 8.473572,
      markers: []
    },
    casinos: [
      {
        url: "/casino",
        id: "Gießen",
        title: "Herr Müller",
        logoUrl: "assets/wetzlar/apothele-logo.PNG",
        description: "Asum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaullaboris nisi ut aliquip.",
        oeffnungszeiten: [
          {
            description: "Öffnungszeiten Apotheke",
            times: [
              {
                day: "Mo - Sa",
                time: "10:00 - 24:00Uhr"
              },
              {
                day: "So",
                time: "11:00 - 24:00Uhr"
              }
            ]
          },
          {
            description: "Öffnungszeiten Bistro",
            times: [
              {
                day: "Mo - Sa",
                time: "06:00 - 24:00Uhr"
              },
              {
                day: "So",
                time: "11:00 - 24:00Uhr"
              }
            ]
          }
        ],
        zutrittskontrollen: [
          {
            id: "Aspirine",
            image: "assets/medical/doctor3.pnp",
            title: "Aspirine",
            description: "Acetylsalicylsäure, kurz ASS, ist ein weit verbreiteter schmerzstillender, ... Jahrhunderts unter dem Markennamen Aspirin von der Bayer AG hergestellt."
          },
          {
            id: "Voltarene",
            image: "assets/medical/doctor4.pnp",
            title: "Voltarene",
            description: "Voltaren lindert zuverlässig Muskel- und Gelenkschmerzen. Informieren Sie sich hier über schnelle Hilfe bei Rückenschmerzen, Hexenschuss oder Muskelkater!"
          }
        ],
        photos: [
          {
            url: "assets/wetzlar/apothek-start.PNG",
            urlMobile: "assets/wetzlar/wetzlar1_foto1_s.jpg"
          },
          {
            url: "assets/wetzlar/apothek-start1.PNG",
            urlMobile: "assets/wetzlar/wetzlar1_foto2_s.jpg"
          }
        ],
        hintergrundbilder: [
          {
            url: "assets/medical/hospital3.jpg",
            urlMobile: "assets/medical/hospital3.jpg"
          },
          {
            url: "assets/medical/hospital3.jpg",
            urlMobile: "assets/medical/hospital3.jpg"
          },

        ],
        address: {
          title: "Apotheke Mitte",
          strasse: "Langgasse 50",
          plz: "35578",
          stadt: "Giessen",
          telefon: "06441-47988",
          latitude: 50.557477,
          longitude: 8.497868
        }
      },
      {
        url: "/casino",
        id: "Gießen 2",
        title: "Hans Meier",
        logoUrl: "assets/medical/apothele-logo.PNG",
        description: "Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip.",
        oeffnungszeiten: [
          {
            description: "Öffnungszeiten Apotheke",
            times: [
              {
                day: "Mo - Sa",
                time: "10:00 - 24:00Uhr"
              },
              {
                day: "So",
                time: "11:00 - 24:00Uhr"
              }
            ]
          }
        ],
        zutrittskontrollen: [
          {
            id: "Imogas",
            image: "assets/wetzlar/imogas.PNG",
            title: "Imogas",
            description: "Das Mittel gegen Blähungen, Völlegefühl und Bauchschmerzen: Imogas. Es lindert die Symptome und ist sehr gut verträglich."
          },
          {
            id: "Scheissegal",
            image: "assets/wetzlar/sheisseegal.PNG",
            title: "Scheissegal",
            description: "Das Mittel gegen , Stress ,Wikstoff: bla mammegeImogas. Es lindert die Symptome und ist sehr gut verträglich."
          }
        ],
        photos: [
          {
            url: "assets/wetzlar/apothek-start.PNG",
            urlMobile: "assets/wetzlar/wetzlar2_foto1_s.jpg"
          },
          {
            url: "assets/wetzlar/apothek-start2.PNG",
            urlMobile: "assets/wetzlar/wetzlar2_foto2_s.jpg"
          }
        ],
        hintergrundbilder: [
          {
            url: "assets/medical/hospital3.jpg",
            urlMobile: "assets/medical/hospital3.jpg"
          },
          {
            url: "assets/medical/hospital3.jpg",
            urlMobile: "assets/medical/hospital3.jpg"
          },

        ],
        address: {
          title: "Apotheke ",
          strasse: "Marburger Straße 88",
          plz: "35578",
          stadt: "giessen",
          telefon: "06441-209036",
          latitude: 50.550695,
          longitude: 8.473572
        }
      },


    ]

  }
]
