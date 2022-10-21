const URL_PATH = "./schools.json"
let container = document.querySelector(".container")

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {
        let COUNTIES = []

        // Get each county
        const COUNTY = 
        data.filter((obj, pos, arr) => 
            arr.map(mapObj => 
            mapObj["County Name"]).indexOf(obj["County Name"]) == pos);

        COUNTY.forEach(element => COUNTIES.push(element["County Name"]));

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
                eachCounty[j].addEventListener("click", (event) => {
                    console.log(event)
                })

                // Pop up
            }
            let eCounty = document.querySelector(`svg`)
            let animate = document.createElement("animate")
            let span = document.createElement("span")

            // Set attributes
            span.setAttribute("class", `${COUNTIES[i]}1`)
            animate.setAttribute("class", `animate-${COUNTIES[i]}`)

            // Add elements
            container.append(span)
            eCounty.append(animate)
        }

    }).catch(error => console.error({ error }))