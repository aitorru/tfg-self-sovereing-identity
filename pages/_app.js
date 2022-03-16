import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import React from 'react';
import { AppContextProvider } from '../context';

export const UserContext = React.createContext();


function MyApp({ Component, pageProps }) {
	function getLibrary(provider) {
		const library = new Web3(provider);
		return library;
	}
	return <React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary} libraryName={'web3.js'}>
			<AppContextProvider>
				<Component {...pageProps} />
			</AppContextProvider>
		</Web3ReactProvider>
	</React.StrictMode>;
}

export default MyApp;
