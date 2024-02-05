
import '@particle-network/connect-react-ui/dist/index.css';
import { ConnectButton } from '@particle-network/connect-react-ui';
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { useRouter } from 'next/router';
  
const Home: NextPage = () => {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.column}>
            <ConnectButton.Custom>
              {({ account, chain, openAccountModal, openConnectModal, openChainModal, accountLoading }) => {
                return (
                  <div>
                    <button onClick={openConnectModal} disabled={!!account}>
                      Open Connect
                    </button>
                    <br />
                    <br />
                    <button onClick={openAccountModal} disabled={!account}>
                      Open Account
                    </button>
                    <br />
                    <br />  
                    <button onClick={openChainModal} disabled={!account}>
                      Open Switch Network
                    </button>
                    <br />
                    <br /> 
                    <button onClick={() => router.push(`/landing?address=${account}`)} disabled={!account}>
                      Explore Wallet
                    </button>
                    <div>
                      <h3>account</h3>
                      <p>{account}</p>
                    </div>
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
        </div>
        <div className={styles.grid}></div>
      </div>
    </main>
  );
};

export default Home;