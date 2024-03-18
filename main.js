import puppeteer from 'puppeteer';

const index = async () => {
    const navegador = await puppeteer.launch({
        headless: true
    });

    const pagina = await navegador.newPage();
    await pagina.goto('https://www.binance.com/pt-BR/price/bitcoin');

    const cssVariavel = await pagina.$eval('.css-1bwgsh3', elemento => elemento.textContent );
    console.log(cssVariavel);

    await navegador.close()

}

index ()

