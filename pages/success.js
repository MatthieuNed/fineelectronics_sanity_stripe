import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Merci beaucoup pour votre achat !</h2>
        <p className="email-msg">Vérifiez votre adresse mail pour la facture</p>
        <p className="description">
          Si vous avez la moindre question, veuillez nous contactez à l'adresse suivante
          <a className="email" href="mailto:fineelectronics@example.com">
            fineelectronics@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuer vos achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success