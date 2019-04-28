const EXCHANGES = Object.freeze(['bittrex', 'binance', 'huobi', 'kucoin', 'kraken']);
const EXCHANGE_ABRV = Object.freeze({
  bittrex: 'Bt',
  binance: 'Bn',
  huobi: 'Hb',
  kucoin: 'Ku',
  kraken: 'Kr',
  hitbtc: 'Ht'
});

const BITTREX = Object.freeze([
  'ABY',
  'ADA',
  'ADT',
  'ADX',
  'AEON',
  'AGRS',
  'AID',
  'AMP',
  'ANT',
  'ARDR',
  'ARK',
  'BAT',
  'BAY',
  'BCH',
  'BCPT',
  'BFT',
  'BITB',
  'BKX',
  'BLITZ',
  'BLK',
  'BLOCK',
  'BLT',
  'BNT',
  'BOXX',
  'BRK',
  'BRX',
  'BSD',
  'BSV',
  'BTM',
  'BURST',
  'CANN',
  'CBC',
  'CLOAK',
  'CLUB',
  'CMCT',
  'COVAL',
  'CRW',
  'CURE',
  'CVC',
  'DASH',
  'DCR',
  'DCT',
  'DGB',
  'DMD',
  'DMT',
  'DNT',
  'DOGE',
  'DOPE',
  'DTA',
  'DYN',
  'EBST',
  'EDG',
  'EDR',
  'EGC',
  'EMC',
  'EMC2',
  'ENG',
  'ENJ',
  'ETC',
  'ETH',
  'EXCL',
  'EXP',
  'FAIR',
  'FCT',
  'FLDC',
  'FLO',
  'FTC',
  'GAM',
  'GAME',
  'GBYTE',
  'GCR',
  'GEO',
  'GLC',
  'GNO',
  'GNT',
  'GRC',
  'GRS',
  'GTO',
  'GUP',
  'HMQ',
  'HYDRO',
  'IGNIS',
  'IHT',
  'INCNT',
  'INFX',
  'IOC',
  'ION',
  'IOP',
  'KMD',
  'KORE',
  'LBA',
  'LBC',
  'LOOM',
  'LRC',
  'LSK',
  'LTC',
  'LUN',
  'MANA',
  'MCO',
  'MEME',
  'MER',
  'MET',
  'MFT',
  'MLN',
  'MOBI',
  'MOC',
  'MONA',
  'MORE',
  'MUE',
  'MUSIC',
  'NAV',
  'NBT',
  'NEO',
  'NEOS',
  'NGC',
  'NLC2',
  'NLG',
  'NMR',
  'NXS',
  'NXT',
  'OCN',
  'OK',
  'OMG',
  'PAL',
  'PART',
  'PAX',
  'PAY',
  'PDC',
  'PINK',
  'PIVX',
  'PKB',
  'PMA',
  'POLY',
  'POT',
  'POWR',
  'PPC',
  'PRO',
  'PTOY',
  'QRL',
  'QTUM',
  'QWARK',
  'RADS',
  'RCN',
  'RDD',
  'REP',
  'RFR',
  'RISE',
  'RLC',
  'RVN',
  'RVR',
  'SALT',
  'SBD',
  'SC',
  'SEQ',
  'SHIFT',
  'SIB',
  'SLR',
  'SLS',
  'SNRG',
  'SNT',
  'SOLVE',
  'SPC',
  'SPHR',
  'SPND',
  'SRN',
  'START',
  'STEEM',
  'STORJ',
  'STORM',
  'STRAT',
  'SWT',
  'SYNX',
  'SYS',
  'THC',
  'TIX',
  'TKS',
  'TRX',
  'TUBE',
  'TUSD',
  'TX',
  'UBQ',
  'UKG',
  'UP',
  'UPP',
  'VEE',
  'VIA',
  'VIB',
  'VRC',
  'VTC',
  'WAVES',
  'WAX',
  'WINGS',
  'XCP',
  'XDN',
  'XEL',
  'XEM',
  'XHV',
  'XLM',
  'XMR',
  'XMY',
  'XNK',
  'XRP',
  'XST',
  'XVC',
  'XVG',
  'XWC',
  'XZC',
  'ZCL',
  'ZEC',
  'ZEN',
  'ZRX'
]);

