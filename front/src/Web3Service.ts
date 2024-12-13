import Web3 from "web3";
import axios from "axios";

export async function mint(){
    if(!window.ethereum)  throw new Error("There is no MetaMask installed.")
    
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    if(!accounts || !accounts.length)  throw new Error("There no account allowed.");

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/wallet/${accounts[0]}`);
    return response.data;
}