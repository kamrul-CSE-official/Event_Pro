const getDataInLocalStore = (name) => {
  const getDataString = localStorage.getItem(name);
  if (getDataString) {
    const allData = JSON.parse(getDataString);
    return allData;
  }
  return [];
};

const addDataInLocalStore = (name, data) => {
  let allData = getDataInLocalStore(name);

  if (allData) {
    allData.push(data);

    let dataStringified = JSON.stringify(allData);
    localStorage.setItem(name, dataStringified);
  } else {
    let allData = [data];
    let cartStringified = JSON.stringify(allData);
    localStorage.setItem(name, cartStringified);
  }
};

export { addDataInLocalStore, getDataInLocalStore };
