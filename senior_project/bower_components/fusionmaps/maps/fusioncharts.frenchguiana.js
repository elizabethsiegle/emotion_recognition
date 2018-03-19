/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack core
 @id fusionmaps.FrenchGuiana.20.10-30-2012 06:16:47
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-frenchguiana",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"FrenchGuiana",revision:20,standaloneInit:!0,baseWidth:370,baseHeight:460,baseScaleFactor:10,entities:{"GF.SL.AY":{outlines:[["M",861,181,"L",861,166,858,166,858,156,841,142,827,134,777,134,777,168,737,168,737,256,762,
256,784,271,795,276,812,276,817,278,817,288,830,288,830,272,837,255,837,223,849,216,849,194,"Z"]],label:"Awala Yalimapo",shortLabel:"AY",labelPosition:[31,21.1],labelAlignment:["right","middle"],labelConnectors:[["M",310,211,"L",799,211]]},"GF.CY.RM":{outlines:[["M",2826,1129,"L",2818,1108,2773,1147,2773,1147,2773,1167,2777,1169,2777,1199,2790,1199,2790,1220,2822,1219,2830,1208,2830,1197,2837,1197,2837,1188,2860,1172,2860,1151,2848,1141,"Z"]],label:"Remire Montjoly",shortLabel:"RM",labelPosition:[308.1,
116.4],labelAlignment:["left","middle"],labelConnectors:[["M",3081,1164,"L",2817,1164]]},"GF.CY.MY":{outlines:[["M",2695,1237,"L",2695,1293,2706,1293,2706,1305,2719,1307,2719,1318,2764,1318,2777,1299,2788,1296,2788,1286,2798,1283,2802,1219,2790,1220,2790,1199,2777,1199,2777,1169,2773,1167,2773,1147,2752,1147,2744,1136,2698,1138,2698,1187,2690,1187,2688,1237,"Z"]],label:"Matoury",shortLabel:"MY",labelPosition:[310.6,125],labelAlignment:["left","middle"],labelConnectors:[["M",3106,1250,"L",2756,1250]]},
"GF.CY.CY":{outlines:[["M",2818,1092,"L",2791,1075,2777,1089,2762,1096,2752,1126,2738,1126,2753,1147,2773,1147,2818,1108,2818,1108,"Z"]],label:"Cayenne",shortLabel:"CY",labelPosition:[277.8,91],labelAlignment:["center","top"],labelConnectors:[["M",2778,910,"L",2778,1111]]},"GF.CY.MT":{outlines:[["M",2546,1067,"L",2518,1104,2515,1119,2498,1127,2488,1148,2488,1156,2479,1156,2479,1144,2443,1144,2416,1148,2416,1165,2412,1165,2409,1186,2399,1189,2399,1201,2390,1206,2387,1225,2387,1238,2399,1238,2399,1256,
2412,1256,2412,1331,2411,1332,2429,1351,2533,1397,2545,1410,2570,1412,2615,1408,2626,1384,2626,1352,2639,1333,2639,1296,2695,1293,2695,1237,2688,1237,2690,1187,2698,1187,2698,1139,2678,1139,2676,1125,2641,1125,2641,1137,2627,1137,2627,1148,2604,1148,2604,1137,2597,1137,2597,1080,2579,1080,2570,1067,"Z"]],label:"Montsinery Tonnegrande",shortLabel:"MT",labelPosition:[252.1,81],labelAlignment:["center","top"],labelConnectors:[["M",2521,810,"L",2521,1185]]},"GF.CY.MC":{outlines:[["M",2470,922,"L",2458,
940,2449,947,2449,966,2460,966,2458,997,2439,997,2428,986,2404,986,2404,975,2390,975,2390,1015,2399,1015,2399,1048,2409,1048,2409,1089,2416,1089,2416,1148,2443,1144,2479,1144,"Q",2477,1162,2488,1157,"L",2498,1127,2515,1119,2518,1104,2546,1067,2570,1067,2579,1080,2597,1080,2597,1137,2604,1137,2604,1148,2627,1148,2627,1137,2641,1137,2641,1125,2676,1125,2678,1139,2698,1139,2698,1138,2745,1136,2738,1126,2738,1126,2721,1089,2691,1053,2677,1044,2645,1007,2596,968,2545,916,2528,916,2521,909,2499,909,2481,
898,"Z"]],label:"Macouria",shortLabel:"MC",labelPosition:[269.6,62],labelAlignment:["left","middle"],labelConnectors:[["M",2696,620,"L",2656,660,2656,1065,2656,660]]},"GF.SL.MN":{outlines:[["M",1187,256,"L",1167,256,1161,248,1139,248,1139,235,1118,237,1118,229,1090,229,1090,218,1067,218,1067,208,1037,208,1037,196,1007,198,1007,187,979,187,979,176,958,176,958,166,861,166,861,181,849,194,849,216,837,223,837,255,830,272,830,288,817,288,817,278,812,276,795,276,784,271,762,256,737,256,737,304,748,304,
748,310,781,310,799,321,799,328,819,328,829,335,837,335,849,345,861,345,873,366,845,423,832,441,832,453,848,478,906,543,906,557,920,557,920,584,912,584,912,608,902,617,902,633,891,635,891,647,879,664,845,685,845,685,838,694,796,728,775,738,775,746,751,757,751,765,738,765,731,774,695,795,681,801,681,853,688,853,688,927,699,927,699,916,710,916,719,906,728,899,748,877,759,877,759,866,770,867,770,876,791,876,791,887,812,887,812,898,829,898,829,906,867,906,909,866,929,888,929,896,942,901,939,918,949,918,
949,937,958,937,958,953,968,955,968,964,991,1E3,997,1014,1008,1032,1008,1054,"Q",1014,1053,1018,1054,"L",1019,1245,1031,1249,1031,1358,1038,1366,1038,1549,1030,1558,1030,1574,1020,1582,1020,1608,1009,1608,1009,1634,999,1636,999,1659,987,1659,986,1688,979,1698,979,1713,969,1721,969,1745,957,1745,957,1770,951,1770,951,1799,939,1801,939,1857,954,1857,974,1869,988,1876,1018,1876,1018,1869,1029,1869,1029,1857,1038,1857,1038,1848,1049,1848,1049,1836,1060,1836,1060,1828,1082,1828,1082,1817,1107,1817,1107,
1809,1127,1809,1127,1799,1147,1799,1147,1788,1168,1788,1168,1778,1191,1778,1191,1768,1209,1768,1209,1757,1230,1757,1233,1750,1248,1748,1268,1737,1268,1775,1278,1775,1278,1846,1289,1846,1289,1857,1466,1856,1514,1805,1531,1795,1531,1742,1540,1742,1540,1668,1547,1668,1550,1598,1562,1598,1562,1532,1532,1516,1437,1426,1429,1418,1430,1376,1439,1374,1438,1259,1457,1248,1519,1185,1519,1148,1510,1148,1510,1102,1505,1109,1465,1097,1419,1097,1410,1086,1410,1020,1365,1020,1361,1004,1335,954,1328,947,1288,947,
1288,926,1301,915,1323,865,1321,850,1287,850,1280,847,1281,780,1293,762,1308,748,1308,723,1296,711,1282,702,1277,685,1276,651,1294,647,1294,606,1299,599,1300,544,1309,544,1310,489,1350,489,1350,474,1379,474,1379,465,1401,465,1401,446,1386,432,1386,424,1378,424,1378,412,1369,397,1369,370,1358,370,1358,347,1338,332,1333,326,1307,307,1284,304,1268,293,1250,285,1238,285,1238,278,1208,278,1208,265,1187,265,"Z"]],label:"Mana",shortLabel:"MN",labelPosition:[118.1,102.1],labelAlignment:["center","middle"]},
"GF.SL.SL":{outlines:[["M",799,328,"L",799,321,781,310,748,310,748,340,738,340,738,359,718,374,700,397,683,411,671,438,656,446,656,458,649,458,649,466,637,466,637,477,627,477,627,487,617,487,617,499,605,511,605,531,597,537,597,566,589,566,589,594,574,606,560,612,552,618,545,627,537,627,537,636,526,636,526,650,507,650,507,657,497,657,497,669,485,669,475,678,470,685,457,689,446,697,438,711,491,791,496,803,537,858,537,882,514,906,499,919,499,1013,491,1019,439,1071,439,1095,450,1108,457,1122,466,1135,
467,1135,472,1145,487,1165,487,1176,498,1180,500,1188,529,1230,540,1240,576,1255,594,1267,594,1275,589,1274,570,1274,570,1287,556,1287,556,1305,552,1305,552,1318,568,1318,568,1327,588,1327,588,1334,609,1334,609,1350,631,1350,631,1358,651,1358,651,1369,668,1369,668,1378,690,1378,700,1387,719,1396,727,1402,727,1411,759,1411,759,1397,780,1397,786,1387,810,1387,810,1448,799,1454,799,1474,790,1490,790,1510,779,1510,779,1615,788,1625,789,1677,800,1677,800,1687,808,1687,808,1698,837,1698,837,1711,848,1711,
848,1724,857,1724,857,1747,867,1747,867,1766,872,1766,872,1826,900,1826,901,1835,917,1835,919,1846,939,1846,939,1801,951,1799,951,1770,957,1770,957,1745,969,1745,969,1721,979,1713,979,1698,986,1688,987,1659,999,1659,999,1636,1009,1634,1009,1608,1020,1608,1020,1582,1030,1574,1030,1558,1038,1549,1038,1366,1031,1358,1031,1249,1019,1245,1018,1054,"Q",1014,1053,1008,1054,"L",1008,1032,997,1014,991,1E3,968,964,968,955,958,953,958,937,949,937,949,918,939,918,942,901,929,896,929,888,909,866,867,906,829,906,
829,898,812,898,812,887,791,887,791,876,770,876,770,867,759,866,759,877,748,877,728,899,719,906,710,916,699,916,699,927,688,927,688,853,681,853,681,801,695,795,731,774,738,765,751,765,751,757,775,746,775,738,796,728,838,694,845,685,846,685,879,664,891,647,891,635,902,633,902,617,912,608,912,584,920,584,920,557,906,557,906,543,848,478,832,453,832,441,845,423,873,366,861,345,849,345,837,335,829,335,819,328,"Z"]],label:"Saint Laurent",shortLabel:"SL",labelPosition:[73.8,107.8],labelAlignment:["center",
"middle"]},"GF.SL.AP":{outlines:[["M",437,711,"L",427,720,420,740,405,746,399,759,398,770,388,770,388,779,378,779,378,787,368,787,368,798,358,798,358,808,346,820,339,833,325,846,316,859,308,862,308,869,299,875,289,886,287,893,281,907,267,918,258,946,248,956,248,986,239,989,239,1016,228,1016,228,1056,217,1059,217,1087,208,1087,208,1116,199,1128,197,1342,209,1347,222,1359,232,1359,239,1367,246,1370,246,1388,253,1396,258,1396,258,1460,269,1460,269,1482,269,1487,277,1487,277,1507,399,1506,411,1518,440,
1518,446,1528,469,1528,469,1536,493,1536,493,1548,530,1548,530,1557,550,1560,561,1565,620,1565,620,1557,634,1557,652,1547,671,1547,671,1536,708,1536,719,1526,730,1526,745,1518,779,1518,779,1510,790,1510,790,1490,799,1474,799,1454,810,1448,810,1387,786,1387,780,1397,759,1397,759,1411,727,1411,727,1402,719,1396,700,1387,690,1378,668,1378,668,1369,651,1369,651,1358,631,1358,631,1350,609,1350,609,1334,588,1334,588,1327,568,1327,568,1318,552,1318,552,1305,556,1305,556,1287,570,1287,570,1274,589,1274,594,
1275,594,1267,576,1255,540,1240,529,1230,500,1188,498,1180,487,1176,487,1165,472,1145,466,1135,466,1135,457,1122,450,1108,439,1095,439,1071,491,1019,499,1013,499,919,514,906,537,882,537,858,496,803,491,791,"Z"]],label:"Apatou",shortLabel:"AP",labelPosition:[40.3,133.8],labelAlignment:["center","middle"]},"GF.SL.GS":{outlines:[["M",745,1518,"L",730,1526,719,1526,708,1536,671,1536,671,1547,652,1547,634,1557,620,1557,620,1565,561,1565,550,1560,530,1557,530,1548,493,1548,493,1536,469,1536,469,1528,446,
1528,440,1518,411,1518,399,1506,277,1507,277,1530,258,1551,250,1564,231,1588,231,1632,237,1632,237,1692,249,1692,249,1786,275,1786,275,1797,290,1797,297,1807,310,1816,310,1850,299,1858,298,1949,290,1950,290,2007,376,2071,393,2058,410,2058,410,2047,444,2047,444,2036,470,2036,475,2027,499,2027,499,2017,527,2017,527,2005,549,2005,560,1997,583,1997,583,1988,608,1988,608,1978,664,1978,685,1957,718,1957,718,1968,757,1968,757,1979,781,1979,786,1988,830,1986,830,1978,838,1977,850,1977,859,1965,891,1965,891,
1959,917,1959,917,1948,937,1948,945,1940,973,1940,973,1929,1010,1929,1010,1876,988,1876,974,1869,954,1857,939,1857,939,1846,919,1846,917,1835,901,1835,900,1826,872,1826,872,1766,867,1766,867,1747,857,1747,857,1724,848,1724,848,1711,837,1711,837,1698,808,1698,808,1687,800,1687,800,1677,789,1677,788,1625,779,1615,779,1518,"Z"]],label:"Grand Santi",shortLabel:"GS",labelPosition:[62,178.8],labelAlignment:["center","middle"]},"GF.SL.PA":{outlines:[["M",973,1929,"L",973,1940,945,1940,937,1948,917,1948,
917,1959,891,1959,891,1965,859,1965,850,1977,838,1977,830,1978,830,1986,786,1988,781,1979,757,1979,757,1968,718,1968,718,1957,685,1957,664,1978,608,1978,608,1988,583,1988,583,1997,560,1997,549,2005,527,2005,527,2017,499,2017,499,2027,475,2027,470,2036,444,2036,444,2047,410,2047,410,2058,393,2058,376,2071,377,2071,356,2120,347,2137,347,2162,393,2210,402,2224,402,2255,407,2272,410,2296,410,2309,437,2333,451,2350,465,2361,469,2368,527,2411,527,2431,538,2431,538,2456,602,2456,621,2473,628,2485,628,2505,
638,2505,660,2487,674,2479,683,2468,720,2468,720,2478,740,2478,740,2468,762,2448,795,2411,821,2411,821,2418,857,2418,857,2405,923,2338,932,2328,969,2328,985,2315,1001,2293,1001,2286,1022,2261,1032,2244,1032,2237,1040,2234,1040,2189,1030,2189,1030,2158,1039,2146,1046,2139,1046,2126,1039,2126,1039,2107,1031,2107,1031,2056,1038,2056,1038,2020,1049,2020,1049,1996,1045,1996,1037,1984,1010,1929,"Z"]],label:"Papaichton",shortLabel:"PA",labelPosition:[69.8,221.7],labelAlignment:["center","middle"]},"GF.SL.SA":{outlines:[["M",
1466,1856,"L",1289,1857,1289,1846,1278,1846,1278,1775,1268,1775,1268,1737,1248,1748,1233,1750,1230,1757,1209,1757,1209,1768,1191,1768,1191,1778,1168,1778,1168,1788,1147,1788,1147,1799,1127,1799,1127,1809,1107,1809,1107,1817,1082,1817,1082,1828,1060,1828,1060,1836,1049,1836,1049,1848,1038,1848,1038,1857,1029,1857,1029,1869,1018,1869,1018,1876,1010,1876,1010,1928,1010,1928,1037,1984,1045,1996,1049,1996,1049,2020,1038,2020,1038,2056,1031,2056,1031,2107,1039,2107,1039,2126,1046,2126,1046,2139,1039,2146,
1030,2158,1030,2189,1040,2189,1040,2221,1096,2218,1096,2206,1115,2206,1151,2239,1160,2246,1169,2258,1178,2266,1187,2277,1213,2301,1218,2306,1229,2316,1299,2316,1309,2334,1309,2349,1319,2360,1319,2374,1328,2389,1328,2416,1339,2424,1339,2439,1346,2452,1346,2467,1360,2474,1377,2489,1389,2505,1439,2556,1460,2574,1460,2620,1450,2628,1450,2656,1458,2668,1477,2668,1477,2679,1491,2679,1491,2710,1481,2710,1481,2775,1469,2778,1469,2868,1460,2884,1460,2917,1468,2925,1522,2925,1522,2935,1590,2935,1590,2946,1681,
2947,1686,2956,1688,2987,1688,2987,1680,2987,1680,3049,1714,3079,1727,3083,1743,3098,1757,3105,1771,3117,1782,3120,1782,3127,1790,3127,1798,3137,1798,3138,1810,3147,1820,3151,1820,3158,1831,3158,1831,3153,1839,3151,1839,3141,1853,3141,1853,3130,1860,3126,1859,3125,1846,3116,1835,3102,1807,3075,1794,3066,1779,3053,1779,2927,1801,2918,1821,2918,1821,2906,1828,2904,1828,2860,1818,2858,1818,2810,1808,2810,1808,2787,1848,2787,1848,2772,1861,2758,1861,2687,1807,2687,1807,2554,1797,2554,1757,2515,1738,2505,
1728,2494,1692,2466,1687,2458,1693,2448,1755,2401,1785,2387,1791,2365,1789,2315,1788,2315,1768,2306,1762,2286,1719,2214,1709,2192,1690,2169,1671,2134,1671,2114,1695,2072,1701,2050,1710,2050,1710,2027,1694,2013,1661,1966,1642,1946,1628,1921,1608,1899,1572,1849,1546,1818,1539,1805,1531,1796,1531,1795,1514,1805,"Z"]],label:"Saul",shortLabel:"SA",labelPosition:[145.5,223.8],labelAlignment:["center","middle"]},"GF.SL.MP":{outlines:[["M",1213,2301,"L",1187,2277,1178,2266,1169,2258,1160,2246,1151,2239,1115,
2206,1096,2206,1096,2218,1040,2221,1040,2234,1032,2237,1032,2244,1022,2261,1001,2286,1001,2293,985,2315,968,2328,932,2328,923,2338,857,2405,857,2418,821,2418,821,2411,795,2411,762,2448,740,2468,740,2478,720,2478,720,2468,683,2468,674,2479,660,2487,638,2505,639,2505,639,2526,650,2526,717,2642,731,2662,732,2669,750,2669,752,2652,766,2647,782,2687,782,2711,787,2711,787,2723,773,2732,763,2750,763,2821,757,2857,757,2926,745,2941,724,2954,709,2966,709,3064,695,3077,677,3088,638,3116,620,3127,613,3136,599,
3138,597,3146,575,3159,565,3169,550,3173,546,3187,538,3199,530,3224,528,3287,549,3289,559,3307,557,3447,570,3449,570,3625,560,3640,557,3657,548,3666,548,3677,540,3684,540,3690,529,3696,529,3707,518,3717,518,3725,510,3734,506,3749,499,3758,499,3766,487,3777,478,3789,473,3806,458,3824,454,3836,445,3848,438,3863,429,3872,427,3882,420,3894,420,3901,410,3910,408,3927,400,3931,400,3942,391,3944,391,3958,376,3968,376,3979,368,3985,368,3996,359,4007,354,4020,341,4039,339,4050,323,4080,318,4089,309,4097,230,
4097,230,4116,216,4128,216,4153,205,4158,205,4170,197,4177,197,4210,187,4215,167,4215,159,4208,92,4208,92,4225,152,4227,159,4232,159,4255,168,4255,168,4294,179,4309,179,4327,189,4336,204,4345,221,4360,229,4360,229,4367,242,4369,249,4379,366,4381,378,4396,396,4435,396,4446,539,4448,550,4436,567,4426,573,4417,587,4417,591,4435,600,4440,611,4459,621,4467,621,4475,709,4475,712,4467,722,4453,730,4437,738,4416,741,4396,763,4396,763,4409,779,4409,781,4401,793,4388,811,4374,819,4362,827,4357,858,4334,876,
4311,898,4293,928,4262,947,4248,1020,4248,1020,4236,1027,4228,1027,4200,1040,4200,1040,4184,1119,4184,1119,4212,1105,4212,1105,4244,1121,4259,1152,4259,1152,4268,1180,4268,1180,4279,1209,4279,1209,4286,1244,4286,1252,4279,1284,4279,1289,4288,1308,4288,1311,4297,1322,4299,1322,4306,1468,4306,1468,4297,1521,4297,1521,4287,1561,4242,1581,4213,1585,4204,1599,4204,1624,4218,1647,4218,1647,4199,1660,4199,1660,4190,1671,4163,1682,4146,1682,4135,1685,4130,1685,4107,1680,4097,1661,4087,1640,4068,1626,4059,
1619,4053,1620,3955,1608,3933,1598,3920,1586,3909,1586,3888,1601,3888,1601,3878,1619,3878,1619,3761,1628,3746,1639,3739,1646,3729,1659,3718,1664,3707,1677,3696,1684,3684,1697,3675,1697,3666,1709,3659,1720,3637,1732,3637,1732,3607,1717,3607,1717,3588,1801,3509,1817,3489,1902,3404,1902,3387,1890,3378,1890,3346,1900,3339,1909,3325,1909,3307,1920,3298,1920,3280,1929,3267,1929,3250,1939,3238,1939,3226,1924,3215,1918,3206,1902,3194,1888,3175,1889,3147,1871,3140,1860,3126,1853,3130,1853,3141,1839,3141,1839,
3151,1831,3153,1831,3158,1820,3158,1820,3151,1810,3147,1798,3138,1798,3137,1790,3127,1782,3127,1782,3120,1771,3117,1757,3105,1743,3098,1727,3083,1714,3079,1680,3049,1680,2987,1688,2987,1686,2956,1681,2947,1590,2946,1590,2935,1522,2935,1522,2925,1468,2925,1460,2917,1460,2884,1469,2868,1469,2778,1481,2775,1481,2710,1491,2710,1491,2679,1477,2679,1477,2668,1458,2668,1450,2656,1450,2628,1460,2620,1460,2574,1439,2556,1389,2505,1377,2489,1360,2474,1346,2467,1346,2452,1339,2439,1339,2424,1328,2416,1328,2389,
1319,2374,1319,2360,1309,2349,1309,2334,1299,2316,1229,2316,1218,2306,"Z"]],label:"Maripasoula",shortLabel:"MP",labelPosition:[117.5,334],labelAlignment:["center","middle"]},"GF.CY.CM":{outlines:[["M",2859,2831,"L",2849,2846,2842,2863,2829,2878,2829,2896,2800,2896,2800,2907,2776,2907,2771,2917,2751,2917,2751,2928,2731,2928,2731,2919,2701,2919,2701,2908,2679,2908,2679,2890,2672,2890,2672,2850,2658,2850,2658,2838,2598,2838,2598,2827,2546,2823,2528,2832,2512,2853,2508,2857,2508,2986,2466,3003,2445,3009,
2435,3009,2435,3020,2418,3020,2406,3022,2406,3058,2424,3069,2437,3098,2437,3114,2416,3129,2395,3137,2386,3145,2334,3180,2316,3186,2306,3186,2297,3174,2287,3145,2287,3133,2276,3133,2276,3116,2268,3116,2268,3099,2256,3089,2230,3089,2230,3079,2201,3077,2201,3065,2178,3065,2178,3076,2159,3076,2159,3090,2133,3090,2133,3099,2092,3099,2092,3086,2052,3086,2047,3076,2018,3076,2018,3064,1976,3064,1976,3056,1937,3055,1937,3049,1918,3049,1918,3084,1909,3084,1909,3114,1896,3114,1896,3146,1889,3148,1888,3175,1902,
3194,1918,3206,1924,3215,1939,3226,1939,3238,1929,3250,1929,3267,1920,3280,1920,3298,1909,3307,1909,3325,1900,3339,1890,3346,1890,3378,1902,3387,1902,3404,1817,3489,1801,3509,1717,3588,1717,3607,1732,3607,1732,3637,1720,3637,1709,3659,1697,3666,1697,3675,1684,3684,1677,3696,1664,3707,1659,3718,1646,3729,1639,3739,1628,3746,1619,3761,1619,3878,1601,3878,1601,3888,1586,3888,1586,3909,1598,3920,1608,3933,1620,3955,1619,4053,1626,4059,1640,4068,1661,4087,1680,4097,1685,4107,1685,4130,1682,4135,1682,4146,
1671,4163,1660,4190,1660,4199,1647,4199,1647,4218,1650,4237,1652,4279,1665,4279,1665,4287,1679,4287,1687,4298,1704,4294,1730,4316,1717,4327,1702,4346,1688,4356,1688,4399,1722,4397,1722,4388,1800,4389,1800,4377,1879,4377,1879,4385,1901,4385,1908,4398,1927,4401,1945,4407,1956,4418,2118,4419,2119,4409,2127,4409,2127,4392,2136,4392,2136,4382,2147,4382,2147,4368,2157,4365,2155,4349,2170,4344,2170,4331,2179,4331,2179,4322,2188,4317,2190,4298,2200,4296,2199,4290,2200,4277,2223,4277,2223,4271,2238,4271,2238,
4260,2258,4260,2258,4248,2280,4248,2280,4237,2298,4237,2298,4232,2319,4232,2319,4220,2332,4220,2332,4206,2341,4206,2362,4199,2385,4187,2396,4177,2406,4174,2424,4161,2439,4145,2447,4131,2481,4089,2492,4068,2504,4055,2518,4034,2539,4010,2547,3997,2547,3824,2558,3824,2558,3804,2567,3802,2567,3784,2580,3777,2580,3758,2587,3758,2587,3735,2597,3737,2597,3719,2606,3712,2607,3695,2615,3690,2615,3674,2625,3670,2625,3654,2640,3650,2650,3601,2666,3583,2666,3569,2681,3569,2681,3549,2741,3549,2741,3534,2728,3534,
2727,3509,2720,3509,2720,3500,2726,3500,2726,3479,2737,3479,2737,3454,2750,3454,2750,3427,2760,3411,2760,3397,2767,3397,2767,3386,2779,3385,2779,3356,2788,3349,2788,3329,2780,3329,2780,3307,2767,3299,2767,3257,2776,3257,2776,3235,2818,3180,2818,3177,2827,3174,2827,3159,2841,3149,2855,3127,2855,3107,2910,3104,2910,3098,2920,3086,2920,3069,2936,3046,2958,2997,2970,2987,2970,2974,2980,2966,2980,2961,2986,2940,2997,2931,2997,2920,3006,2918,3006,2895,3019,2890,3019,2875,3029,2869,3029,2856,3036,2853,3036,
2837,3050,2829,3050,2820,3079,2759,3086,2759,3086,2741,3101,2739,3101,2720,2990,2720,2977,2729,2974,2740,2963,2745,2956,2757,2940,2772,2920,2786,2920,2797,2901,2797,2901,2803,2874,2803,2859,2812,"Z"]],label:"Camopi",shortLabel:"CM",labelPosition:[215.3,360.9],labelAlignment:["center","middle"]},"GF.CY.SG":{outlines:[["M",3428,2087,"L",3384,2125,3370,2139,3364,2144,3364,2197,3347,2200,3343,2206,3284,2208,3284,2217,3247,2217,3240,2208,3240,2199,3149,2199,3148,2208,3128,2208,3128,2217,3107,2217,3107,
2227,3088,2227,3088,2240,3059,2240,3059,2254,3026,2254,3026,2246,3018,2246,3008,2233,2995,2227,2979,2227,2979,2255,2967,2255,2967,2285,2956,2285,2956,2309,2948,2309,2947,2324,2936,2336,2867,2338,2867,2347,2854,2360,2846,2380,2835,2388,2830,2405,2809,2427,2802,2440,2727,2438,2720,2449,2718,2517,2710,2517,2710,2571,2696,2590,2639,2632,2629,2645,2617,2647,2617,2657,2595,2657,2595,2647,2589,2647,2589,2635,2579,2635,2579,2682,2568,2682,2568,2746,2557,2746,2557,2786,2546,2786,2546,2823,2598,2827,2598,2838,
2658,2838,2658,2850,2672,2850,2672,2890,2679,2890,2679,2908,2701,2908,2701,2919,2731,2919,2731,2928,2751,2928,2751,2917,2771,2917,2776,2907,2800,2907,2800,2896,2829,2896,2829,2878,2842,2863,2849,2846,2859,2831,2859,2812,2874,2803,2901,2803,2901,2797,2920,2797,2920,2786,2940,2772,2956,2757,2963,2745,2974,2741,2977,2729,2990,2720,3100,2720,3114,2700,3120,2680,3129,2671,3129,2660,3137,2649,3139,2626,3152,2616,3152,2603,3157,2589,3157,2568,3170,2565,3170,2546,3231,2546,3231,2467,3244,2455,3255,2440,3268,
2429,3319,2377,3319,2358,3336,2341,3343,2333,3390,2286,3399,2275,3399,2247,3389,2247,3389,2228,3432,2206,3451,2190,3496,2161,3503,2153,3509,2152,3509,2143,3521,2143,3521,2134,3536,2134,3548,2119,3548,2095,3557,2095,3560,2004,3533,2010,3521,2023,3506,2036,3487,2045,3450,2078,"Z"]],label:"Saint Georges",shortLabel:"SG",labelPosition:[305.3,246.6],labelAlignment:["center","middle"]},"GF.CY.OU":{outlines:[["M",3430,1574,"L",3421,1572,3404,1564,3380,1548,3380,1654,3369,1665,3358,1668,3358,1675,3338,1675,
3338,1688,3307,1688,3307,1698,3296,1698,3296,1737,3287,1737,3287,1775,3278,1778,3278,1853,3289,1853,3289,1866,3300,1873,3300,1885,3306,1887,3306,1910,3318,1910,3318,1923,3328,1927,3328,1945,3339,1945,3339,1969,3348,1969,3348,1989,3339,2002,3339,2017,3328,2019,3328,2029,3307,2029,3301,2017,3239,2017,3239,2036,3228,2037,3228,2048,3187,2048,3187,2037,3179,2037,3179,2028,3148,2028,3148,2042,3123,2054,3115,2067,3114,2106,3126,2106,3126,2137,3137,2139,3139,2153,3139,2163,3147,2165,3149,2199,3240,2199,3240,
2208,3247,2217,3284,2217,3284,2208,3343,2206,3347,2200,3364,2197,3364,2144,3370,2139,3384,2125,3428,2087,3450,2078,3487,2045,3506,2036,3521,2023,3533,2010,3560,2004,3578,1980,3578,1950,3571,1950,3571,1908,3558,1908,3558,1889,3548,1889,3546,1869,3540,1869,3539,1806,3529,1806,3531,1766,3517,1766,3517,1733,3509,1728,3509,1698,3499,1698,3499,1668,3490,1668,3488,1607,3478,1607,3476,1599,3456,1599,3456,1586,3437,1586,3437,1579,3430,1579,"Z"]],label:"Ouanary",shortLabel:"OU",labelPosition:[341.6,183.2],
labelAlignment:["center","middle"]},"GF.CY.RK":{outlines:[["M",3099,1358,"L",3101,1348,3086,1348,3086,1339,3072,1339,3072,1329,3060,1329,3060,1319,3037,1319,3032,1306,3018,1306,3018,1298,3003,1295,2988,1290,2939,1264,2920,1264,2920,1289,2907,1302,2907,1328,2918,1328,2918,1375,2898,1375,2898,1389,2858,1389,2858,1504,2877,1531,2896,1546,2907,1560,2909,1585,2900,1585,2898,1634,2891,1634,2891,1776,2881,1776,2881,1754,2862,1754,2825,1773,2825,1786,2807,1786,2802,1774,2772,1774,2762,1778,2761,1807,2754,
1826,2754,1847,2730,1868,2662,1908,2637,1929,2541,1929,2534,1939,2504,1965,2488,1983,2467,2026,2458,2028,2458,2045,2450,2049,2442,2069,2428,2094,2417,2108,2340,2108,2336,2101,2282,2048,2187,2046,2157,2018,2157,2003,2128,2007,2128,2025,2099,2025,2099,2038,2080,2038,2080,2058,2059,2058,2059,2074,2049,2074,2047,2128,2039,2126,2039,2162,2028,2166,2028,2174,2010,2178,2010,2187,1991,2189,1991,2197,1971,2197,1973,2206,1958,2206,1958,2218,1941,2218,1941,2226,1935,2226,1919,2237,1908,2240,1908,2246,1891,2246,
1886,2256,1867,2260,1867,2267,1851,2273,1812,2301,1801,2304,1788,2315,1789,2315,1791,2365,1785,2387,1755,2401,1693,2448,1687,2458,1692,2466,1728,2494,1738,2505,1757,2515,1797,2554,1807,2554,1807,2687,1861,2687,1861,2758,1848,2772,1848,2787,1808,2787,1808,2810,1818,2810,1818,2858,1828,2860,1828,2904,1821,2906,1821,2918,1801,2918,1779,2927,1779,3053,1794,3066,1807,3075,1835,3102,1846,3116,1859,3125,1871,3140,1889,3147,1889,3148,1896,3146,1896,3114,1909,3114,1909,3084,1918,3084,1918,3049,1937,3049,1937,
3055,1976,3056,1976,3064,2018,3064,2018,3076,2047,3076,2052,3086,2092,3086,2092,3099,2133,3099,2133,3090,2159,3090,2159,3076,2178,3076,2178,3065,2201,3065,2201,3077,2230,3079,2230,3089,2256,3089,2268,3099,2268,3116,2276,3116,2276,3133,2287,3133,2287,3145,2297,3174,2306,3186,2316,3186,2334,3180,2386,3145,2395,3137,2416,3129,2437,3114,2437,3098,2424,3069,2406,3058,2406,3022,2418,3020,2435,3020,2435,3009,2445,3009,2466,3003,2508,2986,2508,2857,2512,2853,2528,2832,2546,2823,2546,2786,2557,2786,2557,2746,
2568,2746,2568,2682,2579,2682,2579,2635,2589,2635,2589,2647,2595,2647,2595,2657,2617,2657,2617,2647,2629,2645,2639,2632,2696,2590,2710,2571,2710,2517,2718,2517,2720,2449,2727,2438,2802,2440,2809,2427,2829,2405,2835,2388,2846,2380,2854,2360,2867,2347,2867,2338,2936,2336,2947,2324,2948,2309,2956,2309,2956,2285,2967,2285,2967,2255,2979,2255,2979,2227,2995,2227,3007,2233,3018,2246,3026,2246,3026,2254,3059,2254,3059,2240,3088,2240,3088,2227,3107,2227,3107,2217,3128,2217,3128,2208,3148,2208,3148,2199,3149,
2199,3147,2165,3139,2163,3139,2153,3137,2139,3126,2137,3126,2106,3114,2106,3115,2067,3123,2054,3148,2042,3148,2028,3179,2028,3179,2037,3187,2037,3187,2048,3228,2048,3228,2037,3239,2036,3239,2017,3301,2017,3307,2029,3328,2029,3328,2019,3339,2017,3339,2002,3348,1989,3348,1969,3339,1969,3339,1945,3328,1945,3328,1927,3318,1923,3318,1910,3306,1910,3306,1887,3300,1885,3300,1873,3289,1866,3289,1853,3278,1853,3278,1778,3287,1775,3287,1737,3296,1737,3296,1698,3307,1698,3307,1688,3338,1688,3338,1675,3358,1675,
3358,1668,3369,1665,3380,1654,3380,1533,3373,1533,3373,1508,3359,1508,3359,1479,3338,1479,3338,1475,3329,1469,3311,1469,3311,1459,3298,1459,3298,1449,3270,1449,3270,1439,3249,1439,3247,1431,3220,1431,3220,1560,3209,1560,3200,1569,3198,1578,3169,1578,3168,1549,3159,1549,3159,1527,3148,1527,3148,1492,3141,1479,3141,1458,3131,1458,3131,1436,3118,1418,3118,1389,3109,1389,3109,1370,"Z"]],label:"Regina",shortLabel:"RK",labelPosition:[227.3,254.5],labelAlignment:["center","middle"]},"GF.CY.RO":{outlines:[["M",
2929,1218,"L",2898,1195,2873,1195,2871,1209,2830,1209,2822,1219,2803,1220,2799,1283,2789,1286,2789,1296,2777,1299,2764,1318,2720,1318,2720,1307,2706,1305,2706,1293,2639,1296,2639,1333,2626,1352,2626,1384,2615,1408,2570,1412,2545,1410,2533,1397,2429,1351,2411,1331,2398,1331,2392,1345,2376,1364,2366,1387,2345,1406,2331,1430,2232,1557,2227,1572,2209,1587,2209,1677,2166,1677,2150,1679,2150,1695,2135,1708,2135,1731,2129,1731,2129,1779,2140,1781,2138,1822,2149,1841,2149,1882,2159,1882,2159,1920,2169,1920,
2169,1977,2157,1979,2157,2018,2187,2046,2282,2048,2336,2101,2340,2108,2417,2108,2428,2094,2442,2069,2450,2049,2458,2045,2458,2028,2467,2026,2488,1983,2504,1965,2534,1939,2541,1929,2637,1929,2662,1908,2730,1868,2754,1847,2754,1826,2761,1807,2762,1778,2772,1774,2802,1774,2807,1786,2825,1786,2825,1773,2862,1754,2881,1754,2881,1776,2891,1776,2891,1634,2898,1634,2900,1585,2909,1585,2907,1560,2896,1546,2877,1531,2858,1504,2858,1389,2898,1389,2898,1375,2918,1375,2918,1328,2907,1328,2907,1302,2920,1289,2920,
1264,2939,1264,2939,1248,2929,1248,"Z"]],label:"Roura",shortLabel:"RO",labelPosition:[253.4,165.1],labelAlignment:["center","middle"]},"GF.CY.SE":{outlines:[["M",1839,1013,"L",1817,993,1800,972,1790,972,1782,980,1748,1007,1691,1007,1669,987,1653,987,1612,1033,1612,1036,1540,1036,1510,1100,1510,1148,1519,1148,1519,1185,1457,1248,1438,1259,1439,1374,1430,1376,1429,1418,1437,1426,1532,1516,1562,1532,1562,1598,1550,1598,1547,1668,1540,1668,1540,1742,1531,1742,1531,1796,1539,1805,1546,1818,1572,1849,1608,
1899,1628,1921,1642,1946,1661,1966,1694,2013,1710,2027,1710,2050,1701,2050,1695,2072,1671,2114,1671,2134,1690,2169,1709,2192,1719,2214,1762,2286,1768,2306,1788,2315,1801,2304,1812,2301,1851,2273,1867,2267,1867,2260,1886,2256,1891,2246,1908,2246,1908,2240,1919,2237,1935,2226,1941,2226,1941,2218,1958,2218,1958,2206,1973,2206,1971,2197,1991,2197,1991,2189,2010,2187,2010,2178,2028,2174,2028,2166,2039,2162,2039,2127,2047,2128,2049,2074,2059,2074,2059,2058,2080,2058,2080,2038,2099,2038,2099,2025,2128,2025,
2128,2007,2157,2003,2157,1979,2169,1977,2169,1920,2159,1920,2159,1882,2149,1882,2149,1841,2138,1822,2140,1781,2129,1779,2129,1731,2135,1731,2135,1708,2150,1695,2150,1679,2166,1677,2209,1677,2209,1587,2213,1583,2204,1575,2187,1563,2122,1481,2102,1460,2074,1418,2058,1411,2058,1401,2050,1396,2050,1378,2058,1378,2058,1345,2066,1341,2067,1299,2079,1297,2079,1260,2086,1260,2086,1204,2098,1197,2098,1166,2107,1166,2107,1101,2095,1101,2095,1081,2078,1081,2078,1067,2048,1067,2048,1017,2001,1016,2001,1007,1909,
1005,1909,1018,1843,1018,"Z"]],label:"Saint Elie",shortLabel:"SE",labelPosition:[182.1,164.3],labelAlignment:["center","middle"]},"GF.CY.IR":{outlines:[["M",1605,386,"L",1576,386,1572,376,1535,376,1535,369,1508,369,1508,363,1498,357,1408,357,1408,369,1369,370,1369,397,1378,412,1378,424,1386,424,1386,432,1401,446,1401,465,1379,465,1379,474,1350,474,1350,489,1310,489,1309,544,1300,544,1299,599,1294,606,1294,647,1276,651,1277,685,1282,702,1296,711,1308,723,1308,748,1293,762,1281,780,1280,847,1287,850,
1321,850,1323,865,1301,915,1288,926,1288,947,1328,947,1335,954,1361,1005,1365,1020,1410,1020,1410,1086,1419,1097,1465,1097,1505,1109,1508,1104,1540,1036,1612,1036,1612,1033,1653,987,1669,987,1669,951,1681,927,1706,938,1796,848,1802,835,1802,816,1778,758,1782,740,1806,714,1848,779,1864,810,1881,810,1899,788,1895,761,1867,716,1858,697,1852,663,1888,602,1888,518,1880,507,1764,407,1732,367,1707,367,1688,377,1680,377,1680,388,1661,388,1661,398,1605,400,"Z"]],label:"Iracoubo",shortLabel:"IR",labelPosition:[158.7,
73.3],labelAlignment:["center","middle"]},"GF.CY.SI":{outlines:[["M",2015,466,"L",1999,452,1957,410,1934,378,1915,369,1851,369,1851,393,1834,393,1834,386,1799,386,1799,375,1760,375,1760,365,1732,367,1764,407,1832,468,1833,468,1880,507,1888,518,1888,602,1852,663,1858,697,1867,716,1895,761,1899,788,1881,810,1864,810,1848,779,1806,714,1782,740,1778,758,1802,816,1802,835,1796,848,1706,938,1681,927,1669,951,1669,987,1691,1007,1748,1007,1782,980,1790,972,1800,972,1817,993,1839,1013,1843,1018,1909,1018,
1909,1005,2001,1007,2001,1016,2048,1017,2048,986,1996,933,1996,908,2008,908,2008,870,2027,866,2103,816,2111,805,2111,795,2119,789,2122,776,2129,772,2162,709,2168,703,2168,693,2177,689,2187,674,2178,661,2178,639,2170,620,"Z"]],label:"Sinnamary",shortLabel:"SI",labelPosition:[198.8,69.2],labelAlignment:["center","middle"]},"GF.CY.KR":{outlines:[["M",2261,722,"L",2226,694,2187,674,2177,689,2168,693,2168,703,2162,709,2129,772,2122,776,2119,789,2111,795,2111,805,2103,816,2027,867,2008,870,2008,908,1996,
908,1996,933,2048,986,2048,1067,2078,1067,2078,1081,2095,1081,2095,1101,2107,1101,2107,1166,2098,1166,2098,1197,2086,1204,2086,1260,2079,1260,2079,1297,2067,1299,2066,1341,2058,1345,2058,1378,2050,1378,2050,1396,2058,1401,2058,1411,2074,1418,2102,1460,2122,1481,2187,1563,2204,1575,2213,1584,2227,1572,2232,1557,2331,1430,2345,1406,2366,1387,2376,1364,2392,1345,2398,1331,2412,1331,2412,1256,2399,1256,2399,1238,2387,1238,2387,1225,2390,1206,2399,1201,2399,1189,2409,1186,2412,1165,2416,1165,2416,1089,
2409,1089,2409,1048,2399,1048,2399,1015,2390,1015,2390,975,2404,975,2404,986,2428,986,2439,997,2458,997,2460,966,2449,966,2449,947,2458,940,2470,922,2481,898,2469,885,2424,822,2409,810,2384,798,2291,736,"Z"]],label:"Kourou",shortLabel:"KR",labelPosition:[223.8,112.9],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,
d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("fusioncharts.maps.js is required in order to define vizualization"))},[g,a],window]})}])});
