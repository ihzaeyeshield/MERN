import React from 'react'
import './Footer.scss'
import Facebook from '../../../assets/icon/facebook.png'
import Instagram from '../../../assets/icon/instagram.png'
import Github from '../../../assets/icon/github.png'


const Footer = () => {
  return (
    <footer>
            <div className='container-register'>
                <div className='container2'>
                    <ul>
                        <li>Footer Content</li>
                        <li><p>Lorem ipsum dsafjdlhjkcxbnzmcbnadkjbjk</p></li>
                    </ul>

                    <ul>
                        <li><a>Link 1</a></li>
                        <li><a>Link 1.1</a></li>
                        <li><a>Link 1.2</a></li>
                        <li><a>Link 1.3</a></li>
                    </ul>

                    <ul>
                        <li><a>Link 2</a></li>
                        <li><a>Link 2.1</a></li>
                        <li><a>Link 2.2</a></li>
                        <li><a>Link 2.3</a></li>
                    </ul>

                    <ul>
                        <li><a>Link 3</a></li>
                        <li><a>Link 3.1</a></li>
                        <li><a>Link 3.2</a></li>
                        <li><a>Link 3.3</a></li>
                    </ul>
                    
                </div>

                <div className='socialmedia'>
                    <h3>My Social Media</h3>
                    <div className='apk'>
                        <ul>
                            <li><img src={Facebook}/></li>
                            <li><img src={Instagram}/></li>
                            <li><img src={Github}/></li>
                        </ul>
                    </div>
                    <h4>Since 1998</h4>
                </div>
            </div>
            
    </footer>
  )
}

export default Footer