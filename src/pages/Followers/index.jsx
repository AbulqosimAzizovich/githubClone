import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context/Context';
import "./style.scss"


const index = () => {

    const { apiValue } = useContext(Context);
    const [array, setArray] = useState([]);

    const api = async () => {
        const request = await fetch(`https://api.github.com/users/${apiValue}/followers`);
        const result = await request.json();
        setArray(result)
    }

    useEffect(() => {
        api();
    }, [apiValue]);

    return (
        <>
            <div className="followers__wrapper">

                {
                    array.length > 0 ? array.map((element, index) => (
                        <div key={index} className="followers border-bottom">
                            <div className="followers__round">
                                <img className="followers__round-img" src={element.avatar_url} alt="person" />
                                <div className='followers__round--content'>
                                    <a href={element.html_url} target="_blank" className="followers__round--content-user">{element.login}</a>
                                </div>
                            </div>
                            <button className="followers-btn">Unfollow</button>
                        </div>
                    )) : <div className='loader__wrapper'> <span className="loader"></span> </div>
                }

            </div>
        </>
    );
};

export default index;