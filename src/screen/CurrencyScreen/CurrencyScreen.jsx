import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "./CurrencyScreen.css"


const CalcBuy = (value) => {
    console.log(value)
    let angka = parseFloat(value)
    return angka + (angka*0.05)
}

const CalcSell = (value) => {
    console.log(value)
    let angka = parseFloat(value)
    return angka - (angka*0.05)
}
const CurrencyScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get("https://api.currencyfreaks.com/latest?apikey=003cb76e24c74722bcf7376c817a2995&symbols=CAD,IDR,JPY,CHF,EUR,GBP")
        .then((response) => setData (response.data.rates))
        .catch((err) => console.log(err))
        .finally((e) => setIsLoading(false))
    }, []);

    return(
        <div class="currencyContainer">
           
         {isLoading ? (
             <p>Load data...</p>
         ): (
             <div>
                 <div class="currencyList">
                    <text class="colorDark">Currency</text>
                    <text class="colorDark">We Buy</text>
                    <text class="colorDark">Exchange Rate</text>
                    <text class="colorDark">We Sell</text>
                </div>
                <div class="currencyList">
                    <text class="currencyContentText">CAD</text>
                    <text class="currencyContentText">{CalcBuy(data.CAD)}</text>
                    <text class="currencyContentText">{data.CAD}</text>
                    <text class="currencyContentText">{CalcSell(data.CAD)}</text>
                </div>
                <div class="currencyList">
                <text class="currencyContentText colorDark">EUR</text>
                    <text class="currencyContentText">{CalcBuy(data.EUR)}</text>
                    <text class="currencyContentText">{data.EUR}</text>
                    <text class="currencyContentText">{CalcSell(data.EUR)}</text>
                </div>
                <div class="currencyList">
                <text class="currencyContentText colorDark">IDR</text>
                    <text class="currencyContentText">{CalcBuy(data.IDR)}</text>
                    <text class="currencyContentText">{data.IDR}</text>
                    <text class="currencyContentText">{CalcSell(data.IDR)}</text>
                </div>
                <div class="currencyList">
                <text class="currencyContentText colorDark">JPY</text>
                    <text class="currencyContentText">{CalcBuy(data.JPY)}</text>
                    <text class="currencyContentText">{data.JPY}</text>
                    <text class="currencyContentText">{CalcSell(data.JPY)}</text>
                </div>
                <div class="currencyList">
                <text class="currencyContentText colorDark">CHF</text>
                    <text class="currencyContentText">{CalcBuy(data.CHF)}</text>
                    <text class="currencyContentText">{data.CHF}</text>
                    <text class="currencyContentText">{CalcSell(data.CHF)}</text>
                </div>
                <div class="currencyList">
                <text class="currencyContentText colorDark">GBP</text>
                    <text class="currencyContentText">{CalcBuy(data.GBP)}</text>
                    <text class="currencyContentText">{data.GBP}</text>
                    <text class="currencyContentText">{CalcSell(data.GBP)}</text>
                </div>
                <br />
                <div><p class="currencyContentText">Rates are based from 1 USD</p></div>
                <div><p class="currencyContentText">The application uses API from https://currencyfreaks.com</p></div>
        </div>
         )}
    </div>
    )
}

export default CurrencyScreen;