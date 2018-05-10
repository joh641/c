const CRYPTO = Object.freeze([
  'ABT',
  'ACT',
  'ADA',
  'ADX',
  'AION',
  'AMB',
  'APPC',
  'ARK',
  'ARN',
  'AST',
  'BAT',
  'BCD',
  'BCH',
  'BCPT',
  'BLZ',
  'BNT',
  'BRD',
  'BTG',
  'BTS',
  'BTM',
  'CHAT',
  'CLOAK',
  'CMT',
  'CVC',
  'DASH',
  'DAT',
  'DBC',
  'DGB',
  'DGD',
  'DNT',
  'DOGE',
  'DTA',
  'ELF',
  'ENG',
  'ENJ',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'EVX',
  'GAS',
  'GNO',
  'GNT',
  'GRS',
  'GVT',
  'HSR',
  'ICN',
  'ICX',
  'INS',
  'IOST',
  'IOTA',
  'ITC',
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
  'MCO',
  'MLN',
  'MOD',
  'MTH',
  'MTL',
  'MTN',
  'NANO',
  'NAV',
  'NEBL',
  'NEO',
  'NULS',
  'OCN',
  'OMG',
  'ONT',
  'OST',
  'PAY',
  'PIVX',
  'POE',
  'POWR',
  'PPT',
  'PRO',
  'QLC',
  'QSP',
  'QTUM',
  'RCN',
  'RDN',
  'REP',
  'REQ',
  'RLC',
  'RPX',
  'SALT',
  'SNM',
  'SNC',
  'SNT',
  'SRN',
  'STEEM',
  'STK',
  'STORJ',
  'STRAT',
  'SUB',
  'SYS',
  'TNB',
  'TNT',
  'TRX',
  'UKG',
  'UTK',
  'VEN',
  'VIA',
  'VIB',
  'WAN',
  'WAVES',
  'WAX',
  'WINGS',
  'WPR',
  'WTC',
  'XEM',
  'XLM',
  'XMR',
  'XRP',
  'XVG',
  'XZC',
  'ZEC',
  'ZIL',
  'ZRX'
]);

const EXCHANGES = Object.freeze(['bittrex', 'binance', 'huobi', 'kucoin']);
const EXCHANGE_ABRV = Object.freeze({
  bittrex: 'Bt',
  binance: 'Bn',
  huobi: 'Hb',
  kucoin: 'Ku'
});

