function tree_to_rolemap(tree, s) {
  const roles = new Map();
  if (!s) s = '/';

  const tasks = [];

  const fetch_role = (o) => {
    if (Array.isArray(o)) {
      o.forEach(fetch_role);
    } else {
      tasks.push(
        o.GetRole().then((role) => {
          roles.set(o, role);
        })
      );
    }
  };

  tree.forEach(fetch_role);

  return Promise.all(tasks).then(function () {
    const rolemap = new Map();

    const build_paths = (a, prefix) => {
      const p = prefix != null ? prefix + s : '';
      const local_roles = new Map();

      a.forEach(function (o, i) {
        if (Array.isArray(o)) return;

        const role = roles.get(o);

        if (local_roles.has(role)) {
          const tmp = local_roles.get(role);

          if (Array.isArray(tmp)) tmp.push(o);
          else local_roles.set(role, [tmp, o]);
        } else {
          local_roles.set(role, o);
        }
      });

      local_roles.forEach(function (o, role) {
        if (Array.isArray(o)) {
          let n = 1;
          for (let i = 0; i < o.length; i++) {
            let nrole;
            while (local_roles.has((nrole = role + n))) {
              n++;
            }
            local_roles.set(nrole, o[i]);
            local_roles.set(o[i], nrole);
          }

          local_roles.delete(role);
        } else {
          local_roles.set(o, role);
        }
      });

      a.forEach((o, i) => {
        if (Array.isArray(o)) {
          build_paths(o, p + local_roles.get(a[i - 1]));
        } else {
          const path = p + local_roles.get(o);
          rolemap.set(path, o);
        }
      });
    };

    build_paths(tree, null);

    return rolemap;
  });
}

export default tree_to_rolemap;
