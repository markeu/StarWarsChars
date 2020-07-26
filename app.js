let use = document.querySelector("ul");
let displayModal = document.querySelector(".displayModal");
let result;

axios
    .get("https://swapi.dev/api/people/")
    .then(function(response) {
        // handle success
        result = response.data.results;
        result.forEach((res, index) => {
            use.innerHTML += `
            <figure>
                <img src="./img/srwars.jpg">
                <figCaption class="item" onclick = "show(this)" data-user-id=${index}>${res.name}</figCaption>
            </figure> `;
        });
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    });

class User {
    constructor(user) {
        this.user = user;
    }

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
    }
}

const show = (user) => {
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
            `
    let close = document.querySelector('.closeModal')
    close.onclick = () => {
        displayModal.style.display = 'none'
    }
};