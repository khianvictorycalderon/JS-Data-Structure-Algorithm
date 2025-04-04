const Tree = {
    "Blake": {
      "John": {
        "Michael": {
          "Sarah": "Leaf Node"
        },
        "Emma": "Leaf Node"
      },
      "Sophia": {
        "Daniel": {
          "Olivia": "Leaf Node"
        }
      }
    }
  };

  function findKey(tree, targetKey) {
    for (let key in tree) {
      if (key === targetKey) {
        return tree[key]; // Found it
      }
  
      if (typeof tree[key] === 'object') {
        const result = findKey(tree[key], targetKey);
        if (result !== null) {
          return result;
        }
      }
    }
    return null; // Not found
}

function findKeyPath(tree, targetKey, path = []) {
    for (let key in tree) {
      const newPath = [...path, key];
  
      if (key === targetKey) {
        return newPath; // Return the full path
      }
  
      if (typeof tree[key] === 'object') {
        const result = findKeyPath(tree[key], targetKey, newPath);
        if (result) return result;
      }
    }
    return null;
  }
  
// Finding Olivia
const findOlivia = findKey(Tree, "Olivia");
console.log(findOlivia ? `${findOlivia}` : "No matches");
const oliviaPath = findKeyPath(Tree, "Olivia");
console.log(oliviaPath ? `Olivia's path: ${oliviaPath}` : "Olivia was not found")