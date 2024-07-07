import React from 'react'
import './App.css'
import logo from '../assets/images/logo.svg'

const App = () => {
  return (
    <>
      
    <div class="toppart">
      <img src={logo} alt="img"/>

      <p>Features   Team    Sign-In</p>
    </div>
    <div class="descp1">
      <h1>All your files in one secure 
      {'\n'}   
          location, accessible anywhere.</h1>
      <img src="src\images\illustration-1.svg" alt="illu1"/>

      <h4>
        Fylo stores your most important files in one secure location.
      {'\n'} 
        Access them wherever you need, share and collaborate with friends, 
        family, 
      {'\n'} 
        and co-workers.
      </h4>
      <form action="process.php" method="post">
        
        <input  type="email" name="gmail"/>
        <label>Get Started</label>
        
      </form>
    </div>
    <div class="descp2">
      <img src="src\images\illustration-2.svg" alt="illu2"/>
      <h1>Stay productive, wherever you are</h1>

      <h4>Never let location be an issue when accessing your files. Fylo has you
      {'\n'} 
      covered for all of your file storage needs.</h4>
      

      <h4>Securely share files and folders with friends, family and colleagues for
      {'\n'} 
      live collaboration. No email attachments required!</h4>

      <a href="url">See how Fylo works </a>
    </div> 
    <img src="src\images\icon-arrow.svg" alt="arrow" class="arrow"/>
    
      
    <div class="quotes">
      <img src="src\images\icon-quotes.svg" alt="quotes" class="quote"/>

      <h4>Fylo has improved our team productivity by
      {'\n'} 
          an order of magnitude. Since making the 
      {'\n'}    
          switch our team has become a well-oiled
      {'\n'} 
          
          collaboration machine.</h4>
      <span class="bolded">Kyle Burton</span>
      <h5>Founder & CEO, Huddle</h5>
        
      <img src="src\images\avatar-testimonial.jpg" alt="CEO" class="ceopic"/>  
        
        
        
    </div>
    
    <div class="end1">
      <h2>Get early access today</h2>

      <h5>
        It only takes a minute to sign up and our free starter tier is {'\n'} extremely generous. 
        If you have any questions, our support team {'\n'} would be happy to help you.
      </h5>
      <form action="process.php" method="post">
        
        <input type="email" name="gmail"/>
        {'\n'}
        <label>Get Started For Free</label>
        
      </form>
      
    </div>

    <div class="end2">
      <img src="src\images\logo2-Photoroom.png" alt="logo" class="logo"/>
      <h5>
        <div class="firstcol">
          <img src="src\images\icon-phone.svg" alt="phone" class="phone"/>
          
          Phone: +1-543-123-4567
          {'\n'}
          <img src="src\images\icon-email.svg" alt="mail" class="mail"/>
          example@fylo.com
          {'\n'}
        </div>
        <div class="secondcol">
          About Us
          {'\n'}
          Jobs
          {'\n'}
          Press
          {'\n'}
          Blog
          
        </div>
        <div class="thirdcol">
          Contact Us
          {'\n'}
          Terms
          {'\n'}
          Privacy
        </div>
      
      </h5>
      
    </div>
    </>
   
  )
}

export default App
zzz