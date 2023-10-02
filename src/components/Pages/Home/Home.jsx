import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { Link } from "react-scroll";
import {Helmet} from "react-helmet";
import './Home.css'
import admin from './media/admin'
const Home = () => {
  return (
    
    <div className='body'>
           <Helmet>
                <meta charSet="utf-8" />
                <title>{admin.helmet_title}</title>
                <link rel="icon" type='image/png' href={admin.helmet_img} />
            </Helmet>

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
       <section className='section2' id='first'>
       
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
        
       </section>
       <section className='section3' id='xidmetlerimiz'>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>{admin.section3_top_title}</p>
         </div>
         <h1 className='section3_h1'>{admin.section3_bottom_title}</h1>
         <p className='section3_p'>{admin.section3_paragraph}</p>

 <Carousel className='carousel2'
         
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
       centerMode={true}
       selectedItem={1}

       centerSlidePercentage={50}
        
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
          {
            //news1
          }
          <div className='news_card' >
          <img src={admin.section6_news_card1_img}/>
          
           
          </div>

          {
            //news2
          }
          <div className='news_card' >
          <img src={admin.section6_news_card2_img}/>
           
          </div>

          {
            //news3
          }
          <div className='news_card' >
          <img src={admin.section6_news_card3_img}/>
          
          </div>

           
          {
            //news4
          }
          <div className='news_card' >
          <img src={admin.section6_news_card4_img}/>
         
          </div> 


         {
            //news5
          } 
          <div className='news_card' >
          <img src={admin.section6_news_card5_img}/>
          
          </div> 

     {/*    
            {
            //news6
          }

          <div className='news_card' >
          <img src={admin.section6_news_card6_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card6_paragraph}</p>
           </div>
          </div> 

          
      
         {
            //news7
          }
          <div className='news_card' >
          <img src={admin.section6_news_card7_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card7_paragraph}</p>
           </div>
          </div> */}


{/* 
           {
            //news8
          }

          <div className='news_card' >
          <img src={admin.section6_news_card8_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card8_paragraph}</p>
           </div>
          </div>
  */}
 
{/*       
            {
            //news9
          }
          <div className='news_card' >
          <img src={admin.section6_news_card9_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card9_paragraph}</p>
           </div>
          </div> */}

          
{/*           
             {
            //news10
          }
          <div className='news_card' >
          <img src={admin.section6_news_card10_img}/>
           <div className='news_paragraph'>
            
            <p>{admin.section6_news_card10_paragraph}</p>
           </div>
          </div> */}

          
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

 <Carousel className='carousel3 pc'
        
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
        swipeScrollTolerance={50}
        showIndicators={false}
       centerMode={true}
       centerSlidePercentage={30}
       selectedItem={0}
        
        >
          {//member1
          }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img id='sulman_hoca' src={admin.section7_member1_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member1_name}</h3>
            <p>{admin.section7_member1_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member1_about}</p>
         </div>

         {//member2
         }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section7_member2_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member2_name}</h3>
            <p>{admin.section7_member2_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member2_about}</p>
         </div>
        
        {//member3
        }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img src={admin.section7_member3_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member3_name}</h3>
            <p>{admin.section7_member3_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member3_about}</p>
         </div>
          

        {//member4
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member4_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member4_name}</h3>
           <p>{admin.section7_member4_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member4_about}</p>
        </div>

   {/*  {//member5
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member5_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member5_name}</h3>
           <p>{admin.section7_member5_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member5_about}</p>
        </div>

           {//member6
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member6_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member6_name}</h3>
           <p>{admin.section7_member6_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member6_about}</p>
        </div>

           {//member7
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member7_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member7_name}</h3>
           <p>{admin.section7_member7_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member7_about}</p>
        </div>

           {//member8
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member8_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member8_name}</h3>
           <p>{admin.section7_member8_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member8_about}</p>
        </div>

           {//member9
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member9_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member9_name}</h3>
           <p>{admin.section7_member9_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member9_about}</p>
        </div>

            {//member10
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img src={admin.section7_member10_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member10_name}</h3>
           <p>{admin.section7_member10_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member10_about}</p>
        </div>
*/}
        </Carousel>
        <Carousel className='carousel3 mobile'
        
        
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
        swipeScrollTolerance={50}
        showIndicators={false}
       centerMode={true}
       centerSlidePercentage={70}
       selectedItem={0}
        
        >
          {//member1
          }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img id='sulman_hoca' src={admin.section7_member1_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member1_name}</h3>
            <p>{admin.section7_member1_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member1_about}</p>
         </div>

         {//member2
         }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img id='sulman_hoca' src={admin.section7_member2_img}/>
          <div  className='testimonal_card_user_texts'>
            <h3>{admin.section7_member2_name}</h3>
            <p>{admin.section7_member2_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member2_about}</p>
         </div>
        
        {//member3
        }
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img id='sulman_hoca' src={admin.section7_member3_img}/>
          <div className='testimonal_card_user_texts'>
            <h3>{admin.section7_member3_name}</h3>
            <p>{admin.section7_member3_profession}</p>
          </div>
      
         </div>
         <p id='command_comment'>{admin.section7_member3_about}</p>
         </div>
          
          
             {//member4
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member4_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member4_name}</h3>
           <p>{admin.section7_member4_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member4_about}</p>
        </div>

          {/*  {//member5
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member5_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member5_name}</h3>
           <p>{admin.section7_member5_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member5_about}</p>
        </div>

           {//member6
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member6_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member6_name}</h3>
           <p>{admin.section7_member6_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member6_about}</p>
        </div>

           {//member7
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member7_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member7_name}</h3>
           <p>{admin.section7_member7_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member7_about}</p>
        </div>

           {//member8
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member8_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member8_name}</h3>
           <p>{admin.section7_member8_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member8_about}</p>
        </div>

           {//member9
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member9_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member9_name}</h3>
           <p>{admin.section7_member9_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member9_about}</p>
        </div>

            {//member10
        }
        <div className='command_card'>
        <div className='testimonal_card_user'>
         <img id='sulman_hoca' src={admin.section7_member10_img}/>
         <div className='testimonal_card_user_texts'>
           <h3>{admin.section7_member10_name}</h3>
           <p>{admin.section7_member10_profession}</p>
         </div>
     
        </div>
        <p id='command_comment'>{admin.section7_member10_about}</p>
        </div>
          */}

        </Carousel>
       </section> 
       <div id='end'></div>
    </div>
  )
}

export default Home
