import axios from "axios"

function joke() {
    return (
        // axios.get("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist")
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        axios({
            "method": "GET",
            "url": "https://joke3.p.rapidapi.com/v1/joke",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "joke3.p.rapidapi.com",
                "x-rapidapi-key": "9cf96071a0msh05018541cfe2cf9p1c3c4ejsn0690ae38fe29"
            }
        })

    )

}

export default joke;