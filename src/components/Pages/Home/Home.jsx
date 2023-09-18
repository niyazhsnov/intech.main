import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { Link } from "react-scroll";
import './Home.css'
const Home = () => {
  return (
    <div className='body'>
       <section className='section1' >
       
        <div className='section1_div'>
         
          <div className='section1_div'>
          <ul>
            <li><a href='#'><img src='https://img001.prntscr.com/file/img001/bu3LOMwUSEWVcCIOuIV6Cw.png'/></a></li>
            <li><a href='#'><img src='https://img001.prntscr.com/file/img001/gN1EEhGdSMe4tG-Z_AWLRg.png'/></a></li>
            <li><a href='#'><img src='https://img001.prntscr.com/file/img001/4v00tewoSMaJCul6kx1E1g.png'/></a></li>
          </ul>
          <div className='section1_div_text'>
            <h1>TEXNOLOGİYADA <br></br>MİLLİ GÜC</h1>
            <p id='elaqe' >Müasir dünyada texnologiya olmadan uğur qazanmaq çətindir. Biznesinizi inkişaf etdirmək üçün sizə lazım olan texnoloji imkanları təqdim edirik</p>
             <button  className='section1_button'>Bizimlə Əlaqə</button>
          </div>
          </div>
        </div>
       </section>
       <section className='section2'>
        <Carousel className='carousel'
         autoPlay
        useKeyboardArrows={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        emulateTouch={true}
       
       
        
        >
         <div className='carousel_card'>
         <ul>
          <li className='carousel_card_icon'><img src='https://img001.prntscr.com/file/img001/rT6oSzstQsiAE7gvnsX6OA.png'></img></li>
          <li className='carousel_card_title'>Lahiyələndirmə</li>
          <li className='carousel_card_p'>Yaradıcı layihələrin həyata keçirilməsi üçün sizə öz təcrübəmizi təklif edirik. Ehtiyaclarınız üçün fərdiləşdirilmiş layihə dizayn xidmətimizlə biznesinizi gələcəyə daşımağınıza kömək edirik.
Layihənin dizaynı zamanı sizinlə yaxından əlaqə saxlamaqla istəklərinizi də tam başa düşürük. Dəyərli fikirlərinizi dinləməklə, arzularınızı gerçəkləşdirmək üçün əlimizdən gələni edirik. Əməkdaşlığımız müddətində layihənin hər mərhələsində sizinlə aktiv şəkildə əlaqə saxlayır və rəyinizi nəzərə alırıq.</li>
         </ul>
         </div>
         <div className='carousel_card'>
         <ul>
          <li className='carousel_card_icon'><img src='https://img001.prntscr.com/file/img001/n2U1JGzqSkOwwmr9O60CRg.png'></img></li>
          <li className='carousel_card_title'>Xidmət</li>
          <li className='carousel_card_p'>Biz sizin biznesinizi başa düşürük və ehtiyaclarınızı ödəmək üçün fərdiləşdirilmiş həllər təklif edirik.Sizin texnoloji infrastrukturunuzu gücləndiririk, səmərəliliyi artırır və biznesinizi inkişaf etdirməyə imkan veririk. Sənayedə ən son avadanlıq və proqram təminatından istifadə edərək, müştərilərimizə ən yaxşı performans və etibarlılığı təklif edirik.</li>
         </ul>
         </div>
         <div className='carousel_card'>
         <ul>
          <li className='carousel_card_icon'><img src='https://img001.prntscr.com/file/img001/f-MY_JiFSQStCWW4Ri9MtA.png'></img></li>
          <li className='carousel_card_title'>Kurs</li>
          <li className='carousel_card_p'>Texnologiya əsrində bilik və bacarıqlarınızı müasir saxlamaq uğurun açarıdır. Biz texnoloji kurslar təklif etməklə sizi gələcəyin inkişaf edən trendləri ilə bir araya gətiririk. Təkmil təlim proqramlarımızla texnologiya sahəsində özünüzü təkmilləşdirmək fürsətindən istifadə edin.</li>
         </ul>
         </div>
        </Carousel>
       </section>
       <section className='section3' id='xidmetlerimiz'>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>xidmət</p>
         </div>
         <h1>Xidmətlərimiz</h1>
         <p className='section3_p'>There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form,</p>

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
         <div><img src='https://img001.prntscr.com/file/img001/Y2r12rlgQWCAXK2jWfl_wA.png'/></div>
         <div><img src='https://img001.prntscr.com/file/img001/pg-Ax-TtT3iJENZZzPEKSA.png'/></div>
         <div><img src='https://img001.prntscr.com/file/img001/lr_rVUwxTpmPxKpmyK-lHw.png'/></div>
        </Carousel>
       </section>
       <section className='section4'>
       <div className='section3_div1'>
          <div className='title_line'></div>
          <p>layihə</p>
         </div>
         <h1>Layihələndirmə</h1>
         <p className='section3_p'>Layihənin dizaynı zamanı sizinlə yaxından əlaqə saxlamaqla istəklərinizi də tam başa düşürük. Dəyərli fikirlərinizi dinləməklə, arzularınızı gerçəkləşdirmək üçün əlimizdən gələni edirik. Əməkdaşlığımız müddətində layihənin hər mərhələsində sizinlə aktiv şəkildə əlaqə saxlayır və rəyinizi nəzərə alırıq.</p>
         <div className='section4_gallery'>
        
        <div className='elipse1'><div className='elipse2'><div className='elipse3'><div className='elipse4'><div className='elipse5'><div className='elipse6'></div></div></div></div></div></div>
         <div className='image_container'>
          <img src='https://s3-alpha-sig.figma.com/img/9951/061d/1ad2aa20ad1f8a31f342861c2b416d1e?Expires=1696204800&Signature=oEC6uvMAwPe1sqWdKpHVBB2w9RoqbcLUO~iDBRn~WxmN7aXjmR6DsxA3FLNQjdpOZkMIoVYxqPCAbotvfb8b8kCPwBQegJFMca3zwHEaLTCQPS7swuv99gKii9ngOyz~BldAKnokmwKOfYuzCFohUas-p8GYAFsCaQu9aDqbqvApGasl35kxPuyaSXK6zjlg07-TUqEv-PwqNZrylXvlEhtdtbw48acAP24azeXBESnunwx~7g-9ClsGbiQw6Z7do2q832NW7AI~plQw3QrUcxZRiCJU4g61iwdhfyDYUuywvcP3NTzuDLG8dsVjlRwrZirzLr4ScogUV1DnlOD22A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
          <img src='https://s3-alpha-sig.figma.com/img/0fef/2986/cff3755c2d1df07edddf33e08742b30f?Expires=1696204800&Signature=pGvmPY3ovqUa-QQbg5oKk5Mwi5PaC1x3MTCu~lCEptZ9lWsYSiywb9fN5zFue8v~l9OOXpALb5XtfoK10hk890FxK81lESvds7rhgVgHO3pzhoKHHJVFDfMFZacnVu8mfFfF7Q-XgTBOsJ2dnzXvCdQQRg4Xq1LC~pEtPT2Ul3yiBobUuKBC4JG8xdnkUHXEz8OSEYQdElYv6TZa6W-CcCMGghXmtoxmpRo~2sbSV1GpzItM79DsHGnaQUFFnp3DrNGFeO~DDR261VI83ad6w85KRCPHcupwa08RJFWt7GjO9I~OUrD812QBGHX8taIz6CF4GPkWV8ZrXBrvONB7qQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <img src='https://s3-alpha-sig.figma.com/img/7332/c8f5/bf8c63e166d373606d019708c9fa6fb9?Expires=1696204800&Signature=cKt7msUZk4l~ZljDVNSJiUJ31jxZc6Z3IdOHervf9u7XgLk2Uy~DGgQoqTEFce~cnVx-6BRnOwM60bKkw9xaaYafl5AQKI3bMQJpJj1OuZSuosHaeXwD6TBQaPdbA1ny4NRxlhDCrtFGjIIEW5tYfnwBQFU7pNWQXFatyBA~2HupFpznNofL1olzlIWj6ncaAknsiI4PNZuDRfeWgPV1Iq-loD9ZaTv7DC3zszcwUuWWB3GdSWWi1RaDca6xEP0qBw0ZcJYHO3BQmawlgF7~Db1vYQHz2RMkT~hQoGiL1gLqOd-zAJIAEivUUvP0iWNotUZR2RtYrEHwver7y89QkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <img src='https://s3-alpha-sig.figma.com/img/1c85/69ae/8663d87019a474b6d0a0ad765f8d372b?Expires=1696204800&Signature=qPI0EPrNljMcDcDIhGtGpZ8RM7LLCmPt0kN3O7v87F~Lrt312AycaMpHOXHqBbMmgNUfTsXpI8x5pMZZJNO8f9YwZCVunfNqKZsCNtiRPOIric9b3Z17HyrPreiLyPVZqVXqPSvHSkF-evbPlszCXuR--S1QwtM~kOefIG2-IQUrC7833IsXAAoO6wIyPbwqOT-WdOyS7-ewe7~~iLN63nypV1PYPNPsgTSO67XuRPqm6EtLYKlxTi~ybJMYVp1m-4Iun1Gi-TfqTUtMF7Wf72pMioWBWSJM~SJUtvbEWYITrQ6eKt6qpP8qssZ95arKs64G50i36DseYT1yIyHBpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
        <img src='https://s3-alpha-sig.figma.com/img/71be/d9be/b838cf03c952033c6d5ae1a290256707?Expires=1696204800&Signature=Y4bvhWVqDAjcSMcAytSVlmmScabmNorTmImCCSagDLhiipLr~MRyfw00ANdsLpEFgiPEvpfRuv2j-43YIDmm8v3TQIZS24se56-RZq~2QCbebB3PJnZaQi5pb~9T4L7SPtRH5dISYfuNk8uJYKOhScF9KhmavK2Lz6nV3Hw-7jrYbjgm20vEOItWT~-CcdP8wG8-z0AWDG4sx8jp31INctsGlIlbZsiISmkBgmxccvWFGwQ~TkgS0MeabdrOg6UIELaESUbXuLvMuIf9afc7j88bajKRrvmZpLkyTE88MbIHwfIx1bi3V43r6LDeMllIBaCvsxWAT~mXmzGjNB-vGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/> 
          </div>
         </div>
       </section>
       <section className='section3' id=''>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>TESTIMONALS</p>
         </div>
         <h1>Contrary to popular</h1>
         <p className='section3_p'>There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form,</p>

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
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
         <div className='testimonal_card'>
         <div className='testimonal_card_user'>
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
        </Carousel>
       </section> 
       <section className='section4'>
       <div className='section3_div1'>
          <div className='title_line'></div>
          <p>NEWS</p>
         </div>
         <h1>Contrary to popular</h1>
         <p className='section3_p'>There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form,</p>
        <a href='https://www.instagram.com/intech.main/'> <button className='news_button'>See More</button></a>
         <div className='section4_gallery'>
        <div className='elipse1'><div className='elipse2'><div className='elipse3'><div className='elipse4'><div className='elipse5'><div className='elipse6'></div></div></div></div></div></div>
   <div className='news_container'>
          <div className='news_card'>
           <div className='news_paragraph'>
            <p>Azərbaycan Texniki Universitetinin (AzTU) "InTech" komandası festivalın Hackathon kateqotiyasında iştirak edərək 25 komanda arasında 3-cü yerə layiq görülüb. </p>
           </div>
          </div>
          <div className='news_card'>
           <div className='news_paragraph'>
            <p>Azərbaycan Texniki Universitetinin (AzTU) "InTech" komandası festivalın Hackathon kateqotiyasında iştirak edərək 25 komanda arasında 3-cü yerə layiq görülüb. </p>
           </div>
          </div>
          <div className='news_card'>
           <div className='news_paragraph'>
            <p>Azərbaycan Texniki Universitetinin (AzTU) "InTech" komandası festivalın Hackathon kateqotiyasında iştirak edərək 25 komanda arasında 3-cü yerə layiq görülüb. </p>
           </div>
          </div>
          </div>
         </div>
       </section>
       <section className='section3' id=''>
         <div className='section3_div1'>
          <div className='title_line'></div>
          <p>Komandamız</p>
         </div>
         <h1>Komanda üzvləri</h1>
         <p className='section3_p'>There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form,</p>

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
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
         <div className='command_card'>
         <div className='testimonal_card_user'>
          <img src='https://s3-alpha-sig.figma.com/img/731b/356e/c84dd572476f56d06da14a8955a73807?Expires=1696204800&Signature=Do6lJM9IEfl5w7S2lMa0~Oa9xoYr19wqlAK8gA31UQfBDwXJKsqHXIFbI6~oJJpP9~hOI94fX3xHLVG0p0Tb5TZPrIDe7sOLSR9JrYUOhbxcXpCiJiI7ZijNx8ey5xd25j0H5lWiXJczW7Ajj0~~LokTPE0RHfI4i2KJjLN9CVXr6Oefx-IF05BwNw66UZzd730vu2OUo0QvZMpxQDNc2awU-oM2YLiPt-YIxWH0Tr~6N5UIoIDOPhJ7X3Mha7NGk0r7kaGyhdlqtqB3C01rsVhJu~iunFUGEjiTyg4WonKpt8nS4bWtIoDgEbbq6YKlPswRqNMjVUVV33dNLKrWvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
          <div className='testimonal_card_user_texts'>
            <h3>Elizabeth Harmon</h3>
            <p>Designer</p>
          </div>
      
         </div>
         <p>It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of using...</p>
         </div>
        </Carousel>
       </section> 
    </div>
  )
}

export default Home
