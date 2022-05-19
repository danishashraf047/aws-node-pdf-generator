import React from 'react';

export type Article = {
  name: string;
  color: string;
  fabric: string;
  weight: string;
  articleNo: string;
};

export type ConfigurationPageProps = {
  texts: {[p: string]: string};
  snapshot: string;
  title: string;
  articles: Article[];
  note?: string;
};

// Create styles
const styles = {
  root: {
    margin: 0,
    width: '100%',
    height: '100%',
  },
  snapshot: {
    width: '100%',
    position: 'relative',
    marginTop: '-5vw',
  },
  details: {
    padding: '2.5vw 4.5vw',
  },
  snapshotImg: {
    width: '100%',
    height: 'auto',
    zIndex: -1,
  },
  logo: {
    position: 'absolute',
    top: '10vw',
    right: '5vw',
    width: '21vw',
  },
  configurationName: {
    margin: '1vw 0 2.5vw',
  },
  svg: {
    width: '100%',
    height: 'auto',
  },
  configurationItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '-1vw 0 0 -7vw',
    width: '107.5vw',
  },
  configurationItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '42vw',
    margin: '1vw 0 0 7vw',
  },
  configurationItemName: {
    margin: '1vw 0 0.75vw',
  },
  configurationItemContent: {
    borderTop: '0.2vw solid #001667',
    borderBottom: '0.2vw solid #B82121',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '14.8vw',
  },
  column: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  notLastColumn: {
    borderRight: '0.2vw solid #001667',
  },
  cell: {
    height: '3.7vw',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextCell: {
    borderTop: '0.15vw solid #D8D8D8',
  },
  mediumText: {
    color: '#001667',
    fontSize: '1.7vw',
    fontFamily: 'OptimaLTPro-Medium',
    lineHeight: '0.17vw',
  },
  smallText: {
    color: '#001667',
    fontFamily: 'OptimaLTPro-Medium',
    fontSize: '1.3vw',
    lineHeight: '0.19vw',
  },
  title: {
    color: '#001667',
    fontFamily: 'OptimaLTPro-Medium',
    fontSize: '2.4vw',
    lineHeight: '0.25vw',
  },
  subtitle: {
    color: '#001667',
    fontFamily: 'OptimaLTPro-Bold',
    fontSize: '1.7vw',
    lineHeight: '0.17vw',
  },
  configurationItemValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  configurationNote: {
    width: '100%',
    padding: '0.25vw 0',
  },
};

