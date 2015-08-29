# Keep Truckin'

Do you make widgets? Are you tired of not knowing if the trucking company you use is reliable? Well we have a solution for you!

Introducing Keep Truckin'! Keep Truckin' gives YOU the power to choose between carriers both large and small to get your widgets where they need to go faster, cheaper, and more reliably.  Keep Truckin' has a ranking system to rank carriers as well as a built in load board so carriers compete to offer you the lowest price.


Usage (docker)
--
first we need a mongo container
docker run -d --name truckin-mongo

then lets run Keep Truckin'
docker run -p 3000:3000 --link truckin-mongo -e MONGO_URI=mongodb://truckin-mongo:27017/keeptruckin mjrsnyder/keeptruckin
