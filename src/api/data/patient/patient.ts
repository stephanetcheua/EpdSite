import {Epd} from '../../../app/class/patient';
//
// export const EPD: Epd [] = [
//   {
//     id: 'epd',
//     beschreibung: 'Einrichtungsübergreifende Elektronische Patientenakten (eEPA) sollten von Beginn an als....endungen für Patienten. ',
//     title: 'E.Patientenakte',
//     logoUrl: 'assets/medical/doctor2.jpg',
//     hintergrundbilder: [
//       {
//         url: 'assets/medical/hospital3.jpg',
//         urlMobile: 'assets/medical/hospital3.jpg'
//       },
//       {
//         url: 'assets/medical/doctor2.jpg',
//         urlMobile: 'assets/medical/doctor2.jpg'
//       },
//     ],
//     patienten: [
//       {
//         id: '1',
//         url: 'assets/medical/doctor3.jpg',
//         title: 'Herr MusterMan',
//         beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt luptua.',
//         fallnr: 'fv52df2',
//         krankenkasse: 'AOK HESSEN',
//         geschlecht: 'M',
//         name: 'Max MusterMan',
//         gebDatum: '12.01.1980',
//         aufnahmeDatum: '14.02.2018',
//         entlassungDatum: '20.06.2018',
//         vitalparameter: [
//           {
//             id: '1',
//             datum: '29.06.2018',
//             diastolisch: '90',
//             systolisch: '122',
//             puls: '80 BPM',
//             temperatur: '37°C',
//             zucker: '100 mg',
//           },
//           {
//             id: '2',
//             datum: '30.06.2018',
//             diastolisch: '90',
//             systolisch: '120',
//             puls: '85 BPM',
//             temperatur: '36°C',
//             zucker: '100 mg',
//           },
//         ],
//         careTeam: [
//           {
//             id: '1',
//             title: 'Dr.Hans',
//             name: 'Hans',
//             role: 'admin',
//             beschreibung: 'Arzt',
//           },
//           {
//             id: '2',
//             title: 'Frau Pfeiffer',
//             role: 'Pflege',
//             name: 'Pfeiffer',
//             beschreibung: 'Pflegerin',
//           }
//         ],
//         erkrankungen:
//           {
//             title: 'Diabetes Mellitus,',
//             hauptdiagnose: 'Diabetes Mellitus',
//             nebendiagnose: 'Chronische Nierenkrankheit',
//             besonderheiten: 'Essentielle (primäre) Hypertonie',
//           },
//
//         medikamente: [
//           {
//             id: '1',
//             title: 'Aspirine',
//             menge: '200mg',
//             form: 'kapseln',
//             start: '12.06.2018',
//             ende: '12.06.2018',
//             erstellungsdatum: '',
//             modifierungsdatum: '',
//             erstellerkuerzel: ''
//           },
//           {
//             id: '2',
//             title: 'Voltaren',
//             menge: '200mg',
//             form: 'kapseln',
//             start: '12.06.2018',
//             ende: '12.06.2018',
//             erstellungsdatum: '',
//             modifierungsdatum: '',
//             erstellerkuerzel: ''
//           }
//         ],
//         zugriffsprotokoll: [
//           {
//             zeitpunkt: '11.06.2018 09:50',
//             zugriffvon: 'Dr Sigmund',
//             geaenderteDaten: [
//               {
//                 title: 'Vitaparameter',
//                 beschreibung: 'Eingabe von neuen Werte'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: '2',
//         url: 'assets/medical/doctor3.jpg',
//         title: 'Frau MusterFrau',
//         beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  et dolore magna aliquyam erat, sed diam voluptua.',
//         fallnr: 'kffe412',
//         name: 'MusterFrau',
//         aufnahmeDatum: '15.05.2018',
//         entlassungDatum: '25.07.2018',
//         gebDatum: '12.05.1985',
//         krankenkasse: 'TK Hessen',
//         geschlecht: 'W',
//         vitalparameter: [
//           {
//             id: '1',
//           datum: '26.06.2018',
//           diastolisch: '88',
//           systolisch: '120',
//           puls: '85 BPM',
//           temperatur: '35°C',
//           zucker: '110 mg',
//         },
//           {
//             id: '2',
//             datum: '30.06.2018',
//             diastolisch: '90',
//             systolisch: '119',
//             puls: '85 BPM',
//             temperatur: '35°C',
//             zucker: '110 mg',
//           }
//           ],
//         careTeam: [
//           {
//             id: '1',
//             title: 'Dr Sigmund',
//             role: 'Admin',
//             name: 'Sigmund',
//             beschreibung: 'Chef Artz',
//           },
//           {
//             id: '2',
//             title: 'Dr Ngatchou',
//             role: 'Admin',
//             name: 'Ngatchou',
//             beschreibung: 'OberArzt',
//           }
//         ],
//         erkrankungen:
//           {
//             title: 'Schizophrenie',
//             hauptdiagnose: 'Schizophrenie ',
//             nebendiagnose: 'Schizophrenie',
//             besonderheiten: 'keine',
//           },
//         medikamente: [
//           {
//             id: '1',
//             title: '52Wochen',
//             menge: '200mg',
//             form: 'kapseln',
//             start: '12.06.2018',
//             ende: '12.06.2018',
//             erstellungsdatum: '',
//             modifierungsdatum: '',
//             erstellerkuerzel: ''
//           },
//           {
//             id: '2',
//             title: 'Acetylsalicylsäure',
//             menge: '500 mg',
//             form: 'kapseln',
//             start: '12.06.2018',
//             ende: '12.06.2018',
//             erstellungsdatum: '',
//             modifierungsdatum: '',
//             erstellerkuerzel: ''
//           }
//         ],
//         zugriffsprotokoll: [
//           {
//             zeitpunkt: '11.01.2017 09:50',
//             zugriffvon: 'Dr Helmund',
//             geaenderteDaten: [
//               {
//                 title: 'EKG Messungen',
//                 beschreibung: 'EKG Messungen von DR Müller'
//               }
//             ]
//           }
//         ]
//
//       },
//     ]
//   }
// ];
