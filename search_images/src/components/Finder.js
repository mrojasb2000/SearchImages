import React, { Component } from 'react'

class Finder extends Component {
    
    findRef = React.createRef();

    imageHandler = (e) => {
        e.preventDefault();
        if (this.findRef.current.value.lenth === 0) return false;
        this.props.dataHandler(this.findRef.current.value);
    }

    render() { 
        return (  
            <form onSubmit={this.imageHandler}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.findRef} type="text" className="form-control form-control-lg" placeholder="Search in Pixabay, example: soccer" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                        value="Search" />
                    </div>
                </div>
            
            </form>
        );
    }
}
 
export default Finder;