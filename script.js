function validacao() {
    /**
     * 
     */
    const amount = document.getElementById("amount")
    

    /*
     Manipulando o input amount para recebor somento números 
     */
    amount.addEventListener("input", () => {
        const haCharactersRegex = /\D+/g
        amount.value = amount.value.replace(haCharactersRegex, "")
    })
}


validacao()