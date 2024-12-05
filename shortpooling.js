const fetchData = () => {
    fetch("http://localhost:3000/") // api that we needs to fetch
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  setInterval(() => {
    fetchData();
  }, 2000);


  // use case
  // login page or for the messgae like new mesgae came or not
  // this is very cosastly operation so we can use it only when the screen time is less like real word example is
  // hotstar login page there we can see the qr code it will check after certin time by calling api 
  // wether user has logined or not
  