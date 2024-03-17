import puppeteer from 'puppeteer';

const index = async () => {
    const navegador = await puppeteer.launch({
        headless: false
    });

    const aba = await navegador.newPage();
    aba.goto()

}

index()
