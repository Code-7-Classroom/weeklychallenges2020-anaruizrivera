import React, { Component } from 'react';

class BasicInfo extends Component {
    render() {
        return (
            <div className="style">
                <ul>
                    {this.props.persons.map(el => (
                        <li key={el.name}>{el.name} Phone:{el.phone} DOB:{el.DOB}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BasicInfo;