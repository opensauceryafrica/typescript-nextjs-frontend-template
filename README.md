1. Define GraphQL Endpoint URL:
   Add your GraphQL endpoint URL to the .env.local or .env file:

`# .env.local
GRAPHQL_API_URL="https://youractualdomain.com/graphql"`

2. Configure GraphQL Request:

Use the POST method with optional headers for authentication if authentication is needed .
Include the GraphQL query in the request body.

3. Utilize revalidate Option:

In the getServerSideProps function, set revalidate: 10 to re-fetch data every 10 seconds.
