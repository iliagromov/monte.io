import { CalculatorBrandsType } from '.'

export const dummy = async (): Promise<CalculatorBrandsType> => {
  const itemsCount = 10

  const response: CalculatorBrandsType = {
    data: [
      {
        id: 2198,
        title: 'Acura',
      },
      {
        id: 6251,
        title: 'Alfa Romeo',
      },
      {
        id: 6496,
        title: 'Alpina',
      },
      {
        id: 11319,
        title: 'Aston Martin',
      },
      {
        id: 102,
        title: 'Audi',
      },
      {
        id: 99918505,
        title: 'Baojun ',
      },
      {
        id: 99918512,
        title: 'Beiben',
      },
      {
        id: 99918489,
        title: 'Beijing',
      },
      {
        id: 99918496,
        title: 'Bentley',
      },
      {
        id: 219,
        title: 'BMW',
      },
      {
        id: 99918495,
        title: 'Borgward',
      },
      {
        id: 9814,
        title: 'Buick',
      },
      {
        id: 99915221,
        title: 'BYD',
      },
      {
        id: 323,
        title: 'Cadillac',
      },
      {
        id: 99918499,
        title: 'Changan ',
      },
      {
        id: 99918493,
        title: 'Changfeng ',
      },
      {
        id: 10055,
        title: 'Chery',
      },
      {
        id: 326,
        title: 'Chevrolet',
      },
      {
        id: 337,
        title: 'Chrysler',
      },
      {
        id: 99918507,
        title: 'Chrysler Auman',
      },
      {
        id: 5953,
        title: 'Citroen',
      },
      {
        id: 6846,
        title: 'Dacia',
      },
      {
        id: 6873,
        title: 'Daewoo',
      },
      {
        id: 11578,
        title: 'Daihatsu',
      },
      {
        id: 99918518,
        title: 'DFSK',
      },
      {
        id: 465,
        title: 'Dodge',
      },
      {
        id: 99918500,
        title: 'Dongfeng',
      },
      {
        id: 6348,
        title: 'FAW',
      },
      {
        id: 99910075,
        title: 'Ferrari',
      },
      {
        id: 473,
        title: 'Fiat',
      },
      {
        id: 567,
        title: 'Ford',
      },
      {
        id: 99918486,
        title: 'Foton',
      },
      {
        id: 99918494,
        title: 'GAC',
      },
      {
        id: 9982,
        title: 'Geely',
      },
      {
        id: 8573,
        title: 'GMC',
      },
      {
        id: 99918470,
        title: 'GMW',
      },
      {
        id: 6165,
        title: 'Great Wall',
      },
      {
        id: 99918501,
        title: 'Guangqi Trumpchi ',
      },
      {
        id: 99918514,
        title: 'Haval',
      },
      {
        id: 7151,
        title: 'Hino',
      },
      {
        id: 7154,
        title: 'Holden',
      },
      {
        id: 668,
        title: 'Honda',
      },
      {
        id: 2796,
        title: 'Hummer',
      },
      {
        id: 678,
        title: 'Hyundai',
      },
      {
        id: 2897,
        title: 'Infiniti',
      },
      {
        id: 7246,
        title: 'Isuzu',
      },
      {
        id: 7257,
        title: 'Iveco',
      },
      {
        id: 99918497,
        title: 'Jac',
      },
      {
        id: 6103,
        title: 'Jaguar',
      },
      {
        id: 758,
        title: 'Jeep',
      },
      {
        id: 774,
        title: 'KIA',
      },
      {
        id: 99918502,
        title: 'Kowloon',
      },
      {
        id: 9821,
        title: 'KTM',
      },
      {
        id: 6374,
        title: 'Lada',
      },
      {
        id: 99910210,
        title: 'Lamborghini',
      },
      {
        id: 9823,
        title: 'Lancia',
      },
      {
        id: 6083,
        title: 'Land Rover',
      },
      {
        id: 99918491,
        title: 'Landwind',
      },
      {
        id: 863,
        title: 'Lexus',
      },
      {
        id: 11096,
        title: 'Lifan',
      },
      {
        id: 3095,
        title: 'Lincoln',
      },
      {
        id: 11677,
        title: 'Lotus',
      },
      {
        id: 99915435,
        title: 'Luxgen',
      },
      {
        id: 99918510,
        title: 'Lynk & co',
      },
      {
        id: 7421,
        title: 'Mahindra',
      },
      {
        id: 7433,
        title: 'Maruti',
      },
      {
        id: 10329,
        title: 'Maserati',
      },
      {
        id: 10159,
        title: 'Maybach',
      },
      {
        id: 877,
        title: 'Mazda',
      },
      {
        id: 99916175,
        title: 'McLaren',
      },
      {
        id: 5801,
        title: 'Mercedes',
      },
      {
        id: 11671,
        title: 'MG',
      },
      {
        id: 7675,
        title: 'Mini',
      },
      {
        id: 1090,
        title: 'Mitsubishi',
      },
      {
        id: 1130,
        title: 'Nissan',
      },
      {
        id: 1188,
        title: 'Opel',
      },
      {
        id: 11649,
        title: 'Pagani',
      },
      {
        id: 11612,
        title: 'Perodua',
      },
      {
        id: 1278,
        title: 'Peugeot',
      },
      {
        id: 6313,
        title: 'Pontiac',
      },
      {
        id: 6039,
        title: 'Porsche',
      },
      {
        id: 10252,
        title: 'Proton',
      },
      {
        id: 99918490,
        title: 'Qoros',
      },
      {
        id: 1376,
        title: 'Renault',
      },
      {
        id: 11695,
        title: 'Roewe',
      },
      {
        id: 10185,
        title: 'Rolls-Royce',
      },
      {
        id: 8164,
        title: 'Rover',
      },
      {
        id: 8168,
        title: 'Saab',
      },
      {
        id: 99918503,
        title: 'SAIC ',
      },
      {
        id: 99918515,
        title: 'Sany',
      },
      {
        id: 99918508,
        title: 'Saturn',
      },
      {
        id: 99915789,
        title: 'Scion',
      },
      {
        id: 8182,
        title: 'Seat',
      },
      {
        id: 99918511,
        title: 'Sino Truck',
      },
      {
        id: 1604,
        title: 'Skoda',
      },
      {
        id: 11289,
        title: 'Smart',
      },
      {
        id: 99918509,
        title: 'Soueast',
      },
      {
        id: 1667,
        title: 'SsangYong',
      },
      {
        id: 1676,
        title: 'Subaru',
      },
      {
        id: 1681,
        title: 'Suzuki',
      },
      {
        id: 8279,
        title: 'TATA',
      },
      {
        id: 1709,
        title: 'Toyota',
      },
      {
        id: 99918506,
        title: 'Troller',
      },
      {
        id: 99918516,
        title: 'UAZ',
      },
      {
        id: 99918517,
        title: 'UAZ',
      },
      {
        id: 99918487,
        title: 'Vauxhall ',
      },
      {
        id: 1973,
        title: 'Volvo',
      },
      {
        id: 9993,
        title: 'Vortex',
      },
      {
        id: 1774,
        title: 'VW',
      },
      {
        id: 99918498,
        title: 'Wey',
      },
      {
        id: 99918513,
        title: 'XCMG',
      },
      {
        id: 11373,
        title: 'Zotye',
      },
    ],
  }

  for (let i = 0; i < itemsCount; i++) {
    response.data.push({
      id: i,
      title: `brand ${i}`,
    })
  }

  return response
}
