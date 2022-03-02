import React from 'react';

const SocialMediaLinks = () => {
    return (
        <div className="side-social">
            <ul className="social-links-ul">
                <li><a className="facebook" href="https://www.facebook.com/RoyalCollegeLK" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"/></a></li>
                {/*<li><a className="dribbble" href="//www.dribbble.com" target="_blank" rel="noopener noreferrer">*/}
                {/*    <i className="fa fa-dribbble"/></a></li>*/}
                {/*<li><a className="pinterest" href="//www.pinterest.com" target="_blank" rel="noopener noreferrer">*/}
                {/*    <i className="fa fa-pinterest-p"/></a></li>*/}
                <li><a className="twitter" href="//www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"/></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/school/royal-college-sri-lanka/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"/></a></li>
            </ul>
        </div>
    );
};

export default SocialMediaLinks;