const URL_PATH = "./schools.json"
let container = document.querySelector(".container")

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {
        let COUNTIES = []

        // Get counties
        let removeDuplicate = data.filter((obj, pos, arr) => arr.map(mapObj =>
            mapObj["County Name"]).indexOf(obj["County Name"]) == pos);
        removeDuplicate.forEach(element => COUNTIES.push(element["County Name"]));


        const COLOR = [
            "green", "orange", "navy", "purple", "brown", "red", "teal",
            "black", "yellow", "khaki", "gray", "pink", "blue", "lime", "crimson"
        ]

        for (let i = 0; i < COUNTIES.length; i++) {

            let eachCounty = document.querySelectorAll(`.${COUNTIES[i]}`)


            for (let j = 0; j < eachCounty.length; j++) {

                // Color counties
                eachCounty[j].setAttribute("style", `fill:${COLOR[i]}`)

                // Hover
                eachCounty[j].addEventListener("mouseover", (event) => {
                    console.log(COUNTIES[i])
                })

                // Pop up
            }
            let span = document.createElement("span")
            span.setAttribute("class", `${COUNTIES[i]}1`)
            container.append(span)
            let eCounty = document.querySelector(`svg`)
            let animate = document.createElement("animate")
            animate.setAttribute("class", `animate-${COUNTIES[i]}`)
            eCounty.append(animate)
        }

        let animate = document.querySelectorAll(".container span")
        for (let i = 0; i < animate.length; i++) {
            animate[i].style = `
            position: absolute; width: 5px; height: 5px;
            border-radius: 50px; background-color: #fff;
           animation: popUp 1.5s linear infinite;
        `
        }

    }).catch(error => console.error({ error }))