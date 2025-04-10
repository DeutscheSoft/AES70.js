import { env } from 'node:process';

const AES70_TEST_DEVICE_ALL_CLASSES = env.AES70_TEST_DEVICE_ALL_CLASSES;

let allClassesTarget;

if (AES70_TEST_DEVICE_ALL_CLASSES) {
  const [host, portStr] = AES70_TEST_DEVICE_ALL_CLASSES.split(':');
  const port = parseInt(portStr);

  allClassesTarget = { host, port };
}

export { allClassesTarget };
