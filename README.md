# htmltojson
CKEditor in react, converts html to json, and vice versa

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
I do not trust dangerouslySetInnerHTML in react. So i decide to find a simple way to display dynamic text (ex. from API) with html syntax for nice looking and SEO. Of course i can set as i imagine html in react but not dynamic syntax. 

The base is simple:
* use as dummy ritch text editor as i can (future some Copyrighter / SEO can just like that use this)
* enable / disable functionality
* SAFE

Guideline:
* html from CKEditor convert to json structure
* json SAFE display with special function in react as tags
* html source from CKE save in DB, or load ex. form API/WP


## Technologies
* React
	
## Setup
To run this project, install it locally.

```
$ cd ../htmltojson
$ npm install
$ npm run start
```
