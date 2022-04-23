import React from "react";
import {Link} from 'react-router-dom';
import './css/style.min.css' 



const ArticleList = ({articles}) => (
    <React.Fragment>
         
                                <html lang="en"/>
                                    <head/>
                                        
                                        <meta charset="utf-8"/>
                                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                                    
                                        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Work+Sans:300,400,500,600,700,800,900"/>
                                        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                                        <link rel="stylesheet" href="css/style.min.css"/>
                                    
                                        <title>Hello, world!</title>
                                    
                                    <body>
                                        <div className="container_wrapper"/>
                                        <section className="__colored" id="navigation_container">
                                            <div id="branding"><a href="index.html">
                                                <h1 className="logo-container __center __colored">
                                                <div className="city">My</div>
                                                <div className="es">Travel</div>
                                                <div className="cape">Blog</div>
                                                </h1></a></div>
                                            <label for="menu_icon"> <i className="fa fa-bars"></i></label>
                                            <input id="menu_icon" type="checkbox"/>

                                        </section>
                                        <section id="blog-featured">
                                            <div className="post_featured">
                                            <div className="post_featured__photo"></div>
                                            <div className="post_featured__details">
                                                <h2 className="featured-details__title"><a href="#">My Travel Blog </a></h2><a className="post-card__avatar" href="#">
                                                <div className="avatar__muted-line"></div>
                                                <div className="avatar__white-bg">
                                                    <div className="white-bg-container">
                                                    <div className="avatar__circle"></div>
                                                    <div className="avatar__name">by Lawrence Perez</div>
                                                    </div>
                                                </div></a>
                                                <p className="featured-details__desc">
                                                Photographs were always a big thing in my life. They were always just around to remind me of the special moments captured in them. Photos were just always a story to me. You could look at a photo and put together the story or sometimes you needed a little assistance putting it together. That’s what always made them special.
                                                </p>
                                                <div className="featured-details__action"><a className="button border-only muted" href="#">read more </a></div>
                                            </div>
                                            </div>
                                        </section>
                                        {articles.map((article, key) => (
                                            <Link key={key} to={`/article/${article.name}`}>
                                                <section id="blog-list">
                                                    <div className="grid_post_container">
                                                    <div className="post-card1"><a className="post-card__category" href="">Dingalan</a>
                                                        <div className="post-card__featured-imagecontent"><img src={article.image} /></div>
                                                        <div className="post-card__details">
                                                        <h2><a href="">{article.title} </a></h2>
                                                        <p></p><a className="post-card__avatar" href="">
                                                            <div className="avatar__circle"></div>
                                                            <div className="avatar__name">by Lawrence Perez</div>
                                                            <div className="avatar__muted-line"></div></a>
                                                        </div>
                                                    </div>
                                                    
                                            
                                            <div className="post-card1"><a className="post-card__category" href="">Baler</a>
                                                <div className="post-card__featured-imagecontent"><img src={article.subimage} /></div>
                                                <div className="post-card__details">
                                                <h2><a href="l">{article.title}</a></h2>
                                                <p></p><a className="post-card__avatar" href="">
                                                    <div className="avatar__circle"></div>
                                                    <div className="avatar__name">by Lawrence Perez</div>
                                                    <div className="avatar__muted-line"></div></a>
                                                </div>
                                            </div>
                                            <div className="post-card1"><a className="post-card__category" href="">Batanes</a>
                                                <div className="post-card__featured-imagecontent"><img src={article.landmark} /></div>
                                                <div className="post-card__details">
                                                <h2><a href="">{article.title} </a></h2>
                                                <p></p><a className="post-card__avatar" href="">
                                                    <div className="avatar__circle"></div>
                                                    <div className="avatar__name">by Lawrence Perez</div>
                                                    <div className="avatar__muted-line"></div></a>
                                                </div>
                                            </div>
                                            
                                                </div>
                                                
                                                </section>
                                                </Link>

                                        ))}         

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
                                        <script src="js/script.min.js"></script>
                                        <section id="blog-list">
                                                
                                    </section>
                                    </body>

            
              
              
    </React.Fragment>
  )
  
  export default ArticleList;