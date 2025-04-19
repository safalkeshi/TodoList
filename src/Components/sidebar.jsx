import React from 'react';

import sidedata from './sidebardata';
const sidebar = () => {
    return (
        <div id="sidebar" className="">
            {sidedata.map((item, index) => (
                <div key={index}>
                    <div className="flex row gap-5 my-5 mx-2">
                        <i className={item.logo}></i>

                        <a href=''>{item.text}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default sidebar