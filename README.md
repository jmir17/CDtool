<h1 align="center">
  CDtool
</h1>
<p align="center">A tool for continuous delivery without giving away private certificates to run scripts.</p>

<br/>


# Introduction

CD tool exposes an API endpoint and runs the scripts prepared when is hit. This is an alternative to run continuous deployment scripts without giving away the server certificates to a third party. Something required if you run your CI/CD pipelines in someone else's servers.

<br/>

# Installation

In order to run this software, it is necessary to install [nodejs](https://nodejs.org/en/download/)

and the <b>project dendencies</b> included in package.json running:
>npm i
<br/>

# Start up the server

In the file `config.json` the port of the server and the token asked in the requests can be changed. 

Place the scripts that must ran in the folder `/scripts`. Delete the scripts included there. Notice that the order of execution is alphabetical.

Start the server just by typing:
>npm start
<br/>

# Run the scripts
Consume the service exposed by performing a POST request passing the token in the body of the request. 

An example using curl:
>curl -d '{"token":"securityToken"}' -H 'Content-Type:application/json' -X POST localhost:3000/runscript
