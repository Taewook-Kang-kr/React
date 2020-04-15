import React, { Component } from 'react';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const detail = this.props.detail;
        
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={detail.image} alt={detail.name} />
                        <CardBody>
                            <CardTitle>{detail.name}</CardTitle>
                            <CardText>{detail.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default DishDetail;