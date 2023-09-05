function sum(value) {
    const podzielone = value.split(";");
    let wynik = 0;

    podzielone.forEach(element => {
        let tmpElement = parseInt(element);
        if (tmpElement == element) {
            wynik += tmpElement;
        } else {
            if (element.indexOf(":") >= 0) {
                let elementDzielenieprzez = element.split(":");
            } else {
                let tmpElement = parseInt(element);
                wynik += tmpElement;
            }
        }

    })

    console.info(wynik);

}
