import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';


export class News extends Component {
  articles=[{
    "source": {
      "id": "cnn",
      "name": "CNN"
    },
    "author": "Gawon Bae, Yoonjung Seo, Alex Stambaugh",
    "title": "North Korea blows up roads near border with South after warning it would completely cut ties - CNN",
    "description": "North Korea blew up parts of two major roads connected to the southern part of the peninsula on Tuesday, South Korean authorities said, after Pyongyang warned it would take steps to completely cut off its territory from the South.",
    "url": "https://www.cnn.com/2024/10/15/asia/north-korea-blast-roads-south-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-21042554-300-743-still.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-10-15T09:46:00Z",
    "content": "North Korea blew up parts of two major roads connected to the southern part of the peninsula on Tuesday, South Korean authorities said, after Pyongyang warned it would take steps to completely cut of… [+4968 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Yahoo Entertainment"
    },
    "author": "David Shepardson and Sameer Manekar",
    "title": "EV chipmaker Wolfspeed set to receive $750 million US chips grant - Yahoo Finance",
    "description": "WASHINGTON (Reuters) -Wolfspeed is set to receive $750 million in government grants for its new North Carolina silicon carbide wafer manufacturing plant...",
    "url": "https://finance.yahoo.com/news/ev-chipmaker-wolfspeed-set-receive-090823633.html",
    "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
    "publishedAt": "2024-10-15T09:08:23Z",
    "content": "By David Shepardson and Sameer Manekar\r\nWASHINGTON (Reuters) -Wolfspeed is set to receive $750 million in government grants for its new North Carolina silicon carbide wafer manufacturing plant facili… [+2690 chars]"
  },
  {
    "source": {
      "id": "cnn",
      "name": "CNN"
    },
    "author": "Ben Morse, Homero De la Fuente",
    "title": "Despite Hail Mary touchdown, Aaron Rodgers and the New York Jets fall to Buffalo Bills in first game since firing head coach - CNN",
    "description": "The Buffalo Bills overcame an Aaron Rodgers Hail Mary touchdown pass at the end of the first half to edge past the New York Jets 23-20 on Monday Night Football.",
    "url": "https://www.cnn.com/2024/10/15/sport/buffalo-bills-new-york-jets-mnf-nfl-spt-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-15t021609z-1126615148-mt1usatoday24492567-rtrmadp-3-nfl-buffalo-bills-at-new-york-jets.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-10-15T09:05:00Z",
    "content": "The Buffalo Bills overcame an Aaron Rodgers Hail Mary touchdown pass at the end of the first half to edge past the New York Jets 23-20 in a penalty-filled victory on Monday night in East Rutherford, … [+2826 chars]"
  },
  {
    "source": {
      "id": "politico",
      "name": "Politico"
    },
    "author": "Blanca Begert, Alex Nieves",
    "title": "Don’t call it Trump-proofing - POLITICO",
    "description": "It’s already Trump’s world. California is just living in it.",
    "url": "https://www.politico.com/news/2024/10/15/trump-california-environment-supreme-court-00183585",
    "urlToImage": "https://static.politico.com/a9/a5/8018128845a58daf54c5365e4236/election-2024-trump-85124.jpg",
    "publishedAt": "2024-10-15T09:00:00Z",
    "content": "There are two distinct threats. One is the Trump administration, and one is the courts, said Ann Carlson, former head of the National Highway Traffic Safety Administration under President Joe Biden.\r… [+10762 chars]"
  },

