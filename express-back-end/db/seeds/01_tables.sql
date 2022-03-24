-- Users table seeds here (Example)
INSERT INTO users (name,email,password,role,avatar_url) 
VALUES ('Shivani','shivani1406sharma@gmail.com','$2b$10$B9M2tz851vAzdGt5JUei2.tlqkqf.sSaFnxu/uogoNqM0mOd880rS','owner','https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('Priyanka','priyanka.datti@gmail.com','$2b$10$B9M2tz851vAzdGt5JUei2.tlqkqf.sSaFnxu/uogoNqM0mOd880rS','owner','https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('Najma','najmaduale1@gmail.com','$2b$10$B9M2tz851vAzdGt5JUei2.tlqkqf.sSaFnxu/uogoNqM0mOd880rS','owner','https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'),
('Harry','harry1@gmail.com','$2b$10$B9M2tz851vAzdGt5JUei2.tlqkqf.sSaFnxu/uogoNqM0mOd880rS','guest','https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');


INSERT INTO properties (owner_id,name,description,location,lat,lng,image,property_type,check_in_time,
  check_out_time,price_per_night,room_size,meal_plan,pampering_session,vet_visit,
  daily_hairbrushing,for_cat, for_dog)
  VALUES (1, 'Pet Oasis', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience','Toronto',43.73378619945733, -79.54355036202121 ,'http://critterati.in/wp-content/uploads/2017/06/deluxe-room.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (2, 'Lovely Pet Station', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience','Toronto',43.6960675133473, -79.51951777059713, 'http://critterati.in/wp-content/uploads/2017/06/royal-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true),
  (1, 'Pet Boarding', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Toronto',43.782884144224035, -79.46939265134121,'http://critterati.in/wp-content/uploads/2017/06/junior-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true),
  (1, 'Pet Heaven', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Toronto',43.706492155575845, -79.3128374843501,'http://critterati.in/wp-content/uploads/2017/06/standard-room-1.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (2, 'Pet Nation', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Mississauga',43.61906766440717, -79.62045465457825,'https://storage.googleapis.com/petbacker/images/blog/2019/petbnb-alternative-home-stay-to-pet-hotels.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (3, 'Curly Tales', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Brampton',43.762059633499575, -79.72825799325196,'https://thumbor.granitemedia.com/dog-resorts/GxVP9LfRzN7NCz9ZHoJuh4NXQnM=/800x600/filters:format(webp):quality(80)/granite-web-prod/8c/16/8c16ab6ac3b944549233de861a3c9fb7.jpeg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (3, 'Pet Lovers', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Brampton',43.68663413231295, -79.86009392334975,'https://thumbor.granitemedia.com/westlodge-cattery/KwAmtZmp6DYrhLnSYG-dv2WoUxE=/800x601/filters:format(webp):quality(80)/granite-web-prod/ba/b7/bab7e1aab90643cfbe1bae2994062445.jpeg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (2, 'Love of pets', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Brampton',43.76305144129385, -79.74473748451419,'https://thumbor.granitemedia.com/hounds-lounge/GMoX5d5DloRIx1rLoYBTE3VkBNo=/800x600/filters:format(webp):quality(80)/granite-web-prod/21/3f/213ff05d13df4a878ef59829acf5bebb.jpeg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true); 

INSERT INTO images (property_id, image_url)
VALUES (1, 'http://critterati.in/wp-content/uploads/2016/02/boarding-4.jpg'),
(1, 'http://critterati.in/wp-content/uploads/2016/02/boarding-1.jpg'),
(1, 'http://critterati.in/wp-content/uploads/2016/02/boarding-3.jpg');
INSERT INTO images (property_id, image_url)
VALUES (2, 'http://critterati.in/wp-content/uploads/2016/02/boarding-4.jpg'),
(2, 'http://critterati.in/wp-content/uploads/2016/02/boarding-6.jpg');
INSERT INTO images (property_id, image_url)
VALUES (3, 'http://critterati.in/wp-content/uploads/2016/02/day-care-1.jpg'),
(3, 'http://critterati.in/wp-content/uploads/2016/02/day-care-2.jpg'),
(3, 'http://critterati.in/wp-content/uploads/2016/02/day-care-banner-1.jpg');

INSERT INTO reservations (property_id, user_id)
VALUES (1, 4),
(2, 4),
(3, 4);

INSERT INTO ratings (property_id, user_id, rating, remark_title, remark)
VALUES (1, 4, 4, 'Very Nice Property', 'My pet had a great time at the property'),
(1, 4, 5, 'Very Nice Property', 'My pet had a great time at the property'),
(2, 4, 5, 'Excellent Property', 'I am very happy with the services');