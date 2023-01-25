useEffect(() => {
  fetch("https://www.tappods.com/wp-json/tpapi/v1/getpods/")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
}, []);
