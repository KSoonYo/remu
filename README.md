# webOS TV Web APP sample: Remu

## Description

This is a simple app for webOS TV APP created by KSoonYo

## Prerequite

- node v16+
- [webOS ares-cli](https://webostv.developer.lge.com/develop/tools/cli-introduction)
- (option) [Simulator](https://webostv.developer.lge.com/develop/tools/simulator-introduction)
- (option) target device(webOS TV)

## Feature

v0.0.1

- octave up/down
- C4 ~ B6 notes with a remote control

## Run

```bash
npm i
npm run serve // on local web server
```

In webOS TV simulator,

```bash
npm run clean
npm run pack
ares-launch -s <SIMULATOR_VERSION> </APP/DIR/PATH>
```

## Deploy

1. Create `/dist` folder in working directory

```bash
npm run pack
```

2. Package the `/dist` to create an `IPK`

```bash
ares-package dist
```

3. Install the `IPK` on the target device

```bash
ares-install --device <TARGET_DEVICE> <YOUR_IPK_NAME>.ipk
```

## References

- [webOS Open Source Edition](https://www.webosose.org/docs/guides/getting-started/hello-webos-ose/)
- [webOS TV Platform references](https://webostv.developer.lge.com/develop/references/appinfo-json)
- [webOS TV App Lifecycle](https://webostv.developer.lge.com/develop/guides/app-lifecycle-management)
- [webOS TV Remote control actions](https://webostv.developer.lge.com/develop/guides/magic-remote)
- [Enact](https://enactjs.com/)
- [webOS TV developer mode](https://webostv.developer.lge.com/develop/getting-started/developer-mode-app)