const BINANCE = Object.freeze([
  'ADA',
  'ADX',
  'AE',
  'AGI',
  'AION',
  'AMB',
  'APPC',
  'ARDR',
  'ARK',
  'ARN',
  'AST',
  'ATOM',
  'BAT',
  'BCH',
  'BCD',
  'BCPT',
  'BLZ',
  'BNB',
  'BNT',
  'BQX',
  'BRD',
  'BSV',
  'BTG',
  'BTS',
  'BTT',
  'CDT',
  'CELR',
  'CMT',
  'CND',
  'CVC',
  'DASH',
  'DATA',
  'DCR',
  'DENT',
  'DGD',
  'DLT',
  'DNT',
  'DOCK',
  'EDO',
  'ELF',
  'ENG',
  'ENJ',
  'EOS',
  'ETC',
  'ETH',
  'EVX',
  'FET',
  'FUEL',
  'FUN',
  'GAS',
  'GNT',
  'GO',
  'GRS',
  'GTO',
  'GVT',
  'GXS',
  'HC',
  'HOT',
  'ICX',
  'INS',
  'IOST',
  'IOTA',
  'IOTX',
  'KEY',
  'KMD',
  'KNC',
  'LEND',
  'LINK',
  'LOOM',
  'LRC',
  'LSK',
  'LTC',
  'LUN',
  'MANA',
  'MITH',
  'NANO',
  'MCO',
  'MDA',
  'MFT',
  'MTH',
  'MTL',
  'NAS',
  'NAV',
  'NCASH',
  'NEBL',
  'NEO',
  'NPXS',
  'NULS',
  'NXS',
  'OAX',
  'OMG',
  'ONG',
  'ONT',
  'OST',
  'PAX',
  'PHX',
  'PIVX',
  'POA',
  'POE',
  'POLY',
  'POWR',
  'PPT',
  'QKC',
  'QLC',
  'QSP',
  'QTUM',
  'RCN',
  'RDN',
  'REN',
  'REP',
  'REQ',
  'RLC',
  'RVN',
  'SC',
  'SKY',
  'SNGLS',
  'SNM',
  'SNT',
  'STEEM',
  'STORJ',
  'STORM',
  'STRAT',
  'SYS',
  'THETA',
  'TNB',
  'TNT',
  'TRX',
  'TUSD',
  'VET',
  'VIA',
  'VIB',
  'VIBE',
  'WABI',
  'WAN',
  'WAVES',
  'WPR',
  'WTC',
  'XEM',
  'XLM',
  'XMR',
  'XRP',
  'XVG',
  'XZC',
  'YOYO',
  'ZEC',
  'ZEN',
  'ZIL',
  'ZRX'
]);

const HUOBI = Object.freeze([
  'ABT',
  'ACT',
  'ADA',
  'ADX',
  'AIDOC',
  'APPC',
  'AST',
  'ATOM',
  'BAT',
  'BCD',
  'BCH',
  'BCX',
  'BIFI',
  'BIX',
  'BLZ',
  'BOX',
  'BTG',
  'BTM',
  'BTS',
  'BTT',
  'BSV',
  'CHAT',
  'CMT',
  'CTXC',
  'CVC',
  'DASH',
  'DAT',
  'DBC',
  'DCR',
  'DGB',
  'DGD',
  'DTA',
  'EDU',
  'EKO',
  'ELA',
  'ELF',
  'ENG',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'EVX',
  'GAS',
  'GNT',
  'GNX',
  'GRS',
  'HC',
  'HIT',
  'HPT',
  'HT',
  'ICX',
  'IOST',
  'IOTA',
  'ITC',
  'KAN',
  'KNC',
  'LBA',
  'LET',
  'LINK',
  'LSK',
  'LTC',
  'LUN',
  'MANA',
  'MCO',
  'MDS',
  'MEET',
  'MTL',
  'MTN',
  'MTX',
  'NANO',
  'NAS',
  'NCASH',
  'NEO',
  'OCN',
  'OMG',
  'ONT',
  'OST',
  'PAI',
  'PAY',
  'PHX',
  'POLY',
  'POWR',
  'PRO',
  'QASH',
  'QSP',
  'QTUM',
  'QUN',
  'RCN',
  'RDN',
  'REN',
  'REQ',
  'RUFF',
  'SALT',
  'SBTC',
  'SMT',
  'SNC',
  'SNT',
  'SOC',
  'SRN',
  'STK',
  'STORJ',
  'SWFTC',
  'THETA',
  'TNB',
  'TNT',
  'TOPC',
  'TRX',
  'UTK',
  'VET',
  'WAN',
  'WAVES',
  'WAX',
  'WICC',
  'WPR',
  'WTC',
  'XEM',
  'XLM',
  'XRP',
  'XTZ',
  'XVG',
  'XZC',
  'YEE',
  'ZEC',
  'ZIL',
  'ZLA',
  'ZRX'
]);

