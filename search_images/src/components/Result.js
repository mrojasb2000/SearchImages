import React, { Component } from 'react'
import Image from "./Image";
import Navigator from "./Navigator";


class Result extends Component {
    dataView = () => {
        const images = this.props.data;

        if (images.length === 0) return null;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 p-5 row justify-content-center">
                        {
                            images.map(item => ( <Image key={item.id} url={item.previewURL} tags={item.tags}  /> ))
                        }
                        <Navigator backPage={this.props.backPage} nextPage={this.props.nextPage}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
   
    render() { 
        return (  
            <React.Fragment>
                { this.dataView() }
            </React.Fragment>
        );
    }
}
 
export default Result;