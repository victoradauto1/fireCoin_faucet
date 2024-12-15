import Web3 from "web3";
import axios from "axios";

export async function mint(){
    const nextMint = localStorage.getItem("nextMint");
    if(nextMint && parseInt(nextMint) > Date.now())
        throw new Error("You can´t receive tokens twice in a day. Try again tomorrow.")
    if(!window.ethereum)  throw new Error("There is no MetaMask installed.")
    
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    if(!accounts || !accounts.length)  throw new Error("There no account allowed.");

    localStorage.setItem("wallet", accounts[0]);
    localStorage.setItem("nextMint", `${Date.now() + 1000*60*60*24 }`)
    
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/wallet/${accounts[0]}`);
   
    return response.data;
}