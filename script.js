const URL_PATH = "./schools.json"

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {

        let counties = ["Lofa", "Bomi", "Bong", "GrandGedeh", "GrandKru",
            "GrandBassa", "GrandCapeMount", "Nimba", "RiverGee", "RiveCess",
            "Gbarpolu", "Sinoe", "Maryland", "Margibi", "Montserrado"
        ]
        for (let i = 0; i < counties.length; i++) {

            let Lofa = document.querySelectorAll(`.${counties[i]}`)
                // Lofa[0].setAttribute("style", "fill:orange")


        }

        for (let i = 0; i < counties.length; i++) {
            // let elementEffect = document.getElementById(counties[i])
            // console.log(elementEffect)
        }
        console.log(data)


    }).catch(error => console.error({ error }))