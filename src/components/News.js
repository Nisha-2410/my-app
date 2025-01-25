import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category:'general'

  }
  static propsTypes={
    country:PropTypes.string,
    pages:PropTypes.number,
    category:PropTypes.string
    
  }
  capitalizeFirstLetter=(str)=> {
    return str[0].toUpperCase() + str.slice(1);
  }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      pages:1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`
  }
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=555f9bb36d124c8cb6b0e3a3ae74fd61&page=${this.state.pages}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    this.setState({
      articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false
    })
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
  }
  fetchMoreData = async() => {
      this.setState({pages: this.state.pages+1})
      const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=555f9bb36d124c8cb6b0e3a3ae74fd61&page=${this.state.pages}&pageSize=${this.props.pageSize}`;

      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
         totalResults:parsedData.totalResults,
         
      })
  };
  
 render() {
  return (
    <>
      <h1 className="text-center" style={{margin:'30px 0px',marginTop:'90px' }}>NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
      {this.state.loading && <Spinner/>}
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
          <div className='container'>
          <div className="row my-2">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              
            ))}
          </div>
          </div>
          </InfiniteScroll>

        </>
      
    
  );
}

}

export default News