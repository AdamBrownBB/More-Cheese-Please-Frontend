// find as many JavaScript/React mistakes as possible

import React from 'react';
import fetch from 'node-fetch';

const API_URL = 'https://localhost:8080';

class MyLists extends React.Component {
    state = {
        values: []
    }

    setValues = (values) => {
        this.setState({ values });
    }

    async componentDidMount() {
        const results = await fetch(`${API_URL}/lists`);
        const data = await results.json();

        this.setValues(data);
    }

    async componentWillUnmount() {
        await fetch(`${API_URL}/report`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'unmounted'
            })
        });

        console.log('MyLists is unmounted')
    }

    render() {
        const { values } = this.state;

        return (
            <>
                {
                    values.map((value, i) => <li key={i} name={value}>{value}</li>)


                    // for (let i = 0; i < values.length; i++) {
                    //     <li key={i} name={values[i]}>{values[i]}</li>
                    // }
                }
            </>
        );
    }
}

<div> for (...) {...} </div> => JSX compilation => React.createElement('div', { children: for(...) {...} })