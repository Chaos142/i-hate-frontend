async function updateBatteryLevel() {
    const battery = await navigator.getBattery();
    const batteryLevel = `${Math.round(battery.level * 100)}%`;

    document.getElementById('battery').innerHTML = "Battery: " + batteryLevel;
}
setInterval(updateBatteryLevel, 1000);
updateBatteryLevel();