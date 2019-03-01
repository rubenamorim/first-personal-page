import React from 'react';

// Media
import bot from '../../media/bot.gif';

// Styles
import './ComingSoon.css';

function ComingSoon() {
    return (
        <main className="wrapper" >
            <div className="content">
                <img alt="bot" src={bot} className="image" />
                <p className="text">
                    🛠⚠️ under construction ⚠️🛠
                </p>
            </div>
            <a className="github-button"
                href="https://github.com/rubenamorim"
                data-size="large"
                aria-label="Follow @rubenamorim on GitHub">
                Follow @rubenamorim
                </a>
        </main>
    );
}

export default ComingSoon;
