#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run build

# navigate into the build output directory
# cd build

# place .nojekyll to bypass Jekyll processing
# echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.josueuriarte.dev' > CNAME

# git init
git checkout gh-pages
git add -A
git commit -m "Deploying from Vite"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:JosueUriarte/portfolio-website.git main:gh-pages
git subtree push --prefix build origin gh-pages

cd -

# This link helped me deploy the website better
# https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane

# $ git subtree push --prefix build origin gh-pages
