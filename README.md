# Wi-Fi Credetials Display

An easy way of sharing a guest Wi-Fi network credentials with friends and family.

## Configuration

### Wi-Fi credentials

The Wi-Fi credentials can be configured in the [wifi-config.ts](./src/config/wifi-config.ts) file.

### Theming

Colors and sizes can be changed in the [colors.css](./src/style/colors.css) and [sizes.css](./src/style/sizes.css) files respectively.

## Deploy

Run `npm install && npm run build` to build the project for manual deploy or `docker build -t wifi-qr .` to build a docker image.
