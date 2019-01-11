const fetch = require('node-fetch');

/*******************************************************
 * Gets Data from LaunchLibrary API
 * Default number of launches is 10
 * To get more/less launches provide a count argument to the function
********************************************************/ 
const getLaunchData = async (count = 10) => {
  const url = `https://launchlibrary.net/1.4/launch/next/${count}/?mode=verbose`;
  const response = await fetch(url);
  let data = await response.json();

  //Filter out chinese launches
  data = data.launches.filter((launch) => {
    return launch.lsp.id !== 88;
  });
  return data;
};

const getSingleLaunchData = async (launchID) => {
  const url = `https://launchlibrary.net/1.4/launch/${launchID}/?mode=verbose`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// getLaunchData(5)
//   .then(data => {
//     console.log(data);
// });

module.exports = {
  getLaunchData,
  getSingleLaunchData,
}