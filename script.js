function validacao() {
    //  Cotação de moedas do dia.
    // Convenção, Letras maiusculas
    const USD = 5.49
    const EUR = 6.33
    const GBP = 7.42

    // Obtendo os elementos do formulário.
    const form = document.querySelector("form")
    const amount = document.getElementById("amount")
    const currency = document.getElementById("currency")
    const footer = document.querySelector("main footer")
    const description = document.getElementById("description")
    const result = document.getElementById("result")
    /*
     Manipulando o input amount para receber somente números 
     */
    amount.addEventListener("input", () => {
        const haCharactersRegex = /\D+/g
        amount.value = amount.value.replace(haCharactersRegex, "")
    })

    // Capturando o evento de submit do formulário 
    form.addEventListener("submit", (event) => {
        event.preventDefault()

        switch (currency.value) {
            case "USD":
                convertCurrency(amount.value, USD, "US$")
                break;
            case "EUR":
                convertCurrency(amount.value, EUR, "€")
                break
            case "GBP":
                convertCurrency(amount.value, GBP, "£")
                break
            default:
                break;
        }

        // console.log(currency.value)
        // console.log(amount,price,symbol)

    })
    function convertCurrency(amount, price, symbol) {
        try {
            //  Atualizando o conteudo da contação da moeda selecionada
            description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

            // Calcula o total
            let total = amount * price
            
            // Verifica se o ressultado não é número
            if (isNaN(total)) {
                return window.alert("Por fovor, digite digite o valor corretamente para converter.")
            }
           
            total = formatCurrencyBRL(total).replace("R$", "")

            // exibindo o resultado total
            result.textContent = `${total} Reais`

            // Adiciona a classe footer do 'css'
            footer.classList.add("show-result")
        } catch (error) {
            // Remove a classe footer do 'css'
            footer.classList.remove("show-result")

            console.log(error)
            window.alert("Não foi possível converter, tente novamente mais tarde")

        }

    }

    // Formata a moeda em real brasileiro
    function formatCurrencyBRL(value) {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
}



validacao()

