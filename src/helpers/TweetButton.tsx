import React from 'react';

import { TwitterShareButton } from "react-twitter-embed";

export default function TweetButton(props: { tweetText: string }) {
    return (
        <div className="centerContent">
            <div className="selfCenter spaceBetween">
                <TwitterShareButton
                    options={{
                        size: 'large',
                        text: props.tweetText,

                    }}
                    url=""
                />
            </div>
        </div>
    );
}