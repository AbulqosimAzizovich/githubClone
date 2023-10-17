import React from 'react';

const itemPost = ({ array, limt, lastPage, }) => {

    const point = [];
    for (let i = 0; i < Math.ceil(array.length / limt); i++) {
        point.push(i + 1);
    }

    return (
        <>
            <ul className="repo__list pt-3">

                {
                    array.length > 0 ?
                        lastPage.map((element, index) => (
                            <li className="repo__list--item border-top border-bottom" key={index}>
                                <div className="repo__list--item--left">
                                    <a href={element.html_url} className="repo__list--item--left-name">{element.name}</a>
                                    <span className="repo__list--item--left-circle">{element.visibility}</span>
                                    <p className="repo__list--item--left-text">{element.description}</p>
                                    <div className="repo__list--item--left__down">
                                        <div className="repo__list--item--left__down--first">

                                            <p className={`repo__list--item--left__down--first-text colors
                                              ${element.language === "JavaScript" ? "yellow" :
                                                    element.language === "CSS" ? "purple" :
                                                        element.language === "HTML" ? "red" :
                                                            element.language === "SCSS" ? "pink" : ""
                                                }
                                            `}>{element.language}</p>
                                        </div>
                                        <p className="repo__list--item--left__down-date">Updated last month</p>
                                    </div>
                                </div>

                                <div className="repo__list--item--right">
                                    <div className="repo__list--item--right__btns">
                                        <button className="repo__list--item--right__btns-Sbtn"> <span className="repo__list--item--right__btns-Star"> <i className="bi bi-star"></i> </span> Star</button>
                                        <button className="repo__list--item--right__btns-iconBtn"> <span className="repo__list--item--right__btns-iconDrop"> <i className="bi bi-caret-down-fill"></i> </span> </button>
                                    </div>
                                    <hr className='repo__list--item--right-hr' />
                                </div>
                            </li>
                        )) : <div className='loader__wrapper'> <span class="loader"></span> </div>
                }
            </ul>



        </>
    );
};

export default itemPost;