const KUCOIN = Object.freeze([
  'ABT',
  'ABTC',
  'ACAT',
  'ACT',
  'ADB',
  'AGI',
  'AION',
  'AIX',
  'AMB',
  'ANKR',
  'AOA',
  'APH',
  'ARN',
  'ARY',
  'AXPR',
  'BAX',
  'BCD',
  'BCH',
  'BCPT',
  'BNTY',
  'BOS',
  'BPT',
  'BRD',
  'BSV',
  'BTG',
  'BTM',
  'BTT',
  'BU',
  'CAG',
  'CAN',
  'CAPP',
  'CAT',
  'CBC',
  'CFD',
  'CHP',
  'CHSB',
  'COFI',
  'COSM',
  'COV',
  'CPC',
  'CRPT',
  'CS',
  'CSP',
  'CV',
  'CVC',
  'CXO',
  'DACC',
  'DADI',
  'DASH',
  'DAT',
  'DATX',
  'DBC',
  'DCC',
  'DCR',
  'DEB',
  'DENT',
  'DGB',
  'DNA',
  'DOCK',
  'DRGN',
  'DTA',
  'DX',
  'EBTC',
  'EDN',
  'EDR',
  'EGT',
  'ELA',
  'ELEC',
  'ELF',
  'ELIX',
  'ENJ',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'ETN',
  'EXY',
  'FET',
  'FLIXX',
  'FOTA',
  'FTM',
  'GALA',
  'GAS',
  'GAT',
  'GLA',
  'GO',
  'GOD',
  'GRIN',
  'GVT',
  'HAV',
  'HC',
  'HKN',
  'HOTNOW',
  'HPB',
  'HST',
  'IHT',
  'ING',
  'INS',
  'IOG',
  'IOST',
  'IOTX',
  'ITC',
  'J8T',
  'JNT',
  'KCS',
  'KEY',
  'KICK',
  'KNC',
  'LA',
  'LALA',
  'LEND',
  'LOC',
  'LOCI',
  'LOKI',
  'LOOM',
  'LTC',
  'LYM',
  'MAN',
  'MANA',
  'MEE',
  'MHC',
  'MOD',
  'MTH',
  'MTN',
  'MVP',
  'MWAT',
  'NANO',
  'NEBL',
  'NEO',
  'NRG',
  'NULS',
  'NUSD',
  'OCN',
  'OLT',
  'OMG',
  'OMX',
  'ONION',
  'ONT',
  'OPEN',
  'PARETO',
  'PAY',
  'PBL',
  'PHX',
  'PLAY',
  'POLL',
  'POLY',
  'POWR',
  'PPT',
  'PRL',
  'PURA',
  'QKC',
  'QLC',
  'QSP',
  'QTUM',
  'R',
  'RBTC',
  'RDN',
  'REQ',
  'RHOC',
  'RIF',
  'SAY',
  'SHL',
  'SNC',
  'SNM',
  'SNOV',
  'SNT',
  'SOLVE',
  'SOUL',
  'SPF',
  'SPHTX',
  'SRN',
  'STK',
  'SUB',
  'TEL',
  'TFD',
  'TFL',
  'TIME',
  'TIO',
  'TKY',
  'TMT',
  'TNC',
  'TOMO',
  'TRAC',
  'TRTL',
  'TRX',
  'UKG',
  'USDC',
  'USE',
  'UT',
  'UTK',
  'VET',
  'VSYS',
  'WAN',
  'WAX',
  'WPR',
  'WTC',
  'XAS',
  'XLM',
  'XLR',
  'XMR',
  'ZIL',
  'ZINC',
  'ZPT',
  'ZRX'
]);

