import React from 'react';
import Navbar from '../navbar';
import { Helmet } from 'react-helmet';
import Members from './Members';
const Ourteam = () => {
  return (
    <>
      <div style={{ marginTop: "-4.4%" }} className="min-h-screen z-50 bg-gray-900 flex flex-col">
        <Helmet>
          <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
          />
          <title>FlorAyush</title>
          <link
            rel="icon"
            href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Helmet>

        <Navbar mt="mt-10" /><br />
        

<h1 className=' text-4xl font-bold sticky top-16 z-50 text-black bg-yellow-300 p-2'>
  The faces behind GigaGeeks
</h1>

        {/* pranav */}
        <Members 
        name="Pranav Jha" 
        role="Team Leader"
        desc=" Pranav Jha is the man who lead the Team GigaGeeks towards securing 1st Position in the internal round . His efforts were not only confined till the internal round , this guy kept motivating his entire team towards solving the problem. Pranav alone supervised each and every task related to the project and helped all his teammates with valuable suggestions and development skills." 
        link="https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/419299706_483162181350203_3541269780775076326_n.jpg?ccb=11-4&oh=01_Q5AaIA_rV35KcTGorBtV7JntGJG8o0ceOutAr0hUAASvaxT8&oe=66F25DB6&_nc_sid=5e03e0&_nc_cat=102">
        </Members>
<hr />
        {/* sushil */}
        <Members 
        name="Sushil Upadhayay" 
        role="Metaverse Design & Development"
        desc="The most unique and new task, the development of virtual world and designing of metaverse was alloted to Sushil Upadhayay , the heart of GigaGeeks. In a very short period of time , this guy alone managed to learn using Godot (the game engine that was used to create metaverse) and create a very beautiful and low latency metaverse prototype. All the team members agree that if any task is assigned to Sushil , he completes it with excellence and delivers before the deadline ." 
        link="https://images.unsplash.com/photo-1726261925912-3ed96a275f5f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Members>

<hr />
      {/* aarav */}
        <Members 
        name="Aarav Arora"
        role="Metaverse Integration & management" 
        desc="The hectic task of integrating the metaverse model into the Florayush website was carried out by Aarav Arora. From learning babylon and 3J & then implementing these JS libraries , all the work was done by him with excellence in a very short period of time. He was able to deliver the integrated metaverse in the provided deadline." 
        link="https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/420813900_1666650737493083_3257382301540541688_n.jpg?ccb=11-4&oh=01_Q5AaIKcOXYBukvpPUJ_Wl4EGw3ROWgTwWKmB5VpTU-pajUzo&oe=66F23F5B&_nc_sid=5e03e0&_nc_cat=107">
        </Members>

        <hr />
      {/* sukhbir */}
        <Members 
        name="Sukhbir Singh Sareen " 
        role="Web Development Lead"
        desc=" All the work related to the development of this website , from index page to all other routes was lead and supervised by Sukhbir Singh Sareen . This guy played a huge role in the developement of this website  since he was responsible for the design and development of the whole website. Managing all the challenges along with his supportive teammates , he was able to deliver the assigned task before deadline ." 
        link="https://pps.whatsapp.net/v/t61.24694-24/427219824_2901262356681570_1767139040587135288_n.jpg?ccb=11-4&oh=01_Q5AaIF-z2_Qu52632BMNcCSW5JQqBz8vX_gRvQE5qrOBUsAW&oe=66F18710&_nc_sid=5e03e0&_nc_cat=110"
        git="https://github.com/sukh2507">
        </Members>

<hr />
      {/* prisha */}
        <Members 
        name="Prisha Arora"
        role="Backend Development & testing" 
        desc="The backend of this website is developed by Prisha Arora , she managed to write all the backend logic on her own. Prisha is an experienced developer and had also won previous hackathons she participated in. She benefited the team with her past experiences and provided helpful suggestions towards the development of this project ." 
        link="https://images.unsplash.com/photo-1726740817131-1878b295783b?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        git="https://github.com/prishaongithub">
        </Members>

<hr />
      {/* Sahiba */}
        <Members 
        name="Sahiba Kangra"
        role="Supply chain Development & content" 
        desc="Sahiba Kangra carried out the deveopment of the supply chain part of website , the page where users can order for plantes. Being able to integrate multiple functionalities in the page , Sahiba was able to achieve excellence in the output she delivered. Sahiba was also assigned the task to make content for multiple routes which she completed with perfection ." 
        link="https://images.unsplash.com/photo-1726741131440-76e1bd01e8d8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </Members>


      </div>
  

    </>
  );
};

export default Ourteam;
