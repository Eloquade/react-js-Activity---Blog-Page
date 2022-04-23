import React from "react";
import '../components/css/style.min.css'
import '../components/js/script.min.js'


const HomePage = () => (
    <React.Fragment>
        <html lang="en"/>
                <head/>
                    
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Work+Sans:300,400,500,600,700,800,900"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                    
                   
                    
                
                <body>
                    <section id="above-the-fold">
                    <div className="container_wrapper">
                        <section id="navigation_container">
                        <div id="branding"><a href="index.html">
                            <h1 class="logo-container __center">
                                <div className="city">My</div>
                                <div className="es">Travel</div>
                                <div className="cape">Blog</div>
                            </h1></a></div>
                        <label for="menu_icon"> <i class="fa fa-bars"></i></label>
                        <input id="menu_icon" type="checkbox"/>
                        
                        </section>
                        <h1 id="above-the-fold__description">
                        “Below are many of my favorite travel quotes that touch upon all aspects of vacation, life, and adventure. Feel free to pin and share these unique quotes and images on social media!”
                        </h1>
                    </div>
                    </section>
                    <section id="latest-review">
                    <h2 className="section-title">
                        <div className="color-city">latest </div>
                        <div className="color-cape">Travel</div>
                    </h2>
                    <div className="container_wrapper"/>
                        <div className="grid_post_container">
                        <div className="post-card1"><a className="post-card__category" href="">Dingalan</a>
                            <div className="post-card__featured-image1"></div>
                            <div className="post-card__details">
                            <h3><a href="">“Never let your memories be greater than your dreams“ </a></h3>
                            <a className="post-card__avatar" href="">
                                <div className="avatar__circle"></div>
                                <div className="avatar__name">by Lawrence Perez</div>
                                <div className="avatar__muted-line"></div></a>
                            </div>
                        </div>

                        
                        <div className="post-card2"><a className="post-card__category" href="">Dingalan</a>
                            <div className="post-card__featured-image2"></div>
                            <div className="post-card__details">
                            <h3><a href="">“A journey of a thousand miles begins with a single step” </a></h3>
                            <a className="post-card__avatar" href="">
                                <div className="avatar__circle"></div>
                                <div className="avatar__name">by Lawrence Perez</div>
                                <div className="avatar__muted-line"></div></a>
                            </div>
                        </div>

                        <div className="post-card3"><a className="post-card__category" href="">Dingalan</a>
                            <div className="post-card__featured-image3"></div>
                            <div className="post-card__details">
                            <h3><a href=""> “Do not follow where the path may lead. Go instead where there is no path and leave a trail” </a></h3>
                            <a className="post-card__avatar" href="">
                                <img className="avatar__circle" ></img>
                                <div className="avatar__name">by Lawrence Perez</div>
                                <div className="avatar__muted-line"></div></a>
                            </div>
                        </div>
                    </div>
                    </section>
                    <footer>
                    <div className="container_wrapper">
                        <div id="footer__site_description">
                        <h1 className="logo-container __center">
                            <div className="city">My</div>
                            <div className="es">Travel</div>
                            <div className="cape">Blog</div>
                        </h1>
                        <h3>“It is better to travel well than to arrive.”</h3>
                        </div>
                        <div id="footer__social_media">
                        <h3>social media</h3>
                        <ul>
                            <li><a href="#"><i className="fa fa-instagram"></i>@lanceeee</a></li>
                            <li><a href="#"><i className="fa fa-facebook-square"></i>@lawrence_perez08</a></li>
                            <li><a href="#"><i className="fa fa-envelope"></i>perez.lawrence08@gmail.com</a></li>
                        </ul>
                        </div>
                        <div id="footer__pages">
                        <h3>pages</h3>
                        <ul>
                            <li><a href="#">travel</a></li>
                            <li><a href="#">photos</a></li>
                            <li><a href="#">contributors</a></li>
                        
                        </ul>
                        </div>
                    </div>
                    </footer>
                    
                </body>
                


    </React.Fragment>
);

export default HomePage