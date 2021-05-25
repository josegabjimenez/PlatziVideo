import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import "../assets/styles/App.scss"

const Home = () => {

    const [videos, setVideos] = useState([]);

    console.log(videos);

    useEffect(() => {
        fetch("http://localhost:3000/initialState")
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);

    console.log(videos);


    return ( 
        <div className="Home">
            <Header/>
            <Search/>
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>

            <Categories title="Tendencias">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>

                </Carousel>
            </Categories>

            <Categories title="Favoritos">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            <Footer/>
        </div>
     );
}
 
export default Home;
