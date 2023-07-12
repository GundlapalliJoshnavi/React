import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import './Website.css';
import track from './track.png';
import acc from './acc.png';
import dribbble from './dribbble.jpg';
import Icon from './Icon.png';
import wish from './wish.png';
import order from './order.png';
import vr from './vr.png';
import samsung from './samsung.png';
const Website=()=>{
    return(<>
      
        <div className="head">
            <div className="h-one">
                <img  className='dribbble' src={dribbble}/>
            </div>
            <div className='h-two'>
                <h5>E-commerce - Transition to a product page</h5>
                <p>by <a className='a'>Den Klenkov 🇺🇦 </a></p>
            </div>
        </div>{/*head*/}
        <div className='body'>
            <div className='card'>
              <div className='menu1'>
               <ul> 
                 <li><button>CALLBACK</button></li>
                 <li style={{paddingLeft:"40px"}}>Find Store</li>
                 <li style={{paddingLeft:"40px"}}>Help Center</li>
                 <li style={{paddingLeft:"40px"}}>Live Chat</li>
                 <li style={{paddingLeft:"470px"}}><img className='track' src={track}></img>Track Order</li>
                 <li style={{paddingLeft:"40px"}}><img className='wish' src={wish}></img>Wishlist</li>
                 <li style={{paddingLeft:"40px"}}><img className='acc' src={acc}></img>Account</li>
               </ul>
             </div>{/*menu1*/}
             <div className='menu2'>
                <ul>
                    <li><img src={Icon}></img></li>
                    <li style={{paddingLeft:"70px"}}>PRODUCTS</li>
                    <li style={{paddingLeft:"70px"}}>BRANDS</li>
                    <li style={{paddingLeft:"70px"}}>DEALS</li>
                    <li style={{paddingLeft:"70px"}}>GIFTS</li>
                    <li style={{color:'#fd0c88',paddingLeft:'70px'}}>SALE</li>
                    <li style={{paddingLeft:"70px"}}><input type="search" style={{width:"300px"}}></input></li>
                    <li style={{paddingLeft:"70px"}}><img src={order}></img></li>
                </ul>

             </div>{/*menu2*/}
             </div>{/*card*/}
             <div className='contai'>
                <div className='sub-con1'><ul>
                       <li>Home</li>&nbsp;&nbsp;&nbsp;
                       <li>Gadgets</li>&nbsp;&nbsp;&nbsp;
                       <li>VR Headsets</li>
                     </ul>
                </div>{/*sub-con1*/}
                <div className='sub-cons'>
                <div className='sub-containerone'>
                  <div className='card-con'>
                     <h5>Gadgets</h5>
                     <div className='data'>
                     <div className='data1'>
                      <ol><li>breathalyzers</li>
                          <li>calcuators</li>
                          <li>translators</li>
                          <li>digital clock</li>
                          <li>smart classes</li>
                          <li>metal detectors</li>
                          <li>survellian gadgets</li>
                          <li>voice recorders</li>
                          <li>laser painters</li>
                          <li>vr headsets</li>
                      </ol>
                    </div>{/*data1*/}
                   <div className='data2'>
                     <ol>
                        <li>17</li>
                        <li>11</li>
                        <li>20</li>
                        <li>14</li>
                        <li>27</li>
                        <li>22</li>
                        <li>15</li>
                        <li>10</li>
                        <li>16</li>
                        <li>9</li>
                     </ol>
                   </div>{/*data2*/}
                </div>{/*data*/}
                </div>{/*card-con*/}
            <h5>BRAND</h5>
            <div className='check-head'>
             <div className="check">
                
                <input type="checkbox"/>&nbsp;&nbsp;
                <label> Oculus</label><br/>
                <input type="checkbox"/>&nbsp;&nbsp;
                <label>HTC</label><br/>
                <input type="checkbox"/>&nbsp;&nbsp;
                <label>Samsung</label><br/>
                <input type="checkbox"/>&nbsp;&nbsp;
                <label>Google</label><br/>
                <input type="checkbox"/>&nbsp;&nbsp;
                <label>Sony</label><br/>
             </div>{/*check*/}
             
             <div className="check-num">
                  <ol>
                        <li>3</li>
                        <li>2</li>
                        <li>1</li>
                        <li>5</li>
                        <li>2</li>
                 </ol>
              </div>{/*check-num*/}
              <h5>FEATURES</h5>
              </div>{/*check-head*/}
              </div>{/*sub-containerone*/}
              
              <div className='sub-containertwo'>
                <h3>VR headsets  (14)</h3>
                <div className='headerList'>
                  <ul>
                    <li style={{paddingLeft:"80px"}}>POPULAR FIRST</li>
                    <li style={{paddingLeft:"80px"}}>NEWEST FIRST</li>
                    <li style={{paddingLeft:"80px"}}>CHIEPEST FIRST</li>
                    <li style={{paddingLeft:"80px"}}>DISCOUNT FIRST</li>
                  </ul>
                </div>{/*headerList*/}
                <div className='bodylist'>
                  <div className='lineone'>
                   <img src={vr}></img>
                   <img src={samsung}></img>
                   <img src={vr}></img>
                   <img src={samsung}></img>
                   </div>{/*lineone*/}
                   <div className='linetwo'>
                   <img src={vr}></img>
                   <img src={samsung}></img>
                   <img src={vr}></img>
                   <img src={samsung}></img>
                   </div>{/*linetwo*/}
                </div>{/*bodylist*/}
              </div>{/*sub-containertwo*/}
              </div>{/*sub-cons*/}
             </div>{/*contai*/}
            
        </div>{/*body*/}
      
    </>)
}
export default Website;