import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { Link } from "react-scroll";
import './Home.css'
import admin from './media/admin'
const Home = () => {
  return (
    <div className='body'>
       <section className='section1' >
       
      
         
          <div className='section1_div'>
          <ul>
            <li><a href={admin.section1_face_link}><img src='https://img001.prntscr.com/file/img001/bu3LOMwUSEWVcCIOuIV6Cw.png'/></a></li>
            <li><a href={admin.section1_insta_link}><img src='https://img001.prntscr.com/file/img001/gN1EEhGdSMe4tG-Z_AWLRg.png'/></a></li>
            <li><a href={admin.section1_linkedin_link}><img src='https://img001.prntscr.com/file/img001/4v00tewoSMaJCul6kx1E1g.png'/></a></li>
          </ul>
          <div className='section1_div_text'>
            <h1>{admin.section1_title}</h1>
           <p id='elaqe' >{admin.section1_paragraph}</p>
           <a href={admin.section1_contact_button_link}><button  className='section1_button'>Bizimlə Əlaqə</button></a>
          
          </div>
        </div>
       </section>
       <section className='section2' >
        <Carousel className='carousel'
         autoPlay
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
       
       
        
        >
         <div className='carousel_card' >
         <ul>
          <li className='carousel_card_icon'><img src={admin.carousel_card1_img}></img></li>
          <li className='carousel_card_title' >{admin.carousel_card1_title}</li>
          <li className='carousel_card_p'>{admin.carousel_card1_paragraph}</li>
         </ul>
         </div>
         <div className='carousel_card'>
         <ul>
          <li className='carousel_card_icon'><img src={admin.carousel_card2_img}></img></li>
          <li className='carousel_card_title'>{admin.carousel_card2_title}</li>
          <li className='carousel_card_p'>{admin.carousel_card2_paragraph}</li>
         </ul>
         </div>
         <div className='carousel_card'>
         <ul>
          <li className='carousel_card_icon'><img src={admin.carousel_card3_img}></img></li>
          <li className='carousel_card_title'>{admin.carousel_card3_title}</li>
          <li className='carousel_card_p'>{admin.carousel_card3_paragraph}</li>
         </ul>
         </div>
        </Carousel>
       </section>
       <section className='section3' id='xidmetlerimiz'>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section3_top_title}</p>
         </div>
         <h1>{admin.section3_bottom_title}</h1>
         <p className='section3_p'>{admin.section3_paragraph}</p>

 <Carousel className='carousel2'
         autoPlay
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
       centerMode={true}
       centerSlidePercentage={80}
        
        >
         <div><img src={admin.section3_carousel_card1_img}/></div>
         <div><img src={admin.section3_carousel_card2_img}/></div>
         <div><img src={admin.section3_carousel_card3_img}/></div>
        </Carousel>
       </section>
       <section className='section4' id='layihelendirme'>
       <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section4_top_title}</p>
         </div>
         <h1 >{admin.section4_bottom_title}</h1>
         <p className='section3_p'>{admin.section4_paragraph}</p>
         <div className='section4_gallery'>
        
        <div className='elipse1'><div className='elipse2'><div className='elipse3'><div className='elipse4'><div className='elipse5'><div className='elipse6'></div></div></div></div></div></div>
         <div className='image_container'>
          <img src={admin.section4_gallery_img1}/>
          <img src={admin.section4_gallery_img2}/>
          <img src={admin.section4_gallery_img3}/>
          <img src={admin.section4_gallery_img4}/>
          <img src={admin.section4_gallery_img5}/> 
          <img src={admin.section4_gallery_img6}/>
          <img src={admin.section4_gallery_img7}/>
          <img src={admin.section4_gallery_img8}/>
          <img src={admin.section4_gallery_img9}/>
          <img src={admin.section4_gallery_img10}/>
          </div>
         </div>
       </section>
       <section className='section3' id='emekdaslar'>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section5_top_title}</p>
         </div>
         <h1>{admin.section5_bottom_title}</h1>
         <p className='section3_p'>{admin.section5_paragraph}</p>

 <Carousel className='carousel3'
         autoPlay
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
        showIndicators={false}
       centerMode={true}
       centerSlidePercentage={50}
        
        >
          {/*section5_carousel_card1*/}
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card1_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card1_name}</h3>
            <p>{admin.section5_carousel_card1_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card1_comment}</p>
         </div>

         {/*section5_carousel_card2*/}
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card2_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card2_name}</h3>
            <p>{admin.section5_carousel_card2_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card2_comment}</p>
         </div>

          {/*section5_carousel_card3*/}
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card3_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card3_name}</h3>
            <p>{admin.section5_carousel_card3_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card3_comment}</p>
         </div>
            
{/* 
          {//section5_carousel_card4
            }
          
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card4_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card4_name}</h3>
            <p>{admin.section5_carousel_card4_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card4_comment}</p>
         </div>

            */}

{/* 
          {//section5_carousel_card5
          }
          
          <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card5_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card5_name}</h3>
            <p>{admin.section5_carousel_card5_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card5_comment}</p>
         </div> */}

{/* 
          {//section5_carousel_card6
          }
          
          <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card6_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card6_name}</h3>
            <p>{admin.section5_carousel_card6_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card6_comment}</p>
         </div>
          */}

{/* 
        {//section5_carousel_card7
        }
          
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card7_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card7_name}</h3>
            <p>{admin.section5_carousel_card7_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card7_comment}</p>
         </div>
 */}

{/* 
         {//section5_carousel_card8
         }
          
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card8_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card8_name}</h3>
            <p>{admin.section5_carousel_card8_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card8_comment}</p>
         </div>
          */}


{/* 
                {//section5_carousel_card9
                }
          
                <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card9_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card9_name}</h3>
            <p>{admin.section5_carousel_card9_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card9_comment}</p>
         </div>
         */}

{/* 
            {//section5_carousel_card10
            }
          
            <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section5_carousel_card10_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section5_carousel_card10_name}</h3>
            <p>{admin.section5_carousel_card10_profession}</p>
          </div>
         </div>
         <p>{admin.section5_carousel_card10_comment}</p>
         </div>
 */}

        </Carousel>
        
       </section> 
       <section className='section4' id='xeberler'>
       <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section6_top_title}</p>
         </div>
         <h1>{admin.section6_bottom_title}</h1>
         <p className='section3_p'>{admin.section6_paragraph}</p>
        <a href={admin.section6_see_more_button}> <button className='news_button'>Daha çox..</button></a>
         <div className='section4_gallery'>
        <div className='elipse1'><div className='elipse2'><div className='elipse3'><div className='elipse4'><div className='elipse5'><div className='elipse6'></div></div></div></div></div></div>
   <div className='news_container'>
          <div className='news_card' >
          <img src={admin.section6_news_card1_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card1_paragraph}</p>
           </div>
          </div>
         

         


         
          </div>
         </div>
       </section>
       <section className='section3' id='komandamiz'>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section7_top_title}</p>
         </div>
         <h1>{admin.section7_bottom_title}</h1>
         <p className='section3_p'>{admin.section7_paragraph}</p>

 <Carousel className='carousel3'
         autoPlay
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
        showIndicators={false}
       centerMode={true}
       centerSlidePercentage={50}
        
        >
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section7_member1_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member1_name}</h3>
            <p>{admin.section7_member1_profession}</p>
          </div>
      
         </div>
         <p>{admin.section7_member1_about}</p>
         </div>
         
        </Carousel>
       </section> 
    </div>
  )
}

export default Home
