import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types';

export class News extends Component {
  // articles=[{
  //   "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //   },
  //   "author": "Gawon Bae, Yoonjung Seo, Alex Stambaugh",
  //   "title": "North Korea blows up roads near border with South after warning it would completely cut ties - CNN",
  //   "description": "North Korea blew up parts of two major roads connected to the southern part of the peninsula on Tuesday, South Korean authorities said, after Pyongyang warned it would take steps to completely cut off its territory from the South.",
  //   "url": "https://www.cnn.com/2024/10/15/asia/north-korea-blast-roads-south-intl-hnk/index.html",
  //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/still-21042554-300-743-still.jpg?c=16x9&q=w_800,c_fill",
  //   "publishedAt": "2024-10-15T09:46:00Z",
  //   "content": "North Korea blew up parts of two major roads connected to the southern part of the peninsula on Tuesday, South Korean authorities said, after Pyongyang warned it would take steps to completely cut of… [+4968 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Yahoo Entertainment"
  //   },
  //   "author": "David Shepardson and Sameer Manekar",
  //   "title": "EV chipmaker Wolfspeed set to receive $750 million US chips grant - Yahoo Finance",
  //   "description": "WASHINGTON (Reuters) -Wolfspeed is set to receive $750 million in government grants for its new North Carolina silicon carbide wafer manufacturing plant...",
  //   "url": "https://finance.yahoo.com/news/ev-chipmaker-wolfspeed-set-receive-090823633.html",
  //   "urlToImage": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
  //   "publishedAt": "2024-10-15T09:08:23Z",
  //   "content": "By David Shepardson and Sameer Manekar\r\nWASHINGTON (Reuters) -Wolfspeed is set to receive $750 million in government grants for its new North Carolina silicon carbide wafer manufacturing plant facili… [+2690 chars]"
  // },
  // {
  //   "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //   },
  //   "author": "Ben Morse, Homero De la Fuente",
  //   "title": "Despite Hail Mary touchdown, Aaron Rodgers and the New York Jets fall to Buffalo Bills in first game since firing head coach - CNN",
  //   "description": "The Buffalo Bills overcame an Aaron Rodgers Hail Mary touchdown pass at the end of the first half to edge past the New York Jets 23-20 on Monday Night Football.",
  //   "url": "https://www.cnn.com/2024/10/15/sport/buffalo-bills-new-york-jets-mnf-nfl-spt-intl/index.html",
  //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-15t021609z-1126615148-mt1usatoday24492567-rtrmadp-3-nfl-buffalo-bills-at-new-york-jets.jpg?c=16x9&q=w_800,c_fill",
  //   "publishedAt": "2024-10-15T09:05:00Z",
  //   "content": "The Buffalo Bills overcame an Aaron Rodgers Hail Mary touchdown pass at the end of the first half to edge past the New York Jets 23-20 in a penalty-filled victory on Monday night in East Rutherford, … [+2826 chars]"
  // },
  // {
  //   "source": {
  //     "id": "politico",
  //     "name": "Politico"
  //   },
  //   "author": "Blanca Begert, Alex Nieves",
  //   "title": "Don’t call it Trump-proofing - POLITICO",
  //   "description": "It’s already Trump’s world. California is just living in it.",
  //   "url": "https://www.politico.com/news/2024/10/15/trump-california-environment-supreme-court-00183585",
  //   "urlToImage": "https://static.politico.com/a9/a5/8018128845a58daf54c5365e4236/election-2024-trump-85124.jpg",
  //   "publishedAt": "2024-10-15T09:00:00Z",
  //   "content": "There are two distinct threats. One is the Trump administration, and one is the courts, said Ann Carlson, former head of the National Highway Traffic Safety Administration under President Joe Biden.\r… [+10762 chars]"
  // },

