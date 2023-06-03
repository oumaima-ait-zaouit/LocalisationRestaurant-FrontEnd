import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"

export default function Footer() {
    return (
        <div className="footer-dark" style={{marginTop:"50px",}}>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 item text">
                            <h3> </h3>
                            <p></p>
                            <p></p>
                        </div>

                        <div className="col-sm-6 col-md-3 item">
                            <h3></h3>
                            <ul>
                                
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Contact</h3>
                            <ul>
                                <li><h6 >contact@restaurantlocationapp.com</h6></li>
                                <li><h6 >+212 808974592</h6></li>
                                
                                <li><h6 >15 Rouidat Marrakech Maroc</h6></li>
                            </ul>
                        </div>
                                      
               
                       
                        </div> 
                    
                    
                        
                    </div>
            </footer>
        </div>
    );
}
