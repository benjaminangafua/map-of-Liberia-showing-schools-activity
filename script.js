const URL_PATH = "./schools.json"

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {
        let COUNTIES = []
        let container = document.querySelector(".container")

        // Get counties
        let removeDuplicate = data.filter((obj, pos, arr) => arr.map(mapObj => mapObj["County Name"]).indexOf(obj["County Name"]) == pos);
        removeDuplicate.forEach(element => COUNTIES.push(element["County Name"]));


        const COLOR = ["green", "orange", "navy", "purple", "brown", "red", "teal", "black", "yellow", "khaki", "gray", "pink", "blue", "lime", "crimson"]

        for (let i = 0; i < COUNTIES.length; i++) {
            console.log(i)
            let count = document.querySelectorAll(`.${COUNTIES[i]}`)
            for (let j = 0; j < count.length; j++) {
                count[j].setAttribute("style", `fill:${COLOR[i]}`)

            }
        }

        let animate = document.querySelectorAll(".container span")
        for (let i = 0; i < animate.length; i++) {
            animate[i].style = `
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50px;
            background-color: #fff;
           animation: popUp 1.5s linear infinite;
        `
        }

    }).catch(error => console.error({ error }))