const BITTREX = Object.freeze([
  '1ST',
  '2GIVE',
  'ABY',
  'ADA',
  'ADT',
  'ADX',
  'AEON',
  'AGRS',
  'AMP',
  'ANT',
  'ARDR',
  'ARK',
  'AUR',
  'BAT',
  'BAY',
  'BCH',
  'BCPT',
  'BCY',
  'BITB',
  'BLITZ',
  'BLK',
  'BLOCK',
  'BNT',
  'BRK',
  'BRX',
  'BSD',
  'BTG',
  'BURST',
  'BYC',
  'CANN',
  'CFI',
  'CLAM',
  'CLOAK',
  'CLUB',
  'COVAL',
  'CPC',
  'CRB',
  'CRW',
  'CURE',
  'CVC',
  'DASH',
  'DCR',
  'DCT',
  'DGB',
  'DMD',
  'DNT',
  'DOGE',
  'DOPE',
  'DTB',
  'DYN',
  'EBST',
  'EDG',
  'EFL',
  'EGC',
  'EMC',
  'EMC2',
  'ENG',
  'ENRG',
  'ERC',
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
  'GBG',
  'GBYTE',
  'GCR',
  'GEO',
  'GLD',
  'GNO',
  'GNT',
  'GOLOS',
  'GRC',
  'GRS',
  'GUP',
  'HMQ',
  'IGNIS',
  'INCNT',
  'INFX',
  'IOC',
  'ION',
  'IOP',
  'KMD',
  'KORE',
  'LBC',
  'LGD',
  'LMC',
  'LRC',
  'LSK',
  'LTC',
  'LUN',
  'MAID',
  'MANA',
  'MCO',
  'MEME',
  'MER',
  'MLN',
  'MONA',
  'MUE',
  'MUSIC',
  'NAV',
  'NBT',
  'NEO',
  'NEOS',
  'NLG',
  'NMR',
  'NXC',
  'NXS',
  'NXT',
  'OK',
  'OMG',
  'OMNI',
  'PART',
  'PAY',
  'PDC',
  'PINK',
  'PIVX',
  'PKB',
  'POT',
  'POWR',
  'PPC',
  'PRO',
  'PTC',
  'PTOY',
  'QRL',
  'QTUM',
  'QWARK',
  'RADS',
  'RBY',
  'RCN',
  'RDD',
  'REP',
  'RISE',
  'RLC',
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
  'SPHR',
  'SPR',
  'SRN',
  'START',
  'STEEM',
  'STORJ',
  'STRAT',
  'SWIFT',
  'SWT',
  'SYNX',
  'SYS',
  'THC',
  'TIX',
  'TKS',
  'TRST',
  'TRUST',
  'TRX',
  'TX',
  'UBQ',
  'UKG',
  'UNB',
  'VEE',
  'VIA',
  'VIB',
  'VOX',
  'VRC',
  'VRM',
  'VTC',
  'VTR',
  'WAVES',
  'WAX',
  'WINGS',
  'XCP',
  'XDN',
  'XEL',
  'XEM',
  'XLM',
  'XMG',
  'XMR',
  'XMY',
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
  'AION',
  'AMB',
  'APPC',
  'ARK',
  'ARN',
  'AST',
  'BAT',
  'BCH',
  'BCD',
  'BCPT',
  'BLZ',
  'BNB',
  'BNT',
  'BQX',
  'BRD',
  'BTG',
  'BTS',
  'CDT',
  'CHAT',
  'CLOAK',
  'CMT',
  'CND',
  'DASH',
  'DGD',
  'DLT',
  'DNT',
  'EDO',
  'ELF',
  'ENG',
  'ENJ',
  'EOS',
  'ETC',
  'ETH',
  'EVX',
  'FUEL',
  'FUN',
  'GAS',
  'GRS',
  'GTO',
  'GVT',
  'GXS',
  'HSR',
  'ICN',
  'ICX',
  'INS',
  'IOST',
  'IOTA',
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
  'NANO',
  'MCO',
  'MDA',
  'MOD',
  'MTH',
  'MTL',
  'NAV',
  'NCASH',
  'NEBL',
  'NEO',
  'NULS',
  'OAX',
  'OMG',
  'ONT',
  'OST',
  'PIVX',
  'POA',
  'POE',
  'POWR',
  'PPT',
  'QLC',
  'QSP',
  'QTUM',
  'RCN',
  'RDN',
  'REQ',
  'RLC',
  'RPX',
  'SALT',
  'SNGLS',
  'SNM',
  'SNT',
  'STEEM',
  'STORJ',
  'STRAT',
  'SUB',
  'SYS',
  'TNB',
  'TNT',
  'TRIG',
  'TRX',
  'VEN',
  'VIA',
  'VIB',
  'VIBE',
  'WABI',
  'WAN',
  'WAVES',
  'WINGS',
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
  'BAT',
  'BCD',
  'BCH',
  'BCX',
  'BIFI',
  'BLZ',
  'BTC',
  'BTG',
  'BTM',
  'BTS',
  'CHAT',
  'CMT',
  'CTXC',
  'CVC',
  'DASH',
  'DAT',
  'DBC',
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
  'HSR',
  'HT',
  'ICX',
  'IOST',
  'IOTA',
  'ITC',
  'KNC',
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
  'NAS',
  'NEO',
  'OCN',
  'OMG',
  'ONT',
  'OST',
  'PAY',
  'POWR',
  'PROPY',
  'QASH',
  'QSP',
  'QTUM',
  'QUN',
  'RCN',
  'RDN',
  'REQ',
  'RPX',
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
  'USDT',
  'UTK',
  'VEN',
  'WAN',
  'WAX',
  'WICC',
  'WPR',
  'XEM',
  'XRP',
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
  'APH',
  'ARN',
  'ARY',
  'AXP',
  'BCD',
  'BCH',
  'BCPT',
  'BHC',
  'BNTY',
  'BOS',
  'BPT',
  'BRD',
  'BTC',
  'BTCP',
  'BTG',
  'BTM',
  'CAG',
  'CAN',
  'CAPP',
  'CAT',
  'CFD',
  'CHSB',
  'COFI',
  'COV',
  'CS',
  'CV',
  'CVC',
  'CXO',
  'DADI',
  'DASH',
  'DAT',
  'DBC',
  'DEB',
  'DENT',
  'DGB',
  'DNA',
  'DOCK',
  'DRGN',
  'DTA',
  'EBTC',
  'ELEC',
  'ELF',
  'ELIX',
  'ENJ',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'ETN',
  'EVX',
  'EXY',
  'FLIXX',
  'FOTA',
  'GAS',
  'GAT',
  'GLA',
  'GOD',
  'GVT',
  'HAT',
  'HAV',
  'HKN',
  'HPB',
  'HSR',
  'HST',
  'IHT',
  'ING',
  'INS',
  'IOST',
  'ITC',
  'J8T',
  'JNT',
  'KCS',
  'KEY',
  'KICK',
  'KNC',
  'LA',
  'LEND',
  'LOCI',
  'LOOM',
  'LTC',
  'LYM',
  'MANA',
  'MEE',
  'MOD',
  'MTH',
  'MTN',
  'MWAT',
  'NEBL',
  'NEO',
  'NULS',
  'OCN',
  'OMG',
  'ONION',
  'ONT',
  'PARETO',
  'PAY',
  'PBL',
  'PLAY',
  'POE',
  'POLL',
  'POLY',
  'POWR',
  'PPT',
  'PRL',
  'PURA',
  'QLC',
  'QSP',
  'QTUM',
  'R',
  'RDN',
  'REQ',
  'RHOC',
  'RPX',
  'SAY',
  'SNC',
  'SNM',
  'SNOV',
  'SNT',
  'SPF',
  'SPHTX',
  'STK',
  'STX',
  'SUB',
  'TEL',
  'TFL',
  'TIME',
  'TIO',
  'TKY',
  'TNC',
  'TRAC',
  'UKG',
  'USDT',
  'UTK',
  'VEN',
  'WAN',
  'WAX',
  'WPR',
  'WTC',
  'XAS',
  'XLR',
  'XRB',
  'ZIL',
  'ZPT'
]);

const KRAKEN = Object.freeze([
  'BCH',
  'DASH',
  'DOGE',
  'EOS',
  'ETC',
  'ETH',
  'GNO',
  'ICN',
  'LTC',
  'MLN',
  'REP',
  'XLM',
  'XMR',
  'XRP',
  'ZEC'
]);

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const TIME = Object.freeze({ SECOND, MINUTE, HOUR });

exports.CRYPTO = CRYPTO;
exports.EXCHANGES = EXCHANGES;
exports.EXCHANGE_ABRV = EXCHANGE_ABRV;
exports.BITTREX = BITTREX;
exports.BINANCE = BINANCE;
exports.HUOBI = HUOBI;
exports.KUCOIN = KUCOIN;
exports.KRAKEN = KRAKEN;
exports.TIME = TIME;
