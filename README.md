# open-targets-task

A fullstack Application to display the Disease Association details

- Tech Stack Used
  - backend
    -   Graphql
    -   node-express
  - Fronted:
    - React
    - Material UI
 
 - How to run Application 
    - clone the repo
    - Docker way
      - run docker-compose up -d
      - Note: Please update the proxy in client/package.json to  ```"proxy": "http://server:5000"```
    - Without Docker 
      - open the client & server in two seprate terminals
       - run npm start
      - browse http://localhost:3000


 - File Structure

```
├── README.md
├── client
│   ├── Dockerfile
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── schema.graphql
│   └── src
│       ├── App.test.js
│       ├── __snapshots__
│       │   └── App.test.js.snap
│       ├── components
│       │   ├── App.jsx
│       │   ├── features
│       │   │   ├── diseaseAssociation
│       │   │   │   ├── DiseaseAssociationContainer.jsx
│       │   │   │   ├── DiseaseAssociationRow.jsx
│       │   │   │   ├── DiseaseAssociationTable.jsx
│       │   │   │   ├── __tests__
│       │   │   │   │   └── diseaseAssociation.test.jsx
│       │   │   │   ├── hooks
│       │   │   │   │   └── useFetch.jsx
│       │   │   │   └── styleTableElements.jsx
│       │   │   └── radarGraph
│       │   │       └── RadarGraph.jsx
│       │   └── layouts
│       │       └── main.jsx
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── styles
│       │   ├── App.css
│       │   └── index.css
│       └── utils
│           ├── helper.js
│           ├── helper.test.js
│           ├── network.js
│           └── queries.js
├── docker-compose.yaml
└── server
    ├── Dockerfile
    ├── app.js
    ├── files
    │   └── associations.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── resolvers
    │   │   ├── association.js
    │   │   └── rootResolvers.js
    │   ├── schemas
    │   │   ├── association.graphql
    │   │   ├── index.graphql
    │   │   └── rootQuery.js
    │   └── utils
    │       ├── helper.js
    │       └── store.js
    └── tests
        ├── helper.test.js
        ├── server.test.js
        └── store.test.js
   ```
