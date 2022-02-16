const API_URL = "http://localhost:5000";
async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.

  const response = await fetch(`${API_URL}/getplanets`);
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/getLaunches`);
  const launchData = await response.json();
  return launchData.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try {
    return await fetch(`${API_URL}/getLaunches`, {
      method: "post",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/getLaunches/${id}`, {
      method: "delete",
    });
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
