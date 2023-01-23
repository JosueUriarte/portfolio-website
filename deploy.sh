#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run build

# navigate into the build output directory
cd build

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'www.josueuriarte.dev' > CNAME

# git init
git checkout -B main
git add -A

current="`date +'%Y-%m-%d %H:%M:%S'`"
msg="Deployed on: $current"
git commit -m "Deploying!!! $msg"

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/JosueUriarte/portfolio-website.git main:gh-pages

cd -