  // {
  //   "source": {
  //     "id": "abc-news",
  //     "name": "ABC News"
  //   },
  //   "author": null,
  //   "title": "Israel-Gaza-Lebanon live updates: Israel kills 20 in strike on UN school, health ministry says - ABC News",
  //   "description": "",
  //   "url": "https://abcnews.go.com/International/live-updates/israel-hamas-hezbollah/?id\\\\u003d114770972",
  //   "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
  //   "publishedAt": "2024-10-15T07:44:00Z",
  //   "content": null
  // },
  // {
  //   "source": {
  //     "id": "newsweek",
  //     "name": "Newsweek"
  //   },
  //   "author": "Ewan Palmer",
  //   "title": "How Kamala Harris, Donald Trump Polls Look Three Weeks Before Election - Newsweek",
  //   "description": "The race remains neck-and-neck as the 2204 election campaign edges nearer to its end.",
  //   "url": "https://www.newsweek.com/kamala-harris-donald-trump-polls-2024-election-1968661",
  //   "urlToImage": "https://d.newsweek.com/en/full/2494758/harris-trump-polls-three-weeks-before-election.png",
  //   "publishedAt": "2024-10-15T07:00:02Z",
  //   "content": "With three weeks to go until Election Day, Kamala Harris is leading Donald Trump in the 2024 polls nationally, while the vital swing states are still too close to call.\r\nThe race between Vice Preside… [+3924 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Hawaii News Now"
  //   },
  //   "author": "Caelan Hughes",
  //   "title": "Stargazers capture ‘comet of the century’ soaring over Hawaii - Hawaii News Now",
  //   "description": "Comet Tsuchinshan-ATLAS is expected to come within 44 million miles of Earth, NASA said.",
  //   "url": "https://www.hawaiinewsnow.com/2024/10/15/stargazers-capture-comet-century-soaring-over-hawaii/",
  //   "urlToImage": "https://gray-khnl-prod.gtv-cdn.com/resizer/v2/R6BQW4VMNFHKNNOO7GJKDWERSA.jpg?auth=21d50238576b1bd13c5af9d5bfb8e2b9d7782927c0954d3f60d7683ae5ce8022&width=1200&height=600&smart=true",
  //   "publishedAt": "2024-10-15T06:25:00Z",
  //   "content": "HONOLULU (HawaiiNewsNow) - Over the weekend, Hawaii stargazers witnessed what some are calling the comet of the century.\r\nThe comet is now making its closest approach on a return voyage to Earth.\r\nCo… [+786 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "BBC News"
  //   },
  //   "author": null,
  //   "title": "Drone attack on Israel puts spotlight on Iron Dome's limitations - BBC.com",
  //   "description": "Drones are becoming a deadly headache for Israelis. How can its air defence system stop them?",
  //   "url": "https://www.bbc.com/news/articles/c4g9wx2q09ko",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3541/live/bca0b570-8a6a-11ef-b6b0-c9af5f7f16e4.jpg",
  //   "publishedAt": "2024-10-15T06:06:55Z",
  //   "content": "Sunday's drone attack was one of Israel's biggest in more than a year - four Israeli soldiers were killed\r\nSlow, small and relatively cheap to make, drones have become a deadly headache for Israelis … [+3614 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Post Magazine"
  //   },
  //   "author": null,
  //   "title": "China considering space facility location based on security in times of war - South China Morning Post",
  //   "description": "Advantages of coastal operation outweighed by ‘strategic hinterland’ policy in preferred site for massive commercial space facility.",
  //   "url": "https://www.scmp.com/news/china/science/article/3282391/extreme-situations-chinas-space-superpower-goals-are-being-shaped-security-concerns",
  //   "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2024/10/15/210f090b-4029-4cb9-ae98-6c057b5d76a6_67742b17.jpg?itok=CP4mReVV&v=1728967432",
  //   "publishedAt": "2024-10-15T06:00:10Z",
  //   "content": "China is considering another inland site as it makes plans for a massive commercial spaceport despite the advantages of its coastal facility in the southern island province of Hainan.\r\nAccording to t… [+1147 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "KABC-TV"
  //   },
  //   "author": "Denise Dador",
  //   "title": "What are symptoms of whooping cough? Outbreak hits California amid nationwide surge in pertussis - ABC7 Los Angeles",
  //   "description": "California's whooping cough outbreak comes as the CDC reports a nationwide surge in cases, raising concern for those most vulnerable to the respiratory disease.",
  //   "url": "https://abc7.com/post/what-are-symptoms-whooping-cough-outbreak-hits-california-amid-nationwide-surge-pertussis/15429103/",
  //   "urlToImage": "https://cdn.abcotvs.com/dip/images/15429185_101424-kabc-4PM-Whooping-Cough-vid.jpg?w=1600",
  //   "publishedAt": "2024-10-15T05:15:39Z",
  //   "content": "LOS ANGELES (KABC) -- California is in the midst of a whooping cough outbreak, as the CDC reports a nationwide surge.\r\nIt's raising concerns for those most vulnerable to the bacterial disease. It spr… [+2285 chars]"
  // },
  // {
  //   "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //   },
  //   "author": "Wayne Chang, Helen Regan",
  //   "title": "A record number of Chinese warplanes flew close to Taiwan during military drills - CNN",
  //   "description": "China flew a record number of fighter jets and other warplanes around Taiwan during its large-scale military drills on Monday, Taiwan’s Defense Ministry said.",
  //   "url": "https://www.cnn.com/2024/10/15/asia/record-china-warplanes-taiwan-drills-intl-hnk/index.html",
  //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2177589410.jpg?c=16x9&q=w_800,c_fill",
  //   "publishedAt": "2024-10-15T04:18:00Z",
  //   "content": "China flew a record number of fighter jets and other warplanes around Taiwan during its large-scale military drills on Monday, the islands Defense Ministry said.\r\nThe one-day military exercises, whic… [+3984 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "CBS Sports"
  //   },
  //   "author": "",
  //   "title": "Yankees' Giancarlo Stanton continues to step up in playoffs with Aaron Judge still stuck in October slump - CBS Sports",
  //   "description": "Stanton, one of the best October sluggers of all-time, went deep again in ALCS Game 1",
  //   "url": "https://www.cbssports.com/mlb/news/yankees-giancarlo-stanton-continues-to-step-up-in-playoffs-with-aaron-judge-still-stuck-in-october-slump/",
  //   "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/10/15/95bcd2f3-9dfd-4508-a117-95adab9f7500/thumbnail/1200x675/3750c814bfff30830e8eaaea4cfa802c/giancarlo-stanton-getty-3.png",
  //   "publishedAt": "2024-10-15T04:02:01Z",
  //   "content": "Anyone who has spent much time watching or reading about the Yankees this postseason has heard plenty about the playoff struggles of presumptive 2024 AL MVP Aaron Judge. It'll be his second MVP in th… [+2615 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "CNBC"
  //   },
  //   "author": "Hugh Son",
  //   "title": "Goldman Sachs to report third-quarter earnings - CNBC",
  //   "description": "Now that the Fed is easing rates, Goldman may benefit as corporations that have waited on the sidelines to acquire competitors or raise funds take action.",
  //   "url": "https://www.cnbc.com/2024/10/15/goldman-sachs-gs-earnings-q3-2024.html",
  //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107360253-1705508749783-107360253-1705501487263-1J7A0712.jpg?v=1705508758&w=1920&h=1080",
  //   "publishedAt": "2024-10-15T04:01:01Z",
  //   "content": "Goldman Sachs is scheduled to report third-quarter earnings before the opening bell Tuesday.\r\nHere's what Wall Street expects:\r\n\u003Cul\u003E\u003Cli\u003EEarnings: $6.89 per share, according to LSEG\u003C/li\u003E\u003Cli\u003ERevenue: $… [+1133 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Deadline"
  //   },
  //   "author": "Natalie Oganesyan",
  //   "title": "Samuel L. Jackson Marks ‘Pulp Fiction’ 30th Anniversary With Memorized Ezekiel Quote: “I Still Got It” - Deadline",
  //   "description": "After 30 years, Samuel L. Jackson has 'still got it,' reciting the Ezekiel Bible verse scene for memory in a commemoration post for 'Pulp Fiction.'",
  //   "url": "http://deadline.com/2024/10/samuel-l-jackson-pulp-fiction-anniversary-1236115934/",
  //   "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/samuel-jackson.jpg?w=1000",
  //   "publishedAt": "2024-10-15T03:54:00Z",
  //   "content": "There’s no breaking Samuel L. Jackson‘s concentration.\r\nAfter 30 years, the Oscar-nominated star has “still got it,” reciting the iconic Ezekiel 25:17 Bible verse from memory in one of his standout s… [+1725 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "BuffaloBills.com"
  //   },
  //   "author": null,
  //   "title": "Rex Ryan and the Manning brothers react to Taron Johnson's game-clinching interception on Aaron Rodgers - BuffaloBills.com",
  //   "description": "\u003Cp\u003EFormer head coach Rex Ryan and the Manning brothers react to a critical New York Jets quarterback Aaron Rodgers' interception on the ManningCast during \"Monday Night Football\" during Week 6 of the 2024 NFL season.\u003C/p\u003E",
  //   "url": "https://www.buffalobills.com/video/rex-ryan-and-the-manning-brothers-react-to-taron-johnson-s-game-clinching-interception-on-aaron-rodgers",
  //   "urlToImage": "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/bills/dvl2fkv89rkb6kgiputz",
  //   "publishedAt": "2024-10-15T03:48:47Z",
  //   "content": null
  // },
  // {
  //   "source": {
  //     "id": "business-insider",
  //     "name": "Business Insider"
  //   },
  //   "author": "Hasan Chowdhury",
  //   "title": "Elon Musk faces doubts about whether he can still deliver. Starship stuck the landing. - Business Insider",
  //   "description": "SpaceX achieved a world first by returning its Starship rocket booster to its launch site, a reminder that Elon Musk can prove the doubters wrong.",
  //   "url": "https://www.businessinsider.com/elon-musk-spacex-starship-landing-super-heavy-2024-10",
  //   "urlToImage": "https://i.insider.com/670d150c3f2165d716e08e85?width=1200&format=jpeg",
  //   "publishedAt": "2024-10-15T03:10:00Z",
  //   "content": null
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "BBC News"
  //   },
  //   "author": null,
  //   "title": "Thaad: Why is the US giving Israel a powerful anti-missile system - BBC.com",
  //   "description": "The move has been the focus of attention as it involves putting American boots on the ground in Israel.",
  //   "url": "https://www.bbc.com/news/articles/c39le0dp4p7o",
  //   "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/116f/live/6d7f0ba0-8a64-11ef-bfff-fbac175bff93.jpg",
  //   "publishedAt": "2024-10-15T03:08:48Z",
  //   "content": "The Pentagon has confirmed it is sending a high-altitude anti-missile system operated by US troops to Israel.\r\nOfficials say the Terminal High-Altitude Area Defense (Thaad) battery will bolster Israe… [+5861 chars]"
  // },
  // {
  //   "source": {
  //     "id": "espn",
  //     "name": "ESPN"
  //   },
  //   "author": "Jorge Castillo",
  //   "title": "Rodón emulates 'robot' Cole, steers Yanks' G1 win - ESPN",
  //   "description": "After struggling to control his emotions in the ALDS, Carlos Rodón sought to emulate teammate Gerrit Cole's demeanor on the mound. On Monday, he nailed the imitation, pitching the Yankees to a win over the Guardians in Game 1 of the ALCS.",
  //   "url": "https://www.espn.com/mlb/story/_/id/41801323/rodon-gem-hrs-soto-stanton-spark-yankees-game-1-win",
  //   "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1015%2Fr1400451_1296x729_16%2D9.jpg",
  //   "publishedAt": "2024-10-15T02:53:00Z",
  //   "content": "NEW YORK -- On Thursday, while Gerrit Cole mowed down the Kansas City Royals in the New York Yankees' series-clinching Game 4 win in the American League Division Series, Carlos Rodón took mental note… [+5130 chars]"
  // }]

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

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${this.state.page}&pageSize=12`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult
    });   
    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData=async ()=>{
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${this.state.page+1}&pageSize=12`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResult
    });
  }

  //handling next and prev buttons
  // handlePrevClick = async () => {
  //  this.updateNews();
  //  this.setState({page:this.state.page-1});
  // }

  // handleNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResult / 12)) {

  //   } else {
  //     this.updateNews();
  //     this.setState({page:this.state.page+1});
  //   }
  // }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 id='h1'>HeadLines</h1>
          {this.state.loading && <Loading />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResult}
            loader={<Loading/>}
          >
          <div className='container'>
          <div className="row">
            { 
              this.state.articles.map((element) => {
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
          </InfiniteScroll>

          {/* //pagination */}
          {/* <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={!(Array.isArray(this.state.articles) && this.state.articles.length > 0)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div> */}
        </div>
      </div>
    );

  }
}

export default News