function createMewaLogo(): React.ReactElement {
   const polygon = React.createElement(
    'POLYGON',
    { id: 'path-1', points: '128 39 -9.93944645e-15 39 -9.93944645e-15 0 128 0' },
    null,
  );
  const defs = React.createElement('DEFS', { key: 1 }, polygon);
  const iconPath = React.createElement(
    'PATH',
    {
      d: 'M15.1007639,17.5674553 C12.5100931,22.6750788 8.45909839,23.5288724 8.46611918,23.5470382 C6.37492729,22.0281737 5.95368,18.7088744 5.95769188,18.7199758 C13.841034,17.2263416 16.8830412,12.6011216 16.888056,12.0712852 C20.5498985,17.4604788 29.4612846,16.3927322 29.4612846,16.3927322 C29.577629,1.40391117 16.4206721,-0.244132506 15.0255412,0.025327177 C15.0255412,2.11136899 14.1248744,14.1744836 2.07419309,13.6496932 C1.87259617,9.56440181 4.75814008,3.67060199 12.9564147,3.33352509 C13.2392521,2.17696779 13.3144749,1.18491211 13.3054481,0.0576219705 C13.3054481,0.0576219705 -0.354999603,1.42106778 0.00707247009,16.3806217 C0.00707247009,16.3806217 15.3755777,18.3223461 16.4226781,1.45739943 C16.4296988,1.41097566 26.1865884,2.37275498 26.4834674,14.6064264 C22.8948417,14.6689976 19.1357112,13.3671137 16.8980857,6.75374556 C16.8980857,6.75374556 15.0145086,16.8166014 2.60777298,17.770307 C2.57868686,17.7713162 4.82834797,23.6953924 8.48617857,25.6028036 C11.7418183,24.6854297 14.4127267,20.7373911 14.6895464,20.4305906 C14.9773987,20.7484925 17.4276537,24.235321 20.9540953,25.6007852 C24.6129289,23.6943832 26.893682,17.7692978 26.8655989,17.7682886 C25.9940182,17.7309477 24.5216586,17.6219528 23.6781611,17.3928616 C23.682173,17.3817603 23.1887119,22.1079014 20.8066587,24.0839391 C20.8136795,24.0667825 18.2380533,23.7741109 15.1007639,17.5674553',
      id: 'path6157',
      fill: '#16397B',
      fillRule: 'nonzero',
    }
  );
  const iconShift = React.createElement(
    'G',
    {
      transform: 'translate(-0.000052, 13.397196)',
      id: 'g6155',
    },
    iconPath,
  );
  const icon = React.createElement(
    'G',
    {
      key: 'icon',
      id: 'g6147',
      transform: 'translate(64.000000, 19.500000) scale(-1, 1) rotate(-180.000000) translate(-64.000000, -19.500000)',
    },
    iconShift,
  );
  const letterMPath = React.createElement('PATH', {
    d:
      'M-8.34740561e-15,0 L0.203844119,0.719949654 C1.910539,6.85138901 3.09763122,13.1113908 4.09087169,19.3901825 L4.5005584,22 L10.522953,21.9772543 L17,21.9772543 L16.9090695,21.4600378 L16.7511903,20.6945968 L16.5233645,19.4129282 L16.1826251,19.4574305 C13.9503321,19.7462016 11.5881385,19.7788366 9.34085699,19.6829093 L8.86422148,19.6601636 L8.72732616,19.1656927 C8.19273497,17.2956037 7.83001234,15.3800234 7.45529889,13.4743325 L7.31840357,12.7543828 L9.34085699,12.7998741 L11.569153,12.8671222 L13.6375713,12.9343702 L14.4779286,12.9798615 L15.1374243,13.0016183 L15.0464939,12.5071474 L14.9095985,11.7871977 L14.7047552,10.5272858 L14.2501029,10.5727771 C12.132722,10.7606761 9.92341151,10.7596871 7.79503909,10.8200126 L6.88673367,10.8200126 L6.20525481,6.77128473 L5.70463763,3.86874045 L5.54475989,2.83430729 L5.47681185,2.47433246 L5.45382942,2.29434505 L6.15928995,2.29434505 C8.54546523,2.28643352 10.9596191,2.43081902 13.3417974,2.57520453 L14.7327338,2.67508766 L14.4919179,1.32814888 L14.2650914,0 L-8.34740561e-15,0',
    id: 'path6161',
  });
  const letterM = React.createElement(
    'G',
    {
      key: 'M',
      id: 'g6159',
      transform:
        'translate(74.500000, 15.000000) scale(-1, 1) rotate(-180.000000) translate(-74.500000, -15.000000) translate(66.000000, 4.000000)',
      fill: '#BD1933',
      fillRule: 'nonzero',
    },
    letterMPath,
  );
  const letterEPath = React.createElement('PATH', {
    d:
      'M0,0.255600996 L0.797281345,3.23181899 C2.49200501,9.52880512 4.20475765,15.8585082 5.39967805,22.2792052 L5.53589698,23 L8.81717045,23 L8.9764264,22.3027205 C10.2304418,17.5127578 11.5936326,12.7452881 13.1451261,8.04631935 L13.3965301,7.32552454 L16.653765,11.6748311 C18.9103917,14.6776316 21.1319621,17.8000533 23.2834198,20.8836238 L24.7417635,23 L28,23 L27.612377,21.2087482 C26.1169737,14.683766 24.8980147,8.10050676 24.3321052,1.41909673 L24.2409587,0.255600996 L19.1147201,0.255600996 L19.615525,2.51102418 C20.3997854,6.07307966 21.0207834,9.48484175 21.5526382,13.0929054 L21.8260776,15.0467194 L20.9827222,13.9997777 C17.8146307,9.96537162 14.9069576,5.74284317 12.1655518,1.39558144 L11.300161,0 L10.2524772,0 L9.97903774,1.34855085 C9.04153103,5.74284317 7.9577893,10.0430743 6.53850832,14.3024093 L6.08277589,15.6509602 L5.69615453,14.1398471 C4.70155607,9.93878912 3.77005902,5.75204481 3.07494187,1.4886202 L2.89365051,0.255600996 L0,0.255600996',
    id: 'path6165',
  });
  const letterE = React.createElement(
    'G',
    {
      key: 'E',
      id: 'g6163',
      transform:
        'translate(53.000000, 14.500000) scale(-1, 1) rotate(-180.000000) translate(-53.000000, -14.500000) translate(39.000000, 3.000000)',
      fill: '#BD1933',
      fillRule: 'nonzero',
    },
    letterEPath,
  );
  const letterWPath = React.createElement('PATH', {
    d:
      'M2.90541682,0 L2.55972696,3.30702149 C1.94742,8.66313045 1.22866894,14.0419851 0.391308755,19.3674368 L-4.50196881e-16,22 L2.62866218,21.9772543 L5.34957591,22 L5.39620856,20.9428212 C5.66383942,16.3996224 6.10482209,11.8653241 6.7333491,7.35673829 L6.8722333,6.54580599 L7.54029669,7.7612155 C9.45223533,11.305583 11.2709087,14.825227 12.9365053,18.4902454 L14.5737168,22 L17.8704423,22 L18.0093265,20.6273487 C18.3225763,17.0187 18.7280776,13.4525757 19.3241645,9.87557314 L19.8533437,6.47855794 L20.5457372,7.85120921 C22.6563714,12.1323384 24.6281215,16.4243459 26.4488224,20.8300818 L26.9100801,22 L30,22 L29.1697361,20.4256046 C26.3484608,14.9824688 23.6508634,9.46219545 21.0059811,3.93697743 L19.1386477,0 L15.887541,0 L15.7729869,1.14717253 C15.2772615,5.44412479 14.7217247,9.70053043 13.9968912,13.9688034 L13.8113743,14.8914861 L13.2122461,13.857053 C10.8481736,9.81228086 8.81154327,5.71311696 6.8722333,1.46165603 L6.22647248,0 L2.90541682,0',
    id: 'path6169',
  });
  const letterW = React.createElement(
    'G',
    {
      key: 'W',
      id: 'g6167',
      transform:
        'translate(100.000000, 15.000000) scale(-1, 1) rotate(-180.000000) translate(-100.000000, -15.000000) translate(85.000000, 4.000000)',
      fill: '#BD1933',
      fillRule: 'nonzero',
    },
    letterWPath,
  );
  const letterAPath = React.createElement('PATH', {
    d:
      'M8.26729635,9.0313059 L15.0917678,9.0313059 L14.9548353,10.5999553 C14.7323201,12.5728533 14.4604689,14.5375224 14.1302201,16.4949911 L13.8321906,18.1335868 L13.3972287,17.5246422 C11.7963274,15.1402952 10.4421058,12.7724061 9.00028767,10.295483 L8.26729635,9.0313059 Z M0,0 L1.19010404,1.89575134 C5.41890013,8.60751342 9.60742197,15.3460197 13.717409,22.1338998 L14.2450017,23 L16.7641559,23 L17.0611785,21.010644 C18.066021,14.568381 19.2581388,8.13126118 20.6113535,1.75585868 L21,0 L15.9395407,0 L15.916383,0.258184258 C15.7442106,2.28765653 15.5992233,4.32330054 15.321331,6.34145796 L15.2528647,6.94937388 L7.14465168,6.94937388 L6.8244714,6.36408766 C5.6816896,4.56708408 4.72114877,2.68470483 3.87035528,0.726207513 L3.57232584,0 L0,0',
    id: 'path6173',
  });
  const letterA = React.createElement(
    'G',
    {
      key: 'A',
      id: 'g6171',
      transform:
        'translate(117.500000, 14.500000) scale(-1, 1) rotate(-180.000000) translate(-117.500000, -14.500000) translate(107.000000, 3.000000)',
      fill: '#BD1933',
      fillRule: 'nonzero',
    },
    letterAPath,
  );
  const subtitlePath = React.createElement('PATH', {
    d:
      'M1.3927255,2.65874166 C1.23256206,1.81849812 1.03260648,0.968106698 0.834640494,0.126848362 C1.00276236,0.156277182 1.15994138,0.175558133 1.31314118,0.175558133 C1.46634099,0.175558133 1.61655638,0.156277182 1.7737354,0.126848362 C1.89510148,0.968106698 2.01845717,1.81849812 2.1796154,2.65874166 L2.49994227,4.34125834 C2.62827197,5.01507683 2.76654972,5.69092491 2.9137807,6.36575819 C3.57532531,6.36575819 4.42090865,6.32719629 4.94417551,6.25819078 C4.93422747,6.35459553 4.93522228,6.46317773 4.95412355,6.56059727 C4.97501443,6.6671499 5.01182218,6.76558423 5.06156238,6.87416643 C4.2318959,6.84372282 3.40421903,6.82342708 2.57952658,6.82342708 C1.75582893,6.82342708 0.934120886,6.84372282 0.116392059,6.87416643 C0.124350491,6.76558423 0.125345295,6.6671499 0.107438824,6.56973036 C0.0865479416,6.46317773 0.0457609806,6.35459553 -1.32534507e-15,6.25819078 C0.549131767,6.32719629 1.40864236,6.36575819 2.07018697,6.36575819 C1.96175334,5.69092491 1.84337167,5.01507683 1.71404716,4.34125834 L1.3927255,2.65874166 Z M6.25433228,2.66990432 C6.09516365,1.82864598 5.89321846,0.97723978 5.69326287,0.126848362 C6.2841764,0.156277182 6.86315228,0.175558133 7.44710219,0.175558133 C8.0320469,0.175558133 8.60405916,0.156277182 9.16413377,0.126848362 C9.16114935,0.215134822 9.17109739,0.322702233 9.18800906,0.409973905 C9.20492073,0.498260365 9.23973886,0.625108727 9.274557,0.713395187 C8.64783053,0.596694694 7.51673846,0.586546825 6.66220189,0.586546825 C6.70000444,0.83009568 6.78157836,1.31008988 6.92383532,2.05291389 C7.10190523,2.99057698 7.14866101,3.23615541 7.20337523,3.47057118 C7.66396945,3.47057118 8.86668739,3.45129023 9.51529955,3.38329951 C9.51430475,3.48071905 9.52425279,3.5771238 9.54215926,3.67657292 C9.56106053,3.77399246 9.59090465,3.88054509 9.6287072,3.9799942 C9.05371053,3.93026964 8.4130568,3.88054509 7.28096993,3.88054509 C7.32772572,4.12510873 7.42024248,4.66396057 7.51673846,5.17135402 C7.60925523,5.65134822 7.7037616,5.99434619 7.79229915,6.41345317 C9.03978327,6.41345317 9.49639828,6.34444767 10.2882622,6.28660481 C10.2882622,6.38402435 10.2972154,6.48245868 10.3161167,6.57987823 C10.335018,6.67729777 10.3628725,6.77471731 10.400675,6.87416643 C9.82965759,6.84372282 9.25963494,6.82342708 8.68563308,6.82342708 C8.11063641,6.82342708 7.54857219,6.84372282 6.97954434,6.87416643 C6.85917307,6.04204117 6.73581738,5.19266454 6.57565395,4.35039142 L6.25433228,2.66990432 Z M14.3182129,4.19411424 C13.9222809,5.18251667 13.5979749,6.00246448 13.3433051,6.87416643 C13.1652352,6.84372282 12.9901497,6.82342708 12.816059,6.82342708 C12.6449527,6.82342708 12.475836,6.84372282 12.308709,6.87416643 C12.7931785,5.74775297 13.2478039,4.61423601 13.6954656,3.49086692 C12.7623396,2.36546825 11.8083226,1.23195129 10.8413732,0.126848362 C10.9617445,0.156277182 11.0890794,0.175558133 11.2044766,0.175558133 C11.3188791,0.175558133 11.4402451,0.156277182 11.5496736,0.126848362 C12.2559844,1.1152508 13.0090509,2.10162366 13.8486655,3.09002609 C14.3032908,2.10162366 14.5937736,1.1152508 14.9141005,0.126848362 C15.1011236,0.156277182 15.2781987,0.175558133 15.4602478,0.175558133 C15.6422969,0.175558133 15.8114136,0.156277182 15.9874939,0.126848362 C15.464227,1.34865178 14.9509082,2.58263265 14.4684283,3.82270223 C15.3189857,4.86793273 16.2242572,5.8461873 17.1394768,6.87416643 C17.0181108,6.84372282 16.8907759,6.82342708 16.7743838,6.82342708 C16.6599813,6.82342708 16.5386153,6.84372282 16.4301816,6.87416643 C15.6999956,5.86648304 15.0812275,5.08306756 14.3182129,4.19411424 M19.9587512,2.65874166 C19.7985877,1.81849812 19.5986321,0.968106698 19.3996714,0.126848362 C19.5677932,0.156277182 19.7249722,0.175558133 19.8791669,0.175558133 C20.0323667,0.175558133 20.1815872,0.156277182 20.3387663,0.126848362 C20.4611271,0.968106698 20.5844828,1.81849812 20.7446463,2.65874166 L21.0649731,4.34125834 C21.1942976,5.01507683 21.3315806,5.69092491 21.4798064,6.36575819 C22.1403562,6.36575819 22.9869343,6.32719629 23.5102012,6.25819078 C23.5002531,6.35459553 23.5012479,6.46317773 23.5201492,6.56059727 C23.5410401,6.6671499 23.5778478,6.76558423 23.627588,6.87416643 C22.7979216,6.84372282 21.9692499,6.82342708 21.1455522,6.82342708 C20.3208598,6.82342708 19.5011414,6.84372282 18.6814229,6.87416643 C18.6903762,6.76558423 18.6903762,6.6671499 18.6724697,6.56973036 C18.6525736,6.46317773 18.6127815,6.35459553 18.5650309,6.25819078 C19.1141626,6.32719629 19.974668,6.36575819 20.6352178,6.36575819 C20.527779,5.69092491 20.4074077,5.01507683 20.279078,4.34125834 L19.9587512,2.65874166 Z M24.8183683,2.65874166 C24.6582049,1.81849812 24.4582493,0.968106698 24.2592885,0.126848362 C24.4284052,0.156277182 24.5845894,0.175558133 24.7377892,0.175558133 C24.8919838,0.175558133 25.0402096,0.156277182 25.1993782,0.126848362 C25.3217391,0.968106698 25.4441,1.81849812 25.6042634,2.65874166 L25.9245903,4.34125834 C26.0847537,5.18251667 26.2857041,6.0318933 26.4836701,6.87416643 C26.3155483,6.84372282 26.1583692,6.82342708 26.0051694,6.82342708 C25.8519696,6.82342708 25.7017542,6.84372282 25.54557,6.87416643 C25.4232091,6.0318933 25.2988586,5.18251667 25.1386952,4.34125834 L24.8183683,2.65874166 L24.8183683,2.65874166 Z M28.3459431,2.65874166 C28.1857796,1.81849812 27.985824,0.968106698 27.7868633,0.126848362 C28.38673,0.156277182 28.9746591,0.175558133 29.5685571,0.175558133 C30.1535018,0.175558133 30.7444153,0.156277182 31.324386,0.126848362 C31.3134432,0.224267904 31.3114536,0.322702233 31.3313496,0.420121774 C31.3502509,0.518556103 31.3870587,0.616990432 31.4348093,0.713395187 C30.4529378,0.586546825 29.6650531,0.586546825 28.7657503,0.586546825 C28.9388462,1.54450565 29.1388018,2.69831835 29.452165,4.34125834 C29.6123285,5.18251667 29.8122841,6.0318933 30.0112448,6.87416643 C29.843123,6.84372282 29.685944,6.82342708 29.5327441,6.82342708 C29.3785495,6.82342708 29.2303238,6.84372282 29.0721499,6.87416643 C28.949789,6.0318933 28.8264334,5.18251667 28.6662699,4.34125834 L28.3459431,2.65874166 Z M33.3627393,2.13003769 L35.7492739,2.13003769 L35.8646711,2.73688026 L33.4781365,2.73688026 L33.3627393,2.13003769 Z M39.3325576,7 C38.7257272,4.92679037 37.8403517,2.28935923 37.0942488,0.126848362 C37.2136253,0.156277182 37.3230537,0.175558133 37.4384509,0.175558133 C37.5528534,0.175558133 37.6543234,0.156277182 37.7647466,0.126848362 C37.9855931,1.23195129 38.6948883,3.55885764 39.1853266,5.17135402 L39.2052227,5.17135402 C39.7165519,3.48071905 40.2776214,1.79921716 40.7153351,0.175558133 L40.8028778,0.175558133 C41.8951725,1.93519861 43.0819736,3.5385619 44.2647955,5.17135402 L44.2846916,5.17135402 C44.1663099,3.49898521 43.993214,1.87634097 43.7922636,0.126848362 C43.9524271,0.156277182 44.0986632,0.175558133 44.2528578,0.175558133 C44.4060576,0.175558133 44.546325,0.156277182 44.693556,0.126848362 C44.8129325,2.36546825 45.0268153,4.49652073 45.2168228,7 L45.0924724,7 C43.8101701,5.19266454 41.7489364,2.37561612 41.2197007,1.61249638 C40.5909846,3.44012757 40.0169827,5.16120615 39.4957055,7 L39.3325576,7 Z M50.4892837,7 C49.0726829,4.69338939 47.64116,2.4162076 46.179793,0.126848362 C46.3091176,0.156277182 46.428494,0.175558133 46.5438913,0.175558133 C46.6582937,0.175558133 46.7697118,0.156277182 46.8880934,0.126848362 C47.169623,0.743838794 47.7237287,1.73934474 48.3176267,2.74702812 C48.711569,2.75717599 49.097553,2.76732386 49.4905005,2.76732386 C49.9113026,2.76732386 50.3321046,2.75717599 50.7429587,2.74702812 C50.9220234,1.87634097 51.1756984,0.801681647 51.2314074,0.126848362 C51.4084825,0.156277182 51.5746147,0.175558133 51.7467158,0.175558133 C51.9198117,0.175558133 52.0789803,0.156277182 52.2461074,0.126848362 C51.9377182,1.17309365 51.1786828,4.73398086 50.6713328,7 L50.4892837,7 Z M50.6942133,3.19759351 C50.3380735,3.18744564 49.9719856,3.17729777 49.6168406,3.17729777 C49.2805969,3.17729777 48.9204779,3.19759351 48.5852289,3.19759351 L50.1023049,5.68077704 L50.6942133,3.19759351 Z M59.7170849,0 C59.7907004,0.440417512 60.1846427,2.59988402 60.3746503,3.59741954 C60.5198916,4.36155407 60.9844651,6.29675268 61.1505973,6.87416643 C61.0411689,6.84372282 60.9406937,6.82342708 60.8362393,6.82342708 C60.7297953,6.82342708 60.619372,6.84372282 60.5198916,6.87416643 C60.3070036,5.36822267 59.9458898,3.4614381 59.6106408,1.7109307 C58.6725407,2.91345317 57.0032598,5.26978834 55.7706977,7 L55.6155083,7 C55.5607941,6.56059727 55.3807346,5.61278631 55.1459608,4.37880545 C54.8992495,3.09002609 54.2983879,0.586546825 54.1342452,0.126848362 C54.2645646,0.156277182 54.383941,0.175558133 54.4993383,0.175558133 C54.6147355,0.175558133 54.724164,0.156277182 54.825634,0.126848362 C54.8505041,0.518556103 55.2046543,2.58263265 55.3658125,3.42186141 C55.5637785,4.45795883 55.6950926,5.04450565 55.7726873,5.40779936 C57.072896,3.62684836 58.4596527,1.74949261 59.5827863,0 L59.7170849,0 L59.7170849,0 Z M65.8928276,7 C64.4762269,4.69338939 63.0456988,2.4162076 61.5823422,0.126848362 C61.7126615,0.156277182 61.832038,0.175558133 61.9474353,0.175558133 C62.0608429,0.175558133 62.1732558,0.156277182 62.293627,0.126848362 C62.5731669,0.743838794 63.1272727,1.73934474 63.7221655,2.74702812 C64.1161078,2.75717599 64.5010969,2.76732386 64.8950393,2.76732386 C65.317831,2.76732386 65.7366434,2.75717599 66.1474974,2.74702812 C66.3245725,1.87634097 66.581232,0.801681647 66.6359462,0.126848362 C66.8120265,0.156277182 66.9791535,0.175558133 67.1512546,0.175558133 C67.3243505,0.175558133 67.4835191,0.156277182 67.6496514,0.126848362 C67.3412622,1.17309365 66.5832216,4.73398086 66.0748768,7 L65.8928276,7 Z M66.0987521,3.19759351 C65.7416174,3.18744564 65.3755296,3.17729777 65.0213794,3.17729777 C64.6851357,3.17729777 64.3240219,3.19759351 63.9887729,3.19759351 L65.5068437,5.68077704 L66.0987521,3.19759351 Z M75.8498201,5.68077704 C75.9254252,5.92432589 76.0855887,6.25819078 76.2129236,6.43273413 C75.810028,6.67729777 75.1723587,7 73.8761291,7 C71.6059866,7 69.8879602,5.71832415 69.4641737,3.49898521 C69.02646,1.21267034 70.2152507,4.4408921e-16 72.4953413,4.4408921e-16 C73.2434338,4.4408921e-16 74.445157,0.273992462 75.0291069,0.468831545 C75.0798419,0.733690925 75.1226185,1.00768339 75.1723587,1.26036532 C75.3723143,2.31574369 75.5115868,2.95100029 75.5861971,3.24630328 C75.4538882,3.2057118 75.307652,3.19759351 75.165395,3.19759351 C75.01319,3.19759351 74.8331305,3.21687446 74.7157437,3.24630328 C74.6560554,2.83531458 74.5963672,2.36546825 74.50584,1.904755 C74.4322245,1.50492896 74.3466714,1.1152508 74.2621131,0.723543056 C73.8990096,0.518556103 73.2165741,0.409973905 72.6714216,0.409973905 C70.8668473,0.409973905 70.0381756,1.58408234 70.4032686,3.49898521 C70.8161123,5.67164395 72.217791,6.63772108 73.8094773,6.63772108 C74.7764267,6.63772108 75.4320025,6.16077124 75.7354177,5.68077704 L75.8498201,5.68077704 L75.8498201,5.68077704 Z M77.9876538,2.66990432 C77.8284851,1.82864598 77.6275348,0.97723978 77.4265844,0.126848362 C78.0174979,0.156277182 78.5964738,0.175558133 79.1804237,0.175558133 C79.767358,0.175558133 80.3373806,0.156277182 80.8974553,0.126848362 C80.8954656,0.215134822 80.9044189,0.322702233 80.9223254,0.409973905 C80.939237,0.498260365 80.9710707,0.625108727 81.0078785,0.713395187 C80.3841364,0.596694694 79.2490652,0.586546825 78.3965182,0.586546825 C78.4343207,0.83009568 78.5148999,1.31008988 78.656162,2.05291389 C78.8362215,2.99057698 78.8829773,3.23615541 78.9376915,3.47057118 C79.3972909,3.47057118 80.6010037,3.45129023 81.2496158,3.38329951 C81.248621,3.48071905 81.2585691,3.5771238 81.2764756,3.67657292 C81.2953768,3.77399246 81.3232313,3.88054509 81.3630235,3.9799942 C80.787032,3.93026964 80.1473731,3.88054509 79.0152862,3.88054509 C79.062042,4.12510873 79.1545588,4.66396057 79.2520496,5.17135402 C79.3415819,5.65134822 79.4360883,5.99434619 79.5266154,6.41345317 C80.7711152,6.41345317 81.228725,6.34444767 82.0235733,6.28660481 C82.0225785,6.38402435 82.0325265,6.48245868 82.050433,6.57987823 C82.0683395,6.67729777 82.0971888,6.77471731 82.1359861,6.87416643 C81.5629791,6.84372282 80.994946,6.82342708 80.4199494,6.82342708 C79.8439579,6.82342708 79.2808989,6.84372282 78.7128658,6.87416643 C78.5934894,6.04204117 78.4691389,5.19266454 78.3089754,4.35039142 L77.9876538,2.66990432 Z M84.9174579,7 C84.3126171,4.92679037 83.4272416,2.28935923 82.6801439,0.126848362 C82.80151,0.156277182 82.9099436,0.175558133 83.0263357,0.175558133 C83.1387485,0.175558133 83.2402185,0.156277182 83.3516365,0.126848362 C83.5704934,1.23195129 84.282773,3.55885764 84.7722165,5.17135402 L84.7911178,5.17135402 C85.302447,3.48071905 85.8635165,1.79921716 86.302225,0.175558133 L86.3887729,0.175558133 C87.4810676,1.93519861 88.6688635,3.5385619 89.8506906,5.17135402 L89.8695919,5.17135402 C89.7541946,3.49898521 89.5781143,1.87634097 89.3781587,0.126848362 C89.5383222,0.156277182 89.6865479,0.175558133 89.8387529,0.175558133 C89.9929476,0.175558133 90.1322201,0.156277182 90.2794511,0.126848362 C90.3998224,2.36546825 90.6147,4.49652073 90.8047076,7 L90.6793623,7 C89.3950704,5.19266454 87.3358263,2.37561612 86.8065906,1.61249638 C86.1758849,3.44012757 85.6028778,5.16120615 85.0835902,7 L84.9174579,7 Z M93.0290891,2.66990432 C92.8659413,1.82864598 92.6659857,0.97723978 92.4670249,0.126848362 C93.0569436,0.156277182 93.6349247,0.175558133 94.2208642,0.175558133 C94.8028245,0.175558133 95.373842,0.156277182 95.9349114,0.126848362 C95.9329218,0.215134822 95.9428698,0.322702233 95.9617711,0.409973905 C95.977688,0.498260365 96.0115113,0.625108727 96.0453346,0.713395187 C95.4205978,0.596694694 94.2875161,0.586546825 93.4339743,0.586546825 C93.4707821,0.83009568 93.5533508,1.31008988 93.694613,2.05291389 C93.8746725,2.99057698 93.9194386,3.23615541 93.9751477,3.47057118 C94.4337523,3.47057118 95.6384598,3.45129023 96.2890616,3.38329951 C96.2890616,3.48071905 96.2960252,3.5771238 96.3139317,3.67657292 C96.3338278,3.77399246 96.3626771,3.88054509 96.4004796,3.9799942 C95.825483,3.93026964 95.1838344,3.88054509 94.0537372,3.88054509 C94.1014878,4.12510873 94.1940045,4.66396057 94.2905005,5.17135402 C94.3810277,5.65134822 94.4745392,5.99434619 94.5640716,6.41345317 C95.8115557,6.41345317 96.2671759,6.34444767 97.0620242,6.28660481 C97.0620242,6.38402435 97.0689879,6.48245868 97.088884,6.57987823 C97.1077852,6.67729777 97.1346449,6.77471731 97.1734423,6.87416643 C96.60143,6.84372282 96.0324022,6.82342708 95.4574055,6.82342708 C94.8824088,6.82342708 94.3203446,6.84372282 93.7513168,6.87416643 C93.6319403,6.04204117 93.506595,5.19266454 93.3484212,4.35039142 L93.0290891,2.66990432 Z M103.703335,0 C103.776951,0.440417512 104.169898,2.59988402 104.360901,3.59741954 C104.505147,4.36155407 104.969721,6.29675268 105.136848,6.87416643 C105.027419,6.84372282 104.926944,6.82342708 104.82249,6.82342708 C104.71704,6.82342708 104.604628,6.84372282 104.505147,6.87416643 C104.296238,5.36822267 103.93214,3.4614381 103.598881,1.7109307 C102.657796,2.91345317 100.988515,5.26978834 99.7559533,7 L99.6027535,7 C99.5490341,6.56059727 99.3669849,5.61278631 99.1322112,4.37880545 C98.8874895,3.09002609 98.2846383,0.586546825 98.1204956,0.126848362 C98.2518097,0.156277182 98.3701914,0.175558133 98.4845939,0.175558133 C98.5999911,0.175558133 98.7114092,0.156277182 98.8108896,0.126848362 C98.8367545,0.518556103 99.1918995,2.58263265 99.3520629,3.42186141 C99.5500289,4.45795883 99.6803482,5.04450565 99.7599325,5.40779936 C101.060141,3.62684836 102.444908,1.74949261 103.570032,0 L103.703335,0 Z M108.331163,2.65874166 C108.171,1.81849812 107.971044,0.968106698 107.772083,0.126848362 C107.942195,0.156277182 108.099374,0.175558133 108.252574,0.175558133 C108.405773,0.175558133 108.553004,0.156277182 108.712173,0.126848362 C108.833539,0.968106698 108.956895,1.81849812 109.116063,2.65874166 L109.43838,4.34125834 C109.565715,5.01507683 109.705982,5.69092491 109.852218,6.36575819 C110.512768,6.36575819 111.360341,6.32719629 111.882613,6.25819078 C111.872665,6.35459553 111.87366,6.46317773 111.893556,6.56059727 C111.912457,6.6671499 111.951255,6.76558423 112,6.87416643 C111.169339,6.84372282 110.341662,6.82342708 109.518959,6.82342708 C108.694267,6.82342708 107.873553,6.84372282 107.055824,6.87416643 C107.063783,6.76558423 107.063783,6.6671499 107.045876,6.56973036 C107.02598,6.46317773 106.985193,6.35459553 106.937443,6.25819078 C107.48558,6.32719629 108.34708,6.36575819 109.008625,6.36575819 C108.899196,5.69092491 108.77982,5.01507683 108.65149,4.34125834 L108.331163,2.65874166',
    id: 'path6177',
  });
  const subtitle = React.createElement(
    'G',
    {
      key: 'sub',
      id: 'g6175',
      transform:
        'translate(72.000000, 35.500000) scale(-1, 1) rotate(-180.000000) translate(-72.000000, -35.500000) translate(16.000000, 32.000000)',
      fill: '#16397B',
      fillRule: 'nonzero',
    },
    subtitlePath,
  );
  const g = React.createElement(
    'G',
    { id: 'PDF', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', key: 2 },
    [icon, letterM, letterE, letterW, letterA, subtitle],
  );

  return React.createElement(
    'SVG',
    { width: '128px', height: '39px', viewBox: '0 0 128 39', style: styles.svg },
    [defs, g],
  );
}

function createArticle(article: Article, index: number, dictionary: {[p:string]: string}): React.ReactElement {
  const attr1Text = React.createElement('TEXT', { style: styles.mediumText }, dictionary['color']);
  const attr2Text = React.createElement('TEXT', { style: styles.mediumText }, dictionary['material']);
  const attr3Text = React.createElement('TEXT', { style: styles.mediumText }, dictionary['weight']);
  const attr4Text = React.createElement('TEXT', { style: styles.mediumText }, dictionary['articleNo']);
  const attr1 = React.createElement('VIEW', { key: 1, style: [styles.cell] }, attr1Text);
  const attr2 = React.createElement(
    'VIEW',
    { key: 2, style: [styles.cell, styles.nextCell] },
    attr2Text,
  );
  const attr3 = React.createElement(
    'VIEW',
    { key: 3, style: [styles.cell, styles.nextCell] },
    attr3Text,
  );
  const attr4 = React.createElement(
    'VIEW',
    { key: 4, style: [styles.cell, styles.nextCell] },
    attr4Text,
  );
  const column1 = React.createElement(
    'VIEW',
    { key: 'col1', style: [styles.column, styles.notLastColumn] },
    [attr1, attr2, attr3, attr4],
  );
  const val1Text = React.createElement('TEXT', { style: styles.smallText }, article.color);
  const val1 = React.createElement(
    'VIEW',
    { style: [styles.cell, styles.configurationItemValue], key: 1 },
    val1Text,
  );
  const val2Text = React.createElement(
    'TEXT',
    { style: styles.smallText },
    article.fabric,
  );
  const val2 = React.createElement(
    'VIEW',
    { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 2 },
    val2Text,
  );
  const val3Text = React.createElement('TEXT', { style: styles.smallText }, article.weight);
  const val3 = React.createElement(
    'VIEW',
    { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 3 },
    val3Text,
  );
  const val4Text = React.createElement('TEXT', { style: styles.smallText }, article.articleNo);
  const val4 = React.createElement(
    'VIEW',
    { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 4 },
    val4Text,
  );
  const column2 = React.createElement('VIEW', { key: 'col2', style: styles.column }, [
    val1,
    val2,
    val3,
    val4,
  ]);
  const title = React.createElement(
    'TEXT',
    { key: 'title', style: [styles.configurationItemName, styles.subtitle] },
    article.name,
  );
  const content = React.createElement('VIEW', { key: 'content', style: styles.configurationItemContent }, [
    column1,
    column2,
  ]);
  return React.createElement('VIEW', { key: `article-${index}`, style: styles.configurationItem }, [
    title,
    content,
  ]);
}

function createNote(note: string, dictionary: {[p:string]: string}): React.ReactElement {
  const noteText = React.createElement(
    'TEXT',
    { style: styles.smallText },
    note,
  );
  const noteSpace = React.createElement('VIEW', { style: styles.configurationNote }, noteText);
  const noteTitle = React.createElement(
    'TEXT',
    { key: 'title', style: [styles.configurationItemName, styles.subtitle] },
    dictionary['note'],
  );
  const noteContent = React.createElement(
    'VIEW',
    { key: 'content', style: styles.configurationItemContent },
    noteSpace,
  );
  return React.createElement('VIEW', { key: 'note', style: styles.configurationItem }, [
    noteTitle,
    noteContent,
  ]);
}

function createSnapshotView(snapshot: string): React.ReactElement {
  const image = React.createElement('IMAGE', {
    source: snapshot,
    style: styles.snapshotImg,
    key: 'im',
  });
  const logo = React.createElement('VIEW', { style: styles.logo, key: 'log' }, createMewaLogo());
  return React.createElement('VIEW', { style: styles.snapshot, key: 'snap' }, [
    image,
    logo,
  ]);
}

function createDetailsView(title: string, articles: Article[], note: string, dictionary: {[p: string]: string}): React.ReactElement {
  const configurationName = React.createElement(
    'TEXT',
    { style: [styles.configurationName, styles.title], key: 'name' },
    title,
  );
  const items = [];
  for (let index = 0; index < articles.length; index++) {
    items.push(createArticle(articles[index], index, dictionary));
  }
  if (note) {
    items.push(createNote(note, dictionary));
  }
  const configurationItems = React.createElement(
    'VIEW',
    { key: 'items', style: styles.configurationItems },
    items,
  );
  return React.createElement('VIEW', { style: styles.details, key: 'det' }, [
    configurationName,
    configurationItems,
  ]);
}

function createConfigurationPage(props: ConfigurationPageProps): React.ReactElement {
  const { note, title, texts, articles, snapshot } = props;

  return React.createElement('VIEW', { style: styles.root }, [
    //createSnapshotView(snapshot),
    createDetailsView(title, articles, note, texts),
  ]);
}

export default createConfigurationPage;
