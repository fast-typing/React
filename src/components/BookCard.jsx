import React from "react";


class BookCard extends React.Component {
    render(){
        return (
            <div className='card'>
                <img src={this.props.src} alt='cover'/>
                <div>
                    <b>Song:</b> {this.props.name}
                </div>
                <div>
                    <b>Artist:</b> {this.props.artist}
                </div>
                
                <div>
                    <b>Genre:</b> {this.props.genre}
                </div>
                <div>
                    <b>Release date:</b> {this.props.date}
                </div>
            </div>
        );
    }
};

export default BookCard;