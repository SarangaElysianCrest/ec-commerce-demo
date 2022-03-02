import React from "react";
import Breadcrumb from "../breadcrumb";
import '../../../styles/scss/style.scss';


const ContactUs = () => {

    return  <div>
                <Breadcrumb/>
                <div class="contact-area pt-100 pb-100">
                    <div class="container">
                        <div class="custom-row-2">
                            <div class="col-lg-4 col-md-5">
                                <div class="contact-info-wrap">
                                    <div class="single-contact-info">
                                        <div class="contact-icon">
                                            <i class="fa fa-phone"></i>
                                        </div>
                                        <div class="contact-info-dec">
                                            <p>+012 345 678 912</p>
                                            <p>+012 345 678 912</p>
                                        </div>
                                    </div>
                                    <div class="single-contact-info">
                                        <div class="contact-icon">
                                            <i class="fa fa-globe"></i>
                                        </div>
                                        <div class="contact-info-dec">
                                            <p><a href="#">info@example.com</a></p>
                                            <p><a href="#">demo@example.com</a></p>
                                        </div>
                                    </div>
                                    <div class="single-contact-info">
                                        <div class="contact-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="contact-info-dec">
                                            <p>Address goes here. </p>
                                            <p>Address goes here.</p>
                                        </div>
                                    </div>
                                    <div class="contact-social text-center">
                                        <h3>Follow Us</h3>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                                            <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7">
                                <div class="contact-form">
                                    <div class="contact-title mb-30">
                                         <h2>Get In Touch</h2>
                                    </div>
                                    <form class="contact-form-style" id="contact-form" action="" method="post">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input name="name" placeholder="Name*" type="text"/>
                                        </div>
                                        <div class="col-lg-6">
                                            <input name="email" placeholder="Email*" type="email"/>
                                        </div>
                                        <div class="col-lg-12">
                                            <input name="subject" placeholder="Subject*" type="text"/>
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea name="message" placeholder="Your Message*"></textarea>
                                            <button class="submit" type="submit">SEND</button>
                                        </div>
                                    </div>
                                    </form>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

}

export default ContactUs;