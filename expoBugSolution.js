// expoBugSolution.js
//Solution: Upgrade Expo CLI and React Native to compatible versions.
const checkExpoVersion = async () => {
  const { version } = await expo.getExpoGoVersionAsync();
  console.log(`Expo Go Version: ${version}`);

  //Check for updates
  const update = await expo.checkForUpdatesAsync();
  if (update.isAvailable) {
    await expo.reloadAsync();
  } else {
    console.log("Expo Go is up-to-date");
  }
};

checkExpoVersion();

//Install latest expo cli
npm install -g expo-cli