import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Event from './components/Event';

function App() {
  return (
    <div>
      <h1>Bakeries in Idaho</h1>
      <div className='App'>
        <Event
          title='Janjou Patisserie'
          location='1754 W State St Boise, ID 83702'
          imgSrc='https://images.squarespace-cdn.com/content/v1/55404426e4b0c3785c38467d/1584467371007-3Y2JFDXDUXS6T8NBKELT/C78487AC-F95B-4985-ABD1-E715E6F5793B?format=1000w'
          desc='When you step inside of Janjou Patisserie you are transported to Europe.  You are surrounded by the best of everything: authentic, caring and unique team members, delicious pastries and desserts,  fresh ingredients and amazing coffee. Every day we strive to provide our guests with an exceptional experience at every opportunity. '
        />
        <Event
          title='Gastons Bakery'
          location='3651 W Overland Rd Boise, ID 83705'
          imgSrc='https://static.wixstatic.com/media/66c3c8_c3318d8173a749b6918209c772324ded~mv2.jpeg/v1/crop/x_60,y_0,w_511,h_1200/fill/w_460,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Mathieu_bread.jpeg'
          desc='Mathieu Choux arrived in Boise from Burgundy, France in 2001. He opened Le Café de Paris downtown, offering fresh croissants, breads, and a full daily dine-in menu. By popular demand from local restaurants, the Café expanded its wholesale baking options in 2006 to serve the local market. Mathieu closed the Café’s doors years later to focus solely on Gaston’s Bakery and serving much more of the Treasure Valley. The bakery is now located on the Bench and has developed into a national brand via countless community partners, food distributors, and Sur La Table.
  
  
  
  Contributing to local communities has always been a top priority for Mathieu and generates most of his daily operation. In the past few years, he decided to take the bakery to the next level and start working on the core of his field: flour. With a concern for gluten sensitivities and desire for holistic, healthy ingredients, Mathieu decided to install a mill and begin processing local wheat. He uses a specialized UNIFINE mill that pulverizes the wheat on impact, producing a high-quality, high-extraction, nutritious flour. Instead of over-processing and diluting the wheat germ, the impact mill process maintains the integrity of the flour, providing more fiber and flavor.'
        />
        <Event
          title='Granny Cs Bakery'
          location='5120 W Overland Rd Boise, ID 83705'
          imgSrc='https://s3-media0.fl.yelpcdn.com/bphoto/rLJOn04jLueFSxcetEUhyA/l.jpg'
          desc='Granny Cs Bakery is a family-owned and operated business in the Boise Area. We bake cakes, confections, pastries and granny rolls daily and from scratch. We also have freshly roasted coffee beans and create our own custom coffee blends.'
        />
        <Event
          title='Europe Delicious Bakery and Grocery'
          location='9958 W Fairview Ave Boise, ID 83704'
          imgSrc='https://s3-media0.fl.yelpcdn.com/bphoto/Diskie9D-2OfTal9-sT8XA/l.jpg'
          desc='Our vision of owning a European bakery and grocery started in 2001 in a leased space on Vista Ave. Mostly we wanted a place for all of our family and friends (old and new) to gather and thanks to their continued support, in 2005 we were able to expand by building and moving to our current location on Fairview Ave. More room meant bigger variety of European goodies, coffee shop, small deli and banquet hall for lease for those special occasions. We pride ourselves on our great and friendly customer service and invite you to stop by!'
        />
        <Event
          title='Wildflour Bakery'
          location='304 E 42nd St Garden City, ID 83714'
          imgSrc=''
          desc=''
        />
        <Event title='Twisted Sugar' location='' imgSrc='' desc='' />
        <Event
          title='Sunshine Spice Bakery and Cafe'
          location='10804 W Fairview Ave Ste 105 Boise, ID 83713'
          imgSrc='https://s3-media0.fl.yelpcdn.com/bphoto/xXUY6ZwMCb3SG2roHuJiuA/348s.jpg'
          desc='Since 1992, Wildflour Bakery has been a Boise area favorite delivering fresh baked cookies, scones, and muffins. In 2020 the family at Bigwood Bread bought the company because they love the way Wildflour does things. Now, in addition to the Boise location (shown here), there is a new Wildflour Café located in the heart of downtown Ketchum (shown above).'
        />
        <Event
          title='Flour Child'
          location='10668 W Overland Rd Boise, ID 83709'
          imgSrc='https://s3-media0.fl.yelpcdn.com/bphoto/9sO3hJmrZSHzpazqniupmA/348s.jpg'
          desc='Flour Child is a custom cake studio in Boise, Idaho. We specialize in custom cakes for all occasions: including weddings, birthdays, graduations, etc. Looking for some place fun to visit? Stop by Flour Childs store front, we have tarts, macarons, gf & vegan options along with made to order ice cream sandwiches! You select your cookies (or brownies) and your ice cream and we make your sandwich for you right then and there! We also have macaron ice cream sandwiches available with different custom flavors every month! We would love for you to stop by and experience Flour Child. Whether its for ice cream sandwiches, some macarons, tarts, cookies, or even to come in and order your next custom cake, we cant wait for you to visit and we hope to see you soon!'
        />
        <Event
          title='Certificed Kitchen + Bakery'
          location='1511 N 13th St Boise, ID 83702'
          imgSrc='https://cdn0.weddingwire.com/vendor/515414/3_2/640/jpg/1419327089089-10132735749525592281731747689256n.webp'
          desc='Certified Kitchen + Bakery opened the space formerly occupied by Certified Inc. Rug & Furniture Cleaners in Hyde Park. The restaurant is the second concept from Lizzy and David Rex, who successfully opened The Wylder in 2017. Breakfast and lunch is served counter-service-style, with additional bakery and catering options. The cozy space offers bar seating and bistro tables, but the take-away style menu allows Boisean’s to keep adventuring. The 52-year-old sourdough starter used for their pizza dough at The Wylder makes an appearance in the form of English muffins for stacked breakfast sandwiches. Lighter breakfast items (think chia seed puddings), baked goods (cookies and cakes), butcher-style sandwiches (pulled pork and brisket on fresh bread) and fresh salads are offered on a rotating basis. Take-and-bake meals like whole pot pies and enchiladas are also available.'
        />
        <Event
          title='Love Cakes Bakery'
          location='664 S Rivershore Ln Ste 164 Eagle, ID 83616'
          imgSrc='https://s3-media0.fl.yelpcdn.com/bphoto/XnKYU47BsIqbr01Zg2d_Qw/o.jpg'
          desc='From your wedding to your bridal shower, rehearsal dinners, and more let us help you celebrate your special day with our award winning cake and cupcake designs. Using only the highest quality ingredients we can customize your dessert for any theme or design to give your event your own personal touch. With a large variety of flavors, frostings and fillings to choose from you are guaranteed to satisfy your guests and make your special day memorable.'
        />
      </div>
    </div>
  );
}

export default App;
