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
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return response.data;
}

export default async function Home() {
  const data = await getData();

  return <main></main>;
}
