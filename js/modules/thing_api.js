let errorCodes = {
  404: "Not Found, Your page has gone to the hills",
  500: "Something went wrong, try again!",
  403: "There's something wrong with the delivery!",
  503: "Service is unavailable!",
};

async function fetchData(sourceURL) {
  let resource = await fetch(sourceURL).then((response) => {
    if (response.status !== 200) {
      throw new Error(
        `Error: ${response.status}: ${errorCodes[response.status]}`
      );
    }

    return response;
  });

  let dataset = await resource.json();

  return dataset[0];
}

export { fetchData };