const KRAKEN = Object.freeze([
  'ATOM',
  'BCH',
  'BSV',
  'DASH',
  'DOGE',
  'EOS',
  'ETC',
  'ETH',
  'GNO',
  'LTC',
  'MLN',
  'REP',
  'XLM',
  'XMR',
  'XRP',
  'XTZ',
  'ZEC'
]);

const HITBTC = Object.freeze([
  '1ST',
  '8BT',
  'ABTC',
  'ACAT',
  'ACO',
  'ACT',
  'ADA',
  'ADH',
  'ADX',
  'AE',
  'AEON',
  'AIR',
  'AMB',
  'AMM',
  'AMP',
  'ANT',
  'ARCT',
  'ARDR',
  'ARN',
  'ART',
  'ATB',
  'ATL',
  'ATM',
  'ATS',
  'AUC',
  'AUTO',
  'AVH',
  'AVT',
  'AXPR',
  'B2G',
  'B2X',
  'BANCA',
  'BAR',
  'BAS',
  'BBC',
  'BCH',
  'BCN',
  'BCPT',
  'BDG',
  'BERRY',
  'BET',
  'BETR',
  'BEZ',
  'BGG',
  'BKB',
  'BMC',
  'BMH',
  'BMT',
  'BNT',
  'BOS',
  'BPTN',
  'BQX',
  'BSTN',
  'BSV',
  'BTCA',
  'BTCP',
  'BTG',
  'BTM',
  'BTX',
  'BUBO',
  'BUS',
  'C20',
  'CAS',
  'CAT',
  'CCT',
  'CDT',
  'CDX',
  'CGC',
  'CHAT',
  'CHSB',
  'CHX',
  'CL',
  'CLD',
  'CLOUT',
  'CLR',
  'CMCT',
  'CND',
  'CNX',
  'COSS',
  'COV',
  'CPAY',
  'CPG',
  'CPT',
  'CPY',
  'CRPT',
  'CRS',
  'CSM',
  'CSNO',
  'CTE',
  'CTR',
  'CTX',
  'CVC',
  'CVCOIN',
  'CVH',
  'CVT',
  'DADI',
  'DAN',
  'DASH',
  'DATA',
  'DATX',
  'DAXT',
  'DAY',
  'DBET',
  'DBIX',
  'DCN',
  'DCT',
  'DDF',
  'DGB',
  'DGD',
  'DICE',
  'DIM',
  'DLT',
  'DNT',
  'DOGE',
  'DOV',
  'DRG',
  'DRPU',
  'DRT',
  'DSH',
  'EBET',
  'EBTC',
  'ECH',
  'EDG',
  'EDO',
  'EET',
  'EJOY',
  'EKO',
  'ELE',
  'ELM',
  'EMC',
  'EMGO',
  'ENG',
  'ENJ',
  'EOS',
  'ERO',
  'ERT',
  'ETBS',
  'ETC',
  'ETH',
  'ETP',
  'EVN',
  'EVX',
  'EXN',
  'FACE',
  'FCN',
  'FDZ',
  'FLP',
  'FOTA',
  'FRD',
  'FREC',
  'FTX',
  'FUEL',
  'FUN',
  'FXT',
  'FYN',
  'FYP',
  'GAME',
  'GBX',
  'GET',
  'GNO',
  'GNT',
  'GRMD',
  'GRPH',
  'GUP',
  'GVT',
  'HAC',
  'HAND',
  'HBZ',
  'HC',
  'HDG',
  'HERO',
  'HGT',
  'HIRE',
  'HLW',
  'HPC',
  'HQX',
  'HRB',
  'HVN',
  'ICN',
  'ICO',
  'ICOS',
  'ICX',
  'IDH',
  'IFT',
  'IHT',
  'IML',
  'IND',
  'INDI',
  'INSUR',
  'IOTA',
  'IPL',
  'ITS',
  'IXT',
  'KBR',
  'KICK',
  'KIN',
  'KMD',
  'LAT',
  'LATX',
  'LDC',
  'LEND',
  'LIFE',
  'LNC',
  'LND',
  'LOC',
  'LRC',
  'LSK',
  'LTC',
  'LUC',
  'LUN',
  'MAID',
  'MAN',
  'MANA',
  'MCAP',
  'MCO',
  'MEK',
  'MESH',
  'MIPS',
  'MITH',
  'MITX',
  'MLD',
  'MNE',
  'MORPH',
  'MPK',
  'MRV',
  'MSP',
  'MTC',
  'MTH',
  'MTX',
  'MYB',
  'NANJ',
  'NANO',
  'NAVI',
  'NCT',
  'NDC',
  'NEBL',
  'NEO',
  'NET',
  'NEU',
  'NEXO',
  'NGC',
  'NOAH',
  'NTK',
  'NTO',
  'NXC',
  'NXT',
  'OAX',
  'OCN',
  'ODN',
  'OMG',
  'ONT',
  'OPT',
  'ORME',
  'OTN',
  'OTX',
  'PAT',
  'PAY',
  'PBKX',
  'PCL',
  'PHX',
  'PING',
  'PIX',
  'PKT',
  'PLBT',
  'PLR',
  'PLU',
  'PNT',
  'POE',
  'POLL',
  'PPC',
  'PPT',
  'PQT',
  'PRE',
  'PREMINE',
  'PRG',
  'PRO',
  'PTOY',
  'QAU',
  'QCN',
  'QTUM',
  'QVT',
  'R',
  'REP',
  'RKC',
  'RLC',
  'RNTB',
  'ROOTS',
  'RPM',
  'RVT',
  'SAN',
  'SBD',
  'SBTC',
  'SC',
  'SCC',
  'SCL',
  'SENT',
  'SETH',
  'SHIP',
  'SIG',
  'SISA',
  'SKIN',
  'SMART',
  'SMS',
  'SMT',
  'SNC',
  'SNGLS',
  'SNM',
  'SNT',
  'SOC',
  'SPC',
  'SPD',
  'STAK',
  'STAR',
  'STEEM',
  'STORM',
  'STQ',
  'STRAT',
  'STU',
  'STX',
  'SUB',
  'SUNC',
  'SUR',
  'SWFTC',
  'SWT',
  'TAAS',
  'TAU',
  'TBAR',
  'TBT',
  'TCN',
  'TEL',
  'TGT',
  'TIME',
  'TIO',
  'TKA',
  'TKN',
  'TKR',
  'TNT',
  'TRST',
  'TRUE',
  'TRX',
  'UET',
  'UGT',
  'ULTC',
  'UNC',
  'USD',
  'UTK',
  'UTNP',
  'UTT',
  'VET',
  'VERI',
  'VIB',
  'VIBE',
  'VIO',
  'VIT',
  'VME',
  'VOISE',
  'W3C',
  'WAVES',
  'WAX',
  'WEALTH',
  'WIKI',
  'WILD',
  'WINGS',
  'WIZ',
  'WLK',
  'WMGO',
  'WRC',
  'WTC',
  'WTT',
  'XAUR',
  'XDN',
  'XDNCO',
  'XDNICCO',
  'XEM',
  'XLC',
  'XLM',
  'XMC',
  'XMO',
  'XMR',
  'XRP',
  'XTZ',
  'XUC',
  'XVG',
  'YCC',
  'YOYOW',
  'ZAP',
  'ZEC',
  'ZPT',
  'ZRC',
  'ZRX',
  'ZSC'
]);

const EXCHANGE_COINS = new Set();
const SHARED_COINS = new Set();

[BITTREX, BINANCE, HUOBI, KUCOIN, KRAKEN, HITBTC].forEach(coins => {
  coins.forEach(coin => {
    if (EXCHANGE_COINS.has(coin)) return void SHARED_COINS.add(coin);

    EXCHANGE_COINS.add(coin);
  });
});

const CRYPTO = Object.freeze(Array.from(EXCHANGE_COINS).sort());

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const TIME = Object.freeze({ SECOND, MINUTE, HOUR });

const MAX_BACKOFF = HOUR;
const MIN_BACKOFF = 2 * SECOND;

exports.CRYPTO = CRYPTO;
exports.EXCHANGES = EXCHANGES;
exports.EXCHANGE_ABRV = EXCHANGE_ABRV;
exports.BITTREX = BITTREX;
exports.BINANCE = BINANCE;
exports.HUOBI = HUOBI;
exports.KUCOIN = KUCOIN;
exports.KRAKEN = KRAKEN;
exports.TIME = TIME;
exports.MAX_BACKOFF = MAX_BACKOFF;
exports.MIN_BACKOFF = MIN_BACKOFF;
