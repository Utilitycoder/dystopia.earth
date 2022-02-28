import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import { Nav,  Navbar, Container, Button } from 'react-bootstrap';
import Spacer from './components/Spacer';
import SpacerLg from './components/SpacerLg';
import FAQ from './components/FAQ';
import BTS from './components/BTS';
import Creators from './components/Creators';
import Footer from './components/Footer';


const App = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xe4FA1e27e30c736C98c29BC9D8C7C0ed1c9F8173",
    SCAN_LINK: "https://rinkeby.etherscan.io/address/0xe4FA1e27e30c736C98c29BC9D8C7C0ed1c9F8173",
    NETWORK: {
      NAME: "Rinkeby",
      SYMBOL: "ETH",
      ID: 4,
    },
    NFT_NAME: "Dystopia.Earth TEST Ch. 1",
    SYMBOL: "DET",
    MAX_SUPPLY: 15,
    BATCHSIZE: 9,
    WEI_COST: 1000000000000000,
    DISPLAY_COST: 0.01,
    // GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://testnets.opensea.io/collection/det-test-ch-1",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    // let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    // console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);

    

    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        // gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Transaction failed. Please try again with higher gas or wait for later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Congratulations, the ${CONFIG.NFT_NAME} now belongs to you! Check it out on Opensea!`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 3) {
      newMintAmount = 3;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (


<div className="bg-dark">
<Navbar id='Home' className="mt-2 mx-4" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand className="" href="#home">Dystopia.Earth</Navbar.Brand>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-4">
      <Nav.Link href="https://twitter.com/DystopiaEarth_" target='_blank' className="text-white head-link">Twitter</Nav.Link>
      <Nav.Link href="#Discord" target='_blank' className="text-white head-link" >Discord</Nav.Link>
      <Nav.Link href="https://medium.com/@Dystopia.Earth/about" target='_blank' className="text-white head-link" >Medium</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Spacer />


  
  <div className="mintBox container mx-auto mt-5 text-center text-white">
          <div className="row justify-content-center">
            {Number(data.totalSupply) >= CONFIG.BATCHSIZE ? (
              <>
              <h1 className="mintTitle pt-4 text-primary">Chapter 1 has sold out for this batch.</h1>
              <h2 className="text-primary">See the NFTs here on:<a className="text-white mx-2" href={CONFIG.MARKETPLACE_LINK}>{CONFIG.MARKETPLACE}</a></h2>
              </>
            ) : (
              <>
              <h1 className="mintTitle pt-4 text-primary">Mint NFT</h1>
              <h3 className="text-primary">( Max 3 per whitelist for each batch )</h3>
              <h3 className="text-primary">{data.totalSupply} / {CONFIG.BATCHSIZE}</h3>
              {blockchain.account === "" || blockchain.smartContract === null ? (
                <div className="">
                  <button onClick={(e) => { e.preventDefault(); dispatch(connect()); getData(); }} className="w-100 col btn btn-primary btnConnect mt-3">CONNECT</button>
                  {blockchain.errorMsg !== "" ? (
                    <>
                    <div className="row mt-3 justify-content-center">
                     <a className="text-primary">{blockchain.errorMsg}</a>
                    </div>
                    </>
                  ) : null}
                </div>
              ) : (
                <>
            <div className="row border-bottom justify-content-around align-items-center py-2 my-4">

              <div className="col">
                <button className="px-3 btn btn-primary" disabled={claimingNft ? 1: 0} onClick={(e) => {e.preventDefault(); incrementMintAmount(); }}>+</button>
              </div>
              

              <div className="col">
                <a className="text-primary px-2">{mintAmount} </a>
              </div>


              <div className="col">
                <button className="px-3 btn btn-primary" disabled={claimingNft ? 1: 0} onClick={(e) => {e.preventDefault(); decrementMintAmount(); }}>-</button>
              </div>

            </div>
          
            <div className="row border-bottom justify-content-around align-items-center py-2 my-4">
              <div className="col"><a className="text-primary">Total</a></div>
              <div className="col"><a className="text-primary d-block"> {CONFIG.DISPLAY_COST * mintAmount }</a></div>
              <div className="col"><a className="text-primary d-block"> {CONFIG.NETWORK.SYMBOL}</a></div>
            </div>
            <div className="row-justify-content-around"><h4>(Not including gas)</h4></div>

            <div className="row justify-content-center border-bottom py-2 my-4">
              <div className="col-12 my-2">
                <button id="connect-button" className="w-100 col btn btn-primary btnConnect mt-3" onClick={(e) => { e.preventDefault(); getData(); claimNFTs(); }}> {claimingNft ? "BUSY" : "MINT"} </button>
              </div>
            </div>
                </>
              )}
              </>
            )}       
          </div>
</div>




<SpacerLg />

{/* FAQ */}
<FAQ />
<Spacer />

{/* BTS */}
<BTS />
<Spacer />

{/* CREATORS */}
<Creators />
<Spacer />

{/* FOOTER */}
<Footer />

{/* DIV DIVIDER BELOW DO NOT TOUCH */}          
</div>

  );
}



export default App;


