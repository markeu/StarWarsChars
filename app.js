// Target DOM Elements
const use = document.querySelector("ul");
const displayModal = document.querySelector(".displayModal");
const outClose = document.querySelector(".containers");
const close = document.querySelector(".closeModal");
const result;

//HTTP Request call
axios
    .get("https://swapi.dev/api/people/")
    .then(function(response) {
        // handle success
        result = response.data.results;
        result.forEach((res, index) => {
            use.innerHTML += `
            <figure>
                <img src="./img/srwars.jpg">
                <figCaption class="item" onclick = "showDetails(this)" data-user-id=${index}>${res.name}</figCaption>
            </figure> `;
        });
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });

// user class model
class User {
    constructor(user) {
            this.user = user;
        }
        // Method to return user details
    get showUser() {
        const {
            name,
            gender,
            height,
            age
        } = this.user;

        return {
            name,
            gender,
            height,
            age,
        };
    };
};

//onclick function for displaying details on modal pop-out
const showDetails = (user) => {
    const index = user.getAttribute("data-user-id");
    let item = result[index];
    let char = new User(item);
    let {
        name,
        height,
        gender
    } = char.showUser;
    displayModal.style.display = "block";
    displayModal.innerHTML = `
            <div class="modal-content">
            <h2> STAR WARS </h2>
                <p class="item1">CHARACTER: ${name}</p>
                <p class="item1">HEIGHT: ${height}</p>
                <p class="item1">GENDER: ${gender}</p>
                <div class = "button closeModal" id="button-5">
                  <div id="translate"> </div> <a href = "#" > Close!</a> </div>
                </div>
            `;

    close.onclick = () => {
        displayModal.style.display = "none";
    };
};

// Modal out-click close
window.onclick = function(event) {
    if (event.target == outClose) {
        displayModal.style.display = "none";
    };
};