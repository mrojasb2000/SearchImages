import React, { Component } from 'react';
import Finder from './components/Finder';
import DataResult from './components/Result';


class App extends Component {

  state = {
    data : '',
    images: [],
    page : ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }


  backPage = () => {
    let page = this.state.page
    
    if (page === 1) return null;

    page -= 1;

    this.setState({
      page
    }, () => {
      this.searchPixabayApiHandler();
      this.scroll();
    })
  }

  nextPage = () => {
    let page = this.state.page

    page += 1;

    this.setState({
      page
    }, () => {
      this.searchPixabayApiHandler();
      this.scroll();
    })
  }


  searchPixabayApiHandler = () => {
    const args = this.state.data;
    const key = '1732750-d45b5378879d1e877cd1d35a6';
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=${key}&q=${args}&per_page=10&page=${page}`;
    //console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({
        images : result.hits
      }))
  }

  dataFindHandler = (data) => {
    this.setState({
      data : data,
      page : 1
    }, () => {
      this.searchPixabayApiHandler();
    })
    //console.log(data);
  }



  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Search Images on Pixabay.com
          </p>
          <Finder dataHandler = {this.dataFindHandler} />
        </div>
        <div className="row">
          <DataResult data = {this.state.images} backPage={this.backPage} nextPage={this.nextPage}/>
        </div>
      </div>
    );
  }
}

export default App;
