# Overview

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle, currently tested against NodeCG v0.8.9.

# Installation

This bundle requires other bundles to use. I do not recommend using this bundle directly unless you know what you are doing.

Here is what I use to deploy my stream overlay to a new machine.

First I make a new folder that will contain the overlay, and then navigate into it. Then I run the following:

```
npm install -g bower
npm install -g nodecg-cli
nodecg setup
nodecg install Allar/nodecg-allar-overlay
nodecg install Allar/nodecg-beam-service
nodecg install Allar/nodecg-follower-alert
nodecg install Allar/nodecg-nowplaying
nodecg install Allar/nodecg-recentfollower
nodecg install Allar/nodecg-twitch-service
nodecg install Allar/nodecg-streamtip-service
nodecg install Allar/nodecg-tips-recent
nodecg isntall Allar/nodecg-tips-alert

cd ./bundles/nodecg-allar-overlay
nodecg defaultconfig
cd ../../

cd ./bundles/nodecg-beam-service
nodecg defaultconfig
cd ../../

cd ./bundles/nodecg-nowplaying
nodecg defaultconfig
cd ../../

cd ./bundles/nodecg-twitch-service
nodecg defaultconfig
cd ../../

cd ./bundles/nodecg-streamtip-service
nodecg defaultconfig
cd ../../

echo "Run 'nodecg start' to start!"

```