async function getData() {
  const response = await fetch(`${process.env.GRAPHQL_SERVER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      graphqlQuery
      `,
    }),
    next: { revalidate: 10 }, // set revalidate: 0 to completely opt out of nextjs request data caching especially when dealing with services with frequent data changes
  }).then((res) => res.json());
  return response.data;
}

export default async function Home() {
  const data = await getData();

  return <main></main>;
}
