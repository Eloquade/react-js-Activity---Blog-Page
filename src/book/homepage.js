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
                    <div class="container_wrapper">
                        <section id="navigation_container">
                        <div id="branding"><a href="index.html">
                            <h1 class="logo-container __center">
                                <div class="city">My</div>
                                <div class="es">Travel</div>
                                <div class="cape">Blog</div>
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
                    <h2 class="section-title">
                        <div class="color-city">latest </div>
                        <div class="color-cape">Travel</div>
                    </h2>
                    <div class="container_wrapper"/>
                        <div class="grid_post_container">
                        <div class="post-card1"><a class="post-card__category" href="post.html">Dingalan</a>
                            <div class="post-card__featured-image1"></div>
                            <div class="post-card__details">
                            <h3><a href="post.html">Never let your memories be greater than your dreams. </a></h3>
                            <a class="post-card__avatar" href="post.html">
                                <div class="avatar__circle"></div>
                                <div class="avatar__name">by Lawrence Perez</div>
                                <div class="avatar__muted-line"></div></a>
                            </div>
                        </div>

                        
                        <div class="post-card2"><a class="post-card__category" href="post.html">Dingalan</a>
                            <div class="post-card__featured-image2"></div>
                            <div class="post-card__details">
                            <h3><a href="post.html">“A journey of a thousand miles begins with a single step” </a></h3>
                            <a class="post-card__avatar" href="post.html">
                                <div class="avatar__circle"></div>
                                <div class="avatar__name">by Lawrence Perez</div>
                                <div class="avatar__muted-line"></div></a>
                            </div>
                        </div>

                        <div class="post-card3"><a class="post-card__category" href="post.html">Dingalan</a>
                            <div class="post-card__featured-image3"></div>
                            <div class="post-card__details">
                            <h3><a href="post.html"> “Do not follow where the path may lead. Go instead where there is no path and leave a trail” </a></h3>
                            <a class="post-card__avatar" href="post.html">
                                <img class="avatar__circle" ></img>
                                <div class="avatar__name">by Lawrence Perez</div>
                                <div class="avatar__muted-line"></div></a>
                            </div>
                        </div>
                    </div>
                    </section>
                    <footer>
                    <div class="container_wrapper">
                        <div id="footer__site_description">
                        <h1 class="logo-container __center">
                            <div class="city">My</div>
                            <div class="es">Travel</div>
                            <div class="cape">Blog</div>
                        </h1>
                        <h3>“It is better to travel well than to arrive.”</h3>
                        </div>
                        <div id="footer__social_media">
                        <h3>social media</h3>
                        <ul>
                            <li><a href="#"><i class="fa fa-instagram"></i>@lanceeee</a></li>
                            <li><a href="#"><i class="fa fa-facebook-square"></i>@lawrence_perez08</a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i>perez.lawrence08@gmail.com</a></li>
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