## Get Started

1. First of all create a .env file in the root directory.

Set the environment variables to something like this:

```
MONGO_URI=mongodb://localhost:27017/ts-google-auth
PORT=5000
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

2. you can either use [MongoDB Atlas](https://www.mongodb.com/de-de/atlas/database) or install [MongoDB Compass](https://www.mongodb.com/try/download/compass) locally to connect to a MongoDB Databse. (pass connection string into "MONGO_URI" in .env)

3) You can set up your Google CLIENT ID and Google CLIENT SECRET by following this [tutorial](https://www.askdata.com/docs/dataset-google-analytics-how-to-get-google-client-id-and-client-secret)

4) Install dependencies

   ```
   npm install
   ```

5) Run Server
   ```
   npm run dev
   ```
