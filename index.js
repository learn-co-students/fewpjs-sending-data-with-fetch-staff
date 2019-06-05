// Example given in README:

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then( (response) => {
    return response.json();
  })
  .then( (json) => {
    const idTag = document.createElement('p');
    idTag.innerHTML = `Successfully created user with ID ${json["id"]}`;
    document.body.appendChild(idTag);
  })
  .catch( (error) => {
    const errorTag = document.createElement('p');
    errorTag.style.color = "red";
    errorTag.innerHTML = error["message"];
    document.body.appendChild(errorTag);
  });
}
