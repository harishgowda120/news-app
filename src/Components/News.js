import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [
        
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
  },{
    "source": {
    "id": null,
    "name": "futurezone.at"
    },
    "author": "futurezone.at",
    "title": "Longbow Speedster ist das weltweit erste „federleichte Elektroauto“",
    "description": "Der britische Autobauer hat mit FEV eine neue Kategorie von E-Autos ins Leben gerufen und 2 passende Modelle vorgestellt.",
    "url": "https://futurezone.at/produkte/longbow-speedster-federleicht-elektroauto-fev-roadster-bilder-preis-e-auto/403022684",
    "urlToImage": "https://image.futurezone.at/images/facebook/8952655/longbowherospeedsterroadster-1jpeg.jpg",
    "publishedAt": "2025-03-16T14:37:36Z",
    "content": "16.03.2025\r\nDer britische Autobauer hat mit FEV eine neue Kategorie von E-Autos ins Leben gerufen und 2 passende Modelle vorgestellt.\r\nLongbow Speedster\r\n© Longbow\r\nLongbow Speedster\r\n© Longbow\r\nLong… [+272 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Big Tech Stocks at Cheapest In Months Fail to Entice Wary Buyers - Bloomberg",
    "description": "Big Tech Stocks at Cheapest In Months Fail to Entice Wary BuyersBloomberg Musk’s never been more powerful so why are Tesla shares tanking?Al Jazeera English Tech's 3-week sell-off, led by Tesla, wipes out $2.7 trillion in value from megacapsCNBC This is the M…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176743587",
    "urlToImage": null,
    "publishedAt": "2025-03-16T14:32:53Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "It may be a good time for investors to look at less risky ways to stay in the stock market",
    "description": "Buffer and covered call funds may offer more predictable outcomes for investors amid choppy trading.",
    "url": "https://www.cnbc.com/2025/03/16/it-may-be-time-for-investors-to-seek-less-risky-ways-to-stay-in-stocks.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107130289-1665063775852-gettyimages-1340690117-231-5201.jpeg?v=1731005240&w=1920&h=1080",
    "publishedAt": "2025-03-16T14:30:01Z",
    "content": "As President Trump's \"not going to bend at all\" approach to tariffs raises recession risk and helped to send the market into a correction last week, investors may want to consider strategies that foc… [+2508 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Raw Story"
    },
    "author": "Tom Boggioni",
    "title": "MSNBC's Michael Steele uses Trump's 'sad PR stunt' to dump all over Elon Musk",
    "description": "On Sunday morning, MSNBC host Michael Steele used Donald Trump's attempt to boost Tesla sales by turning the front of the White House into a car lot, to make his feelings known about billionaire Elon Musk.After noting that Tesla's stock is in a death-spiral, …",
    "url": "https://www.rawstory.com/musk-tesla-white-house/",
    "urlToImage": "https://www.rawstory.com/media-library/image.jpg?id=57803171&width=1200&height=600&coordinates=0%2C2%2C0%2C3",
    "publishedAt": "2025-03-16T14:26:55Z",
    "content": "On Sunday morning, MSNBC host Michael Steele used Donald Trump's attempt to boost Tesla sales by turning the front of the White House into a car lot, to make his feelings known about billionaire Elon… [+1417 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Weeklyosm.eu"
    },
    "author": "weeklyOSM",
    "title": "weeklyOSM: weeklyOSM 764",
    "description": "06/03/2025-12/03/2025 Daily contribution activity over the past year [1] a commit from Emin Kocan Mapping RobJN has developed a proposal to deprecate socket:tesla_supercharger and socket:tesla_dest…",
    "url": "https://weeklyosm.eu/archives/17778",
    "urlToImage": "https://weeklyosm.eu/wp-content/uploads/2025/03/764.png",
    "publishedAt": "2025-03-16T14:22:57Z",
    "content": "06/03/2025-12/03/2025\n\n<ul>\n\n\r\n\nDaily contribution activity over the past year [1] a commit from Emin Kocan\r\n\n\r\n\n</ul>\nMapping\n<ul>\n<li>\nRobJN has developed a proposal to deprecate socket:tesla_super… [+13346 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Overclockers.ru"
    },
    "author": "gotreksson",
    "title": "JPMorgan прогнозирует снижение стоимости акций Tesla вдвое от текущей цены",
    "description": "Маск не уделяет должного внимания компании, что вызывает беспокойство у инвесторов. Акции Tesla потеряли более 50% от своих декабрьских максимумов, и инвесторы могут вскоре задуматься о замене Маска на посту CEO. Ситуация рассматривается как критическая для б…",
    "url": "https://overclockers.ru/blog/GOTREK/show/214138/Ilona-maska",
    "urlToImage": "https://overclockers.ru/st/legacy/blog/427436/633867_O.jpg",
    "publishedAt": "2025-03-16T14:15:49Z",
    "content": "JPMorgan Tesla . 135 120 . , Tesla, . JPMorgan , .\r\n , . , , . « , », JPMorgan, Tesla, .\r\n : 2012 2017 . . , Tesla 2025 .\r\n - Tesla . Wedbush Securities, , , , 550 , . \r\n . Wedbush , . \r\n , Tesla. , … [+83 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "justice.gov",
    "title": "District of South Carolina | James Island Man Charged for Arson of a N. Charleston Tesla Charging Station",
    "description": "Related Content\nPress Release\nPress Release\nCHARLESTON, S.C. — Daniel Clarke-Pounder, 24, of James Island has been arrested on criminal charges related to an arson at a North Charleston Tesla charging station.\nThe complaint alleges that on March 7, the North …",
    "url": "https://biztoc.com/x/594f70777d252bcd",
    "urlToImage": "https://biztoc.com/cdn/594f70777d252bcd_s.webp",
    "publishedAt": "2025-03-16T14:13:57Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "newsweek.com",
    "title": "Elon Musk Backs Impeachment Action for Judge Who Blocked Trump Deportations",
    "description": "The DOGE chief and Tesla CEO shared his support for the impeachment in a post on X, the platform he owns.",
    "url": "https://biztoc.com/x/c456921a61e43590",
    "urlToImage": "https://biztoc.com/cdn/915/og.png",
    "publishedAt": "2025-03-16T14:13:51Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Tesla's Rollercoaster Ride, Grab's Autonomous Ambitions: This Week In Mobility",
    "description": "The past week has been a whirlwind of news for Tesla, Inc., with the electric vehicle giant making headlines for a variety of reasons. From a surprising switch in Baltimore to allegations of rebate manipulation in Canada, Tesla’s journey has been anything but…",
    "url": "https://biztoc.com/x/a425e92033ef2c22",
    "urlToImage": "https://biztoc.com/cdn/a425e92033ef2c22_s.webp",
    "publishedAt": "2025-03-16T14:13:44Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Is Tesla, Inc. (TSLA) the Best Growth Stock to Invest in for the Next 10 Years?",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_c1e70a11-4055-4e90-89a3-23f28dff82c8",
    "urlToImage": null,
    "publishedAt": "2025-03-16T14:12:41Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "特斯拉「二手車價」大跳水！驚人跌幅出爐　外媒揭4大困境",
    "description": "電動車巨頭特斯拉（Tesla）上市多年，日前歷經股價暴跌、銷量不如以往，在美國面臨示威抗議浪潮等，動態備受外界關注。如今，有最新研究報告更指出，二手特斯拉在所有電動車品牌中貶值幅度最大。",
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_34964e92-db7d-43f2-9f28-9a39c6e57ae1",
    "urlToImage": null,
    "publishedAt": "2025-03-16T14:10:00Z",
    "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+703 chars]"
    },
    {
    "source": {
    "id": "il-sole-24-ore",
    "name": "Il Sole 24 Ore"
    },
    "author": null,
    "title": "Musk cancella post che scagiona Stalin e Hitler da genocidio",
    "description": "Nuovo scivolone di Elon Musk su X. Il patron di Tesla ha condiviso un post scritto da un utente sulle azioni di tre dittatori del XX secolo per poi cancellarlo...",
    "url": "https://www.ilsole24ore.com/art/musk-cancella-post-che-scagiona-stalin-e-hitler-genocidio-AGPdNAZD",
    "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2025/03/17/Immagini/Ritagli/2025-03-13T220604Z_666819330_RC2D7DARDQ4R_RTRMADP_5_USA-TRUMP-NSA-MUSK-U70064753753zia-1440x752@IlSole24Ore-Web.JPG?r=1170x507",
    "publishedAt": "2025-03-16T14:09:01Z",
    "content": "Ascolta la versione audio dell'articolo\r\n2' di lettura\r\nNuovo scivolone di Elon Musk su X. Il patron di Tesla ha condiviso un post scritto da un utente sulle azioni di tre dittatori del XX secolo per… [+1372 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Moneydj理財網",
    "title": "《美股》暫無關稅干擾、政府關門疑慮緩 費半彈",
    "description": "MoneyDJ新聞 2025-03-17 06:08:41 記者 郭妍希 報導隨著投資人暫時擺脫關稅消息的干擾，逢低買盤湧現、帶動美國四大指數週五(14日)全面反彈，由科技巨擘領軍攀高。 道瓊工業平均指數3月14日終場上漲1.65%(674.62點)、收41,488.19點，結束連續4個交易日跌勢；週K線下挫3.07%。那斯達克指數上漲2.61%(451.07點)、收17,754.09點；週K線下挫2.43%，已連續第4週收黑。標準普爾500指數上漲2.13%(117.42點)、收5,638.94點；週K線下挫2…",
    "url": "https://tw.stock.yahoo.com/news/%E7%BE%8E%E8%82%A1-%E6%9A%AB%E7%84%A1%E9%97%9C%E7%A8%85%E5%B9%B2%E6%93%BE-%E6%94%BF%E5%BA%9C%E9%97%9C%E9%96%80%E7%96%91%E6%85%AE%E7%B7%A9-%E8%B2%BB%E5%8D%8A%E5%BD%88-220800666.html",
    "urlToImage": "https://media.zenfs.com/ko/moneydj.tw/633b6098a2078c3429f92131ed33ea52",
    "publishedAt": "2025-03-16T14:08:00Z",
    "content": "MoneyDJ 2025-03-17 06:08:41 \r\n(14)\r\n3141.65%(674.62)41,488.194K3.07%2.61%(451.07)17,754.09K2.43%45002.13%(117.42)5,638.94K2.27%43.27%(145.55)4,598.79K0.67%\r\n14(Nvidia)(Tesla)FacebookMeta Platforms5.2… [+424 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "Marni Rose McFall",
    "title": "Elon Musk Backs Impeachment Action for Judge Who Blocked Trump Deportations",
    "description": "The DOGE chief and Tesla CEO shared his support for the impeachment in a post on X, the platform he owns.",
    "url": "https://www.newsweek.com/elon-musk-impeachment-action-judge-blocked-trump-deportations-2045586",
    "urlToImage": "https://d.newsweek.com/en/full/2606908/donald-trump-elon-musk.jpg",
    "publishedAt": "2025-03-16T14:07:05Z",
    "content": "Elon Musk has said that it is \"necessary\" to file impeachment articles against U.S. District Judge James E. Boasberg, who halted deportation orders directed by President Donald Trump.\r\nWhy It Matters… [+3336 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hackaday"
    },
    "author": "Maya Posch",
    "title": "Transmitting Wireless Power Over Longer Distances",
    "description": "Everyone loves wireless power these days, almost vindicating [Tesla’s] push for wireless power. One reason why transmitting electricity this way is a terrible idea is the massive losses involved once …read more",
    "url": "https://hackaday.com/2025/03/16/transmitting-wireless-power-over-longer-distances/",
    "urlToImage": "https://hackaday.com/wp-content/uploads/2025/03/wireless_power_inductive_coupling_hyperspace_pirate_youtube.jpg",
    "publishedAt": "2025-03-16T14:00:28Z",
    "content": "Proof-of-concept of the inductive coupling transmitter with the 12V version of the circuitry (Credit: Hyperspace Pirate, YouTube)\r\nEveryone loves wireless power these days, almost vindicating [Tesla’… [+1395 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Decrypt"
    },
    "author": "Ryan Gladwin",
    "title": "What is Milady? The Edgy Ethereum NFT Community With Vitalik Buterin’s Support",
    "description": "Milady Maker is a controversial and confusing NFT project that has received co-signs from Elon Musk and Vitalik Buterin. Here's the lowdown.",
    "url": "https://decrypt.co/resources/what-is-milady-edgy-ethereum-nft-community",
    "urlToImage": "https://cdn.decrypt.co/resize/1024/height/512/wp-content/uploads/2025/03/milady-learn-1-gID_5-pID_3.png",
    "publishedAt": "2025-03-16T14:00:03Z",
    "content": "Originating as an NFT community, Milady and its surrounding ecosystem has become one of the most culturally significant groups in Ethereum and crypto as a whole.\r\nOver the years, notable figures have… [+6563 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Te-olycka kostade Starbucks en halv miljard",
    "description": "Blir detta den nya kvinna-fick-för-varmt-kaffe-på-McDonalds-historien?\n\n\n\n\n\n\nHistorien om kvinnan som fick en jäkla massa pengar efter att hon fick för varmt kaffe på McDonald's hörde man ju ganska ofta i sin ungdom. Nu har en liknande grej hänt borta i USA, …",
    "url": "https://feber.se/samhalle/te-olycka-kostade-starbucks-en-halv-miljard/477767/",
    "urlToImage": "https://static.feber.se/article_images/61/34/00/613400.jpg",
    "publishedAt": "2025-03-16T14:00:00Z",
    "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n9 idag\r\n11 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIran stoppar kvinnliga artister på Instagram\r\nMeta kritiseras för att inte ha agerat\r\n20.4°\r\n0\r\nAnnons från \r\n… [+12659 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Donanimhaber.com"
    },
    "author": "",
    "title": "Tesla’nın insansı robotu, devasa uzay roketiyle Mars yolcusu oluyor",
    "description": "SpaceX'in kurucusu Elon Musk, yaptığı açıklamada Starship'in önümüzdeki yılın sonunda Mars'a doğru yola çıkacağını ve Tesla'nın insansı robotu Optimus'u taşıyacağını söyledi.",
    "url": "https://www.donanimhaber.com/tesla-nin-insansi-robotu-starship-roketiyle-mars-yolcusu-oluyor--189032",
    "urlToImage": "https://www.donanimhaber.com/images/images/haber/189032/src_340x1912xtesla-nin-insansi-robotu-starship-roketiyle-mars-yolcusu-oluyor.jpg",
    "publishedAt": "2025-03-16T14:00:00Z",
    "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörElon Musk, SpaceXin devasa uzay arac Starshipin 2026 ylnn sonunda Marsa doru yola çkacan duyurdu. Üstelik bu yolculuk sadece insansz bir test g… [+2271 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Fark.com"
    },
    "author": null,
    "title": "We all love guitars, drums, and keyboards but this week the Sunday Morning Music Club is looking for songs that feature unusual or unexpected instruments [Interesting]",
    "description": "We all love guitars, drums, and keyboards but this week the Sunday Morning Music Club is looking for songs that feature unusual or unexpected instruments",
    "url": "https://www.fark.com/comments/13598718/We-all-love-guitars-drums-keyboards-but-this-week-Sunday-Morning-Music-Club-is-looking-for-songs-that-feature-unusual-unexpected-instruments",
    "urlToImage": "https://usrimg-full.fark.net/Z/Zg/fark_Zgk9IsAtPNRhbCTLSm8DPGtqhJ0.jpg?AWSAccessKeyId=JO3ELGV4BGLFW7Y3EZXN&Expires=1742788800&Signature=5adBNM7Ag186ean44%2FAznwB9vDs%3D",
    "publishedAt": "2025-03-16T14:00:00Z",
    "content": "Recoil Therapy:IamRat: Recoil Therapy: And one more...\r\n[YouTube video: AC/DC - Thunderstruck, but with Tesla Coils]\r\nBadpiper feels neglected\r\nWe could probably do a whole SMMC on Thunderstruck cove… [+42 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "‘History Repeating Itself,’ Says Investor About Nvidia Stock - TipRanks",
    "description": "‘History Repeating Itself,’ Says Investor About Nvidia StockTipRanks Nvidia Stock Rises. New Evidence Shows the AI Trade Is Alive and Well.Barron's Nvidia surpasses Tesla as the No. 1 held stock on Robinhood, fueled by Gen Z interestFortune Nvidia Stock To $6…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176743347",
    "urlToImage": null,
    "publishedAt": "2025-03-16T13:53:20Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": "ansa",
    "name": "ANSA.it"
    },
    "author": null,
    "title": "Musk cancella post che scagiona Stalin-Hitler da genocidio",
    "description": "Nuovo scivolone di Elon Musk su X. Il patron di Tesla ha condiviso un post scritto da un utente sulle azioni di tre dittatori del XX secolo per poi cancellarlo rapidamente dopo aver scatenato una reazione negativa. (ANSA)",
    "url": "https://www.ansa.it/sito/notizie/topnews/2025/03/16/musk-cancella-post-che-scagiona-stalin-hitler-da-genocidio_c7dd4264-2f6a-4de6-947b-566df4357a29.html",
    "urlToImage": "https://www.ansa.it/webimages/img_1129x635/2025/3/10/3fa3c0a4243f682515a6632ae2d22b9e.jpg",
    "publishedAt": "2025-03-16T13:50:31Z",
    "content": "Se hai scelto di non accettare i cookie di profilazione e tracciamento, puoi aderire all’abbonamento \"Consentless\" a un costo molto accessibile, oppure scegliere un altro abbonamento per accedere ad … [+320 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "thestreet.com",
    "title": "Mercedes' new, low-price luxury car is its answer to Tesla",
    "description": "In a commercial aired during Super Bowl XLVII in 2013, Mercedes-Benz introduced a car to the greater American public that exposed the brand to a whole new set of customers.\nIn the ad, a young man peers at an unfinished billboard for a Mercedes CLA, until a Sa…",
    "url": "https://biztoc.com/x/fb22405c6a8d09e3",
    "urlToImage": "https://biztoc.com/cdn/fb22405c6a8d09e3_s.webp",
    "publishedAt": "2025-03-16T13:41:04Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Haberturk.com"
    },
    "author": "Habertürk",
    "title": "Yine Musk'a seslendi",
    "description": "Elon Musk'tan üç çocuğu olan şarkıcı Grimes, eski sevgilisine çocuklarını kamuoyunun gözünden uzak tutması için bir kez daha çağrı yaptı",
    "url": "https://www.haberturk.com/grimes-tan-elon-musk-a-cocuklari-icin-yeni-cagri-yasal-yollari-denedim-magazin-haberleri-3774222-magazin",
    "urlToImage": "https://im.haberturk.com/l/2025/03/16/ver1742131100/3774222/jpg/1200x628",
    "publishedAt": "2025-03-16T13:40:27Z",
    "content": "arkc Grimes, eski sevgilisi ve üç çocuunun babas olan teknoloji giriimcisi Elon Musk'a yine sosyal medya üzerinden ulamaya çalt. ABD Bakan Donald Trump'n danman olarak zamannn büyük bir ksmn Beyaz Sa… [+2765 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Projectcensored.org"
    },
    "author": "Mischa Geracoulis",
    "title": "Meta’s Assault on DEI Plays Right Into the Project 2025 Handbook",
    "description": "Mark Zuckerberg’s decision may have potentially devastating consequences for the safety of marginalized communities.",
    "url": "https://www.projectcensored.org/meta-right-big-tech-project-2025-dei/",
    "urlToImage": "https://truthout.org/app/uploads/2025/03/GettyImages-2192276153-scaled.jpg",
    "publishedAt": "2025-03-16T13:25:53Z",
    "content": "When Mark Zuckerberg terminated Metas diversity, equity, and inclusion (DEI) programs for hiring and training employees and procuring suppliers in January 2025, he forged inroads with the incoming Tr… [+17631 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Inken Schönauer",
    "title": "Technologie-Talfahrt: Europas Aktien im Aufwind gegen Trumps Zollchaos",
    "description": "Investoren flüchten aus US-Technologieaktien. Plötzlich gewinnen unterbewertete europäische Unternehmen an Attraktivität. Das bietet Anlegern Chancen.",
    "url": "https://www.faz.net/aktuell/finanzen/us-technologieaktien-fallen-europa-als-hoffnungstraeger-110357324.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/wirtschaft/4161043388/1.10350212/facebook_teaser/an-der-amerikanischen-boerse.jpg",
    "publishedAt": "2025-03-16T13:24:42Z",
    "content": "Die Stimmung ist mies. Microsoft, Tesla, Amazon, an der Börse ist die Aktienentwicklung der Technologiewerte ein Trauerspiel. In Scharen flüchten die Anleger aus amerikanischen Aktien. Donald Trump e… [+4167 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Inken Schönauer",
    "title": "Technologie-Talfahrt: Europas Aktien im Aufwind gegen Trumps Zollchaos",
    "description": "Investoren flüchten aus US-Technologieaktien. Plötzlich gewinnen unterbewertete europäische Unternehmen an Attraktivität. Das bietet Anlegern Chancen.",
    "url": "https://www.faz.net/aktuell/finanzen/us-tech-aktien-fallen-europas-aktien-im-aufwind-gegen-trumps-zollchaos-110357324.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/wirtschaft/4161043388/1.10350212/facebook_teaser_fplus/an-der-amerikanischen-boerse.jpg",
    "publishedAt": "2025-03-16T13:24:42Z",
    "content": "Die Stimmung ist mies. Microsoft, Tesla, Amazon, an der Börse ist die Aktienentwicklung der Technologiewerte ein Trauerspiel. In Scharen flüchten die Anleger aus amerikanischen Aktien. Donald Trump e… [+74 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "LADbible"
    },
    "author": "Joshua Nair",
    "title": "Elon Musk makes huge prediction as he confirms SpaceX will send Starship to Mars next year",
    "description": "SpaceX CEO Elon Musk has shared a huge update in his mission to have humans step foot on Mars.",
    "url": "https://www.ladbible.com/news/science/elon-musk-prediction-send-spaceship-mars-2026-482113-20250316",
    "urlToImage": "https://images.ladbible.com/ogimage/v3/assets/bltcd74acc1d0a99f3a/blt4f25fab3ba747cd1/67d6bf3d7c3506abaaa8ca5c/elon-musk-mars.png",
    "publishedAt": "2025-03-16T13:22:45Z",
    "content": "Elon Musk has made a bold statement about the future of humanity and has mapped out a plan for space travel.\r\nWhether you like it or not, the businessman has a hand in some of the most influential or… [+2350 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Truthout"
    },
    "author": "Tyler Walicek",
    "title": "As DOGE Mauls Social Security, Profit-Hungry Private Equity Is Swooping In",
    "description": "Three private equity veterans are weaseling their way in, reportedly on the orders of the presumptive SSA commissioner.",
    "url": "https://truthout.org/articles/as-doge-mauls-social-security-profit-hungry-private-equity-is-swooping-in/",
    "urlToImage": "https://truthout.org/app/uploads/2025/03/GettyImages-1145334173-scaled.jpg",
    "publishedAt": "2025-03-16T13:22:14Z",
    "content": "The Social Security Administration (SSA), an irreplaceable lifeline for 73 million people, is only the latest venerable U.S. institution to be hit with a campaign of media falsehoods and startling in… [+14316 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Martín Nicolás Parolari",
    "title": "La misión que cambiará la historia: ¿Cuándo viajarán los humanos a Marte?",
    "description": "Elon Musk ha revelado nuevos detalles sobre la misión que acercará a la humanidad al planeta rojo. SpaceX planea enviar el megacohete Starship a Marte en 2026, y si todo sale según lo previsto, los primeros humanos podrían pisar su superficie en menos de una …",
    "url": "https://es.gizmodo.com/la-mision-que-cambiara-la-historia-cuando-viajaran-los-humanos-a-marte-2000154728",
    "urlToImage": "https://es.gizmodo.com/app/uploads/2025/03/Diseno-sin-titulo-51-14.jpg",
    "publishedAt": "2025-03-16T13:22:11Z",
    "content": "Desde hace décadas, la posibilidad de que los humanos viajen a Marte ha sido un sueño de científicos y exploradores. Sin embargo, nunca antes había estado tan cerca de volverse realidad. SpaceX ha da… [+2955 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Todocircuito.com"
    },
    "author": null,
    "title": "La dakariana española que llegará esta primavera a un precio rompedor",
    "description": "La primavera de 2025 traerá consigo una de las apuestas más esperadas de Rieju: la Aventura Rally 307, una moto pensada para los amantes del off-road y las aventuras extremas.",
    "url": "https://www.todocircuito.com/noticias/38473-la-dakariana-espanola-que-llegara-esta-primavera-a-un-precio-rompedor.html",
    "urlToImage": "https://www.todocircuito.com/noticias/38473/avatar.jpg",
    "publishedAt": "2025-03-16T13:17:18Z",
    "content": "La primavera de 2025 traerá consigo una de las apuestas más esperadas de Rieju: la Aventura Rally 307, una moto pensada para los amantes del off-road y las aventuras extremas. Presentada en la última… [+2669 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Robert Costa",
    "title": "Government expert on Elon Musk and DOGE's \"slash-and-burn exercise\"",
    "description": "Trump campaign funder and government disrupter Elon Musk has used unprecedented power to quickly eliminate thousands of federal jobs and shutter entire programs and agencies, using tactics that have raised questions about transparency.",
    "url": "https://www.cbsnews.com/news/government-expert-on-elon-musk-and-doges-slash-and-burn-exercise/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/03/15/20f12dee-7838-41c2-85bf-aa57246cd6fb/thumbnail/1200x630/1daba300455314269d18e504f5a9fc82/elon-musk-with-chainsaw-at-cpac-1280-getty-2200061382.jpg?v=e7f44f50e1cf6b32bb81cbfeaec70acf",
    "publishedAt": "2025-03-16T13:16:26Z",
    "content": "It was a remarkable moment last Tuesday: President Trump standing beside a shiny electric car at the White House making a pitch for the car's maker, Elon Musk: \"This man has devoted his energy and hi… [+8019 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iltalehti.fi"
    },
    "author": null,
    "title": "Tanskalaiset haluavat eroon Tesloistaan",
    "description": "Verkkokaupan analyytikko: ”He eivät halua omistaa mitään mikä liittyy Elon Muskiin”. Tanskalaiset ovat saaneet tarpeekseen Teslasta. Vielä hetki sitten maan suosituimmasta automerkistä hankkiudutaan nyt eroon ennätystahtia, tanskalainen BD Nyheter-lehti kerto…",
    "url": "https://www.iltalehti.fi/sahkoautot/a/f7843d33-d339-4faa-8ffc-7b51af2890ec",
    "urlToImage": "https://img.ilcdn.fi/rXbV4om_zIiXOzO5aqbRG5RAkO8=/0x15:3000x1888/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/38c8c97d0b07a581e10d291ee95b00a1fcab1cbb00e4f78854225fb8615f7936.jpg",
    "publishedAt": "2025-03-16T13:14:45Z",
    "content": "Tanskalaiset ovat saaneet tarpeekseen Teslasta. Vielä hetki sitten maan suosituimmasta automerkistä hankkiudutaan nyt eroon ennätystahtia, tanskalainen BD Nyheter-lehti kertoo.\r\nTeslaansa myyvien yks… [+1723 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PCMag.com"
    },
    "author": "Will Mccurdy",
    "title": "Report: Tesla’s Cybertruck Deliveries Paused Due to Trims ‘Flying Off’",
    "description": "The automaker had issues with detaching trims June 2024, recalling over 11,000 vehicles on account of similar issues.\nNew deliveries of Tesla’s Cybertruck are now on hold as trims are reportedly “flying off” the vehicle, Electrek reports.According to conversa…",
    "url": "https://uk.pcmag.com/cars-auto/157133/report-teslas-cybertruck-deliveries-paused-due-to-trims-flying-off",
    "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/r/report-tes/report-teslas-cybertruck-deliveries-paused-due-to-trims-flyi_gqkh.1200.jpg",
    "publishedAt": "2025-03-16T13:08:50Z",
    "content": "New deliveries of Teslas Cybertruck are now on hold as trims are reportedly flying off the vehicle, Electrek reports.\r\nAccording to conversations with auto dealers posted in an online community for C… [+1781 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PCMag.com"
    },
    "author": "Will Mccurdy",
    "title": "Report: Tesla’s Cybertruck Deliveries Paused Due to Trims ‘Flying Off’",
    "description": "The automaker had issues with detaching trims June 2024, recalling over 11,000 vehicles on account of similar issues.\nNew deliveries of Tesla’s Cybertruck are now on hold as trims are reportedly “flying off” the vehicle, Electrek reports.According to conversa…",
    "url": "https://me.pcmag.com/en/cars-auto/28891/report-teslas-cybertruck-deliveries-paused-due-to-trims-flying-off",
    "urlToImage": "https://sm.pcmag.com/t/pcmag_me/news/r/report-tes/report-teslas-cybertruck-deliveries-paused-due-to-trims-flyi_9257.1200.jpg",
    "publishedAt": "2025-03-16T13:08:50Z",
    "content": "New deliveries of Teslas Cybertruck are now on hold as trims are reportedly flying off the vehicle, Electrek reports.\r\nAccording to conversations with auto dealers posted in an online community for C… [+1781 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.dr.dk"
    },
    "author": null,
    "title": "Prorussisk nationalist fik præsidentvalg aflyst i første omgang. Nu holdes der omvalg - og han må ikke være med",
    "description": "Flere kandidater til det rumænske præsidentvalg blev på forhånd afvist inden gårsdagens deadline for opstilling.",
    "url": "https://www.dr.dk/nyheder/udland/prorussisk-nationalist-fik-praesidentvalg-aflyst-i-foerste-omgang-nu-holdes-der",
    "urlToImage": "https://asset.dr.dk/drdk/drupal-images/other/2025/03/15/scanpix-25072633314385.jpg?im=AspectCrop%3D%281200%2C675%29%2CxPosition%3D.5%2CyPosition%3D.5%3BResize%3D%281200%2C675%29",
    "publishedAt": "2025-03-16T13:08:00Z",
    "content": "Er der tale om demokrati, når en kandidat, der allerede har vundet første runde af valget, bliver afvist af en domstol?\r\nDet er cirka det spørgsmål, der lige nu bliver gentaget rundt om i Europa.\r\nFo… [+1606 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NPR"
    },
    "author": "",
    "title": "A Tesla protester targeted by Elon Musk speaks out: 'I have to protect myself.'",
    "description": "Organizers say protests are planned this weekend at more than 100 Tesla stores nationwide. The demonstrations are part of a backlash to Elon Musk's role in upending the federal government.\nMusk has been using his social media platform, X, to individually targ…",
    "url": "https://www.npr.org/2025/03/16/nx-s1-5328626/a-tesla-protester-targeted-by-elon-musk-speaks-out-i-have-to-protect-myself",
    "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
    "publishedAt": "2025-03-16T13:04:50Z",
    "content": "Organizers say protests are planned this weekend at more than 100 Tesla stores nationwide. The demonstrations are part of a backlash to Elon Musk's role in upending the federal government.\r\nMusk has … [+211 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Journal du geek"
    },
    "author": "Olivier",
    "title": "Robots humanoïdes : une adoption massive dès 2030 ?",
    "description": "Les robots humanoïdes ne sont plus un fantasme de science-fiction. Selon un rapport de Bank of America, leur adoption pourrait exploser dans les années à venir. D’ici 2030, un million de ces machines pourraient être vendues chaque année, et en 2060, elles ser…",
    "url": "https://www.journaldugeek.com/2025/03/16/robots-humanoides-une-adoption-massive-des-2030/",
    "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/11/optimus-tesla.jpg",
    "publishedAt": "2025-03-16T13:01:58Z",
    "content": "Lessor de ces machines est porté par plusieurs facteurs : des avancées majeures en intelligence artificielle, des technologies de perception 3D toujours plus performantes et une baisse du coût des co… [+2322 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Haber7.com"
    },
    "author": "Emrullah Koçin",
    "title": "ABD'de Tesla bayileri önündeki yüzlerce göstericiden Elon Musk'a protesto",
    "description": "ABD'de, yüzlerce kişi Hükümet Verimliliği Bakanlığının (DOGE) federal bütçe kesintilerini protesto amacıyla Elon Musk'ın Üst Yöneticisi (CEO) olduğu Tesla'nın bayileri önünde toplanmaya devam ediyor.",
    "url": "https://www.haber7.com/ekonomi/haber/3513975-abdde-tesla-bayileri-onundeki-yuzlerce-gostericiden-elon-muska-protesto",
    "urlToImage": "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2025/11/abdde_tesla_bayileri_onundeki_yuzlerce_gostericiden_elon_muska_protesto_1742130076_47.jpg",
    "publishedAt": "2025-03-16T13:01:00Z",
    "content": "ABD basnndaki haberlere göre, Boston, Philadelphia, Baltimore ve bakent Washington DC'de göstericiler, Tesla bayileri önünde bir araya geldi.\r\nYüzlerce gösterici, DOGE'nin federal kesintilerini prote… [+600 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Victor Tangermann",
    "title": "Tesla Reportedly Stops Cybertruck Deliveries Because a Massive Part Keeps Flying Off",
    "description": "Tesla's highly divisive Cybertruck has long garnered a reputation for falling apart and generally struggling with keeping up with its truck competition. And apart from becoming the number one target of mockery and vandalism on the road, in large part due to T…",
    "url": "https://futurism.com/tesla-stops-cybertruck-deliveries-trim",
    "urlToImage": "https://wordpress-assets.futurism.com/2025/03/tesla-stops-cybertruck-deliveries-trim.jpg",
    "publishedAt": "2025-03-16T13:00:01Z",
    "content": "Tesla's highly divisive Cybertruck has long garnered a reputation for falling apart, getting stuck, and generally struggling to keep up with its truckly competition.\r\nAside from all that nevermind be… [+2952 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Mannen som lurade amerika",
    "description": "Här är filmen om Michael Larson\n\n\n\n\n\n\n\n\n\n\nHär är trailern för filmen The Luckiest Man In America som handlar om Michael Larson, en arbetslös glassbilschaufför från Ohio som blev känd som mannen som hade världens tur på det amerikanska tv-programmet Press Your…",
    "url": "https://feber.se/film/mannen-som-lurade-amerika/477766/",
    "urlToImage": "https://i.ytimg.com/vi/5Dw_pujgp5Y/hqdefault.jpg",
    "publishedAt": "2025-03-16T13:00:00Z",
    "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n8 idag\r\n11 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIran stoppar kvinnliga artister på Instagram\r\nMeta kritiseras för att inte ha agerat\r\n23.5°\r\n0\r\nAnnons från \r\n… [+11701 chars]"
    },
    {
    "source": {
    "id": "breitbart-news",
    "name": "Breitbart News"
    },
    "author": "Simon Kent, Simon Kent",
    "title": "Kim Kardashian Smeared as a ‘Nazi’ After Posing with Tesla Robot, Cyber Truck: ‘KKKardashian’",
    "description": "Kim Kardashian was slammed as a “nazi” on her Instagram page Friday evening after she shared images of her posing with a Tesla Cyber Truck.\nThe post Kim Kardashian Smeared as a ‘Nazi’ After Posing with Tesla Robot, Cyber Truck: ‘KKKardashian’ appeared first o…",
    "url": "https://www.breitbart.com/entertainment/2025/03/16/kim-kardashian-smeared-as-a-nazi-after-posing-with-tesla-robot-cyber-truck-kkkardashian/",
    "urlToImage": "https://media.breitbart.com/media/2025/03/kardashian-640x335.jpg",
    "publishedAt": "2025-03-16T12:50:57Z",
    "content": "Kim Kardashian was slammed as a nazi on her Instagram page Friday evening after she shared images of her posing with a Tesla Cyber Truck.\r\nMediaite notes the 44-year-old fashion influencer and former… [+1467 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theguardian.com",
    "title": "Notable Tesla investor says he hopes Musk’s government role is ‘short-lived’ | Elon Musk",
    "description": "A devoted investor in Elon Musk’s Tesla – and once a close childhood friend of the US president’s eldest son and namesake – says he hopes the world’s richest man’s role in cutting federal spending for Donald Trump’s administration is “short-lived” and that he…",
    "url": "https://biztoc.com/x/701be823e5e8af37",
    "urlToImage": "https://biztoc.com/cdn/701be823e5e8af37_s.webp",
    "publishedAt": "2025-03-16T12:45:30Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "SECURITY AFFAIRS MALWARE NEWSLETTER ROUND 37",
    "description": "Security Affairs Malware newsletter includes a collection of the best articles and research on malware in the international landscape Undercover miner: how YouTubers get pressed into distributing SilentCryptoMiner as a restriction bypass tool   Ragnar Loader …",
    "url": "https://securityaffairs.com/175472/malware/security-affairs-malware-newsletter-round-37.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2024/07/SecurityAffairs-malware-newsletter-2.png",
    "publishedAt": "2025-03-16T12:45:04Z",
    "content": "SECURITY AFFAIRS MALWARE NEWSLETTER ROUND 37\r\n | Security Affairs newsletter Round 515 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | A ransomware attack hit the Micronesian state of Yap, causing th… [+148068 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Alejandro Alcolea",
    "title": "\"No un teléfono, es un coche\": Volkswagen cree que las pantallas en los coches están llegando demasiado lejos",
    "description": "Para algunos fabricantes de coches, sólo importan las pantallas. Tras el minimalismo extremo del Tesla Model 3 2017 que eliminaba botones para relegar el control del coche a la enorme pantalla central, hubo fabricantes que se subieron al carro. Llenar el salp…",
    "url": "https://www.xataka.com/movilidad/no-telefono-coche-volkswagen-da-marcha-atras-fiebre-pantallas-coches-promete-cambiar-chip",
    "urlToImage": "https://i.blogs.es/5185c2/volkswagen-id-every1/840_560.jpeg",
    "publishedAt": "2025-03-16T12:30:42Z",
    "content": "Para algunos fabricantes de coches, sólo importan las pantallas. Tras el minimalismo extremo del Tesla Model 3 2017 que eliminaba botones para relegar el control del coche a la enorme pantalla centra… [+5026 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Donanimhaber.com"
    },
    "author": "",
    "title": "İngiliz girişim, ultra hafif elektrikli spor otomobillerini tanıttı",
    "description": "İngiliz elektrikli otomobil girişimi Longbow, İngiliz klasiklerinin özünü yeniden yaratan ultra hafif iki elektrikli spor otomobilini tanıttı. Speedster ve Roadster isimli modeller neler sunuyor?",
    "url": "https://www.donanimhaber.com/ingiliz-girisim-ultra-hafif-elektrikli-otomobillerini-tanitti--189013",
    "urlToImage": "https://www.donanimhaber.com/images/images/haber/189013/src_340x1912xingiliz-girisim-ultra-hafif-elektrikli-otomobillerini-tanitti.jpg",
    "publishedAt": "2025-03-16T12:30:00Z",
    "content": "a').click(); event.preventDefault();\"&gt;Tam Boyutta Görngiltere kökenli elektrikli otomobil giriimi Longbow, Lotus Elise ve Jaguar E-Type gibi ngiliz klasiklerinin özünü yeniden yaratan iki elektrik… [+2660 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Gizmodo.com"
    },
    "author": "Martín Nicolás Parolari",
    "title": "China mueve sus piezas en la robótica humanoide: El nuevo autómata que podría cambiarlo todo",
    "description": "Un robot con forma humana, movimientos precisos y una estructura avanzada ya puede reservarse en China por un precio sorprendentemente accesible. Mientras el mundo observa la carrera por el desarrollo de la inteligencia artificial y la automatización, este hu…",
    "url": "https://es.gizmodo.com/china-mueve-sus-piezas-en-la-robotica-humanoide-el-nuevo-automata-que-podria-cambiarlo-todo-2000154690",
    "urlToImage": "https://es.gizmodo.com/app/uploads/2025/03/Diseno-sin-titulo-34-13.jpg",
    "publishedAt": "2025-03-16T12:25:57Z",
    "content": "La robótica avanza a una velocidad que pocos pueden prever. Lo que antes era exclusivo de la ciencia ficción ahora se convierte en una realidad tangible. Desde la capacidad de caminar y equilibrarse … [+3054 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "RC FRAUD ALERT: Ready Capital has been Sued for Fraud - Contact BFA Law before May 5 Class Action Deadline (NYSE:RC)",
    "description": "Ready Capital Corporation investors that lost money are encouraged to contact BFA Law before May 5, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043309/0/en/RC-FRAUD-ALERT-Ready-Capital-has-been-Sued-for-Fraud-Contact-BFA-Law-before-May-5-Class-Action-Deadline-NYSE-RC.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:18:00Z",
    "content": "NEW YORK, March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Ready Capital Corporation (NYSE: RC) and certai… [+3305 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "TMDX FRAUD ALERT: TransMedics Group has been Sued for Fraud - Contact BFA Law before April 15 Class Action Deadline (NASDAQ:TMDX)",
    "description": "TransMedics Group, Inc. investors that lost money are encouraged to contact BFA Law before April 15, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043310/0/en/TMDX-FRAUD-ALERT-TransMedics-Group-has-been-Sued-for-Fraud-Contact-BFA-Law-before-April-15-Class-Action-Deadline-NASDAQ-TMDX.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:18:00Z",
    "content": "NEW YORK, March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against TransMedics Group, Inc. (NASDAQ: TMDX) and cert… [+3862 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "TTD FRAUD ALERT: Trade Desk, Inc. has been Sued for Fraud - Contact BFA Law before April 21 Class Action Deadline (NASDAQ:TTD)",
    "description": "The Trade Desk, Inc. investors that lost money are encouraged to contact BFA Law before April 21, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043308/0/en/TTD-FRAUD-ALERT-Trade-Desk-Inc-has-been-Sued-for-Fraud-Contact-BFA-Law-before-April-21-Class-Action-Deadline-NASDAQ-TTD.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:18:00Z",
    "content": "NEW YORK , March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against The Trade Desk, Inc. (NASDAQ: TTD) and certain… [+3455 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "ATKR FRAUD ALERT: Atkore Inc. has been Sued for Fraud - Contact BFA Law before April 23 Class Action Deadline (NYSE:ATKR)",
    "description": "Atkore Inc. investors that lost money are encouraged to contact BFA Law before April 23, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043307/0/en/ATKR-FRAUD-ALERT-Atkore-Inc-has-been-Sued-for-Fraud-Contact-BFA-Law-before-April-23-Class-Action-Deadline-NYSE-ATKR.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:16:00Z",
    "content": "NEW YORK, March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Atkore Inc. (NYSE: ATKR) and certain of the Com… [+4097 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "CROX FRAUD ALERT: Crocs, Inc. has been Sued for Fraud - Contact BFA Law before March 24 Class Action Deadline (NASDAQ:CROX)",
    "description": "Crocs. Inc. investors that lost money are encouraged to contact BFA Law before March 24, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043305/0/en/CROX-FRAUD-ALERT-Crocs-Inc-has-been-Sued-for-Fraud-Contact-BFA-Law-before-March-24-Class-Action-Deadline-NASDAQ-CROX.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:16:00Z",
    "content": "NEW YORK, March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Crocs, Inc. (NASDAQ: CROX) and certain of the C… [+3723 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Bleichmar Fonti & Auld",
    "title": "FLNC FRAUD ALERT: Fluence Energy, Inc. has been Sued for Fraud - Contact BFA Law before May 12 Class Action Deadline (NASDAQ:FLNC)",
    "description": "Fluence Energy, Inc. investors that lost money are encouraged to contact BFA Law before May 12, 2025 class action deadline.......",
    "url": "https://www.globenewswire.com/news-release/2025/03/16/3043306/0/en/FLNC-FRAUD-ALERT-Fluence-Energy-Inc-has-been-Sued-for-Fraud-Contact-BFA-Law-before-May-12-Class-Action-Deadline-NASDAQ-FLNC.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
    "publishedAt": "2025-03-16T12:16:00Z",
    "content": "NEW YORK, March 16, 2025 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a lawsuit has been filed against Fluence Energy, Inc. (NASDAQ: FLNC) and certain… [+3707 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theguardian.com",
    "title": "‘Deeply uncomfortable’: UK Starlink users switch off over Musk’s political machinations",
    "description": "Numbers using satellite broadband system has been growing but users are having second thoughts due to Musk’s role in Donald Trump’s administration\nTesla sales have tumbled, X has seen an exodus of users, and now it seems cracks are appearing among those who h…",
    "url": "https://biztoc.com/x/64b1edafade386a8",
    "urlToImage": "https://biztoc.com/cdn/64b1edafade386a8_s.webp",
    "publishedAt": "2025-03-16T12:12:37Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Jason Chaffetz",
    "title": "JASON CHAFFETZ: Democrats have a major problem and they can't fake their way out of it",
    "description": "Democrats are struggling to act sincerely and establish a genuine connection with voters.",
    "url": "https://www.foxnews.com/opinion/jason-chaffetz-democrats-major-problem-cant-fake-way-out",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/01/schumer_biden.png",
    "publishedAt": "2025-03-16T12:00:33Z",
    "content": "Following an election in which voters overwhelmingly rejected the fake competence of Vice President Kamala Harris and the fake lucidity of President Joe Biden, Democrats have opted to double down on … [+4612 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HuffPost"
    },
    "author": "S.V. Date",
    "title": "Opinion: Elon Musk And SpaceX’s Seeming Rocket Recklessness Is Already Endangering Lives Here On Earth",
    "description": "His new “Starships” have lost control and come apart over the Bahamas and the  Turks and Caicos. Do Americans really believe he will be more mindful with government programs they rely on?",
    "url": "https://www.huffpost.com/entry/musk-reckless-starship_n_67d2dadae4b0180744f7a0e7",
    "urlToImage": "https://img.huffingtonpost.com/asset/67d2db7a18000024007bb72a.jpeg?ops=1200_630",
    "publishedAt": "2025-03-16T12:00:28Z",
    "content": "WASHINGTON If you live in the Florida Keys, the southern Bahamas, the Turks and Caicos, perhaps even Miami and Cuba, Elon Musks SpaceX appears intent on repeatedly and needlessly endangering your lif… [+8107 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Abertoatedemadrugada.com"
    },
    "author": "Carlos Martins",
    "title": "Musk quer chegar a Marte em 2026 e viagens com humanos em 2029",
    "description": "Na última ronda de promessas, Elon Musk promete enviar uma Starship para Marte em 2026, com o primeiro voo com humanos em 2029 ou 2031.",
    "url": "https://abertoatedemadrugada.com/2025/03/musk-quer-chegar-marte-em-2026-e.html",
    "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0jsoYsRtjVW9sqit17Vx4nY95mqkr4Ogk3YAabKbNhzE4hSV-9GsqDwIui_nZMg71AovdxofgYvrconggDRLxtMU4gwCGU3fruGZcwMqiN7g9y2-zK1RB9Cf1GNjvSs77NM2-Rei1jTRB5IvWNEpfpnIXr2IsBySl9xD9pNmieiJQGMxh8D7oNcEZRhiI/w1200-h630-p-k-no-nu/muskoptimusmars.jpg",
    "publishedAt": "2025-03-16T12:00:00Z",
    "content": "Na última ronda de promessas, Elon Musk promete enviar uma Starship para Marte em 2026, com o primeiro voo com humanos em 2029 ou 2031.\n\n\nElon Musk continua a manter o seu objectivo de chegar a Marte… [+1830 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "En remake av The Elder Scrolls IV sägs vara på gång",
    "description": "Har de fått slut på Skyrim-remakes?\n\n\n\n\n\n\nI veckan dök det upp ett rykte om att en officiell remake av The Elder Scrolls IV: Oblivion kan vara på gång och att den kan släppas redan nästa månad. Enligt läckaren NatetheHate planeras både avslöjandet och lanseri…",
    "url": "https://feber.se/spel/en-remake-av-the-elder-scrolls-iv-sags-vara-pa-gang/477764/",
    "urlToImage": "https://static.feber.se/article_images/61/33/99/613399.jpg",
    "publishedAt": "2025-03-16T12:00:00Z",
    "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n7 idag\r\n11 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIran stoppar kvinnliga artister på Instagram\r\nMeta kritiseras för att inte ha agerat\r\n25.1°\r\n0\r\nAnnons från \r\n… [+12499 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Le Point"
    },
    "author": "Guillaume Grallet",
    "title": "Elon Musk et Mars : le spectre de la fuite en avant",
    "description": "Et si le multi-entrepreneur, qui doit faire face a un ralentissement de ses ventes de Tesla et a de fortes tensions avec les scientifiques aux Etats-Unis, cherchait a oublier ses soucis sur Terre ?",
    "url": "https://www.lepoint.fr/science/elon-musk-reve-t-il-en-voulant-envoyer-l-homme-sur-mars-16-03-2025-2584852_25.php",
    "urlToImage": "https://static.lpnt.fr/images/2025/03/16/27480127lpw-27480783-mega-une-jpg_10972590.jpg",
    "publishedAt": "2025-03-16T11:54:00Z",
    "content": "Faire de l'humanité une espèce multiplanétaire. Elon Musk vient de le réaffirmer en annonçant sur X que la fusée Starship pourrait décoller vers Mars à la fin de l'année 2026, transportant avec elle … [+1097 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Elconfidencial.com"
    },
    "author": "S. Román",
    "title": "Así es la nave Starship con la que Elon Musk quiere llevar a los humanos a Marte en el futuro",
    "description": "Starship, el megacohete de SpaceX, es la apuesta de Elon Musk para llevar humanos a Marte. Con 123 metros de altura y un diseño totalmente reutilizable, la nave avanza en su desarrollo pese a los recientes contratiempos.",
    "url": "https://www.elconfidencial.com/tecnologia/2025-03-16/starship-nave-elon-musk-humanos-viaje-marte-futuro-fecha-desafio_4087109/",
    "urlToImage": "https://images.ecestaticos.com/Xb8ckbllomZeBstgvs5QFR3BFRc=/0x0:2272x1563/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/bae/eea/fde/baeeeafde1b3229287b0c008f7602058.png,0,275,1)/f.elconfidencial.com/original/bd5/7df/90f/bd57df90f8435577f6ed395d39150a4b.jpg",
    "publishedAt": "2025-03-16T11:50:00Z",
    "content": "Esto es lo que paga Elon Musk a los empleados de Tesla: la tabla salarial se ha filtrado“Las drogas lo están volviendo loco”: el biógrafo de Elon Musk alerta sobre su estado mentalElon Musk sigue ava… [+3013 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Sg.hu"
    },
    "author": "SG.hu",
    "title": "Annyi a Teslának?",
    "description": "A vezérigazgató nincs jelen, a részvények zuhannak, a márka pedig leromlott. A Tesla jövője komornak tűnik.",
    "url": "https://sg.hu/cikkek/auto/160722/annyi-a-teslanak",
    "urlToImage": "https://sg.hu/https://media.sg.hu/kep/2025_03/0313tes1.jpg",
    "publishedAt": "2025-03-16T11:49:51Z",
    "content": "A vezérigazgató nincs jelen, a részvények zuhannak, a márka pedig leromlott. A Tesla jövje komornak tnik.A Tesla részvényei hétfn 15 százalékkal zuhantak, ami az elmúlt öt év legmeredekebb esése. Az … [+10549 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Josh Schafer",
    "title": "A Fed meeting and retail sales data greet a flailing stock market: What to know this week",
    "description": "With the stock market on its worst stretch of 2025, investors will be looking for clues on when, or if, the Federal Reserve will cut interest rates further...",
    "url": "https://finance.yahoo.com/news/a-fed-meeting-and-retail-sales-data-greet-a-flailing-stock-market-what-to-know-this-week-114218621.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/FWXpcg4uGoubL9MempBeXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2025-03/d1560c70-004b-11f0-a57f-5da98a8bbdd0",
    "publishedAt": "2025-03-16T11:42:18Z",
    "content": "The stock market has sunk near a six-month low as concerns over slowing economic growth and fear of how tariffs could impact the outlook have shaken investor confidence.\r\nLast week, the S&amp;P 500 (… [+6297 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Futurism"
    },
    "author": "Joe Wilkins",
    "title": "Tesla Warns That Trump's Tariffs Are Hurting It Terribly",
    "description": "It's been a rough start to the year for Tesla motors, to say the least. The EV giant kicked off the new year with the announcement of its first recorded annual sales decline, a staggering 71 percent drop in revenue compared to the previous year. This kicked o…",
    "url": "https://futurism.com/tesla-trump-tariffs",
    "urlToImage": "https://wordpress-assets.futurism.com/2025/03/tesla-trump-tariffs.jpg",
    "publishedAt": "2025-03-16T11:30:55Z",
    "content": "It's been a rough start to the year for Tesla.\r\nThe EV giant kicked off 2025 with the announcement of its first recorded annual sales decline, a staggering 71 percent drop in profit compared to the p… [+2959 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com"
    },
    "author": "Miguel Jorge",
    "title": "La estrategia de EEUU ante el imparable crecimiento naval de China tiene un protagonista inesperado: Japón",
    "description": "Estados Unidos se ha ido quedando rezagada en un terreno que antes dominaba con puño de hierro. Su flota (sub)marina se ha reducido a la misma vez que su presupuesto. Mientras China, Rusia o incluso Corea del Norte han ido desarrollando un nuevo tipo de “guer…",
    "url": "https://www.xataka.com/magnet/solucion-eeuu-imparable-crecimiento-naval-china-tiene-protagonista-inesperado-japon",
    "urlToImage": "https://i.blogs.es/de9c5b/14115217403_c57cf0e82b_k/840_560.jpeg",
    "publishedAt": "2025-03-16T11:30:42Z",
    "content": "Estados Unidos se ha ido quedando rezagada en un terreno que antes dominaba con puño de hierro. Su flota (sub)marina se ha reducido a la misma vez que su presupuesto. Mientras China, Rusia o incluso … [+5760 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Overclockers.ru"
    },
    "author": "mrTabann",
    "title": "Tesla прекращает поставки Cybertruck, поскольку владельцы жалуются на отваливающиеся борта",
    "description": "Tesla Cybertruck сталкивается с серьезными проблемами качества, включая отслоение клея, удерживающего стальные панели кузова. Продажи временно приостановлены из-за дефектов, а владельцы жалуются на острые края и отваливающиеся детали. Это лишь часть множества…",
    "url": "https://overclockers.ru/blog/Prototype_73/show/214132/Tesla-prekraschaet-postavki-Cybertruck-poskol-ku-vladel-cy-zhalujutsya-na-otvalivajuschiesya-borta",
    "urlToImage": "https://overclockers.ru/st/legacy/blog/434552/633838_O.png",
    "publishedAt": "2025-03-16T11:20:49Z",
    "content": "Tesla , Cybertruck , . , , .\r\n Cybertruck - , , . Electrek, , , Tesla - , , , .\r\n , . , , , , . (NHTSA), Road &amp; Track .\r\n , , , , . Tesla Fortune .\r\n Cybertruck , , . , , .\r\n , , , WhistlinDiesel… [+242 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka Android"
    },
    "author": "Eva R. de Luis",
    "title": "China deslumbra en robótica con este futurista robot humanoide que solo cuesta 38.000 euros y ya se puede reservar",
    "description": "Todo apunta a que los robots humanoides han llegado para quedarse y además China está empeñada en popularizarlos para todo tipo de tareas y situaciones, de modo que más pronto que tarde no nos extrañe su presencia dirigiendo el tráfico o en hospitales. De hec…",
    "url": "https://www.xatakandroid.com/mercado/china-deslumbra-robotica-este-futurista-robot-humanoide-que-solo-cuesta-38-000-euros-se-puede-reservar",
    "urlToImage": "https://i.blogs.es/523caa/roboto/840_560.jpeg",
    "publishedAt": "2025-03-16T11:16:42Z",
    "content": "Todo apunta a que los robots humanoides han llegado para quedarse y además China está empeñada en popularizarlos para todo tipo de tareas y situaciones, de modo que más pronto que tarde no nos extrañ… [+3099 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bright.nl"
    },
    "author": "info@bright.nl (Rutger Middendorp)",
    "title": "EV-mythes: zoveel verschillende stekkers zijn er heus niet",
    "description": "Steeds meer mensen rijden elektrisch en daarmee verdwijnen gestaag de nodige EV-mythes. Verhalen over ernstige tekortkomingen en ondragelijke ergernissen. Zoals de verschillende soorten stekkers die je nodig hebt voor elektrische auto’s.",
    "url": "https://www.bright.nl/nieuws/1262785/ev-mythes-zoveel-verschillende-stekkers-zijn-er-heus-niet.html",
    "urlToImage": "https://webp.br.cdn.pxr.nl/news/2025/03/10/ebd887f76da1d34397c424d26f31a9b1f63c72d2.jpg?width=1200",
    "publishedAt": "2025-03-16T11:15:04Z",
    "content": "Steeds meer mensen rijden elektrisch en daarmee verdwijnen gestaag de nodige EV-mythes. Verhalen over ernstige tekortkomingen en ondragelijke ergernissen. Zoals de verschillende soorten stekkers die … [+1672 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "'See you in four years': Canada flexes economic muscle as tariff negotiations continue",
    "description": "Trump's plans for tariffs and comments about Canada becoming a state has enraged the country's consumers and politicians.",
    "url": "https://www.cnbc.com/2025/03/16/see-you-in-four-years-canada-flexes-economic-muscle-as-tariff-negotiations-continue.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108112011-1741276275715-gettyimages-2202807321-CANADA-VANCOUVER-COUNTER_TARIFF_PACKAGE-US.jpeg?v=1741276344&w=1920&h=1080",
    "publishedAt": "2025-03-16T11:12:42Z",
    "content": "A \"Shop Canadian\" sign is seen at the entrance of a supermarket in Vancouver, British Columbia, Canada, March 4, 2025. \r\nCanadians are swapping their friendly auras for a fierce sense of nationalism … [+6990 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Slashdot.org"
    },
    "author": "feedfeeder",
    "title": "Can Trump and Musk Convince More Conservatives to Buy Teslas? - The New York Times",
    "description": "Can Trump and Musk Convince More Conservatives to Buy Teslas?The New York Times Musk’s never been more powerful so why are Tesla shares tanking?Al Jazeera English What's the matter with Tesla?NBC News Elon Musk’s antics are not the only problem for TeslaThe E…",
    "url": "https://slashdot.org/firehose.pl?op=view&amp;id=176742323",
    "urlToImage": null,
    "publishedAt": "2025-03-16T11:12:20Z",
    "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
    },
    {
    "source": {
    "id": "techradar",
    "name": "TechRadar"
    },
    "author": "Leon Poultney",
    "title": "I’ve tried Nissan’s latest advanced driverless technology – and it handles 60mph on rural roads better than most humans",
    "description": "I’ve tried Nissan’s latest advanced driverless technology – and it handles 60mph on rural roads better than most humanstechradar.com",
    "url": "https://www.techradar.com/vehicle-tech/hybrid-electric-vehicles/ive-tried-nissans-latest-advanced-driverless-technology-and-it-handles-60mph-on-rural-roads-better-than-most-humans",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/nfJxmzQe6ZF9TSksG9vwqa-1200-80.jpg",
    "publishedAt": "2025-03-16T11:08:46Z",
    "content": "<ul><li>Nissan will offer driverless mobility service in Japan by 2027</li><li>Latest research project tackles tricky rural environments</li><li>Autonomous services to be rolled out in the UK and Eur… [+8049 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Abertoatedemadrugada.com"
    },
    "author": "Carlos Martins",
    "title": "Tesla suspende entregas do Cybertruck devido a painéis soltos",
    "description": "O Tesla Cybertruck enfrenta novo problema com peças que se estão a soltar, e que já levaram ao adiamento e cancelamento de entregas programadas.",
    "url": "https://abertoatedemadrugada.com/2025/03/tesla-suspende-entregas-do-cybertruck.html",
    "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLV7d5hKV2S5Ar9NQjIQD-5Cl8_ria8cnVJnVPuqaNHLjc_WoHBacZtVaQVhXNOLKtpFMLzdK4S5KZ9aje_yLLttQNOjewTf4kuNAhHcO09xpYSp8woGI-swiGS0wnKquT6QKr1V27vCmnXIZWbDLGv6YebEPFVAvCWtLRGA9KupykKVjBneKPsMojx7nq/w1200-h630-p-k-no-nu/cybertruckpanels.jpg",
    "publishedAt": "2025-03-16T11:00:00Z",
    "content": "O Tesla Cybertruck enfrenta novo problema com peças que se estão a soltar, e que já levaram ao adiamento e cancelamento de entregas programadas.\n\n\nVários clientes relataram atrasos e cancelamentos in… [+1589 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Daily Dot"
    },
    "author": "Chad Swiatecki",
    "title": "‘It’s gonna go over $12,000 easily’: Dealership catches issue with Tesla’s 12-volt battery after purchase. They had no idea how bad the problem really was",
    "description": "A battery replacement became a five-figure nightmare for one Tesla owner after the company classified the vehicle as \"salvage\" without warning. The TikTok video of a dealer confronting a Tesla rep invites concerns over the company’s grip on repairs and warran…",
    "url": "https://www.dailydot.com/news/tesla-salvage-repair-costs/",
    "urlToImage": "https://uploads.dailydot.com/2025/03/tesla_salvage_title_tiktok.jpg?auto=compress&fm=pjpg",
    "publishedAt": "2025-03-16T11:00:00Z",
    "content": "A battery replacement became a five-figure nightmare for one Tesla owner after the company classified the vehicle as salvage without warning. The TikTok video of a dealer confronting a Tesla rep invi… [+5391 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Feber.se"
    },
    "author": "Frode Wikesjö",
    "title": "Sportadmin bekräftar sin dataläcka",
    "description": "Officiellt\n\n\n\n\n\n\nSportadmin, en tjänst som används av cirka 1 700 idrottsföreningar i Sverige, bekräftade i veckan att en hackergrupp har publicerat stulna personuppgifter. Angreppet, som skedde den 16 januari, ledde till att hackarna krävde pengar för att in…",
    "url": "https://feber.se/samhalle/sportadmin-bekraftar-sin-datalacka/477763/",
    "urlToImage": "https://static.feber.se/article_images/61/33/98/613398.jpg",
    "publishedAt": "2025-03-16T11:00:00Z",
    "content": "Teknik\r\nMotor\r\nSamhälle\r\nSpel\r\nPopkultur\r\nTjock\r\n6 idag\r\n11 igår\r\nTipsa!\r\nSkaffa Feber+\r\nIran stoppar kvinnliga artister på Instagram\r\nMeta kritiseras för att inte ha agerat\r\n27.0°\r\n0\r\nAnnons från \r\n… [+12992 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "STLtoday.com"
    },
    "author": "Zahra Hirji, Jessica Nix, Lauren Rosenthal, Janet Lorin | Bloomberg News (TNS)",
    "title": "Trump’s science cuts have thrown the research world into chaos",
    "description": "Many personnel and financial cuts are being made under the banner of streamlining government while some funding cancellations and threats are tied to allegations of antisemitism on campus.",
    "url": "https://www.stltoday.com/news/local/education/article_2cb997e4-024f-11f0-87a4-cff220a5f9bd.html",
    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/2/cb/2cb997e4-024f-11f0-87a4-cff220a5f9bd/67d6a643a2550.preview.jpg?crop=1600%2C840%2C0%2C113&resize=1200%2C630&order=crop%2Cresize",
    "publishedAt": "2025-03-16T11:00:00Z",
    "content": "Elon Musk holds a chainsaw reading Long live freedom, damn it during the annual Conservative Political Action Conference at the Gaylord National Resort &amp; Convention Center at National Harbor in O… [+9037 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Bill Stone, Contributor, \n Bill Stone, Contributor\n https://www.forbes.com/sites/bill_stone/",
    "title": "Facts About The Stock Corrections, Tariffs, And Consumer Confidence",
    "description": "Stocks entered into a correction with a decline of 10%. What can history teach us about stocks after a correction in a time of tariffs and plunging consumer confidence?",
    "url": "https://www.forbes.com/sites/bill_stone/2025/03/16/facts-about-the-stock--corrections-tariffs-and-consumer-confidence/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/67d5ec33129b75fb630a738f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2025-03-16T11:00:00Z",
    "content": "Last week, the S&amp;P 500 hit correction territory, which is defined as a 10% decline from a previous ... [+] high. The pressure on stocks seems to come from an economic growth scare, which includes… [+9356 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Terra.com.br"
    },
    "author": "Mundo do Automóvel para PCD",
    "title": "Toyota Corolla lidera ranking de sedãs médios mais vendidos em fevereiro de 2025",
    "description": "Mercado de sedãs médios registra crescimento nas vendas, com aumento significativo em relação ao mês anterior",
    "url": "https://www.terra.com.br/mobilidade/toyota-corolla-lidera-ranking-de-sedas-medios-mais-vendidos-em-fevereiro-de-2025,ea4e1ee6a512be58ef5aea93924eb3f7ayqh8l1g.html",
    "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/08/10/byd-king-phev-1hrjr4yo5vxpf.jpg",
    "publishedAt": "2025-03-16T10:59:40Z",
    "content": "O segmento de sedãs médios no Brasil apresentou um crescimento considerável em fevereiro de 2025, totalizando 5.504 unidades emplacadas. O número representa um avanço expressivo em relação a janeiro,… [+1558 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nakedcapitalism.com"
    },
    "author": "Haig Hovaness",
    "title": "Links 3/16/2025",
    "description": "Our rambunctuous daily links: python wangler, tracking fetanyl, Pentagon v. Panama Canal, US hearts sending Gazans to Africa, Kursk surrencer? Trump ends scientists' careers, DC housing wobbles, another Trump immigration court loss, semiconductor worker short…",
    "url": "https://www.nakedcapitalism.com/2025/03/links-3-16-2025.html",
    "urlToImage": "https://www.nakedcapitalism.com/wp-content/uploads/2025/03/Big-Ears-e1741890038704.jpg",
    "publishedAt": "2025-03-16T10:55:29Z",
    "content": "Shes One of Floridas Most Lethal Python Hunters Garden &amp; Gun\r\nWhich Movies Do People Love to Hate? A Statistical Analysis Stat Significant\r\nIs our universe trapped inside a black hole? Space.com\r… [+6106 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "insideevs.com",
    "title": "JPMorgan Says Tesla's About To Have A Bad Time",
    "description": "JPMorgan Says Tesla's About To Have A Bad Time\nThe firm cut Tesla's delivery forecast by 20% and said that stock could eventually drop even more to $120 per share.\n- Tesla stock has recovered about 7% since its big drop earlier this week. It is still nearly d…",
    "url": "https://biztoc.com/x/861a555638fa15b7",
    "urlToImage": "https://biztoc.com/cdn/861a555638fa15b7_s.webp",
    "publishedAt": "2025-03-16T10:55:20Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Stefan Krempl",
    "title": "Foxconn: Trumps Zölle bereiten Tech-Giganten \"große Kopfschmerzen\"",
    "description": "Die Zollankündigungen der US-Regierung führten zu großen Problemen für Big-Tech-Konzerne wie Apple und Amazon, erklärt ihr taiwanesischer Zulieferer Foxconn.",
    "url": "https://www.heise.de/news/Foxconn-Trumps-Zoelle-bereiten-Tech-Giganten-grosse-Kopfschmerzen-10317185.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/1/9/5/7/1/shutterstock_2156941951-1c37cd0ed1d164a6.jpg",
    "publishedAt": "2025-03-16T10:49:00Z",
    "content": "Die Warnungen vor den internationalen Auswirkungen der sprunghaften Zollpolitik der US-Regierung unter Präsident Donald Trump aus dem Tech-Sektor werden lauter. Zu Wort gemeldet hat sich am Freitag m… [+3182 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Steve Russolillo",
    "title": "On the anniversary of the dot-com bubble bursting, is history repeating itself?",
    "description": "In this Sunday edition of BI Today, we're talking about the current market's similarities to the dot-com bubble burst almost exactly 25 years ago.",
    "url": "https://www.businessinsider.com/bi-today-dot-com-bubble-bursting-anniversary-history-repeating-2025-3",
    "urlToImage": "https://i.insider.com/67d49d10585f1dff88b242e9?width=1200&format=jpeg",
    "publishedAt": "2025-03-16T10:40:01Z",
    "content": "Buckner Hightower, left, and his son Chris Hightower examine the plunging stock market indices at the Nasdaq MarketSite, December 20, 2000 in New York City''s Times Square. The Nasdaq composite index… [+6355 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "nytimes.com",
    "title": "Can Trump and Musk Convince More Conservatives to Buy Teslas?",
    "description": "After climbing into a Tesla Model S last week, President Trump pledged to buy one. The next day, the Fox News host Sean Hannity said he had bought a Model S Plaid to support the embattled company, saying a Tesla “has more American parts in it than any other c…",
    "url": "https://biztoc.com/x/ffa655ae5d4a2fb8",
    "urlToImage": "https://biztoc.com/cdn/ffa655ae5d4a2fb8_s.webp",
    "publishedAt": "2025-03-16T10:33:21Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hdmotori.it"
    },
    "author": "HDblog.it",
    "title": "Green NCAP: le 5 auto che inquinano meno durante il loro ciclo di vita",
    "description": "Green NCAP ha annunciato i veicoli destinatari del premio Life Cycle Assessment Award. Ecco come funziona.",
    "url": "https://www.hdmotori.it/auto/articoli/n611976/green-ncap-life-cycle-assessment-risultati/",
    "urlToImage": "https://hd2.tudocdn.net/1194929?w=1920",
    "publishedAt": "2025-03-16T10:30:00Z",
    "content": "Green NCAP ha annunciato i destinatari finali del suo Life Cycle Assessment (LCA) Award. Si tratta di un premio che riconosce i veicoli che raggiungono il minor impatto ambientale durante il loro int… [+4058 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Shiftdelete.net"
    },
    "author": "Mert Can Aka",
    "title": "Tesla’nın otonom sürüş sistemi FSD ile ilginç su dolu bardak testi!",
    "description": "Çin’de bir Tesla kullanıcısı, şirketin geliştirdiği Full Self-Driving (FSD) sistemini ilginç bir testle sınadı. Kullanıcı, sürücü tarafındaki camı açarak su dolu plastik bir bardağı pencerenin kenarına yerleştirdi ve aracı tamamen otonom moda aldı. Direksiyon…",
    "url": "https://shiftdelete.net/tesla-otonom-surus-sistemi-fsd-su-dolu-bardak-testi",
    "urlToImage": "https://ares.shiftdelete.net/2025/03/1-11.jpg",
    "publishedAt": "2025-03-16T10:12:21Z",
    "content": "Çinde bir Tesla kullancs, irketin gelitirdii Full Self-Driving (FSD) sistemini ilginç bir testle snad. Kullanc, sürücü tarafndaki cam açarak su dolu plastik bir barda pencerenin kenarna yerletirdi ve… [+1513 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "washingtonpost.com",
    "title": "Tesla is in crisis. Trump and his online army are swooping in to save it",
    "description": "Amid calls for Musk to step back from the U.S. DOGE Service, Trump is offering a White House lifeline to his biggest donor -- further entwining their fates.",
    "url": "https://biztoc.com/x/f5409d99cb1a53eb",
    "urlToImage": "https://biztoc.com/cdn/915/og.png",
    "publishedAt": "2025-03-16T10:11:40Z",
    "content": "Youve Read the News - Now Find the ExpertClick to discover leading experts on 50,000+ topics for media, events &amp; more.\r\nDiscover Experts on 50,000+ TopicsConnect for media, speaking, expert witne… [+95 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Skai.gr"
    },
    "author": "Newsroom",
    "title": "Η viral στιγμή που ο Τραμπ πάει βόλτα χέρι-χέρι με τον γιο του Μασκ - Δείτε βίντεο",
    "description": "Οι δυο τους φαίνεται να περπατούν χέρι χέρι στο γκαζόν του Λευκού Οίκου και να κατευθύνονται προς το ελικόπτερο του αμερικανού προέδρου",
    "url": "https://www.skai.gr/news/world/ipa-i-viral-stigmi-pou-o-tramp-paei-volta-xeri-xeri-me-ton-gio-tou-mask",
    "urlToImage": "https://cdn.skai.gr/sites/default/files/styles/article_16_9/public/2025-03/ap25073785267059.jpg?itok=Zwh_0E9M",
    "publishedAt": "2025-03-16T10:08:25Z",
    "content": ", 4 , X Æ A-Xii . \r\n  Marine One,  --.\r\n, , . , .\r\n viral social media. \r\n Tesla Owners Silicon Valley, « ». , : « ».\r\nPresident @realDonaldTrump walks to Marine One with Little X @elonmuskpic.twitte… [+86 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "Security Affairs newsletter Round 515 by Pierluigi Paganini – INTERNATIONAL EDITION",
    "description": "A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. New MassJacker…",
    "url": "https://securityaffairs.com/175462/breaking-news/security-affairs-newsletter-round-515-by-pierluigi-paganini-international-edition.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
    "publishedAt": "2025-03-16T10:06:46Z",
    "content": "Security Affairs newsletter Round 515 by Pierluigi Paganini INTERNATIONAL EDITION\r\n | A ransomware attack hit the Micronesian state of Yap, causing the health system network to go down.\r\n | New MassJ… [+148019 chars]"
    }
      ],
      page: 1,
      loading: false,
      totalResults: 3,  // Set total results equal to the number of articles
    };
  }

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  handleNextClick = () => {
    if (this.state.page < Math.ceil(this.state.totalResults / 3)) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines</h1>

        {this.state.loading && <Loading />}

        <div className="row">
          {this.state.articles.length > 0 ? (
            this.state.articles.map((element, index) => (
              <div className="col-12 col-sm-6 col-md-4 my-2" key={index}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  NewsUrl={element.url}
                />
              </div>
            ))
          ) : (
            !this.state.loading && <p className="text-center">No news articles found.</p>
          )}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 3)}
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
