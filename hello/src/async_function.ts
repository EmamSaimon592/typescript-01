async function getData(): Promise<string> {
  throw new Error('Something went wrong!');
}

async function run() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.error('Error:', (error as Error).message);
  }
}

run();
