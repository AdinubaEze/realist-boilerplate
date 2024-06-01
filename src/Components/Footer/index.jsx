import React from 'react'
import "./Footer.css"
import { contactOptions,footer } from '../../sources'
import { Link } from 'react-scroll'
import Logo from '../../Commons/Logo'
import footerImage from "../../assets/realist-footer.png"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="wrapper">
          <div className="contact-options">
             {
                contactOptions.map((option,index)=>(
                    <div className="flex-center option" data-aos="fade-right" key={index}>
                        <div className="flex-center icon-wrapper">{option.icon}</div>
                        <h4 className="muted title">{option.title}</h4>
                        <h3 className='value'>{option.value}</h3>
                    </div>
                ))
             }
          </div>
      </div>
      <div className="bottom-row">
         <div className="wrapper">
             <div className="column">
                 <Logo/>
                 <div className='footer-image'>
                    <img src={footerImage} alt="" />
                 </div>
             </div>
              {
                footer.map((list,index)=>(
                    <div className="column" key={index}>
                        <h3 className="muted title">{list.title}</h3>
                        {
                            list.routes.map((route,i)=>(
                                <Link to={route.id || ''} smooth={true} className='route' key={i}>
                                    {route.name}
                                </Link>
                            ))
                        }
                    </div>
                ))
              }
         </div>
         <div className="copyright">
          <h4>Copyright &copy; All right reserved -| 2024</h4>
          <p className="muted">Built with love by Emmanuel Eze Adinuba A.K.A Mr. Adinuba</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
