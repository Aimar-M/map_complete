const locations = [
  {
    "name": "CAREPLUS PHARMACY LTD",
    "latitude": -1.9440727,
    "longitude": 30.0618851
  },
  {
    "name": "HEALTHCARE PHARMACY",
    "latitude": -1.94618,
    "longitude": 30.0568895
  },
  {
    "name": "Kipharma Pharmacy, Nyarugenge",
    "latitude": -1.9462984,
    "longitude": 30.05718359999999
  },
  {
    "name": "Safecare Pharmacy",
    "latitude": -1.9443209,
    "longitude": 30.0586805
  },
  {
    "name": "Afia Pharma",
    "latitude": -1.969177499999999,
    "longitude": 30.0772754
  },
  {
    "name": "Agrovet Supply Company",
    "latitude": -1.9440727,
    "longitude": 30.0618851
  },
  {
    "name": "City Pharmacy Ltd",
    "latitude": -1.947453,
    "longitude": 30.0570472
  },
  {
    "name": "Health Link Pharmacy",
    "latitude": -1.946558799999999,
    "longitude": 30.0573587
  },
  {
    "name": "Pharmacie Umurava",
    "latitude": -1.9237635,
    "longitude": 30.05741879999999
  },
  {
    "name": "Pharmacie Conseil",
    "latitude": -1.9502335,
    "longitude": 30.05931269999999
  },
  {
    "name": "Pharmacie Conseil",
    "latitude": -1.9366119,
    "longitude": 30.0993425
  },
  {
    "name": "Pharmacie Unique",
    "latitude": -1.9579387,
    "longitude": 30.1064607
  },
  {
    "name": "Abacus Pharma Alam",
    "latitude": -1.9450175,
    "longitude": 30.0596491
  },
  {
    "name": "Akayezu Jean Baptiste",
    "latitude": -1.9440727,
    "longitude": 30.0618851
  },
  {
    "name": "Biopharmacia",
    "latitude": -1.9567157,
    "longitude": 30.0636349
  },
  {
    "name": "Pharmacie Continentale",
    "latitude": -1.960797599999999,
    "longitude": 30.1074967
  },
  {
    "name": "Kipharma Pharmacy, Nyarutarama (B4)",
    "latitude": -1.9262023,
    "longitude": 30.09730049999999
  },
  {
    "name": "Kipharma Pharmacy, Remera (B1)",
    "latitude": -1.9581439,
    "longitude": 30.1115895
  },
  {
    "name": "Fadhil pharmacy",
    "latitude": -1.9671956,
    "longitude": 30.058307
  },
  {
    "name": "Tercera Pharmacy",
    "latitude": -1.9524035,
    "longitude": 30.0914815
  },
  {
    "name": "Pharmacy",
    "latitude": -1.9479822,
    "longitude": 30.0499959
  },
  {
    "name": "Sunshine Pharmacy",
    "latitude": -1.9358332,
    "longitude": 30.0994723
  },
  {
    "name": "amigos pharmacy kigali Rwanda",
    "latitude": -1.980023900000001,
    "longitude": 30.13354959999999
  },
  {
    "name": "Atlas pharmacy ltd",
    "latitude": -1.9406561,
    "longitude": 30.0480576
  },
  {
    "name": "Jordan Pharmacy",
    "latitude": -1.9706983,
    "longitude": 30.0774601
  },
  {
    "name": "QL PHARMACY",
    "latitude": -1.9282769,
    "longitude": 30.0647816
  },
  {
    "name": "Vine Pharmacy, Gacuriro",
    "latitude": -1.9254177,
    "longitude": 30.09716159999999
  },
  {
    "name": "Bienveillance",
    "latitude": -1.9440727,
    "longitude": 30.0618851
  },
  {
    "name": "Dorrie Pharmacy",
    "latitude": -1.9583069,
    "longitude": 30.0540914
  },
  {
    "name": "Nathanya pharmacy Ltd",
    "latitude": -1.9640021,
    "longitude": 30.06017959999999
  },
  {
    "name": "Vine Pharmacy",
    "latitude": -1.9500467,
    "longitude": 30.1244316
  },
  {
    "name": "Pharmacie Tresor",
    "latitude": -1.9411463,
    "longitude": 30.05905540000001
  },
  {
    "name": "Pharmacie Exodus",
    "latitude": -1.991181,
    "longitude": 30.0463012
  },
  {
    "name": "Score Pharmacy",
    "latitude": -1.9456695,
    "longitude": 30.0680106
  },
  {
    "name": "Teta Pharmacy Kimironko",
    "latitude": -1.9496804,
    "longitude": 30.12491440000001
  },
  {
    "name": "Adrenaline Pharmacy Ltd",
    "latitude": -1.9683499,
    "longitude": 30.12141
  },
  {
    "name": "Exemplary Pharmacy",
    "latitude": -1.968518,
    "longitude": 30.057712
  },
  {
    "name": "Vitalis Pharmacy Ltd",
    "latitude": -1.9237635,
    "longitude": 30.05741879999999
  },
  {
    "name": "Akagera Agrovet Association",
    "latitude": -1.9440727,
    "longitude": 30.0618851
  },
  {
    "name": "Multiphar Rwanda Ltd",
    "latitude": -1.9443209,
    "longitude": 30.0586805
  },
  {
    "name": "Destophar Pharmacy",
    "latitude": -1.939185599999999,
    "longitude": 30.077243
  },
  {
    "name": "Medplus Pharmacy ltd",
    "latitude": -1.9273203,
    "longitude": 30.0563754
  },
  {
    "name": "Gilmed Pharmaceutical Wholesale",
    "latitude": -1.931460199999999,
    "longitude": 30.0719596
  },
  {
    "name": "Ngabo Pharmacy",
    "latitude": -1.9591891,
    "longitude": 30.1095885
  },
  {
    "name": "Nima Pharmacy",
    "latitude": -1.9658003,
    "longitude": 30.05993489999999
  },
  {
    "name": "Sana Pharmacy",
    "latitude": -1.9444865,
    "longitude": 30.0591321
  },
  {
    "name": "Miracle Pharmacy",
    "latitude": -1.9441156,
    "longitude": 30.0605976
  },
  {
    "name": "Belle Toile",
    "latitude": -1.9567157,
    "longitude": 30.0636349
  },
  {
    "name": "Pharmacie Sangwa",
    "latitude": -1.9567157,
    "longitude": 30.0636349
  },
  {
    "name": "ADVANCED PHARMACY",
    "latitude": -1.9152687,
    "longitude": 30.0669518
  },
  {
    "name": "Vine Pharmacy, Kigali Heights",
    "latitude": -1.9529828,
    "longitude": 30.0927954
  },
  {
    "name": "Pharmacie Marebe",
    "latitude": -1.9567157,
    "longitude": 30.0636349
  },
  {
    "name": "Pharmacie Fidele",
    "latitude": -1.945512299999999,
    "longitude": 30.06005919999999
  },
  {
    "name": "AFRI Health Care Pharmacy",
    "latitude": -1.946101,
    "longitude": 30.0568888
  },
  {
    "name": "Pharma Plus Pharmacy",
    "latitude": -1.9415781,
    "longitude": 30.04563910000001
  },
  {
    "name": "Sanophar Pharmacy",
    "latitude": -1.9408725,
    "longitude": 30.0474995
  },
  {
    "name": "Motley Healthcare Ltd",
    "latitude": -1.939394,
    "longitude": 30.0590673
  },
  {
    "name": "Peace Pharmacy",
    "latitude": -1.9558171,
    "longitude": 30.0535629
  },
  {
    "name": "Pharmacie Conseil",
    "latitude": -1.95087,
    "longitude": 30.09284349999999
  },
  {
    "name": "Shoppers (a mutti Pharmacy)",
    "latitude": -1.9705124,
    "longitude": 30.0775225
  }
]

export default locations;