import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles ,setArticles] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [totalResults ,setTotalResults] = useState(0);
    const [page ,setPage] = useState(1);
  

  const CapitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const  updateNews=async() =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json()
    props.setProgress(70);
    // console.log("parseData");
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }
    useEffect(() =>{
      document.title = `ABHI News - ${CapitalizeFirstLetter(props.category)}`;
      updateNews();
    }, [])
  
  // const componentDidMount=async() =>{
  //   this.updateNews();
  // }
  // const handlePrevClick = async () => {
  //   setPage(page - 1);
  //   updateNews();

  // }
  // const handleNextClick = async () => {
    
  //   setPage(page + 1);
  //   updateNews();
  // }

  // changeMode = (newmode) => {
  //   this.setState({
  //     mode: newmode
  //   });
  // };

    const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b72b14a218754cd88fd690ee91a5da90&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };



    return (
      <>
        <div className={"form-check form-switch text-dark"}>
          <h1 className="text-center" style={{ margin: '110px 0px' }}>Breaking {CapitalizeFirstLetter(props.category)} News</h1>
          {loading && <Spinner />}

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  console.log(element.source.name)
                  return <div className="col-md -3" key={element.url}>

                    <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} source={element.source.name} />
                  </div>

                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
          </div> */}
        </div>
      </>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general",

}
News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,

}

export default News
