import { createContext, useState } from "react";

const { Zilliqa } = require('@zilliqa-js/zilliqa');
const { BN, Long, units } = require('@zilliqa-js/util');

const {
  StatusType,
  MessageType,
} = require('@zilliqa-js/subscriptions');

const { Provider, Consumer } = createContext();

// to do: catch wallet is not created errors


export function ZilPayContextProvider(props) {
    // get current account in ZilPay
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);

    const logout = () => setIsLoggedIn(false);

    const getCurrentAccount = () => {
        window.zilPay.wallet.connect()
            .then(function (accounts) {
                login();
                console.log(window.zilPay.wallet.net);
                console.log(window.zilPay.wallet.defaultAccount);

                // subscribe to network changes
                window.zilPay.wallet.observableNetwork().subscribe(
                function (network) {
                    console.log("Network has been changed to " + network);
                });

                // subscribe to user account changes
                window.zilPay.wallet.observableAccount().subscribe(
                function (account) {
                    console.log("Account has been changed to " + 
                        account.base16 + " (" + account.bech32 + ")");
                    window.zilPay.blockchain.getBalance(account.bech32)
                    .then(function(resp){
                        console.log(resp);
                    })                    
                });
                })
            .catch(function (error) {
                logout();
                console.log("Test");
                console.error(error);
            })
    };

    // check if ZilPay is installed on the current account
    const connectZilPay = () => {
        if (window.zilPay){
          console.log("ZilPay Present");      
          getCurrentAccount();
        } else{
            logout();
            console.log("Cannot Find ZilPay");
        }
    };

    return (
        <Provider 
            value={{
                isLoggedIn: isLoggedIn,
                getCurrentAccount: getCurrentAccount,
                connectZilPay: connectZilPay
            }}>
            {props.children}
        </Provider>
    );
}

export default Consumer;