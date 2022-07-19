const URL_PATH = "./schools.json"

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {

        let COUNTIES = ["Lofa", "Bomi", "Bong", "GrandGedeh", "GrandKru", "GrandBassa", "GrandCapeMount", "Nimba", "RiverGee", "RiveCess", "Gbarpolu", "Sinoe", "Maryland", "Margibi", "Montserrado"]
        const COLOR = ["green", "orange", "navy", "purple", "brown", "red", "teal", "black", "yellow", "khaki", "gray", "pink", "blue", "lime", "crimson"]

        for (let i = 0; i < COUNTIES.length; i++) {
            console.log(i)
            let count = document.querySelectorAll(`.${COUNTIES[i]}`)
            for (let j = 0; j < count.length; j++) {
                count[j].setAttribute("style", `fill:${COLOR[i]}`)

            }
        }
        console.log(data)


    }).catch(error => console.error({ error }))