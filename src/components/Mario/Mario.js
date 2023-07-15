import React, { useState } from 'react';
import "./Mario.scss"

const Mario = () => {
    const row = 8;
    const col = 6;
    const count = 0;


    return (
        <div className="bai3-container" >
            <div className='Table-Container'>
                <div class="container">
                    {
                        Array(row).fill().map((_, i) => {
                            switch (i) {
                                case 1:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === 3 || j === 4 || j === 5) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                        </div>
                                    )
                                    break;
                                case 3:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === 0 || j === 1 || j === 2 || j === 3) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                }
                                                )
                                            }
                                        </div>
                                    )
                                    break;
                                case 5:
                                    return (
                                        <div className="row row-cols-6 row_customize">
                                            {
                                                Array(col).fill().map((_, j) => {
                                                    if (j === 2 || j === 3 || j === 4 || j === 5) {
                                                        return (
                                                            <div className="col col_customize" style={{ backgroundColor: "blue" }}></div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="col col_customize"></div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    )
                                    break;
                                default:
                                    return (
                                        (
                                            <div className="row row-cols-6 row_customize">
                                                {
                                                    Array(col).fill().map((_, j) => (
                                                        <div className="col col_customize"></div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    )
                                    break;
                            }
                        })
                    }
                </div>
            </div>
            <div className='Control-Container'>
                <div className='Control-Container-Item'>
                    <div className='btn-up'>Move Up</div>
                    <div className='btn-down'>Move Down</div>
                    <div className='btn-left'>Move Left</div>
                    <div className='btn-right'>Move Right</div>
                </div>
                <div className='Control-Container-Btn'>
                    <button className='Control-Container-Btn-Item btn-success btn'>Start</button>
                </div>
            </div>
        </div >
    );
}

export default Mario;