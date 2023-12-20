import { useContext, useState } from 'react';
import Pictures from '../Pictures/logo.png';
import './Header.css'
import { useTranslation } from 'react-i18next';
import { TextLang } from '../../context/TextLang';
export default function Header() {
    let text=useContext(TextLang)
  const {t}=useTranslation();
  return (
    <div className='header'>
        <div className='header-logo'> 
            <img src={Pictures} alt="img"/>
            <h4>Kreed</h4>
        </div>

       <div className='header-group'>
       <div className='header-nav'>
            <ul>
                <li><a href="#">{t('Home',{lng:text.language})}</a></li>
            </ul>
            <ul>
                <li><a href="#">{t('About',{lng:text.language})}</a></li>
            </ul>
            <ul>
                <li><a href="#">{t('HowIt',{lng:text.language})}</a></li>
            </ul>
            <ul>
                <li><a href="#">{t('Contact',{lng:text.language})}</a></li>
            </ul>
        </div>

        <div className='login'>
            <a href="#">
                login
            </a>
        </div>
       </div>
    </div>
  )
}
