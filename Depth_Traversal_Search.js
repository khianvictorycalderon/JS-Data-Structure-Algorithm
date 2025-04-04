const Tree = {
    "A": {
      "B": {
        "D": {
          "H": "Leaf Node",
          "I": "Leaf Node"
        },
        "E": "Leaf Node"
      },
      "C": {
        "F": {
          "J": "Leaf Node"
        },
        "G": {
          "K": "Leaf Node",
          "L": "Leaf Node"
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

  // We want to find the letter L
  const findL = findKey(Tree, "L");
  console.log(findL ? `letter ${findL} found` : "No letter L found");
  const LPath = findKeyPath(Tree, "L");
  console.log(LPath ? `L's path : ${LPath}` : "No letter L found");






