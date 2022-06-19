---
id: youtubeapi
title: Youtube API
sidebar_label: Youtube API
slug: /youtubeapi
---

# youtube-API
To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Requirements
  - [x] Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds)
  - [x] A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
  - [x] A basic search API to search the stored videos using their title and description.
  - [x] Dockerize the project.
  - [x] It should be scalable and optimised.
  - [x] Add support for supplying multiple API keys
  - [x] Make a dashboard to view the stored videos with filters and sorting options (optional)
  - [x] Optimise search api, so that it's able to search videos containing partial match

<!-- GETTING STARTED -->
## Getting Started

Follow the process below to start working with git-Cli.

### Prerequisites

make sure u have a stable version of npm, node.js and mongoDB installed locally on your pc.
* npm
  ```sh
  npm install npm@latest -g
  ```
[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

[Download and install mongoDB Community version](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. add environment variables in below given format
   ```sh
   API_KEY = "key1,key2,key3" 
   Mongo_URI = mongodb://localhost:27017/youtube
   ```
   [To generate key follow the link](https://developers.google.com/youtube/v3/getting-started)

5. After configuring `.env` file run the below given cmd
   ```npm
    npm run start
   ```
   
   _Your app must be up and running_

## Tech Stack
   - **language** : Javascript
   - **View engine** : EJS 
   - **Database** : MongoDB (Scalable, good indexing and natural form of storing data thus flexible)
   - **Tool** : NodeJS (enables to work with JS in backend)

## Features and explanation
  - **Supports Multiple key**
    - applications take in a set of valid API keys and choose one of them at a time using a round-robin technique
    - This ensures that one key is not overused and thus prevents a failure as API keys usually comes with restrictions on the number of the call per day or even on an hourly basis
      
      ![image](https://user-images.githubusercontent.com/50829119/174077245-cb3b7b50-0302-4989-97ce-d1ec6409a40b.png)
      
  - **Partial Text Search**
    - the app accommodates partial and full text searching
    - MongoDB is internally used to do indexing of title and description entries in the database
    - The search later uses this to fetch the most similar entries, rank up, and simultaneously sort in order of similarity

  - **Implements Pagination**
    - Handling large chunks of data and transferring it over the internet can seriously compromise the efficiency of the application
    - By implementing pagination I have limited the huge JSON objects which were being fetched at once
    - pagination is implemented for both search and get features of the API and different pages can be accessed easily by simply changing the page parameter in the query
 
      ```
      //to fech data in decreasing order
      http://localhost:3000/fetch?page=2
      
      //TO implement search key variable can be changed to search in databse ex key=cricket+odi
      http://localhost:3000/search?key=cricket+odi&page=1  
      ``
      
  - **front end**
    - The root URL can be used to view data entries
    - and supports search feature
    - build using EJS view engine

  - **Containerization**
    - the app is contanerized the app using Docker
    - Pull from [Docker Hub](https://hub.docker.com/r/kdsinghcoder/youtubeapi)
    - `docker pull kdsinghcoder/youtubeapi`
    
 
 ## Output Screen Shots
 
- **Dashboard**
    ![image](https://user-images.githubusercontent.com/50829119/174067209-211c1445-f443-4d4d-a3d4-cd9fa596feee.png)
    _Sorted in decending order of time stamp as per requirement _

- **Dashboard Search**
   ![image](https://user-images.githubusercontent.com/50829119/174068035-8e5b27e5-8691-4d32-8949-5ff225d7c6d8.png)
   _Well-matched entries are shown at the top, we can see on searching night cricket, only two entries had both night and cricket in them therefore these two entries are ranked above those who do not have it i.e those who simply have cricket in them_
    
- **API - Get Query**
  - page 1 Fetch
   ![image](https://user-images.githubusercontent.com/50829119/174068790-02d700ce-71a3-4918-84c7-065264f4ed5d.png)

  - page 2 Fetch
   ![image](https://user-images.githubusercontent.com/50829119/174069114-78fbe1e8-4818-4f77-bdfc-9778f0f8a85c.png)
   
  - Since Pagination each request holds 10 data entries and is fast ( _the number of entries can be changed easily by changing the variable limit in code_ )
   ![image](https://user-images.githubusercontent.com/50829119/174069444-14081a47-408a-4a4e-8fa5-af45e55aabd6.png)

- **API - Search Query**

  - Seach for `night` url `http://localhost:3000/search?key=night&page=1`
    ![image](https://user-images.githubusercontent.com/50829119/174070342-9b14ce97-2b63-4fe5-bbc9-ecb291fa2429.png)
  - Below we can see that `cricket+odi` gives the same result as `odi+cricket` which was one of the requirement
   ![image](https://user-images.githubusercontent.com/50829119/174071016-347c69cf-bc45-4556-8b74-ca94c5e6b5ba.png)
   
   ![image](https://user-images.githubusercontent.com/50829119/174071103-67741e05-04fc-4cb4-aa4e-ef258c9aaf4a.png)

- **Multi key round robin**
   
   ![image](https://user-images.githubusercontent.com/50829119/174072821-2ce78070-365c-488b-bbcc-418af8f62667.png)

- **Online Cluster view data hosting**

   ![image](https://user-images.githubusercontent.com/50829119/174077564-15dd3934-6c45-4560-a89d-f227824e7fce.png)

- **To build your own docker image run below cmd**
  - `docker build -t <User_Name>/youtubeapi .`
  - `docker run -p 3000:3000 <User_Name>/youtubeapi`
   
   ![image](https://user-images.githubusercontent.com/50829119/174083803-ed720ff8-6a26-49c4-99c3-66f5195aac3d.png)