// Should be shifted to ENV for production
export const ASSETS = [
  { symbol: "AAPL", contract: "0x139C8512Cde1778e9b9a8e721ce1aEbd4dD43587" },
  { symbol: "TSLA", contract: "0x1ceDaaB50936881B3e449e47e40A2cDAF5576A4a" },
  { symbol: "MSFT", contract: "0x021Fb44bfeafA0999C7b07C4791cf4B859C3b431" },
];

const MINUTE_MS = 60000;
// Update once every 3 minutes
export const ASSET_REFRESH_PERIOD = 3 * MINUTE_MS;
