import { useTranslation } from 'react-i18next';
import Pictures from '../Pictures/pumpkin.png'
import './Hero.css'
import { CgPlayButtonO } from "react-icons/cg";
import { useContext } from 'react';
import { TextLang } from '../../context/TextLang';
export default function Hero() {
    const{t}=useTranslation();
    const text=useContext(TextLang)
  return (
    <div className='hero-box' >
        <div className='hero-info'>
            <h1>{t('title',{lng:text.language})}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <button>{t('watch',{lng:text.language})}<CgPlayButtonO  className='play-button'/>`</button>
        </div>
        <div className="hero-img">
            <img src={Pictures} alt="pumokins" />
        </div>
    </div>
  )
}
