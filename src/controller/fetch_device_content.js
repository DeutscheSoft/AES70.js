import { OcaBlock } from './ControlClasses/OcaBlock.js';
import { Arguments } from './arguments.js';

function formatValue(value) {
  if (typeof value === 'object') {
    if (value instanceof Uint8Array) {
      return Array.from(value);
    } else if (value !== null && value.isEnum) {
      return value.name;
    } else {
      for (const name in value) {
        value[name] = formatValue(value[name]);
      }
      return value;
    }
  } else {
    return value;
  }
}

function formatClassIdentification(classIdentification) {
  const { ClassVersion, ClassID } = classIdentification;

  return {
    ClassVersion,
    ClassID: ClassID.split('')
      .map((entry) => entry.charCodeAt(0))
      .join('.'),
  };
}

function formatReturnValue(name, value) {
  if (typeof value === 'object') {
    if (value instanceof Arguments) {
      return {
        [name]: value.item(0),
        ['Min' + name]: value.item(1),
        ['Max' + name]: value.item(2),
      };
    } else {
      value = formatValue(value);
    }
  }

  return {
    [name]: value,
  };
}

async function fetchObjectInfo(o) {
  const info = {
    type: o.ClassName,
    ObjectNumber: o.ObjectNumber,
  };

  const classIdentification = await o.GetClassIdentification();

  Object.assign(info, formatClassIdentification(classIdentification));

  await Promise.all(
    o.get_properties().forEach(async (p) => {
      const { name } = p;
      if (name === 'ClassID' || name === 'ClassVersion' || name === 'Owner')
        return;
      if (o instanceof OcaBlock && name === 'Members') return;
      const getter = p.getter(o);
      if (!getter) return;
      try {
        const currentValue = await getter();

        Object.assign(info, formatReturnValue(name, currentValue));
      } catch (err) {
        if (err.status != 8)
          console.error(
            'Fetching property',
            o.ClassName,
            p.name,
            'failed:',
            err
          );
      }
    })
  );

  return info;
}

async function managerExists(manager) {
  try {
    await manager.GetClassIdentification();
    return true;
  } catch (err) {
    if (err.status != 5) {
      throw err;
    }

    return false;
  }
}

async function fetchDeviceContentRec(objects) {
  const result = [];

  for (let i = 0; i < objects.length; i++) {
    const o = objects[i];
    const info = await fetchObjectInfo(o);

    if (o instanceof OcaBlock) {
      const members = objects[i + 1];
      if (!Array.isArray(members)) {
        throw new Error('Member missing for OcaBlock.');
      }
      info.Members = await fetchDeviceContentRec(members);
      i++;
    }

    result.push(info);
  }

  return result;
}

export async function fetchDeviceContent(device) {
  const objects = await device.GetDeviceTree();
  const managers = [
    device.DeviceManager,
    device.SecurityManager,
    device.FirmwareManager,
    device.SubscriptionManager,
    device.PowerManager,
    device.NetworkManager,
    device.MediaClockManager,
    device.LibraryManager,
    device.AudioProcessingManager,
    device.DeviceTimeManager,
    device.TaskManager,
    device.CodingManager,
    device.DiagnosticManager,
  ];

  for (const manager of managers) {
    if (await managerExists(manager)) objects.push(manager);
  }

  return await fetchDeviceContentRec(objects);
}
