import React, { useState,useRef } from 'react';
import html2canvas from 'html2canvas';


const Happiness = () => {
  const [title, setTitle] = useState('Happiness Program');
  const [subtitle, setSubtitle] = useState('Learn powerful scientific breathing technique  SKY');
  const [link, setLink] = useState('tiny.cc/link');
  const [date, setDate] = useState('29 May 2024');
  const [time, setTime] = useState('7AM- 10AM');
  const [contact, setContact] = useState('9810553757');
  const [venue, setVenue] = useState('Bangalore Ashram');

 



  const downloadPoster = async () => {
    const poster = document.getElementById('poster');
    if (poster) {
      try { 
        const canvas = await html2canvas(poster);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg');
        link.download = 'design.jpg';
        link.click();
      } catch (error) {
        console.error('Error generating canvas: ', error);
      }
    } else {
      console.error('Poster element not found');
    }
  };

  



  return (
    <div className='container'>
      
      <div id="poster" className='firstdiv' style={{ width: '500px', height: '419px', border: '1px solid #000', padding: '20px' }}>
        <h1 id='course-title'>{title}</h1>
        <h5 id='subtitle'>{subtitle}</h5>
        <h5 id='link'>{link}</h5>
        <h5 id='date'>{date}</h5>
        <h5 id='time'>{time}</h5>
        <h5 id='contact'>{contact}</h5>
        <h5 id='venue'>{venue}</h5>
       

      </div>
      

  
    
      

      <div className="form-container">
      <h1>Enter Your Details Here</h1>
        <form>
            <label>Enter your name Title:
                <input
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>Enter your name Subtitle:
                <input
                    type="text" 
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                />
            </label>
            <label>Enter your link:
                <input
                    type="text" 
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </label>
            <label>Date:
                <input
                    type="text" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>Date:
                <input
                    type="text" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <label>Contact:
                <input
                    type="text" 
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </label>
            <label>Venue:
                <input
                    type="text" 
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                />
            </label>
        

        </form>
        <button  id="button" onClick={downloadPoster}>Download Poster</button>
    </div>
  
     



      </div>



  
  );
};


export default Happiness;