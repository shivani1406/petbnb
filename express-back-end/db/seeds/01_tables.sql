-- Users table seeds here (Example)
INSERT INTO users (name,email,password,role,avatar_url) 
VALUES ('Shivani','shivani1406sharma@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars1.png'),
('Priyanka','priyanka.datti@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars2.png'),
('Najma','najmaduale1@gmail.com','hello','owner','express-back-end\public\avatars\images\avataaars3.png'),
('Harry','harry1@gmail.com','hello','guest','express-back-end\public\avatars\images\avataaars4.png');


INSERT INTO properties (owner_id,name,description,location,image,property_type,check_in_time,
  check_out_time,price_per_night,room_size,meal_plan,pampering_session,vet_visit,
  daily_hairbrushing,for_cat, for_dog)
  VALUES (1, 'Pet Oasis', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience','Toronto' ,'http://critterati.in/wp-content/uploads/2017/06/deluxe-room.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true), 
  (2, 'Lovely Pet Station', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience','Toronto', 'http://critterati.in/wp-content/uploads/2017/06/royal-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true),
  (1, 'Pet Boarding', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Toronto','http://critterati.in/wp-content/uploads/2017/06/junior-suite.jpg','home','13:00 pm','11:00 am',30,100,true, false,
  true, false, false, true),
  (1, 'Pet Heaven', 'Perfect getaway for your pet, we offer great accomodation and added services for your pet to have a great boarding experience', 'Toronto','http://critterati.in/wp-content/uploads/2017/06/standard-room-1.jpg','home','13:00 pm','11:00 am',30,100,true, false,
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
VALUES (1, 4);