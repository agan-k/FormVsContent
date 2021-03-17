---
image: '/assets/api.png'
title: "Connecting to a Public API"
subtitle: "Art Institute of Chicago API"
date: "Dec 2020 by"
author: 'K. Agan'
---

## What is an API anyways?
The term API *(application programming interface)* has been buzzing around long enough and it seems like it is almost impossible for anyone in the tech sphere, be it an enterprise, business or a single professional, to describe their product without having to refer to it. 

Application programming interface is a concept in which the original underlying implementation is abstracted and only relevant information and/or actions are exposed for the developer to use in their own implementations. 

This concept has a long history in the field of programming. Today, API has become somewhat of a synonym for RESTful API, which is a standard used to create interactive applications that relay on multiple web API services. 

## Web API
In the context of web development, an API is typically defined as a set of specifications, such as HTTP request messages, and definition of corresponding responses, usually in form of javascript object notation (JSON). The specifications need to comply to the standards and prescribed conventions but they vary in accordance to the specific design and this is presented in the accompanying documentation. 

A basic example of incorporating API would be if a streaming radio app pulls some data from a weather API and adjusts their playlist accordingly (jazz for rainy days, anyone?). Or a map app pulls some data from public transit API and aside from showing you where you need to go, it also shows you how to get there with public transit. And so forth, you get the idea..

I was first familiarized with the concept after hearing about this new effort the Met Museum was putting forward to make as much as possible of its vast collection available to the public. The data itself was already publicly available in some sense. One could download it, but in such form that it was too clunky and in need of sorting out. In 2017 the plans to move forward were in place and a while later the developers in charge built a RESTful API ready to be used and integrated.

I found myself clicking and enjoying the art from many places around the world, itching to try and incorporate one of the APIs in a passion project of my own. I was looking to gain access to a photography collection that would be fitting my idea for a photography hub of sorts and I found an amazing collection in the Art Institute of Chicago. Their API was well organized and easy to access.

## Making the Connection

First stop, the documentation. The Art Institute of Chicago Public API is excellent and it does great job in guiding us trough all the available features.

Let's jump ahead a bit and look at an example of what to expect after making a request to the API. A request (HTTP) is made in a form of a URL like so:

```html
'https://domain-of-api-host.com/api/etc..'
```
The expected result should give us an Object in form of JSON.

```json
{
   "data": {
      "some_more": "data",
      "some_other": "data"
   },
   "data2": {
      "url": "https://data-in-form-of-url.something",
      "array_of_data": [1, "string", 3, "imagefile.jpg"]
   }
}
```
Once we have the access to a JSON object like the one above, we can then store it and get all the parameters we need by pointing to any of the Object's keys.

Let's make a GET request by simply pasting an artwork's *id (87165)* at the end of the API's *endpoint (https://api.artic.edu/api/v1/artworks)*

<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get.png' />

This particular request will return an object containing all of the available information about that specific artwork.

<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get_body.png' />

### Getting the Images to Display in the Browser

In order to actually display the artwork we will need to consult the documentation and look at the way the data is organized. 

It turns out that the delivery of actual images is served trough <a href='https://iiif.io/api/image/2.0/' target=_blank>IIIF API 2.0</a>. The International Image Interoperability Framework (IIIF) stewards a set of open standards that enables rich access to digital media from museums and other cultural institutions around the world.

The IIIF URLs translate to following structure:

```html
https://www.artic.edu/iiif/2/{identifier}
```
The {identifier} above can represent the artwork's *id* or a *search query* and an optional set of fields which correspond to the parameter keys inside of the Object.

```html
https://www.artic.edu/iiif/2/{id}?{list_of_fields}
```
If we try to make a request for the previous artwork while using this structure

<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get_frank.png' />

Will give us this result:

<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get_frank_body.png' />

In order to display the image we need to include the value of property "image_id".

```json
"data": {
   "id": 87165,
    "title": "Trolley, New Orleans",
    "image_id": "db8a5bc9-cf4c-225f-f51e-7a70fe70c17a"
  }
```
So the structure will look like this.

```html
https://www.artic.edu/iiif/2/{image_id}
```

The final step is to include the last piece required to display the image. This particular IIIF endpoint will determine how our image will be displayed. 

```html
/full/400,/0/default.jpg
/{region}/{size}/{rotation}/{quality}.{format}
```
Putting everything together..
<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get_image.png' />

..and we have our image.
<img class='markdown-img' src='/assets/content/posts/aic_api_article/browser_get_image_body.jpg' />

## Next?

Now that we know how to get to our data, we can start thinking about how to bring it to the front end. All we need to do is make a GET request from our application, save the data, map trough it and extract the pieces we need, and finally concatenate the corresponding id's and endpoints together.

<a href='https://AIC-photography-collection.info' target=_blank>AIC-photography-collection</a> is a passion project which got me into working with APIs in the first place. Feel free to look at it and see how I went about getting all the data to create interactive image galleries. I used the <a href='https://www.npmjs.com/package/axios' target=_blank>axios</a> library (another API!) and search queries to pull data in bulk. You can find the source in <a href='https://github.com/agan-k/aic-photography-selection/tree/master/src' target=_blank>this repo</a>.

<hr/>
<p class='signature'>K.Agan - Dec '20, Brooklyn NY</p>





