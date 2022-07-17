const URL_PATH = "./schools.json"

fetch(URL_PATH)
    .then(res => res.json())
    .then(data => {

        let counties = ["Lofa", "Bomi", "Bong", "GrandGedeh", "GrandKru",
            "GrandBassa", "GrandCapeMount", "Nimba", "RiverGee", "RiveCess",
            "Gbarpolu", "Sinoe", "Maryland", "Margibi", "Montserrado"
        ]
        let Lofa = document.querySelectorAll(`.${counties[0]}`)
        Lofa[0].setAttribute("style", "fill:blue")
        console.log()

        for (let i = 0; i < counties.length; i++) {
            // let elementEffect = document.getElementById(counties[i])
            // console.log(elementEffect)
        }
        console.log(data)


    }).catch(error => console.error({ error }))