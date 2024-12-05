const makeRequest = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      console.log("new message", data);
      makeRequest();
    } catch (e) {
      console.log(e);
      makeRequest();
    }
  };
  makeRequest();