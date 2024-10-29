//replace _id to id in all array of object
export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return { id: item._id.toString(), ...item };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};

//replace _id to id in a single object
export const replaceMongoIdInObject = (obj) => {
  //  { ...obj, id: obj._id.toString() }
  // Inside the function, we use { ...obj, id: obj._id.toString() } to create
  //  a new object that copies everything from the original(obj)
  // and adds a new id property.
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
};