  {
    "source": {
      "id": "abc-news",
      "name": "ABC News"
    },
    "author": null,
    "title": "Israel-Gaza-Lebanon live updates: Israel kills 20 in strike on UN school, health ministry says - ABC News",
    "description": "",
    "url": "https://abcnews.go.com/International/live-updates/israel-hamas-hezbollah/?id\\\\u003d114770972",
    "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
    "publishedAt": "2024-10-15T07:44:00Z",
    "content": null
  },
  {
    "source": {
      "id": "newsweek",
      "name": "Newsweek"
    },
    "author": "Ewan Palmer",
    "title": "How Kamala Harris, Donald Trump Polls Look Three Weeks Before Election - Newsweek",
    "description": "The race remains neck-and-neck as the 2204 election campaign edges nearer to its end.",
    "url": "https://www.newsweek.com/kamala-harris-donald-trump-polls-2024-election-1968661",
    "urlToImage": "https://d.newsweek.com/en/full/2494758/harris-trump-polls-three-weeks-before-election.png",
    "publishedAt": "2024-10-15T07:00:02Z",
    "content": "With three weeks to go until Election Day, Kamala Harris is leading Donald Trump in the 2024 polls nationally, while the vital swing states are still too close to call.\r\nThe race between Vice Preside… [+3924 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Hawaii News Now"
    },
    "author": "Caelan Hughes",
    "title": "Stargazers capture ‘comet of the century’ soaring over Hawaii - Hawaii News Now",
    "description": "Comet Tsuchinshan-ATLAS is expected to come within 44 million miles of Earth, NASA said.",
    "url": "https://www.hawaiinewsnow.com/2024/10/15/stargazers-capture-comet-century-soaring-over-hawaii/",
    "urlToImage": "https://gray-khnl-prod.gtv-cdn.com/resizer/v2/R6BQW4VMNFHKNNOO7GJKDWERSA.jpg?auth=21d50238576b1bd13c5af9d5bfb8e2b9d7782927c0954d3f60d7683ae5ce8022&width=1200&height=600&smart=true",
    "publishedAt": "2024-10-15T06:25:00Z",
    "content": "HONOLULU (HawaiiNewsNow) - Over the weekend, Hawaii stargazers witnessed what some are calling the comet of the century.\r\nThe comet is now making its closest approach on a return voyage to Earth.\r\nCo… [+786 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BBC News"
    },
    "author": null,
    "title": "Drone attack on Israel puts spotlight on Iron Dome's limitations - BBC.com",
    "description": "Drones are becoming a deadly headache for Israelis. How can its air defence system stop them?",
    "url": "https://www.bbc.com/news/articles/c4g9wx2q09ko",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3541/live/bca0b570-8a6a-11ef-b6b0-c9af5f7f16e4.jpg",
    "publishedAt": "2024-10-15T06:06:55Z",
    "content": "Sunday's drone attack was one of Israel's biggest in more than a year - four Israeli soldiers were killed\r\nSlow, small and relatively cheap to make, drones have become a deadly headache for Israelis … [+3614 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Post Magazine"
    },
    "author": null,
    "title": "China considering space facility location based on security in times of war - South China Morning Post",
    "description": "Advantages of coastal operation outweighed by ‘strategic hinterland’ policy in preferred site for massive commercial space facility.",
    "url": "https://www.scmp.com/news/china/science/article/3282391/extreme-situations-chinas-space-superpower-goals-are-being-shaped-security-concerns",
    "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2024/10/15/210f090b-4029-4cb9-ae98-6c057b5d76a6_67742b17.jpg?itok=CP4mReVV&v=1728967432",
    "publishedAt": "2024-10-15T06:00:10Z",
    "content": "China is considering another inland site as it makes plans for a massive commercial spaceport despite the advantages of its coastal facility in the southern island province of Hainan.\r\nAccording to t… [+1147 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "KABC-TV"
    },
    "author": "Denise Dador",
    "title": "What are symptoms of whooping cough? Outbreak hits California amid nationwide surge in pertussis - ABC7 Los Angeles",
    "description": "California's whooping cough outbreak comes as the CDC reports a nationwide surge in cases, raising concern for those most vulnerable to the respiratory disease.",
    "url": "https://abc7.com/post/what-are-symptoms-whooping-cough-outbreak-hits-california-amid-nationwide-surge-pertussis/15429103/",
    "urlToImage": "https://cdn.abcotvs.com/dip/images/15429185_101424-kabc-4PM-Whooping-Cough-vid.jpg?w=1600",
    "publishedAt": "2024-10-15T05:15:39Z",
    "content": "LOS ANGELES (KABC) -- California is in the midst of a whooping cough outbreak, as the CDC reports a nationwide surge.\r\nIt's raising concerns for those most vulnerable to the bacterial disease. It spr… [+2285 chars]"
  },
  {
    "source": {
      "id": "cnn",
      "name": "CNN"
    },
    "author": "Wayne Chang, Helen Regan",
    "title": "A record number of Chinese warplanes flew close to Taiwan during military drills - CNN",
    "description": "China flew a record number of fighter jets and other warplanes around Taiwan during its large-scale military drills on Monday, Taiwan’s Defense Ministry said.",
    "url": "https://www.cnn.com/2024/10/15/asia/record-china-warplanes-taiwan-drills-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2177589410.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-10-15T04:18:00Z",
    "content": "China flew a record number of fighter jets and other warplanes around Taiwan during its large-scale military drills on Monday, the islands Defense Ministry said.\r\nThe one-day military exercises, whic… [+3984 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CBS Sports"
    },
    "author": "",
    "title": "Yankees' Giancarlo Stanton continues to step up in playoffs with Aaron Judge still stuck in October slump - CBS Sports",
    "description": "Stanton, one of the best October sluggers of all-time, went deep again in ALCS Game 1",
    "url": "https://www.cbssports.com/mlb/news/yankees-giancarlo-stanton-continues-to-step-up-in-playoffs-with-aaron-judge-still-stuck-in-october-slump/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/10/15/95bcd2f3-9dfd-4508-a117-95adab9f7500/thumbnail/1200x675/3750c814bfff30830e8eaaea4cfa802c/giancarlo-stanton-getty-3.png",
    "publishedAt": "2024-10-15T04:02:01Z",
    "content": "Anyone who has spent much time watching or reading about the Yankees this postseason has heard plenty about the playoff struggles of presumptive 2024 AL MVP Aaron Judge. It'll be his second MVP in th… [+2615 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CNBC"
    },
    "author": "Hugh Son",
    "title": "Goldman Sachs to report third-quarter earnings - CNBC",
    "description": "Now that the Fed is easing rates, Goldman may benefit as corporations that have waited on the sidelines to acquire competitors or raise funds take action.",
    "url": "https://www.cnbc.com/2024/10/15/goldman-sachs-gs-earnings-q3-2024.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107360253-1705508749783-107360253-1705501487263-1J7A0712.jpg?v=1705508758&w=1920&h=1080",
    "publishedAt": "2024-10-15T04:01:01Z",
    "content": "Goldman Sachs is scheduled to report third-quarter earnings before the opening bell Tuesday.\r\nHere's what Wall Street expects:\r\n\u003Cul\u003E\u003Cli\u003EEarnings: $6.89 per share, according to LSEG\u003C/li\u003E\u003Cli\u003ERevenue: $… [+1133 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Deadline"
    },
    "author": "Natalie Oganesyan",
    "title": "Samuel L. Jackson Marks ‘Pulp Fiction’ 30th Anniversary With Memorized Ezekiel Quote: “I Still Got It” - Deadline",
    "description": "After 30 years, Samuel L. Jackson has 'still got it,' reciting the Ezekiel Bible verse scene for memory in a commemoration post for 'Pulp Fiction.'",
    "url": "http://deadline.com/2024/10/samuel-l-jackson-pulp-fiction-anniversary-1236115934/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/samuel-jackson.jpg?w=1000",
    "publishedAt": "2024-10-15T03:54:00Z",
    "content": "There’s no breaking Samuel L. Jackson‘s concentration.\r\nAfter 30 years, the Oscar-nominated star has “still got it,” reciting the iconic Ezekiel 25:17 Bible verse from memory in one of his standout s… [+1725 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "BuffaloBills.com"
    },
    "author": null,
    "title": "Rex Ryan and the Manning brothers react to Taron Johnson's game-clinching interception on Aaron Rodgers - BuffaloBills.com",
    "description": "\u003Cp\u003EFormer head coach Rex Ryan and the Manning brothers react to a critical New York Jets quarterback Aaron Rodgers' interception on the ManningCast during \"Monday Night Football\" during Week 6 of the 2024 NFL season.\u003C/p\u003E",
    "url": "https://www.buffalobills.com/video/rex-ryan-and-the-manning-brothers-react-to-taron-johnson-s-game-clinching-interception-on-aaron-rodgers",
    "urlToImage": "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/bills/dvl2fkv89rkb6kgiputz",
    "publishedAt": "2024-10-15T03:48:47Z",
    "content": null
  },
  {
    "source": {
      "id": "business-insider",
      "name": "Business Insider"
    },
    "author": "Hasan Chowdhury",
    "title": "Elon Musk faces doubts about whether he can still deliver. Starship stuck the landing. - Business Insider",
    "description": "SpaceX achieved a world first by returning its Starship rocket booster to its launch site, a reminder that Elon Musk can prove the doubters wrong.",
    "url": "https://www.businessinsider.com/elon-musk-spacex-starship-landing-super-heavy-2024-10",
    "urlToImage": "https://i.insider.com/670d150c3f2165d716e08e85?width=1200&format=jpeg",
    "publishedAt": "2024-10-15T03:10:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "BBC News"
    },
    "author": null,
    "title": "Thaad: Why is the US giving Israel a powerful anti-missile system - BBC.com",
    "description": "The move has been the focus of attention as it involves putting American boots on the ground in Israel.",
    "url": "https://www.bbc.com/news/articles/c39le0dp4p7o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/116f/live/6d7f0ba0-8a64-11ef-bfff-fbac175bff93.jpg",
    "publishedAt": "2024-10-15T03:08:48Z",
    "content": "The Pentagon has confirmed it is sending a high-altitude anti-missile system operated by US troops to Israel.\r\nOfficials say the Terminal High-Altitude Area Defense (Thaad) battery will bolster Israe… [+5861 chars]"
  },
  {
    "source": {
      "id": "espn",
      "name": "ESPN"
    },
    "author": "Jorge Castillo",
    "title": "Rodón emulates 'robot' Cole, steers Yanks' G1 win - ESPN",
    "description": "After struggling to control his emotions in the ALDS, Carlos Rodón sought to emulate teammate Gerrit Cole's demeanor on the mound. On Monday, he nailed the imitation, pitching the Yankees to a win over the Guardians in Game 1 of the ALCS.",
    "url": "https://www.espn.com/mlb/story/_/id/41801323/rodon-gem-hrs-soto-stanton-spark-yankees-game-1-win",
    "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1015%2Fr1400451_1296x729_16%2D9.jpg",
    "publishedAt": "2024-10-15T02:53:00Z",
    "content": "NEW YORK -- On Thursday, while Gerrit Cole mowed down the Kansas City Royals in the New York Yankees' series-clinching Game 4 win in the American League Division Series, Carlos Rodón took mental note… [+5130 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Investor's Business Daily"
    },
    "author": "ED CARSON, Investor's Business Daily",
    "title": "Dow Jones Futures Fall Amid Election Shifts; Big S&P 500 Winners On Tap, Nvidia To Join Dow - Investor's Business Daily",
    "description": "The Federal Reserve meets this week. Nvidia will replace Intel in the Dow Jones.",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-election-sp-500-winners-nvidia-to-join-dow-intel/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2024/11/Stock-AtPolls-Shutt.jpg",
    "publishedAt": "2024-11-04T00:37:00Z",
    "content": "Dow Jones futures fell slightly Sunday evening, along with S&amp;P 500 futures and Nasdaq futures, with shifting bets on the presidential election in focus. The next Federal Reserve meeting and a con… [+8793 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CNBC"
    },
    "author": "Samantha Subin",
    "title": "Stock futures inch lower as Wall Street readies for U.S. presidential election: Live updates - CNBC",
    "description": "Stock futures slipped in overnight trading Sunday as investors geared up for the highly-anticipated U.S. presidential election.",
    "url": "https://www.cnbc.com/2024/11/03/stock-market-today-live-updates.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108039090-1727283086007-NYSE_Traders-OB-Photo-ALR-20240925-Press-10-2.jpg?v=1727283173&w=1920&h=1080",
    "publishedAt": "2024-11-03T23:33:00Z",
    "content": "Stock futures dipped in overnight trading Sunday as investors geared up for the highly-anticipated U.S. presidential election.\r\nFutures connected to the Dow Jones Industrial Average lost 0.2%, or 90 … [+2339 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Investor's Business Daily"
    },
    "author": "ED CARSON, Investor's Business Daily",
    "title": "Nuclear Power Stocks Fall On This Regulatory Move With Earnings Due - Investor's Business Daily",
    "description": "A Talon nuclear plant wanted to supply more power to an Amazon data center.",
    "url": "https://www.investors.com/news/nuclear-power-stocks-skid-on-ferc-regulatory-move/",
    "urlToImage": "https://www.investors.com/wp-content/uploads/2018/10/stock-nuclear-power-21-adobe.jpg",
    "publishedAt": "2024-11-03T21:42:00Z",
    "content": "Energy regulators on Friday rejected an amended interconnection agreement for an Amazon (AMZN) data center with a nuclear power plant run by Talen Energy (TLN).  Talen stock sold off Friday night whi… [+2451 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "ForexLive"
    },
    "author": "Eamonn Sheridan",
    "title": "USD weaker to open the new forex week - election polls the culprit - ForexLive",
    "description": "There are only three certainties in life: . death taxes someone, somewhere, will have a neat and simple narrative to explain all movements in financial markets Here is my contribution to #3 today -...",
    "url": "https://www.forexlive.com/news/usd-weaker-to-open-the-new-forex-week-election-polls-the-culprit-20241103/",
    "urlToImage": "https://images.forexlive.com/images/usd%20iowa%2004%20November%202024_id_5f85e957-a1f8-4955-9977-dfa4d573a800_size975.jpg",
    "publishedAt": "2024-11-03T21:27:00Z",
    "content": "High risk warning:\r\nForeign exchange trading carries a high level of risk that may not be suitable for all investors. Leverage creates additional risk and loss exposure. Before you decide to trade fo… [+2129 chars]"
  },
  {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "Summer Said, Benoit Faucon",
    "title": "Exclusive | Iran Tells Region ‘Strong and Complex’ Attack Coming on Israel - WSJ - The Wall Street Journal",
    "description": "Tehran has warned diplomats that it is planning to use more powerful warheads and other weapons",
    "url": "https://www.wsj.com/world/middle-east/iran-tells-region-strong-and-complex-attack-coming-on-israel-2804179f",
    "urlToImage": "https://images.wsj.net/im-74437664/social",
    "publishedAt": "2024-11-03T21:21:00Z",
    "content": null
  },
  {
    "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
    },
    "author": null,
    "title": "Musk’s Close Ties With Trump Give Xi a Friend With Influence - Bloomberg",
    "description": "The emergence of Elon Musk as one of Donald Trump’s top campaign donors bodes well for Xi Jinping if the former US president wins back the White House.",
    "url": "https://www.bloomberg.com/news/articles/2024-11-03/musk-s-close-ties-with-trump-give-xi-a-friend-with-influence",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOjr.QlPsgVc/v1/1200x800.jpg",
    "publishedAt": "2024-11-03T21:00:01Z",
    "content": "The emergence of Elon Musk as one of Donald Trumps top campaign donors bodes well for Xi Jinping if the former US president wins back the White House. \r\nThe billionaire chief executive officer of Tes… [+341 chars]"
  },
  {
    "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
    },
    "author": "Katherine Burton, Liz Capo McCormick",
    "title": "Traders Prepare for a Long, Volatile Election Night - Bloomberg",
    "description": "As the results trickle in, some highly caffeinated investors will be watching margins and tweaking their wagers until sunrise.",
    "url": "https://www.bloomberg.com/news/features/2024-11-03/how-traders-are-preparing-to-watch-2024-election-night-results",
    "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQQ_hPrk9Kqo/v0/1200x796.jpg",
    "publishedAt": "2024-11-03T20:00:27Z",
    "content": "For the big money on Wall Street, theres the prep thats bound to come with a coin-toss election that could dramatically swing policy. Trading desks staffed through the night, with teams in Hong Kong … [+432 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "CoinDesk"
    },
    "author": "Omkar Godbole",
    "title": "Bitcoin Volatility Jumps to 3-Month High Ahead of U.S. Election - CoinDesk",
    "description": "Investors in crypto and traditional markets bet that impending U.S. presidential election will breed price volatility.",
    "url": "https://www.coindesk.com/markets/2024/11/03/bitcoin-volatility-jumps-to-3-month-high-ahead-of-us-election/",
    "urlToImage": "https://www.coindesk.com/resizer/PLjteK63kj-wWQQmw-PweaqEN70=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/UJRSTOUC6BALHDVCRZONIH2MGY.png",
    "publishedAt": "2024-11-03T19:50:00Z",
    "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhave been updated.\r\nCoinDesk is anaward-winningmedia outlet that covers the cryptocurrency industry. Its… [+457 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Decrypt"
    },
    "author": "Andrew Hayward",
    "title": "Bitcoin Slips as Trump's Odds Plummet, Pushing Crypto Liquidations Above $315M - Decrypt",
    "description": "Polymarket and Kalshi users are hedging their bets on Donald Trump, with Bitcoin falling below $68,000 and liquidations piling up.",
    "url": "https://decrypt.co/289824/bitcoin-slips-trump-odds-plummet-liquidations",
    "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2024/07/trump-bitcoin-nashville-gID_7.jpg",
    "publishedAt": "2024-11-03T19:17:47Z",
    "content": "After a white-hot week for Bitcoin in which the leading cryptocurrency came $175 away from its all-time high price, BTC momentum is cooling again, with its price dipping as self-proclaimed crypto can… [+3298 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Fox Business"
    },
    "author": "Chris Pandolfo",
    "title": "El-Erian: Interest rates, inflation moving in right direction, but lower prices 'not going to happen' - Fox Business",
    "description": "Allianz chief economic adviser Mohamed El-Erian warned that even though inflation has cooled significantly, prices consumers face are unlikely to decrease.",
    "url": "https://www.foxbusiness.com/economy/el-erian-interest-rates-inflation-moving-right-direction-lower-prices-not-going-happen",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/10/0/0/grocery-store-shopper.jpg?ve=1&tl=1",
    "publishedAt": "2024-11-03T19:04:00Z",
    "content": "A prominent economist and educator is warning that Americans squeezed by the highest inflation rates in four decades are unlikely to see prices come down in the future.\r\nAllianz chief economic advise… [+3723 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "New York Post"
    },
    "author": "Peter Senzamici",
    "title": "Worker openly ran ‘rape room,’ assaulted employees in clothing company French Connection’s NYC factory: suit - New York Post ",
    "description": "A sicko textile worker ran a “rape room” at the at the Queens factory of a major British clothing brand, French Connection, where he openly preyed on female colleagues, a new lawsuit claims.",
    "url": "https://nypost.com/2024/11/03/us-news/worker-openly-ran-rape-room-assaulted-employees-in-clothing-company-french-connections-nyc-factory-suit/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/11/92972956.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2024-11-03T18:39:00Z",
    "content": "A sicko textile worker ran a rape room at the Queens factory of a major British clothing brand where he openly preyed on female colleagues, a shocking new lawsuit claims.\r\nGreenpoint resident Aleksan… [+8733 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Barron's"
    },
    "author": "Barron's",
    "title": "Boeing Had a Big Week. This One Is Even Bigger. - Barron's",
    "description": null,
    "url": "https://www.barrons.com/articles/boeing-strike-contract-vote-workers-cd298ea1",
    "urlToImage": null,
    "publishedAt": "2024-11-03T18:09:00Z",
    "content": null
  },
  {
    "source": {
      "id": null,
      "name": "Newser"
    },
    "author": "Gina Carey",
    "title": "2025's Job Forecast Looks Best in These States - Newser",
    "description": "New Hampshire tops WalletHub's list, while West Virginia comes in last",
    "url": "https://www.newser.com/story/358655/best-worst-states-for-jobs-in-2025.html",
    "urlToImage": "https://img1-azrcdn.newser.com/image/1569588-12-20241103122132.jpeg",
    "publishedAt": "2024-11-03T18:00:00Z",
    "content": "Since the end of the pandemic, employment in the US has been in a state of flux, swinging between strong jobs reports to high rates of continuing unemployment claims. But according to WalletHub, key … [+529 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Fox Business"
    },
    "author": "Daniella Genovese",
    "title": "The new Starbucks strategy: Will CEO Brian Niccol’s plan work? - Fox Business",
    "description": "Starbucks CEO Brian Niccol wants to return the company to its coffeehouse roots. Analysts are optimistic, though they say the company will face near-term headwinds.",
    "url": "https://www.foxbusiness.com/markets/new-starbucks-strategy-ceo-brian-niccols-plan-work",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/Starbucks-worker-2.jpg?ve=1&tl=1",
    "publishedAt": "2024-11-03T17:20:00Z",
    "content": "Starbucks' new chief executive announced a series of changes this week aimed at drawing back customers as the company navigates unionization pressures, declining foot traffic, and frequent leadership… [+4839 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "MarketWatch"
    },
    "author": "Joseph Adinolfi",
    "title": "Harris and Trump command market’s attention — but Powell may steal the spotlight - MarketWatch",
    "description": "An uncertain election outcome could even open the door for the central bank to cut interest rates more aggressively, some say",
    "url": "https://www.marketwatch.com/story/harris-and-trump-command-the-markets-attention-but-jerome-powell-may-steal-the-spotlight-89207883",
    "urlToImage": "https://images.mktw.net/im-25430778/social",
    "publishedAt": "2024-11-03T17:01:00Z",
    "content": "Investors are anxious about the possibility that it could take days, or even weeks, for the results of this weeks U.S. presidential and congressional races to be known. \r\nBut Tuesdays vote is hardly … [+231 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "The Daily Dot"
    },
    "author": "Stacy Fernandez",
    "title": "‘They did her so dirty’: Woman orders pink heels from Temu. Then she notices something upon a closer look - The Daily Dot",
    "description": "This Temu customer ordered a pair of velvety pink heels. She was immediately put off by what was in the package.",
    "url": "https://www.dailydot.com/news/temu-pink-shoes-fail/",
    "urlToImage": "https://uploads.dailydot.com/2024/11/Temu-Sandals.jpg?auto=compress&fm=pjpg",
    "publishedAt": "2024-11-03T17:00:00Z",
    "content": "This Temu customer ordered a pair of shoes and was immediately put off by what was in the package.\r\nTemu is an online retailer known for its wide range of productsselling everything from home goods t… [+3135 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Wccftech"
    },
    "author": "Muhammad Zuhair",
    "title": "US Policymakers Are Reportedly Open To Potential Intel “Merger Deal”, As They Explore Options To Pull Team Blue Out Of The Danger - Wccftech",
    "description": "Intel's financial troubles have started bothering the US, as they are now exploring options for recovery, including a potential merger.",
    "url": "https://wccftech.com/us-policymakers-open-to-potential-intel-merger-deal-explore-options-to-pull-team-blue-out-of-danger/",
    "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2024/11/Intel-728x485-1.jpg",
    "publishedAt": "2024-11-03T16:40:00Z",
    "content": "Intel's financial troubles have started bothering the US Commerce Department, which is now reportedly exploring options for recovery, including a potential merger.\r\nIntel's chip business is a key ele… [+2424 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Motley Fool"
    },
    "author": "James Brumley",
    "title": "Is It Time to Buy October's Worst-Performing S&P 500 Stocks? - The Motley Fool",
    "description": "These four poorly performing tickers are hinting at broader, bigger-picture problems that investors will want to altogether avoid.",
    "url": "https://www.fool.com/investing/2024/11/03/is-it-time-to-buy-octobers-worst-performing-sp-500/",
    "urlToImage": "https://g.foolcdn.com/editorial/images/796224/investor-reviewing-a-stock-portfolio.jpg",
    "publishedAt": "2024-11-03T16:39:30Z",
    "content": "These four poorly performing tickers are hinting at broader, bigger-picture problems that investors will want to altogether avoid.Generally speaking, when you buy a stock doesn't really matter if it'… [+6482 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "WGN TV Chicago"
    },
    "author": "Michael Johnson",
    "title": "Revolution Brewing to close Logan Square brewpub in December, reports Eater Chicago - WGN TV Chicago",
    "description": "CHICAGO — The state’s largest independent craft brewery will soon be consolidating from two to one Chicago location. Revolution Brewing will close its brewpub in Logan Square on Saturday, Dec. 14, Eater Chicago reported this weekend. The Logan Square brewpub,…",
    "url": "https://wgntv.com/news/chicago-news/revolution-brewing-to-close-logan-square-brewpub-in-december-reports-eater-chicago/",
    "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2024/11/snapshot-2024-11-03T100344.227-1.jpg?w=1280",
    "publishedAt": "2024-11-03T16:20:30Z",
    "content": "CHICAGO The state’s largest independent craft brewery will soon be consolidating from two to one Chicago location.\r\nRevolution Brewing will close its brewpub in Logan Square on Saturday, Dec. 14, Eat… [+784 chars]"
  },
  {
    "source": {
      "id": "cnn",
      "name": "CNN"
    },
    "author": "",
    "title": "Watch gravity-defining robot scale Texas high-rise - CNN",
    "description": "",
    "url": "https://www.cnn.com/2024/11/03/business/video/ai-robot-window-washing-building-affil-dnt-digvid",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ktvt.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-11-03T16:17:26Z",
    "content": null
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Lauren Forristal",
    "title": "Bye-bye bots: Altera's game-playing AI agents get backing from Eric Schmidt | TechCrunch",
    "description": "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI Research company Altera raised $9 million to build AI agents that can play video games alongside other player…",
    "url": "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
    "publishedAt": "2024-05-08T15:14:57Z",
    "content": "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents.\r\nThe company announced Wednesday that it … [+6416 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Alex Wilhelm and Theresa Loconsolo",
    "title": "$450M for Noname, two billion-dollar rounds, and good news for crypto startups | TechCrunch",
    "description": "This morning on Equity, not only do we have good news for crypto founders, we're also digging into Akamai spending $450 million for API security firm Noname, and billion dollar deals from Wiz and Wayve.",
    "url": "https://techcrunch.com/2024/05/08/450m-for-noname-two-billion-dollar-rounds-and-good-news-for-crypto-startups/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-942480316.jpg?resize=1200,835",
    "publishedAt": "2024-05-08T15:01:51Z",
    "content": "Good news, crypto founders: Venture capital activity is picking up in your sector after falling to multi-year lows in late 2023. Put another way, venture folks appear more web3-bullish than before, e… [+1599 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Alex Wilhelm",
    "title": "Watch: When did iPads get as expensive as MacBooks?",
    "description": "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
    "url": "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675",
    "publishedAt": "2024-05-08T14:52:26Z",
    "content": "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good … [+1385 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Rebecca Bellan",
    "title": "Uber promises member exclusives as Uber One passes $1B run-rate | TechCrunch",
    "description": "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions.  “You will see",
    "url": "https://techcrunch.com/2024/05/08/uber-promises-member-exclusives-as-uber-one-passes-1b-run-rate/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1142304853-a.jpg?resize=1200,675",
    "publishedAt": "2024-05-08T14:41:36Z",
    "content": "Uber plans to deliver more perks to Uber One members, like member-exclusive events, in a bid to gain more revenue through subscriptions. \r\nYou will see more member-exclusives coming up where members … [+4676 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Mike Butcher",
    "title": "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
    "description": "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
    "url": "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
    "publishedAt": "2024-05-08T13:02:12Z",
    "content": "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (… [+3279 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Paul Sawers",
    "title": "UK challenger bank Monzo nabs another $190M as US expansion beckons | TechCrunch",
    "description": "Monzo has raised another $190 million, as the challenger bank looks to expand its presence internationally — particularly in the U.S.",
    "url": "https://techcrunch.com/2024/05/08/uk-challenger-bank-monzo-nabs-another-190m-at-5-2b-valuation/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1259121938-e1715164252704.jpg?resize=1200,676",
    "publishedAt": "2024-05-08T12:34:05Z",
    "content": "Monzo has raised another £150 million ($190 million), as the challenger bank looks to expand its presence internationally particularly in the U.S.\r\nThe new round comes just two months after Monzo rai… [+1960 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Brian Heater",
    "title": "iRobot names former Timex head Gary Cohen as CEO | TechCrunch",
    "description": "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive,",
    "url": "https://techcrunch.com/2024/05/08/irobot-names-former-timex-head-gary-cohen-as-ceo/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Screenshot-2024-05-08-at-7.19.50 AM.jpg?resize=1200,919",
    "publishedAt": "2024-05-08T12:22:30Z",
    "content": "iRobot Tuesday announced the successor to longtime CEO, Colin Angle. Gary Cohen, who previous held chief executive role at Timex and Qualitor Automotive, will be heading up the company, marking a maj… [+2120 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Devin Coldewey",
    "title": "Google Deepmind debuts huge AlphaFold update and free proteomics-as-a-service web app | TechCrunch",
    "description": "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of",
    "url": "https://techcrunch.com/2024/05/08/google-deepmind-debuts-huge-alphafold-update-and-free-proteomics-as-a-service-web-app/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/alphafold-3-deepmind.jpg?resize=1200,675",
    "publishedAt": "2024-05-07T22:10:14Z",
    "content": "Google Deepmind has taken the wraps off a new version AlphaFold, their transformative machine learning model that predicts the shape and behavior of proteins. AlphaFold 3 is not only more accurate, b… [+7069 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Tim De Chant",
    "title": "Mycocycle uses mushrooms to upcycle old tires and construction waste | TechCrunch",
    "description": "The startup's fungi use their mycelium to consume oil-based rubbers and plastics, creating new bio-based materials in the process.",
    "url": "https://techcrunch.com/2024/05/08/mycocycle-uses-mushrooms-to-upcycle-old-tires-and-construction-waste/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-1350655821.jpeg?resize=1200,796",
    "publishedAt": "2024-05-07T18:07:09Z",
    "content": "Usually, when something starts to rot, it gets pitched in the trash. But Joanne Rodriguez wants to turn the concept of rot on its head by growing fungus on trash to turn it into something better.\r\nWe… [+4229 chars]"
  },
  {
    "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
    },
    "author": "Kyle Wiggers",
    "title": "Controversial drone company Xtend leans into defense with new $40M round | TechCrunch",
    "description": "Xtend, a drone company heavily involved with defense customers, has raised a new round of capital to expand its operations.",
    "url": "https://techcrunch.com/2024/05/08/controversial-drone-company-xtend-leans-into-defense/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900",
    "publishedAt": "2024-05-07T18:01:34Z",
    "content": "Close to a decade ago, brothers Aviv and Matteo Shapira co-founded Replay, a company that created a video format for 360-degree replays — the sorts of replays that have become part and parcel of majo… [+5398 chars]"
  }
]


  static defaultProps = {
    country: "us",
    category: "general"
  }

  // static propTypes={.0

  //   country:PropTypes.string,
  //   category:PropTypes.string
  // }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResult:0
    }
  }

 

// Handling next and prev buttons
  // handlePrevClick = () => {
  //   this.setState((prevState) => ({
  //     page: Math.max(prevState.page - 1, 1) // Prevent page from going below 1
  //   }), this.updateNews);
  // };

  // handleNextClick = () => {
  //   if (this.state.page < Math.ceil(this.state.totalResults / 12)) {
  //     this.setState((prevState) => ({
  //       page: prevState.page + 1
  //     }), this.updateNews);
  //   }
  // };

render() {
    return (
      <div>
        <div className="container my-3">
          <h1 id='h1'>Headlines</h1>
          {this.state.loading && <Loading />}
          <div className='container'>
            <div className="row">
              {
                this.articles.map((element) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4" key={element.url}> {/* Add a unique key */}
                      <NewsItems
                        title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                        description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                        imgUrl={element.urlToImage}
                        NewsUrl={element.url}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
}

}

export default News
