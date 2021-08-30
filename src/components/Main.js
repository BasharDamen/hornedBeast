import React from 'react';
import HornedBeasts from './HornedBeasts';
import hornsData from './hornsData.json';
import './Main.css'

class Main extends React.Component {

    render() {
        return (
            <>
                {hornsData.map((item, index) => {

                    return (

                        <HornedBeasts
                            key={index}
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description} />

                    )
                })}
            </>
        );
    };

};

export default Main;