import React from 'react'


const Home = (props) => {
    return (
        <>
            <section className="landing-page">
                {/* <div className="big-boy-box">

                    <h1>H1 Header here</h1>
                    <div className="recent-udivloads">
                        <p>Recents uploads here or  other ideas here
                            </p>
                        <p>
                          uploaded store posts from store host
                        </p>

                    </div>

                </div> */}

                <section className="store-contain">

                    <div className='store-feed feat-contain'>
                        <div>Featured</div>
                        <h4>Items</h4>
                        <section className="image-feat">
                            < img className="home-img" src={'https://images.pexels.com/photos/5849002/pexels-photo-5849002.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="camera" />
                            <img className="home-img" src={'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />
                            <img className="home-img" src={'https://images.pexels.com/photos/1669068/pexels-photo-1669068.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />
                            <img className="home-img" src={'https://images.pexels.com/photos/567985/pexels-photo-567985.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} />
                        </section>
                    </div>

                    <div className="store-feed tren-contain">
                        <div>Trending</div>
                        <h4>Items</h4>
                        <section className="image-tren">

                            <img className="home-img" src={'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100'} alt="camera" />
                            <img className="home-img" src={'https://images.pexels.com/photos/3735152/pexels-photo-3735152.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100'} />
                            <img className="home-img" src={'https://images.pexels.com/photos/5273033/pexels-photo-5273033.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100'} />
                            <img className="home-img" src={'https://images.pexels.com/photos/3769010/pexels-photo-3769010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100'} />
                        </section>
                    </div>
                </section>
            </section>
            <section className=' body home-footer'>
                <ul className='list-cat'>
                    <li><a>cat 1

                    </a> <img className="home-img" src={'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="camera" /></li>

                    <li><a>cat 2</a>
                        <img className="home-img" src={'https://images.pexels.com/photos/3841891/pexels-photo-3841891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="camera" />
                    </li>
                    <li><a>cat 3</a>
                        <img className="home-img" src={'https://images.pexels.com/photos/1230394/pexels-photo-1230394.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="camera" />
                    </li>
                    <li><a>cat 4</a>
                        <img className="home-img" src={'https://images.pexels.com/photos/5544157/pexels-photo-5544157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} alt="camera" />
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Home

