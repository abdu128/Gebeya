function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  const assets = importAll(require.context('../assets/vectors', false, /\.(png|jpe?g|svg)$/));
  
  export default assets;
  