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
                <figCaption class="item" onclick = "show(this)" data-user-id=${index}>${res.name}</figCaption> </figure> `;
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
    let person = new User(item);
    let {
        name,
        height,
        gender
    } = person.showUser;
    displayModal.style.display = "block";
    displayModal.innerHTML = `
            <div class="modal-content">
            <h2> STAR WARS </h2>
                <p>${name}</p>
                <p>${height}</p>
                <p>${gender}</p>
                <button class="closeModal">CLOSE</button>
                </div>
            `
    let close = document.querySelector('.closeModal')
    close.onclick = () => {
        displayModal.style.display = 'none'
    }

};


//modal

// name.addEventListener("click", (e) => {
//     displayModal.style.display = "block";
//     displayModal.innerHTML = `
//             <div class="modal-content">
//                 <img src="${imageUrl}" alt=""/>
//                 <p>${value.name}</p>
//                 <p>${value.height}</p>
//                 <p>${value.gender}</p>
//                 <button class="closeModal">CLOSE</button>
//                 </div>
//             `
//     let close = document.querySelector('.closeModal')
//     close.onclick = () => {
//         displayModal.style.display = 'none'
//     }
// })