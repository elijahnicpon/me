
# abort on errors
set -e

# reset dist    
rm -rf dist

# build
npm run build
npm run generate-file-structure

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# TODO: (from github) Your site's DNS settings are using a custom subdomain, elijah.nicpon.com, that is set up as an A record. We recommend you change this to a CNAME record pointing to elijahnicpon.github.io. For more information, see documentation (InvalidARecordError). 
# echo 'elijah.nicpon.com' > CNAME
echo 'elijahnicpon.github.io' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:elijahnicpon/me.git main:gh-pages

cd -
