// Appliance objects track their own on/off state
const TV = { name: "TV", isOn: false };
const Lamp = { name: "Lamp", isOn: false };
const Oven = { name: "Oven", isOn: false };

function turnOnAppliance(appliance) {
  if (appliance.isOn) {
    throw new Error(`${appliance.name} is already turned on.`);
  }
  appliance.isOn = true;
  return `${appliance.name} is turned on.`;
}

function turnOffAppliance(appliance) {
  if (!appliance.isOn) {
    throw new Error(`${appliance.name} is already turned off.`);
  }
  appliance.isOn = false;
  return `${appliance.name} is turned off.`;
}

// Wrap each operation so a thrown error is handled gracefully, not crashing the program
function runOperation(operation) {
  try {
    console.log(operation());
  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
  }
}

runOperation(() => turnOnAppliance(TV));
runOperation(() => turnOnAppliance(Lamp));
runOperation(() => turnOnAppliance(Oven));
runOperation(() => turnOffAppliance(TV));
runOperation(() => turnOffAppliance(Lamp));
runOperation(() => turnOffAppliance(Oven));
runOperation(() => turnOffAppliance(TV)); // TV is already off -> triggers the error path

console.log("program completed");
