const getLength = (value) => {
  if (typeof value === 'string' || (Array.isArray(value))) {
    console.log(value.length);
    return;
  };
  console.log(0);
};
