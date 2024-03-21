function one() {
    const username = "Aditya"

    function two() {
        const website = "github"
        console.log(username)
    }
    //console.log(website) // refError: website not defined (accessing variable out of scope)

    two()
}
// one()

if(true) {
    const username = 'Aditya'
    if(username) {
        const website = " github"
        console.log(username + website)
    }
    //console.log(website) //refError
}
//console.log(username); //refError
